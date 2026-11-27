import {
  BookMarked,
  Compass,
  Feather,
  Globe2,
  Map,
  Microscope,
  Sprout,
  BookOpen,
} from 'lucide-react';

export const SUBJECT_THEMES = {
  MAT: {
    bg: 'bg-[#EEF4FA]',
    border: 'border-[#C8DCF0]',
    text: 'text-[#1D4E89]',
    badge: 'bg-[#DFECF8] text-[#174073]',
    iconBg: 'bg-[#1D4E89] text-white',
    bar: 'bg-[#1D4E89]',
    icon: Compass,
  },
  BIN: {
    bg: 'bg-[#FCF0F2]',
    border: 'border-[#F0C8D0]',
    text: 'text-[#9F2B44]',
    badge: 'bg-[#F8DFE4] text-[#831F35]',
    iconBg: 'bg-[#B2334D] text-white',
    bar: 'bg-[#B2334D]',
    icon: BookMarked,
  },
  BIG: {
    bg: 'bg-[#F3F0FA]',
    border: 'border-[#D8CEF0]',
    text: 'text-[#55388C]',
    badge: 'bg-[#E8E1F8] text-[#452B75]',
    iconBg: 'bg-[#5B3E96] text-white',
    bar: 'bg-[#5B3E96]',
    icon: Globe2,
  },
  BJ: {
    bg: 'bg-[#FDF4E7]',
    border: 'border-[#EED3AC]',
    text: 'text-[#8C4F12]',
    badge: 'bg-[#F9E7CC] text-[#733F0B]',
    iconBg: 'bg-[#B86A1B] text-white',
    bar: 'bg-[#B86A1B]',
    icon: Feather,
  },
  IPAS: {
    bg: 'bg-[#ECF6F0]',
    border: 'border-[#C3E2CF]',
    text: 'text-[#1E6642]',
    badge: 'bg-[#DCF0E4] text-[#175234]',
    iconBg: 'bg-[#21734A] text-white',
    bar: 'bg-[#21734A]',
    icon: Sprout,
  },
  IPA: {
    bg: 'bg-[#E9F5F4]',
    border: 'border-[#BCE0DC]',
    text: 'text-[#0F5D56]',
    badge: 'bg-[#D6ECEA] text-[#0B4A44]',
    iconBg: 'bg-[#0F6B63] text-white',
    bar: 'bg-[#0F6B63]',
    icon: Microscope,
  },
  IPS: {
    bg: 'bg-[#FDF1EA]',
    border: 'border-[#F0CEB8]',
    text: 'text-[#9A4216]',
    badge: 'bg-[#FAE3D4] text-[#7E3410]',
    iconBg: 'bg-[#C4551E] text-white',
    bar: 'bg-[#C4551E]',
    icon: Map,
  },
};

export function getSubjectTheme(code) {
  return (
    SUBJECT_THEMES[code] || {
      bg: 'bg-[#F6F2EA]',
      border: 'border-[#E6DFD2]',
      text: 'text-[#3F4E49]',
      badge: 'bg-[#ECE6DA] text-[#2F3D38]',
      iconBg: 'bg-[#0F4C42] text-white',
      bar: 'bg-[#0F4C42]',
      icon: BookOpen,
    }
  );
}

export function formatLearningStatus(status) {
  if (status === 'enrichment') return { label: 'Pengayaan', tone: 'bg-[#EFEAF9] text-[#4C3182]' };
  if (status === 'local_content') return { label: 'Mulok Gresik', tone: 'bg-[#F9E7CC] text-[#733F0B]' };
  return { label: 'Kurikulum CP', tone: 'bg-[#E6F2EF] text-[#0F4C42]' };
}
