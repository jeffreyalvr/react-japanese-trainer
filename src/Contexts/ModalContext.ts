import { createContext, useContext } from "react";

type ContextProps = {
  modalActive: boolean;
  toggleModalActive: (status: boolean) => void;
};

export const ModalContext = createContext<ContextProps>({
  modalActive: false,
  toggleModalActive: () => {},
});

export const useModalContext = () => useContext(ModalContext);
