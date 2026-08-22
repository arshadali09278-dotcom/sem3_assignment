import React, { useReducer } from 'react';

var reducer = (state, action) => {
  if (state == "Red") return "Yellow";
  if (state == "Yellow") return "Green";
  if (state == "Green") return "Red";
  return state;
};

const Q2 = () => {
  let [color, dispatch] = useReducer(reducer, "Red");

  return (
    <div>
      <h3>Q2. Traffic Light</h3>
      <p>Color is: <b style={{color: color}}>{color}</b></p>
      <button onClick={() => dispatch()}>Next</button>
    </div>
  );
};

export default Q2;
