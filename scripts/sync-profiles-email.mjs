import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import pg from 'pg';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const raw = fs.readFileSync(path.resolve(__dirname, '..', '.env.local'), 'utf8');
const line = raw.split(/\r?\n/).find((l) => l.startsWith('DATABASE_URL='));
const url = line.slice(13).trim().replace(/^["']|["']$/g, '');

const client = new pg.Client({ connectionString: url, ssl: { rejectUnauthorized: false } });
await client.connect();

// 1. Add email column to public.profiles
await client.query(`ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS email VARCHAR(255)`);
await client.query(`CREATE INDEX IF NOT EXISTS idx_profiles_email ON public.profiles(email)`);

// 2. Register the Google-authenticated user from neon_auth.user into public.profiles as teacher
const uRes = await client.query(
  `SELECT id::text AS id, name, email FROM neon_auth."user" WHERE email = $1 LIMIT 1`,
  ['farielnur76@gmail.com']
);

if (uRes.rows[0]) {
  const u = uRes.rows[0];
  await client.query(
    `INSERT INTO public.profiles (auth_user_id, email, full_name, role)
     VALUES ($1, $2, $3, 'teacher')
     ON CONFLICT (auth_user_id) DO UPDATE
     SET email = EXCLUDED.email, full_name = EXCLUDED.full_name, updated_at = NOW()`,
    [u.id, u.email, u.name || 'Guru Les']
  );
  console.log('Berhasil mendaftarkan akun Google ke public.profiles:', u.email, '(role: teacher)');
}

// 3. Remove leftover E2E test account from neon_auth.user if any
await client.query(`DELETE FROM neon_auth."user" WHERE email LIKE 'e2e.guru.%@modulles.test'`);

const profs = await client.query(`SELECT auth_user_id, full_name, email, role FROM public.profiles ORDER BY created_at DESC`);
console.table(profs.rows);

await client.end();

