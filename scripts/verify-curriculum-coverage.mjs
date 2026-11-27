import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import pg from 'pg';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const raw = fs.readFileSync(path.resolve(__dirname, '..', '.env.local'), 'utf8');
const line = raw.split(/\r?\n/).find((l) => l.startsWith('DATABASE_URL='));
const url = line.slice(13).trim().replace(/^["']|["']$/g, '');

const c = new pg.Client({ connectionString: url, ssl: { rejectUnauthorized: false } });
await c.connect();

const summary = await c.query(`
  SELECT
    g.grade_number AS kelas,
    COUNT(DISTINCT t.id)::int AS total_bab,
    COUNT(DISTINCT st.id)::int AS total_sub,
    COUNT(DISTINCT m.subtopic_id)::int AS sub_bermateri,
    COUNT(DISTINCT a.subtopic_id)::int AS sub_berlatihan,
    COUNT(DISTINCT aq.question_id)::int AS total_soal
  FROM grades g
  JOIN subject_grade_mappings sgm ON sgm.grade_id = g.id
  JOIN topics t ON t.subject_grade_mapping_id = sgm.id
  JOIN subtopics st ON st.topic_id = t.id
  LEFT JOIN materials m ON m.subtopic_id = st.id AND m.status = 'published'
  LEFT JOIN activities a ON a.subtopic_id = st.id AND a.status = 'published'
  LEFT JOIN activity_questions aq ON aq.activity_id = a.id
  GROUP BY g.grade_number
  ORDER BY g.grade_number
`);
console.table(summary.rows);

const totals = summary.rows.reduce(
  (acc, r) => ({
    total_bab: acc.total_bab + r.total_bab,
    total_sub: acc.total_sub + r.total_sub,
    sub_bermateri: acc.sub_bermateri + r.sub_bermateri,
    sub_berlatihan: acc.sub_berlatihan + r.sub_berlatihan,
    total_soal: acc.total_soal + r.total_soal,
  }),
  { total_bab: 0, total_sub: 0, sub_bermateri: 0, sub_berlatihan: 0, total_soal: 0 }
);
console.log('TOTAL KUMULATIF SD 1–6 & SMP 7–9:', totals);

const missing = await c.query(`
  SELECT g.grade_number AS kelas, t.code AS topic_code, st.sequence_number AS sub_seq, st.title
  FROM subtopics st
  JOIN topics t ON t.id = st.topic_id
  JOIN subject_grade_mappings sgm ON sgm.id = t.subject_grade_mapping_id
  JOIN grades g ON g.id = sgm.grade_id
  LEFT JOIN materials m ON m.subtopic_id = st.id AND m.status = 'published'
  LEFT JOIN activities a ON a.subtopic_id = st.id AND a.status = 'published'
  WHERE m.id IS NULL OR a.id IS NULL
  ORDER BY g.grade_number, t.code, st.sequence_number
`);
console.log('Submateri belum lengkap (tanpa materi/latihan):', missing.rows.length);
if (missing.rows.length > 0) {
  console.table(missing.rows);
  const codes = [...new Set(missing.rows.map((r) => r.topic_code))];
  const detail = await c.query(`
    SELECT t.code AS topic_code, st.sequence_number AS sub_seq, st.title AS sub_title,
           m.title AS mat_title
    FROM subtopics st
    JOIN topics t ON t.id = st.topic_id
    LEFT JOIN materials m ON m.subtopic_id = st.id AND m.status = 'published'
    WHERE t.code = ANY($1)
    ORDER BY t.code, st.sequence_number
  `, [codes]);
  console.table(detail.rows);
}

const dbSize = await c.query(`
  SELECT pg_size_pretty(pg_database_size(current_database())) AS db_size,
         ROUND((pg_database_size(current_database())::numeric / (1024*1024)), 2) AS mb_used
`);
console.log('Ukuran DB Neon:', dbSize.rows[0]);

await c.end();
