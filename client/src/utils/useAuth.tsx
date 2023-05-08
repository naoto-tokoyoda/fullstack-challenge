import { useState, useEffect } from 'react';
import { setCookie, destroyCookie, parseCookies } from 'nookies';

interface UseAuth {
  token: string | null;
  login: (newToken: string) => void;
  logout: () => void;
}

const useAuth = (): UseAuth => {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const { token: savedToken } = parseCookies();
    if (savedToken) {
      setToken(savedToken);
    }
  }, []);

  const login = (newToken: string) => {
    setToken(newToken);
    setCookie({}, 'token', newToken, { path: '/' });
  };

  const logout = () => {
    setToken(null);
    destroyCookie({}, 'token', { path: '/' });
  };

  return { token, login, logout };
};

export default useAuth;
