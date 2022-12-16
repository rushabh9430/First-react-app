import logo from "./logo.svg";
import "./App.css";
function App() {
  let Medicine = [
    {
      id: 101,
      name: "Abacavir",
      quantity: 25,
      price: 150,
      expiry: 2022,
      status: true,
    },
    {
      id: 102,
      name: "Eltrombopag",
      quantity: 90,
      price: 550,
      expiry: 2021,
      status: true,
    },
    {
      id: 103,
      name: "Meloxicam",
      quantity: 85,
      price: 450,
      expiry: 2025,
      status: false,
    },
    {
      id: 104,
      name: "Allopurinol",
      quantity: 50,
      price: 600,
      expiry: 2023,
      status: true,
    },
    {
      id: 105,
      name: "Phenytoin",
      quantity: 63,
      price: 250,
      expiry: 2021,
      status: false,
    },
  ];
  let Employee = [
    {
      name: "amit",
      age: 35,
      salary: 40000,
      bonus: 1000,
      status: true,
    },
    {
      name: "ajay",
      age: 25,
      salary: 38000,
      bonus: 2000,
      status: false,
    },
    {
      name: "mayur",
      age: 23,
      salary: 50000,
      bonus: 500,
      status: true,
    },
    {
      name: "jay",
      age: 29,
      salary: 35000,
      bonus: 600,
      status: false,
    },
    {
      name: "raj",
      age: 33,
      salary: 22000,
      bonus: 2000,
      status: true,
    },
  ];

  // How to Total an Price of Medicine  With Use reduce  Function
  const total = Medicine.reduce((accumulator, current) => {
    return accumulator + current.price;
  }, 0);

  // How to Total an Price of Medicine  With Use For of loop
  // let count = 0
  //  for (const i of Medicine) {
  //   let total = count + i.price
  //  }
  //  console.log(total)

  const totalofEmployee = Employee.reduce((accumulator, current) => {
    return accumulator + current.salary;
  }, 0);

  return (
    <div className="App">
      <table border="1">
        <tbody>
          <tr>
            <th  colspan = "4">Employee Details Tabel</th>
          </tr>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Salary</th>
            <th>Bonus</th>
          </tr>
          {Employee.map((i) => {
            return (
              <tr key={Math.random()}>
                <td>{i.name}</td>
                <td>{i.age}</td>
                <td>{i.salary}</td>
                <td>{i.bonus}</td>
              </tr>
            );
          })}
          <tr>
            <td></td>
            <td></td>
            <td>
              <span align="left">
                Total Salary of Employee is {totalofEmployee}
              </span>
            </td>
          </tr>
        </tbody>
      </table>

      <br />
      <br />
      <br />
      <table border="1">
        <tbody>
          <tr>
            <th colspan = "5">Medicine Details Tabel</th>
          </tr>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Expiry</th>
          </tr>
          {Medicine.map((i, index) => {
            return (
              <tr key={Math.random()}>
                <td>{i.id}</td>
                <td>{i.name}</td>
                <td>{i.quantity}</td>
                <td>{i.price}</td>
                <td>{i.expiry}</td>
              </tr>
            );
          })}
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
              {/* Total of Madicine price with use reduce Function */}
              <span align="left">Total of entire Madicine is {total}</span>

              {/* Filter of table Show only  true Medicine */}
            </td>
          </tr>
        </tbody>
      </table>

      <br />
      <br />
      <br />

      <div className="d-flex">
      {/* Filter Table only show true status Medicine */}
        <table border="1">
          <tbody>
          <tr>
            <th  colspan = "5">Medicine Details Tabel</th>
          </tr>
            <tr border="1">
              <th>Id</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Expiry</th>
            </tr>
            {Medicine.filter((i) => i.status !== false).map((i) => {
              return (
                <tr key={Math.random()}>
                  <td>{i.id}</td>
                  <td>{i.name}</td>
                  <td>{i.quantity}</td>
                  <td>{i.price}</td>
                  <td>{i.expiry}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      {/* Filter Table only show third charactors names  Employee */}
        <table border="1">
          <tbody>
          <tr>
            <th  colspan = "4">Employee Details Tabel</th>
          </tr>
            <tr border="1">
              <th>Name</th>
              <th>Age</th>
              <th>Salary</th>
              <th>Bonus</th>
            </tr>
            {Employee.filter((i) => (i.name.length) <= 4).map((i) => {
              return (
                <tr key={Math.random()}>
                 <td>{i.name}</td>
                <td>{i.age}</td>
                <td>{i.salary}</td>
                <td>{i.bonus}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        
      </div>
    </div>
  );
}

export default App;
