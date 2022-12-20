
//  🔯 First Method  ⬇️ Without using Props
import React from 'react'

// function header({Student , Profecer}) {
//   return (
//     <div>
//       This is a header And Student name is <b>{Student.name}</b> <br />
//       And Class Profecer is <b>{Profecer.name}</b>
//     </div>
//   )
// }

//  🔯 First Method  Use Props  ⬇️

function header(props) {
        return(
                <div>
                        This is a name {props.Student.name} <br />
                        And Profecer Name is  {props.Profecer.name}
                </div>
        )
}

export default header



