import { useReducer, useContext, createContext } from "react";

export const initialState = { theme: "", data: [] };

export const ContextGlobal = createContext();



export const reducer = (state, action) => {

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ContextGlobal.Provider value={{ state, dispatch }}>
      {children}
    </ContextGlobal.Provider>
  );
};
