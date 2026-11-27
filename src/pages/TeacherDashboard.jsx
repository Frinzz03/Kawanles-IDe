import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import {
  BookOpen,
  Check,
  ChevronDown,
  ChevronRight,
  ClipboardList,
  Database,
  Eye,
  FilePlus2,
  FolderPlus,
  ImagePlus,
  KeyRound,
  Paperclip,
  Pencil,
  Plus,
  Search,
  Sparkles,
  Target,
  Trash2,
  X,
} from 'lucide-react';
import { apiFetch } from '@/lib/api';
import { Badge, Button, Card, Input, Select, Skeleton, Textarea } from '@/components/ui';
import { formatLearningStatus, getSubjectTheme } from '@/lib/subjectStyles';

function Modal({ open, title, icon: Icon, onClose, children }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="fixed inset-0 bg-[#1A2421]/45 backdrop-blur-xs" onClick={onClose} />
      <Card elevated className="relative z-10 w-full max-w-lg p-5 sm:p-6 space-y-4">
        <div className="flex items-center justify-between border-b border-[#EFEAE0] pb-3">
          <div className="flex items-center gap-2 font-display font-bold text-[#1A2421]">
            {Icon && <Icon className="w-4 h-4 text-[#0F4C42]" />}
            <span>{title}</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#76857F] hover:bg-[#F3EDE2] hover:text-[#1A2421] cursor-pointer transition"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
        {children}
      </Card>
    </div>
  );
}

