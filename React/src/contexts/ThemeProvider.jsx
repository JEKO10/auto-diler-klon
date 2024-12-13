import { createContext, useContext, useState, useEffect } from "react";

const themeContext = createContext({});

const { Provider } = themeContext;

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return <Provider value={{ theme, toggleTheme }}>{children}</Provider>;
};

export const useTheme = () => useContext(themeContext);
