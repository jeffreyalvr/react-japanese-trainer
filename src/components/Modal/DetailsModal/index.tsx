import { Box } from "../../Box";

import ModalContent from "./ModalContent";
import ModalFooter from "./ModalFooter";

const DetailsModal = () => {
  return (
    <Box
      gap={2.5}
      padding={{
        paddingX: 2.5,
        paddingY: 2.5,
      }}
    >
      <ModalContent />
      <ModalFooter />
    </Box>
  );
};

export default DetailsModal;
