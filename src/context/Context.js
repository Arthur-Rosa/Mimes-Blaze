import { createContext, useReducer } from "react";
import { gameReducer } from "./Reducer";

const Game = createContext();

const Context = ({ children }) => {
  const [state, dispatch] = useReducer(gameReducer, {
    saldo: [],
  });

  return <Game.Provider value={{ state, dispatch }}>{children}</Game.Provider>;
};

export default Context;
