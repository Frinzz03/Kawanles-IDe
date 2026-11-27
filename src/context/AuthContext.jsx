import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { authClient } from '@/lib/auth';
import { apiFetch } from '@/lib/api';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [session, setSession] = useState(null);
  const [me, setMe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const refreshProfile = useCallback(async () => {
    if (!authClient) {
      setLoading(false);
      return;
    }
    try {
      const { data } = await authClient.getSession();
      setSession(data || null);
      if (data?.user) {
        const profileData = await apiFetch('/me');
        setMe(profileData);
        setError('');
      } else {
        setMe(null);
      }
    } catch (err) {
      console.error('Gagal memuat profil:', err);
      setError(err.message);
      setMe(null);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    refreshProfile();
  }, [refreshProfile]);

  const signIn = async (email, password) => {
    setError('');
    const { data, error: err } = await authClient.signIn.email({ email, password });
    if (err) throw new Error(err.message || 'Email atau password salah');
    setSession(data);
    await refreshProfile();
  };

  const signInWithGoogle = async () => {
    setError('');
    if (!authClient) throw new Error('Neon Auth belum terkonfigurasi');
    const { error: err } = await authClient.signIn.social({
      provider: 'google',
      callbackURL: window.location.origin,
    });
    if (err) throw new Error(err.message || 'Login Google gagal');
  };

  const signUp = async ({ email, password, fullName, role, gradeNumber, schoolName }) => {
    setError('');
    const { data, error: err } = await authClient.signUp.email({
      email,
      password,
      name: fullName,
    });
    if (err) throw new Error(err.message || 'Pendaftaran gagal');
    setSession(data);
    // Complete onboarding immediately in Postgres profiles table
    await apiFetch('/me/onboarding', {
      method: 'POST',
      body: JSON.stringify({
        full_name: fullName,
        role,
        grade_number: gradeNumber,
        school_name: schoolName,
      }),
    });
    await refreshProfile();
  };

  const completeOnboarding = async ({ fullName, role, gradeNumber, schoolName }) => {
    await apiFetch('/me/onboarding', {
      method: 'POST',
      body: JSON.stringify({
        full_name: fullName,
        role,
        grade_number: gradeNumber,
        school_name: schoolName,
      }),
    });
    await refreshProfile();
  };

  const signOut = async () => {
    if (authClient) {
      await authClient.signOut();
    }
    setSession(null);
    setMe(null);
  };

  return (
    <AuthContext.Provider
      value={{
        session,
        me,
        loading,
        error,
        signIn,
        signInWithGoogle,
        signUp,
        completeOnboarding,
        signOut,
        refreshProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

