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
const r = await c.query(`
  SELECT pg_size_pretty(pg_database_size(current_database())) AS db_size,
         ROUND((pg_database_size(current_database())::numeric / (1024*1024)), 2) AS mb_used
`);
const t = await c.query(`
  SELECT relname AS tabel,
         pg_size_pretty(pg_total_relation_size(relid)) AS ukuran
  FROM pg_catalog.pg_statio_user_tables
  ORDER BY pg_total_relation_size(relid) DESC
  LIMIT 6
`);
console.log('Ukuran DB saat ini:', r.rows[0]);
console.table(t.rows);
await c.end();

