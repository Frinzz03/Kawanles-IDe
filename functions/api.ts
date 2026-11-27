import { Hono } from "hono";
import { cors } from "hono/cors";
import { Pool } from "pg";
import { attachDatabasePool } from "@neon/functions";
import { S3Client, PutObjectCommand, GetObjectCommand, HeadBucketCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { createRemoteJWKSet, jwtVerify } from "jose";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  max: 5,
});
attachDatabasePool(pool);

const BUCKET = "assets";
const s3 = new S3Client({
  forcePathStyle: true,
});

let jwksCache: ReturnType<typeof createRemoteJWKSet> | null = null;
function getJwks() {
  if (!jwksCache) {
    const jwksUrl = process.env.NEON_AUTH_JWKS_URL;
    if (!jwksUrl) throw new Error("NEON_AUTH_JWKS_URL is not configured");
    jwksCache = createRemoteJWKSet(new URL(jwksUrl));
  }
  return jwksCache;
}

type AuthUser = {
  authUserId: string;
  email: string | null;
  name: string | null;
  profile: {
    id: string;
    auth_user_id: string;
    email: string | null;
    full_name: string;
    role: "teacher" | "student";
    is_active: boolean;
  } | null;
  studentProfile: {
    id: string;
    profile_id: string;
    student_code: string | null;
    school_name: string | null;
    notes: string | null;
  } | null;
};

async function authenticate(req: Request): Promise<AuthUser | null> {
  const authHeader = req.headers.get("authorization") || req.headers.get("Authorization");
  if (!authHeader || !authHeader.startsWith("Bearer ")) return null;
  const token = authHeader.slice(7).trim();
  if (!token) return null;

  try {
    const { payload } = await jwtVerify(token, getJwks());
    const authUserId = String(payload.sub || "");
    if (!authUserId) return null;

    let email = typeof payload.email === "string" ? payload.email : null;
    let name = typeof payload.name === "string" ? payload.name : null;

    if (!email || !name) {
      const authUserRes = await pool
        .query(`SELECT email, name FROM neon_auth."user" WHERE id::text = $1 LIMIT 1`, [authUserId])
        .catch(() => ({ rows: [] as any[] }));
      if (authUserRes.rows[0]) {
        email = email || authUserRes.rows[0].email || null;
        name = name || authUserRes.rows[0].name || null;
      }
    }

    const profRes = await pool.query(
      `SELECT id, auth_user_id, email, full_name, role, is_active FROM profiles WHERE auth_user_id = $1`,
      [authUserId]
    );
    const profile = profRes.rows[0] || null;

    // Backfill email in profiles if missing
    if (profile && !profile.email && email) {
      await pool
        .query(`UPDATE profiles SET email = $1 WHERE id = $2`, [email, profile.id])
        .catch(() => {});
      profile.email = email;
    }

    let studentProfile = null;
    if (profile && profile.role === "student") {
      const spRes = await pool.query(
        `SELECT id, profile_id, student_code, school_name, notes FROM student_profiles WHERE profile_id = $1`,
        [profile.id]
      );
      studentProfile = spRes.rows[0] || null;
    }

    return {
      authUserId,
      email,
      name,
      profile,
      studentProfile,
    };
  } catch {
    return null;
  }
}

async function signAssetUrl(storageKey: string): Promise<string> {
  return getSignedUrl(
    s3,
    new GetObjectCommand({ Bucket: BUCKET, Key: storageKey }),
    { expiresIn: 3600 }
  );
}

const app = new Hono();

