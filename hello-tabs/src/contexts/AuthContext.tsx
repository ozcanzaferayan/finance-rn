import React, { createContext, useContext, useState } from 'react';

type AuthContextType = {
  username: string | null;
  setUsername: (username: string) => void;
};

const AuthContext = createContext<AuthContextType>({
  username: null,
  setUsername: (username: string) => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [username, setUsername] = useState<string | null>('Zafer');

  return <AuthContext.Provider value={{ username, setUsername }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
