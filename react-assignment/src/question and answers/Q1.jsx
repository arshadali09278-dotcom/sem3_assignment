import { useState } from 'react'

const Q1 = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)} disabled={count === 10}>Increment</button>
      <button onClick={() => setCount(count - 1)} disabled={count === 0}>Decrement</button>
    </div>
  )
}

export default Q1