app.use(
  "*",
  cors({
    origin: (origin) => origin || "*",
    allowMethods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

// ============================================================================
// 1. HEALTH CHECK (Postgres + Object Storage + Auth JWKS)
// ============================================================================
app.get("/", (c) =>
  c.json({
    service: "Web Modul Ajar Guru Les API",
    status: "ok",
    branch: process.env.NEON_BRANCH || "unknown",
  })
);

app.get("/health", async (c) => {
  try {
    const [tablesRes, subjectsRes, topicsRes] = await Promise.all([
      pool.query(
        `SELECT COUNT(*)::int AS count FROM information_schema.tables WHERE table_schema = 'public' AND table_type = 'BASE TABLE'`
      ),
      pool.query(`SELECT COUNT(*)::int AS count FROM subjects`),
      pool.query(`SELECT COUNT(*)::int AS count FROM topics`),
    ]);

    let storageOk = false;
    try {
      await s3.send(new HeadBucketCommand({ Bucket: BUCKET }));
      storageOk = true;
    } catch {
      storageOk = false;
    }

    return c.json({
      ok: true,
      branch: process.env.NEON_BRANCH || null,
      services: {
        postgres: true,
        auth: Boolean(process.env.NEON_AUTH_BASE_URL && process.env.NEON_AUTH_JWKS_URL),
        objectStorage: storageOk,
        functions: true,
      },
      stats: {
        tables: tablesRes.rows[0].count,
        subjects: subjectsRes.rows[0].count,
        topics: topicsRes.rows[0].count,
      },
    });
  } catch (err: any) {
    return c.json({ ok: false, error: err.message }, 500);
  }
});

// ============================================================================
// 2. AUTH & ONBOARDING (/me)
// ============================================================================
app.get("/me", async (c) => {
  const user = await authenticate(c.req.raw);
  if (!user) return c.json({ error: "Unauthorized" }, 401);

  let enrollments: any[] = [];
  if (user.studentProfile) {
    const enrRes = await pool.query(
      `SELECT se.id, se.status, se.subject_grade_mapping_id,
              s.code AS subject_code, s.name AS subject_name,
              g.grade_number, g.name AS grade_name, el.code AS level_code,
              p.code AS phase_code, sgm.learning_status
       FROM student_enrollments se
       JOIN subject_grade_mappings sgm ON sgm.id = se.subject_grade_mapping_id
       JOIN subjects s ON s.id = sgm.subject_id
       JOIN grades g ON g.id = sgm.grade_id
       JOIN education_levels el ON el.id = g.education_level_id
       LEFT JOIN phases p ON p.id = sgm.phase_id
       WHERE se.student_profile_id = $1 AND se.status = 'active'
       ORDER BY g.grade_number, s.name`,
      [user.studentProfile.id]
    );
    enrollments = enrRes.rows;
  }

  return c.json({
    authUserId: user.authUserId,
    email: user.email,
    name: user.name,
    needsOnboarding: !user.profile,
    profile: user.profile,
    studentProfile: user.studentProfile,
    enrollments,
  });
});

app.post("/me/onboarding", async (c) => {
  const user = await authenticate(c.req.raw);
  if (!user) return c.json({ error: "Unauthorized" }, 401);

  const body = await c.req.json();
  const fullName = String(body.full_name || user.name || user.email || "Pengguna").trim();
  const role = body.role === "teacher" ? "teacher" : "student";
  const gradeNumber = Number(body.grade_number || 4);
  const schoolName = body.school_name ? String(body.school_name).trim() : null;

  const client = await pool.connect();
  try {
    await client.query("BEGIN");

    const profRes = await client.query(
      `INSERT INTO profiles (auth_user_id, email, full_name, role)
       VALUES ($1, $2, $3, $4)
       ON CONFLICT (auth_user_id) DO UPDATE
       SET email = COALESCE(EXCLUDED.email, profiles.email),
           full_name = EXCLUDED.full_name,
           role = EXCLUDED.role,
           updated_at = NOW()
       RETURNING id, auth_user_id, email, full_name, role, is_active`,
      [user.authUserId, user.email, fullName, role]
    );
    const profile = profRes.rows[0];
    let studentProfile = null;

    if (role === "student") {
      const code = `SIS-${gradeNumber}-${profile.id.slice(0, 6).toUpperCase()}`;
      const spRes = await client.query(
        `INSERT INTO student_profiles (profile_id, student_code, school_name)
         VALUES ($1, $2, $3)
         ON CONFLICT (profile_id) DO UPDATE
         SET school_name = COALESCE(EXCLUDED.school_name, student_profiles.school_name),
             updated_at = NOW()
         RETURNING id, profile_id, student_code, school_name, notes`,
        [profile.id, code, schoolName]
      );
      studentProfile = spRes.rows[0];

      // Auto-enroll student into all active subjects available for their grade
      if (gradeNumber >= 1 && gradeNumber <= 9) {
        await client.query(
          `INSERT INTO student_enrollments (student_profile_id, subject_grade_mapping_id, status)
           SELECT $1, sgm.id, 'active'
           FROM subject_grade_mappings sgm
           JOIN grades g ON g.id = sgm.grade_id
           WHERE g.grade_number = $2 AND sgm.is_active = TRUE
           ON CONFLICT (student_profile_id, subject_grade_mapping_id) DO NOTHING`,
          [studentProfile.id, gradeNumber]
        );
      }
    }

    await client.query("COMMIT");
    return c.json({ ok: true, profile, studentProfile });
  } catch (err: any) {
    await client.query("ROLLBACK");
    return c.json({ error: err.message }, 500);
  } finally {
    client.release();
  }
});

// ============================================================================
// 3. CURRICULUM OVERVIEW & TOPICS
// ============================================================================
app.get("/curriculum/overview", async (c) => {
  const [levels, grades, phases, subjects, mappings, cpElements] = await Promise.all([
    pool.query(`SELECT id, code, name FROM education_levels ORDER BY code`),
    pool.query(`
      SELECT g.id, g.grade_number, g.name, el.code AS level_code
      FROM grades g
      JOIN education_levels el ON el.id = g.education_level_id
      ORDER BY g.grade_number
    `),
    pool.query(`SELECT id, code, name, description FROM phases ORDER BY code`),
    pool.query(`SELECT id, code, name, description, is_active FROM subjects WHERE is_active = TRUE ORDER BY name`),
    pool.query(`
      SELECT sgm.id, sgm.subject_id, sgm.grade_id, sgm.phase_id,
             sgm.learning_status, sgm.curriculum_note,
             s.code AS subject_code, s.name AS subject_name,
             g.grade_number, g.name AS grade_name, el.code AS level_code,
             p.code AS phase_code,
             (SELECT COUNT(*)::int FROM topics t WHERE t.subject_grade_mapping_id = sgm.id AND t.status != 'archived') AS topic_count,
             (SELECT COUNT(*)::int FROM topics t WHERE t.subject_grade_mapping_id = sgm.id AND t.status = 'published') AS published_topic_count
      FROM subject_grade_mappings sgm
      JOIN subjects s ON s.id = sgm.subject_id
      JOIN grades g ON g.id = sgm.grade_id
      JOIN education_levels el ON el.id = g.education_level_id
      LEFT JOIN phases p ON p.id = sgm.phase_id
      WHERE sgm.is_active = TRUE
      ORDER BY g.grade_number, s.name
    `),
    pool.query(`
      SELECT ce.id, ce.subject_id, ce.phase_id, ce.code, ce.name, ce.description, s.code AS subject_code
      FROM cp_elements ce
      JOIN subjects s ON s.id = ce.subject_id
      ORDER BY s.code, ce.code
    `),
  ]);

  return c.json({
    education_levels: levels.rows,
    grades: grades.rows,
    phases: phases.rows,
    subjects: subjects.rows,
    mappings: mappings.rows,
    cp_elements: cpElements.rows,
  });
});

app.get("/curriculum/mappings/:mappingId/topics", async (c) => {
  const user = await authenticate(c.req.raw);
  const isTeacher = user?.profile?.role === "teacher";
  const mappingId = c.req.param("mappingId");

  const mappingRes = await pool.query(
    `SELECT sgm.id, sgm.learning_status, sgm.curriculum_note,
            s.code AS subject_code, s.name AS subject_name,
            g.grade_number, g.name AS grade_name, el.code AS level_code,
            p.code AS phase_code
     FROM subject_grade_mappings sgm
     JOIN subjects s ON s.id = sgm.subject_id
     JOIN grades g ON g.id = sgm.grade_id
     JOIN education_levels el ON el.id = g.education_level_id
     LEFT JOIN phases p ON p.id = sgm.phase_id
     WHERE sgm.id = $1`,
    [mappingId]
  );
  if (!mappingRes.rows[0]) return c.json({ error: "Pemetaan mapel tidak ditemukan" }, 404);

  const statusClause = isTeacher ? `t.status != 'archived'` : `t.status = 'published'`;
  const topicsRes = await pool.query(
    `SELECT t.id, t.code, t.title, t.description, t.sequence_number,
            t.curriculum_note, t.local_context, t.status, t.updated_at
     FROM topics t
     WHERE t.subject_grade_mapping_id = $1 AND ${statusClause}
     ORDER BY t.sequence_number`,
    [mappingId]
  );

  const topicIds = topicsRes.rows.map((t) => t.id);
  let subtopicsByTopic: Record<string, any[]> = {};

  if (topicIds.length > 0) {
    const subStatusClause = isTeacher ? `st.status != 'archived'` : `st.status = 'published'`;
    const subRes = await pool.query(
      `SELECT st.id, st.topic_id, st.code, st.title, st.description,
              st.sequence_number, st.status,
              (SELECT COUNT(*)::int FROM materials m WHERE m.subtopic_id = st.id AND m.status != 'archived') AS material_count,
              (SELECT COUNT(*)::int FROM activities a WHERE a.subtopic_id = st.id AND a.status != 'archived') AS activity_count,
              (SELECT vr.status FROM validation_records vr WHERE vr.subtopic_id = st.id ORDER BY vr.created_at DESC LIMIT 1) AS validation_status
       FROM subtopics st
       WHERE st.topic_id = ANY($1::uuid[]) AND ${subStatusClause}
       ORDER BY st.sequence_number`,
      [topicIds]
    );

    let progressMap: Record<string, string> = {};
    if (user?.studentProfile) {
      const progRes = await pool.query(
        `SELECT subtopic_id, progress_status FROM student_progress WHERE student_profile_id = $1`,
        [user.studentProfile.id]
      );
      for (const row of progRes.rows) {
        progressMap[row.subtopic_id] = row.progress_status;
      }
    }

    for (const st of subRes.rows) {
      if (!subtopicsByTopic[st.topic_id]) subtopicsByTopic[st.topic_id] = [];
      subtopicsByTopic[st.topic_id].push({
        ...st,
        progress_status: progressMap[st.id] || "not_started",
      });
    }
  }

  const topics = topicsRes.rows.map((t) => ({
    ...t,
    subtopics: subtopicsByTopic[t.id] || [],
  }));

  return c.json({ mapping: mappingRes.rows[0], topics });
});

// ============================================================================
// 4. SUBTOPIC DETAIL, MATERIALS & MEDIA PRESIGNED URLS
// ============================================================================
app.get("/subtopics/:subtopicId/detail", async (c) => {
  const user = await authenticate(c.req.raw);
  const isTeacher = user?.profile?.role === "teacher";
  const subtopicId = c.req.param("subtopicId");

  const stRes = await pool.query(
    `SELECT st.id, st.code, st.title, st.description, st.sequence_number,
            st.curriculum_note, st.local_context, st.status,
            t.id AS topic_id, t.code AS topic_code, t.title AS topic_title,
            sgm.id AS mapping_id, s.code AS subject_code, s.name AS subject_name,
            g.grade_number, g.name AS grade_name, p.code AS phase_code
     FROM subtopics st
     JOIN topics t ON t.id = st.topic_id
     JOIN subject_grade_mappings sgm ON sgm.id = t.subject_grade_mapping_id
     JOIN subjects s ON s.id = sgm.subject_id
     JOIN grades g ON g.id = sgm.grade_id
     LEFT JOIN phases p ON p.id = sgm.phase_id
     WHERE st.id = $1`,
    [subtopicId]
  );
  if (!stRes.rows[0]) return c.json({ error: "Submateri tidak ditemukan" }, 404);

  const matClause = isTeacher ? `status != 'archived'` : `status = 'published'`;
  const actClause = isTeacher ? `a.status != 'archived'` : `a.status = 'published'`;

  const [objRes, matRes, actRes, valRes] = await Promise.all([
    pool.query(
      `SELECT id, objective_code, description, sequence_number
       FROM learning_objectives WHERE subtopic_id = $1 ORDER BY sequence_number`,
      [subtopicId]
    ),
    pool.query(
      `SELECT id, title, content, sequence_number, status, updated_at
       FROM materials WHERE subtopic_id = $1 AND ${matClause} ORDER BY sequence_number`,
      [subtopicId]
    ),
    pool.query(
      `SELECT a.id, a.title, a.description, a.activity_type, a.instructions,
              a.time_limit_minutes, a.passing_score, a.max_attempts, a.status,
              (SELECT COUNT(*)::int FROM activity_questions aq WHERE aq.activity_id = a.id) AS question_count
       FROM activities a
       WHERE a.subtopic_id = $1 AND ${actClause}
       ORDER BY a.created_at`,
      [subtopicId]
    ),
    pool.query(
      `SELECT id, reviewer_name, status, review_notes, reviewed_at, created_at
       FROM validation_records WHERE subtopic_id = $1 ORDER BY created_at DESC LIMIT 5`,
      [subtopicId]
    ),
  ]);

  // Attach presigned URLs for media assets belonging to materials
  const matIds = matRes.rows.map((m) => m.id);
  let mediaByMaterial: Record<string, any[]> = {};
  if (matIds.length > 0) {
    const mediaRes = await pool.query(
      `SELECT id, material_id, storage_key, file_name, media_type, mime_type, file_size, alt_text, sequence_number
       FROM media_assets WHERE material_id = ANY($1::uuid[]) ORDER BY sequence_number`,
      [matIds]
    );
    for (const asset of mediaRes.rows) {
      const signedUrl = await signAssetUrl(asset.storage_key).catch(() => null);
      if (!mediaByMaterial[asset.material_id]) mediaByMaterial[asset.material_id] = [];
      mediaByMaterial[asset.material_id].push({ ...asset, url: signedUrl });
    }
  }

  let progress = null;
  let attempts: any[] = [];
  if (user?.studentProfile) {
    const progRes = await pool.query(
      `SELECT progress_status, last_accessed_at, completed_at
       FROM student_progress WHERE student_profile_id = $1 AND subtopic_id = $2`,
      [user.studentProfile.id, subtopicId]
    );
    progress = progRes.rows[0] || { progress_status: "not_started" };

    if (actRes.rows.length > 0) {
      const attRes = await pool.query(
        `SELECT id, activity_id, attempt_number, score, max_score, status, submitted_at
         FROM attempts
         WHERE student_profile_id = $1 AND activity_id = ANY($2::uuid[])
         ORDER BY started_at DESC`,
        [user.studentProfile.id, actRes.rows.map((a) => a.id)]
      );
      attempts = attRes.rows;
    }
  }

  return c.json({
    subtopic: stRes.rows[0],
    learning_objectives: objRes.rows,
    materials: matRes.rows.map((m) => ({
      ...m,
      media: mediaByMaterial[m.id] || [],
    })),
    activities: actRes.rows,
    validation_records: valRes.rows,
    progress,
    attempts,
  });
});

// ============================================================================
// 5. ACTIVITIES & STUDENT PRACTICE / AUTO-GRADING
// ============================================================================
app.get("/activities/:activityId", async (c) => {
  const user = await authenticate(c.req.raw);
  if (!user || !user.profile) return c.json({ error: "Unauthorized" }, 401);
  const isTeacher = user.profile.role === "teacher";
  const activityId = c.req.param("activityId");

  const actRes = await pool.query(
    `SELECT a.*, st.title AS subtopic_title, t.title AS topic_title
     FROM activities a
     LEFT JOIN subtopics st ON st.id = a.subtopic_id
     LEFT JOIN topics t ON t.id = COALESCE(a.topic_id, st.topic_id)
     WHERE a.id = $1`,
    [activityId]
  );
  if (!actRes.rows[0]) return c.json({ error: "Aktivitas tidak ditemukan" }, 404);

  const qRes = await pool.query(
    `SELECT q.id, q.question_code, q.question_type, q.question_text,
            q.question_content, q.difficulty, q.explanation,
            aq.sequence_number, aq.score_weight
     FROM activity_questions aq
     JOIN questions q ON q.id = aq.question_id
     WHERE aq.activity_id = $1
     ORDER BY aq.sequence_number`,
    [activityId]
  );

  const qIds = qRes.rows.map((q) => q.id);
  let optionsByQ: Record<string, any[]> = {};
  if (qIds.length > 0) {
    const optRes = await pool.query(
      `SELECT id, question_id, option_label, option_text, is_correct, sequence_number
       FROM question_options
       WHERE question_id = ANY($1::uuid[])
       ORDER BY sequence_number`,
      [qIds]
    );
    for (const opt of optRes.rows) {
      if (!optionsByQ[opt.question_id]) optionsByQ[opt.question_id] = [];
      optionsByQ[opt.question_id].push(
        isTeacher
          ? opt
          : {
              id: opt.id,
              option_label: opt.option_label,
              option_text: opt.option_text,
              sequence_number: opt.sequence_number,
            }
      );
    }
  }

  return c.json({
    activity: actRes.rows[0],
    questions: qRes.rows.map((q) => ({
      id: q.id,
      question_code: q.question_code,
      question_type: q.question_type,
      question_text: q.question_text,
      question_content: q.question_content,
      difficulty: q.difficulty,
      sequence_number: q.sequence_number,
      score_weight: Number(q.score_weight),
      explanation: isTeacher ? q.explanation : undefined,
      options: optionsByQ[q.id] || [],
    })),
  });
});

app.post("/student/progress", async (c) => {
  const user = await authenticate(c.req.raw);
  if (!user?.studentProfile) return c.json({ error: "Hanya untuk siswa" }, 403);

  const body = await c.req.json();
  const subtopicId = body.subtopic_id;
  const status = ["not_started", "in_progress", "completed"].includes(body.progress_status)
    ? body.progress_status
    : "in_progress";

  const res = await pool.query(
    `INSERT INTO student_progress (student_profile_id, subtopic_id, progress_status, last_accessed_at, completed_at)
     VALUES ($1, $2, $3, NOW(), CASE WHEN $3 = 'completed' THEN NOW() ELSE NULL END)
     ON CONFLICT (student_profile_id, subtopic_id) DO UPDATE
     SET progress_status = CASE
           WHEN student_progress.progress_status = 'completed' THEN 'completed'
           ELSE EXCLUDED.progress_status
         END,
         last_accessed_at = NOW(),
         completed_at = COALESCE(student_progress.completed_at, EXCLUDED.completed_at),
         updated_at = NOW()
     RETURNING *`,
    [user.studentProfile.id, subtopicId, status]
  );

  return c.json({ ok: true, progress: res.rows[0] });
});

app.post("/student/activities/:activityId/submit", async (c) => {
  const user = await authenticate(c.req.raw);
  if (!user?.studentProfile) return c.json({ error: "Hanya untuk siswa" }, 403);

  const activityId = c.req.param("activityId");
  const body = await c.req.json();
  const submittedAnswers: Array<{
    question_id: string;
    selected_option_id?: string | null;
    answer_text?: string | null;
  }> = Array.isArray(body.answers) ? body.answers : [];

  const actRes = await pool.query(`SELECT * FROM activities WHERE id = $1`, [activityId]);
  const activity = actRes.rows[0];
  if (!activity) return c.json({ error: "Aktivitas tidak ditemukan" }, 404);

  // Check attempt number & max_attempts
  const prevRes = await pool.query(
    `SELECT COALESCE(MAX(attempt_number), 0)::int AS last_attempt
     FROM attempts WHERE activity_id = $1 AND student_profile_id = $2`,
    [activityId, user.studentProfile.id]
  );
  const nextAttempt = prevRes.rows[0].last_attempt + 1;
  if (activity.max_attempts && nextAttempt > activity.max_attempts) {
    return c.json({ error: `Batas maksimal percobaan (${activity.max_attempts}x) sudah tercapai.` }, 400);
  }

  const qRes = await pool.query(
    `SELECT q.id, q.question_type, q.question_text, q.explanation, aq.score_weight
     FROM activity_questions aq
     JOIN questions q ON q.id = aq.question_id
     WHERE aq.activity_id = $1
     ORDER BY aq.sequence_number`,
    [activityId]
  );
  const optRes = await pool.query(
    `SELECT id, question_id, option_label, option_text, is_correct
     FROM question_options
     WHERE question_id = ANY($1::uuid[])
     ORDER BY sequence_number`,
    [qRes.rows.map((q) => q.id)]
  );

  const optionsByQ: Record<string, any[]> = {};
  for (const o of optRes.rows) {
    if (!optionsByQ[o.question_id]) optionsByQ[o.question_id] = [];
    optionsByQ[o.question_id].push(o);
  }

  const ansMap = new Map(submittedAnswers.map((a) => [a.question_id, a]));
  let totalScore = 0;
  let maxScore = 0;
  let hasManualQuestion = false;
  const review: any[] = [];

  const client = await pool.connect();
  try {
    await client.query("BEGIN");

    const attRes = await client.query(
      `INSERT INTO attempts (activity_id, student_profile_id, attempt_number, status, started_at, submitted_at)
       VALUES ($1, $2, $3, 'submitted', NOW(), NOW())
       RETURNING id`,
      [activityId, user.studentProfile.id, nextAttempt]
    );
    const attemptId = attRes.rows[0].id;

    for (const q of qRes.rows) {
      const weight = Number(q.score_weight);
      maxScore += weight;
      const ans = ansMap.get(q.id);
      const qOptions = optionsByQ[q.id] || [];
      const correctOpt = qOptions.find((o) => o.is_correct);

      let isCorrect: boolean | null = null;
      let earned = 0;

      if (q.question_type === "multiple_choice") {
        isCorrect = Boolean(ans?.selected_option_id && correctOpt && ans.selected_option_id === correctOpt.id);
        earned = isCorrect ? weight : 0;
        totalScore += earned;
      } else {
        hasManualQuestion = true;
      }

      const snapshot = {
        question_text: q.question_text,
        question_type: q.question_type,
        options: qOptions.map((o) => ({
          id: o.id,
          label: o.option_label,
          text: o.option_text,
        })),
      };

      await client.query(
        `INSERT INTO attempt_answers (
           attempt_id, question_id, selected_option_id, answer_text,
           question_snapshot, is_correct, score, answered_at
         )
         VALUES ($1, $2, $3, $4, $5, $6, $7, NOW())`,
        [
          attemptId,
          q.id,
          ans?.selected_option_id || null,
          ans?.answer_text || null,
          JSON.stringify(snapshot),
          isCorrect,
          isCorrect === null ? null : earned,
        ]
      );

      review.push({
        question_id: q.id,
        question_text: q.question_text,
        selected_option_id: ans?.selected_option_id || null,
        correct_option_id: correctOpt?.id || null,
        correct_option_label: correctOpt?.option_label || null,
        correct_option_text: correctOpt?.option_text || null,
        is_correct: isCorrect,
        earned_score: earned,
        max_score: weight,
        explanation: q.explanation,
      });
    }

    const finalStatus = hasManualQuestion ? "submitted" : "graded";
    const percentage = maxScore > 0 ? Math.round((totalScore / maxScore) * 10000) / 100 : 0;

    await client.query(
      `UPDATE attempts
       SET score = $1, max_score = $2, status = $3,
           graded_at = CASE WHEN $3 = 'graded' THEN NOW() ELSE NULL END
       WHERE id = $4`,
      [totalScore, maxScore, finalStatus, attemptId]
    );

    if (activity.subtopic_id) {
      const passed = !activity.passing_score || percentage >= Number(activity.passing_score);
      await client.query(
        `INSERT INTO student_progress (student_profile_id, subtopic_id, progress_status, last_accessed_at, completed_at)
         VALUES ($1, $2, $3, NOW(), CASE WHEN $3 = 'completed' THEN NOW() ELSE NULL END)
         ON CONFLICT (student_profile_id, subtopic_id) DO UPDATE
         SET progress_status = CASE
               WHEN student_progress.progress_status = 'completed' THEN 'completed'
               ELSE EXCLUDED.progress_status
             END,
             last_accessed_at = NOW(),
             completed_at = COALESCE(student_progress.completed_at, EXCLUDED.completed_at),
             updated_at = NOW()`,
        [user.studentProfile.id, activity.subtopic_id, passed ? "completed" : "in_progress"]
      );
    }

    await client.query("COMMIT");

    return c.json({
      ok: true,
      attempt_id: attemptId,
      attempt_number: nextAttempt,
      score: totalScore,
      max_score: maxScore,
      percentage,
      passing_score: activity.passing_score ? Number(activity.passing_score) : null,
      passed: !activity.passing_score || percentage >= Number(activity.passing_score),
      status: finalStatus,
      review,
    });
  } catch (err: any) {
    await client.query("ROLLBACK");
    return c.json({ error: err.message }, 500);
  } finally {
    client.release();
  }
});

// ============================================================================
// 6. STUDENT DASHBOARD
// ============================================================================
app.get("/student/dashboard", async (c) => {
  const user = await authenticate(c.req.raw);
  if (!user?.studentProfile) return c.json({ error: "Hanya untuk siswa" }, 403);

  const [enrollmentsRes, lastSubRes, attemptsRes] = await Promise.all([
    pool.query(
      `SELECT se.subject_grade_mapping_id AS mapping_id,
              s.code AS subject_code, s.name AS subject_name,
              g.grade_number, g.name AS grade_name, el.code AS level_code,
              p.code AS phase_code, sgm.learning_status,
              (SELECT COUNT(*)::int
               FROM subtopics st JOIN topics t ON t.id = st.topic_id
               WHERE t.subject_grade_mapping_id = sgm.id AND t.status = 'published' AND st.status = 'published') AS total_subtopics,
              (SELECT COUNT(*)::int
               FROM student_progress sp
               JOIN subtopics st ON st.id = sp.subtopic_id
               JOIN topics t ON t.id = st.topic_id
               WHERE sp.student_profile_id = $1 AND t.subject_grade_mapping_id = sgm.id AND sp.progress_status = 'completed') AS completed_subtopics
       FROM student_enrollments se
       JOIN subject_grade_mappings sgm ON sgm.id = se.subject_grade_mapping_id
       JOIN subjects s ON s.id = sgm.subject_id
       JOIN grades g ON g.id = sgm.grade_id
       JOIN education_levels el ON el.id = g.education_level_id
       LEFT JOIN phases p ON p.id = sgm.phase_id
       WHERE se.student_profile_id = $1 AND se.status = 'active'
       ORDER BY s.name`,
      [user.studentProfile.id]
    ),
    pool.query(
      `SELECT sp.subtopic_id, sp.progress_status, sp.last_accessed_at,
              st.title AS subtopic_title, t.title AS topic_title,
              s.name AS subject_name, s.code AS subject_code, g.name AS grade_name
       FROM student_progress sp
       JOIN subtopics st ON st.id = sp.subtopic_id
       JOIN topics t ON t.id = st.topic_id
       JOIN subject_grade_mappings sgm ON sgm.id = t.subject_grade_mapping_id
       JOIN subjects s ON s.id = sgm.subject_id
       JOIN grades g ON g.id = sgm.grade_id
       WHERE sp.student_profile_id = $1
       ORDER BY sp.last_accessed_at DESC NULLS LAST
       LIMIT 1`,
      [user.studentProfile.id]
    ),
    pool.query(
      `SELECT att.id, att.attempt_number, att.score, att.max_score, att.status, att.submitted_at,
              a.title AS activity_title, a.activity_type, a.passing_score,
              st.title AS subtopic_title, s.name AS subject_name
       FROM attempts att
       JOIN activities a ON a.id = att.activity_id
       LEFT JOIN subtopics st ON st.id = a.subtopic_id
       LEFT JOIN topics t ON t.id = COALESCE(a.topic_id, st.topic_id)
       LEFT JOIN subject_grade_mappings sgm ON sgm.id = COALESCE(a.subject_grade_mapping_id, t.subject_grade_mapping_id)
       LEFT JOIN subjects s ON s.id = sgm.subject_id
       WHERE att.student_profile_id = $1
       ORDER BY att.submitted_at DESC NULLS LAST
       LIMIT 10`,
      [user.studentProfile.id]
    ),
  ]);

  return c.json({
    student: {
      full_name: user.profile?.full_name,
      ...user.studentProfile,
    },
    enrollments: enrollmentsRes.rows,
    last_accessed: lastSubRes.rows[0] || null,
    recent_attempts: attemptsRes.rows,
  });
});

// ============================================================================
// 7. TEACHER MANAGEMENT ROUTES (Role-protected: teacher only)
// ============================================================================
async function requireTeacher(c: any): Promise<AuthUser | Response> {
  const user = await authenticate(c.req.raw);
  if (!user || !user.profile) return c.json({ error: "Unauthorized" }, 401);
  if (user.profile.role !== "teacher") return c.json({ error: "Akses khusus guru" }, 403);
  return user;
}

app.get("/teacher/stats", async (c) => {
  const auth = await requireTeacher(c);
  if (auth instanceof Response) return auth;

  const [topics, subtopics, materials, questions, students, attempts] = await Promise.all([
    pool.query(`SELECT COUNT(*)::int AS count FROM topics WHERE status != 'archived'`),
    pool.query(`SELECT COUNT(*)::int AS count FROM subtopics WHERE status != 'archived'`),
    pool.query(`SELECT COUNT(*)::int AS count FROM materials WHERE status != 'archived'`),
    pool.query(`SELECT COUNT(*)::int AS count FROM questions`),
    pool.query(`SELECT COUNT(*)::int AS count FROM student_profiles`),
    pool.query(`SELECT COUNT(*)::int AS count FROM attempts`),
  ]);

  return c.json({
    topics: topics.rows[0].count,
    subtopics: subtopics.rows[0].count,
    materials: materials.rows[0].count,
    questions: questions.rows[0].count,
    students: students.rows[0].count,
    attempts: attempts.rows[0].count,
  });
});

app.post("/teacher/topics", async (c) => {
  const auth = await requireTeacher(c);
  if (auth instanceof Response) return auth;

  const body = await c.req.json();
  const { subject_grade_mapping_id, title, description, curriculum_note, local_context, status } = body;
  if (!subject_grade_mapping_id || !title) {
    return c.json({ error: "subject_grade_mapping_id dan title wajib diisi" }, 400);
  }

  const seqRes = await pool.query(
    `SELECT COALESCE(MAX(sequence_number), 0)::int + 1 AS next_seq
     FROM topics WHERE subject_grade_mapping_id = $1`,
    [subject_grade_mapping_id]
  );
  const nextSeq = Number(body.sequence_number || seqRes.rows[0].next_seq);

  const res = await pool.query(
    `INSERT INTO topics (subject_grade_mapping_id, code, title, description, sequence_number, curriculum_note, local_context, status)
     VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
     RETURNING *`,
    [
      subject_grade_mapping_id,
      body.code || null,
      String(title).trim(),
      description || null,
      nextSeq,
      curriculum_note || null,
      local_context || null,
      status || "published",
    ]
  );
  return c.json({ ok: true, topic: res.rows[0] }, 201);
});

app.patch("/teacher/topics/:id", async (c) => {
  const auth = await requireTeacher(c);
  if (auth instanceof Response) return auth;
  const id = c.req.param("id");
  const body = await c.req.json();

  const res = await pool.query(
    `UPDATE topics
     SET title = COALESCE($1, title),
         description = COALESCE($2, description),
         status = COALESCE($3, status),
         local_context = COALESCE($4, local_context),
         curriculum_note = COALESCE($5, curriculum_note)
     WHERE id = $6
     RETURNING *`,
    [body.title ?? null, body.description ?? null, body.status ?? null, body.local_context ?? null, body.curriculum_note ?? null, id]
  );
  if (!res.rows[0]) return c.json({ error: "Bab tidak ditemukan" }, 404);
  return c.json({ ok: true, topic: res.rows[0] });
});

app.post("/teacher/subtopics", async (c) => {
  const auth = await requireTeacher(c);
  if (auth instanceof Response) return auth;

  const body = await c.req.json();
  const { topic_id, title, description, status, learning_objectives } = body;
  if (!topic_id || !title) return c.json({ error: "topic_id dan title wajib diisi" }, 400);

  const seqRes = await pool.query(
    `SELECT COALESCE(MAX(sequence_number), 0)::int + 1 AS next_seq FROM subtopics WHERE topic_id = $1`,
    [topic_id]
  );
  const nextSeq = Number(body.sequence_number || seqRes.rows[0].next_seq);

  const res = await pool.query(
    `INSERT INTO subtopics (topic_id, code, title, description, sequence_number, status)
     VALUES ($1, $2, $3, $4, $5, $6)
     RETURNING *`,
    [topic_id, body.code || null, String(title).trim(), description || null, nextSeq, status || "published"]
  );
  const subtopic = res.rows[0];

  if (Array.isArray(learning_objectives)) {
    for (let i = 0; i < learning_objectives.length; i++) {
      const desc = String(learning_objectives[i] || "").trim();
      if (!desc) continue;
      await pool.query(
        `INSERT INTO learning_objectives (subtopic_id, description, sequence_number)
         VALUES ($1, $2, $3) ON CONFLICT DO NOTHING`,
        [subtopic.id, desc, i + 1]
      );
    }
  }

  return c.json({ ok: true, subtopic }, 201);
});

app.post("/teacher/materials", async (c) => {
  const auth = await requireTeacher(c);
  if (auth instanceof Response) return auth;

  const body = await c.req.json();
  const { subtopic_id, title, content, status } = body;
  if (!subtopic_id || !title) return c.json({ error: "subtopic_id dan title wajib diisi" }, 400);

  const seqRes = await pool.query(
    `SELECT COALESCE(MAX(sequence_number), 0)::int + 1 AS next_seq FROM materials WHERE subtopic_id = $1`,
    [subtopic_id]
  );

  const res = await pool.query(
    `INSERT INTO materials (subtopic_id, title, content, sequence_number, status, created_by)
     VALUES ($1, $2, $3, $4, $5, $6)
     RETURNING *`,
    [
      subtopic_id,
      String(title).trim(),
      JSON.stringify(Array.isArray(content) ? content : []),
      seqRes.rows[0].next_seq,
      status || "published",
      auth.profile!.id,
    ]
  );
  return c.json({ ok: true, material: res.rows[0] }, 201);
});

app.patch("/teacher/materials/:id", async (c) => {
  const auth = await requireTeacher(c);
  if (auth instanceof Response) return auth;

  const id = c.req.param("id");
  const body = await c.req.json();
  const res = await pool.query(
    `UPDATE materials
     SET title = COALESCE($1, title),
         content = COALESCE($2::jsonb, content),
         status = COALESCE($3, status)
     WHERE id = $4
     RETURNING *`,
    [
      body.title ?? null,
      body.content !== undefined ? JSON.stringify(body.content) : null,
      body.status ?? null,
      id,
    ]
  );
  if (!res.rows[0]) return c.json({ error: "Materi tidak ditemukan" }, 404);
  return c.json({ ok: true, material: res.rows[0] });
});

app.delete("/teacher/materials/:id", async (c) => {
  const auth = await requireTeacher(c);
  if (auth instanceof Response) return auth;
  const id = c.req.param("id");
  await pool.query(`UPDATE materials SET status = 'archived' WHERE id = $1`, [id]);
  return c.json({ ok: true });
});

// 1-Click Generator: Draf Materi + 4 Soal Pilihan Ganda (AI Gemini gratis atau Template Instan)
app.post("/teacher/subtopics/:subtopicId/generate-draft", async (c) => {
  const auth = await requireTeacher(c);
  if (auth instanceof Response) return auth;

  const subtopicId = c.req.param("subtopicId");
  const body = await c.req.json().catch(() => ({}));
  const apiKey = String(body.gemini_api_key || process.env.GEMINI_API_KEY || "").trim();

  const stRes = await pool.query(
    `SELECT st.id, st.code, st.title, st.description,
            t.id AS topic_id, t.title AS topic_title, t.description AS topic_desc, t.local_context,
            sgm.id AS sgm_id, sgm.learning_status,
            s.code AS subject_code, s.name AS subject_name,
            g.grade_number, g.name AS grade_name, p.code AS phase_code
     FROM subtopics st
     JOIN topics t ON t.id = st.topic_id
     JOIN subject_grade_mappings sgm ON sgm.id = t.subject_grade_mapping_id
     JOIN subjects s ON s.id = sgm.subject_id
     JOIN grades g ON g.id = sgm.grade_id
     LEFT JOIN phases p ON p.id = sgm.phase_id
     WHERE st.id = $1`,
    [subtopicId]
  );
  const info = stRes.rows[0];
  if (!info) return c.json({ error: "Submateri tidak ditemukan" }, 404);

  let generated: {
    materialTitle: string;
    objectives: string[];
    blocks: any[];
    activityTitle: string;
    questions: Array<{ text: string; opts: string[]; ans: number; exp: string }>;
  } | null = null;
  let mode: "gemini_ai" | "template" = "template";
  let usedModel = "";

  if (apiKey) {
    try {
      const prompt = `Kamu adalah penulis modul ajar profesional & guru les senior SD-SMP di Gresik, Jawa Timur (Kurikulum Merdeka).
Buatkan MODUL AJAR LENGKAP, MENDALAM, DAN SIAP PAKAI MENGAJAR (bukan ringkasan pendek!) untuk:
- Mata Pelajaran: ${info.subject_name} (${info.subject_code})
- Kelas: ${info.grade_name} ${info.phase_code ? `(Fase ${info.phase_code})` : "(Pengayaan)"}
- Bab: ${info.topic_title}
- Submateri: ${info.title}
${info.local_context ? `- Konteks lokal: ${info.local_context}` : "- Konteks lokal: Gresik daratan bila relevan (tanpa mengarang fakta sejarah)"}

Syarat kualitas wajib:
1. Penjelasan materi harus MENDALAM, runtut, jelas, dan cocok untuk guru mengajar langsung maupun siswa belajar mandiri (minimal 2-3 bagian pembahasan).
2. Sertakan tabel rangkuman/perbandingan jika relevan, kotak kaidah/rumus penting, minimal 2 contoh soal bertingkat (dasar & cerita/penerapan) dengan langkah penyelesaian langkah-demi-langkah, kesalahan umum siswa (miskonsepsi), dan catatan panduan mengajar untuk guru les.
3. Buat 6 soal latihan pilihan ganda bertingkat (2 basic, 2 intermediate, 2 advanced) lengkap dengan pembahasan yang benar-benar menjelaskan alasannya.

Kembalikan HANYA JSON valid (tanpa markdown code fence) dengan struktur persis ini:
{
  "materialTitle": "Judul modul ajar yang jelas dan menarik",
  "objectives": ["Tujuan pembelajaran 1", "Tujuan pembelajaran 2", "Tujuan pembelajaran 3"],
  "blocks": [
    {"type": "heading", "text": "1. Konsep Dasar ..."},
    {"type": "paragraph", "text": "Penjelasan konsep yang kaya, runtut, dan mudah dicerna siswa ${info.grade_name} (3-5 kalimat)."},
    {"type": "formula", "title": "Rumus / Kaidah Utama", "text": "Rumus atau kaidah inti yang wajib dikuasai siswa."},
    {"type": "heading", "text": "2. Pendalaman Materi & Perbandingan"},
    {"type": "paragraph", "text": "Uraian lanjutan yang memperdalam pemahaman siswa (3-5 kalimat)."},
    {"type": "table", "title": "Tabel Ringkasan", "headers": ["Kolom 1", "Kolom 2", "Contoh"], "rows": [["Isi 1", "Isi 2", "Contoh 1"], ["Isi 3", "Isi 4", "Contoh 2"]]},
    {"type": "list", "title": "Langkah / Poin Penting", "items": ["Langkah 1 ...", "Langkah 2 ...", "Langkah 3 ..."]},
    {"type": "worked_example", "level": "Dasar", "question": "Soal contoh 1 ...", "steps": ["Langkah 1: ...", "Langkah 2: ..."], "answer": "Jawaban akhir contoh 1"},
    {"type": "worked_example", "level": "Penerapan / Cerita", "question": "Soal cerita/penerapan (konteks sehari-hari/Gresik bila cocok) ...", "steps": ["Langkah 1: ...", "Langkah 2: ..."], "answer": "Jawaban akhir contoh 2"},
    {"type": "misconception", "title": "Kesalahan yang Sering Terjadi", "text": "Jelaskan miskonsepsi yang sering dialami siswa dan cara meluruskannya."},
    {"type": "tip", "text": "Tips cepat atau cara mudah mengingat materi ini."},
    {"type": "teacher_note", "text": "Panduan singkat untuk guru les: cara membuka materi, benda peraga/pertanyaan pancingan, dan cara mengecek pemahaman siswa."}
  ],
  "activityTitle": "Latihan Pemahaman: ${info.title}",
  "questions": [
    {"text": "Soal 1 (dasar)...", "difficulty": "basic", "opts": ["A...", "B...", "C...", "D..."], "ans": 0, "exp": "Pembahasan rinci soal 1."},
    {"text": "Soal 2 (dasar)...", "difficulty": "basic", "opts": ["A...", "B...", "C...", "D..."], "ans": 1, "exp": "Pembahasan rinci soal 2."},
    {"text": "Soal 3 (menengah)...", "difficulty": "intermediate", "opts": ["A...", "B...", "C...", "D..."], "ans": 2, "exp": "Pembahasan rinci soal 3."},
    {"text": "Soal 4 (menengah)...", "difficulty": "intermediate", "opts": ["A...", "B...", "C...", "D..."], "ans": 3, "exp": "Pembahasan rinci soal 4."},
    {"text": "Soal 5 (lanjutan/cerita)...", "difficulty": "advanced", "opts": ["A...", "B...", "C...", "D..."], "ans": 0, "exp": "Pembahasan rinci soal 5."},
    {"text": "Soal 6 (lanjutan/analisis)...", "difficulty": "advanced", "opts": ["A...", "B...", "C...", "D..."], "ans": 1, "exp": "Pembahasan rinci soal 6."}
  ]
}`;

      // Pilih model Gemini yang aktif: coba daftar prioritas lalu auto-discover dari /v1beta/models
      const candidateModels = [
        "gemini-3.8-flash",
        "gemini-3.0-flash",
        "gemini-2.5-flash-lite",
        "gemini-2.0-flash",
      ];

      // Auto-discover available flash models for this API key
      try {
        const listRes = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models?key=${encodeURIComponent(apiKey)}`
        );
        if (listRes.ok) {
          const listJson: any = await listRes.json();
          const discovered = (listJson.models || [])
            .filter(
              (m: any) =>
                Array.isArray(m.supportedGenerationMethods) &&
                m.supportedGenerationMethods.includes("generateContent") &&
                /gemini/i.test(m.name) &&
                !/embedding|imagen|veo|tts|audio|live/i.test(m.name)
            )
            .map((m: any) => String(m.name).replace(/^models\//, ""))
            .sort((a: string, b: string) => {
              const aFlash = /flash/i.test(a) ? 0 : 1;
              const bFlash = /flash/i.test(b) ? 0 : 1;
              if (aFlash !== bFlash) return aFlash - bFlash;
              return b.localeCompare(a); // versi terbaru lebih dulu
            });
          for (const m of discovered) {
            if (!candidateModels.includes(m)) candidateModels.push(m);
          }
          // Prioritaskan model flash terbaru yang benar-benar ada di daftar
          if (discovered.length > 0) {
            candidateModels.unshift(...discovered.slice(0, 3));
          }
        }
      } catch {
        // lanjut pakai daftar prioritas bawaan
      }

      const uniqueModels = [...new Set(candidateModels)];
      let gemJson: any = null;
      let lastErr = "";

      for (const modelName of uniqueModels) {
        let gemRes: Response | null = null;
        let errTxt = "";

        // Coba hingga 2x jika kena 503 sementara
        for (let attempt = 0; attempt < 2; attempt++) {
          gemRes = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(modelName)}:generateContent?key=${encodeURIComponent(apiKey)}`,
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                contents: [{ parts: [{ text: prompt }] }],
                generationConfig: { responseMimeType: "application/json", temperature: 0.45 },
              }),
            }
          );

          if (gemRes.ok) {
            gemJson = await gemRes.json();
            usedModel = modelName;
            break;
          }
          errTxt = await gemRes.text();
          lastErr = `(${modelName} -> ${gemRes.status}): ${errTxt.slice(0, 220)}`;

          if (gemRes.status === 503 && attempt === 0) {
            await new Promise((r) => setTimeout(r, 1500));
            continue;
          }
          break;
        }

        if (gemJson) break;

        // Jika API key salah / invalid (400/401/403), langsung hentikan
        if (gemRes && ![404, 429, 500, 502, 503, 504].includes(gemRes.status)) {
          return c.json({ error: `Gemini API menolak permintaan ${lastErr}` }, 400);
        }
      }

      if (!gemJson) {
        return c.json({ error: `Semua model Gemini sedang sibuk/tidak tersedia. Error terakhir ${lastErr}` }, 400);
      }

      const rawText = gemJson?.candidates?.[0]?.content?.parts?.[0]?.text || "";
      const cleaned = rawText.replace(/^```json\s*/i, "").replace(/```$/i, "").trim();
      generated = JSON.parse(cleaned);
      mode = "gemini_ai";
    } catch (err: any) {
      return c.json({ error: `Gagal memproses output AI: ${err.message}` }, 400);
    }
  }

  // Fallback Mode Template Terstruktur (100% gratis tanpa API key)
  if (!generated) {
    generated = {
      materialTitle: `${info.title} (${info.grade_name})`,
      objectives: [
        `Siswa ${info.grade_name} mampu memahami konsep dasar ${info.title} pada bab ${info.topic_title}.`,
        `Siswa mampu menerapkan pemahaman ${info.title} untuk menyelesaikan soal latihan sederhana.`,
      ],
      blocks: [
        { type: "heading", text: `Pengantar: ${info.title}` },
        {
          type: "paragraph",
          text: `Submateri "${info.title}" merupakan bagian dari Bab ${info.topic_title} pada mata pelajaran ${info.subject_name} ${info.grade_name}. ${info.topic_desc ? `Cakupan bab ini meliputi: ${info.topic_desc}.` : ""} Silakan klik tombol Edit Materi untuk melengkapi uraian sesuai buku siswa yang digunakan.`,
        },
        {
          type: "example",
          title: "Contoh Penerapan / Latihan Terbimbing",
          text: `Guru dapat menuliskan 1–2 contoh soal atau studi kasus ${info.title} di sini${info.local_context ? ` (Konteks Gresik: ${info.local_context})` : ""}.`,
        },
        {
          type: "tip",
          text: "Tips untuk Guru: Pasang Gemini API Key gratis dari aistudio.google.com agar tombol 1-klik ini otomatis menulis penjelasan lengkap beserta 4 soal & pembahasan!",
        },
      ],
      activityTitle: `Latihan: ${info.title}`,
      questions: [],
    };
  }

  const client = await pool.connect();
  try {
    await client.query("BEGIN");

    // 1. Insert learning objectives if none exist
    const objExist = await client.query(`SELECT COUNT(*)::int AS c FROM learning_objectives WHERE subtopic_id = $1`, [subtopicId]);
    if (objExist.rows[0].c === 0 && Array.isArray(generated.objectives)) {
      for (let i = 0; i < generated.objectives.length; i++) {
        await client.query(
          `INSERT INTO learning_objectives (subtopic_id, description, sequence_number)
           VALUES ($1, $2, $3) ON CONFLICT DO NOTHING`,
          [subtopicId, String(generated.objectives[i]).trim(), i + 1]
        );
      }
    }

    // 2. Insert material
    const seqMat = await client.query(
      `SELECT COALESCE(MAX(sequence_number), 0)::int + 1 AS next_seq FROM materials WHERE subtopic_id = $1`,
      [subtopicId]
    );
    const matRes = await client.query(
      `INSERT INTO materials (subtopic_id, title, content, sequence_number, status, created_by)
       VALUES ($1, $2, $3::jsonb, $4, 'published', $5)
       RETURNING *`,
      [subtopicId, generated.materialTitle.slice(0, 195), JSON.stringify(generated.blocks || []), seqMat.rows[0].next_seq, auth.profile!.id]
    );

    // 3. Insert practice activity + questions (if generated)
    let createdActivity = null;
    let questionsCount = 0;
    if (Array.isArray(generated.questions) && generated.questions.length > 0) {
      const actRes = await client.query(
        `INSERT INTO activities (
           subject_grade_mapping_id, topic_id, subtopic_id,
           title, description, activity_type, instructions,
           time_limit_minutes, passing_score, max_attempts, status, created_by
         )
         VALUES ($1, $2, $3, $4, $5, 'practice', 'Pilih jawaban yang paling tepat, lalu pelajari pembahasannya.', 15, 75, 5, 'published', $6)
         RETURNING *`,
        [info.sgm_id, info.topic_id, subtopicId, (generated.activityTitle || `Latihan: ${info.title}`).slice(0, 195), `Draf latihan otomatis (${mode})`, auth.profile!.id]
      );
      createdActivity = actRes.rows[0];

      const labels = ["A", "B", "C", "D"];
      const weight = Math.round((100 / generated.questions.length) * 100) / 100;

      for (let qi = 0; qi < generated.questions.length; qi++) {
        const q = generated.questions[qi];
        if (!q?.text || !Array.isArray(q.opts)) continue;
        const difficulty = ["basic", "intermediate", "advanced"].includes(q.difficulty)
          ? q.difficulty
          : "basic";
        const qRes = await client.query(
          `INSERT INTO questions (question_type, question_text, explanation, difficulty, default_score, created_by)
           VALUES ('multiple_choice', $1, $2, $3, $4, $5)
           RETURNING id`,
          [String(q.text).trim(), String(q.exp || "").trim(), difficulty, weight, auth.profile!.id]
        );
        const qId = qRes.rows[0].id;
        questionsCount++;

        for (let oi = 0; oi < Math.min(q.opts.length, 4); oi++) {
          await client.query(
            `INSERT INTO question_options (question_id, option_label, option_text, is_correct, sequence_number)
             VALUES ($1, $2, $3, $4, $5)`,
            [qId, labels[oi], String(q.opts[oi]).trim(), Number(q.ans) === oi, oi + 1]
          );
        }

        await client.query(
          `INSERT INTO activity_questions (activity_id, question_id, sequence_number, score_weight)
           VALUES ($1, $2, $3, $4) ON CONFLICT DO NOTHING`,
          [createdActivity.id, qId, qi + 1, weight]
        );
      }
    }

    await client.query("COMMIT");
    return c.json({
      ok: true,
      mode,
      model: usedModel || null,
      material: matRes.rows[0],
      activity: createdActivity,
      questions_created: questionsCount,
    }, 201);
  } catch (err: any) {
    await client.query("ROLLBACK");
    return c.json({ error: err.message }, 500);
  } finally {
    client.release();
  }
});

