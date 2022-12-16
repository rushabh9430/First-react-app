import logo from './logo.svg';
import './App.css';
function App() {

  let arrys = new Array(1,2,3,4,5)
  let admin = ( ) => {
    const a = arrys[4]
    const b = arrys[3]
    const c = arrys[2]
    const d = arrys[1]
    const e = arrys[0]
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
    console.log(e);
  }


  //  This Is Distructuring Concept  

  // 1
  let [a,b,c,d,e] = [1 , 2 , 3 , 4 ,5]
  console.log(a , b)


  // 2
  let [x,...rest] = [1 , 2 , 3 , 4 ,5]
  console.log(rest)


  return (
    <div className="App">
      <header className="App-header" onClick = {admin}>
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
