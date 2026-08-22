import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProductContext } from './ProductContext';

const ProductList = () => {
  let ctx = useContext(ProductContext);
  let nav = useNavigate();

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {ctx.map((x) => (
          <li key={x.id} onClick={() => nav(`/product/${x.id}`)} style={{cursor:"pointer", color:"blue"}}>
            {x.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
