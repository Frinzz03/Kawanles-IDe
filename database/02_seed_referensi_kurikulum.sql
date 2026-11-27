-- ============================================================================
-- 02_seed_referensi_kurikulum.sql
-- Seed data awal referensi kurikulum Web Modul Ajar SD–SMP (Gresik Daratan)
-- Sumber acuan: Kurikulum/00_Master_Kurikulum_Induk.md (v1.0)
-- Bersifat idempoten (aman dijalankan ulang tanpa duplikasi data).
-- ============================================================================

-- 1. Jenjang Pendidikan
INSERT INTO education_levels (code, name) VALUES
    ('SD', 'Sekolah Dasar'),
    ('SMP', 'Sekolah Menengah Pertama')
ON CONFLICT (code) DO NOTHING;

-- 2. Kelas 1–9
INSERT INTO grades (education_level_id, grade_number, name)
SELECT el.id, g.grade_number, g.name
FROM (VALUES
    ('SD', 1, 'Kelas 1 SD'),
    ('SD', 2, 'Kelas 2 SD'),
    ('SD', 3, 'Kelas 3 SD'),
    ('SD', 4, 'Kelas 4 SD'),
    ('SD', 5, 'Kelas 5 SD'),
    ('SD', 6, 'Kelas 6 SD'),
    ('SMP', 7, 'Kelas 7 SMP'),
    ('SMP', 8, 'Kelas 8 SMP'),
    ('SMP', 9, 'Kelas 9 SMP')
) AS g(level_code, grade_number, name)
JOIN education_levels el ON el.code = g.level_code
ON CONFLICT (grade_number) DO NOTHING;

-- 3. Fase Kurikulum Merdeka
INSERT INTO phases (code, name, description) VALUES
    ('A', 'Fase A', 'Umumnya untuk kelas 1–2 SD'),
    ('B', 'Fase B', 'Umumnya untuk kelas 3–4 SD'),
    ('C', 'Fase C', 'Umumnya untuk kelas 5–6 SD'),
    ('D', 'Fase D', 'Umumnya untuk kelas 7–9 SMP')
ON CONFLICT (code) DO NOTHING;

-- 4. Tujuh Mata Pelajaran (mengikuti kode pada 00_Master_Kurikulum_Induk.md)
INSERT INTO subjects (code, name, description) VALUES
    ('MAT', 'Matematika', 'Matematika SD kelas 1–6 dan SMP kelas 7–9'),
    ('BIN', 'Bahasa Indonesia', 'Literasi lisan, membaca, memirsa, dan menulis SD 1–6 dan SMP 7–9'),
    ('BIG', 'Bahasa Inggris', 'Kelas 1–2 SD sebagai pengayaan; kelas 3–9 mengikuti pemetaan fase B–D'),
    ('BJ', 'Bahasa Jawa', 'Muatan lokal Bahasa Jawa konteks Gresik daratan (SD 1–6 dan SMP 7–9)'),
    ('IPAS', 'IPAS', 'Ilmu Pengetahuan Alam dan Sosial terpadu SD kelas 3–6'),
    ('IPA', 'IPA', 'Ilmu Pengetahuan Alam terpadu SMP kelas 7–9'),
    ('IPS', 'IPS', 'Ilmu Pengetahuan Sosial terpadu SMP kelas 7–9')
ON CONFLICT (code) DO NOTHING;

-- 5. Referensi Kurikulum Utama
INSERT INTO curriculum_references (title, publisher, publication_year, document_number, source_type, notes)
SELECT v.title, v.publisher, v.publication_year, v.document_number, v.source_type, v.notes
FROM (VALUES
    (
        'Capaian Pembelajaran pada Pendidikan Anak Usia Dini, Jenjang Pendidikan Dasar, dan Jenjang Pendidikan Menengah',
        'BSKAP Kemendikdasmen',
        2025,
        'Keputusan Kepala BSKAP Nomor 046/H/KR/2025',
        'regulation',
        'Acuan utama CP mata pelajaran nasional dalam proyek Web Modul Ajar.'
    ),
    (
        'Peraturan Bupati Gresik tentang Mata Pelajaran Bahasa Daerah sebagai Muatan Lokal Wajib',
        'Pemerintah Kabupaten Gresik',
        2025,
        'Perbup Gresik Nomor 62 Tahun 2025 jo. Nomor 92 Tahun 2025',
        'regulation',
        'Konten proyek dibatasi pada Bahasa Jawa untuk wilayah Gresik daratan; Bahasa Madura dan dialek Bawean tidak dimasukkan.'
    )
) AS v(title, publisher, publication_year, document_number, source_type, notes)
WHERE NOT EXISTS (
    SELECT 1 FROM curriculum_references cr WHERE cr.document_number = v.document_number
);

