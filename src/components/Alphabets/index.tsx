import Tabs from "./Tabs";
import alfabeto from "./alfabeto.json";

const Alphabet = () => {
  return (
    <div className="rounded-lg flex flex-col w-full border-4 border-[var(--border-box-light)] bg-[var(--bg-box-light)] dark:border-[var(--border-box-dark)] dark:bg-[var(--bg-box-dark)]">
      <Tabs />
      <div className="flex flex-row gap-4 p-6 flex-wrap py-6">
        {alfabeto.caracteres.map((item) => (
          <div className="flex flex-col gap-3">
            <div
              key={item.id}
              className="rounded-lg p-4 border-4 text-[var(--fg-light) border-[var(--border-box-light)] bg-[var(--bg-box-light)] hover:text-white dark:border-[var(--border-box-dark)] dark:bg-[var(--bg-box-dark)] dark:text-[var(--fg-dark)] cursor-pointer hover:bg-[var(--primary)]"
            >
              {item.texto}
            </div>
            <div className="rounded-lg w-full h-1 bg-gray-300 dark:bg-[var(--primary-opaque)]">
              <div className="rounded-lg w-[30px] h-1 bg-[var(--gold)]"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Alphabet;
