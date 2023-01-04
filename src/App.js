import React from "react";
import { useEffect , useState} from 'react'
import "./App.css";
function App() {
  const [count, setcount] = useState(0);

  useEffect(() => {
    
  }, [])

  let increment = () => {
    setcount(
         count + 1
    )
  }
  let decrement = () => {
    setcount(
         count - 1
    )
  }
  return (
    <div className="App">
      <button onClick={decrement}>decrement</button>
      {count}
      <button onClick={increment}>increment + </button>
    </div>
  );
}
export default App;