-- 6. Pemetaan Mata Pelajaran × Kelas × Fase
WITH mapping_data(subject_code, grade_number, phase_code, learning_status, curriculum_note) AS (
    VALUES
    -- Matematika (SD 1–6, SMP 7–9)
    ('MAT', 1, 'A', 'regular', 'Fase A Matematika SD'),
    ('MAT', 2, 'A', 'regular', 'Fase A Matematika SD'),
    ('MAT', 3, 'B', 'regular', 'Fase B Matematika SD'),
    ('MAT', 4, 'B', 'regular', 'Fase B Matematika SD'),
    ('MAT', 5, 'C', 'regular', 'Fase C Matematika SD'),
    ('MAT', 6, 'C', 'regular', 'Fase C Matematika SD'),
    ('MAT', 7, 'D', 'regular', 'Fase D Matematika SMP'),
    ('MAT', 8, 'D', 'regular', 'Fase D Matematika SMP'),
    ('MAT', 9, 'D', 'regular', 'Fase D Matematika SMP'),

    -- Bahasa Indonesia (SD 1–6, SMP 7–9)
    ('BIN', 1, 'A', 'regular', 'Fase A Bahasa Indonesia SD'),
    ('BIN', 2, 'A', 'regular', 'Fase A Bahasa Indonesia SD'),
    ('BIN', 3, 'B', 'regular', 'Fase B Bahasa Indonesia SD'),
    ('BIN', 4, 'B', 'regular', 'Fase B Bahasa Indonesia SD'),
    ('BIN', 5, 'C', 'regular', 'Fase C Bahasa Indonesia SD'),
    ('BIN', 6, 'C', 'regular', 'Fase C Bahasa Indonesia SD'),
    ('BIN', 7, 'D', 'regular', 'Fase D Bahasa Indonesia SMP'),
    ('BIN', 8, 'D', 'regular', 'Fase D Bahasa Indonesia SMP'),
    ('BIN', 9, 'D', 'regular', 'Fase D Bahasa Indonesia SMP'),

    -- Bahasa Inggris (SD 1–2 pengayaan, SD 3–6 & SMP 7–9 reguler)
    ('BIG', 1, NULL, 'enrichment', 'Pengayaan/pengenalan dasar untuk kebutuhan bimbel; bukan CP wajib Fase A'),
    ('BIG', 2, NULL, 'enrichment', 'Pengayaan/pengembangan kosakata untuk kebutuhan bimbel; bukan CP wajib Fase A'),
    ('BIG', 3, 'B', 'regular', 'Fase B Bahasa Inggris SD'),
    ('BIG', 4, 'B', 'regular', 'Fase B Bahasa Inggris SD'),
    ('BIG', 5, 'C', 'regular', 'Fase C Bahasa Inggris SD'),
    ('BIG', 6, 'C', 'regular', 'Fase C Bahasa Inggris SD'),
    ('BIG', 7, 'D', 'regular', 'Fase D Bahasa Inggris SMP'),
    ('BIG', 8, 'D', 'regular', 'Fase D Bahasa Inggris SMP'),
    ('BIG', 9, 'D', 'regular', 'Fase D Bahasa Inggris SMP'),

    -- Bahasa Jawa (Muatan lokal Gresik daratan, SD 1–6 & SMP 7–9)
    ('BJ', 1, 'A', 'local_content', 'Muatan lokal Bahasa Jawa Gresik daratan (kerangka kerja Fase A)'),
    ('BJ', 2, 'A', 'local_content', 'Muatan lokal Bahasa Jawa Gresik daratan (kerangka kerja Fase A)'),
    ('BJ', 3, 'B', 'local_content', 'Muatan lokal Bahasa Jawa Gresik daratan (kerangka kerja Fase B)'),
    ('BJ', 4, 'B', 'local_content', 'Muatan lokal Bahasa Jawa Gresik daratan (kerangka kerja Fase B)'),
    ('BJ', 5, 'C', 'local_content', 'Muatan lokal Bahasa Jawa Gresik daratan (kerangka kerja Fase C)'),
    ('BJ', 6, 'C', 'local_content', 'Muatan lokal Bahasa Jawa Gresik daratan (kerangka kerja Fase C)'),
    ('BJ', 7, 'D', 'local_content', 'Muatan lokal Bahasa Jawa Gresik daratan (kerangka kerja Fase D)'),
    ('BJ', 8, 'D', 'local_content', 'Muatan lokal Bahasa Jawa Gresik daratan (kerangka kerja Fase D)'),
    ('BJ', 9, 'D', 'local_content', 'Muatan lokal Bahasa Jawa Gresik daratan (kerangka kerja Fase D)'),

    -- IPAS (SD 3–6)
    ('IPAS', 3, 'B', 'regular', 'IPAS terpadu SD Fase B'),
    ('IPAS', 4, 'B', 'regular', 'IPAS terpadu SD Fase B'),
    ('IPAS', 5, 'C', 'regular', 'IPAS terpadu SD Fase C'),
    ('IPAS', 6, 'C', 'regular', 'IPAS terpadu SD Fase C'),

    -- IPA (SMP 7–9)
    ('IPA', 7, 'D', 'regular', 'IPA terpadu SMP Fase D'),
    ('IPA', 8, 'D', 'regular', 'IPA terpadu SMP Fase D'),
    ('IPA', 9, 'D', 'regular', 'IPA terpadu SMP Fase D'),

    -- IPS (SMP 7–9)
    ('IPS', 7, 'D', 'regular', 'IPS terpadu SMP Fase D'),
    ('IPS', 8, 'D', 'regular', 'IPS terpadu SMP Fase D'),
    ('IPS', 9, 'D', 'regular', 'IPS terpadu SMP Fase D')
)
INSERT INTO subject_grade_mappings (subject_id, grade_id, phase_id, learning_status, curriculum_note)
SELECT s.id, g.id, p.id, md.learning_status, md.curriculum_note
FROM mapping_data md
JOIN subjects s ON s.code = md.subject_code
JOIN grades g ON g.grade_number = md.grade_number
LEFT JOIN phases p ON p.code = md.phase_code
ON CONFLICT (subject_id, grade_id) DO NOTHING;

