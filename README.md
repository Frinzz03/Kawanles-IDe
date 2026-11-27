# Kawanles IDe

**Sahabat Sinau & Modul Ajar SD–SMP** — Platform web modul ajar, latihan interaktif, dan evaluasi otomatis untuk pembelajaran kelas 1 SD sampai 9 SMP berbasis Kurikulum Merdeka dengan konteks lokal Gresik daratan (Jawa Timur).

## Fitur Utama

- **Kurikulum Terstruktur SD–SMP (Kelas 1–9):** 7 mata pelajaran (*Matematika, Bahasa Indonesia, Bahasa Inggris, Bahasa Jawa, IPAS, IPA, IPS*) dengan 314 bab, 1.577 submateri, dan 4.783 soal + pembahasan.
- **Ruang Belajar Siswa:** Mode baca nyaman per jenjang usia (dilengkapi fitur baca suara dan alat peraga interaktif untuk SD 1–3, eksplorasi visual/pecahan untuk SD 4–6, serta rumus & bedah miskonsepsi untuk SMP 7–9).
- **Ruang Kerja Guru:** Kelola bab, submateri, modul ajar, lampiran media (Neon Object Storage), bank soal, pembuatan draf AI 1-klik (opsional via Gemini API Key), serta pemantauan progres & nilai siswa.
- **Autentikasi & Backend Serverless:** Menggunakan React 18 + Vite 6 + Tailwind CSS v4 dengan Neon PostgreSQL, Neon Auth (Google & Email), Neon Functions (Hono), dan Neon Object Storage.

## Menjalankan Secara Lokal

1. Instal dependensi:
   ```bash
   npm install
   ```
2. Siapkan variabel lingkungan di `.env.local` (gunakan `npm run env:sync` jika terhubung dengan Neon project):
   - `VITE_API_BASE_URL`
   - `VITE_NEON_AUTH_URL`
3. Jalankan server pengembangan:
   ```bash
   npm run dev
   ```
4. Build produksi:
   ```bash
   npm run build
   ```

