-- ============================================================================
-- 01_schema_database_neon.sql
-- Web Modul Ajar Guru Les SD–SMP (Gresik Daratan)
-- Target DBMS : Neon PostgreSQL (PostgreSQL 16+)
-- Referensi   : ERD Final (28 tabel utama + kolom question_snapshot)
-- Catatan     : profiles.auth_user_id bertipe TEXT agar kompatibel dengan
--               Neon Auth (Better Auth).
-- ============================================================================

CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- ----------------------------------------------------------------------------
-- Fungsi trigger untuk memperbarui updated_at secara otomatis
-- ----------------------------------------------------------------------------
CREATE OR REPLACE FUNCTION set_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- ============================================================================
-- KELOMPOK 1: REFERENSI KURIKULUM & JENJANG
-- (Dibuat lebih dulu agar dapat direferensikan oleh enrollments & konten)
-- ============================================================================

-- 1. education_levels (SD, SMP)
CREATE TABLE IF NOT EXISTS education_levels (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    code VARCHAR(10) NOT NULL UNIQUE CHECK (code IN ('SD', 'SMP')),
    name VARCHAR(50) NOT NULL
);

-- 2. grades (Kelas 1–6 SD, Kelas 7–9 SMP)
CREATE TABLE IF NOT EXISTS grades (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    education_level_id UUID NOT NULL REFERENCES education_levels(id) ON DELETE RESTRICT,
    grade_number SMALLINT NOT NULL UNIQUE CHECK (grade_number BETWEEN 1 AND 9),
    name VARCHAR(30) NOT NULL
);

-- Validasi lintas tabel: kelas 1–6 hanya SD, kelas 7–9 hanya SMP
CREATE OR REPLACE FUNCTION validate_grade_education_level()
RETURNS TRIGGER AS $$
DECLARE
    v_level_code VARCHAR(10);
BEGIN
    SELECT code INTO v_level_code
    FROM education_levels
    WHERE id = NEW.education_level_id;

    IF v_level_code = 'SD' AND (NEW.grade_number < 1 OR NEW.grade_number > 6) THEN
        RAISE EXCEPTION 'Jenjang SD hanya boleh memiliki kelas 1 sampai 6 (diberikan: %)', NEW.grade_number;
    END IF;

    IF v_level_code = 'SMP' AND (NEW.grade_number < 7 OR NEW.grade_number > 9) THEN
        RAISE EXCEPTION 'Jenjang SMP hanya boleh memiliki kelas 7 sampai 9 (diberikan: %)', NEW.grade_number;
    END IF;

    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trg_validate_grade_education_level ON grades;
CREATE TRIGGER trg_validate_grade_education_level
BEFORE INSERT OR UPDATE ON grades
FOR EACH ROW EXECUTE FUNCTION validate_grade_education_level();

-- 3. phases (Fase A, B, C, D)
CREATE TABLE IF NOT EXISTS phases (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    code VARCHAR(5) NOT NULL UNIQUE,
    name VARCHAR(50) NOT NULL,
    description TEXT
);

-- 4. subjects (7 mata pelajaran)
CREATE TABLE IF NOT EXISTS subjects (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    code VARCHAR(20) NOT NULL UNIQUE,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    is_active BOOLEAN NOT NULL DEFAULT TRUE
);

-- 5. subject_grade_mappings (Pusat penghubung mapel, kelas, dan fase)
CREATE TABLE IF NOT EXISTS subject_grade_mappings (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    subject_id UUID NOT NULL REFERENCES subjects(id) ON DELETE RESTRICT,
    grade_id UUID NOT NULL REFERENCES grades(id) ON DELETE RESTRICT,
    phase_id UUID REFERENCES phases(id) ON DELETE RESTRICT,
    learning_status VARCHAR(30) NOT NULL DEFAULT 'regular'
        CHECK (learning_status IN ('regular', 'enrichment', 'local_content')),
    curriculum_note TEXT,
    is_active BOOLEAN NOT NULL DEFAULT TRUE,
    CONSTRAINT uq_subject_grade_mapping UNIQUE (subject_id, grade_id)
);

