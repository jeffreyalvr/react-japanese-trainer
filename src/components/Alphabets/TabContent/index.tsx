import TabOptionsMenu from "../TabOptionsMenu";

type AlphabetList = AlphabetItem[];

type AlphabetItem = {
  id: number;
  hiragana: AlphabetBlock;
  katakana: AlphabetBlock;
  romanizacao: string;
};

type AlphabetBlock = {
  letra: string;
  progresso: number;
};

const TabContent = ({
  selectedTab,
  alphabets,
  showTranslations,
}: {
  selectedTab: number;
  alphabets: AlphabetList;
  showTranslations: boolean;
}) => {
  let selectedAlphabet: AlphabetBlock;
  return (
    <div className="flex flex-col">
      <TabOptionsMenu />
      <div className="grid grid-cols-3 gap-y-6 flex-wrap w-full p-6 justify-items-center xs:grid-cols-4 sm:grid-cols-5">
        {alphabets.map((item) => {
          selectedAlphabet = selectedTab === 0 ? item.hiragana : item.katakana;
          return (
            <div className="flex flex-col gap-3 w-20">
              <div
                key={item.id}
                className="rounded-lg flex flex-col items-center justify-center p-4 w-full h-20 [&>*]:hover:text-white border-4 border-[var(--border-box-light)] bg-[var(--bg-box-light)] dark:border-[var(--border-box-dark)] dark:bg-[var(--bg-box-dark)] cursor-pointer hover:bg-[var(--primary)]"
              >
                <div className="text-xl font-bold text-[var(--fg-light) dark:text-[var(--fg-dark)]">
                  {selectedAlphabet.letra}
                </div>
                {showTranslations ? (
                  <div className="text-sm text-[var(--primary-opaque)] dark:text-[var(--primary-opaque)]">
                    {item.romanizacao}
                  </div>
                ) : null}
              </div>
              <div
                title={`Taxa de acertos de ${selectedAlphabet.progresso}%`}
                className="rounded-lg w-full h-1 overflow-clip bg-gray-300 dark:bg-[var(--primary-opaque)]"
              >
                <div
                  className={`rounded-lg h-1 bg-[var(--gold)]`}
                  style={{ width: `${selectedAlphabet.progresso}%` }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TabContent;
