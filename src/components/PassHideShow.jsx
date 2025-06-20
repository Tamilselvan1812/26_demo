import { useState } from "react";

function PassHideShow()
    {
      
  const [showPassword,setShowPassword] = useState(false);
  return (
    <div>

        <input type={showPassword?"text":"password"} />   {/*  ternary operator */}
        
     
                            
        <button onClick={()=>setShowPassword(!showPassword)}>
            {showPassword?"hide":"show"}
        </button>

    </div>
    )}
export default  PassHideShow