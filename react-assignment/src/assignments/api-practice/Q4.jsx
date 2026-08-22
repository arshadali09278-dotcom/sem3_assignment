import React, { useEffect, useState } from 'react';

const Q4 = () => {
  let [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then(res => setData(res));
  }, []);

  function del(id) {
    setData(data.filter(x => x.id !== id));
  }

  return (
    <div>
      <h2>Q4 - Delete a Todo</h2>
      <ul>
        {data.map(x => (
          <li key={x.id}>
            {x.title} <button onClick={() => del(x.id)}>delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Q4;
