import { ActionButton } from "../../Button";

import { useModalContext } from "../../../Contexts/ModalContext";

const TabOptionsMenu = () => {
  const { toggleModalActive } = useModalContext();
  return (
    <div className="flex flex-col justify-center gap-2 w-full p-6 border-b-2 border-[var(--border-box-light)] dark:border-[var(--border-box-dark)] xs:flex-row">
      <ActionButton
        text="Praticar alfabeto"
        variant="primary"
        title="Praticar todos os itens"
        action={() =>
          toggleModalActive({ status: true, modalType: "LEARNING_MODAL" })
        }
      />
      <ActionButton
        text="Praticar enfraquecidos"
        variant="secondary"
        title="Praticar items com aprendizado abaixo de 75%"
        action={() =>
          toggleModalActive({ status: true, modalType: "LEARNING_MODAL" })
        }
      />
    </div>
  );
};

export default TabOptionsMenu;
