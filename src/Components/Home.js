// Function Base Componets to clock
import { useState  , useEffect } from "react" 
import React, { Component } from "react";
export  function clock1 () {
    const [clock, setclock] = useState(null)
    useEffect(() => {
        setInterval(() => {
            setclock(
                new Date().toLocaleTimeString()
            )
        }, 1000);
    }, [])

    
    return(
        <div>
            Function base clock
            <div style={{color: "green" , backgroundColor:"gray"}}>
            <h1>{clock}</h1>
            </div>
        </div>
    )
}

// class Base Componets to clock

export class clock extends Component {
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
        Class base clock
        <div style={{color:"red" , backgroundColor:"olive"}}>
            <h1>{this.state.data}</h1>
        </div>
      </div>
    );
  }
}