import React, { Component } from "react";
export default class App extends Component {
  componentWillMount() {
    this.setState({ name: (this.state.name = "Pravin Mavani") });
  }
  constructor() {
    super();
    this.state = {
      name: "rushabh sutariya",
      count: 1,
    };
  }

  onclickHandler = () => {
    this.setState({ name: (this.state.name = "Manish Bhavani") });
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.onclickHandler}>Click on Me</button>
        Name is {this.state.name}
      </div>
    );
  }
}

// ! Note : setState ne class components in under import karava ni jarur nathi kem ke ahiya Apde react mathi component ne import karaviyu chhe etle ema badhu include j chhe like componentWillMount bhi  and componentDidUpdate And componentWillUnmount