-- 7. Elemen CP Dasar Lintas Mata Pelajaran
WITH cp_data(subject_code, phase_code, elem_code, elem_name, elem_desc) AS (
    VALUES
    -- Matematika
    ('MAT', NULL, 'MAT-BIL', 'Bilangan', 'Bilangan cacah, bulat, rasional, pecahan, desimal, operasi, rasio, dan proporsi'),
    ('MAT', NULL, 'MAT-ALG', 'Aljabar', 'Pola, kalimat matematika, bentuk aljabar, persamaan, pertidaksamaan, relasi, dan fungsi'),
    ('MAT', NULL, 'MAT-PEN', 'Pengukuran', 'Besaran, satuan, estimasi, panjang, berat, waktu, luas, volume, dan sudut'),
    ('MAT', NULL, 'MAT-GEO', 'Geometri', 'Bangun datar, bangun ruang, koordinat, kesebangunan, Pythagoras, dan transformasi'),
    ('MAT', NULL, 'MAT-DAP', 'Analisis Data dan Peluang', 'Pengumpulan, penyajian, interpretasi data, statistika, dan peluang'),

    -- Bahasa Indonesia
    ('BIN', NULL, 'BIN-MY', 'Menyimak', 'Memahami informasi, gagasan, pesan, dan isi teks yang didengar'),
    ('BIN', NULL, 'BIN-MM', 'Membaca dan Memirsa', 'Membaca, memahami, menganalisis teks tertulis, visual, dan audiovisual'),
    ('BIN', NULL, 'BIN-BP', 'Berbicara dan Mempresentasikan', 'Mengungkapkan gagasan, pendapat, dan informasi secara lisan'),
    ('BIN', NULL, 'BIN-MN', 'Menulis', 'Menghasilkan berbagai jenis teks sesuai tujuan, struktur, dan kaidah kebahasaan'),

    -- Bahasa Inggris
    ('BIG', NULL, 'BIG-SB', 'Menyimak–Berbicara', 'Listening dan Speaking terpadu'),
    ('BIG', NULL, 'BIG-MM', 'Membaca–Memirsa', 'Reading dan Viewing terpadu'),
    ('BIG', NULL, 'BIG-MP', 'Menulis–Mempresentasikan', 'Writing dan Presenting terpadu'),

    -- Bahasa Jawa (Taksonomi kompetensi internal, bukan pengganti naskah CP resmi Perbup)
    ('BJ', NULL, 'BJ-MY', 'Menyimak', 'Memahami percakapan, instruksi, cerita, pawarta, dan informasi lisan'),
    ('BJ', NULL, 'BJ-BI', 'Berbicara', 'Menyapa, berdialog, bercerita, sesorah, dan pranatacara'),
    ('BJ', NULL, 'BJ-MB', 'Membaca dan Memirsa', 'Memahami teks, sastra, informasi visual, dan aksara Jawa'),
    ('BJ', NULL, 'BJ-MN', 'Menulis', 'Menyusun kalimat, paragraf, dialog, karya sastra, dan tulisan beraksara Jawa'),

    -- IPAS
    ('IPAS', NULL, 'IPAS-PEM', 'Pemahaman IPAS', 'Makhluk hidup, zat, energi, bumi, ruang, waktu, masyarakat, dan ekonomi'),
    ('IPAS', NULL, 'IPAS-KP', 'Keterampilan Proses', 'Mengamati, mempertanyakan, menyelidiki, menganalisis data, dan mengomunikasikan'),

    -- IPA SMP
    ('IPA', 'D', 'IPA-PEM', 'Pemahaman IPA', 'Biologi, Fisika, Kimia, serta Bumi dan Antariksa Fase D'),
    ('IPA', 'D', 'IPA-KP', 'Keterampilan Proses', 'Penyelidikan ilmiah, variabel, eksperimen, analisis data, dan refleksi'),

    -- IPS SMP
    ('IPS', 'D', 'IPS-PK', 'Pemahaman Konsep', 'Geografi, ekonomi, sejarah, dan sosiologi terpadu Fase D'),
    ('IPS', 'D', 'IPS-KP', 'Keterampilan Proses', 'Mengamati, menanya, menyelidiki, mengolah informasi, dan merefleksikan')
)
INSERT INTO cp_elements (subject_id, phase_id, code, name, description)
SELECT s.id, p.id, c.elem_code, c.elem_name, c.elem_desc
FROM cp_data c
JOIN subjects s ON s.code = c.subject_code
LEFT JOIN phases p ON p.code = c.phase_code
WHERE NOT EXISTS (
    SELECT 1 FROM cp_elements existing
    WHERE existing.subject_id = s.id
      AND COALESCE(existing.phase_id, '00000000-0000-0000-0000-000000000000'::UUID)
        = COALESCE(p.id, '00000000-0000-0000-0000-000000000000'::UUID)
      AND existing.code = c.elem_code
);

