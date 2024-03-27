import React, { createContext, useState, useMemo } from "react";
import { DETAILS } from "../constants";

interface ContextValue {
  postId: any;
  setPostId: React.Dispatch<React.SetStateAction<any>>;
  rightSide: string;
  setRightSide: React.Dispatch<React.SetStateAction<string>>;
}

const initialState: ContextValue = {
  postId: null,
  setPostId: () => {},
  rightSide: DETAILS,
  setRightSide: () => {},
};

const State = createContext<ContextValue>(initialState);

interface StateProviderProps {
  children: React.ReactNode;
}

export const StateProvider: React.FC<StateProviderProps> = ({ children }) => {
  const [rightSide, setRightSide] = useState(initialState.rightSide);
  const [postId, setPostId] = useState(initialState.postId);

  // Memoize the value object
  const contextValue = useMemo(
    () => ({
      postId,
      setPostId,
      rightSide,
      setRightSide,
    }),
    [postId, setPostId, rightSide, setRightSide]
  );

  return <State.Provider value={contextValue}>{children}</State.Provider>;
};

export default State;
