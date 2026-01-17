import React from 'react'
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom'
import './App.css'

import Home from './Home.jsx'
import Contact from './Contact.jsx'
import About from './About.jsx'
import Services from './Services.jsx'

function App() {

  return (
    <BrowserRouter> 
    <div>
      <nav style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>
        <ul style={{listStyle:"none", color:"blue", fontFamily:"monospace", float:"left", display:"flex", gap:"15px", fontSize:"20px"}}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>



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
