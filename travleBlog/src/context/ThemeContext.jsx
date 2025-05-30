import { createContext, useContext, useState } from "react";
//1
const ThemeContext = createContext();

export const ThemeProvider = ({children }) => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  //2 define a provider
  // define the value that can be accessed from the child
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
//3 create a function that can access the value/context passed in the provider
export const useTheme = () => useContext(ThemeContext);