// Upload gambar/PDF/audio ke Neon Object Storage (bucket: assets)
app.post("/teacher/media/upload", async (c) => {
  const auth = await requireTeacher(c);
  if (auth instanceof Response) return auth;

  const formData = await c.req.formData();
  const file = formData.get("file");
  const materialId = String(formData.get("material_id") || "");
  const altText = String(formData.get("alt_text") || "");

  if (!(file instanceof File)) return c.json({ error: "File tidak ditemukan" }, 400);
  if (!materialId) return c.json({ error: "material_id wajib diisi" }, 400);
  if (file.size > 15 * 1024 * 1024) return c.json({ error: "Ukuran file maksimal 15 MB" }, 400);

  const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, "_");
  const storageKey = `materials/${materialId}/${Date.now()}-${safeName}`;
  const buffer = new Uint8Array(await file.arrayBuffer());
  const mime = file.type || "application/octet-stream";

  let mediaType: "image" | "audio" | "video" | "document" = "document";
  if (mime.startsWith("image/")) mediaType = "image";
  else if (mime.startsWith("audio/")) mediaType = "audio";
  else if (mime.startsWith("video/")) mediaType = "video";

  await s3.send(
    new PutObjectCommand({
      Bucket: BUCKET,
      Key: storageKey,
      Body: buffer,
      ContentType: mime,
    })
  );

  const seqRes = await pool.query(
    `SELECT COALESCE(MAX(sequence_number), 0)::int + 1 AS next_seq FROM media_assets WHERE material_id = $1`,
    [materialId]
  );

  const insertRes = await pool.query(
    `INSERT INTO media_assets (material_id, storage_key, file_name, media_type, mime_type, file_size, alt_text, sequence_number)
     VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
     RETURNING *`,
    [materialId, storageKey, file.name, mediaType, mime, file.size, altText || file.name, seqRes.rows[0].next_seq]
  );

  const signedUrl = await signAssetUrl(storageKey);
  return c.json({ ok: true, media: { ...insertRes.rows[0], url: signedUrl } }, 201);
});

