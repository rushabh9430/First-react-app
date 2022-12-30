import React , { useState } from 'react'

export default function App() {
  return (
    <div >
      <HOC component={Counter} />
      <Counter />
    </div>
  )
}

const HOC = (props) => {
    return(
        <div style={{backgroundColor : 'red' , padding : 25 }}>
            <props.component />
        </div>
    )
}



const Counter = () => {

    const [count, setcount] = useState(0)

    const onclickHandler = () => {
        setcount(count + 1)
    }
    return(
        <div>
            count is {count}
            <button onClick={onclickHandler}>button</button>
        </div>
    )
}
