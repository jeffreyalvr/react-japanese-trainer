import { useState } from "react";
import theme_light_img from "../../assets/icons/toggle_theme_light.png";
import theme_dark_img from "../../assets/icons/toggle_theme_dark.png";

const Footer = () => {
  const [temaLight, setTemaLight] = useState(false);

  const toggleTema = () => {
    setTemaLight((prevState: boolean) => !prevState);
  };

  return (
    <footer className="w-full flex flex-col gap-2 items-center justify-center py-10 border-t-2 border-dashed border-t-[var(--border-box-dark)]">
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
      <button
        onClick={toggleTema}
        title="Clique para alterar o tema"
        className="flex flex-row gap-2 items-center text-[var(--primary-light)] hover:underline"
      >
        <img src={temaLight ? theme_light_img : theme_dark_img} alt="Toggle" />
        Usar modo escuro
      </button>
    </footer>
  );
};

export default Footer;
