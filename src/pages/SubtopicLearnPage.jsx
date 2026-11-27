import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import {
  AlertTriangle,
  ArrowLeft,
  BookOpen,
  Calculator,
  CheckCircle2,
  ClipboardCheck,
  Download,
  GraduationCap,
  Lightbulb,
  MapPin,
  Printer,
  Sparkles,
  Target,
  Volume2,
  XCircle,
} from 'lucide-react';
import { apiFetch } from '@/lib/api';
import { useAuth } from '@/context/AuthContext';
import { Badge, Button, Card, Skeleton } from '@/components/ui';
import {
  FlashcardsBlock,
  InteractiveCounterBlock,
  InteractiveFractionBlock,
  InteractiveWorkedExample,
  ShapeGalleryBlock,
  StoryPanelBlock,
  VisualCardsBlock,
  speakText,
} from '@/components/InteractiveBlocks';

export default function SubtopicLearnPage() {
  const { subtopicId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { me } = useAuth();
  const isStudent = me?.profile?.role === 'student';

  const returnTo = location.state?.returnTo || null;
  const returnLabel = location.state?.returnLabel || 'Kembali';

  const handleGoBack = () => {
    if (returnTo) {
      navigate(returnTo);
    } else if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate(isStudent ? '/' : '/?tab=curriculum');
    }
  };

  const [detail, setDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeQuiz, setActiveQuiz] = useState(null);
  const [answers, setAnswers] = useState({});
  const [quizResult, setQuizResult] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [markingDone, setMarkingDone] = useState(false);
  const [error, setError] = useState('');

  const loadDetail = async () => {
    setLoading(true);
    try {
      const data = await apiFetch(`/subtopics/${subtopicId}/detail`);
      setDetail(data);
      if (isStudent && data.progress?.progress_status === 'not_started') {
        apiFetch('/student/progress', {
          method: 'POST',
          body: JSON.stringify({ subtopic_id: subtopicId, progress_status: 'in_progress' }),
        }).catch(() => {});
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadDetail();
  }, [subtopicId]);

  const startActivity = async (activityId) => {
    setError('');
    setQuizResult(null);
    setAnswers({});
    try {
      const data = await apiFetch(`/activities/${activityId}`);
      setActiveQuiz(data);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleSubmitQuiz = async () => {
    if (!activeQuiz) return;
    setSubmitting(true);
    setError('');
    try {
      const payload = activeQuiz.questions.map((q) => ({
        question_id: q.id,
        selected_option_id: answers[q.id]?.optionId || null,
        answer_text: answers[q.id]?.text || null,
      }));
      const res = await apiFetch(`/student/activities/${activeQuiz.activity.id}/submit`, {
        method: 'POST',
        body: JSON.stringify({ answers: payload }),
      });
      setQuizResult(res);
      loadDetail();
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  const handleMarkCompleted = async () => {
    setMarkingDone(true);
    try {
      await apiFetch('/student/progress', {
        method: 'POST',
        body: JSON.stringify({ subtopic_id: subtopicId, progress_status: 'completed' }),
      });
      await loadDetail();
    } finally {
      setMarkingDone(false);
    }
  };

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 space-y-6">
        <div className="flex items-center justify-between gap-3">
          <Skeleton className="h-9 w-28" />
          <div className="flex gap-2">
            <Skeleton className="h-9 w-28" />
            <Skeleton className="h-9 w-40" />
          </div>
        </div>
        <Card className="p-6 space-y-3">
          <Skeleton className="h-4 w-48" />
          <Skeleton className="h-8 w-3/4" />
          <Skeleton className="h-4 w-full" />
        </Card>
        <Card className="p-6 space-y-4">
          <Skeleton className="h-6 w-56" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-11/12" />
          <Skeleton className="h-32 w-full" />
        </Card>
      </div>
    );
  }

  if (!detail) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <Card className="p-8 text-center space-y-4">
          <p className="text-sm font-medium text-[#9E2F2F]">{error || 'Submateri tidak ditemukan'}</p>
          <Button variant="secondary" onClick={handleGoBack}>
            <ArrowLeft className="w-4 h-4" /> {returnLabel}
          </Button>
        </Card>
      </div>
    );
  }

  const { subtopic, learning_objectives, materials, activities, progress } = detail;
  const isLowerElementary = Number(subtopic.grade_number) <= 3;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 space-y-6">
      {/* Top Action Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 print:hidden">
        <Button variant="secondary" size="sm" onClick={handleGoBack}>
          <ArrowLeft className="w-4 h-4" /> {returnLabel}
        </Button>
        <div className="flex items-center gap-2">
          <Button variant="secondary" size="sm" onClick={() => window.print()}>
            <Printer className="w-4 h-4" /> Cetak / PDF
          </Button>
          {isStudent && (
            <Button
              variant={progress?.progress_status === 'completed' ? 'secondary' : 'emerald'}
              size="sm"
              disabled={markingDone || progress?.progress_status === 'completed'}
              onClick={handleMarkCompleted}
            >
              <CheckCircle2 className="w-4 h-4" />
              {progress?.progress_status === 'completed' ? 'Sudah Dipelajari' : 'Tandai Sudah Dipelajari'}
            </Button>
          )}
        </div>
      </div>

      {/* Editorial Lesson Masthead */}
      <Card className="overflow-hidden">
        <div className="px-6 py-3 bg-[#F3EDE2] border-b border-[#E6DFD2] flex flex-wrap items-center justify-between gap-2 text-xs text-[#51615C]">
          <div className="font-semibold text-[#0F4C42] flex flex-wrap items-center gap-1.5">
            <span>{subtopic.subject_name}</span>
            <span className="text-[#9CA8A3]">/</span>
            <span>{subtopic.grade_name}</span>
            {subtopic.phase_code && (
              <>
                <span className="text-[#9CA8A3]">/</span>
                <span>Fase {subtopic.phase_code}</span>
              </>
            )}
          </div>
          <div className="font-medium text-[#51615C] truncate max-w-full">
            {subtopic.topic_title}
          </div>
        </div>

        <div className="p-6 sm:p-7 space-y-3">
          <h1 className="font-display text-2xl sm:text-3xl font-bold text-[#1A2421] tracking-tight leading-snug">
            {subtopic.title}
          </h1>
          {subtopic.description && (
            <p className="text-sm sm:text-[15px] text-[#51615C] leading-relaxed max-w-3xl">
              {subtopic.description}
            </p>
          )}

          {subtopic.local_context && (
            <div className="pt-2">
              <div className="p-3.5 rounded-xl bg-[#FDF5EC] border border-[#EED9C0] text-xs sm:text-sm text-[#6B3710] flex items-start gap-2.5 leading-relaxed">
                <MapPin className="w-4 h-4 text-[#D96B27] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-[#5C2D0C]">Konteks Gresik Daratan:</span>{' '}
                  {subtopic.local_context}
                </div>
              </div>
            </div>
          )}
        </div>
      </Card>

      {/* Learning Objectives */}
      {learning_objectives?.length > 0 && (
        <Card className="p-5 sm:p-6 bg-[#FAF7F2]">
          <h2 className="font-display font-bold text-sm text-[#1A2421] flex items-center gap-2 mb-3">
            <Target className="w-4 h-4 text-[#0F4C42]" /> Tujuan Pembelajaran
          </h2>
          <ul className="space-y-2">
            {learning_objectives.map((obj) => (
              <li key={obj.id} className="flex items-start gap-2.5 text-sm text-[#35443F] leading-relaxed">
                <CheckCircle2 className="w-4 h-4 text-[#1D7A52] shrink-0 mt-0.5" />
                <span>{obj.description}</span>
              </li>
            ))}
          </ul>
        </Card>
      )}

      {/* Materials */}
      <section className="space-y-4">
        <div className="flex items-center justify-between gap-2">
          <h2 className="font-display text-lg sm:text-xl font-bold text-[#1A2421] flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-[#0F4C42]" /> Materi Pembelajaran
          </h2>
          {materials.length > 0 && (
            <span className="text-xs font-medium text-[#76857F] tabular-nums">
              {materials.length} modul
            </span>
          )}
        </div>

        {materials.length === 0 ? (
          <Card className="p-8 text-sm text-[#76857F] text-center">
            Guru belum menambahkan isi materi untuk submateri ini.
          </Card>
        ) : (
          materials.map((mat) => {
            const blocks = Array.isArray(mat.content) ? mat.content : [];
            return (
              <Card key={mat.id} className="p-6 sm:p-8 space-y-5">
                <h3 className="font-display text-xl font-bold text-[#1A2421] border-b border-[#EFEAE0] pb-3.5">
                  {mat.title}
                </h3>

                {blocks.map((block, idx) => {
                  if (block.type === 'visual_cards') {
                    return <VisualCardsBlock key={idx} block={block} />;
                  }
                  if (block.type === 'flashcards') {
                    return <FlashcardsBlock key={idx} block={block} />;
                  }
                  if (block.type === 'interactive_counter') {
                    return <InteractiveCounterBlock key={idx} block={block} />;
                  }
                  if (block.type === 'interactive_fraction') {
                    return <InteractiveFractionBlock key={idx} block={block} />;
                  }
                  if (block.type === 'shape_gallery') {
                    return <ShapeGalleryBlock key={idx} block={block} />;
                  }
                  if (block.type === 'story_panel') {
                    return <StoryPanelBlock key={idx} block={block} />;
                  }
                  if (block.type === 'heading') {
                    return (
                      <h4
                        key={idx}
                        className={`font-display ${
                          isLowerElementary ? 'text-lg' : 'text-base sm:text-lg'
                        } font-bold text-[#0F4C42] pt-3 pb-1 border-b border-[#EFEAE0]`}
                      >
                        {block.text}
                      </h4>
                    );
                  }
                  if (block.type === 'formula') {
                    const formulaTitle = block.name || block.title || 'Rumus & Kaidah Utama';
                    const formulaExpr = block.expression || '';
                    const formulaNote = block.note || block.text || '';
                    return (
                      <div
                        key={idx}
                        className="p-4 sm:p-5 rounded-2xl bg-[#EFF6F4] border border-[#C6DFD7] space-y-2.5"
                      >
                        <div className="text-xs font-bold text-[#0F4C42] uppercase tracking-wider flex items-center gap-1.5">
                          <Calculator className="w-4 h-4 shrink-0" /> {formulaTitle}
                        </div>
                        {formulaExpr && (
                          <div className="px-4 py-3 rounded-xl bg-white border border-[#D4E6E0] font-mono text-sm sm:text-[15px] font-semibold text-[#1A2421] whitespace-pre-line overflow-x-auto leading-relaxed">
                            {formulaExpr}
                          </div>
                        )}
                        {formulaNote && (
                          <div
                            className={`${
                              formulaExpr ? 'text-xs sm:text-sm text-[#2F4843]' : 'text-sm font-semibold text-[#1A2421] font-mono'
                            } whitespace-pre-line leading-relaxed`}
                          >
                            {formulaNote}
                          </div>
                        )}
                      </div>
                    );
                  }
                  if (block.type === 'table' && Array.isArray(block.headers) && Array.isArray(block.rows)) {
                    return (
                      <div key={idx} className="space-y-2">
                        {block.title && (
                          <div className="font-display font-bold text-xs text-[#51615C] uppercase tracking-wider">
                            {block.title}
                          </div>
                        )}
                        <div className="overflow-x-auto rounded-xl border border-[#E6DFD2]">
                          <table className="w-full text-sm text-left tabular-nums">
                            <thead className="bg-[#F3EDE2] text-xs font-bold text-[#1A2421]">
                              <tr>
                                {block.headers.map((h, hi) => (
                                  <th key={hi} className="px-3.5 py-2.5">
                                    {h}
                                  </th>
                                ))}
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-[#EFEAE0] bg-white">
                              {block.rows.map((row, ri) => (
                                <tr key={ri} className="hover:bg-[#FAF7F2]">
                                  {Array.isArray(row) &&
                                    row.map((cell, ci) => (
                                      <td key={ci} className="px-3.5 py-2.5 text-[#35443F]">
                                        {cell}
                                      </td>
                                    ))}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    );
                  }
                  if (block.type === 'worked_example') {
                    return <InteractiveWorkedExample key={idx} block={block} />;
                  }
                  if (block.type === 'misconception') {
                    const hasComparison = Boolean(block.wrong || block.right);
                    return (
                      <div
                        key={idx}
                        className="p-4 sm:p-5 rounded-2xl bg-[#FAF7F2] border border-[#E6DFD2] space-y-3"
                      >
                        <div className="text-xs font-bold text-[#9E2F2F] uppercase tracking-wider flex items-center gap-1.5">
                          <AlertTriangle className="w-4 h-4 shrink-0" />
                          <span>{block.title || 'Kesalahan yang Sering Terjadi'}</span>
                        </div>

                        {hasComparison ? (
                          <div className="grid sm:grid-cols-2 gap-3">
                            {block.wrong && (
                              <div className="p-3.5 rounded-xl bg-[#FDF2F2] border border-[#F0D0D0] space-y-1">
                                <div className="text-[11px] font-bold uppercase tracking-wider text-[#9E2F2F] flex items-center gap-1.5">
                                  <XCircle className="w-3.5 h-3.5 shrink-0" /> Sering Keliru
                                </div>
                                <p className="text-sm text-[#591C1C] leading-relaxed whitespace-pre-line">
                                  {block.wrong}
                                </p>
                              </div>
                            )}
                            {block.right && (
                              <div className="p-3.5 rounded-xl bg-[#ECF6F0] border border-[#C6E3D2] space-y-1">
                                <div className="text-[11px] font-bold uppercase tracking-wider text-[#175234] flex items-center gap-1.5">
                                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" /> Konsep yang Tepat
                                </div>
                                <p className="text-sm text-[#14452B] leading-relaxed whitespace-pre-line">
                                  {block.right}
                                </p>
                              </div>
                            )}
                          </div>
                        ) : (
                          <p className="text-sm text-[#591C1C] bg-[#FDF2F2] border border-[#F0D0D0] rounded-xl p-3.5 leading-relaxed whitespace-pre-line">
                            {block.text}
                          </p>
                        )}
                      </div>
                    );
                  }
                  if (block.type === 'teacher_note') {
                    if (isStudent) return null;
                    return (
                      <div
                        key={idx}
                        className="p-4 rounded-2xl bg-[#F6F1F8] border border-[#E2D4E8] flex gap-3"
                      >
                        <GraduationCap className="w-5 h-5 text-[#693C7A] shrink-0 mt-0.5" />
                        <div>
                          <div className="text-xs font-bold text-[#5A3169] uppercase tracking-wider mb-1">
                            Panduan Khusus Guru Les (Tidak Tampil ke Siswa)
                          </div>
                          <p className="text-sm text-[#3F234A] leading-relaxed whitespace-pre-line">
                            {block.text}
                          </p>
                        </div>
                      </div>
                    );
                  }
                  if (block.type === 'example') {
                    return (
                      <div
                        key={idx}
                        className="p-4 sm:p-5 rounded-2xl bg-[#F2F6F8] border border-[#D4E1E8] space-y-1.5"
                      >
                        <div className="text-xs font-bold text-[#1F4E66] uppercase tracking-wider">
                          {block.title || 'Contoh'}
                        </div>
                        <p
                          className={`${
                            isLowerElementary ? 'text-base' : 'text-sm'
                          } text-[#1E3542] leading-relaxed whitespace-pre-line`}
                        >
                          {block.text}
                        </p>
                      </div>
                    );
                  }
                  if (block.type === 'tip') {
                    return (
                      <div
                        key={idx}
                        className="p-4 rounded-2xl bg-[#FDF5EC] border border-[#EED9C0] flex gap-3"
                      >
                        <Lightbulb className="w-5 h-5 text-[#D96B27] shrink-0 mt-0.5" />
                        <p
                          className={`${
                            isLowerElementary ? 'text-base' : 'text-sm'
                          } text-[#6B3710] leading-relaxed whitespace-pre-line`}
                        >
                          {block.text}
                        </p>
                      </div>
                    );
                  }
                  if (block.type === 'list' && Array.isArray(block.items)) {
                    return (
                      <div key={idx} className="space-y-1.5">
                        {block.title && (
                          <div className="font-semibold text-sm text-[#1A2421]">{block.title}</div>
                        )}
                        <ul
                          className={`list-disc pl-5 space-y-1.5 ${
                            isLowerElementary ? 'text-base leading-relaxed' : 'text-[15px] leading-relaxed'
                          } text-[#2F3C38]`}
                        >
                          {block.items.map((it, i) => (
                            <li key={i}>{it}</li>
                          ))}
                        </ul>
                      </div>
                    );
                  }
                  return (
                    <div key={idx} className="flex items-start justify-between gap-3">
                      <p
                        className={`${
                          isLowerElementary ? 'text-base leading-loose' : 'text-[15px] leading-relaxed'
                        } text-[#2F3C38] whitespace-pre-line flex-1`}
                      >
                        {block.text}
                      </p>
                      {isLowerElementary && block.text && (
                        <button
                          type="button"
                          onClick={() => speakText(block.text)}
                          title="Bacakan teks ini"
                          className="p-2 rounded-xl bg-[#E6F2EF] text-[#0F4C42] hover:bg-[#D5E9E3] shrink-0 cursor-pointer print:hidden transition"
                        >
                          <Volume2 className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  );
                })}

                {/* Media attachments from Neon Object Storage */}
                {mat.media?.length > 0 && (
                  <div className="pt-4 border-t border-[#EFEAE0] space-y-3">
                    <div className="text-xs font-bold text-[#76857F] uppercase tracking-wider">
                      Lampiran Media
                    </div>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {mat.media.map((asset) =>
                        asset.media_type === 'image' && asset.url ? (
                          <figure
                            key={asset.id}
                            className="rounded-xl overflow-hidden border border-[#E6DFD2] bg-[#FAF7F2]"
                          >
                            <img
                              src={asset.url}
                              alt={asset.alt_text || asset.file_name}
                              className="w-full max-h-64 object-contain bg-white"
                            />
                            <figcaption className="px-3 py-2 text-xs text-[#51615C]">
                              {asset.alt_text || asset.file_name}
                            </figcaption>
                          </figure>
                        ) : (
                          <a
                            key={asset.id}
                            href={asset.url || '#'}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center justify-between p-3 rounded-xl border border-[#E6DFD2] hover:bg-[#FAF7F2] text-sm transition"
                          >
                            <span className="truncate font-medium text-[#1A2421]">
                              {asset.file_name}
                            </span>
                            <Download className="w-4 h-4 text-[#0F4C42] shrink-0" />
                          </a>
                        )
                      )}
                    </div>
                  </div>
                )}
              </Card>
            );
          })
        )}
      </section>

      {/* Activities & Interactive Quiz */}
      <section className="space-y-4">
        <div className="flex items-center justify-between gap-2">
          <h2 className="font-display text-lg sm:text-xl font-bold text-[#1A2421] flex items-center gap-2">
            <ClipboardCheck className="w-5 h-5 text-[#D96B27]" /> Latihan & Evaluasi
          </h2>
          {activities.length > 0 && !activeQuiz && (
            <span className="text-xs font-medium text-[#76857F] tabular-nums">
              {activities.length} paket
            </span>
          )}
        </div>

        {error && (
          <div className="rounded-xl bg-[#FDF2F2] border border-[#F0D0D0] text-[#9E2F2F] px-4 py-3 text-sm">
            {error}
          </div>
        )}

        {!activeQuiz ? (
          <div className="grid sm:grid-cols-2 gap-4">
            {activities.length === 0 ? (
              <Card className="p-8 text-sm text-[#76857F] sm:col-span-2 text-center">
                Belum ada latihan soal pada submateri ini.
              </Card>
            ) : (
              activities.map((act) => (
                <Card key={act.id} className="p-5 flex flex-col justify-between gap-4">
                  <div className="space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-display font-bold text-base text-[#1A2421] leading-snug">
                        {act.title}
                      </h3>
                      <Badge
                        className={
                          act.activity_type === 'chapter_evaluation'
                            ? 'bg-[#FDF0E6] text-[#B35318] shrink-0'
                            : 'bg-[#E6F2EF] text-[#0F4C42] shrink-0'
                        }
                      >
                        {act.activity_type === 'chapter_evaluation' ? 'Evaluasi Bab' : 'Latihan'}
                      </Badge>
                    </div>
                    {act.description && (
                      <p className="text-xs text-[#51615C] leading-relaxed">{act.description}</p>
                    )}
                    <div className="flex flex-wrap gap-2 text-xs text-[#76857F] tabular-nums pt-1">
                      <span>{act.question_count} soal</span>
                      {act.time_limit_minutes && <span>· {act.time_limit_minutes} menit</span>}
                      {act.passing_score && <span>· KKM {act.passing_score}</span>}
                    </div>
                  </div>
                  <Button variant="emerald" onClick={() => startActivity(act.id)}>
                    {isStudent ? 'Mulai Kerjakan Latihan' : 'Pratinjau Soal'}
                  </Button>
                </Card>
              ))
            )}
          </div>
        ) : (
          <Card className="p-6 sm:p-7 space-y-6" elevated>
            <div className="flex items-start justify-between gap-4 border-b border-[#EFEAE0] pb-4">
              <div>
                <h3 className="font-display text-lg sm:text-xl font-bold text-[#1A2421]">
                  {activeQuiz.activity.title}
                </h3>
                <p className="text-xs text-[#51615C] mt-1">
                  {activeQuiz.activity.instructions || 'Pilih jawaban yang paling tepat pada setiap soal.'}
                </p>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  setActiveQuiz(null);
                  setQuizResult(null);
                }}
              >
                Tutup
              </Button>
            </div>

            {quizResult ? (
              <div className="space-y-5">
                <div
                  className={`p-5 rounded-2xl border ${
                    quizResult.passed
                      ? 'bg-[#ECF6F0] border-[#C6E3D2] text-[#14452B]'
                      : 'bg-[#FDF5EC] border-[#EED9C0] text-[#7A3F13]'
                  }`}
                >
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                        <Sparkles className="w-4 h-4" />
                        {quizResult.passed ? 'Hebat! Kamu Tuntas!' : 'Ayo Coba Lagi!'}
                      </div>
                      <div className="font-display text-3xl font-bold mt-1 tabular-nums">
                        Nilai: {quizResult.percentage}
                        <span className="text-sm font-sans font-medium ml-2 opacity-80">
                          ({quizResult.score} / {quizResult.max_score} poin)
                        </span>
                      </div>
                    </div>
                    <Button
                      variant="secondary"
                      onClick={() => {
                        setActiveQuiz(null);
                        setQuizResult(null);
                      }}
                    >
                      Selesai & Kembali
                    </Button>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-display font-bold text-sm text-[#1A2421]">
                    Pembahasan Setiap Soal
                  </h4>
                  {quizResult.review.map((item, idx) => (
                    <div
                      key={item.question_id}
                      className="p-4 rounded-xl border border-[#E6DFD2] bg-white space-y-2.5"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="font-semibold text-sm text-[#1A2421] leading-relaxed">
                          {idx + 1}. {item.question_text}
                        </div>
                        {item.is_correct ? (
                          <Badge className="bg-[#ECF6F0] text-[#175234] shrink-0">
                            <CheckCircle2 className="w-3.5 h-3.5" /> Benar
                          </Badge>
                        ) : (
                          <Badge className="bg-[#FDF2F2] text-[#9E2F2F] shrink-0">
                            <XCircle className="w-3.5 h-3.5" /> Kurang Tepat
                          </Badge>
                        )}
                      </div>
                      {item.correct_option_label && (
                        <div className="text-xs text-[#175234] font-semibold">
                          Jawaban Benar: {item.correct_option_label}. {item.correct_option_text}
                        </div>
                      )}
                      {item.explanation && (
                        <div className="text-xs sm:text-sm text-[#35443F] bg-[#FAF7F2] border border-[#EFEAE0] p-3 rounded-lg leading-relaxed">
                          <span className="font-bold text-[#1A2421]">Pembahasan: </span>
                          {item.explanation}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                {activeQuiz.questions.map((q, idx) => (
                  <div
                    key={q.id}
                    className="p-4 sm:p-5 rounded-2xl bg-[#FAF7F2] border border-[#E6DFD2] space-y-3"
                  >
                    <div className="font-semibold text-sm sm:text-[15px] text-[#1A2421] leading-relaxed">
                      {idx + 1}. {q.question_text}
                    </div>
                    <div className="grid sm:grid-cols-2 gap-2.5">
                      {q.options.map((opt) => {
                        const selected = answers[q.id]?.optionId === opt.id;
                        return (
                          <button
                            key={opt.id}
                            type="button"
                            onClick={() =>
                              setAnswers((prev) => ({
                                ...prev,
                                [q.id]: { optionId: opt.id },
                              }))
                            }
                            className={`p-3 rounded-xl border text-left text-sm transition cursor-pointer flex items-center gap-2.5 ${
                              selected
                                ? 'bg-[#0F4C42] text-white border-[#0F4C42]'
                                : 'bg-white text-[#2F3C38] border-[#DDD5C7] hover:border-[#0F4C42]/50 hover:bg-[#F6F2EA]'
                            }`}
                          >
                            <span
                              className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 ${
                                selected
                                  ? 'bg-white/20 text-white'
                                  : 'bg-[#F3EDE2] text-[#1A2421]'
                              }`}
                            >
                              {opt.option_label}
                            </span>
                            <span className="leading-snug">{opt.option_text}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}

                {isStudent && (
                  <div className="flex justify-end pt-2">
                    <Button
                      variant="emerald"
                      size="lg"
                      disabled={submitting}
                      onClick={handleSubmitQuiz}
                    >
                      {submitting ? 'Menilai Jawaban...' : 'Kumpulkan Jawaban & Lihat Pembahasan'}
                    </Button>
                  </div>
                )}
              </div>
            )}
          </Card>
        )}
      </section>
    </div>
  );
}
