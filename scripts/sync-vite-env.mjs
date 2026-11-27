import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const envPath = path.resolve(__dirname, '..', '.env.local');

if (!fs.existsSync(envPath)) {
  console.error('.env.local tidak ditemukan. Jalankan `neon deploy` terlebih dahulu.');
  process.exit(1);
}

const raw = fs.readFileSync(envPath, 'utf8');
const env = {};
for (const line of raw.split(/\r?\n/)) {
  const m = line.match(/^([A-Z0-9_]+)=(.*)$/);
  if (m) {
    env[m[1]] = m[2].replace(/^["']|["']$/g, '');
  }
}

const branchId = env.NEON_BRANCH_ID;
const hostSuffix = env.NEON_FUNCTION_HOST_SUFFIX;
const authBase = env.NEON_AUTH_BASE_URL;

if (!branchId || !hostSuffix || !authBase) {
  console.error('Variabel Neon (NEON_BRANCH_ID / NEON_FUNCTION_HOST_SUFFIX / NEON_AUTH_BASE_URL) belum lengkap.');
  process.exit(1);
}

const apiUrl = `https://${branchId}-api${hostSuffix}`;
const lines = raw
  .split(/\r?\n/)
  .filter((l) => !l.startsWith('VITE_API_URL=') && !l.startsWith('VITE_NEON_AUTH_URL='));

while (lines.length && lines[lines.length - 1] === '') lines.pop();
lines.push('');
lines.push('# Public frontend endpoints (safe for browser)');
lines.push(`VITE_API_URL=${apiUrl}`);
lines.push(`VITE_NEON_AUTH_URL=${authBase}`);
lines.push('');

fs.writeFileSync(envPath, lines.join('\n'), 'utf8');
console.log('Berhasil sinkronisasi VITE_API_URL dan VITE_NEON_AUTH_URL ke .env.local:');
console.log('  VITE_API_URL      =', apiUrl);
console.log('  VITE_NEON_AUTH_URL =', authBase);

