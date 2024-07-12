import React, { useState } from "react";

const students = [
  { id: 0, name: "s1", age: 10 },
  { id: 1, name: "s2", age: 11 },
  { id: 2, name: "s3", age: 12 },
  { id: 3, name: "s4", age: 13 },
  { id: 4, name: "s5", age: 14 },
];

function MyComponent() {
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [data,setData] = useState([])

  const handleAddStudent = (student) => {
    setSelectedStudent(student); // Update the selected student state
    setData([...data,student])
    console.log(data)
    console.log(student)
  };

  return (
    <div className="container">
      <div className="data">
        {students.map((student) => (
          <div key={student.id}>
            <p>Name: {student.name}</p>
            <p>Age: {student.age}</p>
            <button onClick={() => handleAddStudent(student)}>Add Me</button>
          </div>
        ))}
      </div>
        {
          data.map((d)=>(
            <div key={d.id}>
              <p>{d.name}</p>
              <p>{d.age}</p>
            </div>
          ))
        }
    </div>
  );
}

export default MyComponent;