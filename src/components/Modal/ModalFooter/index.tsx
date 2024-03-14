import { Button } from "../../Button";

const ModalFooter = () => {
  return (
    <footer className="pt-8 flex flex-row gap-2 items-center justify-center w-full border-t-2 border-dashed border-[var(--border-box-light)] dark:border-[var(--border-box-dark)] sm:gap-0 sm:justify-between">
      <Button variant="secondary" text="Fechar" />
      <div className="flex flex-row gap-2 sm:gap-6">
        <Button
          variant="secondary"
          title="Marcar como esquecido"
          text="Esqueci"
        />
        <Button variant="primary" title="Marcar como lembrado" text="Lembrei" />
      </div>
    </footer>
  );
};

export default ModalFooter;