-- 6. curriculum_references (Sumber resmi, buku teks, regulasi daerah)
CREATE TABLE IF NOT EXISTS curriculum_references (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title VARCHAR(255) NOT NULL,
    author VARCHAR(200),
    publisher VARCHAR(200),
    publication_year SMALLINT CHECK (publication_year IS NULL OR publication_year BETWEEN 1900 AND 2100),
    document_number VARCHAR(100),
    source_type VARCHAR(30) NOT NULL DEFAULT 'other'
        CHECK (source_type IN ('regulation', 'guide', 'textbook', 'website', 'other')),
    url TEXT,
    notes TEXT
);

-- 7. cp_elements (Elemen Capaian Pembelajaran / Kompetensi)
CREATE TABLE IF NOT EXISTS cp_elements (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    subject_id UUID NOT NULL REFERENCES subjects(id) ON DELETE RESTRICT,
    phase_id UUID REFERENCES phases(id) ON DELETE RESTRICT,
    code VARCHAR(30),
    name VARCHAR(150) NOT NULL,
    description TEXT,
    source_reference_id UUID REFERENCES curriculum_references(id) ON DELETE SET NULL
);

CREATE UNIQUE INDEX IF NOT EXISTS uq_cp_elements_subject_phase_code
    ON cp_elements (subject_id, COALESCE(phase_id, '00000000-0000-0000-0000-000000000000'::UUID), code)
    WHERE code IS NOT NULL;

-- ============================================================================
-- KELOMPOK 2: PENGGUNA DAN AKSES
-- ============================================================================

-- 8. profiles (Identitas guru dan siswa, terhubung ke Neon Auth)
CREATE TABLE IF NOT EXISTS profiles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    auth_user_id TEXT NOT NULL UNIQUE,
    email VARCHAR(255),
    full_name VARCHAR(150) NOT NULL,
    role VARCHAR(20) NOT NULL CHECK (role IN ('teacher', 'student')),
    is_active BOOLEAN NOT NULL DEFAULT TRUE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

DROP TRIGGER IF EXISTS trg_profiles_updated_at ON profiles;
CREATE TRIGGER trg_profiles_updated_at
BEFORE UPDATE ON profiles
FOR EACH ROW EXECUTE FUNCTION set_updated_at();

-- 9. student_profiles (Data khusus siswa les)
CREATE TABLE IF NOT EXISTS student_profiles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    profile_id UUID NOT NULL UNIQUE REFERENCES profiles(id) ON DELETE RESTRICT,
    student_code VARCHAR(30) UNIQUE,
    school_name VARCHAR(150),
    notes TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

DROP TRIGGER IF EXISTS trg_student_profiles_updated_at ON student_profiles;
CREATE TRIGGER trg_student_profiles_updated_at
BEFORE UPDATE ON student_profiles
FOR EACH ROW EXECUTE FUNCTION set_updated_at();

-- 10. student_enrollments (Mata pelajaran & kelas yang diikuti siswa)
CREATE TABLE IF NOT EXISTS student_enrollments (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    student_profile_id UUID NOT NULL REFERENCES student_profiles(id) ON DELETE RESTRICT,
    subject_grade_mapping_id UUID NOT NULL REFERENCES subject_grade_mappings(id) ON DELETE RESTRICT,
    status VARCHAR(20) NOT NULL DEFAULT 'active'
        CHECK (status IN ('active', 'inactive', 'completed')),
    enrolled_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    CONSTRAINT uq_student_enrollment UNIQUE (student_profile_id, subject_grade_mapping_id)
);

-- ============================================================================
-- KELOMPOK 3: BAB, SUBMATERI, TUJUAN PEMBELAJARAN, DAN KLASIFIKASI
-- ============================================================================

