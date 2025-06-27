import logo from './logo.svg';
import './App.css';
import Parent from './components/propsDrilling/Parent';
import { createContext } from 'react';
import UseRefDemo from './components/learnUseRef/UseRefDemo';
import UseEffectDemo from './components/learnUseEffect/UseEffectDemo';
import TimerApp from './components/learnUseEffect/TimerApp';



export const personContext = createContext();

function App() {
   const person = {personname: "Tamilselvan" };

  return (
    <div>

      {/* <personContext.Provider value={person}>
        <Parent/>
      </personContext.Provider>  */}

      {/* <UseRefDemo/> */}
      {/* <UseEffectDemo/> */}
      <TimerApp/>
    </div>
  );
}

 
export default App;
