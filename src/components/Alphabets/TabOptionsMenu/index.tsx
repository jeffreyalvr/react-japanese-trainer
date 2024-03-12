import { Button } from "../../Button";

const TabOptionsMenu = () => {
  return (
    <div className="flex flex-col justify-center gap-2 w-full p-6 border-b-2 border-[var(--border-box-light)] dark:border-[var(--border-box-dark)] xs:flex-row">
      <Button
        text="Praticar alfabeto"
        variant="primary"
        title="Praticar todos os itens"
      />
      <Button
        text="Praticar enfraquecidos"
        variant="secondary"
        title="Praticar items com aprendizado abaixo de 75%"
      />
    </div>
  );
};

export default TabOptionsMenu;