-- 11. topics (Bab / Unit Pembelajaran)
CREATE TABLE IF NOT EXISTS topics (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    subject_grade_mapping_id UUID NOT NULL REFERENCES subject_grade_mappings(id) ON DELETE RESTRICT,
    code VARCHAR(40) UNIQUE,
    title VARCHAR(200) NOT NULL,
    description TEXT,
    sequence_number INTEGER NOT NULL CHECK (sequence_number > 0),
    curriculum_note TEXT,
    local_context TEXT,
    status VARCHAR(20) NOT NULL DEFAULT 'draft'
        CHECK (status IN ('draft', 'published', 'archived')),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    CONSTRAINT uq_topic_sequence UNIQUE (subject_grade_mapping_id, sequence_number)
);

DROP TRIGGER IF EXISTS trg_topics_updated_at ON topics;
CREATE TRIGGER trg_topics_updated_at
BEFORE UPDATE ON topics
FOR EACH ROW EXECUTE FUNCTION set_updated_at();

-- 12. topic_cp_elements (Relasi M:N bab dengan elemen CP)
CREATE TABLE IF NOT EXISTS topic_cp_elements (
    topic_id UUID NOT NULL REFERENCES topics(id) ON DELETE CASCADE,
    cp_element_id UUID NOT NULL REFERENCES cp_elements(id) ON DELETE RESTRICT,
    PRIMARY KEY (topic_id, cp_element_id)
);

-- 13. subtopics (Submateri dalam satu bab)
CREATE TABLE IF NOT EXISTS subtopics (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    topic_id UUID NOT NULL REFERENCES topics(id) ON DELETE RESTRICT,
    code VARCHAR(40) UNIQUE,
    title VARCHAR(200) NOT NULL,
    description TEXT,
    sequence_number INTEGER NOT NULL CHECK (sequence_number > 0),
    curriculum_note TEXT,
    local_context TEXT,
    status VARCHAR(20) NOT NULL DEFAULT 'draft'
        CHECK (status IN ('draft', 'published', 'archived')),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    CONSTRAINT uq_subtopic_sequence UNIQUE (topic_id, sequence_number)
);

DROP TRIGGER IF EXISTS trg_subtopics_updated_at ON subtopics;
CREATE TRIGGER trg_subtopics_updated_at
BEFORE UPDATE ON subtopics
FOR EACH ROW EXECUTE FUNCTION set_updated_at();

-- 14. learning_objectives (Tujuan pembelajaran per submateri)
CREATE TABLE IF NOT EXISTS learning_objectives (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    subtopic_id UUID NOT NULL REFERENCES subtopics(id) ON DELETE CASCADE,
    objective_code VARCHAR(40),
    description TEXT NOT NULL,
    sequence_number INTEGER NOT NULL CHECK (sequence_number > 0),
    CONSTRAINT uq_learning_objective_sequence UNIQUE (subtopic_id, sequence_number)
);

-- 15. classification_types (Jenis klasifikasi khusus mapel, mis. Bidang Materi, Ragam Bahasa)
CREATE TABLE IF NOT EXISTS classification_types (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    subject_id UUID NOT NULL REFERENCES subjects(id) ON DELETE RESTRICT,
    code VARCHAR(30) NOT NULL,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    CONSTRAINT uq_classification_type_subject_code UNIQUE (subject_id, code)
);

-- 16. classification_values (Nilai klasifikasi, mis. Biologi, Ngoko Alus, Listening)
CREATE TABLE IF NOT EXISTS classification_values (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    classification_type_id UUID NOT NULL REFERENCES classification_types(id) ON DELETE RESTRICT,
    code VARCHAR(40) NOT NULL,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    CONSTRAINT uq_classification_value_type_code UNIQUE (classification_type_id, code)
);

-- 17. subtopic_classifications (Relasi M:N submateri dengan klasifikasi)
CREATE TABLE IF NOT EXISTS subtopic_classifications (
    subtopic_id UUID NOT NULL REFERENCES subtopics(id) ON DELETE CASCADE,
    classification_value_id UUID NOT NULL REFERENCES classification_values(id) ON DELETE RESTRICT,
    PRIMARY KEY (subtopic_id, classification_value_id)
);

-- ============================================================================
-- KELOMPOK 4: KONTEN MATERI, MEDIA, REFERENSI, DAN VALIDASI
-- ============================================================================

