import { useState } from "react";

import Tabs from "./Tabs";
import TabContent from "./TabContent";

import { Box } from "../Box";

import { TabContext } from "../../Contexts/TabContext";
import { useRomanizationContext } from "../../Contexts/RomanizationContext";

import alfabeto from "./alfabeto.json";

const Alphabet = () => {
  const { showRomanization } = useRomanizationContext();

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
      <Box>
        <Tabs />
        <TabContent
          alphabets={alfabeto.caracteres}
          showRomanization={showRomanization}
        />
      </Box>
    </TabContext.Provider>
  );
};

export default Alphabet;
