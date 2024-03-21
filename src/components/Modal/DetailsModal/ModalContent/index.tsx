import { useTabContext } from "../../../../Contexts/TabContext";

import { SubTitle } from "../../../Text";

import alfabeto from "../../../Alphabets/alfabeto.json";

const ModalContent = ({
  caractereIdSelecionado,
}: {
  caractereIdSelecionado: number;
}) => {
  const { selectedTab } = useTabContext();

  const item = alfabeto.caracteres.find(
    (caractere) => caractere.id === caractereIdSelecionado
  );
  const alfabetoSelecionado =
    selectedTab === 0 ? item?.hiragana : item?.katakana;

  return (
    <div className="flex flex-row justify-around w-full">
      <div className="flex flex-col grow-0 gap-8 items-center">
        <div className="flex flex-col size-max items-center justify-center rounded-md sm:size-max p-4 bg-[var(--border-box-light)] dark:bg-[var(--border-box-dark)]">
          <h1 className="text-8xl text-[var(--primary)]">
            {alfabetoSelecionado?.letra}
          </h1>
        </div>
        <div className="flex flex-row gap-4 h-max items-center">
          <span className="h-full w-max text-4xl text-[var(--fg-light)] dark:text-white">
            {item?.romanizacao}
          </span>
        </div>
      </div>

      <div className="flex flex-col grow max-w-64 gap-8 items-center">
        <SubTitle text="Progresso" />
        <div
          title={`Taxa de acertos de ${alfabetoSelecionado?.progresso}%`}
          className="rounded-lg w-full h-2 overflow-clip bg-gray-300 dark:bg-[var(--primary-opaque)]"
        >
          <div
            className={`rounded-lg h-2 bg-[var(--gold)]`}
            style={{ width: `${alfabetoSelecionado?.progresso}%` }}
          ></div>
        </div>
        <span className="text-[var(--fg-light)] dark:text-[var(--fg-dark)]">
          {alfabetoSelecionado?.progresso}% de acertos
        </span>
      </div>
    </div>
  );
};

export default ModalContent;
