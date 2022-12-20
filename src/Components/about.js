import React from 'react'

const About = (props) => {
  return (
    <div>
      <h3>About</h3>
      Medicine name is {props.Drug.name} And Validation {props.isValid ? "True" : "False"}
    </div>
  )
}

export default About
