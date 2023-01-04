import { useEffect, useState } from "react";
import Home from "./Components/Home";

const data = {
  name: "varun",
  age: 90,
};

const student = [
  { firstName: "John", lastName: "Doe", age: 23 },
  { firstName: "adam", lastName: "marks", age: 24 },
  { firstName: "miyon", lastName: "munn", age: 22 },
  { firstName: "triyon", lastName: "want", age: 14 },
  { firstName: "piyoun", lastName: "done", age: 4 },
];
const student1 = [
  { firstName: "John", lastName: "Doe", age: 23 },
  { firstName: "adam", lastName: "marks", age: 28 },
  { firstName: "miyon", lastName: "munn", age: 22 },
  { firstName: "triyon", lastName: "want", age: 114 },
  { firstName: "piyoun", lastName: "done", age: 41 },
];
function App() {
  const [count, setcount] = useState(0);

  useEffect(() => {}, [count]);

  const onclick = () => {
    setInterval(() => {
      setcount(new Date().toLocaleTimeString());
    }, 1000);
  };
  return (
    <>
      <button onClick={() => setcount(count + 1)}>increament +</button>
      <br />
      <div>{count}</div>
      <button onClick={onclick}>decrement -</button>
      <br />
      <Home data2={student1} />

      
    </>
  );
}

export default App;
