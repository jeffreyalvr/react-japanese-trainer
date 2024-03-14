import ModalContent from "./ModalContent";
import ModalFooter from "./ModalFooter";

const Modal = ({ isOpen }: { isOpen: boolean }) => {
  return isOpen ? (
    <div className="absolute flex flex-col gap-2 justify-center items-center size-full bg-[var(--modal-transparent-bg)] backdrop-blur-sm">
      <div className="rounded-lg w-full flex flex-col items-center gap-4 px-2 py-4 border-4 border-[var(--border-box-light)] bg-[var(--bg-box-light)] dark:border-[var(--border-box-dark)] dark:bg-[var(--bg-box-dark)] sm:flex-row sm:justify-between sm:px-10 sm:w-[640px]">
        <div className="flex flex-row gap-4">
          <span className="text-[var(--primary)] dark:text-[var(--fg-dark)]">
            1
          </span>
          <div className="border border-dashed border-[var(--border-box-light)] dark:border-[var(--border-box-dark)]"></div>
          <span className="text-[var(--primary-opaque)]">56</span>
        </div>
        <div className="flex flex-row gap-4">
          <span className="text-[var(--primary-opaque)]">0 lembrados</span>
          <div className="border border-dashed border-[var(--border-box-light)] dark:border-[var(--border-box-dark)]"></div>
          <span className="text-[var(--primary-opaque)]">0 esquecidos</span>
        </div>
      </div>

      <div className="rounded-lg w-full flex flex-col gap-10 px-2 py-10 border-4 border-[var(--border-box-light)] bg-[var(--bg-box-light)] dark:border-[var(--border-box-dark)] dark:bg-[var(--bg-box-dark)] sm:w-[640px] sm:px-10">
        <ModalContent />
        <ModalFooter />
      </div>
    </div>
  ) : null;
};

export default Modal;
