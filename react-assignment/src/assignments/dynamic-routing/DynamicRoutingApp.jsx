import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ProductContext } from './ProductContext';
import ProductList from './ProductList';
import ProductDetails from './ProductDetails';

const DynamicRouting = () => {
  let [data, setData] = useState([
    { id: 101, name: "Headphones", price: 120, stock: 45 },
    { id: 102, name: "Keyboard", price: 150, stock: 12 },
    { id: 103, name: "Mouse", price: 80, stock: 0 },
    { id: 104, name: "Monitor", price: 300, stock: 24 }
  ]);

  return (
    <ProductContext.Provider value={data}>
      <div style={{padding:"20px"}}>
        <h1>Gadgets Store</h1>
        <hr/>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </div>
    </ProductContext.Provider>
  );
};

export default DynamicRouting;
