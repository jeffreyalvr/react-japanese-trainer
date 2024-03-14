import { Button } from "../../Button";

const ModalFooter = () => {
  return (
    <footer className="pt-8 flex flex-row items-center justify-between w-full border-t-2 border-dashed border-[var(--border-box-light)] dark:border-[var(--border-box-dark)]">
      <Button variant="secondary" text="Fechar" />
      <div className="flex flex-row gap-6">
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
