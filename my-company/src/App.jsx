import React from 'react'
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom'
import './App.css'

import Home from './Home.jsx'
import Contact from './components/Contact.jsx'
import About from './About.jsx'
import Services from './Services.jsx'
import Navbar from './components/Navbar.jsx'

function App() {

  return (
    <BrowserRouter> 
    <div>
     
      <Navbar />


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
