import React, { useState } from 'react'

const UseState = () => {
    const [name, setname] = useState(0)
 // second way   const changeName =()=>{myArray[1]('Ajay')}
 const add =()=>{
    setname(name +1)
 }
  const substact =()=>{
    if(name>0)
    {setname(name -1)}
 }
  return (
    <div><h1>{name}</h1>
    <button onClick={add}>add</button>
    <button onClick={substact}>substract</button>
    </div>
  )
}
export default UseState;
//first way  on onClick ()=>{myArray[1]('Ajay')} change it into a function name changeName
