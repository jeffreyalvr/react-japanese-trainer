import { createContext, useContext } from "react";

type modalType = "LEARNING_MODAL" | "DETAILS_MODAL";

type ContextProps = {
  modalActive: boolean;
  type: modalType;
  toggleModalActive: ({
    status,
    type,
  }: {
    status: boolean;
    type?: modalType;
  }) => void;
};

export const ModalContext = createContext<ContextProps>({
  modalActive: false,
  type: "LEARNING_MODAL",
  toggleModalActive: () => {},
});

export const useModalContext = () => useContext(ModalContext);
