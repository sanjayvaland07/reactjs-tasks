import { useState } from "react";

const students = [
  {
    id: 0,
    name: "s1",
    age: 10,
  },
  {
    id: 1,
    name: "s2",
    age: 11,
  },
  {
    id: 2,
    name: "s3",
    age: 12,
  },
  {
    id: 3,
    name: "s4",
    age: 13,
  },
  {
    id: 4,
    name: "s5",
    age: 14,
  },
];

function CreateStae(stu) {
  const [data, setData] = useState(null);
  setData(stu);
  console.log(data);
}
function Mytest() {
  return (
    <div className="container">
      <div className="data">
        {students.map((stu) => {
          return (
            <div key={stu.id}>
              <p>name : {stu.name}</p>
              <p>age : {stu.age}</p>
              <button onClick={CreateStae(stu)}>add me</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Mytest;
