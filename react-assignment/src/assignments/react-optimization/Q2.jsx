import React, { useState, useMemo } from 'react';

const Q2 = () => {
  let [search, setSearch] = useState("");
  let arr = ["react", "node", "express", "mongodb", "javascript", "html", "css"];
  let [c2, setC2] = useState(0);

  let filtered = useMemo(() => {
    console.log("filtering now")
    return arr.filter((x) => x.includes(search));
  }, [search]);

  return (
    <div>
      <h3>Part B - useMemo</h3>
      Search: <input onChange={(e) => setSearch(e.target.value)} /><br/>
      dummy count: {c2} <button onClick={() => setC2(c2 + 1)}>inc</button>
      <ul>
        {filtered.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Q2;
