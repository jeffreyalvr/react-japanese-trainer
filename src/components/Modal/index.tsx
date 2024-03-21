// import LearningModal from "./LearningModal";
import DetailsModal from "./DetailsModal";

const Modal = ({ isOpen }: { isOpen: boolean }) => {
  return isOpen ? (
    <div className="absolute flex flex-col gap-2 justify-center items-center size-full bg-[var(--modal-light-bg)] dark:bg-[var(--modal-dark-bg)] backdrop-blur-sm">
      <DetailsModal />
      {/* <LearningModal /> */}
    </div>
  ) : null;
};

export default Modal;
