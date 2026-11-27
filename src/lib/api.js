import { getAuthToken } from './auth';

export const API_BASE_URL = (import.meta.env.VITE_API_URL || '').replace(/\/+$/, '');

export async function apiFetch(path, options = {}) {
  const token = await getAuthToken();
  const headers = new Headers(options.headers || {});

  if (token) {
    headers.set('Authorization', `Bearer ${token}`);
  }
  if (!(options.body instanceof FormData) && options.body && !headers.has('Content-Type')) {
    headers.set('Content-Type', 'application/json');
  }

  const res = await fetch(`${API_BASE_URL}${path}`, {
    ...options,
    headers,
  });

  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new Error(data.error || `Request gagal (${res.status})`);
  }
  return data;
}

