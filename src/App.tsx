import "./styles/global.css";

import { useEffect, useState } from "react";

import Routes from "./routes";

import { ThemeContext } from "./Contexts/ThemeContext";
import { RomanizationContext } from "./Contexts/RomanizationContext";
import { ModalContext } from "./Contexts/ModalContext";

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

  type Type = "LEARNING_MODAL" | "DETAILS_MODAL";

  const [modalActive, setModalActive] = useState(false);
  const [modalType, setModalType] = useState<Type>();

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

  const toggleModalActive = ({ modalType }: { modalType?: Type }) => {
    modalActive === false ? setModalActive(true) : setModalActive(false);

    switch (modalType) {
      case "LEARNING_MODAL":
        setModalType("LEARNING_MODAL");
        break;
      case "DETAILS_MODAL":
        setModalType("DETAILS_MODAL");
        break;
      default:
        setModalType("LEARNING_MODAL");
        break;
    }
  };

  return (
    <ThemeContext.Provider value={{ tema, toggleTema }}>
      <RomanizationContext.Provider
        value={{
          showRomanization: Boolean(showRomanization),
          toggleRomanization,
        }}
      >
        <ModalContext.Provider
          value={{
            modalActive: Boolean(modalActive),
            type: modalType as Type,
            toggleModalActive,
          }}
        >
          <Routes />
        </ModalContext.Provider>
      </RomanizationContext.Provider>
    </ThemeContext.Provider>
  );
};

export default App;
