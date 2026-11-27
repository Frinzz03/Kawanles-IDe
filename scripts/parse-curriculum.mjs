import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const kurikulumDir = path.join(rootDir, 'Kurikulum');

function cleanText(s) {
  return String(s || '')
    .replace(/\s+/g, ' ')
    .replace(/--/g, '–')
    .replace(/\.$/, '')
    .trim();
}

function splitSubmateri(raw) {
  const cleaned = String(raw || '')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/\.$/, '');
  if (!cleaned) return [];
  return cleaned
    .split(';')
    .map((s) => s.trim().replace(/\.$/, ''))
    .filter(Boolean)
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1));
}

// 1. Parser for 01_Matematika.md (Pandoc multiline space-aligned table)
function parseMatematika() {
  const lines = fs.readFileSync(path.join(kurikulumDir, '01_Matematika.md'), 'utf8').split(/\r?\n/);
  const topics = [];
  let currentGrade = null;
  let seqInGrade = 0;

  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    const gradeMatch = line.match(/^###\s+\d+\.\d+\s+Kelas\s+(\d+)\s+(SD|SMP)/i);
    if (gradeMatch) {
      currentGrade = Number(gradeMatch[1]);
      seqInGrade = 0;
      i++;
      continue;
    }

    // Stop when reaching section 5
    if (line.startsWith('## 5.')) break;

    if (currentGrade !== null && /^\s+MAT-(SD|SMP)\d+-\d+/.test(line)) {
      // Measure column start positions from the dashed header or current row
      // In 01_Matematika.md, columns are fixed width:
      // col1: 2..25, col2: 26..49, col3: 50..end
      const col1 = [];
      const col2 = [];
      const col3 = [];

      while (
        i < lines.length &&
        lines[i].trim() !== '' &&
        !/^\s+-{5,}/.test(lines[i])
      ) {
        const row = lines[i];
        col1.push(row.slice(0, 26).trim());
        col2.push(row.slice(26, 50).trim());
        col3.push(row.slice(50).trim());
        i++;
      }

      const code = cleanText(col1.join(' '));
      const title = cleanText(col2.join(' '));
      const subRaw = col3.join(' ').replace(/\s+/g, ' ').trim();

      if (code && title) {
        seqInGrade++;
        topics.push({
          subject_code: 'MAT',
          grade_number: currentGrade,
          code,
          sequence_number: seqInGrade,
          title,
          description: subRaw,
          subtopics: splitSubmateri(subRaw),
          objectives: [],
          validation_status: 'hasil_audit_struktur',
        });
      }
      continue;
    }

    i++;
  }
  return topics;
}

