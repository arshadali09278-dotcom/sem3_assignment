import { useState } from 'react'

function CounterDisplay({ count }) {
  return <p>Total Likes: {count}</p>
}

function LikeButton({ handleClick }) {
  return <button onClick={handleClick}>Like ❤️</button>
}

function Likes() {
  const [count, setCount] = useState(0)

  function increaseLikes() {
    setCount((previousCount) => previousCount + 1)
  }

  return (
    <div>
      <h5>Question 5 - Like Button</h5>
      <CounterDisplay count={count} />
      <LikeButton handleClick={increaseLikes} />
    </div>
  )
}

export default Likes
