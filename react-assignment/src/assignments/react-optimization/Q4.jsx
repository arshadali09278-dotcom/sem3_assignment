import React, { useState, useCallback, memo } from 'react';

const ChildBtn = memo((props) => {
  console.log("child2 rendered")
  return <button onClick={props.action}>click me</button>;
});

const Q4 = () => {
  let [step, setStep] = useState(1);
  let [tot, setTot] = useState(0);

  let doStep = useCallback(() => {
    setTot(tot + step);
  }, [step]);

  return (
    <div>
      <h3>Part C - useCallback (2)</h3>
      step: <input type="number" onChange={(e) => setStep(Number(e.target.value))} /><br/>
      <p>total: {tot}</p>
      <ChildBtn action={doStep} />
    </div>
  );
};

export default Q4;
