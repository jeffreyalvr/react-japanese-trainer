import LearningModal from "./LearningModal";
import DetailsModal from "./DetailsModal";

import { useModalContext } from "../../Contexts/ModalContext";

const Modal = () => {
  const { modalActive, type } = useModalContext();
  const renderModalComponent = () => {
    switch (type) {
      case "LEARNING_MODAL":
        return <LearningModal />;
      case "DETAILS_MODAL":
        return <DetailsModal />;
      default:
        return (
          <span className="text-[var(--fg-light)] dark:text-white">
            Nenhum componente definido.
          </span>
        );
    }
  };

  return modalActive ? (
    <div className="absolute flex flex-col gap-2 justify-center items-center size-full bg-[var(--modal-light-bg)] dark:bg-[var(--modal-dark-bg)] backdrop-blur-sm">
      {renderModalComponent()}
    </div>
  ) : null;
};

export default Modal;
