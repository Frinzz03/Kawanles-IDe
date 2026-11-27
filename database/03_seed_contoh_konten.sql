-- ============================================================================
-- 03_seed_contoh_konten.sql
-- Seed data contoh untuk pengujian relasi database (1 SD: Matematika Kelas 4,
-- 1 SMP: IPA Kelas 7) + akun demo guru & siswa + contoh materi & bank soal.
-- Bersifat idempoten (aman dijalankan ulang).
-- ============================================================================

DO $$
DECLARE
    v_teacher_id UUID;
    v_student_sd_profile_id UUID;
    v_student_sd_id UUID;
    v_student_smp_profile_id UUID;
    v_student_smp_id UUID;

    v_sgm_mat4 UUID;
    v_sgm_ipa7 UUID;
    v_cp_mat_bil UUID;
    v_cp_ipa_pem UUID;
    v_cp_ipa_kp UUID;
    v_cls_fisika UUID;

    v_topic_mat4 UUID;
    v_sub_mat4_1 UUID;
    v_sub_mat4_2 UUID;
    v_mat_mat4_1 UUID;
    v_act_mat4_1 UUID;
    v_q1 UUID;
    v_q2 UUID;

    v_topic_ipa7 UUID;
    v_sub_ipa7_1 UUID;
    v_sub_ipa7_2 UUID;
    v_mat_ipa7_1 UUID;
    v_act_ipa7_1 UUID;
    v_q3 UUID;
    v_q4 UUID;