-- 18. materials (Isi materi ajar terstruktur dalam blok JSONB)
CREATE TABLE IF NOT EXISTS materials (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    subtopic_id UUID NOT NULL REFERENCES subtopics(id) ON DELETE RESTRICT,
    title VARCHAR(200) NOT NULL,
    content JSONB NOT NULL DEFAULT '[]'::JSONB,
    sequence_number INTEGER NOT NULL DEFAULT 1 CHECK (sequence_number > 0),
    status VARCHAR(20) NOT NULL DEFAULT 'draft'
        CHECK (status IN ('draft', 'published', 'archived')),
    created_by UUID REFERENCES profiles(id) ON DELETE SET NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

DROP TRIGGER IF EXISTS trg_materials_updated_at ON materials;
CREATE TRIGGER trg_materials_updated_at
BEFORE UPDATE ON materials
FOR EACH ROW EXECUTE FUNCTION set_updated_at();

-- 19. media_assets (Metadata file media di Neon Object Storage)
CREATE TABLE IF NOT EXISTS media_assets (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    material_id UUID NOT NULL REFERENCES materials(id) ON DELETE CASCADE,
    storage_key TEXT NOT NULL,
    file_name VARCHAR(255) NOT NULL,
    media_type VARCHAR(30) NOT NULL
        CHECK (media_type IN ('image', 'audio', 'video', 'document')),
    mime_type VARCHAR(100),
    file_size BIGINT CHECK (file_size IS NULL OR file_size >= 0),
    alt_text TEXT,
    sequence_number INTEGER NOT NULL DEFAULT 1 CHECK (sequence_number > 0),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 20. material_references (Relasi M:N materi dengan sumber kurikulum)
CREATE TABLE IF NOT EXISTS material_references (
    material_id UUID NOT NULL REFERENCES materials(id) ON DELETE CASCADE,
    reference_id UUID NOT NULL REFERENCES curriculum_references(id) ON DELETE RESTRICT,
    page_number VARCHAR(50),
    citation_note TEXT,
    PRIMARY KEY (material_id, reference_id)
);

-- 21. validation_records (Riwayat audit & validasi guru/ahli)
CREATE TABLE IF NOT EXISTS validation_records (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    subtopic_id UUID NOT NULL REFERENCES subtopics(id) ON DELETE CASCADE,
    reviewer_profile_id UUID REFERENCES profiles(id) ON DELETE SET NULL,
    reviewer_name VARCHAR(150),
    status VARCHAR(60) NOT NULL DEFAULT 'draft'
        CHECK (status IN (
            'draft',
            'hasil_audit_struktur',
            'perlu_pemeriksaan_rincian',
            'perlu_revisi',
            'revisi_internal_selesai_perlu_validasi_guru',
            'finalisasi_struktur_selesai_perlu_validasi_guru',
            'tervalidasi'
        )),
    review_notes TEXT,
    reviewed_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ============================================================================
-- KELOMPOK 5: LATIHAN, BANK SOAL, DAN EVALUASI
-- ============================================================================

-- 22. activities (Latihan submateri, evaluasi bab, atau ujian akhir)
CREATE TABLE IF NOT EXISTS activities (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    subject_grade_mapping_id UUID REFERENCES subject_grade_mappings(id) ON DELETE RESTRICT,
    topic_id UUID REFERENCES topics(id) ON DELETE RESTRICT,
    subtopic_id UUID REFERENCES subtopics(id) ON DELETE RESTRICT,
    title VARCHAR(200) NOT NULL,
    description TEXT,
    activity_type VARCHAR(30) NOT NULL
        CHECK (activity_type IN ('practice', 'chapter_evaluation', 'final_evaluation')),
    instructions TEXT,
    time_limit_minutes INTEGER CHECK (time_limit_minutes IS NULL OR time_limit_minutes > 0),
    passing_score NUMERIC(5,2) CHECK (passing_score IS NULL OR (passing_score >= 0 AND passing_score <= 100)),
    max_attempts SMALLINT CHECK (max_attempts IS NULL OR max_attempts > 0),
    shuffle_questions BOOLEAN NOT NULL DEFAULT FALSE,
    status VARCHAR(20) NOT NULL DEFAULT 'draft'
        CHECK (status IN ('draft', 'published', 'archived')),
    created_by UUID REFERENCES profiles(id) ON DELETE SET NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

DROP TRIGGER IF EXISTS trg_activities_updated_at ON activities;
CREATE TRIGGER trg_activities_updated_at
BEFORE UPDATE ON activities
FOR EACH ROW EXECUTE FUNCTION set_updated_at();

-- 23. questions (Bank soal yang dapat dipakai ulang)
CREATE TABLE IF NOT EXISTS questions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    question_code VARCHAR(50) UNIQUE,
    question_type VARCHAR(30) NOT NULL
        CHECK (question_type IN ('multiple_choice', 'short_answer', 'essay')),
    question_text TEXT NOT NULL,
    question_content JSONB DEFAULT '{}'::JSONB,
    explanation TEXT,
    difficulty VARCHAR(20) NOT NULL DEFAULT 'basic'
        CHECK (difficulty IN ('basic', 'intermediate', 'advanced')),
    default_score NUMERIC(7,2) NOT NULL DEFAULT 1 CHECK (default_score >= 0),
    created_by UUID REFERENCES profiles(id) ON DELETE SET NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

DROP TRIGGER IF EXISTS trg_questions_updated_at ON questions;
CREATE TRIGGER trg_questions_updated_at
BEFORE UPDATE ON questions
FOR EACH ROW EXECUTE FUNCTION set_updated_at();

-- 24. question_options (Pilihan jawaban untuk soal pilihan ganda)
CREATE TABLE IF NOT EXISTS question_options (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    question_id UUID NOT NULL REFERENCES questions(id) ON DELETE CASCADE,
    option_label VARCHAR(5) NOT NULL,
    option_text TEXT NOT NULL,
    is_correct BOOLEAN NOT NULL DEFAULT FALSE,
    sequence_number SMALLINT NOT NULL CHECK (sequence_number > 0),
    CONSTRAINT uq_question_option_sequence UNIQUE (question_id, sequence_number)
);

-- 25. activity_questions (Relasi M:N aktivitas dengan soal)
CREATE TABLE IF NOT EXISTS activity_questions (
    activity_id UUID NOT NULL REFERENCES activities(id) ON DELETE CASCADE,
    question_id UUID NOT NULL REFERENCES questions(id) ON DELETE RESTRICT,
    sequence_number INTEGER NOT NULL CHECK (sequence_number > 0),
    score_weight NUMERIC(7,2) NOT NULL DEFAULT 1 CHECK (score_weight >= 0),
    PRIMARY KEY (activity_id, question_id)
);

-- ============================================================================
-- KELOMPOK 6: PENGERJAAN, NILAI, DAN PROGRES SISWA
-- ============================================================================

-- 26. attempts (Riwayat pengerjaan latihan/ujian siswa)
CREATE TABLE IF NOT EXISTS attempts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    activity_id UUID NOT NULL REFERENCES activities(id) ON DELETE RESTRICT,
    student_profile_id UUID NOT NULL REFERENCES student_profiles(id) ON DELETE RESTRICT,
    attempt_number SMALLINT NOT NULL CHECK (attempt_number > 0),
    score NUMERIC(7,2) CHECK (score IS NULL OR score >= 0),
    max_score NUMERIC(7,2) CHECK (max_score IS NULL OR max_score >= 0),
    status VARCHAR(20) NOT NULL DEFAULT 'in_progress'
        CHECK (status IN ('in_progress', 'submitted', 'graded')),
    started_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    submitted_at TIMESTAMPTZ,
    graded_at TIMESTAMPTZ,
    graded_by UUID REFERENCES profiles(id) ON DELETE SET NULL,
    CONSTRAINT uq_attempt_per_student UNIQUE (activity_id, student_profile_id, attempt_number)
);

-- 27. attempt_answers (Jawaban siswa + snapshot soal saat dikerjakan)
CREATE TABLE IF NOT EXISTS attempt_answers (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    attempt_id UUID NOT NULL REFERENCES attempts(id) ON DELETE CASCADE,
    question_id UUID NOT NULL REFERENCES questions(id) ON DELETE RESTRICT,
    selected_option_id UUID REFERENCES question_options(id) ON DELETE RESTRICT,
    answer_text TEXT,
    answer_data JSONB,
    question_snapshot JSONB,
    is_correct BOOLEAN,
    score NUMERIC(7,2) CHECK (score IS NULL OR score >= 0),
    feedback TEXT,
    answered_at TIMESTAMPTZ DEFAULT NOW(),
    CONSTRAINT uq_attempt_answer_question UNIQUE (attempt_id, question_id)
);

-- 28. student_progress (Status progres belajar siswa per submateri)
CREATE TABLE IF NOT EXISTS student_progress (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    student_profile_id UUID NOT NULL REFERENCES student_profiles(id) ON DELETE CASCADE,
    subtopic_id UUID NOT NULL REFERENCES subtopics(id) ON DELETE RESTRICT,
    progress_status VARCHAR(20) NOT NULL DEFAULT 'not_started'
        CHECK (progress_status IN ('not_started', 'in_progress', 'completed')),
    last_accessed_at TIMESTAMPTZ,
    completed_at TIMESTAMPTZ,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    CONSTRAINT uq_student_progress_subtopic UNIQUE (student_profile_id, subtopic_id)
);

DROP TRIGGER IF EXISTS trg_student_progress_updated_at ON student_progress;
CREATE TRIGGER trg_student_progress_updated_at
BEFORE UPDATE ON student_progress
FOR EACH ROW EXECUTE FUNCTION set_updated_at();

-- ============================================================================
-- INDEKS PERFORMA
-- ============================================================================

CREATE INDEX IF NOT EXISTS idx_grades_education_level ON grades(education_level_id);
CREATE INDEX IF NOT EXISTS idx_sgm_subject_id ON subject_grade_mappings(subject_id);
CREATE INDEX IF NOT EXISTS idx_sgm_grade_id ON subject_grade_mappings(grade_id);
CREATE INDEX IF NOT EXISTS idx_cp_elements_subject_phase ON cp_elements(subject_id, phase_id);
CREATE INDEX IF NOT EXISTS idx_student_enrollments_student ON student_enrollments(student_profile_id);
CREATE INDEX IF NOT EXISTS idx_student_enrollments_sgm ON student_enrollments(subject_grade_mapping_id);
CREATE INDEX IF NOT EXISTS idx_topics_sgm ON topics(subject_grade_mapping_id);
CREATE INDEX IF NOT EXISTS idx_topics_status ON topics(status);
CREATE INDEX IF NOT EXISTS idx_subtopics_topic ON subtopics(topic_id);
CREATE INDEX IF NOT EXISTS idx_subtopics_status ON subtopics(status);
CREATE INDEX IF NOT EXISTS idx_learning_objectives_subtopic ON learning_objectives(subtopic_id);
CREATE INDEX IF NOT EXISTS idx_materials_subtopic ON materials(subtopic_id);
CREATE INDEX IF NOT EXISTS idx_media_assets_material ON media_assets(material_id);
CREATE INDEX IF NOT EXISTS idx_validation_records_subtopic ON validation_records(subtopic_id);
CREATE INDEX IF NOT EXISTS idx_activities_sgm ON activities(subject_grade_mapping_id);
CREATE INDEX IF NOT EXISTS idx_activities_subtopic ON activities(subtopic_id);
CREATE INDEX IF NOT EXISTS idx_activities_topic ON activities(topic_id);
CREATE INDEX IF NOT EXISTS idx_question_options_question ON question_options(question_id);
CREATE INDEX IF NOT EXISTS idx_attempts_student ON attempts(student_profile_id);
CREATE INDEX IF NOT EXISTS idx_attempts_activity ON attempts(activity_id);
CREATE INDEX IF NOT EXISTS idx_attempt_answers_attempt ON attempt_answers(attempt_id);
CREATE INDEX IF NOT EXISTS idx_student_progress_student ON student_progress(student_profile_id);
CREATE INDEX IF NOT EXISTS idx_student_progress_subtopic ON student_progress(subtopic_id);
