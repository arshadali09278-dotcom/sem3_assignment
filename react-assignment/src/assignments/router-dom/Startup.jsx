import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Home from './startup/Home.jsx';
import About from './startup/About.jsx';
import Contact from './startup/Contact.jsx';

const StartupApp = () => {
  return (
    <div style={{padding:"20px"}}>
      <nav>
        <h2>My Startup</h2>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <hr/>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
};

export default StartupApp;
