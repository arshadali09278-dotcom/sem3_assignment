import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';

const PHome = () => <div><h1>Home</h1><p>Welcome to my portfolio!</p></div>;
const Projects = () => <div><h1>Projects</h1><p>Here are my projects.</p></div>;
const Resume = () => <div><h1>Resume</h1><p>My resume details are here.</p></div>;

const Q2Portfolio = () => {
  return (
    <div style={{padding:"20px"}}>
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/projects"> Projects</Link> | 
        <Link to="/resume"> Resume</Link>
      </nav>
      <hr/>
      <Routes>
        <Route path="/" element={<PHome />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </div>
  );
};

export default Q2Portfolio;
