import logo from "./logo.svg";
import "./App.css";
//   New Including File ⬇️
import Header from "./Components/header.js";

// Note  :  Add New components File Is About
function App() {
  const Student = [
    {
      name: "Rushabh Sutariya",
      id: 1054
    },
    {
      name: "Abhishekh Gajera",
      id: 1
    },
    {
      name : "Krunal Dhorajiya",
      id : 205
    },
    {
      name : 'hardik Chauhan',
      id : 2506
    }
  ];

  return (
    <div className="App">
      {/* Pass velue */}
      <Header Student={Student} />
    </div>
  );
}

export default App;
