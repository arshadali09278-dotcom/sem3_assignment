import React, { useReducer } from 'react';

var reducer = (state, action) => {
  if(action.type == "INC") return { c: state.c + 1 };
  if(action.type == "DEC"){
    if(state.c > 1) return { c: state.c - 1 };
    else {
      alert("cannot go below 1");
      return state;
    }
  }
  return state;
};

const Q1 = () => {
  let [state, dispatch] = useReducer(reducer, { c: 1 });

  return (
    <div>
      <h3>Q1. Quantity Selector</h3>
      <button onClick={() => dispatch({type:"DEC"})}>-</button>
      <span style={{margin:"0 10px"}}>{state.c}</span>
      <button onClick={() => dispatch({type:"INC"})}>+</button>
    </div>
  );
};

export default Q1;
