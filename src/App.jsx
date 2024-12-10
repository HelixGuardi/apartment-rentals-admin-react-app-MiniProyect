import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import RentCard  from "./components/RentCard"
import Favorites from "./pages/Favorites"
import SaberMas from "./pages/SaberMas";
import Profile from "./pages/Profile";
import NotFound from "./components/NotFound";
import AddRent from "./pages/AddRent.jsx"
import AboutUs from "./pages/AboutUs.jsx";
import Data from "./data/initialData.json"

function App() {
  const [everyCard, setEveryCard] = useState(Data.results);

  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={ <RentCard everyCard={everyCard} setEveryCard={setEveryCard}/> } />
          <Route path="/AddRent" element={ <AddRent everyCard={everyCard} setEveryCard={setEveryCard}/> } />
          <Route path="/Favorites" element={ <Favorites /> } />
          <Route path="/SaberMas/:id" element={ <SaberMas everyCard={everyCard} setEveryCard={setEveryCard}/> } /> 
          <Route path="/Profile" element={ <Profile /> } />
          <Route path="/AboutUs" element={ <AboutUs /> } />
          
          <Route path="*" element={  <NotFound /> }/>

        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
