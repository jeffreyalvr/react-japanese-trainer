import { createContext, useContext } from "react";

export const ThemeContext = createContext({
  tema: "light",
  toggleTema: () => {},
});

export const useThemeContext = () => useContext(ThemeContext);
