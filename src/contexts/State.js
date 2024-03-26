import { createContext, useState, useMemo } from "react";
import { DETAILS } from "../constants";

const State = createContext();

export const StateProvider = ({ children }) => {
  const [rightSide, setRightSide] = useState(DETAILS);
  const [postId, setPostId] = useState(null);

  // Memoize the value object
  const contextValue = useMemo(() => ({
    postId,
    setPostId,
    rightSide,
    setRightSide
  }), [postId, setPostId, rightSide, setRightSide]);

  return (
    <State.Provider value={contextValue}>
      {children}
    </State.Provider>
  );
};

export default State;
