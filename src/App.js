import { useState } from "react";
import "./App.css";

 let data = 
         {
          name: "Krishan Mandvani",
          id: 1056,
          desc: "This is a test desc !"
        }
function App() {
        // String
        const [name, setName] = useState('a');
        // Number
        const [age, setAge] = useState(1)
        // Boolean Values 
        const [boolean, setBoolean] = useState(true)
        // Arrays Of Object
        const [arrays, setArrays] = useState(data)
        const onclickHandler = ( ) => {
                // String
                setName('b')
                // Number
                setAge(age + 1)
                // Boolean Values Single Line Condition 
                const bool = boolean ? false : true 
                setBoolean(bool)   
                // arrays Of Object
                setArrays({
                        name : "Piyush Mavani", desc : "This is a new discription Bro !", id : 25
                })     
        }
  return (
    <div className="App">
      <h2>HEllo React y!</h2>
      <hr />
      Name  is {name} <br />
      Click On This Button ⬇️ <br />
      <hr />
      Age is {age}
      <hr />
      boolean value is {boolean ? 'True' : 'False'} 
      <br /> <hr />
      Arrays of Data Properties ➡️ 
        <br />
        name is {arrays.name} <br />
        and Discription of this page is {arrays.desc} And Id {arrays.id}
        <br /><br />
      <button onClick={onclickHandler}>Submit</button>
    </div>
  );
}
export default App;
