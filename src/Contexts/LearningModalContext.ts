import { createContext, useContext } from "react";

type ContextProps = {
  learningModalActive: boolean;
  toggleLearningModalActive: (status: boolean) => void;
};

export const LearningModalContext = createContext<ContextProps>({
  learningModalActive: false,
  toggleLearningModalActive: () => {},
});

export const useLearningModalContext = () => useContext(LearningModalContext);
