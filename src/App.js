import React, { Component } from "react";


export default class App extends Component {
  constructor() {
    super();
    this.state = {
    }
  }

  componentDidMount(){
    setInterval(() => {
        this.setState({data : new Date().toLocaleTimeString()})
    }, 1000);
  }
  render() {
    return (
      <div className="App">
        {this.state.data}
      </div>
    );
  }
}
