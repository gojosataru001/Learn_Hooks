import React, { useContext } from 'react'
import { NameContext } from '../App'


const UseContext3 = () => {
    const myName = useContext(NameContext)
  return (
    <div><h1>I am component 3</h1>
    <h2>{myName}</h2></div>
  )
}

export default UseContext3