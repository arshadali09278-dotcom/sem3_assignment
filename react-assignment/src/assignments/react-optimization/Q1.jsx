import React, { useState, memo } from 'react';

const ProfileCard = memo((props) => {
  console.log("profile card rendered")
  return (
    <div style={{border: "1px solid black", padding: "10px", marginTop:"10px"}}>
      <h3>title: {props.t}</h3>
      <p>desc: {props.d}</p>
    </div>
  );
});

const Q1 = () => {
  var x = 0;
  let [count, setCount] = useState(0);
  let [title, setTitle] = useState("");
  let [desc, setDesc] = useState("");

  return (
    <div>
      <h3>Part A - React.memo</h3>
      Title: <input onChange={(e) => setTitle(e.target.value)} /><br/>
      Desc: <input onChange={(e) => setDesc(e.target.value)} /><br/>
      count: {count} <button onClick={() => setCount(count + 1)}>inc</button>
      <ProfileCard t={title} d={desc} />
    </div>
  );
};

export default Q1;
