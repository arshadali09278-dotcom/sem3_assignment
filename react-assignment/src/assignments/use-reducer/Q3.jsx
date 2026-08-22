import React, { useReducer, useState } from 'react';

var reducer = (state, action) => {
  if (action.type == "ADD") return { ...state, cart: [...state.cart, action.val] };
  if (action.type == "CLR") return { ...state, cart: [] };
  return state;
};

const Q3 = () => {
  let [state, dispatch] = useReducer(reducer, { item: "", cart: [] });
  let [txt, setTxt] = useState("");

  return (
    <div>
      <h3>Q3. Shopping Cart</h3>
      <input value={txt} onChange={(e) => setTxt(e.target.value)} />
      <button onClick={() => { dispatch({type:"ADD", val:txt}); setTxt("") }}>Add to Cart</button>
      <button onClick={() => dispatch({type:"CLR"})}>Clear</button>
      <ul>
        {state.cart.map((x, i) => <li key={i}>{x}</li>)}
      </ul>
    </div>
  );
};

export default Q3;