BEGIN
    -- 1. Profil demo Guru & 2 Siswa (nanti auth_user_id diganti ID Neon Auth asli)
    INSERT INTO profiles (auth_user_id, full_name, role)
    VALUES ('demo-teacher-001', 'Guru Les Utama', 'teacher')
    ON CONFLICT (auth_user_id) DO NOTHING;
    SELECT id INTO v_teacher_id FROM profiles WHERE auth_user_id = 'demo-teacher-001';

    INSERT INTO profiles (auth_user_id, full_name, role)
    VALUES ('demo-student-sd4', 'Alya Rahma (Contoh SD 4)', 'student')
    ON CONFLICT (auth_user_id) DO NOTHING;
    SELECT id INTO v_student_sd_profile_id FROM profiles WHERE auth_user_id = 'demo-student-sd4';

    INSERT INTO student_profiles (profile_id, student_code, school_name, notes)
    VALUES (v_student_sd_profile_id, 'SIS-SD4-001', 'SDN Gresik Contoh', 'Siswa uji coba kelas 4 SD')
    ON CONFLICT (profile_id) DO NOTHING;
    SELECT id INTO v_student_sd_id FROM student_profiles WHERE profile_id = v_student_sd_profile_id;

    INSERT INTO profiles (auth_user_id, full_name, role)
    VALUES ('demo-student-smp7', 'Bima Pratama (Contoh SMP 7)', 'student')
    ON CONFLICT (auth_user_id) DO NOTHING;
    SELECT id INTO v_student_smp_profile_id FROM profiles WHERE auth_user_id = 'demo-student-smp7';

    INSERT INTO student_profiles (profile_id, student_code, school_name, notes)
    VALUES (v_student_smp_profile_id, 'SIS-SMP7-001', 'SMPN Gresik Contoh', 'Siswa uji coba kelas 7 SMP')
    ON CONFLICT (profile_id) DO NOTHING;
    SELECT id INTO v_student_smp_id FROM student_profiles WHERE profile_id = v_student_smp_profile_id;

    -- 2. Ambil ID pemetaan Matematika SD 4 & IPA SMP 7
    SELECT sgm.id INTO v_sgm_mat4
    FROM subject_grade_mappings sgm
    JOIN subjects s ON s.id = sgm.subject_id
    JOIN grades g ON g.id = sgm.grade_id
    WHERE s.code = 'MAT' AND g.grade_number = 4;

    SELECT sgm.id INTO v_sgm_ipa7
    FROM subject_grade_mappings sgm
    JOIN subjects s ON s.id = sgm.subject_id
    JOIN grades g ON g.id = sgm.grade_id
    WHERE s.code = 'IPA' AND g.grade_number = 7;

    -- Daftarkan siswa ke mapel kelasnya
    INSERT INTO student_enrollments (student_profile_id, subject_grade_mapping_id, status)
    VALUES
        (v_student_sd_id, v_sgm_mat4, 'active'),
        (v_student_smp_id, v_sgm_ipa7, 'active')
    ON CONFLICT (student_profile_id, subject_grade_mapping_id) DO NOTHING;

    -- Ambil ID Elemen CP & Klasifikasi
    SELECT id INTO v_cp_mat_bil FROM cp_elements WHERE code = 'MAT-BIL' LIMIT 1;
    SELECT id INTO v_cp_ipa_pem FROM cp_elements WHERE code = 'IPA-PEM' LIMIT 1;
    SELECT id INTO v_cp_ipa_kp  FROM cp_elements WHERE code = 'IPA-KP'  LIMIT 1;
    SELECT cv.id INTO v_cls_fisika
    FROM classification_values cv
    JOIN classification_types ct ON ct.id = cv.classification_type_id
    JOIN subjects s ON s.id = ct.subject_id
    WHERE s.code = 'IPA' AND cv.code = 'FISIKA' LIMIT 1;

    -- ========================================================================
    -- CONTOH 1: MATEMATIKA SD KELAS 4 — BAB 4: PECAHAN DAN DESIMAL
    -- ========================================================================
    INSERT INTO topics (
        subject_grade_mapping_id, code, title, description,
        sequence_number, curriculum_note, local_context, status
    )
    VALUES (
        v_sgm_mat4, 'MAT-SD4-04', 'Pecahan dan Desimal',
        'Membandingkan pecahan, pecahan senilai, mengurutkan pecahan, dan hubungan pecahan dengan desimal.',
        4, 'Rancangan struktur bab website untuk Matematika Fase B Kelas 4 SD.',
        'Contoh pembagian kue pudak khas Gresik untuk memvisualisasikan pecahan senilai.',
        'published'
    )
    ON CONFLICT (code) DO NOTHING;
    SELECT id INTO v_topic_mat4 FROM topics WHERE code = 'MAT-SD4-04';

    INSERT INTO topic_cp_elements (topic_id, cp_element_id)
    VALUES (v_topic_mat4, v_cp_mat_bil)
    ON CONFLICT DO NOTHING;

    INSERT INTO subtopics (topic_id, code, title, description, sequence_number, status)
    VALUES (
        v_topic_mat4, 'MAT-SD4-04-S01', 'Pecahan Senilai',
        'Memahami pecahan berbeda yang memiliki nilai sama menggunakan gambar dan perkalian/pembagian.',
        1, 'published'
    )
    ON CONFLICT (code) DO NOTHING;
    SELECT id INTO v_sub_mat4_1 FROM subtopics WHERE code = 'MAT-SD4-04-S01';

    INSERT INTO subtopics (topic_id, code, title, description, sequence_number, status)
    VALUES (
        v_topic_mat4, 'MAT-SD4-04-S02', 'Membandingkan dan Mengurutkan Pecahan',
        'Membandingkan dua pecahan berpenyebut sama maupun berbeda serta mengurutkannya.',
        2, 'published'
    )
    ON CONFLICT (code) DO NOTHING;
    SELECT id INTO v_sub_mat4_2 FROM subtopics WHERE code = 'MAT-SD4-04-S02';

    INSERT INTO learning_objectives (subtopic_id, objective_code, description, sequence_number)
    VALUES
        (v_sub_mat4_1, 'MAT-SD4-04-S01-TP01', 'Siswa mampu mengenali pecahan senilai menggunakan model gambar.', 1),
        (v_sub_mat4_1, 'MAT-SD4-04-S01-TP02', 'Siswa mampu menentukan pecahan senilai dengan mengalikan atau membagi pembilang dan penyebut dengan bilangan yang sama.', 2)
    ON CONFLICT (subtopic_id, sequence_number) DO NOTHING;

    INSERT INTO validation_records (subtopic_id, reviewer_name, status, review_notes)
    SELECT v_sub_mat4_1, 'Tim Kurikulum Internal', 'hasil_audit_struktur',
           'Struktur bab sesuai Master Matematika v1.0; menunggu validasi guru sebelum diberi status tervalidasi.'
    WHERE NOT EXISTS (SELECT 1 FROM validation_records WHERE subtopic_id = v_sub_mat4_1);

    -- Materi JSONB terstruktur untuk Pecahan Senilai
    IF NOT EXISTS (SELECT 1 FROM materials WHERE subtopic_id = v_sub_mat4_1 AND sequence_number = 1) THEN
        INSERT INTO materials (subtopic_id, title, content, sequence_number, status, created_by)
        VALUES (
            v_sub_mat4_1,
            'Mengenal Pecahan Senilai',
            '[
                {"type":"heading","text":"Apa itu Pecahan Senilai?"},
                {"type":"paragraph","text":"Pecahan senilai adalah dua atau lebih pecahan yang penulisannya berbeda, tetapi mewakili bagian atau nilai yang sama besar."},
                {"type":"example","title":"Contoh Sehari-hari","text":"Sebuah kue dipotong menjadi 2 bagian sama besar, lalu diambil 1 bagian (1/2). Jika kue berukuran sama dipotong menjadi 4 bagian dan diambil 2 bagian (2/4), besar bagian yang dimakan tetap sama! Jadi 1/2 = 2/4."},
                {"type":"tip","text":"Cara cepat: kalikan atau bagi pembilang (atas) dan penyebut (bawah) dengan bilangan yang sama (bukan 0). Misalnya: (1 x 3) / (2 x 3) = 3/6."}
            ]'::JSONB,
            1, 'published', v_teacher_id
        )
        RETURNING id INTO v_mat_mat4_1;
    END IF;

    -- Latihan & Bank Soal Pecahan Senilai
    IF NOT EXISTS (SELECT 1 FROM activities WHERE subtopic_id = v_sub_mat4_1 AND title = 'Latihan 1: Pecahan Senilai') THEN
        INSERT INTO activities (
            subject_grade_mapping_id, topic_id, subtopic_id,
            title, description, activity_type, instructions,
            time_limit_minutes, passing_score, max_attempts, status, created_by
        )
        VALUES (
            v_sgm_mat4, v_topic_mat4, v_sub_mat4_1,
            'Latihan 1: Pecahan Senilai',
            'Latihan pilihan ganda dasar untuk menguji pemahaman pecahan senilai.',
            'practice',
            'Pilih satu jawaban yang paling tepat. Perhatikan pembilang dan penyebut pada setiap pecahan.',
            15, 75.00, 3, 'published', v_teacher_id
        )
        RETURNING id INTO v_act_mat4_1;

        INSERT INTO questions (question_code, question_type, question_text, explanation, difficulty, default_score, created_by)
        VALUES (
            'Q-MAT-SD4-04-001', 'multiple_choice',
            'Pecahan manakah yang senilai dengan 1/2?',
            'Jika pembilang dan penyebut pada 1/2 masing-masing dikali 3, diperoleh (1×3)/(2×3) = 3/6.',
            'basic', 50, v_teacher_id
        )
        ON CONFLICT (question_code) DO NOTHING;
        SELECT id INTO v_q1 FROM questions WHERE question_code = 'Q-MAT-SD4-04-001';

        INSERT INTO question_options (question_id, option_label, option_text, is_correct, sequence_number) VALUES
            (v_q1, 'A', '2/5', FALSE, 1),
            (v_q1, 'B', '3/6', TRUE, 2),
            (v_q1, 'C', '3/5', FALSE, 3),
            (v_q1, 'D', '4/6', FALSE, 4)
        ON CONFLICT (question_id, sequence_number) DO NOTHING;

        INSERT INTO questions (question_code, question_type, question_text, explanation, difficulty, default_score, created_by)
        VALUES (
            'Q-MAT-SD4-04-002', 'multiple_choice',
            'Bentuk paling sederhana yang senilai dengan 6/8 adalah...',
            'Bagi pembilang dan penyebut dengan FPB-nya yaitu 2: (6÷2)/(8÷2) = 3/4.',
            'basic', 50, v_teacher_id
        )
        ON CONFLICT (question_code) DO NOTHING;
        SELECT id INTO v_q2 FROM questions WHERE question_code = 'Q-MAT-SD4-04-002';

        INSERT INTO question_options (question_id, option_label, option_text, is_correct, sequence_number) VALUES
            (v_q2, 'A', '2/4', FALSE, 1),
            (v_q2, 'B', '3/4', TRUE, 2),
            (v_q2, 'C', '3/8', FALSE, 3),
            (v_q2, 'D', '1/2', FALSE, 4)
        ON CONFLICT (question_id, sequence_number) DO NOTHING;

        INSERT INTO activity_questions (activity_id, question_id, sequence_number, score_weight) VALUES
            (v_act_mat4_1, v_q1, 1, 50),
            (v_act_mat4_1, v_q2, 2, 50)
        ON CONFLICT DO NOTHING;
    END IF;

    -- ========================================================================
    -- CONTOH 2: IPA SMP KELAS 7 — BAB 3: PENGUKURAN DALAM IPA
    -- ========================================================================
    INSERT INTO topics (
        subject_grade_mapping_id, code, title, description,
        sequence_number, curriculum_note, local_context, status
    )
    VALUES (
        v_sgm_ipa7, 'IPA-SMP7-03', 'Pengukuran dalam IPA',
        'Besaran pokok dan turunan, satuan SI, alat ukur, ketelitian, serta konversi satuan sederhana.',
        3, 'Rancangan struktur bab website untuk IPA Terpadu Fase D Kelas 7 SMP.',
        'Mengukur panjang, massa, dan volume benda di lingkungan sekolah atau rumah siswa.',
        'published'
    )
    ON CONFLICT (code) DO NOTHING;
    SELECT id INTO v_topic_ipa7 FROM topics WHERE code = 'IPA-SMP7-03';

    INSERT INTO topic_cp_elements (topic_id, cp_element_id) VALUES
        (v_topic_ipa7, v_cp_ipa_pem),
        (v_topic_ipa7, v_cp_ipa_kp)
    ON CONFLICT DO NOTHING;

    INSERT INTO subtopics (topic_id, code, title, description, sequence_number, status)
    VALUES (
        v_topic_ipa7, 'IPA-SMP7-03-S01', 'Besaran Pokok, Besaran Turunan, dan Satuan SI',
        'Membedakan besaran pokok dan besaran turunan beserta satuan Sistem Internasional (SI).',
        1, 'published'
    )
    ON CONFLICT (code) DO NOTHING;
    SELECT id INTO v_sub_ipa7_1 FROM subtopics WHERE code = 'IPA-SMP7-03-S01';

    INSERT INTO subtopics (topic_id, code, title, description, sequence_number, status)
    VALUES (
        v_topic_ipa7, 'IPA-SMP7-03-S02', 'Alat Ukur dan Ketelitian Pengukuran',
        'Memilih alat ukur panjang, massa, waktu, dan suhu yang sesuai serta membaca skalanya.',
        2, 'published'
    )
    ON CONFLICT (code) DO NOTHING;
    SELECT id INTO v_sub_ipa7_2 FROM subtopics WHERE code = 'IPA-SMP7-03-S02';

    IF v_cls_fisika IS NOT NULL THEN
        INSERT INTO subtopic_classifications (subtopic_id, classification_value_id) VALUES
            (v_sub_ipa7_1, v_cls_fisika),
            (v_sub_ipa7_2, v_cls_fisika)
        ON CONFLICT DO NOTHING;
    END IF;

    INSERT INTO learning_objectives (subtopic_id, objective_code, description, sequence_number)
    VALUES
        (v_sub_ipa7_1, 'IPA-SMP7-03-S01-TP01', 'Siswa mampu membedakan 7 besaran pokok beserta satuan SI-nya.', 1),
        (v_sub_ipa7_1, 'IPA-SMP7-03-S01-TP02', 'Siswa mampu mengidentifikasi contoh besaran turunan seperti luas, volume, dan kelajuan.', 2)
    ON CONFLICT (subtopic_id, sequence_number) DO NOTHING;

    IF NOT EXISTS (SELECT 1 FROM materials WHERE subtopic_id = v_sub_ipa7_1 AND sequence_number = 1) THEN
        INSERT INTO materials (subtopic_id, title, content, sequence_number, status, created_by)
        VALUES (
            v_sub_ipa7_1,
            'Besaran Pokok dan Satuan Internasional (SI)',
            '[
                {"type":"heading","text":"Pengertian Besaran dan Satuan"},
                {"type":"paragraph","text":"Besaran adalah segala sesuatu yang dapat diukur dan dinyatakan dengan angka. Satuan adalah pembanding yang digunakan dalam pengukuran."},
                {"type":"list","title":"7 Besaran Pokok dan Satuan SI","items":["Panjang — meter (m)","Massa — kilogram (kg)","Waktu — sekon (s)","Suhu — kelvin (K)","Kuat arus listrik — ampere (A)","Intensitas cahaya — kandela (cd)","Jumlah zat — mol (mol)"]},
                {"type":"example","title":"Besaran Turunan","text":"Luas (m²), volume (m³), dan kelajuan (m/s) merupakan besaran turunan karena satuannya diturunkan dari besaran pokok."}
            ]'::JSONB,
            1, 'published', v_teacher_id
        )
        RETURNING id INTO v_mat_ipa7_1;
    END IF;

    IF NOT EXISTS (SELECT 1 FROM activities WHERE subtopic_id = v_sub_ipa7_1 AND title = 'Latihan 1: Besaran dan Satuan SI') THEN
        INSERT INTO activities (
            subject_grade_mapping_id, topic_id, subtopic_id,
            title, description, activity_type, instructions,
            time_limit_minutes, passing_score, max_attempts, status, created_by
        )
        VALUES (
            v_sgm_ipa7, v_topic_ipa7, v_sub_ipa7_1,
            'Latihan 1: Besaran dan Satuan SI',
            'Latihan identifikasi besaran pokok, besaran turunan, dan satuan SI.',
            'practice',
            'Jawablah pertanyaan berikut dengan teliti.',
            15, 75.00, 3, 'published', v_teacher_id
        )
        RETURNING id INTO v_act_ipa7_1;

        INSERT INTO questions (question_code, question_type, question_text, explanation, difficulty, default_score, created_by)
        VALUES (
            'Q-IPA-SMP7-03-001', 'multiple_choice',
            'Manakah di antara kelompok berikut yang seluruhnya merupakan besaran pokok?',
            'Panjang (m), massa (kg), dan waktu (s) termasuk dalam 7 besaran pokok SI. Luas, volume, dan kecepatan adalah besaran turunan.',
            'basic', 50, v_teacher_id
        )
        ON CONFLICT (question_code) DO NOTHING;
        SELECT id INTO v_q3 FROM questions WHERE question_code = 'Q-IPA-SMP7-03-001';

        INSERT INTO question_options (question_id, option_label, option_text, is_correct, sequence_number) VALUES
            (v_q3, 'A', 'Panjang, luas, waktu', FALSE, 1),
            (v_q3, 'B', 'Panjang, massa, waktu', TRUE, 2),
            (v_q3, 'C', 'Massa, kecepatan, suhu', FALSE, 3),
            (v_q3, 'D', 'Volume, suhu, kuat arus', FALSE, 4)
        ON CONFLICT (question_id, sequence_number) DO NOTHING;

        INSERT INTO questions (question_code, question_type, question_text, explanation, difficulty, default_score, created_by)
        VALUES (
            'Q-IPA-SMP7-03-002', 'multiple_choice',
            'Satuan Sistem Internasional (SI) untuk besaran suhu adalah...',
            'Meskipun di kehidupan sehari-hari sering dipakai Celcius, satuan resmi SI untuk suhu adalah Kelvin (K).',
            'basic', 50, v_teacher_id
        )
        ON CONFLICT (question_code) DO NOTHING;
        SELECT id INTO v_q4 FROM questions WHERE question_code = 'Q-IPA-SMP7-03-002';

        INSERT INTO question_options (question_id, option_label, option_text, is_correct, sequence_number) VALUES
            (v_q4, 'A', 'Celcius', FALSE, 1),
            (v_q4, 'B', 'Fahrenheit', FALSE, 2),
            (v_q4, 'C', 'Kelvin', TRUE, 3),
            (v_q4, 'D', 'Reamur', FALSE, 4)
        ON CONFLICT (question_id, sequence_number) DO NOTHING;

        INSERT INTO activity_questions (activity_id, question_id, sequence_number, score_weight) VALUES
            (v_act_ipa7_1, v_q3, 1, 50),
            (v_act_ipa7_1, v_q4, 2, 50)
        ON CONFLICT DO NOTHING;
    END IF;
END $$;

