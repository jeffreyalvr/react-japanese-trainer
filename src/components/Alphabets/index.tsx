import { useContext, useEffect, useState } from "react";

import Tabs from "./Tabs";
import TabContent from "./TabContent";

import { TabContext } from "../../Contexts/TabContext";
import { TranslationsContext } from "../../Contexts/TranslationsContext";

import alfabeto from "./alfabeto.json";

const Alphabet = () => {
  const { showTranslations } = useContext(TranslationsContext);

  const tab_value = localStorage.getItem("tab");

  const [selectedTab, setSelectedTab] = useState(
    tab_value !== null ? JSON.parse(tab_value) : 0
  );

  useEffect(() => {
    localStorage.setItem("tab", String(selectedTab));
  }, [selectedTab]);

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
          alphabet={selectedTab === 0 ? alfabeto.hiragana : alfabeto.katakana}
          showTranslations={showTranslations}
        />
      </div>
    </TabContext.Provider>
  );
};

export default Alphabet;
