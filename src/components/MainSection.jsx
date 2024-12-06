import React, { useState } from "react";
import data from "../data/initialData.json";

function MainSection() {
  const [everyCard, setEveryCard] = useState(data.results);

  return (
    <div className="main-section-container"> 
      <div>
        {everyCard.map((eachCard) => {
          return (
            <li key={eachCard.id}>{eachCard.name}</li> 
          )
        })}
      </div>
    </div>
  );
}
export default MainSection;
