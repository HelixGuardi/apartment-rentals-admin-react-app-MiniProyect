import React, { useState } from "react";
import data from "../data/initialData.json";
import placeHolderImg from "../assets/house-placeholder.jpg";
import FavButton from './FavButton';
import { Link } from 'react-router-dom';

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
              <div className="img">
                <img src={placeHolderImg} alt="Imagen de un anuncio" />
                <FavButton everyCard={everyCard} setEveryCard={setEveryCard} className='fav-button'/>
              </div>

              <div className="info-card-text">
                <h4>{eachCard.name}</h4>
                <p>
                  {eachCard.city}, {eachCard.country}
                </p>
                <p>{eachCard.host_name}</p>
              </div>
            </div>
            <div className="btn-card-container">
            <Link to={`/SaberMas/${eachCard.id}`}>
              <button>Saber más</button>
            </Link>
              <button onClick={() => handleDelete(eachCard.id)}>🗑️</button>
            </div>
          </div>
        );
      })};
    </div>
  );
}
export default RentCard;
