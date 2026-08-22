function StudentCard({ name, age }) {
  return (
    <section style={{ border: '1px solid #ccc', padding: '0.75rem', marginBottom: '0.5rem' }}>
      <p>Student: {name}</p>
      <p>Age: {age}</p>
    </section>
  )
}

function Card() {
  const students = [
    { name: 'Alice', age: 20 },
    { name: 'Raj', age: 20 },
  ]

  return (
    <div>
      {students.map((student, index) => (
        <StudentCard key={index} name={student.name} age={student.age} />
      ))}
    </div>
  )
}

export default Card