// Generic pipe-table parser for 02, 03, 04, 05, 06
function parsePipeMarkdown({ file, subjectCode, stopHeading, mode, validationStatus }) {
  const lines = fs.readFileSync(path.join(kurikulumDir, file), 'utf8').split(/\r?\n/);
  const topics = [];
  let currentGrade = null;
  let seqInGrade = 0;

  for (const rawLine of lines) {
    const line = rawLine.trim();
    if (stopHeading && line.startsWith(stopHeading)) break;

    // Match grade heading variants:
    // "### Kelas 1 SD", "### 3.1 Kelas 1 SD — ...", "## SD Kelas 1 — ...", "## SMP Kelas 7 — ..."
    const g1 = line.match(/^#{2,3}\s+(?:\d+\.\d+\s+)?(?:(?:SD|SMP)\s+)?Kelas\s+(\d+)\b/i);
    if (g1) {
      currentGrade = Number(g1[1]);
      seqInGrade = 0;
      continue;
    }

    if (currentGrade === null) continue;
    if (!line.startsWith('|')) continue;

    const cells = line
      .split('|')
      .slice(1, -1)
      .map((c) => c.trim());
    if (cells.length < 3) continue;
    if (cells[0].startsWith('---') || cells[0].startsWith(':---')) continue;
    if (/^(ID|ID Bab|Bab|Jenjang|No\.?|Fase|Kode)$/i.test(cells[0])) continue;

    if (mode === 'bin') {
      // | BIND-SD1-01 | 1. Mengenal Huruf dan Bunyi | sub1; sub2 |
      if (!/^BIND-(SD|SMP)\d+-\d+$/i.test(cells[0])) continue;
      seqInGrade++;
      const title = cleanText(cells[1].replace(/^\d+\.\s*/, ''));
      const subRaw = cells[2];
      topics.push({
        subject_code: subjectCode,
        grade_number: currentGrade,
        code: cells[0],
        sequence_number: seqInGrade,
        title,
        description: cleanText(subRaw),
        subtopics: splitSubmateri(subRaw),
        objectives: [],
        validation_status: validationStatus,
      });
    } else if (mode === 'big') {
      // | ENG-SD1-01 | My First English Words | sub1; sub2 |
      if (!/^ENG-(SD|SMP)\d+-\d+$/i.test(cells[0])) continue;
      seqInGrade++;
      const code = cells[0].replace(/^ENG-/, 'BIG-');
      const title = cleanText(cells[1]);
      const subRaw = cells[2];
      topics.push({
        subject_code: subjectCode,
        grade_number: currentGrade,
        code,
        sequence_number: seqInGrade,
        title,
        description: cleanText(subRaw),
        subtopics: splitSubmateri(subRaw),
        objectives: [],
        validation_status: validationStatus,
      });
    } else if (mode === 'bj') {
      // | 1 | Sinau Basa Jawa | sub1; sub2 | Tujuan pembelajaran |
      if (!/^\d+$/.test(cells[0])) continue;
      seqInGrade++;
      const level = currentGrade <= 6 ? 'SD' : 'SMP';
      const code = `BJ-${level}${currentGrade}-${String(seqInGrade).padStart(2, '0')}`;
      const title = cleanText(cells[1]);
      const subRaw = cells[2];
      const obj = cells[3] ? [cleanText(cells[3])] : [];
      topics.push({
        subject_code: subjectCode,
        grade_number: currentGrade,
        code,
        sequence_number: seqInGrade,
        title,
        description: cleanText(subRaw),
        subtopics: splitSubmateri(subRaw),
        objectives: obj,
        validation_status: validationStatus,
      });
    } else if (mode === 'ipas') {
      // | IPAS-SD3-01 | Pancaindra dan Fungsinya | sub1; sub2 |
      if (!/^IPAS-SD\d+-\d+$/i.test(cells[0])) continue;
      seqInGrade++;
      const title = cleanText(cells[1]);
      const subRaw = cells[2];
      topics.push({
        subject_code: subjectCode,
        grade_number: currentGrade,
        code: cells[0],
        sequence_number: seqInGrade,
        title,
        description: cleanText(subRaw),
        subtopics: splitSubmateri(subRaw),
        objectives: [],
        validation_status: validationStatus,
      });
    } else if (mode === 'ipa') {
      // | IPA-SMP7-01 | Identifikasi Makhluk Hidup | Biologi | sub1; sub2 |
      if (!/^IPA-SMP\d+-\d+$/i.test(cells[0])) continue;
      seqInGrade++;
      const title = cleanText(cells[1]);
      const bidang = cleanText(cells[2]);
      const subRaw = cells[3];
      topics.push({
        subject_code: subjectCode,
        grade_number: currentGrade,
        code: cells[0],
        sequence_number: seqInGrade,
        title,
        description: `${bidang}: ${cleanText(subRaw)}`,
        subtopics: splitSubmateri(subRaw),
        objectives: [],
        validation_status: validationStatus,
      });
    }
  }

  return topics;
}

// 7. Parser for 07_IPS_SMP.md (Structured heading blocks per bab)
function parseIpsSmp() {
  const text = fs.readFileSync(path.join(kurikulumDir, '07_IPS_SMP.md'), 'utf8');
  const blocks = text.split(/^###\s+Kelas\s+(VII|VIII|IX)\s+[—–-]\s+Bab\s+(\d+)/gm);
  const romanMap = { VII: 7, VIII: 8, IX: 9 };
  const topics = [];

  for (let i = 1; i < blocks.length; i += 3) {
    const roman = blocks[i];
    const babNum = Number(blocks[i + 1]);
    const body = blocks[i + 2] || '';
    const grade = romanMap[roman];

    const idMatch = body.match(/\*\*ID:\*\*\s*`?([A-Z0-9-]+)`?/);
    const titleMatch = body.match(/\*\*Judul:\*\*\s*(.+)/);
    const bidangMatch = body.match(/\*\*Bidang kajian:\*\*\s*(.+)/);
    const localMatch = body.match(/\*\*Konteks lokal:\*\*\s*(.+)/);
    const noteMatch = body.match(/\*\*Catatan kurikulum:\*\*\s*(.+)/);

    const subSection = body.match(/\*\*Submateri:\*\*([\s\S]*?)(?:\*\*Tujuan pembelajaran:\*\*|$)/);
    const subtopics = [];
    if (subSection) {
      for (const line of subSection[1].split(/\r?\n/)) {
        const m = line.trim().match(/^\d+\.\s+(.+)/);
        if (m) subtopics.push(cleanText(m[1]));
      }
    }

    const objSection = body.match(/\*\*Tujuan pembelajaran:\*\*([\s\S]*?)(?:\*\*Materi dan aktivitas:\*\*|$)/);
    const objectives = [];
    if (objSection) {
      for (const line of objSection[1].split(/\r?\n/)) {
        const m = line.trim().match(/^-\s+(.+)/);
        if (m) objectives.push(cleanText(m[1]));
      }
    }

    if (idMatch && titleMatch) {
      topics.push({
        subject_code: 'IPS',
        grade_number: grade,
        code: idMatch[1].trim(),
        sequence_number: babNum,
        title: cleanText(titleMatch[1]),
        description: bidangMatch
          ? `${cleanText(bidangMatch[1])}: ${subtopics.join('; ')}`
          : subtopics.join('; '),
        local_context: localMatch ? cleanText(localMatch[1]) : null,
        curriculum_note: noteMatch ? cleanText(noteMatch[1]) : null,
        subtopics,
        objectives,
        validation_status: 'perlu_pemeriksaan_rincian',
      });
    }
  }

  return topics;
}

const allTopics = [
  ...parseMatematika(),
  ...parsePipeMarkdown({
    file: '02_Bahasa_Indonesia.md',
    subjectCode: 'BIN',
    stopHeading: '## 4.',
    mode: 'bin',
    validationStatus: 'hasil_audit_struktur',
  }),
  ...parsePipeMarkdown({
    file: '03_Bahasa_Inggris.md',
    subjectCode: 'BIG',
    stopHeading: '## 5.',
    mode: 'big',
    validationStatus: 'hasil_audit_struktur',
  }),
  ...parsePipeMarkdown({
    file: '04_Bahasa_Jawa.md',
    subjectCode: 'BJ',
    stopHeading: '## 6.',
    mode: 'bj',
    validationStatus: 'finalisasi_struktur_selesai_perlu_validasi_guru',
  }),
  ...parsePipeMarkdown({
    file: '05_IPAS_SD.md',
    subjectCode: 'IPAS',
    stopHeading: '## 4.',
    mode: 'ipas',
    validationStatus: 'hasil_audit_struktur',
  }),
  ...parsePipeMarkdown({
    file: '06_IPA_SMP.md',
    subjectCode: 'IPA',
    stopHeading: '## 4.',
    mode: 'ipa',
    validationStatus: 'hasil_audit_struktur',
  }),
  ...parseIpsSmp(),
];

const summary = {};
let totalSubtopics = 0;
for (const t of allTopics) {
  summary[t.subject_code] = (summary[t.subject_code] || 0) + 1;
  totalSubtopics += t.subtopics.length;
}

const outPath = path.join(rootDir, 'database', 'curriculum_parsed.json');
fs.writeFileSync(outPath, JSON.stringify(allTopics, null, 2), 'utf8');

console.log('=== HASIL PARSING 7 MASTER KURIKULUM ===');
console.table(summary);
console.log(`Total Bab      : ${allTopics.length}`);
console.log(`Total Submateri: ${totalSubtopics}`);
console.log(`Disimpan ke    : ${outPath}`);
