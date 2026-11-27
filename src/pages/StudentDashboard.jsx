import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import {
  Award,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  Clock,
  FileText,
  PlayCircle,
} from 'lucide-react';
import { apiFetch } from '@/lib/api';
import { Badge, Button, Card, Skeleton } from '@/components/ui';
import { formatLearningStatus, getSubjectTheme } from '@/lib/subjectStyles';

export default function StudentDashboard() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const section = searchParams.get('section') || 'home';
  const [dashboard, setDashboard] = useState(null);
  const [selectedMapping, setSelectedMapping] = useState(null);
  const [topicsData, setTopicsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loadingTopics, setLoadingTopics] = useState(false);

  useEffect(() => {
    if (section === 'mapel') {
      document.getElementById('sec-mapel')?.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'nilai') {
      document.getElementById('sec-nilai')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [section]);

  useEffect(() => {
    apiFetch('/student/dashboard')
      .then((d) => {
        setDashboard(d);
        if (d.enrollments?.length > 0) {
          const paramMap = searchParams.get('mapping');
          const matched =
            (paramMap && d.enrollments.find((e) => e.mapping_id === paramMap)) ||
            d.enrollments.find((e) => e.total_subtopics > 0) ||
            d.enrollments[0];
          loadMappingTopics(matched, false);
        }
      })
      .finally(() => setLoading(false));
  }, []);

  const loadMappingTopics = async (enrollment, syncUrl = true) => {
    setSelectedMapping(enrollment);
    if (syncUrl) {
      const next = new URLSearchParams(searchParams);
      next.set('mapping', enrollment.mapping_id);
      setSearchParams(next, { replace: true });
      try {
        sessionStorage.setItem('modul_les_student_ctx', JSON.stringify({ mapping: enrollment.mapping_id }));
      } catch {}
    }
    setLoadingTopics(true);
    try {
      const res = await apiFetch(`/curriculum/mappings/${enrollment.mapping_id}/topics`);
      setTopicsData(res);
    } finally {
      setLoadingTopics(false);
    }
  };

  if (loading) {
    return (
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 space-y-6">
        <Skeleton className="h-40 w-full rounded-2xl" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Skeleton className="h-36" />
          <Skeleton className="h-36" />
          <Skeleton className="h-36" />
        </div>
        <div className="grid lg:grid-cols-12 gap-6">
          <Skeleton className="lg:col-span-8 h-72" />
          <Skeleton className="lg:col-span-4 h-72" />
        </div>
      </div>
    );
  }

  const enrollments = dashboard?.enrollments || [];
  const lastAccessed = dashboard?.last_accessed;
  const recentAttempts = dashboard?.recent_attempts || [];
  const totalCompleted = enrollments.reduce((sum, e) => sum + Number(e.completed_subtopics || 0), 0);
  const totalSubs = enrollments.reduce((sum, e) => sum + Number(e.total_subtopics || 0), 0);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-8">
      {/* Committed Forest-Pine Study Banner */}
      <section className="rounded-2xl bg-[#0F4C42] text-[#FAF7F2] p-6 sm:p-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <h1 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              Halo, {dashboard?.student?.full_name || 'Siswa'}
            </h1>
            <p className="text-[#C8E0DA] text-sm sm:text-base leading-relaxed">
              {dashboard?.student?.school_name ? `${dashboard.student.school_name} · ` : ''}
              Pilih mata pelajaran di bawah untuk mulai membaca modul dan mengerjakan latihan soal.
            </p>
            {totalSubs > 0 && (
              <div className="pt-2 flex items-center gap-3 text-xs font-semibold text-[#D9EBE7] tabular-nums">
                <span>
                  Progres kelas: {totalCompleted} dari {totalSubs} submateri selesai
                </span>
              </div>
            )}
          </div>

          {lastAccessed && (
            <div className="bg-[#165D51] rounded-2xl p-4 sm:p-5 border border-white/15 md:min-w-[280px] max-w-sm">
              <div className="text-xs font-semibold text-[#B9DAD3]">Terakhir dipelajari</div>
              <div className="font-display font-bold text-base text-white mt-1 line-clamp-1">
                {lastAccessed.subtopic_title}
              </div>
              <div className="text-xs text-[#C8E0DA] mt-0.5 line-clamp-1">
                {lastAccessed.subject_name} · {lastAccessed.topic_title}
              </div>
              <Button
                variant="emerald"
                size="sm"
                className="mt-3.5 w-full"
                onClick={() =>
                  navigate(`/belajar/${lastAccessed.subtopic_id}`, {
                    state: {
                      returnTo: selectedMapping?.mapping_id
                        ? `/?mapping=${selectedMapping.mapping_id}`
                        : '/',
                      returnLabel: 'Kembali ke Beranda Belajar',
                    },
                  })
                }
              >
                <PlayCircle className="w-4 h-4" /> Lanjut Belajar
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Subject Grid */}
      <section id="sec-mapel" className="space-y-3.5">
        <div className="flex items-baseline justify-between gap-2">
          <h2 className="font-display text-xl font-bold text-[#1A2421]">Mata Pelajaran Kamu</h2>
          <span className="text-xs font-semibold text-[#5E6D68] tabular-nums">
            {enrollments.length} mapel aktif
          </span>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {enrollments.map((enr) => {
            const theme = getSubjectTheme(enr.subject_code);
            const SubjectIcon = theme.icon;
            const statusInfo = formatLearningStatus(enr.learning_status);
            const pct =
              enr.total_subtopics > 0
                ? Math.round((enr.completed_subtopics / enr.total_subtopics) * 100)
                : 0;
            const isSelected = selectedMapping?.mapping_id === enr.mapping_id;

            return (
              <Card
                key={enr.mapping_id}
                onClick={() => loadMappingTopics(enr)}
                className={`p-4 sm:p-5 cursor-pointer transition-all duration-150 ${
                  isSelected
                    ? 'border-[#0F4C42] ring-2 ring-[#0F4C42]/20 bg-[#FCFDFC]'
                    : 'hover:border-[#C9BFA9] hover:bg-[#FEFCF9]'
                }`}
              >
                <div className="flex items-start justify-between gap-2.5">
                  <div className="flex items-center gap-3 min-w-0">
                    <div
                      className={`w-10 h-10 rounded-xl ${theme.iconBg} flex items-center justify-center shrink-0`}
                    >
                      <SubjectIcon className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <div className="font-display font-bold text-[#1A2421] leading-snug truncate">
                        {enr.subject_name}
                      </div>
                      <div className="text-xs text-[#5E6D68]">
                        {enr.grade_name} {enr.phase_code ? `· Fase ${enr.phase_code}` : ''}
                      </div>
                    </div>
                  </div>
                  <Badge className={`${statusInfo.tone} shrink-0`}>{statusInfo.label}</Badge>
                </div>

                <div className="mt-4">
                  <div className="flex justify-between text-xs font-medium text-[#51615C] mb-1.5 tabular-nums">
                    <span>
                      {enr.completed_subtopics}/{enr.total_subtopics} submateri selesai
                    </span>
                    <span className="font-bold text-[#0F4C42]">{pct}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-[#EFEAE0] overflow-hidden">
                    <div
                      className={`h-full rounded-full ${theme.bar} transition-all duration-300`}
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Main Split: Chapters + Score History */}
      <div className="grid lg:grid-cols-12 gap-6 items-start">
        <div className="lg:col-span-8 space-y-4">
          <div className="flex items-center justify-between gap-2">
            <h2 className="font-display text-xl font-bold text-[#1A2421]">
              Daftar Bab — {selectedMapping?.subject_name || 'Pilih Mapel'}
            </h2>
            {selectedMapping && (
              <Badge className="bg-[#E6F2EF] text-[#0F4C42]">{selectedMapping.grade_name}</Badge>
            )}
          </div>

          {loadingTopics ? (
            <div className="space-y-3">
              <Skeleton className="h-32 w-full" />
              <Skeleton className="h-32 w-full" />
            </div>
          ) : !topicsData?.topics?.length ? (
            <Card className="p-8 text-center space-y-2">
              <BookOpen className="w-9 h-9 text-[#B9AFA0] mx-auto" />
              <div className="font-display font-bold text-[#1A2421]">
                Belum ada bab yang diterbitkan guru
              </div>
              <p className="text-xs text-[#5E6D68] max-w-sm mx-auto">
                Pilih mata pelajaran lain di atas atau tunggu guru menerbitkan materi untuk kelas ini.
              </p>
            </Card>
          ) : (
            topicsData.topics.map((topic) => (
              <Card key={topic.id} className="overflow-hidden">
                <div className="px-5 py-4 bg-[#F6F2EA] border-b border-[#E6DFD2]">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-xs font-bold text-[#0F4C42]">
                      Bab {topic.sequence_number}
                    </span>
                    {topic.code && (
                      <span className="text-[11px] font-mono text-[#76857F]">{topic.code}</span>
                    )}
                  </div>
                  <h3 className="font-display text-base font-bold text-[#1A2421]">{topic.title}</h3>
                  {topic.description && (
                    <p className="text-xs text-[#51615C] mt-1 leading-relaxed">{topic.description}</p>
                  )}
                </div>

                <div className="divide-y divide-[#EFEAE0]">
                  {topic.subtopics?.length === 0 ? (
                    <div className="p-4 text-xs text-[#76857F]">Belum ada submateri.</div>
                  ) : (
                    topic.subtopics.map((st) => (
                      <div
                        key={st.id}
                        onClick={() =>
                          navigate(`/belajar/${st.id}`, {
                            state: {
                              returnTo: selectedMapping?.mapping_id
                                ? `/?mapping=${selectedMapping.mapping_id}`
                                : '/',
                              returnLabel: `Kembali ke ${selectedMapping?.subject_name || 'Daftar Bab'}`,
                            },
                          })
                        }
                        className="px-5 py-3.5 flex items-center justify-between gap-3 hover:bg-[#FAF7F2] transition cursor-pointer group"
                      >
                        <div className="flex items-start gap-3 min-w-0">
                          <div
                            className={`mt-0.5 w-7 h-7 rounded-full flex items-center justify-center shrink-0 ${
                              st.progress_status === 'completed'
                                ? 'bg-[#DCF0E4] text-[#1D7A52]'
                                : st.progress_status === 'in_progress'
                                ? 'bg-[#FDF0E6] text-[#D96B27]'
                                : 'bg-[#EFEAE0] text-[#76857F]'
                            }`}
                          >
                            {st.progress_status === 'completed' ? (
                              <CheckCircle2 className="w-4 h-4" />
                            ) : (
                              <FileText className="w-3.5 h-3.5" />
                            )}
                          </div>
                          <div className="min-w-0">
                            <div className="font-semibold text-sm text-[#1A2421] group-hover:text-[#0F4C42] transition">
                              {st.sequence_number}. {st.title}
                            </div>
                            <div className="flex items-center gap-2.5 mt-0.5 text-xs text-[#64736E] tabular-nums">
                              <span>{st.material_count} materi</span>
                              <span>·</span>
                              <span>{st.activity_count} latihan</span>
                            </div>
                          </div>
                        </div>
                        <ChevronRight className="w-4 h-4 text-[#9AA6A1] group-hover:text-[#0F4C42] group-hover:translate-x-0.5 transition shrink-0" />
                      </div>
                    ))
                  )}
                </div>
              </Card>
            ))
          )}
        </div>

        {/* Right Column: Score History */}
        <aside id="sec-nilai" className="lg:col-span-4 space-y-4">
          <h2 className="font-display text-xl font-bold text-[#1A2421] flex items-center gap-2">
            <Award className="w-5 h-5 text-[#D96B27]" /> Riwayat Nilai Terbaru
          </h2>
          <Card className="p-4 space-y-2.5">
            {recentAttempts.length === 0 ? (
              <div className="text-center py-7 px-3 space-y-1.5">
                <div className="font-semibold text-sm text-[#3F4E49]">Belum ada nilai latihan</div>
                <p className="text-xs text-[#64736E] leading-relaxed">
                  Buka salah satu submateri di sebelah kiri lalu kerjakan soal latihannya untuk melihat nilai di sini.
                </p>
              </div>
            ) : (
              recentAttempts.map((att) => {
                const pct =
                  Number(att.max_score) > 0
                    ? Math.round((Number(att.score) / Number(att.max_score)) * 100)
                    : 0;
                const passed = !att.passing_score || pct >= Number(att.passing_score);
                return (
                  <div
                    key={att.id}
                    className="p-3 rounded-xl bg-[#FAF7F2] border border-[#EAE3D6] flex items-center justify-between gap-3"
                  >
                    <div className="min-w-0">
                      <div className="font-semibold text-xs text-[#1A2421] truncate">
                        {att.activity_title}
                      </div>
                      <div className="text-[11px] text-[#64736E] flex items-center gap-1 mt-0.5">
                        <Clock className="w-3 h-3 shrink-0" />
                        <span className="truncate">
                          {att.subject_name || 'Latihan'} · Ke-{att.attempt_number}
                        </span>
                      </div>
                    </div>
                    <Badge
                      className={`tabular-nums shrink-0 ${
                        passed
                          ? 'bg-[#DCF0E4] text-[#175234]'
                          : 'bg-[#FDF0E6] text-[#A84E16]'
                      }`}
                    >
                      {pct}
                    </Badge>
                  </div>
                );
              })
            )}
          </Card>
        </aside>
      </div>
    </div>
  );
}
