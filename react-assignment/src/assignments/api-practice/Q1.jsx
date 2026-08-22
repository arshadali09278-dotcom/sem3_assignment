import React, { useEffect, useState } from 'react';

const Q1 = () => {
  let [data, setData] = useState([]);
  let temp;

  useEffect(() => {
    console.log("calling api")
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then(res => {
        console.log(res)
        setData(res)
      });
  }, []);

  let completed = data.filter(x => x.completed == true);

  return (
    <div>
      <h2>Q1 - Completed Todos</h2>
      <ul>
        {completed.map(x => (
          <li key={x.id}>{x.id} - {x.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Q1;
