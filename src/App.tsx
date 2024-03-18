import "./styles/global.css";

import { useEffect, useState } from "react";

import Routes from "./routes";

import { ThemeContext } from "./Contexts/ThemeContext";
import { RomanizationContext } from "./Contexts/RomanizationContext";
import { LearningModalContext } from "./Contexts/LearningModalContext";

const App = () => {
  const theme_value = localStorage.getItem("theme");
  const show_romanization_value = localStorage.getItem("show_romanization");

  const [tema, setTema] = useState(
    theme_value !== null ? theme_value : "light"
  );

  const [showRomanization, setShowRomanization] = useState(
    show_romanization_value !== null
      ? JSON.parse(show_romanization_value)
      : true
  );

  const [learningModalActive, setLearningModalActive] = useState(false);

  useEffect(() => {
    localStorage.setItem("theme", String(tema));

    tema === "dark"
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, [tema]);

  useEffect(() => {
    localStorage.setItem("show_romanization", String(showRomanization));
  }, [showRomanization]);

  const toggleTema = () => {
    tema === "light" ? setTema("dark") : setTema("light");
  };

  const toggleRomanization = () => {
    showRomanization == false
      ? setShowRomanization(true)
      : setShowRomanization(false);
  };

  const toggleLearningModalActive = () => {
    learningModalActive == false
      ? setLearningModalActive(true)
      : setLearningModalActive(false);
  };

  return (
    <ThemeContext.Provider value={{ tema, toggleTema }}>
      <RomanizationContext.Provider
        value={{
          showRomanization: Boolean(showRomanization),
          toggleRomanization,
        }}
      >
        <LearningModalContext.Provider
          value={{
            learningModalActive: Boolean(learningModalActive),
            toggleLearningModalActive,
          }}
        >
          <Routes />
        </LearningModalContext.Provider>
      </RomanizationContext.Provider>
    </ThemeContext.Provider>
  );
};

export default App;