app.post("/teacher/activities", async (c) => {
  const auth = await requireTeacher(c);
  if (auth instanceof Response) return auth;

  const body = await c.req.json();
  if (!body.title) return c.json({ error: "Judul latihan/evaluasi wajib diisi" }, 400);

  const res = await pool.query(
    `INSERT INTO activities (
       subject_grade_mapping_id, topic_id, subtopic_id,
       title, description, activity_type, instructions,
       time_limit_minutes, passing_score, max_attempts, status, created_by
     )
     VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
     RETURNING *`,
    [
      body.subject_grade_mapping_id || null,
      body.topic_id || null,
      body.subtopic_id || null,
      String(body.title).trim(),
      body.description || null,
      body.activity_type || "practice",
      body.instructions || "Pilih jawaban yang paling tepat.",
      body.time_limit_minutes ? Number(body.time_limit_minutes) : 15,
      body.passing_score ? Number(body.passing_score) : 75,
      body.max_attempts ? Number(body.max_attempts) : 3,
      body.status || "published",
      auth.profile!.id,
    ]
  );
  return c.json({ ok: true, activity: res.rows[0] }, 201);
});

app.get("/teacher/questions", async (c) => {
  const auth = await requireTeacher(c);
  if (auth instanceof Response) return auth;

  const qRes = await pool.query(
    `SELECT id, question_code, question_type, question_text, explanation, difficulty, default_score, created_at
     FROM questions ORDER BY created_at DESC LIMIT 100`
  );
  const qIds = qRes.rows.map((q) => q.id);
  let optMap: Record<string, any[]> = {};
  if (qIds.length > 0) {
    const oRes = await pool.query(
      `SELECT id, question_id, option_label, option_text, is_correct, sequence_number
       FROM question_options WHERE question_id = ANY($1::uuid[]) ORDER BY sequence_number`,
      [qIds]
    );
    for (const o of oRes.rows) {
      if (!optMap[o.question_id]) optMap[o.question_id] = [];
      optMap[o.question_id].push(o);
    }
  }
  return c.json({
    questions: qRes.rows.map((q) => ({ ...q, options: optMap[q.id] || [] })),
  });
});

