import SearchBar from "../components/SearchBar";
import RentCard from "../components/RentCard";
import { Link } from "react-router-dom";
function Home(props) {
    const {everyCard, setEveryCard} = props
    
  return (
    <div id="home-container">
        <SearchBar/>
        <RentCard everyCard={everyCard} setEveryCard={setEveryCard}/>
        <Link to="/AddRent">
        <button id="add-btn">Añadir +</button>
        </Link>
    </div>
  );
}
export default Home;