import { useState } from 'react'

const Display = ({ count }) => {
  return <h2>{count}</h2>
}

const Controls = ({ count, setCount }) => {
  return (
    <>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </>
  )
}

const Q3CounterSplit = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Display count={count} />
      <Controls count={count} setCount={setCount} />
    </div>
  )
}

export default Q3CounterSplit