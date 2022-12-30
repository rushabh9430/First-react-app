//  ! Method - 1 => how to work componentDidUpdate with states
// import React, { Component ,setState } from "react";
// export default class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       name: "rushabh sutariya",
//       count: 2
//     };
//   }

// //   * How to work in state
//   componentDidUpdate(prevProps , prevState ) {
//     if(prevState.count !== this.state.count)
//     {
//         this.setState({name : "pravin"})
//     }
//   }

//   onclickHandler = () => {
//     this.setState({count : this.state.count + 1})
//   };

//   render() {
//     return (
//       <div className="App">
//         count {this.state.count}
//         <button onClick={this.onclickHandler}>onclick</button>
//       </div>
//     );
//   }
// }

//  ! Method - 2 => how to work componentDidUpdate with props
import React, { Component, setState } from "react";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "rushabh sutariya",
      count: 1,
      isValid: true,
    };
  }

  onclickHandler = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <div className="App">
        name is {this.state.name}
        <Title component1 = {this.state.count}/>
        <button onClick={this.onclickHandler}>submit</button>
      </div>
    );
  }
}

class Title extends Component {
  componentDidUpdate(prevProps, prevState) {
    if (prevProps !== this.props.count) {
      console.log("componentDidUpdate");
    }
  }
  render() {
    return <div className="Title">
        count are {this.props.component1}
        </div>;
  }
}
