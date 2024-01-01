import { createContext, useState } from "react";
import { DETAILS } from "../constants";

const State = createContext();

export const StateProvider = ({ children }) => {
  const [rightSide, setRightSide] = useState(DETAILS);
  const [postId, setPostId] = useState(null);

  return (
    <State.Provider value={{ postId, setPostId, rightSide, setRightSide }}>
      {children}
    </State.Provider>
  )
};

export default State;