import React, { useState } from "react";
import placeHolderImg from "../assets/house-placeholder.jpg";
import ConfigDropdown from './ConfigDropdown';
import { Link } from 'react-router-dom';
import SearchBar from "./SearchBar";

function RentCard(props) {
  const everyCard = props.everyCard;
  const setEveryCard = props.setEveryCard;

  const handleDelete = (idToDelte) => {
    const stateClone = everyCard.filter((card) => card.id !== idToDelte);
    setEveryCard(stateClone);
  }

  return (
    <div id="rentCard-container">
    <SearchBar />
      {everyCard.map((eachCard) => {
        return (
          <div key={eachCard.id} className="each-card">
            <div className="info-card-container">
              <div className="img">
                <img src={placeHolderImg} alt="Imagen de un anuncio" />
                <ConfigDropdown everyCard={everyCard.id} eachCard={eachCard} setEveryCard={setEveryCard} className='fav-button'/>
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
      <Link to="/AddRent">
        <button id="add-btn">Añadir +</button>
      </Link>
    </div>
  );
}
export default RentCard;
