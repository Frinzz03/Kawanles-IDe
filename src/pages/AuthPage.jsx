import React, { useEffect, useState } from 'react';
import {
  BookOpen,
  CheckCircle2,
  GraduationCap,
  Layers,
  UserCheck,
  Volume2,
} from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { API_BASE_URL } from '@/lib/api';
import { BrandMark } from '@/components/AppShell';
import { Button, Card, Input, Select } from '@/components/ui';

const STAGE_PREVIEWS = [
  {
    id: 'sd-awal',
    label: 'SD Kelas 1–3',
    heading: 'Visual Interaktif & Baca Suara',
    desc: 'Kartu klik bersuara, alat peraga hitung visual, komik dialog pendek, dan latihan singkat yang ramah anak.',
    sampleTitle: 'Matematika Kelas 1 · Penjumlahan 1–20',
    sampleHighlight: 'Alat peraga objek visual + kartu balik kosakata + audio pelafalan otomatis.',
  },
  {
    id: 'sd-atas',
    label: 'SD Kelas 4–6',
    heading: 'Konsep Terstruktur & Konteks Lokal',
    desc: 'Eksplorasi pecahan SVG, tabel perbandingan, Aksara Jawa Gresik daratan, dan contoh soal terbimbing langkah demi langkah.',
    sampleTitle: 'IPAS & Bahasa Jawa Kelas 4–6',
    sampleHighlight: 'Langkah penyelesaian dibuka bertahap saat guru mengajar di depan siswa.',
  },
  {
    id: 'smp',
    label: 'SMP Kelas 7–9',
    heading: 'Analisis Mendalam & Pembahasan Tajam',
    desc: 'Rumus jelas, bedah kesalahan umum (miskonsepsi), latihan pilihan ganda otomatis nilai, dan pembahasan per butir soal.',
    sampleTitle: 'Matematika, IPA, IPS, B. Indo, B. Inggris, B. Jawa',
    sampleHighlight: '768–783 soal per jenjang kelas lengkap dengan pembahasan langsung.',
  },
];

