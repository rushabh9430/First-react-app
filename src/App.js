import logo from './logo.svg';
import './App.css';

function App() {
  // Reduce ne Single digit ma convert karva mate  atle ke arrays ma count or add to cart ma price total karava mate bhi reduce no use thai chhe 
  
  // Let me show how it is working
  // So first get one of arrays and count  inside prize value  

  let things = [
    {
      Product  : "T-shirt",
      size : "L",
      price : 35000
    },
    {
      Product  : "shirt",
      size : "M",
      price : 15000
    },
    {
      Product  : "trousers",
      size : "L",
      price : 25000
    }
  ]

  //  How to price value so first methoc is for of loop
  let count = 0 
  for (const i of things) {
    count = count + i.price
  }
  console.log(count);

  // 2nd method id Reduce

  const total = things.reduce( (accumulator , current ) => {
    return accumulator + current.price
  },0)  
  
  // basically 0 is a accumulator
  console.info(total) 
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
