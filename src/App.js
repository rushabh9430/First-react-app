import logo from './logo.svg';
import './App.css';
//   New Including File ⬇️
import Header from './Components/header.js'

//  Props Hamesh key and value na format ma j pass thashe ! 
//  1st step Component ma props Pass karo and components ma get karo 
function App() {

  const Student = {
    name : "Rushabh Sutariya",
    id : 1054
  }

  const Profecer = {
    name : "Abhishekh Gajera",
    id : 1
  }
  return (
    <div className="App">
      {/* Pass velue */}
      <Header  Student = {Student} Profecer = {Profecer} />
    </div>
  );
}

export default App;
