import React, { useRef, useState } from 'react'

function UseRefDemo() {
    const [userInput,setUserInput] = useState("");

    console.log("component reRender..");
    const inputElement = useRef("");

    const addtoRefVariable = () => {
      console.log(inputElement.current.value);     
    }
  return (
    <div>
        <input type="text" 
        // onChange={(e)=>setUserInput(e.target.value)}
        ref={inputElement}
        />
        <button onClick={addtoRefVariable}>click</button>
    </div>
  )
}

export default UseRefDemo
