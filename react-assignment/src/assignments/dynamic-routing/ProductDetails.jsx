import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ProductContext } from './ProductContext';

const ProductDetails = () => {
  let ctx = useContext(ProductContext);
  let { id } = useParams();
  let nav = useNavigate();

  let item = ctx.find((x) => x.id == id);

  if (!item) {
    return (
      <div>
        <h2>Not Found</h2>
        <button onClick={() => nav('/')}>Back</button>
      </div>
    );
  }

  return (
    <div>
      <h2>{item.name}</h2>
      <p>ID: {item.id}</p>
      <p>Price: ${item.price}</p>
      <p>Stock: {item.stock}</p>
      <button onClick={() => nav('/')}>Back</button>
    </div>
  );
};

export default ProductDetails;
