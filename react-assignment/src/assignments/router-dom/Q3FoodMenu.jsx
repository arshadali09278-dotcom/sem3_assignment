import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';

const FHome = () => <div><h1>Home</h1><p>Welcome to our food place!</p></div>;
const Pizza = () => <div><h1>Pizza</h1><p>Cheesy and delicious stone oven pizza.</p></div>;
const Burger = () => <div><h1>Burger</h1><p>Juicy grilled burgers made fresh.</p></div>;
const Drinks = () => <div><h1>Drinks</h1><p>Cold beverages and fresh juices.</p></div>;

const Q3FoodMenu = () => {
  return (
    <div style={{padding:"20px"}}>
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/pizza"> Pizza</Link> | 
        <Link to="/burger"> Burger</Link> | 
        <Link to="/drinks"> Drinks</Link>
      </nav>
      <hr/>
      <Routes>
        <Route path="/" element={<FHome />} />
        <Route path="/pizza" element={<Pizza />} />
        <Route path="/burger" element={<Burger />} />
        <Route path="/drinks" element={<Drinks />} />
      </Routes>
    </div>
  );
};

export default Q3FoodMenu;
