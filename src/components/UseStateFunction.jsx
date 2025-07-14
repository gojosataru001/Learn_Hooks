import React, { useState} from 'react'


const UseStateFunction = () => {
    const [counter, setCounter] = useState(0);
    const Increment = () =>{
        setCounter(counter+1)
    
    }
    const Decrement = () =>{
        setCounter(counter - 1)
    }

  return (
    <div><h1>{counter}</h1>
    <button onClick={Increment}>Increment</button>
    <button onClick={Decrement}>Decrement</button></div>
  )
}

export default UseStateFunction;