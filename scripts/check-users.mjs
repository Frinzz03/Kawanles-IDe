import fs from 'fs';
import pg from 'pg';

const raw = fs.readFileSync('f:/Web Les/.env.local', 'utf8');
const line = raw.split(/\r?\n/).find((l) => l.startsWith('DATABASE_URL='));
const url = line.slice(13).trim().replace(/^["']|["']$/g, '');

const c = new pg.Client({ connectionString: url, ssl: { rejectUnauthorized: false } });
await c.connect();
const users = await c.query(`SELECT id, name, email, "createdAt" FROM neon_auth."user" ORDER BY "createdAt" DESC LIMIT 10`);
const profs = await c.query(`SELECT id, auth_user_id, full_name, role FROM public.profiles ORDER BY created_at DESC LIMIT 10`);
console.log('=== neon_auth.user ===');
console.table(users.rows);
console.log('=== public.profiles ===');
console.table(profs.rows);
await c.end();

