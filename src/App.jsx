
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Routes, Route, Link } from "react-router-dom";
import RentCard  from "./components/RentCard"
import Favorites from "./pages/Favorites"
import SaberMas from "./pages/SaberMas";
import Profile from "./pages/Profile";
import NotFound from "./components/NotFound";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={ <RentCard />} />
          <Route path="/Favorites" element={ <Favorites /> } />
          <Route path="/SaberMas/:id" element={ <SaberMas /> } /> 
          <Route path="/Profile" element={ <Profile /> } />
          
          <Route path="*" element={  <NotFound /> }/>

        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
