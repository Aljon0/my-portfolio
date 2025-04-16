import React, { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Check local storage for saved theme or default to dark
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme || "dark";
  });

  // Update theme in localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("theme", theme);

    // Apply theme class to document body
    if (theme === "light") {
      document.documentElement.classList.add("light-mode");
      document.documentElement.classList.remove("dark-mode");
    } else {
      document.documentElement.classList.add("dark-mode");
      document.documentElement.classList.remove("light-mode");
    }
  }, [theme]);

  // Toggle theme function
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
