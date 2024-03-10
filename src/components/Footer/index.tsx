import { useContext } from "react";
import { ThemeContext } from "../../Contexts/ThemeContext";
import { TranslationsContext } from "../../Contexts/TranslationsContext";

import toggle_on_img from "../../assets/icons/toggle_on.png";
import toggle_off_img from "../../assets/icons/toggle_off.png";

const Footer = () => {
  const { tema, toggleTema } = useContext(ThemeContext);
  const { showTranslations, toggleTranslations } =
    useContext(TranslationsContext);

  return (
    <footer className="w-full flex flex-col gap-2 items-center justify-center py-10 border-t-2 border-dashed border-t-[var(--border-box-light)] dark:border-t-[var(--border-box-dark)]">
      <span className="flex flex-row gap-2">
        Feito por{" "}
        <a
          href="https://jeffreyalvr.dev"
          target="_blank"
          rel="noopener noreferrer"
          title="Clique para abrir o meu GitHub"
          className="text-[var(--primary-light)] hover:underline"
        >
          @jeffreyalvr.
        </a>
      </span>
      <div className="flex flex-col w-full items-center py-4 md:flex-row md:gap-10 md:justify-center">
        <button
          onClick={toggleTema}
          title="Clique para alterar o tema"
          className="flex flex-row gap-2 items-center text-[var(--primary-light)] hover:brightness-125"
        >
          <img
            src={tema === "light" ? toggle_on_img : toggle_off_img}
            alt="Toggle"
          />
          Usar modo escuro
        </button>
        <button
          onClick={toggleTranslations}
          className="flex flex-row gap-2 items-center text-[var(--primary-light)] hover:brightness-125"
        >
          <img
            src={showTranslations ? toggle_on_img : toggle_off_img}
            alt="Toggle"
          />
          Exibir traduções
        </button>
      </div>
    </footer>
  );
};

export default Footer;
