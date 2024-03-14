import ModalContent from "./ModalContent";
import ModalFooter from "./ModalFooter";

const Modal = () => {
  return (
    <div className="absolute flex flex-col justify-center items-center size-full bg-[var(--modal-transparent-bg)] backdrop-blur-sm">
      <div className="rounded-lg w-[640px] flex flex-col gap-10 p-10 border-4 border-[var(--border-box-light)] bg-[var(--bg-box-light)] dark:border-[var(--border-box-dark)] dark:bg-[var(--bg-box-dark)]">
        <ModalContent />
        <ModalFooter />
      </div>
    </div>
  );
};

export default Modal;
