import React, { createContext, useState, useEffect } from 'react';

interface AuthContextType {
    isAuthenticated: boolean;
    setAuthenticated: (auth: boolean) => void;
}

export const AuthContext = createContext<AuthContextType>({
    isAuthenticated: false,
    setAuthenticated: () => {},
});

export const AuthProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const [isAuthenticated, setAuthenticated] = useState(false);

  // Optional: on mount, check for existing session/cookie
  useEffect(() => {
    fetch('/auth/check', { credentials: 'include' })
      .then(res => setAuthenticated(res.ok))
      .catch(() => setAuthenticated(false));
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};