export default function TeacherDashboard() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const tab = searchParams.get('tab') || 'overview';
  const setTab = (nextTab) => {
    const next = new URLSearchParams(searchParams);
    next.set('tab', nextTab);
    setSearchParams(next);
  };

  const [stats, setStats] = useState(null);
  const [overview, setOverview] = useState(null);
  const [selectedGrade, setSelectedGrade] = useState(() => searchParams.get('grade') || '4');
  const [selectedMapping, setSelectedMapping] = useState(null);
  const [topicsData, setTopicsData] = useState(null);
  const [selectedSubtopic, setSelectedSubtopic] = useState(null);
  const [subtopicDetail, setSubtopicDetail] = useState(null);
  const [students, setStudents] = useState([]);
  const [results, setResults] = useState([]);
  const [toast, setToast] = useState('');

  // Workspace UI controls
  const [searchQuery, setSearchQuery] = useState('');
  const [onlyFilled, setOnlyFilled] = useState(false);
  const [expandedTopics, setExpandedTopics] = useState({});
  const [showTopicModal, setShowTopicModal] = useState(false);
  const [showSubModal, setShowSubModal] = useState(false);
  const [showMatEditor, setShowMatEditor] = useState(false);
  const [showActForm, setShowActForm] = useState(false);
  const [showQForm, setShowQForm] = useState(false);

  // Forms
  const [topicForm, setTopicForm] = useState({ title: '', description: '', local_context: '' });
  const [subForm, setSubForm] = useState({ topic_id: '', title: '', description: '', objectives: '' });
  const [matForm, setMatForm] = useState({ title: '', heading: '', paragraph: '', example: '', tip: '' });
  const [editingMaterialId, setEditingMaterialId] = useState(null);
  const [geminiKey, setGeminiKey] = useState(() => localStorage.getItem('modul_les_gemini_key') || '');
  const [showKeyBox, setShowKeyBox] = useState(false);
  const [generating, setGenerating] = useState(false);
  const [actForm, setActForm] = useState({
    title: '',
    activity_type: 'practice',
    time_limit_minutes: '15',
    passing_score: '75',
  });
  const [qForm, setQForm] = useState({
    activity_id: '',
    question_text: '',
    optA: '',
    optB: '',
    optC: '',
    optD: '',
    correct: 'A',
    explanation: '',
  });
  const [uploading, setUploading] = useState(false);

  const notify = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(''), 4500);
  };

  const updateSelectionParams = ({ grade, mappingId, subtopicId }) => {
    const next = new URLSearchParams(searchParams);
    if (grade !== undefined) next.set('grade', String(grade));
    if (mappingId !== undefined) next.set('mapping', mappingId);
    if (subtopicId !== undefined) {
      if (subtopicId) next.set('subtopic', subtopicId);
      else next.delete('subtopic');
    }
    setSearchParams(next, { replace: true });
    try {
      sessionStorage.setItem(
        'modul_les_teacher_ctx',
        JSON.stringify({
          grade: next.get('grade') || String(selectedGrade),
          mapping: next.get('mapping') || selectedMapping?.id || '',
          subtopic: next.get('subtopic') || '',
        })
      );
    } catch {}
  };

  const loadBase = async () => {
    const [st, ov] = await Promise.all([
      apiFetch('/teacher/stats'),
      apiFetch('/curriculum/overview'),
    ]);
    setStats(st);
    setOverview(ov);
    if (!selectedMapping) {
      let saved = {};
      try {
        saved = JSON.parse(sessionStorage.getItem('modul_les_teacher_ctx') || '{}');
      } catch {}

      const paramMappingId = searchParams.get('mapping') || saved.mapping;
      const paramSubtopicId = searchParams.get('subtopic') || saved.subtopic;
      const paramGrade = searchParams.get('grade') || saved.grade;

      const targetMap =
        (paramMappingId && ov.mappings.find((m) => m.id === paramMappingId)) ||
        (paramGrade && ov.mappings.find((m) => String(m.grade_number) === String(paramGrade))) ||
        ov.mappings.find((m) => m.subject_code === 'MAT' && m.grade_number === 4) ||
        ov.mappings[0];

      if (targetMap) {
        setSelectedGrade(String(targetMap.grade_number));
        selectMapping(targetMap, paramSubtopicId || null, false);
      }
    }
  };

  useEffect(() => {
    loadBase();
  }, []);

  useEffect(() => {
    if (tab === 'students') {
      apiFetch('/teacher/students').then((d) => setStudents(d.students || []));
    } else if (tab === 'results') {
      apiFetch('/teacher/results').then((d) => setResults(d.results || []));
    }
  }, [tab]);

  const selectMapping = async (mapping, preferredSubtopicId = null, syncUrl = true) => {
    setSelectedMapping(mapping);
    setSelectedSubtopic(null);
    setSubtopicDetail(null);
    setShowMatEditor(false);
    setEditingMaterialId(null);
    if (syncUrl) {
      updateSelectionParams({ grade: mapping.grade_number, mappingId: mapping.id, subtopicId: '' });
    }
    const res = await apiFetch(`/curriculum/mappings/${mapping.id}/topics`);
    setTopicsData(res);

    let targetSub = null;
    let targetTopicId = null;

    if (preferredSubtopicId) {
      for (const t of res.topics || []) {
        const found = (t.subtopics || []).find((s) => s.id === preferredSubtopicId);
        if (found) {
          targetSub = found;
          targetTopicId = t.id;
          break;
        }
      }
    }

    if (!targetSub && res.topics?.[0]) {
      targetTopicId = res.topics[0].id;
      targetSub = res.topics[0].subtopics?.[0] || null;
    }

    if (targetTopicId) {
      setSubForm((prev) => ({ ...prev, topic_id: targetTopicId }));
      setExpandedTopics({ [targetTopicId]: true });
    }

    if (targetSub) {
      selectSubtopic(targetSub, syncUrl);
    }
  };

  const selectSubtopic = async (st, syncUrl = true) => {
    setSelectedSubtopic(st);
    setShowMatEditor(false);
    setEditingMaterialId(null);
    if (syncUrl) {
      updateSelectionParams({ subtopicId: st.id });
    }
    const det = await apiFetch(`/subtopics/${st.id}/detail`);
    setSubtopicDetail(det);
    if (det.activities?.[0]) {
      setQForm((prev) => ({ ...prev, activity_id: det.activities[0].id }));
    } else {
      setQForm((prev) => ({ ...prev, activity_id: '' }));
    }
  };

  const openPreview = () => {
    if (!selectedSubtopic) return;
    const returnParams = new URLSearchParams(searchParams);
    returnParams.set('tab', tab);
    if (selectedGrade) returnParams.set('grade', String(selectedGrade));
    if (selectedMapping?.id) returnParams.set('mapping', selectedMapping.id);
    returnParams.set('subtopic', selectedSubtopic.id);
    navigate(`/belajar/${selectedSubtopic.id}`, {
      state: {
        returnTo: `/?${returnParams.toString()}`,
        returnLabel: tab === 'quiz' ? 'Kembali ke Latihan & Soal' : 'Kembali ke Kurikulum & Materi',
      },
    });
  };

  const handleCreateTopic = async (e) => {
    e.preventDefault();
    if (!selectedMapping) return;
    await apiFetch('/teacher/topics', {
      method: 'POST',
      body: JSON.stringify({
        subject_grade_mapping_id: selectedMapping.id,
        ...topicForm,
        status: 'published',
      }),
    });
    setTopicForm({ title: '', description: '', local_context: '' });
    setShowTopicModal(false);
    notify('Bab baru berhasil ditambahkan!');
    await selectMapping(selectedMapping, selectedSubtopic?.id || null);
    loadBase();
  };

  const handleCreateSubtopic = async (e) => {
    e.preventDefault();
    if (!subForm.topic_id) return;
    const objectives = subForm.objectives
      .split('\n')
      .map((s) => s.trim())
      .filter(Boolean);
    const created = await apiFetch('/teacher/subtopics', {
      method: 'POST',
      body: JSON.stringify({
        topic_id: subForm.topic_id,
        title: subForm.title,
        description: subForm.description,
        learning_objectives: objectives,
        status: 'published',
      }),
    });
    setSubForm((prev) => ({ ...prev, title: '', description: '', objectives: '' }));
    setShowSubModal(false);
    notify('Submateri baru tersimpan!');
    await selectMapping(selectedMapping, created?.subtopic?.id || selectedSubtopic?.id || null);
    loadBase();
  };

  const handleCreateMaterial = async (e) => {
    e.preventDefault();
    if (!selectedSubtopic) return;
    const blocks = [];
    if (matForm.heading.trim()) blocks.push({ type: 'heading', text: matForm.heading.trim() });
    if (matForm.paragraph.trim()) blocks.push({ type: 'paragraph', text: matForm.paragraph.trim() });
    if (matForm.example.trim()) blocks.push({ type: 'example', title: 'Contoh', text: matForm.example.trim() });
    if (matForm.tip.trim()) blocks.push({ type: 'tip', text: matForm.tip.trim() });

    if (editingMaterialId) {
      await apiFetch(`/teacher/materials/${editingMaterialId}`, {
        method: 'PATCH',
        body: JSON.stringify({
          title: matForm.title,
          content: blocks,
          status: 'published',
        }),
      });
      setEditingMaterialId(null);
      notify('Perubahan materi berhasil disimpan!');
    } else {
      await apiFetch('/teacher/materials', {
        method: 'POST',
        body: JSON.stringify({
          subtopic_id: selectedSubtopic.id,
          title: matForm.title,
          content: blocks,
          status: 'published',
        }),
      });
      notify('Materi ajar baru berhasil diterbitkan!');
    }
    setMatForm({ title: '', heading: '', paragraph: '', example: '', tip: '' });
    setShowMatEditor(false);
    await selectMapping(selectedMapping, selectedSubtopic.id);
    loadBase();
  };

  const startNewMaterial = () => {
    setEditingMaterialId(null);
    setMatForm({
      title: selectedSubtopic?.title || '',
      heading: '',
      paragraph: '',
      example: '',
      tip: '',
    });
    setShowMatEditor(true);
  };

  const startEditMaterial = (mat) => {
    const blocks = Array.isArray(mat.content) ? mat.content : [];
    const getByType = (t) => blocks.find((b) => b.type === t)?.text || '';
    const listBlock = blocks.find((b) => b.type === 'list');
    const paragraphWithList = [
      getByType('paragraph'),
      listBlock?.items?.length
        ? `\n${listBlock.title ? listBlock.title + ':\n' : ''}${listBlock.items.map((x) => `• ${x}`).join('\n')}`
        : '',
    ]
      .filter(Boolean)
      .join('\n');

    setEditingMaterialId(mat.id);
    setMatForm({
      title: mat.title || '',
      heading: getByType('heading'),
      paragraph: paragraphWithList,
      example: getByType('example'),
      tip: getByType('tip'),
    });
    setShowMatEditor(true);
  };

  const handleDeleteMaterial = async (materialId) => {
    await apiFetch(`/teacher/materials/${materialId}`, { method: 'DELETE' });
    if (editingMaterialId === materialId) {
      setEditingMaterialId(null);
      setShowMatEditor(false);
      setMatForm({ title: '', heading: '', paragraph: '', example: '', tip: '' });
    }
    notify('Materi diarsipkan.');
    await selectMapping(selectedMapping, selectedSubtopic.id);
    loadBase();
  };

  const handleGenerateDraft = async () => {
    if (!selectedSubtopic) return;
    setGenerating(true);
    try {
      if (geminiKey.trim()) {
        localStorage.setItem('modul_les_gemini_key', geminiKey.trim());
      } else {
        localStorage.removeItem('modul_les_gemini_key');
      }
      const res = await apiFetch(`/teacher/subtopics/${selectedSubtopic.id}/generate-draft`, {
        method: 'POST',
        body: JSON.stringify({ gemini_api_key: geminiKey.trim() || undefined }),
      });
      notify(
        res.mode === 'gemini_ai'
          ? `AI (${res.model || 'Gemini'}) selesai! 1 modul lengkap + ${res.questions_created} soal & pembahasan dibuat.`
          : 'Kerangka materi cepat dibuat! Pasang Gemini API Key gratis untuk isi otomatis lengkap.'
      );
      await selectMapping(selectedMapping, selectedSubtopic.id);
      loadBase();
    } catch (err) {
      notify(`Gagal generate: ${err.message}`);
    } finally {
      setGenerating(false);
    }
  };

  const handleUploadMedia = async (materialId, file) => {
    if (!file) return;
    setUploading(true);
    try {
      const fd = new FormData();
      fd.append('file', file);
      fd.append('material_id', materialId);
      fd.append('alt_text', file.name);
      await apiFetch('/teacher/media/upload', { method: 'POST', body: fd });
      notify('File berhasil diunggah ke Neon Object Storage!');
      await selectSubtopic(selectedSubtopic, false);
    } catch (err) {
      notify(`Gagal unggah: ${err.message}`);
    } finally {
      setUploading(false);
    }
  };

  const handleCreateActivity = async (e) => {
    e.preventDefault();
    if (!selectedSubtopic) return;
    await apiFetch('/teacher/activities', {
      method: 'POST',
      body: JSON.stringify({
        subject_grade_mapping_id: selectedMapping?.id,
        topic_id: subtopicDetail?.subtopic?.topic_id,
        subtopic_id: selectedSubtopic.id,
        title: actForm.title,
        activity_type: actForm.activity_type,
        time_limit_minutes: Number(actForm.time_limit_minutes),
        passing_score: Number(actForm.passing_score),
        status: 'published',
      }),
    });
    setActForm({ title: '', activity_type: 'practice', time_limit_minutes: '15', passing_score: '75' });
    setShowActForm(false);
    notify('Paket latihan berhasil dibuat!');
    await selectMapping(selectedMapping, selectedSubtopic.id);
  };

  const handleCreateQuestion = async (e) => {
    e.preventDefault();
    await apiFetch('/teacher/questions', {
      method: 'POST',
      body: JSON.stringify({
        activity_id: qForm.activity_id || undefined,
        question_type: 'multiple_choice',
        question_text: qForm.question_text,
        explanation: qForm.explanation,
        default_score: 25,
        options: [
          { option_label: 'A', option_text: qForm.optA, is_correct: qForm.correct === 'A' },
          { option_label: 'B', option_text: qForm.optB, is_correct: qForm.correct === 'B' },
          { option_label: 'C', option_text: qForm.optC, is_correct: qForm.correct === 'C' },
          { option_label: 'D', option_text: qForm.optD, is_correct: qForm.correct === 'D' },
        ],
      }),
    });
    setQForm((prev) => ({
      ...prev,
      question_text: '',
      optA: '',
      optB: '',
      optC: '',
      optD: '',
      explanation: '',
    }));
    setShowQForm(false);
    notify('Soal pilihan ganda + pembahasan ditambahkan ke bank soal!');
    if (selectedSubtopic) await selectMapping(selectedMapping, selectedSubtopic.id);
    loadBase();
  };

  const mappingsByGrade = (overview?.mappings || []).filter(
    (m) => String(m.grade_number) === String(selectedGrade)
  );

  // Filtered chapters & subtopics for fast search in left sidebar
  const filteredTopics = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return (topicsData?.topics || [])
      .map((t) => {
        const topicMatch = !q || t.title.toLowerCase().includes(q);
        const subs = (t.subtopics || []).filter((st) => {
          const matchesFilled = !onlyFilled || st.material_count > 0 || st.activity_count > 0;
          const matchesQuery = !q || topicMatch || st.title.toLowerCase().includes(q);
          return matchesFilled && matchesQuery;
        });
        return { ...t, subtopics: subs };
      })
      .filter((t) => t.subtopics.length > 0 || (!onlyFilled && !q));
  }, [topicsData, searchQuery, onlyFilled]);

  const tabTitles = {
    overview: {
      title: 'Ringkasan Ruang Guru',
      subtitle: 'Pantau statistik kurikulum 7 mapel SD–SMP (Gresik Daratan), modul ajar, bank soal, dan siswa.',
    },
    curriculum: {
      title: 'Kurikulum & Materi Ajar',
      subtitle: 'Pilih kelas, mapel, dan submateri untuk mengelola modul ajar, generate AI 1-klik, dan lampiran media.',
    },
    quiz: {
      title: 'Latihan & Bank Soal',
      subtitle: 'Kelola paket latihan, evaluasi bab, serta bank soal pilihan ganda beserta pembahasannya.',
    },
    students: {
      title: 'Data Siswa Les',
      subtitle: 'Lihat akun siswa terdaftar, email, mapel aktif, progres submateri, dan rata-rata nilai.',
    },
    results: {
      title: 'Hasil Belajar Siswa',
      subtitle: 'Pantau riwayat nilai latihan dan evaluasi yang dikumpulkan siswa secara real-time.',
    },
  };
  const headerInfo = tabTitles[tab] || tabTitles.overview;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-5">
      {toast && (
        <div className="fixed bottom-5 right-5 z-50 bg-[#1A2421] text-[#FAF7F2] px-4 py-3 rounded-xl shadow-lg text-sm font-medium max-w-md border border-[#32423D]">
          {toast}
        </div>
      )}

      {/* Modals for Rare Structural Actions (+ Bab / + Submateri) */}
      <Modal
        open={showTopicModal}
        title={`Tambah Bab Baru — ${selectedMapping?.subject_name || ''}`}
        icon={FolderPlus}
        onClose={() => setShowTopicModal(false)}
      >
        <form onSubmit={handleCreateTopic} className="space-y-3">
          <div>
            <label className="block text-xs font-semibold text-[#35443F] mb-1">Judul Bab</label>
            <Input
              required
              placeholder="Contoh: Bangun Datar"
              value={topicForm.title}
              onChange={(e) => setTopicForm({ ...topicForm, title: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-[#35443F] mb-1">Deskripsi Singkat</label>
            <Input
              placeholder="Ringkasan cakupan bab (opsional)"
              value={topicForm.description}
              onChange={(e) => setTopicForm({ ...topicForm, description: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-[#35443F] mb-1">
              Konteks Lokal Gresik Daratan
            </label>
            <Input
              placeholder="Contoh lokal yang relevan (opsional)"
              value={topicForm.local_context}
              onChange={(e) => setTopicForm({ ...topicForm, local_context: e.target.value })}
            />
          </div>
          <div className="flex justify-end gap-2 pt-2">
            <Button type="button" variant="secondary" onClick={() => setShowTopicModal(false)}>
              Batal
            </Button>
            <Button type="submit">
              <Plus className="w-4 h-4" /> Simpan Bab
            </Button>
          </div>
        </form>
      </Modal>

      <Modal
        open={showSubModal}
        title={`Tambah Submateri — ${selectedMapping?.subject_name || ''}`}
        icon={FilePlus2}
        onClose={() => setShowSubModal(false)}
      >
        <form onSubmit={handleCreateSubtopic} className="space-y-3">
          <div>
            <label className="block text-xs font-semibold text-[#35443F] mb-1">Pilih Bab</label>
            <Select
              required
              value={subForm.topic_id}
              onChange={(e) => setSubForm({ ...subForm, topic_id: e.target.value })}
            >
              <option value="">-- Pilih Bab --</option>
              {(topicsData?.topics || []).map((t) => (
                <option key={t.id} value={t.id}>
                  Bab {t.sequence_number}: {t.title}
                </option>
              ))}
            </Select>
          </div>
          <div>
            <label className="block text-xs font-semibold text-[#35443F] mb-1">Judul Submateri</label>
            <Input
              required
              placeholder="Contoh: Menghitung Keliling Segitiga"
              value={subForm.title}
              onChange={(e) => setSubForm({ ...subForm, title: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-[#35443F] mb-1">
              Tujuan Pembelajaran (1 baris per tujuan)
            </label>
            <Textarea
              rows={3}
              placeholder="Siswa mampu menghitung keliling segitiga..."
              value={subForm.objectives}
              onChange={(e) => setSubForm({ ...subForm, objectives: e.target.value })}
            />
          </div>
          <div className="flex justify-end gap-2 pt-2">
            <Button type="button" variant="secondary" onClick={() => setShowSubModal(false)}>
              Batal
            </Button>
            <Button type="submit" variant="emerald">
              <Plus className="w-4 h-4" /> Simpan Submateri
            </Button>
          </div>
        </form>
      </Modal>

      {/* Compact Editorial Page Header */}
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="font-display text-2xl sm:text-[26px] font-bold text-[#1A2421] tracking-tight">
            {headerInfo.title}
          </h1>
          <p className="text-xs sm:text-sm text-[#51615C] mt-0.5">{headerInfo.subtitle}</p>
        </div>
        {tab === 'curriculum' && selectedMapping && (
          <div className="flex items-center gap-2">
            <Button variant="secondary" size="sm" onClick={() => setShowTopicModal(true)}>
              <FolderPlus className="w-3.5 h-3.5 text-[#0F4C42]" /> + Bab
            </Button>
            <Button variant="secondary" size="sm" onClick={() => setShowSubModal(true)}>
              <FilePlus2 className="w-3.5 h-3.5 text-[#D96B27]" /> + Submateri
            </Button>
          </div>
        )}
      </div>

      {/* TAB 1: OVERVIEW */}
      {tab === 'overview' && (
        <div className="space-y-6">
          {!overview ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {[...Array(6)].map((_, i) => (
                <Card key={i} className="p-4 space-y-2">
                  <Skeleton className="h-3.5 w-20" />
                  <Skeleton className="h-7 w-14" />
                </Card>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {[
                { label: 'Mata Pelajaran', value: overview?.subjects?.length || 7, accent: 'text-[#0F4C42]' },
                { label: 'Total Bab', value: stats?.topics ?? '-', accent: 'text-[#1A2421]' },
                { label: 'Submateri', value: stats?.subtopics ?? '-', accent: 'text-[#1A2421]' },
                { label: 'Materi Ajar', value: stats?.materials ?? '-', accent: 'text-[#0F4C42]' },
                { label: 'Bank Soal', value: stats?.questions ?? '-', accent: 'text-[#D96B27]' },
                { label: 'Siswa Terdaftar', value: stats?.students ?? '-', accent: 'text-[#1A2421]' },
              ].map((s) => (
                <Card key={s.label} className="p-4">
                  <div className="text-xs font-medium text-[#76857F]">{s.label}</div>
                  <div className={`font-display text-2xl font-bold mt-1 tabular-nums ${s.accent}`}>
                    {typeof s.value === 'number' ? s.value.toLocaleString('id-ID') : s.value}
                  </div>
                </Card>
              ))}
            </div>
          )}

          <div className="grid lg:grid-cols-12 gap-5">
            <Card className="lg:col-span-8 p-5 sm:p-6 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h2 className="font-display font-bold text-base text-[#1A2421]">
                  Peta 7 Mata Pelajaran SD–SMP
                </h2>
                <Button size="sm" onClick={() => setTab('curriculum')}>
                  Buka Ruang Kerja Materi
                </Button>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {(overview?.subjects || []).map((subj) => {
                  const theme = getSubjectTheme(subj.code);
                  const SubjectIcon = theme.icon;
                  const mapCount = (overview?.mappings || []).filter((m) => m.subject_id === subj.id).length;
                  const topicSum = (overview?.mappings || [])
                    .filter((m) => m.subject_id === subj.id)
                    .reduce((acc, m) => acc + Number(m.topic_count || 0), 0);
                  return (
                    <button
                      type="button"
                      key={subj.id}
                      onClick={() => {
                        const firstMap = (overview?.mappings || []).find((m) => m.subject_id === subj.id);
                        if (firstMap) {
                          setSelectedGrade(String(firstMap.grade_number));
                          selectMapping(firstMap);
                        }
                        setTab('curriculum');
                      }}
                      className={`p-3.5 rounded-xl border ${theme.border} ${theme.bg} flex items-center justify-between text-left cursor-pointer hover:border-[#0F4C42]/40 transition`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div
                          className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${theme.iconBg}`}
                        >
                          <SubjectIcon className="w-5 h-5" />
                        </div>
                        <div className="min-w-0">
                          <div className="font-display font-bold text-sm text-[#1A2421] truncate">
                            {subj.name}
                          </div>
                          <div className="text-xs text-[#51615C] tabular-nums">
                            {mapCount} tingkat · {topicSum} bab aktif
                          </div>
                        </div>
                      </div>
                      <Badge className={`${theme.badge} shrink-0`}>{subj.code}</Badge>
                    </button>
                  );
                })}
              </div>
            </Card>

            <Card className="lg:col-span-4 p-5 sm:p-6 space-y-4">
              <h2 className="font-display font-bold text-base text-[#1A2421] flex items-center gap-2">
                <Database className="w-4 h-4 text-[#0F4C42]" /> Status Infrastruktur Neon
              </h2>
              <div className="divide-y divide-[#EFEAE0]">
                {[
                  { name: 'Neon PostgreSQL', detail: '28 tabel relasional aktif' },
                  { name: 'Neon Auth (Better Auth)', detail: 'Login Google & Email aktif' },
                  { name: 'Neon Object Storage', detail: 'Bucket privat "assets" aktif' },
                  { name: 'Neon Functions (Hono)', detail: 'API region Singapore aktif' },
                ].map((svc) => (
                  <div
                    key={svc.name}
                    className="py-3 first:pt-0 last:pb-0 flex justify-between items-center gap-3 text-xs"
                  >
                    <div>
                      <div className="font-semibold text-[#1A2421]">{svc.name}</div>
                      <div className="text-[#76857F]">{svc.detail}</div>
                    </div>
                    <Badge className="bg-[#ECF6F0] text-[#175234] shrink-0">Aktif</Badge>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      )}

      {/* TAB 2 & 3: FOCUSED 2-COLUMN WORKSPACE (CURRICULUM & QUIZ) */}
      {(tab === 'curriculum' || tab === 'quiz') && (
        <div className="space-y-4">
          {/* Compact Top Filter Bar: Grade Dropdown + Horizontal Subject Pills */}
          <Card className="p-3 flex flex-col md:flex-row md:items-center gap-3">
            <div className="w-full md:w-44 shrink-0">
              <Select
                value={selectedGrade}
                className="py-2 font-semibold"
                onChange={(e) => {
                  const g = e.target.value;
                  setSelectedGrade(g);
                  const first = (overview?.mappings || []).find((m) => String(m.grade_number) === g);
                  if (first) selectMapping(first);
                }}
              >
                {(overview?.grades || []).map((g) => (
                  <option key={g.id} value={g.grade_number}>
                    {g.name}
                  </option>
                ))}
              </Select>
            </div>

            <div className="h-6 w-px bg-[#E6DFD2] hidden md:block" />

            <div className="flex flex-wrap items-center gap-1.5 flex-1">
              {mappingsByGrade.map((m) => {
                const theme = getSubjectTheme(m.subject_code);
                const SubjectIcon = theme.icon;
                const active = selectedMapping?.id === m.id;
                const statusInfo = formatLearningStatus(m.learning_status);
                return (
                  <button
                    key={m.id}
                    type="button"
                    onClick={() => selectMapping(m)}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold border transition cursor-pointer ${
                      active
                        ? 'bg-[#0F4C42] text-white border-[#0F4C42]'
                        : 'bg-white text-[#35443F] border-[#DDD5C7] hover:bg-[#F6F2EA]'
                    }`}
                  >
                    <SubjectIcon className={`w-3.5 h-3.5 ${active ? 'text-[#F6C49D]' : theme.accent}`} />
                    <span>{m.subject_name}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.5 rounded-md tabular-nums ${
                        active ? 'bg-white/20 text-white' : 'bg-[#F3EDE2] text-[#51615C]'
                      }`}
                    >
                      {m.topic_count}
                    </span>
                    {m.learning_status !== 'regular' && !active && (
                      <span className={`text-[10px] px-1.5 py-0.5 rounded-md ${statusInfo.tone}`}>
                        {statusInfo.label}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </Card>

          {/* Main 2-Column Split */}
          <div className="grid lg:grid-cols-12 gap-5 items-start">
            {/* LEFT: Searchable Chapter/Subtopic Tree */}
            <Card className="lg:col-span-4 overflow-hidden flex flex-col lg:sticky lg:top-5 lg:max-h-[calc(100vh-140px)]">
              <div className="p-3 border-b border-[#EFEAE0] space-y-2.5 bg-[#FAF7F2]">
                <div className="relative">
                  <Search className="w-4 h-4 text-[#8A9690] absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Cari bab atau submateri..."
                    className="w-full rounded-xl border border-[#DDD5C7] bg-white pl-9 pr-3 py-2 text-xs text-[#1A2421] placeholder:text-[#8A9690] focus:border-[#0F4C42] focus:ring-2 focus:ring-[#0F4C42]/15 outline-none transition"
                  />
                </div>
                <div className="flex items-center justify-between text-[11px]">
                  <span className="font-semibold text-[#51615C] tabular-nums">
                    {filteredTopics.length} bab · {selectedMapping?.subject_name}
                  </span>
                  <button
                    type="button"
                    onClick={() => setOnlyFilled((v) => !v)}
                    className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full font-semibold transition cursor-pointer ${
                      onlyFilled
                        ? 'bg-[#0F4C42] text-white'
                        : 'bg-[#EAE3D6] text-[#43524D] hover:bg-[#DFD7C8]'
                    }`}
                  >
                    {onlyFilled && <Check className="w-3 h-3" />}
                    {onlyFilled ? 'Sudah Terisi' : 'Filter Terisi'}
                  </button>
                </div>
              </div>

              <div className="overflow-y-auto p-2.5 space-y-1.5 flex-1">
                {filteredTopics.length === 0 ? (
                  <div className="text-center py-8 px-3 text-xs text-[#76857F]">
                    {onlyFilled
                      ? 'Belum ada submateri terisi di mapel ini. Matikan "Filter Terisi" untuk memilih submateri dan generate AI.'
                      : 'Tidak ada bab yang cocok dengan pencarian.'}
                  </div>
                ) : (
                  filteredTopics.map((t) => {
                    const isOpen = Boolean(expandedTopics[t.id] || searchQuery.trim() || onlyFilled);
                    const filledCount = (t.subtopics || []).filter(
                      (s) => s.material_count > 0 || s.activity_count > 0
                    ).length;
                    return (
                      <div key={t.id} className="rounded-xl border border-[#E6DFD2] overflow-hidden bg-white">
                        <button
                          type="button"
                          onClick={() =>
                            setExpandedTopics((prev) => ({ ...prev, [t.id]: !isOpen }))
                          }
                          className="w-full px-3 py-2.5 bg-[#FAF7F2] hover:bg-[#F3EDE2] flex items-center justify-between gap-2 text-left cursor-pointer transition"
                        >
                          <div className="flex items-center gap-1.5 min-w-0">
                            {isOpen ? (
                              <ChevronDown className="w-3.5 h-3.5 text-[#76857F] shrink-0" />
                            ) : (
                              <ChevronRight className="w-3.5 h-3.5 text-[#76857F] shrink-0" />
                            )}
                            <span className="text-xs font-bold text-[#1A2421] truncate">
                              Bab {t.sequence_number}: {t.title}
                            </span>
                          </div>
                          {filledCount > 0 && (
                            <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-[#ECF6F0] text-[#175234] shrink-0 tabular-nums">
                              {filledCount} isi
                            </span>
                          )}
                        </button>

                        {isOpen && (
                          <div className="divide-y divide-[#F1ECE2] border-t border-[#EFEAE0]">
                            {t.subtopics.map((st) => {
                              const active = selectedSubtopic?.id === st.id;
                              const hasContent = st.material_count > 0 || st.activity_count > 0;
                              return (
                                <button
                                  key={st.id}
                                  type="button"
                                  onClick={() => selectSubtopic(st)}
                                  className={`w-full px-3 py-2 text-left text-xs transition cursor-pointer flex items-center justify-between gap-2 ${
                                    active
                                      ? 'bg-[#0F4C42] text-white font-semibold'
                                      : 'hover:bg-[#FAF7F2] text-[#35443F]'
                                  }`}
                                >
                                  <span className="truncate">
                                    {st.sequence_number}. {st.title}
                                  </span>
                                  <span
                                    className={`text-[10px] shrink-0 px-1.5 py-0.5 rounded-md font-semibold tabular-nums ${
                                      active
                                        ? 'bg-white/20 text-white'
                                        : hasContent
                                        ? 'bg-[#ECF6F0] text-[#175234]'
                                        : 'text-[#8A9690]'
                                    }`}
                                  >
                                    {hasContent ? `${st.material_count}M·${st.activity_count}L` : 'Kosong'}
                                  </span>
                                </button>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    );
                  })
                )}
              </div>
            </Card>

            {/* RIGHT: Clean, Spacious Focused Subtopic Workspace */}
            <div className="lg:col-span-8 space-y-4">
              {!selectedSubtopic || !subtopicDetail ? (
                <Card className="p-10 text-center space-y-2">
                  <BookOpen className="w-10 h-10 text-[#C8C0B2] mx-auto" />
                  <div className="font-display font-bold text-[#1A2421]">
                    Pilih submateri di sebelah kiri
                  </div>
                  <p className="text-xs text-[#76857F]">
                    Klik salah satu bab dan submateri untuk melihat, mengedit, atau membuat modul ajar AI 1-klik.
                  </p>
                </Card>
              ) : tab === 'curriculum' ? (
                <Card className="p-5 sm:p-6 space-y-5">
                  {/* Subtopic Header + Primary Actions */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b border-[#EFEAE0] pb-4">
                    <div className="min-w-0 space-y-1">
                      <h2 className="font-display text-lg sm:text-xl font-bold text-[#1A2421] leading-snug">
                        {selectedSubtopic.title}
                      </h2>
                      <div className="flex flex-wrap items-center gap-1.5 text-xs text-[#51615C]">
                        <span className="font-semibold text-[#0F4C42]">
                          {subtopicDetail.subtopic.subject_name} · {subtopicDetail.subtopic.grade_name}
                        </span>
                        <span className="text-[#9CA8A3]">/</span>
                        <span className="truncate">{subtopicDetail.subtopic.topic_title}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 shrink-0">
                      <Button
                        variant="emerald"
                        size="sm"
                        disabled={generating}
                        onClick={handleGenerateDraft}
                      >
                        <Sparkles className="w-4 h-4" />
                        {generating
                          ? 'Membuat modul...'
                          : geminiKey.trim()
                          ? 'Buat AI (1 Klik)'
                          : 'Draf Cepat'}
                      </Button>
                      <Button variant="secondary" size="sm" onClick={openPreview}>
                        <Eye className="w-4 h-4" /> Mode Mengajar
                      </Button>
                      <Button variant="secondary" size="sm" onClick={startNewMaterial}>
                        <Plus className="w-4 h-4" /> Tulis Manual
                      </Button>
                      <button
                        type="button"
                        onClick={() => setShowKeyBox((v) => !v)}
                        title="Pengaturan Gemini API Key Gratis"
                        className={`p-2 rounded-xl border text-xs font-semibold transition cursor-pointer ${
                          geminiKey.trim()
                            ? 'bg-[#ECF6F0] border-[#C6E3D2] text-[#175234]'
                            : 'bg-white border-[#DDD5C7] text-[#51615C] hover:bg-[#F6F2EA]'
                        }`}
                      >
                        <KeyRound className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Optional Gemini Key Box */}
                  {showKeyBox && (
                    <div className="p-3.5 rounded-xl bg-[#EFF6F4] border border-[#C6DFD7] space-y-2">
                      <div className="text-xs font-bold text-[#0F4C42]">
                        Gemini API Key Gratis (aistudio.google.com/apikey)
                      </div>
                      <div className="flex gap-2">
                        <Input
                          type="password"
                          placeholder="AIzaSy..."
                          value={geminiKey}
                          onChange={(e) => {
                            setGeminiKey(e.target.value);
                            if (e.target.value.trim()) {
                              localStorage.setItem('modul_les_gemini_key', e.target.value.trim());
                            } else {
                              localStorage.removeItem('modul_les_gemini_key');
                            }
                          }}
                        />
                        <Button variant="secondary" size="sm" onClick={() => setShowKeyBox(false)}>
                          Simpan
                        </Button>
                      </div>
                    </div>
                  )}

                  {/* Learning Objectives */}
                  {subtopicDetail.learning_objectives?.length > 0 && (
                    <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#EFEAE0] space-y-1.5">
                      <div className="text-[11px] font-bold text-[#51615C] uppercase tracking-wider flex items-center gap-1.5">
                        <Target className="w-3.5 h-3.5 text-[#0F4C42]" /> Tujuan Pembelajaran
                      </div>
                      <ul className="space-y-1 text-xs text-[#35443F] list-disc pl-4 leading-relaxed">
                        {subtopicDetail.learning_objectives.map((o) => (
                          <li key={o.id}>{o.description}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* On-demand Material Editor */}
                  {showMatEditor && (
                    <form
                      onSubmit={handleCreateMaterial}
                      className="p-4 sm:p-5 rounded-2xl bg-[#FAF7F2] border border-[#DDD5C7] space-y-3"
                    >
                      <div className="flex items-center justify-between">
                        <div className="font-display font-bold text-sm text-[#1A2421]">
                          {editingMaterialId ? 'Edit Materi Tersimpan' : 'Tulis Materi Baru'}
                        </div>
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => {
                            setShowMatEditor(false);
                            setEditingMaterialId(null);
                          }}
                        >
                          Batal
                        </Button>
                      </div>
                      <Input
                        required
                        placeholder="Judul materi..."
                        value={matForm.title}
                        onChange={(e) => setMatForm({ ...matForm, title: e.target.value })}
                      />
                      <Input
                        placeholder="Subjudul pembuka (opsional)"
                        value={matForm.heading}
                        onChange={(e) => setMatForm({ ...matForm, heading: e.target.value })}
                      />
                      <Textarea
                        required
                        rows={4}
                        placeholder="Penjelasan utama materi..."
                        value={matForm.paragraph}
                        onChange={(e) => setMatForm({ ...matForm, paragraph: e.target.value })}
                      />
                      <div className="grid sm:grid-cols-2 gap-3">
                        <Textarea
                          rows={2}
                          placeholder="Contoh soal / ilustrasi (opsional)"
                          value={matForm.example}
                          onChange={(e) => setMatForm({ ...matForm, example: e.target.value })}
                        />
                        <Textarea
                          rows={2}
                          placeholder="Tips cepat / catatan penting (opsional)"
                          value={matForm.tip}
                          onChange={(e) => setMatForm({ ...matForm, tip: e.target.value })}
                        />
                      </div>
                      <div className="flex justify-end gap-2">
                        <Button
                          type="button"
                          variant="secondary"
                          onClick={() => {
                            setShowMatEditor(false);
                            setEditingMaterialId(null);
                          }}
                        >
                          Batal
                        </Button>
                        <Button type="submit">Simpan & Terbitkan</Button>
                      </div>
                    </form>
                  )}

                  {/* Stored Materials List */}
                  {(subtopicDetail.materials || []).length === 0 ? (
                    <div className="rounded-2xl border border-dashed border-[#D6CEC0] bg-[#FAF7F2] p-8 text-center space-y-3">
                      <Sparkles className="w-8 h-8 text-[#D96B27] mx-auto" />
                      <div>
                        <div className="font-display font-bold text-[#1A2421]">
                          Submateri ini belum memiliki isi modul
                        </div>
                        <p className="text-xs text-[#51615C] mt-1 max-w-md mx-auto leading-relaxed">
                          Klik tombol <strong>Buat AI (1 Klik)</strong> untuk langsung membuat modul lengkap + 6 soal latihan, atau klik <strong>Tulis Manual</strong> untuk menyusun sendiri.
                        </p>
                      </div>
                      <div className="flex justify-center gap-2 pt-1">
                        <Button variant="emerald" size="sm" disabled={generating} onClick={handleGenerateDraft}>
                          <Sparkles className="w-4 h-4" />
                          {generating ? 'Membuat...' : 'Buat Materi & Soal AI'}
                        </Button>
                        <Button variant="secondary" size="sm" onClick={startNewMaterial}>
                          <Plus className="w-4 h-4" /> Tulis Manual
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-[#76857F] uppercase tracking-wider tabular-nums">
                          Modul Materi ({subtopicDetail.materials.length}) · Latihan ({subtopicDetail.activities?.length || 0})
                        </span>
                      </div>

                      <div className="divide-y divide-[#EFEAE0] border border-[#E6DFD2] rounded-2xl overflow-hidden bg-[#FAF7F2]">
                        {subtopicDetail.materials.map((m) => {
                          const blocks = Array.isArray(m.content) ? m.content : [];
                          const firstPara =
                            blocks.find((b) => b.type === 'paragraph')?.text ||
                            blocks.find((b) => b.type === 'story_panel')?.lines?.[0]?.text ||
                            blocks.find((b) => b.title)?.title;
                          const exampleCount = blocks.filter(
                            (b) => b.type === 'worked_example' || b.type === 'example'
                          ).length;
                          const hasTable = blocks.some((b) => b.type === 'table');
                          const hasInteractive = blocks.some((b) =>
                            [
                              'visual_cards',
                              'flashcards',
                              'interactive_counter',
                              'interactive_fraction',
                              'shape_gallery',
                              'story_panel',
                            ].includes(b.type)
                          );

                          return (
                            <div key={m.id} className="p-4 sm:p-5 space-y-3">
                              <div className="flex flex-wrap items-start justify-between gap-3">
                                <div className="space-y-1.5">
                                  <div className="font-display font-bold text-base text-[#1A2421]">
                                    {m.title}
                                  </div>
                                  <div className="flex flex-wrap gap-1.5">
                                    <Badge className="bg-white border border-[#E6DFD2] text-[#51615C] tabular-nums">
                                      {blocks.length} blok konten
                                    </Badge>
                                    {hasInteractive && (
                                      <Badge className="bg-[#E6F2EF] text-[#0F4C42]">
                                        <Sparkles className="w-3 h-3" /> Visual Interaktif
                                      </Badge>
                                    )}
                                    {exampleCount > 0 && (
                                      <Badge className="bg-[#FDF0E6] text-[#B35318] tabular-nums">
                                        {exampleCount} contoh soal
                                      </Badge>
                                    )}
                                    {hasTable && (
                                      <Badge className="bg-[#EFEAE0] text-[#43524D]">Tabel</Badge>
                                    )}
                                  </div>
                                </div>

                                <div className="flex flex-wrap items-center gap-1.5">
                                  <button
                                    type="button"
                                    onClick={openPreview}
                                    className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-[#0F4C42] text-white text-xs font-semibold hover:bg-[#0A3B33] cursor-pointer transition"
                                  >
                                    <Eye className="w-3.5 h-3.5" /> Buka Penuh
                                  </button>
                                  <button
                                    type="button"
                                    onClick={() => startEditMaterial(m)}
                                    className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-white border border-[#DDD5C7] text-xs font-semibold text-[#1A2421] hover:bg-[#F3EDE2] cursor-pointer transition"
                                  >
                                    <Pencil className="w-3.5 h-3.5" /> Edit
                                  </button>
                                  <label className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-white border border-[#DDD5C7] text-xs font-semibold text-[#0F4C42] hover:bg-[#EFF6F4] cursor-pointer transition">
                                    <ImagePlus className="w-3.5 h-3.5" />
                                    {uploading ? 'Unggah...' : 'Media'}
                                    <input
                                      type="file"
                                      className="hidden"
                                      accept="image/*,application/pdf,audio/*"
                                      disabled={uploading}
                                      onChange={(e) => handleUploadMedia(m.id, e.target.files?.[0])}
                                    />
                                  </label>
                                  <button
                                    type="button"
                                    onClick={() => handleDeleteMaterial(m.id)}
                                    className="inline-flex items-center p-1.5 rounded-lg bg-white border border-[#ECCACA] text-[#9E2F2F] hover:bg-[#FDF2F2] cursor-pointer transition"
                                    title="Arsipkan materi"
                                  >
                                    <Trash2 className="w-3.5 h-3.5" />
                                  </button>
                                </div>
                              </div>

                              {firstPara && (
                                <p className="text-sm text-[#35443F] leading-relaxed line-clamp-3 bg-white p-3.5 rounded-xl border border-[#EFEAE0]">
                                  {firstPara}
                                </p>
                              )}

                              {m.media?.length > 0 && (
                                <div className="flex flex-wrap gap-2">
                                  {m.media.map((asset) => (
                                    <a
                                      key={asset.id}
                                      href={asset.url || '#'}
                                      target="_blank"
                                      rel="noreferrer"
                                      className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-lg bg-[#E6F2EF] text-[#0F4C42] hover:underline"
                                    >
                                      <Paperclip className="w-3 h-3" /> {asset.file_name}
                                    </a>
                                  ))}
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </Card>
              ) : (
                /* QUIZ & QUESTION BANK TAB */
                <Card className="p-5 sm:p-6 space-y-5">
                  <div className="flex flex-wrap items-start justify-between gap-3 border-b border-[#EFEAE0] pb-4">
                    <div className="space-y-1">
                      <h2 className="font-display text-lg font-bold text-[#1A2421]">
                        Latihan & Soal — {selectedSubtopic.title}
                      </h2>
                      <div className="text-xs font-medium text-[#0F4C42]">
                        {subtopicDetail.subtopic.subject_name} · {subtopicDetail.subtopic.grade_name}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Button variant="emerald" size="sm" onClick={() => setShowActForm((v) => !v)}>
                        <Plus className="w-4 h-4" /> Paket Latihan
                      </Button>
                      <Button variant="primary" size="sm" onClick={() => setShowQForm((v) => !v)}>
                        <Plus className="w-4 h-4" /> Tambah Soal
                      </Button>
                      <Button variant="secondary" size="sm" onClick={openPreview}>
                        <Eye className="w-4 h-4" /> Uji Kuis
                      </Button>
                    </div>
                  </div>

                  {showActForm && (
                    <form
                      onSubmit={handleCreateActivity}
                      className="p-4 rounded-2xl bg-[#FDF5EC] border border-[#EED9C0] grid sm:grid-cols-4 gap-3"
                    >
                      <Input
                        required
                        className="sm:col-span-2"
                        placeholder="Judul latihan (mis. Latihan Pecahan)"
                        value={actForm.title}
                        onChange={(e) => setActForm({ ...actForm, title: e.target.value })}
                      />
                      <Select
                        value={actForm.activity_type}
                        onChange={(e) => setActForm({ ...actForm, activity_type: e.target.value })}
                      >
                        <option value="practice">Latihan Submateri</option>
                        <option value="chapter_evaluation">Evaluasi Bab</option>
                      </Select>
                      <Button type="submit" variant="emerald">
                        Simpan Paket
                      </Button>
                    </form>
                  )}

                  {showQForm && (
                    <form
                      onSubmit={handleCreateQuestion}
                      className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#DDD5C7] space-y-3"
                    >
                      <div className="flex justify-between items-center">
                        <div className="font-display font-bold text-sm text-[#1A2421]">
                          Tambah Soal Pilihan Ganda
                        </div>
                        <Button type="button" variant="ghost" size="sm" onClick={() => setShowQForm(false)}>
                          Tutup
                        </Button>
                      </div>
                      <Select
                        required
                        value={qForm.activity_id}
                        onChange={(e) => setQForm({ ...qForm, activity_id: e.target.value })}
                      >
                        <option value="">-- Pilih Paket Latihan --</option>
                        {(subtopicDetail.activities || []).map((a) => (
                          <option key={a.id} value={a.id}>
                            {a.title} ({a.question_count} soal)
                          </option>
                        ))}
                      </Select>
                      <Textarea
                        required
                        rows={2}
                        placeholder="Tulis pertanyaan soal..."
                        value={qForm.question_text}
                        onChange={(e) => setQForm({ ...qForm, question_text: e.target.value })}
                      />
                      <div className="grid sm:grid-cols-2 gap-2.5">
                        <Input required placeholder="Pilihan A" value={qForm.optA} onChange={(e) => setQForm({ ...qForm, optA: e.target.value })} />
                        <Input required placeholder="Pilihan B" value={qForm.optB} onChange={(e) => setQForm({ ...qForm, optB: e.target.value })} />
                        <Input required placeholder="Pilihan C" value={qForm.optC} onChange={(e) => setQForm({ ...qForm, optC: e.target.value })} />
                        <Input required placeholder="Pilihan D" value={qForm.optD} onChange={(e) => setQForm({ ...qForm, optD: e.target.value })} />
                      </div>
                      <div className="grid sm:grid-cols-3 gap-3">
                        <Select value={qForm.correct} onChange={(e) => setQForm({ ...qForm, correct: e.target.value })}>
                          <option value="A">Kunci: A</option>
                          <option value="B">Kunci: B</option>
                          <option value="C">Kunci: C</option>
                          <option value="D">Kunci: D</option>
                        </Select>
                        <Input
                          required
                          className="sm:col-span-2"
                          placeholder="Pembahasan jawaban benar..."
                          value={qForm.explanation}
                          onChange={(e) => setQForm({ ...qForm, explanation: e.target.value })}
                        />
                      </div>
                      <Button type="submit">Simpan ke Bank Soal</Button>
                    </form>
                  )}

                  {(subtopicDetail.activities || []).length === 0 ? (
                    <div className="rounded-2xl border border-dashed border-[#D6CEC0] bg-[#FAF7F2] p-8 text-center space-y-2">
                      <ClipboardList className="w-8 h-8 text-[#B8AFA0] mx-auto" />
                      <div className="font-display font-bold text-[#1A2421]">
                        Belum ada paket latihan di submateri ini
                      </div>
                      <p className="text-xs text-[#51615C]">
                        Klik <strong>+ Paket Latihan</strong> atau gunakan tombol <strong>Buat AI (1 Klik)</strong> di tab Kurikulum & Materi untuk langsung mendapatkan 6 soal + pembahasan.
                      </p>
                    </div>
                  ) : (
                    <div className="grid sm:grid-cols-2 gap-3">
                      {subtopicDetail.activities.map((a) => (
                        <div
                          key={a.id}
                          className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E6DFD2] flex flex-col justify-between gap-3"
                        >
                          <div className="space-y-1.5">
                            <div className="flex items-start justify-between gap-2">
                              <div className="font-display font-bold text-sm text-[#1A2421]">
                                {a.title}
                              </div>
                              <Badge
                                className={
                                  a.activity_type === 'chapter_evaluation'
                                    ? 'bg-[#FDF0E6] text-[#B35318] shrink-0'
                                    : 'bg-[#E6F2EF] text-[#0F4C42] shrink-0'
                                }
                              >
                                {a.activity_type === 'chapter_evaluation' ? 'Evaluasi' : 'Latihan'}
                              </Badge>
                            </div>
                            <div className="text-xs text-[#76857F] tabular-nums">
                              {a.question_count} soal · {a.time_limit_minutes || 15} menit · KKM {a.passing_score || 75}
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <Button
                              variant="secondary"
                              size="sm"
                              onClick={() => {
                                setQForm((prev) => ({ ...prev, activity_id: a.id }));
                                setShowQForm(true);
                              }}
                            >
                              <Plus className="w-3.5 h-3.5" /> Tambah Soal
                            </Button>
                            <Button variant="primary" size="sm" onClick={openPreview}>
                              <Eye className="w-3.5 h-3.5" /> Lihat Soal
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </Card>
              )}
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: STUDENTS */}
      {tab === 'students' && (
        <Card className="overflow-hidden">
          <div className="p-5 border-b border-[#EFEAE0]">
            <h2 className="font-display font-bold text-base text-[#1A2421]">Daftar Siswa Les</h2>
            <p className="text-xs text-[#76857F] mt-0.5">
              Siswa yang mendaftar otomatis masuk ke daftar ini.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left tabular-nums">
              <thead className="bg-[#F3EDE2] text-xs text-[#51615C] uppercase tracking-wider">
                <tr>
                  <th className="px-5 py-3">Nama Siswa</th>
                  <th className="px-5 py-3">Email</th>
                  <th className="px-5 py-3">Kode</th>
                  <th className="px-5 py-3">Sekolah</th>
                  <th className="px-5 py-3">Mapel Aktif</th>
                  <th className="px-5 py-3">Submateri Tuntas</th>
                  <th className="px-5 py-3">Rata-Rata Nilai</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#EFEAE0]">
                {students.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="px-5 py-8 text-center text-[#76857F]">
                      Belum ada siswa yang terdaftar.
                    </td>
                  </tr>
                ) : (
                  students.map((st) => (
                    <tr key={st.id} className="hover:bg-[#FAF7F2] transition">
                      <td className="px-5 py-3.5 font-semibold text-[#1A2421]">{st.full_name}</td>
                      <td className="px-5 py-3.5 text-xs text-[#51615C]">{st.email || '-'}</td>
                      <td className="px-5 py-3.5 font-mono text-xs text-[#76857F]">
                        {st.student_code || '-'}
                      </td>
                      <td className="px-5 py-3.5 text-[#51615C]">{st.school_name || '-'}</td>
                      <td className="px-5 py-3.5 text-[#35443F]">{st.enrolled_count} mapel</td>
                      <td className="px-5 py-3.5 text-[#35443F]">{st.completed_subtopics} submateri</td>
                      <td className="px-5 py-3.5">
                        <Badge className="bg-[#ECF6F0] text-[#175234]">{st.avg_score ?? '-'}</Badge>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </Card>
      )}

      {/* TAB 5: RESULTS */}
      {tab === 'results' && (
        <Card className="overflow-hidden">
          <div className="p-5 border-b border-[#EFEAE0]">
            <h2 className="font-display font-bold text-base text-[#1A2421]">
              Riwayat Nilai & Pengerjaan Siswa
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left tabular-nums">
              <thead className="bg-[#F3EDE2] text-xs text-[#51615C] uppercase tracking-wider">
                <tr>
                  <th className="px-5 py-3">Siswa</th>
                  <th className="px-5 py-3">Mapel / Kelas</th>
                  <th className="px-5 py-3">Latihan / Evaluasi</th>
                  <th className="px-5 py-3">Nilai</th>
                  <th className="px-5 py-3">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#EFEAE0]">
                {results.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="px-5 py-8 text-center text-[#76857F]">
                      Belum ada siswa yang mengumpulkan latihan.
                    </td>
                  </tr>
                ) : (
                  results.map((r) => {
                    const pct =
                      Number(r.max_score) > 0
                        ? Math.round((Number(r.score) / Number(r.max_score)) * 100)
                        : 0;
                    const passed = !r.passing_score || pct >= Number(r.passing_score);
                    return (
                      <tr key={r.id} className="hover:bg-[#FAF7F2] transition">
                        <td className="px-5 py-3.5 font-semibold text-[#1A2421]">{r.student_name}</td>
                        <td className="px-5 py-3.5 text-[#51615C]">
                          {r.subject_name} · {r.grade_name}
                        </td>
                        <td className="px-5 py-3.5 text-[#1A2421]">{r.activity_title}</td>
                        <td className="px-5 py-3.5 font-display font-bold text-[#1A2421]">{pct}</td>
                        <td className="px-5 py-3.5">
                          <Badge
                            className={
                              passed
                                ? 'bg-[#ECF6F0] text-[#175234]'
                                : 'bg-[#FDF0E6] text-[#B35318]'
                            }
                          >
                            {passed ? 'Tuntas' : 'Perlu Bimbingan'}
                          </Badge>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </Card>
      )}
    </div>
  );
}
