import { useContext } from "react";

import { TabContext } from "../../../Contexts/TabContext";

const Tabs = () => {
  const tabs = [
    { id: 0, texto: "Hiragana", progresso: "0%" },
    { id: 1, texto: "Katakana", progresso: "0%" },
  ];

  const { selectedTab, switchTab } = useContext(TabContext);

  return (
    <div className="flex flex-col flex-wrap w-full border-b-2 border-[var(--border-box-light)] dark:border-[var(--border-box-dark)] sm:flex-row">
      {tabs.map((tab) => (
        <div
          key={tab.id}
          onClick={() => switchTab(tab.id)}
          className={`
          flex flex-row gap-2 px-10 py-4 border-b-2 border-[var(--border-box-light)] dark:border-[var(--border-box-dark)]
          cursor-pointer bg-[var(--bg-tab)] text-[var(--fg-light)] dark:text-[var(--fg-dark)] hover:bg-[var(--bg-tab-hover)]
          hover:text-white sm:border-r-2 sm:border-b-0 transition-colors
          ${
            selectedTab === tab.id
              ? "bg-[var(--bg-tab-selected)] text-white"
              : null
          }`}
        >
          {tab.texto}{" "}
          <span className="text-[var(--gold)]">{tab.progresso}</span>
        </div>
      ))}
    </div>
  );
};

export default Tabs;
