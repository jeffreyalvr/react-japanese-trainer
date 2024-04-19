import { createContext, useContext } from "react";

type Type = "LEARNING_MODAL" | "DETAILS_MODAL";

type ContextProps = {
  modalActive: boolean;
  type: Type;
  toggleModalActive: ({
    status,
    modalType,
  }: {
    status: boolean;
    modalType?: Type;
  }) => void;
};

export const ModalContext = createContext<ContextProps>({
  modalActive: false,
  type: "LEARNING_MODAL",
  toggleModalActive: () => {},
});

export const useModalContext = () => useContext(ModalContext);
