import Tabs from "./Tabs";
import alfabeto from "./alfabeto.json";

const Alphabet = () => {
  return (
    <div className="rounded-lg flex flex-col w-full border-4 border-[var(--border-box-light)] bg-[var(--bg-box-light)] overflow-hidden dark:border-[var(--border-box-dark)] dark:bg-[var(--bg-box-dark)]">
      <Tabs />
      <div className="flex flex-row gap-4 p-6 flex-wrap py-6">
        {alfabeto.caracteres.map((item) => (
          <div className="flex flex-col gap-3">
            <div
              key={item.id}
              className="rounded-lg flex flex-col items-center justify-center p-4 size-20 hover:text-white border-4 border-[var(--border-box-light)] bg-[var(--bg-box-light)] dark:border-[var(--border-box-dark)] dark:bg-[var(--bg-box-dark)] cursor-pointer hover:bg-[var(--primary)]"
            >
              <div className="text-xl font-bold text-[var(--fg-light) dark:text-[var(--fg-dark)]">
                {item.caractere}
              </div>
              <div className="text-sm text-[var(--primary-opaque)] dark:text-[var(--fg-dark)]">
                {item.traducao}
              </div>
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
