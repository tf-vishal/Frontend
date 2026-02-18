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
