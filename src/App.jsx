import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import MainSection from "./components/MainSection";
import Footer from "./components/Footer";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={ <MainSection /> }/>
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
