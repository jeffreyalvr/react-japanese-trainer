import { useState, useEffect } from "react";

const ModalContent = () => {
  const romanizacao_value = localStorage.getItem("show_romanization_modal");

  // Romanização apenas do componente Modal
  const [exibirRomanizacao, setExibirRomanizacao] = useState(
    romanizacao_value !== null ? JSON.parse(romanizacao_value) : true
  );

  useEffect(() => {
    localStorage.setItem("show_romanization_modal", String(exibirRomanizacao));
  }, [exibirRomanizacao]);

  const toggleExibirRomanizacao = () => {
    if (exibirRomanizacao == false) setExibirRomanizacao(true);
    else setExibirRomanizacao(false);
  };

  return (
    <div className="flex flex-col gap-8 items-center justify-center w-full">
      <div className="flex flex-col size-max items-center justify-center rounded-md sm:size-max p-4 bg-[var(--border-box-light)] dark:bg-[var(--border-box-dark)]">
        <h1 className="text-8xl text-[var(--primary)]">す</h1>
      </div>
      <div className="flex flex-row gap-4 h-max items-center">
        <div
          className={`w-max px-2 ${
            exibirRomanizacao
              ? null
              : "rounded-md h-full w-16 bg-[var(--border-box-light)] dark:bg-[var(--border-box-dark)]"
          }`}
          onClick={exibirRomanizacao ? undefined : toggleExibirRomanizacao}
          title="Alternar exibição da romanização"
        >
          <span
            className={`h-full w-max text-4xl text-[var(--fg-light)] dark:text-white ${
              exibirRomanizacao ? "visible" : "invisible"
            }`}
          >
            hachi
          </span>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-labelledby="visibility"
          color="#fff"
          fill="none"
          height="48px"
          stroke="#fff"
          stroke-linecap="square"
          stroke-linejoin="miter"
          stroke-width="1"
          viewBox="0 0 24 24"
          className="size-[48px] cursor-pointer stroke-[--primary-opaque] hover:stroke-[var(--primary)] dark:hover:stroke-white transition-colors"
          onClick={toggleExibirRomanizacao}
        >
          <title id="visibility" />
          <path d="M22 12C22 12 19 18 12 18C5 18 2 12 2 12C2 12 5 6 12 6C19 6 22 12 22 12Z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      </div>
    </div>
  );
};

export default ModalContent;
