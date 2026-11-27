-- ============================================================================
-- 04_verifikasi_database.sql
-- Jalankan di Neon SQL Editor setelah 01, 02, dan 03 selesai untuk memastikan
-- seluruh 28 tabel, referensi kurikulum, dan contoh relasi SD/SMP sudah aktif.
-- ============================================================================

-- 1. Pastikan jumlah tabel di schema public = 28
SELECT COUNT(*) AS total_tabel_public
FROM information_schema.tables
WHERE table_schema = 'public' AND table_type = 'BASE TABLE';

-- 2. Ringkasan 7 mata pelajaran dan jumlah kelas yang dipetakan
SELECT
    s.code AS kode_mapel,
    s.name AS mata_pelajaran,
    COUNT(sgm.id) AS jumlah_kelas,
    STRING_AGG(g.grade_number::TEXT, ', ' ORDER BY g.grade_number) AS daftar_kelas
FROM subjects s
LEFT JOIN subject_grade_mappings sgm ON sgm.subject_id = s.id
LEFT JOIN grades g ON g.id = sgm.grade_id
GROUP BY s.code, s.name
ORDER BY s.code;

-- 3. Cek contoh bab, submateri, materi, dan jumlah soal (Matematika SD 4 & IPA SMP 7)
SELECT
    s.code AS mapel,
    g.name AS kelas,
    t.code AS kode_bab,
    t.title AS judul_bab,
    st.title AS submateri,
    (SELECT COUNT(*) FROM materials m WHERE m.subtopic_id = st.id) AS jml_materi,
    (SELECT COUNT(*) FROM activities a WHERE a.subtopic_id = st.id) AS jml_latihan
FROM topics t
JOIN subject_grade_mappings sgm ON sgm.id = t.subject_grade_mapping_id
JOIN subjects s ON s.id = sgm.subject_id
JOIN grades g ON g.id = sgm.grade_id
JOIN subtopics st ON st.topic_id = t.id
ORDER BY g.grade_number, t.sequence_number, st.sequence_number;

