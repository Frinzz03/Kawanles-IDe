import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import pg from 'pg';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');

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

loadEnv();

const connectionString = process.env.DATABASE_URL_UNPOOLED || process.env.DATABASE_URL;
if (!connectionString) {
  console.error('DATABASE_URL tidak ditemukan di .env.local');
  process.exit(1);
}

const parsedPath = path.join(rootDir, 'database', 'curriculum_parsed.json');
const topicsData = JSON.parse(fs.readFileSync(parsedPath, 'utf8'));

async function main() {
  const client = new pg.Client({
    connectionString,
    ssl: { rejectUnauthorized: false },
  });
  await client.connect();
  console.log(`Terhubung ke Neon PostgreSQL. Memproses ${topicsData.length} bab...`);

  // Build mapping lookup: `${subject_code}:${grade_number}` -> mapping_id
  const mapRes = await client.query(`
    SELECT sgm.id, s.code AS subject_code, g.grade_number
    FROM subject_grade_mappings sgm
    JOIN subjects s ON s.id = sgm.subject_id
    JOIN grades g ON g.id = sgm.grade_id
  `);
  const mappingLookup = new Map();
  for (const row of mapRes.rows) {
    mappingLookup.set(`${row.subject_code}:${row.grade_number}`, row.id);
  }

  let topicsInserted = 0;
  let topicsUpdated = 0;
  let subtopicsInserted = 0;
  let objectivesInserted = 0;

  await client.query('BEGIN');
  try {
    for (const item of topicsData) {
      const mappingId = mappingLookup.get(`${item.subject_code}:${item.grade_number}`);
      if (!mappingId) {
        throw new Error(`Pemetaan tidak ditemukan untuk ${item.subject_code} kelas ${item.grade_number}`);
      }

      // Check existing topic by code or (mapping_id, sequence_number)
      const existingTopicRes = await client.query(
        `SELECT id, code FROM topics
         WHERE code = $1 OR (subject_grade_mapping_id = $2 AND sequence_number = $3)
         LIMIT 1`,
        [item.code, mappingId, item.sequence_number]
      );

      let topicId;
      if (existingTopicRes.rows[0]) {
        topicId = existingTopicRes.rows[0].id;
        await client.query(
          `UPDATE topics
           SET code = COALESCE(code, $1),
               title = $2,
               description = COALESCE(description, $3),
               local_context = COALESCE(local_context, $4),
               curriculum_note = COALESCE(curriculum_note, $5),
               status = 'published'
           WHERE id = $6`,
          [
            item.code,
            item.title,
            item.description || null,
            item.local_context || null,
            item.curriculum_note || `Rancangan struktur bab website dari Master Kurikulum ${item.subject_code}.`,
            topicId,
          ]
        );
        topicsUpdated++;
      } else {
        const insTopic = await client.query(
          `INSERT INTO topics (
             subject_grade_mapping_id, code, title, description,
             sequence_number, curriculum_note, local_context, status
           )
           VALUES ($1, $2, $3, $4, $5, $6, $7, 'published')
           RETURNING id`,
          [
            mappingId,
            item.code,
            item.title,
            item.description || null,
            item.sequence_number,
            item.curriculum_note || `Rancangan struktur bab website dari Master Kurikulum ${item.subject_code}.`,
            item.local_context || null,
          ]
        );
        topicId = insTopic.rows[0].id;
        topicsInserted++;
      }

      // Check if this topic already has subtopics (e.g. our seeded sample chapters MAT-SD4-04 / IPA-SMP7-03)
      const existingSubRes = await client.query(
        `SELECT id, title, sequence_number FROM subtopics WHERE topic_id = $1 ORDER BY sequence_number`,
        [topicId]
      );

      const existingTitles = new Set(existingSubRes.rows.map((r) => r.title.toLowerCase()));
      let nextSubSeq = existingSubRes.rows.reduce((m, r) => Math.max(m, r.sequence_number), 0);

      let firstSubtopicId = existingSubRes.rows[0]?.id || null;

      for (const subTitle of item.subtopics || []) {
        const trimmed = subTitle.slice(0, 195).trim();
        if (!trimmed) continue;
        if (existingTitles.has(trimmed.toLowerCase())) continue;

        nextSubSeq++;
        const subCode = `${item.code}-S${String(nextSubSeq).padStart(2, '0')}`;
        const subIns = await client.query(
          `INSERT INTO subtopics (topic_id, code, title, sequence_number, status)
           VALUES ($1, $2, $3, $4, 'published')
           ON CONFLICT (topic_id, sequence_number) DO NOTHING
           RETURNING id`,
          [topicId, subCode, trimmed, nextSubSeq]
        );
        if (subIns.rows[0]) {
          subtopicsInserted++;
          if (!firstSubtopicId) firstSubtopicId = subIns.rows[0].id;

          // Record honest initial validation status (never auto-tervalidasi)
          await client.query(
            `INSERT INTO validation_records (subtopic_id, reviewer_name, status, review_notes)
             VALUES ($1, 'Impor Master Kurikulum v1.0', $2, 'Diimpor dari dokumen Master Kurikulum; menunggu validasi guru sebelum status tervalidasi.')`,
            [subIns.rows[0].id, item.validation_status || 'hasil_audit_struktur']
          );
        }
      }

      // Attach chapter-level learning objectives to the first subtopic if none exist yet
      if (firstSubtopicId && Array.isArray(item.objectives) && item.objectives.length > 0) {
        const objCountRes = await client.query(
          `SELECT COUNT(*)::int AS c FROM learning_objectives WHERE subtopic_id = $1`,
          [firstSubtopicId]
        );
        if (objCountRes.rows[0].c === 0) {
          for (let k = 0; k < item.objectives.length; k++) {
            await client.query(
              `INSERT INTO learning_objectives (subtopic_id, objective_code, description, sequence_number)
               VALUES ($1, $2, $3, $4)
               ON CONFLICT (subtopic_id, sequence_number) DO NOTHING`,
              [
                firstSubtopicId,
                `${item.code}-TP${String(k + 1).padStart(2, '0')}`,
                item.objectives[k],
                k + 1,
              ]
            );
            objectivesInserted++;
          }
        }
      }
    }

    await client.query('COMMIT');
    console.log('\n=== IMPOR SELESAI ===');
    console.log(`Bab baru ditambahkan    : ${topicsInserted}`);
    console.log(`Bab eksisting diperbarui: ${topicsUpdated}`);
    console.log(`Submateri ditambahkan   : ${subtopicsInserted}`);
    console.log(`Tujuan belajar ditambah : ${objectivesInserted}`);

    // Final verification counts directly from Neon PostgreSQL
    const verifyRes = await client.query(`
      SELECT s.code AS kode, s.name AS mata_pelajaran,
             COUNT(DISTINCT t.id)::int AS total_bab,
             COUNT(DISTINCT st.id)::int AS total_submateri
      FROM subjects s
      JOIN subject_grade_mappings sgm ON sgm.subject_id = s.id
      LEFT JOIN topics t ON t.subject_grade_mapping_id = sgm.id AND t.status != 'archived'
      LEFT JOIN subtopics st ON st.topic_id = t.id AND st.status != 'archived'
      GROUP BY s.code, s.name
      ORDER BY s.code
    `);
    console.log('\n=== VERIFIKASI LIVE DI NEON POSTGRESQL ===');
    console.table(verifyRes.rows);

    const totals = await client.query(`
      SELECT
        (SELECT COUNT(*)::int FROM topics WHERE status != 'archived') AS total_bab,
        (SELECT COUNT(*)::int FROM subtopics WHERE status != 'archived') AS total_submateri,
        (SELECT COUNT(*)::int FROM materials WHERE status != 'archived') AS total_materi,
        (SELECT COUNT(*)::int FROM questions) AS total_soal
    `);
    console.log('Total keseluruhan di Neon:', totals.rows[0]);
  } catch (err) {
    await client.query('ROLLBACK');
    throw err;
  } finally {
    await client.end();
  }
}

main().catch((err) => {
  console.error('IMPOR GAGAL:', err.message);
  process.exit(1);
});

