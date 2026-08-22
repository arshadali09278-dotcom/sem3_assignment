import React, { createContext, useContext } from 'react';

const MyCtx = createContext();

const Child = () => {
  let val = useContext(MyCtx);
  return <p>Child says: {val}</p>;
};

const Middle = () => {
  return <Child />;
};

const Q5Context = () => {
  return (
    <MyCtx.Provider value="Welcome to React">
      <div style={{padding:"20px"}}>
        <h2>Q5 - Context API</h2>
        <Middle />
      </div>
    </MyCtx.Provider>
  );
};

export default Q5Context;
