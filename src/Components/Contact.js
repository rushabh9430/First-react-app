import React, { Component } from 'react'

export default class Contact extends Component {
  render() {
        // console.log(this.props.)
    return (
      <div>

        <h1>Contact : This is a {this.props.value[3].name}</h1>
        <h2>{JSON.stringify(this.props.value)}</h2>
        {/* <h1>Student Name is  {this.props.value[0].name}</h1> And <h2>Profecer Name is {this.props.value2.name}</h2> */}

      </div>
    )
  }
}
