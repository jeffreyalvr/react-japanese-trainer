import { Box } from "../../Box";

import ModalHeader from "./ModalHeader";
import ModalContent from "./ModalContent";
import ModalFooter from "./ModalFooter";

const LearningModal = () => {
  return (
    <>
      <Box>
        <ModalHeader />
      </Box>

      <Box
        gap={2.5}
        padding={{
          paddingX: 2.5,
          paddingY: 2.5,
        }}
      >
        {/* gap-10 px-2 py-10 sm:px-10 */}
        <ModalContent caractereIdSelecionado={6} />
        <ModalFooter />
      </Box>
    </>
  );
};

export default LearningModal;
