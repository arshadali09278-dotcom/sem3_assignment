import React, { useEffect, useState } from 'react';

const Q2 = () => {
  let [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then(res => setData(res));
  }, []);

  let first10 = data.slice(0, 10);

  return (
    <div>
      <h2>Q2 - First 10 Todos</h2>
      <ul>
        {first10.map(x => (
          <li key={x.id}>{x.id} - {x.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Q2;
