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