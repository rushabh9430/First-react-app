import "./App.css";
const data = [
  {
    name: "Rushabh",
    surname: "Sutariya",
    id: 1,
    age: 26
  },
  {
    name: "Piyush",
    surname: "Vaghasiya",
    id: 2,
    age: 16
  },
  {
    name: "Manoj",
    surname: "Savani",
    id: 3,
    age: 26
  },
  {
    name : "Panu",
    surname :"chikni",
    id : 4,
    age : 28
  }
];
function App() {
//   let filter = data.filter((i) => i.name.length<7);

  return (
    <div className="App">
      <h1>Hello</h1>
      <table border={1}>
        <tbody>
          <tr>
            <th colSpan={4}>DATA</th>
          </tr>
          <tr>
            <th>Name</th>
            <th>Surname</th>
            <th>Id</th>
            <th>Age</th>
          </tr>
          {/* {data.filter((i)=>  i.name.length > 3).map((i) => { */}
          {filter.map ( (i) => {
            return (
              <tr>
                <td>{i.name}</td>
                <td>{i.surname}</td>
                <td>{i.id}</td>
                <td>{i.age}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default App;