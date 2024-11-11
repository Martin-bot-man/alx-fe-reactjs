import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import React from 'react'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Services from './pages/Services'
import Navbar from "./components/Navbar";
const App = () => {
  return (
    
      <BrowserRouter>
      <Navbar/>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />

      </Routes>
      </BrowserRouter>
    
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));

export default App
