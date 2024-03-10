import { createContext, useContext } from "react";

export const TabContext = createContext({
  selectedTab: 0,
  switchTab: (tabIndex: number) => {},
});

export const useTabContext = () => useContext(TabContext);
