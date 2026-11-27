import React, { useState } from 'react';
import { Link, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import {
  Award,
  BarChart3,
  BookOpen,
  ClipboardList,
  GraduationCap,
  LayoutDashboard,
  LogOut,
  Menu,
  PanelLeftClose,
  PanelLeftOpen,
  Users,
  X,
} from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { Badge } from '@/components/ui';

function getInitials(name) {
  const parts = String(name || 'U')
    .replace(/^[\d-]+\s*/, '')
    .trim()
    .split(/\s+/)
    .filter(Boolean);
  if (parts.length === 0) return 'U';
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[1][0]).toUpperCase();
}

export function BrandMark({ size = 'md' }) {
  const dim = size === 'sm' ? 'w-8 h-8 rounded-lg' : 'w-9 h-9 rounded-xl';
  return (
    <div
      className={`${dim} bg-[#0F4C42] text-white flex items-center justify-center shrink-0 relative`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
        <path
          d="M4.5 6.5C4.5 5.67 5.17 5 6 5h4.2c1.25 0 2.3.78 2.8 1.9C13.5 5.78 14.55 5 15.8 5H18c.83 0 1.5.67 1.5 1.5v10.75c0 .69-.56 1.25-1.25 1.25h-3.05c-1.08 0-1.95.6-2.2 1.5-.25-.9-1.12-1.5-2.2-1.5H5.75c-.69 0-1.25-.56-1.25-1.25V6.5Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path d="M12 7v11.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <circle cx="17.5" cy="5.5" r="2.2" fill="#E88542" />
      </svg>
    </div>
  );
}

export default function AppShell({ children }) {
  const { me, signOut } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  if (!me?.profile) return children;

  const isTeacher = me.profile.role === 'teacher';
  const activeTab = searchParams.get('tab') || 'overview';
  const activeSection = searchParams.get('section') || 'home';
  const isHome = location.pathname === '/';

  const teacherItems = [
    { id: 'overview', label: 'Ringkasan', icon: LayoutDashboard, to: '/?tab=overview' },
    { id: 'curriculum', label: 'Kurikulum & Materi', icon: BookOpen, to: '/?tab=curriculum' },
    { id: 'quiz', label: 'Latihan & Soal', icon: ClipboardList, to: '/?tab=quiz' },
    { id: 'students', label: 'Data Siswa', icon: Users, to: '/?tab=students' },
    { id: 'results', label: 'Hasil Belajar', icon: BarChart3, to: '/?tab=results' },
  ];

  const studentItems = [
    { id: 'home', label: 'Beranda Belajar', icon: LayoutDashboard, to: '/' },
    { id: 'mapel', label: 'Mata Pelajaran', icon: BookOpen, to: '/?section=mapel' },
    { id: 'nilai', label: 'Riwayat Nilai', icon: Award, to: '/?section=nilai' },
  ];

  const navItems = isTeacher ? teacherItems : studentItems;

  const isItemActive = (item) => {
    if (!isHome) return false;
    return isTeacher ? activeTab === item.id : activeSection === item.id;
  };

  const handleNavClick = (to, itemId) => {
    if (isTeacher && itemId) {
      const next = new URLSearchParams(isHome ? searchParams : '');
      next.set('tab', itemId);
      if (!next.get('mapping')) {
        try {
          const saved = JSON.parse(sessionStorage.getItem('modul_les_teacher_ctx') || '{}');
          if (saved.grade) next.set('grade', String(saved.grade));
          if (saved.mapping) next.set('mapping', saved.mapping);
          if (saved.subtopic) next.set('subtopic', saved.subtopic);
        } catch {}
      }
      navigate(`/?${next.toString()}`);
    } else if (!isTeacher && itemId) {
      const next = new URLSearchParams(isHome ? searchParams : '');
      if (itemId !== 'home') next.set('section', itemId);
      else next.delete('section');
      if (!next.get('mapping')) {
        try {
          const saved = JSON.parse(sessionStorage.getItem('modul_les_student_ctx') || '{}');
          if (saved.mapping) next.set('mapping', saved.mapping);
        } catch {}
      }
      const qs = next.toString();
      navigate(qs ? `/?${qs}` : '/');
    } else {
      navigate(to);
    }
    setMobileOpen(false);
  };

  const displayEmail = me.profile.email || me.email || '';
  const initials = getInitials(me.profile.full_name);

  const SidebarContent = ({ isMobile = false }) => {
    const isCompact = !isMobile && collapsed;

    return (
      <div className="flex flex-col h-full bg-[#F3EDE2] border-r border-[#E2D9C9] select-none">
        {/* Brand Header */}
        <div
          className={`h-16 px-3.5 flex items-center border-b border-[#E2D9C9] ${
            isCompact ? 'justify-center' : 'justify-between'
          }`}
        >
          {!isCompact && (
            <Link
              to="/"
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-2.5 min-w-0"
            >
              <BrandMark />
              <div className="min-w-0">
                <div className="font-display font-extrabold text-[15px] text-[#1A2421] truncate leading-tight">
                  Kawanles IDe
                </div>
                <div className="text-[11px] font-medium text-[#5E6D68] truncate">
                  Sahabat Sinau SD–SMP
                </div>
              </div>
            </Link>
          )}

          {isMobile ? (
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              className="p-2 rounded-xl text-[#51615C] hover:bg-[#E7DFD0] cursor-pointer transition"
              aria-label="Tutup menu"
            >
              <X className="w-5 h-5" />
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setCollapsed((c) => !c)}
              className="p-2 rounded-xl text-[#51615C] hover:bg-[#E7DFD0] hover:text-[#1A2421] transition cursor-pointer"
              title={isCompact ? 'Perluas sidebar' : 'Kecilkan sidebar'}
              aria-label={isCompact ? 'Perluas sidebar' : 'Kecilkan sidebar'}
            >
              {isCompact ? <PanelLeftOpen className="w-4 h-4" /> : <PanelLeftClose className="w-4 h-4" />}
            </button>
          )}
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto px-2.5 py-4 space-y-1">
          {!isCompact && (
            <div className="px-3 pb-2 text-[11px] font-semibold text-[#74827C]">
              {isTeacher ? 'Ruang Guru' : 'Ruang Belajar'}
            </div>
          )}

          {navItems.map((item) => {
            const active = isItemActive(item);
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavClick(item.to, item.id)}
                title={isCompact ? item.label : undefined}
                className={`w-full flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold transition duration-150 cursor-pointer ${
                  isCompact ? 'justify-center px-0' : ''
                } ${
                  active
                    ? 'bg-[#0F4C42] text-white'
                    : 'text-[#3F4E49] hover:bg-[#E7DFD0] hover:text-[#1A2421]'
                }`}
              >
                <item.icon className="w-4 h-4 shrink-0" />
                {!isCompact && <span className="truncate">{item.label}</span>}
              </button>
            );
          })}
        </nav>

        {/* Bottom Account Area */}
        <div className="p-3 border-t border-[#E2D9C9] space-y-2">
          <div
            className={`flex items-center gap-2.5 rounded-xl p-2 bg-[#FAF7F2] border border-[#E2D9C9] ${
              isCompact ? 'justify-center p-1.5' : ''
            }`}
            title={isCompact ? `${me.profile.full_name} (${displayEmail})` : undefined}
          >
            <div
              className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                isTeacher
                  ? 'bg-[#0F4C42] text-white'
                  : 'bg-[#D96B27] text-white'
              }`}
            >
              {initials}
            </div>

            {!isCompact && (
              <div className="min-w-0 flex-1">
                <div className="text-xs font-bold text-[#1A2421] truncate">
                  {me.profile.full_name}
                </div>
                {displayEmail && (
                  <div className="text-[11px] text-[#64736E] truncate">{displayEmail}</div>
                )}
                <div className="mt-1">
                  <Badge
                    className={`text-[10px] px-2 py-0 ${
                      isTeacher
                        ? 'bg-[#E6F2EF] text-[#0F4C42]'
                        : 'bg-[#FDF0E6] text-[#A84E16]'
                    }`}
                  >
                    <GraduationCap className="w-3 h-3" />
                    {isTeacher ? 'Guru Les' : 'Siswa'}
                  </Badge>
                </div>
              </div>
            )}
          </div>

          <button
            type="button"
            onClick={signOut}
            title="Keluar dari akun"
            className={`w-full flex items-center gap-2.5 rounded-xl px-3 py-2 text-xs font-semibold text-[#9E2F2F] hover:bg-[#F9E6E6] transition cursor-pointer ${
              isCompact ? 'justify-center px-0' : ''
            }`}
          >
            <LogOut className="w-4 h-4 shrink-0" />
            {!isCompact && <span>Keluar</span>}
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] flex">
      {/* Desktop Left Sidebar */}
      <aside
        className={`hidden lg:block shrink-0 sticky top-0 h-screen transition-all duration-200 print:hidden ${
          collapsed ? 'w-[72px]' : 'w-64'
        }`}
      >
        <SidebarContent />
      </aside>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex print:hidden">
          <div
            className="fixed inset-0 bg-[#1A2421]/40 backdrop-blur-[2px]"
            onClick={() => setMobileOpen(false)}
          />
          <aside className="relative w-72 max-w-[82vw] h-full z-10 shadow-2xl">
            <SidebarContent isMobile />
          </aside>
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 min-w-0 flex flex-col">
        <header className="lg:hidden sticky top-0 z-30 h-14 bg-[#FAF7F2]/95 backdrop-blur-sm border-b border-[#E6DFD2] px-4 flex items-center justify-between print:hidden">
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="p-2 -ml-2 rounded-xl text-[#1A2421] hover:bg-[#EFEAE0] cursor-pointer"
            aria-label="Buka menu"
          >
            <Menu className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2">
            <BrandMark size="sm" />
            <span className="font-display font-extrabold text-sm text-[#1A2421]">Kawanles IDe</span>
          </div>
          <div className="w-8" />
        </header>

        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}
