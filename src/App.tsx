import "./styles/global.css";

import { useEffect, useState } from "react";

import Routes from "./routes";

import { ThemeContext } from "./Contexts/ThemeContext";
import { TranslationsContext } from "./Contexts/TranslationsContext";

const App = () => {
  const [tema, setTema] = useState(localStorage.getItem("theme") || "light");
  const [showTranslations, setShowTranslations] = useState(
    localStorage.getItem("show_translations") || "true"
  );

  useEffect(() => {
    localStorage.setItem("theme", tema.toString());
  }, [tema]);

  useEffect(() => {
    localStorage.setItem("show_translations", showTranslations.toString());
  }, [showTranslations]);

  const toggleTema = () => {
    tema === "light" ? setTema("dark") : setTema("light");
  };

  const toggleTranslations = () => {
    showTranslations
      ? setShowTranslations("true")
      : setShowTranslations("false");
  };

  return (
    <ThemeContext.Provider value={{ tema, toggleTema }}>
      <TranslationsContext.Provider
        value={{ showTranslations, toggleTranslations }}
      >
        <div className="container flex flex-col gap-10 mx-auto md:w-[40rem]">
          <Routes />
        </div>
      </TranslationsContext.Provider>
    </ThemeContext.Provider>
  );
};

export default App;
