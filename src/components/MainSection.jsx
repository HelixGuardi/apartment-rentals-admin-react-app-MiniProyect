import React, { useState } from "react";
import data from "../data/initialData.json";

function MainSection() {
  const [everyCard, setEveryCard] = useState(data.results);

  return (
      <div>
        {everyCard.map((eachCard) => {
          return (
            <li key={eachCard.id}>{eachCard.id}</li> 
            /* cambiarlo por la estructura que queremos para el listado */
          )
        })}
      </div>
  );
}
export default MainSection;
