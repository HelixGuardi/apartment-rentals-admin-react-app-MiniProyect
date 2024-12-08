import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import MainSection from "./components/MainSection";
import Footer from "./components/Footer";
import { Routes, Route, Link } from "react-router-dom";
import Favorites from "./pages/Favorites"
import SaberMas from "./pages/SaberMas";
import Profile from "./pages/Profile";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={ <MainSection /> } />
          <Route path="/Favorites" element={ <Favorites /> } />
          <Route path="/SaberMas" element={ <SaberMas /> } /> {/* Hacer con que una vez se haga click en "Saber más" que salga en la URL el nombre del card al que se ha hecho click en el botón */}
          <Route path="/Profile" element={ <Profile /> } />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
