import { spawnSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const grade = process.argv[2];
if (!grade) {
  console.error('Usage: node scripts/content/run-grade.mjs <gradeNumber>');
  process.exit(1);
}

const prefix = `kelas${grade}-`;
const files = fs
  .readdirSync(__dirname)
  .filter((f) => f.startsWith(prefix) && f.endsWith('.mjs'))
  .sort();

if (files.length === 0) {
  console.error(`Tidak ada script untuk prefix "${prefix}"`);
  process.exit(1);
}

console.log(`Menjalankan ${files.length} script untuk Kelas ${grade}: ${files.join(', ')}`);
for (const file of files) {
  const fullPath = path.join(__dirname, file);
  const res = spawnSync(process.execPath, [fullPath], { stdio: 'inherit' });
  if (res.status !== 0) {
    console.error(`Gagal menjalankan ${file} (exit code ${res.status})`);
    process.exit(res.status || 1);
  }
}
console.log(`🎉 SEMUA ${files.length} MAPEL KELAS ${grade} SELESAI DIUNGGAH!`);