-- 8. Klasifikasi Khusus Per Mata Pelajaran
WITH ct_data(subject_code, type_code, type_name, type_desc) AS (
    VALUES
    ('IPAS', 'BIDANG_MATERI', 'Bidang Materi IPAS', 'Pengelompokan internal Sains, Sosial, atau Terintegrasi'),
    ('IPA', 'BIDANG_MATERI', 'Bidang Materi IPA', 'Pengelompokan Biologi, Fisika, Kimia, atau Bumi dan Antariksa'),
    ('IPS', 'BIDANG_KAJIAN', 'Bidang Kajian IPS', 'Pengelompokan Geografi, Ekonomi, Sejarah, atau Sosiologi'),
    ('BIG', 'SKILL', 'Keterampilan Bahasa Inggris', 'Listening, Speaking, Reading, Viewing, Writing, Presenting'),
    ('BJ', 'RAGAM_BAHASA', 'Unggah-Ungguh Basa', 'Ngoko Lugu, Ngoko Alus, Krama Lugu, Krama Alus'),
    ('BJ', 'KOMPETENSI_KHUSUS', 'Muatan Khusus Bahasa Jawa', 'Aksara Jawa, Sastra, dan Budaya Gresik Daratan')
)
INSERT INTO classification_types (subject_id, code, name, description)
SELECT s.id, ct.type_code, ct.type_name, ct.type_desc
FROM ct_data ct
JOIN subjects s ON s.code = ct.subject_code
ON CONFLICT (subject_id, code) DO NOTHING;

