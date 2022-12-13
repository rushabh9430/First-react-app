import logo from "./logo.svg";
import "./App.css";

// How to cretae a class and how to expends Other classs
function App() {
  function admin() {
    class Student {
      constructor(name, id, city) {
        this.name = name;
        this.id = id;
        this.city = city;
      }
      popUp() {
        console.log(
          `name is a ${this.name} and Id And City is ${this.id}, ${this.city}`
        );
      }
    }
    class Profecer extends Student {
      constructor(name, id, city) {
        super(name, id, city);
      }
    }
    var details = new Profecer("rushabh", 50, "Kolkata");
    details.popUp();

    // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

    class Employee {
      constructor(givenName, givenExperience, givenDivision) {
        this.name = givenName;
        this.experience = givenExperience;
        this.division = givenDivision;
      }
      slogan() {
      console.info(`My name is ${this.name} and I worked in this Company atleast ${this.experience} year !`)
      }
      // Object
    }
    let data = new Employee("ramesh", 26, "Division");
    data.slogan();

    // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  }
  return (
    <div className="App">
      header
      <header className="App-header" onClick={admin}>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code>
        </p>
        <p>This is a default react Menu</p>
      </header>
    </div>
  );
}
export default App;
