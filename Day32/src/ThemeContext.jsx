import React, { createContext, useState } from "react";

// default value is optional and used when a component consumes context without provider
export const ThemeContext = createContext({
  theme: "light",
  toggleTheme: () => {}
});

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => setTheme(t => (t === "light" ? "dark" : "light"));

  // useMemo is not strictly necessary here but useful in larger apps:
  const value = React.useMemo(() => ({ theme, toggleTheme }), [theme]);

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}


import React, { createContext, useState, useMemo } from "react";

export const AuthContext = createContext({
  user: null,
  login: async () => {},
  logout: () => {}
});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // fake login
  const login = async (username) => {
    // In real app, call API, handle tokens, etc.
    const fakeUser = { id: 1, name: username || "Demo User" };
    setUser(fakeUser);
    return fakeUser;
  };

  const logout = () => setUser(null);

  const value = useMemo(() => ({ user, login, logout }), [user]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
