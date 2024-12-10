import { useParams } from "react-router-dom";
import placeHolderImg from "../assets/house-placeholder.jpg";

function SaberMas(props) {
  const everyCard = props.everyCard;
  const setEveryCard = props.setEveryCard;

  console.log(everyCard)

  const parametrosDinamicos = useParams();
  console.log(parametrosDinamicos);
  
  const foundUser = everyCard.find((eachCard) => {
    if (eachCard.id === parametrosDinamicos.id) {
      return true;
    } else {
      return false;
    }
  });
  // console.log(foundUser);

  return (
    <div className="main-container">
      <div id="main-info">
        {/* <img
          src={foundUser.picture_url.url}
          alt={foundUser.name}
          className="user-image"
        /> */}
        <h2>{foundUser.name}</h2>
        <h3>{`${foundUser.city}, ${foundUser.country}`}</h3>
        <h4>{foundUser.host_name}</h4>
        <p>{`${foundUser.review_scores_rating} / 100`}</p>
      </div>

      <div className="more-info-container">
        <hr />

        <div id="description">
          <p>{foundUser.description}</p> <br />
          <p>Tipo de propiedad: {foundUser.property_type}</p>
          <p>Acomodaciones: {foundUser.accommodates}</p>
          <p>Baños: {foundUser.bathrooms}</p>
          <p>Quartos: {foundUser.bedrooms}</p>
          <p>Camas: {foundUser.beds}</p>
        </div>

        <hr />

        <div id="price-and-rules">
          <p>Precio: {foundUser.price}€</p>
          <p>Tasa de limpieza: {foundUser.cleaning_fee}€</p>
          <p>Host desde: {foundUser.host_since}</p>
          <p>
            Tiempo de respuesta del host: {foundUser.host_response_time}
          </p>{" "}
          <br />
          <h5>HostRules:</h5>
          <p>{foundUser.house_rules}</p>
        </div>

        <div id="policy-section">
          <h6>Politica de cancelación:</h6>
          <p>{foundUser.cancellation_policy}</p>
        </div>
      </div>
    </div>
  );
}

export default SaberMas;
