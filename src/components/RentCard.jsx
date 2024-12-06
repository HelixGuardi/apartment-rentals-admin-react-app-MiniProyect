import React, { useState } from "react";
import data from "../data/initialData.json";
import placeHolderImg from '../assets/house-placeholder.jpg'
function RentCard() {
    const [everyCard, setEveryCard] = useState(data.results);
    return(
        
    <div style={{backgroundColor: "pink", display: "flex", flexWrap:'wrap'}}>
        {everyCard.map((eachCard) => {
          return (
           <div key={eachCard.id} >

            <div style={{padding: '10px',margin: '10px', backgroundColor: 'lightcoral', maxHeight: '300px'}}>
                <div>
                 <img src={placeHolderImg} alt="Imagen de un anuncio" style={{width: '300px', height: 'auto', margin:'-10px'}} />
                </div>

                <div style = {{position: 'fixed'}}>
                 <h4>{eachCard.name}</h4>
                 <p>{eachCard.city}, {eachCard.country}</p>
                </div>

                <div>
                 <p>{eachCard.host_name}</p>
                </div>
           </div>
                <button>Saber más</button>
            </div>
          )
        })}
      </div>)
}
export default RentCard