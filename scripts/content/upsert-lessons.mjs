import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import pg from 'pg';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '../..');

function loadEnv() {
  for (const filename of ['.env.local', '.env']) {
    const filePath = path.join(rootDir, filename);
    if (!fs.existsSync(filePath)) continue;
    for (const line of fs.readFileSync(filePath, 'utf8').split(/\r?\n/)) {
      const m = line.match(/^([A-Z0-9_]+)=(.*)$/);
      if (m && !process.env[m[1]]) {
        process.env[m[1]] = m[2].replace(/^["']|["']$/g, '');
      }
    }
  }
}

export async function upsertLessonsBatch(batchName, lessons) {
  loadEnv();
  const connectionString = process.env.DATABASE_URL_UNPOOLED || process.env.DATABASE_URL;
  if (!connectionString) throw new Error('DATABASE_URL tidak ditemukan');

  const client = new pg.Client({ connectionString, ssl: { rejectUnauthorized: false } });
  await client.connect();

  const teacherRes = await client.query(
    `SELECT id FROM profiles WHERE role = 'teacher' ORDER BY created_at ASC LIMIT 1`
  );
  const teacherId = teacherRes.rows[0]?.id || null;

  let matUpserted = 0;
  let actUpserted = 0;
  let qUpserted = 0;

  await client.query('BEGIN');
  try {
    for (const item of lessons) {
      const stRes = await client.query(
        `SELECT st.id AS subtopic_id, t.id AS topic_id, t.subject_grade_mapping_id AS sgm_id
         FROM subtopics st
         JOIN topics t ON t.id = st.topic_id
         WHERE t.code = $1 AND st.sequence_number = $2
         LIMIT 1`,
        [item.topicCode, item.subSeq]
      );
      if (!stRes.rows[0]) {
        console.warn(`SKIP: ${item.topicCode} sub #${item.subSeq} tidak ditemukan`);
        continue;
      }
      const { subtopic_id, topic_id, sgm_id } = stRes.rows[0];

      // 1. Upsert learning objectives
      if (Array.isArray(item.objectives)) {
        for (let i = 0; i < item.objectives.length; i++) {
          await client.query(
            `INSERT INTO learning_objectives (subtopic_id, objective_code, description, sequence_number)
             VALUES ($1, $2, $3, $4)
             ON CONFLICT (subtopic_id, sequence_number) DO UPDATE
             SET description = EXCLUDED.description`,
            [subtopic_id, `${item.topicCode}-S${item.subSeq}-TP0${i + 1}`, item.objectives[i], i + 1]
          );
        }
      }

      // 2. Upsert primary material (sequence_number = 1)
      const existingMat = await client.query(
        `SELECT id FROM materials WHERE subtopic_id = $1 AND status != 'archived' ORDER BY sequence_number ASC LIMIT 1`,
        [subtopic_id]
      );
      if (existingMat.rows[0]) {
        await client.query(
          `UPDATE materials SET title = $1, content = $2::jsonb, status = 'published', updated_at = NOW() WHERE id = $3`,
          [item.materialTitle, JSON.stringify(item.blocks), existingMat.rows[0].id]
        );
      } else {
        await client.query(
          `INSERT INTO materials (subtopic_id, title, content, sequence_number, status, created_by)
           VALUES ($1, $2, $3::jsonb, 1, 'published', $4)`,
          [subtopic_id, item.materialTitle, JSON.stringify(item.blocks), teacherId]
        );
      }
      matUpserted++;

      // 3. Upsert practice activity & questions
      if (Array.isArray(item.questions) && item.questions.length > 0) {
        const existingAct = await client.query(
          `SELECT id FROM activities WHERE subtopic_id = $1 AND activity_type = 'practice' AND status != 'archived' ORDER BY created_at ASC LIMIT 1`,
          [subtopic_id]
        );
        let activityId;
        if (existingAct.rows[0]) {
          activityId = existingAct.rows[0].id;
          await client.query(
            `UPDATE activities SET title = $1, description = $2, status = 'published', updated_at = NOW() WHERE id = $3`,
            [item.activityTitle, `Latihan interaktif untuk ${item.materialTitle}`, activityId]
          );
        } else {
          const actIns = await client.query(
            `INSERT INTO activities (
               subject_grade_mapping_id, topic_id, subtopic_id,
               title, description, activity_type, instructions,
               time_limit_minutes, passing_score, max_attempts, status, created_by
             )
             VALUES ($1, $2, $3, $4, $5, 'practice', 'Pilih jawaban yang paling tepat ya!', 15, 75, 5, 'published', $6)
             RETURNING id`,
            [sgm_id, topic_id, subtopic_id, item.activityTitle, `Latihan interaktif untuk ${item.materialTitle}`, teacherId]
          );
          activityId = actIns.rows[0].id;
        }
        actUpserted++;

        const labels = ['A', 'B', 'C', 'D'];
        const weight = Math.round((100 / item.questions.length) * 100) / 100;

        for (let qi = 0; qi < item.questions.length; qi++) {
          const q = item.questions[qi];
          const qCode = `Q-${item.topicCode}-S${item.subSeq}-0${qi + 1}`;
          const diff = q.diff || 'basic';
          const qIns = await client.query(
            `INSERT INTO questions (question_code, question_type, question_text, explanation, difficulty, default_score, created_by)
             VALUES ($1, 'multiple_choice', $2, $3, $4, $5, $6)
             ON CONFLICT (question_code) DO UPDATE
             SET question_text = EXCLUDED.question_text,
                 explanation = EXCLUDED.explanation,
                 difficulty = EXCLUDED.difficulty,
                 default_score = EXCLUDED.default_score,
                 updated_at = NOW()
             RETURNING id`,
            [qCode, q.text, q.exp, diff, weight, teacherId]
          );
          const qId = qIns.rows[0].id;
          qUpserted++;

          for (let oi = 0; oi < q.opts.length; oi++) {
            await client.query(
              `INSERT INTO question_options (question_id, option_label, option_text, is_correct, sequence_number)
               VALUES ($1, $2, $3, $4, $5)
               ON CONFLICT (question_id, sequence_number) DO UPDATE
               SET option_text = EXCLUDED.option_text, is_correct = EXCLUDED.is_correct`,
              [qId, labels[oi], q.opts[oi], oi === q.ans, oi + 1]
            );
          }

          await client.query(
            `INSERT INTO activity_questions (activity_id, question_id, sequence_number, score_weight)
             VALUES ($1, $2, $3, $4)
             ON CONFLICT (activity_id, question_id) DO UPDATE
             SET sequence_number = EXCLUDED.sequence_number, score_weight = EXCLUDED.score_weight`,
            [activityId, qId, qi + 1, weight]
          );
        }
      }
    }

    await client.query('COMMIT');
    console.log(`✅ BATCH "${batchName}" SELESAI! Materi: ${matUpserted}, Latihan: ${actUpserted}, Soal: ${qUpserted}`);
  } catch (err) {
    await client.query('ROLLBACK');
    throw err;
  } finally {
    await client.end();
  }
}

