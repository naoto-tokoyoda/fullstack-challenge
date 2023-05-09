import React, { createContext, useContext, ReactNode } from 'react';
import useAuth from '../hooks/useAuth';

interface User {
  id: number;
  username: string;
  email: string;
}

interface Auth {
  user: User | null;
  login: (userData: User, jwt: string) => void;
  logout: () => void;
}

const AuthContext = createContext<Auth | null>(null);

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const auth = useAuth();

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => useContext(AuthContext);
