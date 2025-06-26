import React, { useContext } from 'react'
import { personContext } from '../../App'

function GrandChild() {
    const user = useContext(personContext);
  return (
    
    <div>

       {user.personname}
       
    </div>
  )
}

export default GrandChild;

