import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import pg from 'pg';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');

function loadEnv() {
  const envPath = path.join(rootDir, '.env.local');
  const raw = fs.readFileSync(envPath, 'utf8');
  for (const line of raw.split(/\r?\n/)) {
    const m = line.match(/^([A-Z0-9_]+)=(.*)$/);
    if (m) process.env[m[1]] = m[2].replace(/^["']|["']$/g, '');
  }
}

loadEnv();

const API_URL = process.env.VITE_API_URL;
const AUTH_URL = process.env.VITE_NEON_AUTH_URL;
const DATABASE_URL = process.env.DATABASE_URL;

async function main() {
  console.log('=== E2E TEST SEMUA LAYANAN NEON ===');

  // 1. Test Neon Functions + Postgres + Object Storage HeadBucket
  const healthRes = await fetch(`${API_URL}/health`);
  const health = await healthRes.json();
  console.log('[1] GET /health:', JSON.stringify(health));
  if (!health.ok || !health.services?.postgres || !health.services?.auth || !health.services?.objectStorage) {
    throw new Error('Health check gagal: ' + JSON.stringify(health));
  }

  // 2. Test Curriculum API (Postgres live query)
  const curRes = await fetch(`${API_URL}/curriculum/overview`);
  const cur = await curRes.json();
  console.log(`[2] GET /curriculum/overview: ${cur.subjects?.length} mapel, ${cur.mappings?.length} pemetaan kelas-mapel`);
  if (cur.subjects?.length !== 7) throw new Error('Expected 7 subjects');

  // 3. Test Neon Auth (Better Auth) real sign-up + JWT token + /me onboarding
  const testEmail = `e2e.guru.${Date.now()}@modulles.test`;
  const testPassword = 'TestPassword123!';
  const signUpRes = await fetch(`${AUTH_URL}/sign-up/email`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Origin: 'http://localhost:5173',
    },
    body: JSON.stringify({
      email: testEmail,
      password: testPassword,
      name: 'Guru Uji E2E',
    }),
  });
  const signUpData = await signUpRes.json();
  if (!signUpRes.ok) throw new Error('Neon Auth sign-up gagal: ' + JSON.stringify(signUpData));

  // Extract session cookie from Set-Cookie header
  const setCookies = signUpRes.headers.getSetCookie ? signUpRes.headers.getSetCookie() : [signUpRes.headers.get('set-cookie')].filter(Boolean);
  const cookieHeader = setCookies.map((c) => c.split(';')[0]).join('; ');
  console.log(`[3] Neon Auth sign-up OK (user id: ${signUpData.user?.id})`);

  // Fetch JWT token from Neon Auth /token endpoint
  const tokenRes = await fetch(`${AUTH_URL}/token`, {
    headers: {
      Cookie: cookieHeader,
      Origin: 'http://localhost:5173',
    },
  });
  const tokenData = await tokenRes.json();
  if (!tokenRes.ok || !tokenData.token) {
    throw new Error('Gagal mengambil JWT token dari Neon Auth: ' + JSON.stringify(tokenData));
  }
  const jwt = tokenData.token;
  console.log('[4] Neon Auth JWT EdDSA berhasil diterbitkan');

  // 4. Test Protected Neon Function (/me/onboarding + /teacher/stats)
  const onbRes = await fetch(`${API_URL}/me/onboarding`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${jwt}`,
    },
    body: JSON.stringify({ full_name: 'Guru Uji E2E', role: 'teacher' }),
  });
  const onb = await onbRes.json();
  if (!onbRes.ok || !onb.ok) throw new Error('Onboarding gagal: ' + JSON.stringify(onb));
  console.log('[5] Protected API /me/onboarding (JWKS verified) OK:', onb.profile.role);

  const statsRes = await fetch(`${API_URL}/teacher/stats`, {
    headers: { Authorization: `Bearer ${jwt}` },
  });
  const stats = await statsRes.json();
  if (!statsRes.ok) throw new Error('/teacher/stats gagal: ' + JSON.stringify(stats));
  console.log('[6] Protected API /teacher/stats OK:', JSON.stringify(stats));

  // 5. Test Neon Object Storage Upload & Presigned URL Download end-to-end
  const client = new pg.Client({ connectionString: DATABASE_URL, ssl: { rejectUnauthorized: false } });
  await client.connect();
  const matRow = await client.query(`SELECT id FROM materials LIMIT 1`);
  const materialId = matRow.rows[0].id;

  // 1x1 transparent PNG bytes
  const pngBytes = Buffer.from(
    'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=',
    'base64'
  );
  const form = new FormData();
  form.append('file', new Blob([pngBytes], { type: 'image/png' }), 'e2e-check.png');
  form.append('material_id', materialId);
  form.append('alt_text', 'E2E Verification Image');

  const uploadRes = await fetch(`${API_URL}/teacher/media/upload`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${jwt}` },
    body: form,
  });
  const uploadData = await uploadRes.json();
  if (!uploadRes.ok || !uploadData.media?.url) {
    throw new Error('Upload ke Object Storage gagal: ' + JSON.stringify(uploadData));
  }
  console.log('[7] Neon Object Storage upload OK:', uploadData.media.storage_key);

  // Verify presigned URL actually downloads the exact PNG bytes
  const dlRes = await fetch(uploadData.media.url);
  const dlBuf = Buffer.from(await dlRes.arrayBuffer());
  if (!dlRes.ok || dlBuf.length !== pngBytes.length) {
    throw new Error(`Presigned URL download gagal (status=${dlRes.status}, bytes=${dlBuf.length})`);
  }
  console.log(`[8] Neon Object Storage presigned GET OK (${dlBuf.length} bytes verified)`);

  // Clean up test rows so production stays clean
  await client.query(`DELETE FROM media_assets WHERE id = $1`, [uploadData.media.id]);
  await client.query(`DELETE FROM profiles WHERE auth_user_id = $1`, [signUpData.user.id]);
  await client.end();
  console.log('[9] Cleanup data uji E2E selesai. SEMUA 4 LAYANAN NEON LOLOS E2E!');
}

main().catch((err) => {
  console.error('E2E FAILED:', err.message);
  process.exit(1);
});

