import { createContext, useContext } from "react";

export const RomanizationContext = createContext({
  showRomanization: true,
  toggleRomanization: () => {},
});

export const useRomanizationContext = () => useContext(RomanizationContext);
