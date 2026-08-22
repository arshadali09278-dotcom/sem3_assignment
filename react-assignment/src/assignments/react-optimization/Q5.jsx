import React, { useState, useEffect } from 'react';

const Q5 = () => {
  let [localText, setLocalText] = useState("");

  useEffect(()=>{
    let saved = localStorage.getItem("myText");
    if(saved){
      setLocalText(saved);
    }
  },[])

  function handleSave(e){
    setLocalText(e.target.value);
    localStorage.setItem("myText", e.target.value);
  }

  return (
    <div>
      <h3>Part D - localStorage</h3>
      save input: <input value={localText} onChange={handleSave} />
    </div>
  );
};

export default Q5;
