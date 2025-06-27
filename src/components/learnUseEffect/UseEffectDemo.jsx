import React, { useEffect, useState } from 'react'

function UseEffectDemo() {
    const [count,setCount] = useState(0);
    const [age,setAge] = useState(15); 

    // only run when component mounted
    // []=> Empty dependency array
    useEffect(()=>{
        console.log("component-mounted");
    },[]) 
    
   
    // []=>dependency array
     useEffect(()=>{
        console.log("function called when age is changed");
    },[age]) 

    // useEffect(()=>{
    //     console.log("No Dependency array");   
    // })not recommended


    console.log("component-rendered");

    // Arrow function
    // callback function

  return (
    <div>
        count : {count}
        Age :{age} 
        <button onClick={()=>setCount(count+1)}>Increase</button>   
        <button onClick={()=>setAge(age+1)}>Change Age</button>
    </div>
  )
}

export default UseEffectDemo