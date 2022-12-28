import React, { Component } from "react";

export default class App extends Component {
  componentWillMount() {
    this.setState({ count: this.state.count + 1 });
  }
  constructor(props) {
    super(props);
    this.state = {
      name: "Rushabh Sutariya",
      count: 1,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    console.info("ComponentDidUpdate");
    if (prevState.count !== this.state.count) {
      this.setState({ name : "Pravin Sutariya" });
    }
  }

//   componentWillUnmount() {
//     alert("ComponentWillUnmout => PageLeave");
//   }

  onClickHandler = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        name is {this.state.name}
        <br />
        Count {this.state.count}
        <button onClick={this.onClickHandler}>Click Me</button>
      </div>
    );
  }
}
