import React, { useReducer } from 'react';

var reducer = (state, action) => {
  if(action.type == "L") return { ...state, likes: state.likes + 1 };
  if(action.type == "D") return { ...state, dislikes: state.dislikes + 1 };
  return state;
};

const Q4 = () => {
  let [state, dispatch] = useReducer(reducer, { likes: 0, dislikes: 0 });

  return (
    <div>
      <h3>Q4. Like & Dislike</h3>
      <p>Some post content here...</p>
      <button onClick={() => dispatch({type:"L"})}>Like {state.likes}</button>
      <button style={{marginLeft:"10px"}} onClick={() => dispatch({type:"D"})}>Dislike {state.dislikes}</button>
    </div>
  );
};

export default Q4;
