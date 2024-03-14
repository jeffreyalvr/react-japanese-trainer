import { IconButton } from "../../Button";

import visibility_svg from "../../../assets/icons/visibility.svg";

const ModalContent = () => {
  return (
    <div className="flex flex-col gap-8 items-center justify-center w-full">
      <div className="flex flex-col items-center justify-center rounded-md size-12 sm:size-max p-4 bg-[var(--border-box-light)] dark:bg-[var(--border-box-dark)]">
        <h1 className="text-8xl text-[var(--primary)]">す</h1>
      </div>
      <div className="flex flex-row gap-4 h-max items-center">
        <span className="text-4xl text-[var(--fg-dark)] dark:text-[var(--fg-light)]">
          su
        </span>
        <IconButton
          variant="primary"
          title="Revelar romanização"
          icon={visibility_svg}
          fillColor="#ffffff"
        />
      </div>
    </div>
  );
};

export default ModalContent;
