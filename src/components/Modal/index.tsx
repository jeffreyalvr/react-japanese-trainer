import ModalContent from "./ModalContent";
import ModalFooter from "./ModalFooter";
import { Box } from "../Box";

const Modal = ({ isOpen }: { isOpen: boolean }) => {
  return isOpen ? (
    <div className="absolute flex flex-col gap-2 justify-center items-center size-full bg-[var(--modal-transparent-bg)] backdrop-blur-sm">
      <Box>
        <div className="flex flex-col items-center gap-4 px-2 py-4 sm:flex-row sm:justify-between sm:px-10">
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
      </Box>

      <Box
        gap={2.5}
        padding={{
          paddingX: 2.5,
          paddingY: 2.5,
        }}
      >
        {/* gap-10 px-2 py-10 sm:px-10 */}
        <ModalContent />
        <ModalFooter />
      </Box>
    </div>
  ) : null;
};

export default Modal;
