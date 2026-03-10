// "light" === lightMode, "dark" === darkMode

import { createContext, useState } from "react";

export const ThemeContext = createContext();

import React from "react";

export function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
  );
}
