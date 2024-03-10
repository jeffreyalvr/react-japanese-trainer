import { createContext, useContext } from "react";

export const TranslationsContext = createContext({
  showTranslations: "true",
  toggleTranslations: () => {},
});

export const useThemeContext = () => useContext(TranslationsContext);
