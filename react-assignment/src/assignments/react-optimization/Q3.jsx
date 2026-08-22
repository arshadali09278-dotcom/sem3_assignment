import React, { useState, useCallback, memo } from 'react';

const ChildBtn = memo((props) => {
  console.log("child rendered")
  return <button onClick={props.action}>click me</button>;
});

const Q3 = () => {
  let [val, setVal] = useState(1);

  let doMultiply = useCallback(() => {
    setVal(val * 2);
  }, [val]);

  return (
    <div>
      <h3>Part C - useCallback (1)</h3>
      <p>value: {val}</p>
      <ChildBtn action={doMultiply} />
    </div>
  );
};

export default Q3;
