import LearningModal from "./LearningModal";
import DetailsModal from "./DetailsModal";

import { useModalContext } from "../../Contexts/ModalContext";

const Modal = () => {
  const { modalActive, type } = useModalContext();
  return modalActive ? (
    <div className="absolute flex flex-col gap-2 justify-center items-center size-full bg-[var(--modal-light-bg)] dark:bg-[var(--modal-dark-bg)] backdrop-blur-sm">
      {type === "LEARNING_MODAL" ? <LearningModal /> : <DetailsModal />}
    </div>
  ) : null;
};

export default Modal;
