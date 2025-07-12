import React, { useState } from 'react'

const UseStateObject = () => {
    const obj = {
        name: "Ajay",
        Height:178,
        age: 24,
        isYoung:true,
    }
    const [person, setPerson] = useState(obj);
    const changePerson = () => {
    setPerson(previousState => ({
      ...previousState,
      name: "Ranu"
    }));
  };
  return (
    <div>
        <h1>{person.name}</h1>
        <h1>{person.Height}</h1>
        <h1>{person.age}</h1>
        <h1>{person.isYoung.toString()}</h1>
        <button onClick={changePerson}>update</button>
           </div>
  )
}

export default UseStateObject