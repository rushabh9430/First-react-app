import logo from './logo.svg';
import './App.css';
// import data from "./data.json"

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

  let data3 = [
    { "name": "Ram", "email": "ram@gmail.com", "age": 23, "id" : 1 },
    { "name": "Shyam", "email": "shyam23@gmail.com", "age": 28 , "id" : 2},
    { "name": "John", "email": "john@gmail.com", "age": 33, "id" : 3 },
    { "name": "Bob", "email": "bob32@gmail.com", "age": 41, "id" : 4 },
    { "name": "Pop", "email": "popxyx@gmail.com", "age": 41, "id" : 5 },
    { "name": "mom", "email": "mom121@gmail.com", "age": 41, "id" : 6 },
    { "name": "tom", "email": "tom123@gmail.com", "age": 41, "id" : 7 }
  ]
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code>
        </p>
        <p>This is a default react app</p>
      </header>
      {/* *********  Simple map Function *************** */}
      {/* {data.map((i,index) => {
        return (
          <div key={Math.random()}>
            <b>Student name</b> {i.name + Math.floor(Math.random()*1000)}<br/>
            <b>Student email</b>{i.email}<br/>
            <b>Student Id</b>{i.id}
          </div>
        )
        })} */}

        {/* * * * * * * *  Map Function in table * * * * * * * *  */}
        {/* table border included in css file */}
        <table>
          <tbody>
            <tr>
              <th><b> Student Name </b></th>
              <th><b> Student Email </b></th>
              <th><b> Student Age </b></th>
              <th><b> Student Id </b></th>
            </tr>
            {
              data.map((i) => {
                return(
                  <tr key = {Math.random()}>
                    <td>{i.name}</td>
                    <td>{i.email}</td>
                    <td>{i.age}</td>
                    <td>{i.id}</td>
                  </tr>
                )
              })
            } 
             <h2>How to Filter value only even values has been saw</h2>
            {
              data3.filter((i)=> i.id %2==0 ) .map((i)=> {
                return (
                  <tr key={Math.random()}>
                    <td>{i.name}</td>
                    <td>{i.email}</td>
                    <td>{i.age}</td>
                    <td>{i.id}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
    </div>
  );
}

export default App;
