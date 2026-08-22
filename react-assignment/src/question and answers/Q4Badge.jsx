import { useState } from 'react'

const Count = ({ totalCount }) => {
  return <h3>Total: {totalCount}</h3>
}

const Q4Badge = () => {
  const [task, setTask] = useState(['Task1', 'Task2'])
  const [input, setInput] = useState('')

  const handleAddTask = () => {
    const trimmedValue = input.trim()

    if (trimmedValue === '') {
      return
    }

    setTask((previousTasks) => [...previousTasks, trimmedValue])
    setInput('')
  }

  return (
    <div>
      <h2>
        TodoList <Count totalCount={task.length} />
      </h2>
      <input type='text' value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={handleAddTask}>Add</button>
      <ul>
        {task.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default Q4Badge