import React, { useState } from "react";
import data from "../data/initialData.json";
import placeHolderImg from "../assets/house-placeholder.jpg";
import FavButton from './FavButton'

function RentCard() {
  const [everyCard, setEveryCard] = useState(data.results);

  const handleDelete = (idToDelte) => {
    const stateClone = everyCard.filter((card) => card.id !== idToDelte);
    setEveryCard(stateClone);
  }

  return (
    <div id="rentCard-container">
      {everyCard.map((eachCard) => {
        return (
          <div key={eachCard.id} className="each-card">
            <div className="info-card-container">
              <div>
                <img src={placeHolderImg} alt="Imagen de un anuncio" />
              </div>

              <div>
                <h4>{eachCard.name}</h4>
                <p>
                  {eachCard.city}, {eachCard.country}
                </p>
              </div>

              <div>
                <p>{eachCard.host_name}</p>
              </div>
            </div>
            <div className="btn-card-container">
              <button>Saber más</button>
              <FavButton everyCard={everyCard} setEveryCard={setEveryCard}/>
              <button onClick={() => handleDelete(eachCard.id)}>Eliminar</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default RentCard;
