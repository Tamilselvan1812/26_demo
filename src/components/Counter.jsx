import { useState } from "react";

function Counter(){


    let [count,setCount] = useState(0);

  //   let [name,setName] = useState();
    return(

       <div>
        <div class="container">
            <h1>Count:{count}</h1>
            <button onClick={()=>setCount(count+1) }>+</button>
             <button onClick={()=>setCount(count-1) }>-</button>
             <button onClick={()=>setCount(0) }>Reset</button>


             {/* <input type="text" />
             <button onChange={()=>setName(name)}>ADD</button> */}
        </div>
       </div>

    )

    
}
 export default Counter