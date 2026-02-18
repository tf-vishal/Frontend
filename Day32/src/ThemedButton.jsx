import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function ThemedButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const style = {
    padding: "8px 16px",
    border: "none",
    borderRadius: 6,
    cursor: "pointer",
    background: theme === "dark" ? "#222" : "#eee",
    color: theme === "dark" ? "#fff" : "#000"
  };

  return (
    <button style={style} onClick={toggleTheme}>
      Current theme: {theme} — toggle
    </button>
  );
}
