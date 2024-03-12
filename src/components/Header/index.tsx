import { useContext } from "react";
import { ThemeContext } from "../../Contexts/ThemeContext";
import { RomanizationContext } from "../../Contexts/RomanizationContext";

import toggle_on_img from "../../assets/icons/toggle_on.png";
import toggle_off_img from "../../assets/icons/toggle_off.png";

const Header = () => {
  const { tema, toggleTema } = useContext(ThemeContext);
  const { showRomanization, toggleRomanization } =
    useContext(RomanizationContext);

  return (
    <header className="flex flex-col gap-10 w-full justify-between py-10 sm:flex-row">
      <div className="flex flex-col items-center justify-center gap-2 text-center sm:flex-row sm:gap-4">
        <div className="flex flex-col items-center justify-center rounded-md size-12 sm:size-[64px] bg-[var(--border-box-light)] dark:bg-[var(--border-box-dark)]">
          <span className="font-bold text-3xl text-transparent bg-gradient-to-br from-[var(--primary)] to-[var(--gold)] bg-clip-text sm:text-[2.5rem]">
            あ
          </span>
        </div>
        <h1 className="font-bold text-2xl text-transparent bg-gradient-to-br from-[var(--primary)] to-[var(--gold)] bg-clip-text sm:text-3xl">
          Japanese Trainer
        </h1>
      </div>

      <div className="flex flex-col justify-center items-center sm:items-end">
        <button
          onClick={toggleTema}
          title="Clique para alterar o tema"
          className="flex flex-row gap-2 items-center text-[var(--primary-light)] hover:brightness-125"
        >
          <img
            src={tema === "dark" ? toggle_on_img : toggle_off_img}
            alt="Toggle"
          />
          Usar modo escuro
        </button>
        <button
          onClick={toggleRomanization}
          className="flex flex-row gap-2 items-center text-[var(--primary-light)] hover:brightness-125"
        >
          <img
            src={showRomanization ? toggle_on_img : toggle_off_img}
            alt="Toggle"
          />
          Exibir romanização
        </button>
      </div>
    </header>
  );
};

export default Header;
