import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import MainSection from './components/MainSection'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <div>
        <Navbar />
        <MainSection />
        <Footer />
      </div>
    </>
  )
}

export default App
