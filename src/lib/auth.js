import { createAuthClient } from '@neon/auth';

const authUrl = import.meta.env.VITE_NEON_AUTH_URL;

export const authClient = authUrl ? createAuthClient(authUrl) : null;

function isJwt(str) {
  return typeof str === 'string' && str.split('.').length === 3;
}

export async function getAuthToken() {
  if (!authClient) return null;
  try {
    const sessionRes = await authClient.getSession();
    const fromSession = sessionRes?.data?.session?.token;
    if (isJwt(fromSession)) return fromSession;

    const tokenRes = await authClient.token();
    const fromToken = tokenRes?.data?.token || tokenRes?.data?.session?.token;
    if (isJwt(fromToken)) return fromToken;

    // Fallback: direct /token endpoint with session cookie
    if (authUrl) {
      const direct = await fetch(`${authUrl}/token`, { credentials: 'include' });
      if (direct.ok) {
        const json = await direct.json().catch(() => ({}));
        if (isJwt(json?.token)) return json.token;
      }
    }
    return null;
  } catch {
    return null;
  }
}
