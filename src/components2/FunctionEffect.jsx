import React, { useEffect, useState } from 'react'

const FunctionEffect = () => {
    const [counter,setCounter]=useState(0)
    useEffect(()=>{
        console.log("Function is rendered", counter ,"times");
        
    },[counter])
    const Increment =()=>{
        setCounter(counter +1)
    }

  return (
    <div>
        <h1>{counter}</h1>
        <button onClick={Increment}>Increment</button>
    </div>
  )
}

export default FunctionEffect