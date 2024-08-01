import { createContext } from "react";

const initialState = {
  ball: 0,
  level: 0,
  updateBall: () => {},
  updateLevel: () => {},
};

export const QuizContext = createContext(initialState);

// eslint-disable-next-line react/prop-types
export const QuizProvider = ({ children }) => {
  const value = {
    ball: 0,
    level: 0,
  };
  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};
