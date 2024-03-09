import { createContext, useContext } from "react";

export const ThemeContext = createContext({
  tema: "",
  toggleTema: () => {},
});

export const useThemeContext = () => useContext(ThemeContext);