app.post("/teacher/questions", async (c) => {
  const auth = await requireTeacher(c);
  if (auth instanceof Response) return auth;

  const body = await c.req.json();
  const { question_text, question_type, explanation, difficulty, default_score, options, activity_id } = body;
  if (!question_text) return c.json({ error: "Teks soal wajib diisi" }, 400);

  const client = await pool.connect();
  try {
    await client.query("BEGIN");
    const qRes = await client.query(
      `INSERT INTO questions (question_type, question_text, explanation, difficulty, default_score, created_by)
       VALUES ($1, $2, $3, $4, $5, $6)
       RETURNING *`,
      [
        question_type || "multiple_choice",
        String(question_text).trim(),
        explanation || null,
        difficulty || "basic",
        Number(default_score || 10),
        auth.profile!.id,
      ]
    );
    const question = qRes.rows[0];

    const insertedOptions = [];
    if (Array.isArray(options)) {
      const labels = ["A", "B", "C", "D", "E"];
      for (let i = 0; i < options.length; i++) {
        const opt = options[i];
        if (!opt?.option_text) continue;
        const oRes = await client.query(
          `INSERT INTO question_options (question_id, option_label, option_text, is_correct, sequence_number)
           VALUES ($1, $2, $3, $4, $5) RETURNING *`,
          [question.id, opt.option_label || labels[i] || String(i + 1), String(opt.option_text).trim(), Boolean(opt.is_correct), i + 1]
        );
        insertedOptions.push(oRes.rows[0]);
      }
    }

    if (activity_id) {
      const seqRes = await client.query(
        `SELECT COALESCE(MAX(sequence_number), 0)::int + 1 AS next_seq FROM activity_questions WHERE activity_id = $1`,
        [activity_id]
      );
      await client.query(
        `INSERT INTO activity_questions (activity_id, question_id, sequence_number, score_weight)
         VALUES ($1, $2, $3, $4) ON CONFLICT DO NOTHING`,
        [activity_id, question.id, seqRes.rows[0].next_seq, Number(default_score || 10)]
      );
    }

    await client.query("COMMIT");
    return c.json({ ok: true, question: { ...question, options: insertedOptions } }, 201);
  } catch (err: any) {
    await client.query("ROLLBACK");
    return c.json({ error: err.message }, 500);
  } finally {
    client.release();
  }
});