WITH cv_data(subject_code, type_code, val_code, val_name) AS (
    VALUES
    -- IPAS
    ('IPAS', 'BIDANG_MATERI', 'SAINS', 'Sains'),
    ('IPAS', 'BIDANG_MATERI', 'SOSIAL', 'Sosial'),
    ('IPAS', 'BIDANG_MATERI', 'TERINTEGRASI', 'Terintegrasi'),
    -- IPA
    ('IPA', 'BIDANG_MATERI', 'BIOLOGI', 'Biologi'),
    ('IPA', 'BIDANG_MATERI', 'FISIKA', 'Fisika'),
    ('IPA', 'BIDANG_MATERI', 'KIMIA', 'Kimia'),
    ('IPA', 'BIDANG_MATERI', 'BUMI_ANTARIKSA', 'Bumi dan Antariksa'),
    ('IPA', 'BIDANG_MATERI', 'TERINTEGRASI', 'Terintegrasi'),
    -- IPS
    ('IPS', 'BIDANG_KAJIAN', 'GEOGRAFI', 'Geografi'),
    ('IPS', 'BIDANG_KAJIAN', 'EKONOMI', 'Ekonomi'),
    ('IPS', 'BIDANG_KAJIAN', 'SEJARAH', 'Sejarah'),
    ('IPS', 'BIDANG_KAJIAN', 'SOSIOLOGI', 'Sosiologi'),
    -- Bahasa Inggris
    ('BIG', 'SKILL', 'LISTENING', 'Listening'),
    ('BIG', 'SKILL', 'SPEAKING', 'Speaking'),
    ('BIG', 'SKILL', 'READING', 'Reading'),
    ('BIG', 'SKILL', 'VIEWING', 'Viewing'),
    ('BIG', 'SKILL', 'WRITING', 'Writing'),
    ('BIG', 'SKILL', 'PRESENTING', 'Presenting'),
    -- Bahasa Jawa
    ('BJ', 'RAGAM_BAHASA', 'NGOKO_LUGU', 'Ngoko Lugu'),
    ('BJ', 'RAGAM_BAHASA', 'NGOKO_ALUS', 'Ngoko Alus'),
    ('BJ', 'RAGAM_BAHASA', 'KRAMA_LUGU', 'Krama Lugu'),
    ('BJ', 'RAGAM_BAHASA', 'KRAMA_ALUS', 'Krama Alus'),
    ('BJ', 'KOMPETENSI_KHUSUS', 'AKSARA_JAWA', 'Aksara Jawa'),
    ('BJ', 'KOMPETENSI_KHUSUS', 'SASTRA_BUDAYA', 'Sastra dan Budaya')
)
INSERT INTO classification_values (classification_type_id, code, name)
SELECT ct.id, cv.val_code, cv.val_name
FROM cv_data cv
JOIN subjects s ON s.code = cv.subject_code
JOIN classification_types ct ON ct.subject_id = s.id AND ct.code = cv.type_code
ON CONFLICT (classification_type_id, code) DO NOTHING;

