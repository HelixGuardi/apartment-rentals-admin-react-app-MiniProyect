import { useParams } from "react-router-dom"
import allCards from "../data/initialData.json"
import placeHolderImg from "../assets/house-placeholder.jpg";

function SaberMas() {

  const parametrosDinamicos = useParams()  
  const foundUser = allCards.results.find((eachCard) => {
   
    if (eachCard.id === parametrosDinamicos.id) {
      return true 
    } else {
      return false 
    } })
  console.log(foundUser.url)

    return(
     <div className="main-container">
               <img src={foundUser.picture_url.url} alt={foundUser.name} className="user-image" />
          <div className="user-details">
                <h2>{foundUser.name}</h2>
                <h3>{`${foundUser.city}, ${foundUser.country}`}</h3>
                <h4>{foundUser.host_name}</h4>
                <p>{`${foundUser.review_scores_rating} / 100`}</p>
                <hr />
                <p>{foundUser.description}</p>
                <hr />
                
                <p>HostRules text</p>
                <hr />
                <p>Property type</p>
                <p>Acomodations</p>
                <p>BathRooms</p>
                <p>BedRooms</p>
                <p>Beds</p>
                <h5>HostRules:</h5>
                <p>{foundUser.house_rules}</p>
                <hr />
                <p>Price</p>
                <p>Cleaning fee</p>
                <p>Host since</p>
                <p>Host responsive time</p>
                <hr />
                <p>Politicas de cancelación</p>      
         </div> 
     </div>
    )
}

export default SaberMas;