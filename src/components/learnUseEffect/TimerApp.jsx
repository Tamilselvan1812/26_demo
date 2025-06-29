import React, { useEffect, useState } from 'react'

function TimerApp() {
   const [time,setTime] =  useState(new Date().toLocaleTimeString());

   useEffect(()=>{
   const interval =  setInterval(() => {
        setTime(new Date().toLocaleTimeString());
    }, 1000);

    return clearInterval(interval);
   },[])

  return (
    <div>
        {time}
    </div>
  )
}

export default TimerApp