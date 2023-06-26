import { useReducer, useContext, createContext } from "react";

export const reducer = (state, action) => {
  switch (action.type) {
    case "dark":
      return { ...state, theme: "dark" };
    case "light":
      return { ...state, theme: "" };
    default:
      return state;
  }
};

export const initialState = { theme: "", data: [] };

export const ContextGlobal = createContext();

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const providerValue = { state, dispatch };

  return (
    <ContextGlobal.Provider value={providerValue}>
      {children}
    </ContextGlobal.Provider>
  );
};

export const useContextGlobal = () => {
  return useContext(ContextGlobal);
};
