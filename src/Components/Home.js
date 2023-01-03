// Function Base Componets to Timer
import { useState  , useEffect } from "react"
import React, { Component } from "react";
export  function Timer1 () {
    const [timer, setTimer] = useState(null)
    useEffect(() => {
        setInterval(() => {
            setTimer(
                new Date().toLocaleTimeString()
            )
        }, 1000);
    }, [])

    
    return(
        <div>
            Function base Timer
            <div style={{color: "green" , backgroundColor:"gray"}}>
            <h1>{timer}</h1>
            </div>
        </div>
    )
}

// class Base Componets to Timer

export class Timer extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ data: new Date().toLocaleTimeString() });
    }, 1000);
  }
  render() {
    return (
      <div>
        Class base Timer
        <div style={{color:"red" , backgroundColor:"olive"}}>
            <h1>{this.state.data}</h1>
        </div>
      </div>
    );
  }
}