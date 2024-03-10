import { createContext, useContext } from "react";

type ContextProps = {
  selectedTab: Number;
  switchTab: (tabIndex: number) => void;
};

export const TabContext = createContext<ContextProps>({
  selectedTab: 0,
  switchTab: () => {},
});

export const useTabContext = () => useContext(TabContext);
