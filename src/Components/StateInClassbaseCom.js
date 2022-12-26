// ⚛️ State In Class Base Component
import React, { Component } from 'react'
export default class State extends Component {
constructor(props){
        super(props);
        this.state = {
                name : "Ryan Reynolds",
                age : 39,
                married : 'yes' ,
                about : {
                        Hobbie : 'work',
                        wife  : 'Scarlett Johansson'
                }
        }
}

        OnclickHandler = () => {
                this.setState({name : "Dwayne Johnson",age : 25 , married : 'No' , about : {Hobbie : "Dance"}})
        }

        
  render() {
    return (
      <div>
                <p>Name is {this.state.name}</p>
                <p>Age is {this.state.age}</p>
                <p>Married ?  {this.state.married}</p>
                <p>Hobbie is {this.state.about.Hobbie}</p>
                <button className = {'btn_css'} onClick = {this.OnclickHandler}>Update details</button>
      </div>
    )
  }
}
