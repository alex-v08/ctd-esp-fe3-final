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

export const getFavFromStorage = () => {
  const localData = localStorage.getItem("idDentistas");
  return localData ? JSON.parse(localData) : [];
};

export const addFav = (dent)=>{
  const storageFavs = getFavFromStorage();
  const listaFavs = storageFavs.filter(fav => {
    return fav.id === dent.id
});
if (listaFavs.length === 0) {
  storageFavs.push(dent);
  localStorage.setItem('idDentistas',JSON.stringify(storageFavs)) 
  alert("Dentista agregado correctamente");

  }
  else {
    alert("El dentista ya existe en la lista");
  }
}
