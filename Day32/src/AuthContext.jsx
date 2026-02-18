import React, { createContext, useState, useMemo } from "react";

/*
  Step 1: Create Context with default values
*/
export const AuthContext = createContext({
  user: null,
  login: async () => {},
  logout: () => {}
});

/*
  Step 2: Create Provider Component
*/
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // Fake login (later replace with API)
  const login = async (name) => {
    const fakeUser = { name };
    setUser(fakeUser);
  };

  const logout = () => {
    setUser(null);
  };

  // Prevent unnecessary re-renders
  const value = useMemo(() => {
    return { user, login, logout };
  }, [user]);

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}
