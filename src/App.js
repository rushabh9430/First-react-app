import logo from "./logo.svg";
import "./App.css";
//   New Including File ⬇️
import Header from "./Components/header.js";
//   New Including File ⬇️
import About from "./Components/about.js";

// Note  :  Add New components File Is About
function App() {
  const Student = {
    name: "Rushabh Sutariya",
    id: 1054,
  };

  const Profecer = {
    name: "Abhishekh Gajera",
    id: 1,
  };

  const Medicine = {
    name: "Painkillers",
  };
  //  How to access boolean value
  return (
    <div className="App">
      {/* Pass velue */}
      <Header Student={Student} Profecer={Profecer} />
      <About Drug={Medicine} isValid = {true}/>
    </div>
  );
}

export default App;
