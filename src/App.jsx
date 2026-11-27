import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { AuthProvider, useAuth } from '@/context/AuthContext';
import AppShell from '@/components/AppShell';
import AuthPage from '@/pages/AuthPage';
import TeacherDashboard from '@/pages/TeacherDashboard';
import StudentDashboard from '@/pages/StudentDashboard';
import SubtopicLearnPage from '@/pages/SubtopicLearnPage';

function AppRoutes() {
  const { session, me, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#FAF7F2] text-[#51615C] gap-3 px-4">
        <div className="w-10 h-10 rounded-xl bg-[#0F4C42] flex items-center justify-center shadow-sm animate-pulse">
          <svg viewBox="0 0 32 32" className="w-6 h-6" fill="none" aria-hidden="true">
            <path
              d="M6 8.5C6 7.4 6.9 6.5 8 6.5H13.5C15.1 6.5 16 7.6 16 9V24.5C16 23.4 14.9 22.5 13.5 22.5H8C6.9 22.5 6 21.6 6 20.5V8.5Z"
              fill="#FAF7F2"
            />
            <path
              d="M26 8.5C26 7.4 25.1 6.5 24 6.5H18.5C16.9 6.5 16 7.6 16 9V24.5C16 23.4 17.1 22.5 18.5 22.5H24C25.1 22.5 26 21.6 26 20.5V8.5Z"
              fill="#D96B27"
            />
          </svg>
        </div>
        <div className="text-sm font-medium text-[#51615C]">
          Menyiapkan ruang belajar Kawanles IDe...
        </div>
      </div>
    );
  }

  if (!session?.user || !me?.profile || me?.needsOnboarding) {
    return <AuthPage />;
  }

  return (
    <AppShell>
      <Routes>
        <Route
          path="/"
          element={
            me.profile.role === 'teacher' ? <TeacherDashboard /> : <StudentDashboard />
          }
        />
        <Route path="/belajar/:subtopicId" element={<SubtopicLearnPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AppShell>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </BrowserRouter>
  );
}
