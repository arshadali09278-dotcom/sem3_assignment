import React, { useEffect, useState } from 'react';

const Q5 = () => {
  let [data, setData] = useState([]);
  let [search, setSearch] = useState('');
  var extra = "not used";

  useEffect(() => {
    console.log("fetching todos")
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then(res => {
        setData(res);
        console.log("done")
      });
  }, []);

  function del(id) {
    let newArr = data.filter(x => x.id != id);
    setData(newArr);
  }

  let shown = data.filter(x => x.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <div>
      <h2>Q5 - Search + Delete</h2>
      Search: <input value={search} onChange={(e) => setSearch(e.target.value)} />
      <ul>
        {shown.map(x => (
          <li key={x.id}>
            {x.title} <button onClick={() => del(x.id)}>delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Q5;
