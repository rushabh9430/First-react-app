import logo from './logo.svg';
import './App.css';
import object from "./data.json"

function App() {

  let data = [
    { "name": "Ram", "email": "ram@gmail.com", "age": 23, "id" : 1 },
    { "name": "Shyam", "email": "shyam23@gmail.com", "age": 28 , "id" : 2},
    { "name": "John", "email": "john@gmail.com", "age": 33, "id" : 3 },
    { "name": "Bob", "email": "bob32@gmail.com", "age": 41, "id" : 4 }
  ]
  let data2 = [
    
    { "name": "Pop", "email": "popxyx@gmail.com", "age": 41, "id" : 5 },
    { "name": "mom", "email": "mom121@gmail.com", "age": 41, "id" : 6 },
    { "name": "tom", "email": "tom123@gmail.com", "age": 41, "id" : 7 }
  ]

  // How to add to 1 Object to Other Object

  // First method is push data 
  for ( let i = 0; i<data.length ; i ++){
    const element = data[i];
    data2.push(element);
  }
  console.log(data2);
  
// How to add data in concat  method   

  const joint = data.concat(data2);
  console.log(joint);

  //  And Secound Method is Spread - Opraater 

  const toggle = [...data,...data2]
  console.log(toggle);
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code>
        </p>
        <p>This is a default react app</p>
      </header>
    </div>
  );
}

export default App;