export default function AuthPage() {
  const { signIn, signInWithGoogle, signUp, session, me, error: authError, completeOnboarding } = useAuth();
  const [mode, setMode] = useState('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [role, setRole] = useState('teacher');
  const [gradeNumber, setGradeNumber] = useState('4');
  const [schoolName, setSchoolName] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [error, setError] = useState('');
  const [health, setHealth] = useState(null);
  const [activeStage, setActiveStage] = useState(STAGE_PREVIEWS[0].id);

  useEffect(() => {
    if (session?.user?.name && !fullName) {
      setFullName(session.user.name);
    }
  }, [session?.user?.name]);

  const handleGoogleLogin = async () => {
    setError('');
    setGoogleLoading(true);
    try {
      await signInWithGoogle();
    } catch (err) {
      setError(err.message || 'Gagal masuk dengan Google');
      setGoogleLoading(false);
    }
  };

  useEffect(() => {
    if (!API_BASE_URL) return;
    fetch(`${API_BASE_URL}/health`)
      .then((r) => r.json())
      .then((d) => setHealth(d))
      .catch(() => setHealth({ ok: false }));
  }, []);

  const needsOnboarding = Boolean(session?.user && me?.needsOnboarding);
  const currentStage = STAGE_PREVIEWS.find((s) => s.id === activeStage) || STAGE_PREVIEWS[0];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSubmitting(true);
    try {
      if (needsOnboarding) {
        await completeOnboarding({
          fullName: fullName || session.user.name || session.user.email,
          role,
          gradeNumber: Number(gradeNumber),
          schoolName,
        });
      } else if (mode === 'login') {
        await signIn(email, password);
      } else {
        await signUp({
          email,
          password,
          fullName,
          role,
          gradeNumber: Number(gradeNumber),
          schoolName,
        });
      }
    } catch (err) {
      setError(err.message || 'Terjadi kesalahan. Periksa kembali data Anda.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1A2421] flex flex-col">
      {/* Top Bar */}
      <header className="max-w-6xl w-full mx-auto px-4 sm:px-6 py-5 flex items-center justify-between gap-4 border-b border-[#E6DFD2]">
        <div className="flex items-center gap-2.5">
          <BrandMark />
          <div>
            <div className="font-display font-extrabold text-base text-[#1A2421] leading-tight">
              Kawanles IDe
            </div>
            <div className="text-xs text-[#5E6D68]">Sahabat Sinau & Modul Ajar SD–SMP</div>
          </div>
        </div>
        <div className="flex items-center gap-2 text-xs font-semibold text-[#3F4E49]">
          <span
            className={`w-2 h-2 rounded-full ${
              health?.ok ? 'bg-[#1D7A52]' : 'bg-[#C4A87E]'
            }`}
          />
          <span className="hidden sm:inline">
            {health?.ok
              ? `Siap digunakan · ${health.stats?.subjects || 7} Mata Pelajaran`
              : 'Menghubungkan server...'}
          </span>
        </div>
      </header>

      {/* Main Editorial Split */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 py-8 lg:py-12 grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
        {/* Left Editorial Column */}
        <div className="lg:col-span-7 space-y-8">
          <div className="space-y-4">
            <h1 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-[#1A2421] leading-[1.12] tracking-[-0.025em]">
              Modul ajar rapi untuk guru les, latihan seru untuk siswa SD–SMP.
            </h1>
            <p className="text-base text-[#51615C] max-w-xl leading-relaxed">
              Seluruh materi Kurikulum Merdeka kelas 1 SD sampai 9 SMP dengan muatan lokal Gresik
              daratan, alat peraga interaktif, dan penilaian soal otomatis dalam satu ruang belajar.
            </p>
          </div>

          {/* Real Curriculum Ledger Strip (No generic boxed cards) */}
          <dl className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-5 border-y border-[#E2D9C9]">
            {[
              { value: '1–9', label: 'Kelas SD & SMP' },
              { value: '314', label: 'Bab Terstruktur' },
              { value: '1.577', label: 'Submateri Lengkap' },
              { value: '4.783', label: 'Soal & Pembahasan' },
            ].map((stat) => (
              <div key={stat.label}>
                <dt className="text-xs font-medium text-[#64736E]">{stat.label}</dt>
                <dd className="font-display text-2xl font-extrabold text-[#0F4C42] tabular-nums mt-0.5">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>

          {/* Interactive Stage Switcher Showcase */}
          <div className="rounded-2xl bg-[#F3EDE2] border border-[#E2D9C9] p-5 sm:p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h2 className="font-display text-base font-bold text-[#1A2421]">
                Cara belajar menyesuaikan usia siswa
              </h2>
              <div className="inline-flex rounded-xl bg-[#E8E0D1] p-1 gap-1">
                {STAGE_PREVIEWS.map((st) => {
                  const active = st.id === activeStage;
                  return (
                    <button
                      key={st.id}
                      type="button"
                      onClick={() => setActiveStage(st.id)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
                        active
                          ? 'bg-[#0F4C42] text-white'
                          : 'text-[#43524D] hover:text-[#1A2421]'
                      }`}
                    >
                      {st.label}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="rounded-xl bg-white border border-[#E6DFD2] p-4 sm:p-5 space-y-3">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="font-display font-bold text-[#1A2421] text-base">
                    {currentStage.heading}
                  </div>
                  <p className="text-sm text-[#51615C] mt-1 leading-relaxed">{currentStage.desc}</p>
                </div>
                <div className="w-9 h-9 rounded-xl bg-[#FDF0E6] text-[#D96B27] flex items-center justify-center shrink-0">
                  {activeStage === 'sd-awal' ? (
                    <Volume2 className="w-4 h-4" />
                  ) : activeStage === 'sd-atas' ? (
                    <Layers className="w-4 h-4" />
                  ) : (
                    <BookOpen className="w-4 h-4" />
                  )}
                </div>
              </div>

              <div className="pt-3 border-t border-[#EFEAE0] flex flex-wrap items-center justify-between gap-2 text-xs">
                <span className="font-semibold text-[#0F4C42]">{currentStage.sampleTitle}</span>
                <span className="inline-flex items-center gap-1 text-[#51615C]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#1D7A52]" />
                  {currentStage.sampleHighlight}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Auth Sheet */}
        <div className="lg:col-span-5">
          <Card elevated className="p-6 sm:p-8 border border-[#E6DFD2]/60">
            {needsOnboarding ? (
              <div className="mb-5">
                <h2 className="font-display text-xl font-extrabold text-[#1A2421]">
                  Lengkapi Profil Anda
                </h2>
                <p className="text-sm text-[#51615C] mt-1">
                  Pilih peran agar tampilan ruang belajar sesuai kebutuhan.
                </p>
              </div>
            ) : (
              <div className="mb-6 space-y-4">
                <div>
                  <h2 className="font-display text-xl font-extrabold text-[#1A2421]">
                    {mode === 'login' ? 'Masuk ke Kawanles IDe' : 'Buat Akun Baru'}
                  </h2>
                  <p className="text-xs text-[#5E6D68] mt-1">
                    {mode === 'login'
                      ? 'Akses modul ajar, latihan interaktif, dan catatan nilai siswa.'
                      : 'Daftar gratis sebagai Guru Les atau Siswa SD–SMP.'}
                  </p>
                </div>
                <div className="flex rounded-xl bg-[#F3EDE2] p-1">
                  <button
                    type="button"
                    onClick={() => {
                      setMode('login');
                      setError('');
                    }}
                    className={`flex-1 py-2 text-xs sm:text-sm font-semibold rounded-lg transition cursor-pointer ${
                      mode === 'login'
                        ? 'bg-white text-[#1A2421] shadow-[0_1px_3px_rgba(26,36,33,0.08)]'
                        : 'text-[#5E6D68] hover:text-[#1A2421]'
                    }`}
                  >
                    Masuk
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setMode('signup');
                      setError('');
                    }}
                    className={`flex-1 py-2 text-xs sm:text-sm font-semibold rounded-lg transition cursor-pointer ${
                      mode === 'signup'
                        ? 'bg-white text-[#1A2421] shadow-[0_1px_3px_rgba(26,36,33,0.08)]'
                        : 'text-[#5E6D68] hover:text-[#1A2421]'
                    }`}
                  >
                    Daftar Akun Baru
                  </button>
                </div>
              </div>
            )}

            {(error || authError) && (
              <div className="mb-4 rounded-xl bg-[#FDF0F0] border border-[#ECCACA] text-[#9E2F2F] px-3.5 py-2.5 text-sm">
                {error || authError}
              </div>
            )}

            {!needsOnboarding && (
              <div className="mb-5">
                <button
                  type="button"
                  onClick={handleGoogleLogin}
                  disabled={googleLoading || submitting}
                  className="w-full flex items-center justify-center gap-2.5 px-4 py-2.5 rounded-xl border border-[#DDD5C7] bg-white hover:bg-[#F6F2EA] text-sm font-semibold text-[#1A2421] transition cursor-pointer disabled:opacity-50"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fill="#4285F4"
                      d="M23.745 12.27c0-.79-.07-1.54-.19-2.27h-11.3v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.58v3h3.86c2.26-2.09 3.56-5.17 3.56-8.82z"
                    />
                    <path
                      fill="#34A853"
                      d="M12.255 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96h-3.98v3.09C3.515 21.3 7.565 24 12.255 24z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.525 14.29c-.25-.72-.38-1.49-.38-2.29s.14-1.57.38-2.29V6.62h-3.98a11.86 11.86 0 0 0 0 10.76l3.98-3.09z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12.255 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C18.205 1.19 15.495 0 12.255 0c-4.69 0-8.74 2.7-10.71 6.62l3.98 3.09c.95-2.85 3.6-4.96 6.73-4.96z"
                    />
                  </svg>
                  {googleLoading ? 'Mengarahkan ke Google...' : 'Lanjutkan dengan Google'}
                </button>

                <div className="relative my-4">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-[#E6DFD2]" />
                  </div>
                  <div className="relative flex justify-center text-xs">
                    <span className="bg-white px-3 text-[#7D8A85]">atau dengan email</span>
                  </div>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {!needsOnboarding && (
                <>
                  <div>
                    <label className="block text-xs font-semibold text-[#3F4E49] mb-1.5">Email</label>
                    <Input
                      type="email"
                      required
                      placeholder="nama@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#3F4E49] mb-1.5">Password</label>
                    <Input
                      type="password"
                      required
                      minLength={8}
                      placeholder="Minimal 8 karakter"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </>
              )}

              {(mode === 'signup' || needsOnboarding) && (
                <>
                  <div>
                    <label className="block text-xs font-semibold text-[#3F4E49] mb-1.5">
                      Nama Lengkap
                    </label>
                    <Input
                      type="text"
                      required
                      placeholder="Contoh: Kak Della / Alya Rahma"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#3F4E49] mb-1.5">
                      Daftar Sebagai
                    </label>
                    <div className="grid grid-cols-2 gap-2.5">
                      <button
                        type="button"
                        onClick={() => setRole('teacher')}
                        className={`p-3 rounded-xl border text-left transition cursor-pointer ${
                          role === 'teacher'
                            ? 'border-[#0F4C42] bg-[#E6F2EF] text-[#0B362F]'
                            : 'border-[#DDD5C7] hover:bg-[#F6F2EA] text-[#3F4E49]'
                        }`}
                      >
                        <UserCheck className="w-4 h-4 mb-1 text-[#0F4C42]" />
                        <div className="text-sm font-bold">Guru Les</div>
                        <div className="text-[11px] text-[#5E6D68]">Kelola materi & soal</div>
                      </button>
                      <button
                        type="button"
                        onClick={() => setRole('student')}
                        className={`p-3 rounded-xl border text-left transition cursor-pointer ${
                          role === 'student'
                            ? 'border-[#D96B27] bg-[#FDF0E6] text-[#7D3A11]'
                            : 'border-[#DDD5C7] hover:bg-[#F6F2EA] text-[#3F4E49]'
                        }`}
                      >
                        <GraduationCap className="w-4 h-4 mb-1 text-[#D96B27]" />
                        <div className="text-sm font-bold">Siswa</div>
                        <div className="text-[11px] text-[#5E6D68]">Belajar & latihan</div>
                      </button>
                    </div>
                  </div>

                  {role === 'student' && (
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-semibold text-[#3F4E49] mb-1.5">Kelas</label>
                        <Select value={gradeNumber} onChange={(e) => setGradeNumber(e.target.value)}>
                          <option value="1">Kelas 1 SD</option>
                          <option value="2">Kelas 2 SD</option>
                          <option value="3">Kelas 3 SD</option>
                          <option value="4">Kelas 4 SD</option>
                          <option value="5">Kelas 5 SD</option>
                          <option value="6">Kelas 6 SD</option>
                          <option value="7">Kelas 7 SMP</option>
                          <option value="8">Kelas 8 SMP</option>
                          <option value="9">Kelas 9 SMP</option>
                        </Select>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-[#3F4E49] mb-1.5">
                          Asal Sekolah
                        </label>
                        <Input
                          type="text"
                          placeholder="SDN / SMPN..."
                          value={schoolName}
                          onChange={(e) => setSchoolName(e.target.value)}
                        />
                      </div>
                    </div>
                  )}
                </>
              )}

              <Button type="submit" size="lg" className="w-full" disabled={submitting}>
                {submitting
                  ? 'Memproses...'
                  : needsOnboarding
                  ? 'Simpan & Masuk Dashboard'
                  : mode === 'login'
                  ? 'Masuk Sekarang'
                  : 'Buat Akun & Mulai'}
              </Button>
            </form>

            {mode === 'login' && !needsOnboarding && (
              <p className="mt-5 pt-4 border-t border-[#EFEAE0] text-xs text-[#5E6D68] text-center">
                Belum punya akun?{' '}
                <button
                  type="button"
                  onClick={() => {
                    setMode('signup');
                    setError('');
                  }}
                  className="font-bold text-[#0F4C42] hover:underline cursor-pointer"
                >
                  Daftar Akun Baru
                </button>{' '}
                untuk langsung mulai belajar.
              </p>
            )}
          </Card>
        </div>
      </main>
    </div>
  );
}
