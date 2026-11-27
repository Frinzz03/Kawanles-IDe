import React, { useState } from 'react';
import {
  CheckCircle2,
  Eye,
  EyeOff,
  Layers,
  MessageCircle,
  Minus,
  Plus,
  RotateCcw,
  Shapes,
  Sparkles,
  Volume2,
} from 'lucide-react';
import { Badge, Button } from '@/components/ui';

export function speakText(text, lang = 'id-ID') {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
  try {
    window.speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(String(text || ''));
    utter.lang = lang;
    utter.rate = lang.startsWith('en') ? 0.88 : 0.94;
    utter.pitch = 1.03;
    window.speechSynthesis.speak(utter);
  } catch {
    // ignore speech errors on unsupported browsers
  }
}

// 1. Kartu Visual & Suara (Mendukung schema `items` maupun `cards`)
export function VisualCardsBlock({ block }) {
  const [activeIdx, setActiveIdx] = useState(null);
  const rawList = Array.isArray(block.items)
    ? block.items
    : Array.isArray(block.cards)
    ? block.cards
    : [];
  const items = rawList.map((it) => ({
    visual: it.visual || it.emoji || '',
    label: it.label || it.title || '',
    caption: it.caption || it.sub || '',
    speech: it.speech,
    lang: it.lang,
  }));
  const lang = block.lang || 'id-ID';

  const handleTap = (item, idx) => {
    setActiveIdx(idx);
    speakText(item.speech || `${item.label}. ${item.caption || ''}`, item.lang || lang);
    setTimeout(() => setActiveIdx((cur) => (cur === idx ? null : cur)), 550);
  };

  if (items.length === 0) return null;

  const gridCols =
    items.length <= 2
      ? 'grid-cols-1 sm:grid-cols-2'
      : items.length === 3
      ? 'grid-cols-1 sm:grid-cols-3'
      : items.length === 4
      ? 'grid-cols-2 sm:grid-cols-2 lg:grid-cols-4'
      : 'grid-cols-2 sm:grid-cols-3 md:grid-cols-5';

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between gap-2">
        <div className="font-display font-bold text-sm text-[#1A2421] flex items-center gap-1.5">
          <Sparkles className="w-4 h-4 text-[#D96B27]" />
          {block.title || 'Kartu Konsep Interaktif'}
        </div>
        <span className="text-[11px] font-semibold text-[#0F4C42] flex items-center gap-1">
          <Volume2 className="w-3.5 h-3.5" /> Klik kartu untuk suara
        </span>
      </div>
      <div className={`grid ${gridCols} gap-3`}>
        {items.map((item, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => handleTap(item, idx)}
            className={`group p-4 rounded-2xl border text-left transition-all duration-150 cursor-pointer select-none flex flex-col justify-between gap-2 ${
              activeIdx === idx
                ? 'border-[#0F4C42] bg-[#E6F2EF] animate-bounce-soft'
                : 'border-[#E2D9C9] bg-[#FAF7F2] hover:border-[#0F4C42]/50 hover:bg-white'
            }`}
          >
            <div>
              {item.visual && (
                <div className="text-2xl sm:text-3xl mb-2 leading-none" aria-hidden="true">
                  {item.visual}
                </div>
              )}
              <div className="font-display font-bold text-sm sm:text-[15px] text-[#1A2421] leading-snug">
                {item.label}
              </div>
              {item.caption && (
                <div className="text-xs text-[#51615C] mt-1 leading-relaxed">{item.caption}</div>
              )}
            </div>
            <div className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#0F4C42] opacity-80 group-hover:opacity-100">
              <Volume2 className="w-3 h-3" /> Dengarkan
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

// 2. Flip-Card Interaktif
export function FlashcardsBlock({ block }) {
  const [flipped, setFlipped] = useState({});
  const cards = Array.isArray(block.cards) ? block.cards : [];
  const lang = block.lang || 'id-ID';

  const toggleFlip = (idx, card) => {
    const nextFlip = !flipped[idx];
    setFlipped((prev) => ({ ...prev, [idx]: nextFlip }));
    speakText(nextFlip ? card.backSpeech || card.back : card.frontSpeech || card.front, card.lang || lang);
  };

  if (cards.length === 0) return null;

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between gap-2">
        <div className="font-display font-bold text-sm text-[#1A2421] flex items-center gap-1.5">
          <Layers className="w-4 h-4 text-[#0F4C42]" />
          {block.title || 'Kartu Bolak-Balik (Klik untuk Membalik)'}
        </div>
        <button
          type="button"
          onClick={() => setFlipped({})}
          className="text-xs font-semibold text-[#5E6D68] hover:text-[#0F4C42] inline-flex items-center gap-1 cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5" /> Reset
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {cards.map((card, idx) => {
          const isBack = Boolean(flipped[idx]);
          return (
            <button
              key={idx}
              type="button"
              onClick={() => toggleFlip(idx, card)}
              className={`min-h-[124px] p-4 rounded-2xl border text-center transition-all duration-150 cursor-pointer flex flex-col items-center justify-center gap-1.5 ${
                isBack
                  ? 'bg-[#0F4C42] text-white border-[#0F4C42] animate-pop-in'
                  : 'bg-[#FDF4E7] text-[#1A2421] border-[#EED3AC] hover:border-[#D96B27]'
              }`}
            >
              {card.emoji && (
                <div className="text-2xl leading-none" aria-hidden="true">
                  {card.emoji}
                </div>
              )}
              <div
                className={`font-display font-bold text-sm sm:text-base leading-snug ${
                  isBack ? 'text-white' : 'text-[#1A2421]'
                }`}
              >
                {isBack ? card.back : card.front}
              </div>
              {isBack && card.hint && <div className="text-xs text-[#C8E0DA]">{card.hint}</div>}
              <span
                className={`text-[10px] font-semibold mt-1 px-2.5 py-0.5 rounded-full ${
                  isBack ? 'bg-white/15 text-[#E6F2EF]' : 'bg-[#F5E2C3] text-[#733F0B]'
                }`}
              >
                {isBack ? 'Klik untuk tutup' : 'Klik untuk balik'}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

// 3. Alat Peraga Hitung & Operasi Visual (Mode: count | add | subtract | compare)
export function InteractiveCounterBlock({ block }) {
  const mode = block.mode || 'count';
  const emoji = block.emoji || '🍎';
  const emoji2 = block.emoji2 || '🍊';
  const maxVal = Number(block.max || 20);
  const [a, setA] = useState(Number(block.initialA ?? 3));
  const [b, setB] = useState(Number(block.initialB ?? 2));

  const clampedA = Math.max(0, Math.min(maxVal, a));
  const clampedB = Math.max(0, Math.min(mode === 'subtract' ? clampedA : maxVal, b));

  const result =
    mode === 'add'
      ? clampedA + clampedB
      : mode === 'subtract'
      ? Math.max(0, clampedA - clampedB)
      : clampedA;

  const compareSign = clampedA > clampedB ? '>' : clampedA < clampedB ? '<' : '=';
  const compareText =
    clampedA > clampedB
      ? `${clampedA} lebih banyak dari ${clampedB}`
      : clampedA < clampedB
      ? `${clampedA} lebih sedikit dari ${clampedB}`
      : `${clampedA} sama banyak dengan ${clampedB}`;

  return (
    <div className="p-4 sm:p-5 rounded-2xl bg-[#F3EDE2] border border-[#E2D9C9] space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="space-y-0.5">
          <h4 className="font-display font-bold text-base text-[#1A2421]">
            {block.title || 'Alat Peraga Hitung Interaktif'}
          </h4>
          <p className="text-xs text-[#5E6D68]">Tekan tombol + dan − untuk melihat perubahan benda.</p>
        </div>
        <button
          type="button"
          onClick={() => {
            if (mode === 'add') speakText(`${clampedA} ditambah ${clampedB} sama dengan ${result}`);
            else if (mode === 'subtract') speakText(`${clampedA} dikurangi ${clampedB} sama dengan ${result}`);
            else if (mode === 'compare') speakText(compareText);
            else speakText(`Ada ${clampedA} benda`);
          }}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-[#DDD5C7] text-xs font-semibold text-[#0F4C42] hover:bg-[#FAF7F2] cursor-pointer"
        >
          <Volume2 className="w-3.5 h-3.5" /> Bacakan
        </button>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-4 bg-white p-3.5 rounded-xl border border-[#E6DFD2]">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setA((v) => Math.max(0, v - 1))}
            className="w-9 h-9 rounded-xl bg-[#F3EDE2] hover:bg-[#E7DFD0] text-[#1A2421] flex items-center justify-center cursor-pointer transition"
            aria-label="Kurangi angka pertama"
          >
            <Minus className="w-4 h-4" />
          </button>
          <div className="w-12 text-center font-display font-extrabold text-2xl text-[#0F4C42] tabular-nums">
            {clampedA}
          </div>
          <button
            type="button"
            onClick={() => setA((v) => Math.min(maxVal, v + 1))}
            className="w-9 h-9 rounded-xl bg-[#0F4C42] text-white hover:bg-[#0A3B33] flex items-center justify-center cursor-pointer transition"
            aria-label="Tambah angka pertama"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>

        {mode !== 'count' && (
          <>
            <div className="font-display font-extrabold text-2xl text-[#64736E]">
              {mode === 'add' ? '+' : mode === 'subtract' ? '−' : compareSign}
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setB((v) => Math.max(0, v - 1))}
                className="w-9 h-9 rounded-xl bg-[#F3EDE2] hover:bg-[#E7DFD0] text-[#1A2421] flex items-center justify-center cursor-pointer transition"
                aria-label="Kurangi angka kedua"
              >
                <Minus className="w-4 h-4" />
              </button>
              <div className="w-12 text-center font-display font-extrabold text-2xl text-[#D96B27] tabular-nums">
                {clampedB}
              </div>
              <button
                type="button"
                onClick={() =>
                  setB((v) => Math.min(mode === 'subtract' ? clampedA : maxVal, v + 1))
                }
                className="w-9 h-9 rounded-xl bg-[#D96B27] text-white hover:bg-[#BD591B] flex items-center justify-center cursor-pointer transition"
                aria-label="Tambah angka kedua"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </>
        )}

        {(mode === 'add' || mode === 'subtract') && (
          <>
            <div className="font-display font-extrabold text-2xl text-[#76857F]">=</div>
            <div className="px-4 py-1.5 rounded-xl bg-[#E6F2EF] text-[#0F4C42] font-display font-extrabold text-2xl tabular-nums">
              {result}
            </div>
          </>
        )}
      </div>

      {mode === 'compare' ? (
        <div className="grid grid-cols-2 gap-3">
          <div className="p-3.5 rounded-xl bg-white border border-[#E6DFD2] min-h-[76px]">
            <div className="text-[11px] font-bold text-[#0F4C42] mb-2 tabular-nums">
              Kelompok Kiri ({clampedA})
            </div>
            <div className="flex flex-wrap gap-1.5">
              {Array.from({ length: clampedA }).map((_, i) => (
                <span key={i} className="text-2xl animate-pop-in">
                  {emoji}
                </span>
              ))}
            </div>
          </div>
          <div className="p-3.5 rounded-xl bg-white border border-[#E6DFD2] min-h-[76px]">
            <div className="text-[11px] font-bold text-[#D96B27] mb-2 tabular-nums">
              Kelompok Kanan ({clampedB})
            </div>
            <div className="flex flex-wrap gap-1.5">
              {Array.from({ length: clampedB }).map((_, i) => (
                <span key={i} className="text-2xl animate-pop-in">
                  {emoji2}
                </span>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="p-4 rounded-xl bg-white border border-[#E6DFD2] min-h-[84px] flex flex-wrap items-center justify-center gap-2">
          {mode === 'subtract' ? (
            Array.from({ length: clampedA }).map((_, i) => {
              const crossed = i >= clampedA - clampedB;
              return (
                <span
                  key={i}
                  className={`text-3xl transition-all duration-200 ${
                    crossed ? 'opacity-25 scale-75 grayscale line-through' : 'animate-pop-in'
                  }`}
                >
                  {emoji}
                </span>
              );
            })
          ) : (
            <>
              {Array.from({ length: clampedA }).map((_, i) => (
                <span key={`a-${i}`} className="text-3xl animate-pop-in">
                  {emoji}
                </span>
              ))}
              {mode === 'add' &&
                Array.from({ length: clampedB }).map((_, i) => (
                  <span key={`b-${i}`} className="text-3xl animate-pop-in">
                    {emoji2}
                  </span>
                ))}
            </>
          )}
          {clampedA === 0 && (mode !== 'add' || clampedB === 0) && (
            <span className="text-xs text-[#76857F]">Klik tombol + untuk memunculkan benda.</span>
          )}
        </div>
      )}

      <div className="text-center text-sm font-bold text-[#1A2421] tabular-nums">
        {mode === 'compare'
          ? compareText
          : mode === 'add'
          ? `${clampedA} ${emoji} + ${clampedB} ${emoji2} = ${result} benda seluruhnya`
          : mode === 'subtract'
          ? `Dari ${clampedA} ${emoji}, diambil ${clampedB} → tersisa ${result} ${emoji}`
          : `Jumlah benda sekarang: ${clampedA} ${emoji}`}
      </div>
    </div>
  );
}

// 4. Alat Peraga Pecahan SVG Interaktif
export function InteractiveFractionBlock({ block }) {
  const [num, setNum] = useState(Number(block.numerator ?? 1));
  const [den, setDen] = useState(Number(block.denominator ?? 4));
  const safeNum = Math.min(num, den);

  const radius = 56;
  const cx = 64;
  const cy = 64;

  const slices = Array.from({ length: den }).map((_, i) => {
    if (den === 1) {
      return (
        <circle
          key={i}
          cx={cx}
          cy={cy}
          r={radius}
          fill={safeNum >= 1 ? '#0F4C42' : '#E6DFD2'}
          stroke="#ffffff"
          strokeWidth="2"
        />
      );
    }
    const startAngle = (i * 2 * Math.PI) / den - Math.PI / 2;
    const endAngle = ((i + 1) * 2 * Math.PI) / den - Math.PI / 2;
    const x1 = cx + radius * Math.cos(startAngle);
    const y1 = cy + radius * Math.sin(startAngle);
    const x2 = cx + radius * Math.cos(endAngle);
    const y2 = cy + radius * Math.sin(endAngle);
    const largeArc = endAngle - startAngle > Math.PI ? 1 : 0;
    const d = `M ${cx} ${cy} L ${x1} ${y1} A ${radius} ${radius} 0 ${largeArc} 1 ${x2} ${y2} Z`;
    return (
      <path
        key={i}
        d={d}
        fill={i < safeNum ? '#0F4C42' : '#E6DFD2'}
        stroke="#ffffff"
        strokeWidth="2"
        className="transition-colors duration-150"
      />
    );
  });

  return (
    <div className="p-5 rounded-2xl bg-[#F3EDE2] border border-[#E2D9C9] space-y-4">
      <div className="space-y-0.5">
        <h4 className="font-display font-bold text-base text-[#1A2421]">
          {block.title || 'Eksplorasi Potongan Pecahan'}
        </h4>
        <p className="text-xs text-[#5E6D68]">Geser pembilang dan penyebut untuk melihat bagian pecahan.</p>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6 bg-white p-5 rounded-xl border border-[#E6DFD2]">
        <svg viewBox="0 0 128 128" className="w-36 h-36 shrink-0">
          {slices}
        </svg>
        <div className="space-y-3 text-center sm:text-left">
          <div className="inline-flex flex-col items-center px-5 py-2 rounded-xl bg-[#FAF7F2] border border-[#E2D9C9] tabular-nums">
            <span className="font-display text-2xl font-extrabold text-[#0F4C42]">{safeNum}</span>
            <span className="w-10 h-0.5 bg-[#1A2421] my-0.5" />
            <span className="font-display text-2xl font-extrabold text-[#1A2421]">{den}</span>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#3F4E49] tabular-nums">
              <span className="w-24">Pembilang ({safeNum}):</span>
              <input
                type="range"
                min={0}
                max={den}
                value={safeNum}
                onChange={(e) => setNum(Number(e.target.value))}
                className="accent-[#0F4C42] cursor-pointer"
              />
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#3F4E49] tabular-nums">
              <span className="w-24">Penyebut ({den}):</span>
              <input
                type="range"
                min={1}
                max={12}
                value={den}
                onChange={(e) => {
                  const nextDen = Number(e.target.value);
                  setDen(nextDen);
                  if (num > nextDen) setNum(nextDen);
                }}
                className="accent-[#0F4C42] cursor-pointer"
              />
            </div>
          </div>
          <p className="text-xs text-[#51615C]">
            <strong>{safeNum}</strong> bagian berwarna dari total <strong>{den}</strong> potongan sama besar.
          </p>
        </div>
      </div>
    </div>
  );
}

const SHAPE_PRESETS = {
  segitiga: { shape: 'triangle', name: 'Segitiga', desc: 'Memiliki 3 sisi lurus dan 3 titik sudut. Jumlah ketiga sudutnya 180°.', example: 'Penggaris segitiga, atap rumah, rambu jalan' },
  persegi: { shape: 'square', name: 'Persegi', desc: 'Memiliki 4 sisi sama panjang dan 4 sudut siku-siku (90°).', example: 'Ubin keramik, papan catur, sapu tangan' },
  persegi_panjang: { shape: 'rectangle', name: 'Persegi Panjang', desc: 'Memiliki 2 pasang sisi berhadapan sama panjang & sejajar serta 4 sudut 90°.', example: 'Papan tulis, pintu kelas, buku tulis' },
  lingkaran: { shape: 'circle', name: 'Lingkaran', desc: 'Dibatasi satu garis lengkung tertutup yang berjarak sama dari titik pusat.', example: 'Jam dinding, roda sepeda, koin' },
  kubus: { shape: 'cube', name: 'Kubus', desc: 'Bangun ruang dengan 6 sisi persegi sama besar, 12 rusuk sama panjang, 8 titik sudut.', example: 'Dadu, rubik, kotak kado kubus' },
  balok: { shape: 'cuboid', name: 'Balok', desc: 'Bangun ruang dengan 3 pasang sisi persegi panjang berhadapan sama besar.', example: 'Kotak pensil, lemari, batu bata' },
  kerucut: { shape: 'cone', name: 'Kerucut', desc: 'Memiliki alas lingkaran, selimut melengkung, dan 1 titik puncak.', example: 'Topi ulang tahun, tumpeng, corong' },
  bola: { shape: 'sphere', name: 'Bola', desc: 'Bangun ruang sisi lengkung sempurna tanpa rusuk maupun titik sudut.', example: 'Bola sepak, kelereng, globe' },
};

// 5. Galeri Bangun Datar & Ruang SVG Interaktif
export function ShapeGalleryBlock({ block }) {
  const [selected, setSelected] = useState(0);
  const rawShapes = Array.isArray(block.shapes) ? block.shapes : [];
  const shapes = rawShapes.map((sh) => {
    if (typeof sh === 'string') {
      const key = sh.toLowerCase().trim();
      return SHAPE_PRESETS[key] || { shape: key, name: sh, desc: 'Bangun geometri', example: '' };
    }
    return sh;
  });

  const renderSvg = (shapeType) => {
    switch (shapeType) {
      case 'triangle':
        return (
          <svg viewBox="0 0 100 100" className="w-16 h-16 mx-auto">
            <polygon points="50,12 90,86 10,86" fill="#0F4C42" stroke="#082D27" strokeWidth="3" />
          </svg>
        );
      case 'square':
        return (
          <svg viewBox="0 0 100 100" className="w-16 h-16 mx-auto">
            <rect x="18" y="18" width="64" height="64" rx="4" fill="#21734A" stroke="#114029" strokeWidth="3" />
          </svg>
        );
      case 'rectangle':
        return (
          <svg viewBox="0 0 100 100" className="w-16 h-16 mx-auto">
            <rect x="10" y="26" width="80" height="48" rx="4" fill="#1D4E89" stroke="#102E52" strokeWidth="3" />
          </svg>
        );
      case 'circle':
        return (
          <svg viewBox="0 0 100 100" className="w-16 h-16 mx-auto">
            <circle cx="50" cy="50" r="36" fill="#D96B27" stroke="#853D12" strokeWidth="3" />
          </svg>
        );
      case 'cube':
        return (
          <svg viewBox="0 0 100 100" className="w-16 h-16 mx-auto">
            <polygon points="22,34 62,34 62,78 22,78" fill="#5B3E96" stroke="#301E54" strokeWidth="2.5" />
            <polygon points="22,34 40,18 80,18 62,34" fill="#8166B8" stroke="#301E54" strokeWidth="2.5" />
            <polygon points="62,34 80,18 80,62 62,78" fill="#432C73" stroke="#301E54" strokeWidth="2.5" />
          </svg>
        );
      case 'cuboid':
        return (
          <svg viewBox="0 0 100 100" className="w-16 h-16 mx-auto">
            <polygon points="10,42 66,42 66,78 10,78" fill="#B2334D" stroke="#6B1B2C" strokeWidth="2.5" />
            <polygon points="10,42 28,26 84,26 66,42" fill="#D45B73" stroke="#6B1B2C" strokeWidth="2.5" />
            <polygon points="66,42 84,26 84,62 66,78" fill="#8F243A" stroke="#6B1B2C" strokeWidth="2.5" />
          </svg>
        );
      case 'cone':
        return (
          <svg viewBox="0 0 100 100" className="w-16 h-16 mx-auto">
            <polygon points="50,12 82,76 18,76" fill="#C4551E" stroke="#6E2C0C" strokeWidth="2.5" />
            <ellipse cx="50" cy="76" rx="32" ry="10" fill="#E89468" stroke="#6E2C0C" strokeWidth="2.5" />
          </svg>
        );
      case 'sphere':
        return (
          <svg viewBox="0 0 100 100" className="w-16 h-16 mx-auto">
            <circle cx="50" cy="50" r="35" fill="#0F6B63" stroke="#083B36" strokeWidth="2.5" />
            <ellipse cx="50" cy="50" rx="35" ry="12" fill="none" stroke="#9AD6CF" strokeWidth="2" strokeDasharray="4 3" />
          </svg>
        );
      default:
        return (
          <svg viewBox="0 0 100 100" className="w-16 h-16 mx-auto">
            <polygon points="50,12 88,50 50,88 12,50" fill="#0F4C42" stroke="#082D27" strokeWidth="3" />
          </svg>
        );
    }
  };

  if (shapes.length === 0) return null;
  const activeShape = shapes[selected] || shapes[0];

  return (
    <div className="p-4 sm:p-5 rounded-2xl bg-[#F3EDE2] border border-[#E2D9C9] space-y-4">
      <div className="font-display font-bold text-sm text-[#1A2421] flex items-center gap-1.5">
        <Shapes className="w-4 h-4 text-[#0F4C42]" />
        {block.title || 'Klik Bangun untuk Melihat Ciri-Cirinya'}
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
        {shapes.map((sh, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => {
              setSelected(idx);
              speakText(`${sh.name}. ${sh.desc || ''}`);
            }}
            className={`p-3 rounded-xl border text-center transition cursor-pointer ${
              selected === idx
                ? 'bg-white border-[#0F4C42] ring-2 ring-[#0F4C42]/15 animate-bounce-soft'
                : 'bg-[#FAF7F2] border-[#E2D9C9] hover:border-[#0F4C42]/40'
            }`}
          >
            {renderSvg(sh.shape)}
            <div className="font-display font-bold text-xs text-[#1A2421] mt-1.5">{sh.name}</div>
          </button>
        ))}
      </div>
      {activeShape && (
        <div className="p-4 rounded-xl bg-white border border-[#E6DFD2] text-sm text-[#3F4E49] flex items-start justify-between gap-3">
          <div>
            <div className="font-display font-bold text-[#0F4C42]">{activeShape.name}</div>
            <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">{activeShape.desc}</p>
            {activeShape.example && (
              <p className="text-xs text-[#A84E16] font-semibold mt-1.5">
                Contoh benda sekitar: {activeShape.example}
              </p>
            )}
          </div>
          <button
            type="button"
            onClick={() =>
              speakText(
                `${activeShape.name}. ${activeShape.desc}. Contoh benda sekitar: ${activeShape.example || ''}`
              )
            }
            className="p-2 rounded-xl bg-[#E6F2EF] text-[#0F4C42] hover:bg-[#D5EAE4] shrink-0 cursor-pointer"
            aria-label="Bacakan ciri bangun"
          >
            <Volume2 className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
}

// 6. Dialog Komik Mini
export function StoryPanelBlock({ block }) {
  const lines = Array.isArray(block.lines) ? block.lines : [];
  const lang = block.lang || 'id-ID';
  if (lines.length === 0) return null;

  return (
    <div className="p-4 sm:p-5 rounded-2xl bg-[#FDF4E7] border border-[#EED3AC] space-y-3">
      <div className="flex items-center justify-between gap-2">
        <div className="font-display font-bold text-sm text-[#733F0B] flex items-center gap-1.5">
          <MessageCircle className="w-4 h-4 text-[#D96B27]" />
          {block.title || 'Simak Percakapannya'}
        </div>
        <button
          type="button"
          onClick={() => speakText(lines.map((l) => `${l.speaker} berkata: ${l.text}`).join('. '), lang)}
          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white border border-[#EED3AC] text-xs font-semibold text-[#733F0B] hover:bg-[#FAF7F2] cursor-pointer"
        >
          <Volume2 className="w-3.5 h-3.5" /> Bacakan Semua
        </button>
      </div>
      <div className="space-y-2.5">
        {lines.map((line, idx) => {
          const isRight = line.side === 'right' || idx % 2 === 1;
          return (
            <div
              key={idx}
              className={`flex items-end gap-2.5 ${isRight ? 'flex-row-reverse' : 'flex-row'}`}
            >
              <div className="w-9 h-9 rounded-full bg-white border border-[#EED3AC] flex items-center justify-center text-lg shrink-0">
                {line.avatar || (isRight ? '🧒' : '👩‍🏫')}
              </div>
              <div
                onClick={() => speakText(line.text, lang)}
                className={`max-w-[82%] p-3 rounded-2xl text-sm leading-relaxed cursor-pointer transition ${
                  isRight
                    ? 'bg-[#0F4C42] text-white rounded-br-sm'
                    : 'bg-white text-[#1A2421] border border-[#EED3AC] rounded-bl-sm'
                }`}
              >
                <div
                  className={`text-[10px] font-bold mb-0.5 ${
                    isRight ? 'text-[#B9DAD3]' : 'text-[#A84E16]'
                  }`}
                >
                  {line.speaker}
                </div>
                <div>{line.text}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// 7. Contoh Soal Terbimbing Bertahap
export function InteractiveWorkedExample({ block }) {
  const steps = Array.isArray(block.steps) ? block.steps : [];
  const [revealed, setRevealed] = useState(0);
  const allShown = revealed >= steps.length + 1;

  return (
    <div className="p-4 sm:p-5 rounded-2xl bg-[#EEF4FA] border border-[#C8DCF0] space-y-3">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="font-display text-xs font-bold text-[#174073]">
            Contoh Soal Terbimbing
          </span>
          {block.level && <Badge className="bg-[#DFECF8] text-[#174073]">{block.level}</Badge>}
        </div>
        <button
          type="button"
          onClick={() => setRevealed(allShown ? 0 : steps.length + 1)}
          className="inline-flex items-center gap-1 text-xs font-semibold text-[#1D4E89] hover:underline cursor-pointer"
        >
          {allShown ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
          {allShown ? 'Sembunyikan Langkah' : 'Tampilkan Semua'}
        </button>
      </div>

      <p className="text-sm sm:text-base font-bold text-[#1A2421] whitespace-pre-line bg-white p-3.5 rounded-xl border border-[#D4E3F3]">
        {block.question}
      </p>

      {revealed > 0 && steps.length > 0 && (
        <ol className="list-decimal pl-5 space-y-1.5 text-sm text-[#17365C] leading-relaxed">
          {steps.slice(0, revealed).map((s, si) => (
            <li key={si} className="animate-pop-in">
              {s}
            </li>
          ))}
        </ol>
      )}

      {revealed > steps.length && block.answer && (
        <div className="text-sm font-bold text-[#175234] bg-[#ECF6F0] border border-[#C3E2CF] px-3.5 py-2.5 rounded-xl flex items-center gap-2 animate-pop-in">
          <CheckCircle2 className="w-4 h-4 text-[#1D7A52] shrink-0" />
          <span>Jawaban: {block.answer}</span>
        </div>
      )}

      {!allShown && (
        <div>
          <Button
            type="button"
            variant="secondary"
            size="sm"
            onClick={() => setRevealed((r) => r + 1)}
          >
            {revealed < steps.length
              ? `Tampilkan Langkah ${revealed + 1} dari ${steps.length}`
              : 'Tampilkan Jawaban Akhir'}
          </Button>
        </div>
      )}
    </div>
  );
}
