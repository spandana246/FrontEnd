// src/context/AuthContext.tsx
import React, { createContext, useState, useEffect } from 'react';
import { getToken, parseToken, removeToken, saveToken } from '../utils/tokenUtils';

interface User {
  username: string;
  role: string;
}

interface AuthContextProps {
  user: User | null;
  login: (token: string) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextProps>({
  user: null,
  login: () => {},
  logout: () => {}
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const token = getToken();
    if (token) {
      const decoded = parseToken(token);
      setUser({ username: decoded.sub, role: decoded.role });
    }
  }, []);

  const login = (token: string) => {
    saveToken(token);
    const decoded = parseToken(token);
    setUser({ username: decoded.sub, role: decoded.role });
  };

  const logout = () => {
    removeToken();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
