import { createContext, useContext } from "react";

export const LearningModalContext = createContext({
  learningModalActive: false,
  toggleLearningModalActive: () => {},
});

export const useLearningModalContext = () => useContext(LearningModalContext);
