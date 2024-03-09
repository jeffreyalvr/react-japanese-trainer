import Button from "../Button";

const Box = () => {
  return (
    <div className="rounded-lg w-full p-10 border-4 border-[var(--border-box-light)] bg-[var(--bg-box-light)] dark:border-[var(--border-box-dark)] dark:bg-[var(--bg-box-dark)]">
      <span>Teste de BOX</span>
      <div className="flex flex-row gap-2 py-4">
        <Button text="teste" title="hover" variant="primary" />
        <Button text="teste" title="hover" variant="secondary" />
      </div>
    </div>
  );
};

export default Box;
