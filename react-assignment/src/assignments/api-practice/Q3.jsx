import React, { useEffect, useState } from 'react';

const Q3 = () => {
  let [allData, setAllData] = useState([]);
  let [userId, setUserId] = useState(0);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then(res => setAllData(res));
  }, []);

  let shown = userId === 0 ? allData : allData.filter(x => x.userId === userId);

  return (
    <div>
      <h2>Q3 - Filter by User ID</h2>
      <button onClick={() => setUserId(1)}>User 1</button>
      <button onClick={() => setUserId(2)}>User 2</button>
      <button onClick={() => setUserId(3)}>User 3</button>
      <button onClick={() => setUserId(0)}>All</button>
      <ul>
        {shown.map(x => (
          <li key={x.id}>{x.id} - {x.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Q3;
