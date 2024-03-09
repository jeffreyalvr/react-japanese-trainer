import "./styles/global.css";

import { useEffect, useState } from "react";

import Routes from "./routes";

import { ThemeContext } from "./Contexts/ThemeContext";

const App = () => {
  const [tema, setTema] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    localStorage.setItem("theme", tema.toString());
  }, [tema]);

  const toggleTema = () => {
    tema === "light" ? setTema("dark") : setTema("light");
  };

  return (
    <ThemeContext.Provider value={{ tema, toggleTema }}>
      <div className="container flex flex-col gap-10 mx-auto md:w-[40rem]">
        <Routes />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
