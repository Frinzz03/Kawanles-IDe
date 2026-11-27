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
    const lines = fs.readFileSync(filePath, 'utf8').split(/\r?\n/);
    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('#')) continue;
      const eq = trimmed.indexOf('=');
      if (eq === -1) continue;
      const key = trimmed.slice(0, eq).trim();
      let val = trimmed.slice(eq + 1).trim();
      if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
        val = val.slice(1, -1);
      }
      if (!process.env[key]) {
        process.env[key] = val;
      }
    }
  }
}

loadEnv();

const connectionString = process.env.DATABASE_URL || process.env.NEON_DATABASE_URL;
if (!connectionString) {
  console.error('ERROR: DATABASE_URL tidak ditemukan di .env.local atau .env');
  process.exit(1);
}

const client = new pg.Client({
  connectionString,
  ssl: { rejectUnauthorized: false },
});

const sqlFiles = [
  '01_schema_database_neon.sql',
  '02_seed_referensi_kurikulum.sql',
  '03_seed_contoh_konten.sql',
];

async function main() {
  await client.connect();
  console.log('Terhubung ke Neon PostgreSQL.');

  for (const file of sqlFiles) {
    const fullPath = path.join(__dirname, file);
    const sql = fs.readFileSync(fullPath, 'utf8');
    console.log(`Menjalankan ${file}...`);
    await client.query(sql);
    console.log(`  OK: ${file}`);
  }

  console.log('\n--- Verifikasi Database ---');
  const tablesRes = await client.query(`
    SELECT COUNT(*)::int AS total_tabel_public
    FROM information_schema.tables
    WHERE table_schema = 'public' AND table_type = 'BASE TABLE'
  `);
  console.log('Total tabel public:', tablesRes.rows[0].total_tabel_public);

  const subjectsRes = await client.query(`
    SELECT s.code, s.name, COUNT(sgm.id)::int AS jumlah_kelas
    FROM subjects s
    LEFT JOIN subject_grade_mappings sgm ON sgm.subject_id = s.id
    GROUP BY s.code, s.name
    ORDER BY s.code
  `);
  console.table(subjectsRes.rows);

  const sampleRes = await client.query(`
    SELECT s.code AS mapel, g.name AS kelas, t.code AS kode_bab, t.title AS judul_bab,
           st.title AS submateri,
           (SELECT COUNT(*)::int FROM materials m WHERE m.subtopic_id = st.id) AS materi,
           (SELECT COUNT(*)::int FROM activities a WHERE a.subtopic_id = st.id) AS latihan
    FROM topics t
    JOIN subject_grade_mappings sgm ON sgm.id = t.subject_grade_mapping_id
    JOIN subjects s ON s.id = sgm.subject_id
    JOIN grades g ON g.id = sgm.grade_id
    JOIN subtopics st ON st.topic_id = t.id
    ORDER BY g.grade_number, t.sequence_number, st.sequence_number
  `);
  console.table(sampleRes.rows);

  await client.end();
}

main().catch(async (err) => {
  console.error('Migration gagal:', err.message);
  try { await client.end(); } catch {}
  process.exit(1);
});

