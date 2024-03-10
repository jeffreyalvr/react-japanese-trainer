import { useContext, useState } from "react";

import Tabs from "./Tabs";
import TabContent from "./TabContent";

import { TabContext } from "../../Contexts/TabContext";
import { TranslationsContext } from "../../Contexts/TranslationsContext";

import alfabeto from "./alfabeto.json";

const Alphabet = () => {
  const { showTranslations } = useContext(TranslationsContext);

  const [selectedTab, setSelectedTab] = useState(0);

  const switchTab = (tabIndex: number) => {
    setSelectedTab(tabIndex);
  };

  return (
    <TabContext.Provider
      value={{
        selectedTab: Number(selectedTab),
        switchTab,
      }}
    >
      <div className="rounded-lg flex flex-col w-full border-4 border-[var(--border-box-light)] bg-[var(--bg-box-light)] overflow-hidden dark:border-[var(--border-box-dark)] dark:bg-[var(--bg-box-dark)]">
        <Tabs />
        <TabContent
          selectedTab={selectedTab}
          alphabets={[alfabeto.hiragana, alfabeto.katakana]}
          showTranslations={showTranslations}
        />
      </div>
    </TabContext.Provider>
  );
};

export default Alphabet;
