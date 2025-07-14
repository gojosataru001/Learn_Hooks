import React from 'react'
import { useState } from 'react';

const UseStateArray = () => {
    const numbers = [5,10,15,20];
    const [num,setNum] = useState(numbers);
    const changeArray =()=>{
        setNum([10,20,30,40])
    }

  return (
    <div>
            <ol>
                {num.map((n,index)=><li key={index}>{n}</li>)}
            </ol>
            <button onClick={changeArray}>Change Array</button>
    </div>
  )
}

export default UseStateArray