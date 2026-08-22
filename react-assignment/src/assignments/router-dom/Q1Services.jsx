import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Home from './startup/Home.jsx';
import About from './startup/About.jsx';
import Contact from './startup/Contact.jsx';
import Services from './startup/Services.jsx';

const Q1Services = () => {
  return (
    <div style={{padding:"20px"}}>
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/about"> About</Link> | 
        <Link to="/contact"> Contact</Link> | 
        <Link to="/services"> Services</Link>
      </nav>
      <hr/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </div>
  );
};

export default Q1Services;
