import React from "react";
import Card from "../Components/Card";
import { getFavFromStorage} from "../Components/utils/global.context";



const Favs = () => {
  const localFavs = getFavFromStorage();

  const cardDentistas = localFavs.map(
    (dent) => (
      <div class="col-3">
        <Card
          dent={dent}
          key={dent.id}
        />
      </div>
    )
  );

  return (
    <div>
      <h1>Dentistas Favs</h1>
      <div class="container">
        <div class="row">
          {cardDentistas}
        </div>
      </div>
    </div>
  );
};

export default Favs;
