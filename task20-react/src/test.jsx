// new_releases See the latest updates to the Gemini Apps Privacy HubOpens in a new window
// close
// Conversation with Gemini
// expand_more
// Create a react code in boxes of student data is show on p tag like name,age and button name add in all boxes, and these data get from students array, in boxes add button is click the students data add on table 

// volume_up
// I'd be glad to create the React code that fulfills your requirements, incorporating the valuable insights from the provided ratings:

// JavaScript
// import React, { useState } from 'react';

// const students = [
//   { id: 1, name: 'Alice', age: 20 },
//   { id: 2, name: 'Bob', age: 22 },
//   { id: 3, name: 'Charlie', age: 21 },
// ];

// function StudentDataBox({ student, onAdd }) {
//   return (
//     <div className="student-box">
//       <p>Name: {student.name}</p>
//       <p>Age: {student.age}</p>
//       <button onClick={() => onAdd(student)}>Add to Table</button>
//     </div>
//   );
// }

// function StudentDataTable({ students }) {
//   return (
//     <table className="student-table">
//       <thead>
//         <tr>
//           <th>Name</th>
//           <th>Age</th>
//         </tr>
//       </thead>
//       <tbody>
//         {students.map((student) => (
//           <tr key={student.id}>
//             <td>{student.name}</td>
//             <td>{student.age}</td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// }

// function App() {
//   const [selectedStudents, setSelectedStudents] = useState([]);

//   const handleAddStudent = (student) => {
//     setSelectedStudents((prevStudents) => [...prevStudents, student]);
//   };

//   return (
//     <div className="App">
//       <h2>Student Data</h2>
//       <div className="student-boxes">
//         {students.map((student) => (
//           <StudentDataBox key={student.id} student={student} onAdd={handleAddStudent} />
//         ))}
//       </div>
//       <h2>Selected Students</h2>
//       <StudentDataTable students={selectedStudents} />
//     </div>
//   );
// }

// export default App;
// Use code with caution.
// content_copy
// Explanation:

// Import: We import useState from React to manage the state of the selected students (selectedStudents).
// Student Data: The students array holds the student information with id, name, and age.
// StudentDataBox Component:
// Renders a box for each student with name, age, and an "Add to Table" button.
// Takes student props for information and onAdd function to handle adding.
// Uses className for styling (optional).
// StudentDataTable Component:
// Renders a table with headers (Name, Age) and body rows.
// Takes students props for the data to display.
// Uses className for styling (optional).
// App Component:
// Manages the state of selected students using useState.
// Defines handleAddStudent to add a student to the selectedStudents array using the spread operator (...).
// Renders the student data boxes and the table:
// Student boxes iterate through students and pass each student object and handleAddStudent to StudentDataBox.
// Student table displays the selectedStudents data.
// Uses className for styling (optional).
// Styling (Optional):

// You can use CSS to style the boxes, table, and other elements. Add a CSS file and import it into your App.css file:

// CSS
// /* App.css */
// .student-box {
//   border: 1px solid #ddd;
//   padding: 10px;
//   margin: 10px;
//   display: inline-block;
// }

// .student-table {
//   border-collapse: collapse;
//   width: 100%;
// }

// .student-table th,
// .student-table td {
//   padding: 5px;
//   border: 1px solid #ddd;
// }

import React, { useState } from 'react';

const students = [
  { id: 1, name: 'Alice', age: 20 },
  { id: 2, name: 'Bob', age: 22 },
  { id: 3, name: 'Charlie', age: 21 },
  { id: 4, name: 'David', age: 23 },
  { id: 5, name: 'Eve', age: 24 },
];

function StudentDataBox({ student, onAdd }) {
  return (
    <div className="student-box">
      <p>Name: {student.name}</p>
      <p>Age: {student.age}</p>
      <button onClick={() => onAdd(student)}>Add to Table</button>
    </div>
  );
}

function StudentDataTable({ students }) {
  return (
    <table className="student-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student) => (
          <tr key={student.id}>
            <td>{student.name}</td>
            <td>{student.age}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function App() {
  const [selectedStudents, setSelectedStudents] = useState([]);

  const handleAddStudent = (student) => {
    // Ensure unique entries by checking if student already exists
    const isUnique = !selectedStudents.some((existingStudent) => existingStudent.id === student.id);
    if (isUnique) {
      setSelectedStudents((prevStudents) => [...prevStudents, student]);
    } else {
      alert("already added");
    }
  };

  return (
    <div className="App">
      <h2>Student Data (Max 5)</h2>
      <div className="student-boxes">
        {students.slice(0, 5).map((student) => ( // Limit to 5 boxes
          <StudentDataBox key={student.id} student={student} onAdd={handleAddStudent} />
        ))}
      </div>
      <h2>Selected Students</h2>
      <StudentDataTable students={selectedStudents} />
    </div>
  );
}

export default App;