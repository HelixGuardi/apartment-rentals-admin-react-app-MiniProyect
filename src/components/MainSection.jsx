import React, { useState } from "react";
import results from "../data/initialData.json";

function MainSection() {
  const [everyCard, setEveryCard] = useState(results);
  console.log(everyCard);

  return (
      <div>
        
      </div>
  );
}
export default MainSection;