app.get("/teacher/students", async (c) => {
  const auth = await requireTeacher(c);
  if (auth instanceof Response) return auth;

  const res = await pool.query(`
    SELECT sp.id, sp.student_code, sp.school_name, sp.notes,
           p.full_name, p.email, p.is_active, p.created_at,
           (SELECT COUNT(*)::int FROM student_enrollments se WHERE se.student_profile_id = sp.id AND se.status = 'active') AS enrolled_count,
           (SELECT COUNT(*)::int FROM student_progress prog WHERE prog.student_profile_id = sp.id AND prog.progress_status = 'completed') AS completed_subtopics,
           (SELECT ROUND(AVG(CASE WHEN att.max_score > 0 THEN (att.score / att.max_score) * 100 ELSE 0 END), 1)
            FROM attempts att WHERE att.student_profile_id = sp.id AND att.status = 'graded') AS avg_score
    FROM student_profiles sp
    JOIN profiles p ON p.id = sp.profile_id
    ORDER BY p.created_at DESC
  `);

  return c.json({ students: res.rows });
});

app.get("/teacher/results", async (c) => {
  const auth = await requireTeacher(c);
  if (auth instanceof Response) return auth;

  const res = await pool.query(`
    SELECT att.id, att.attempt_number, att.score, att.max_score, att.status, att.submitted_at,
           p.full_name AS student_name, sp.student_code,
           a.title AS activity_title, a.activity_type, a.passing_score,
           s.name AS subject_name, g.name AS grade_name
    FROM attempts att
    JOIN student_profiles sp ON sp.id = att.student_profile_id
    JOIN profiles p ON p.id = sp.profile_id
    JOIN activities a ON a.id = att.activity_id
    LEFT JOIN subtopics st ON st.id = a.subtopic_id
    LEFT JOIN topics t ON t.id = COALESCE(a.topic_id, st.topic_id)
    LEFT JOIN subject_grade_mappings sgm ON sgm.id = COALESCE(a.subject_grade_mapping_id, t.subject_grade_mapping_id)
    LEFT JOIN subjects s ON s.id = sgm.subject_id
    LEFT JOIN grades g ON g.id = sgm.grade_id
    ORDER BY att.submitted_at DESC NULLS LAST
    LIMIT 50
  `);

  return c.json({ results: res.rows });
});

export default app;

