import "./styles/global.css";

import { useEffect, useState } from "react";

import Routes from "./routes";

import { ThemeContext } from "./Contexts/ThemeContext";
import { TranslationsContext } from "./Contexts/TranslationsContext";

const App = () => {
  const theme_value = localStorage.getItem("theme");
  const show_translations_value = localStorage.getItem("show_translations");

  const [tema, setTema] = useState(
    theme_value !== null ? theme_value : "light"
  );

  const [showTranslations, setShowTranslations] = useState(
    show_translations_value !== null
      ? JSON.parse(show_translations_value)
      : true
  );

  useEffect(() => {
    localStorage.setItem("theme", String(tema));
  }, [tema]);

  useEffect(() => {
    localStorage.setItem("show_translations", String(showTranslations));
  }, [showTranslations]);

  const toggleTema = () => {
    tema === "light" ? setTema("dark") : setTema("light");
  };

  const toggleTranslations = () => {
    showTranslations == false
      ? setShowTranslations(true)
      : setShowTranslations(false);
  };

  return (
    <ThemeContext.Provider value={{ tema, toggleTema }}>
      <TranslationsContext.Provider
        value={{
          showTranslations: Boolean(showTranslations),
          toggleTranslations,
        }}
      >
        <div className="container flex flex-col gap-2 mx-auto md:w-[40rem]">
          <Routes />
        </div>
      </TranslationsContext.Provider>
    </ThemeContext.Provider>
  );
};

export default App;
