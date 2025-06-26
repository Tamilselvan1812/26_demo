import logo from './logo.svg';
import './App.css';
import Parent from './components/propsDrilling/Parent';
import { createContext } from 'react';
import UseRefDemo from './components/learnUseRef/UseRefDemo';



export const personContext = createContext();

function App() {
   const person = {personname: "Tamilselvan" };

  return (
    <div>

      {/* <personContext.Provider value={person}>
        <Parent/>
      </personContext.Provider>  */}

      <UseRefDemo/>
    </div>
  );
}

 
export default App;
