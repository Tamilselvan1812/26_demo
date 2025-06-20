import React, { useState } from 'react';


function BulbToggle() {
  const [isOn, setIsOn] = useState(false); // bulb is off initially

  return (
    <div >
      
        {isOn ? <img src="/bulb1.jpg" /> :<img src= "/bulb2.jpg"/>}

     
      <button onClick={() => setIsOn(!isOn)}>
        {isOn ? 'Turn off' : 'Turn On'}
      </button>
    </div>
  );
}

export default BulbToggle;
