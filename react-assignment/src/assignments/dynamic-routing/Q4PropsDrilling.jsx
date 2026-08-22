import React from 'react';

const Child = ({ msg }) => {
  return <p>Child says: {msg}</p>;
};

const Middle = ({ msg }) => {
  return <Child msg={msg} />;
};

const Q4PropsDrilling = () => {
  let msg = "Welcome to React";

  return (
    <div style={{padding:"20px"}}>
      <h2>Q4 - Props Drilling</h2>
      <Middle msg={msg} />
    </div>
  );
};

export default Q4PropsDrilling;
