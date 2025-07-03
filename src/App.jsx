import logo from './logo.svg';
import './App.css';
import Parent from './components/propsDrilling/Parent';
import { createContext } from 'react';
import UseRefDemo from './components/learnUseRef/UseRefDemo';
import UseEffectDemo from './components/learnUseEffect/UseEffectDemo';
import TimerApp from './components/learnUseEffect/TimerApp';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/learnRouter/Home';
import Contact from './components/learnRouter/Contact';
import Blogs from './components/learnRouter/Blogs';
import Layout from './components/learnRouter/Layout';
import PayilagamLandingPage from './components/PayilagamPage/PayilagamLandingPage';//import './components/PayilagamPage/PayilagamLandingPage.css'; // CSS File

import WeatherApp from './components/WeatherApp/WeatherApp';
import  './components/WeatherApp/WeatherApp.css';




export const personContext = createContext();

function App() {
  // const person = { personname: "Tamilselvan" };

  return (
    <div>

      {/* <personContext.Provider value={person}>
        <Parent/>
      </personContext.Provider>  */}

      {/* <UseRefDemo/> */}
      {/* <UseEffectDemo/> */}
      {/* <TimerApp/> */}

      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>                                 
             <Route index element={<Home />} />                                    
            <Route path='/Blogs' element={<Blogs />} />        
            <Route path='/Contact' element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter> */}

      
      {/* <PayilagamLandingPage/> */}

      <WeatherApp/>


    </div>
  );
}


export default App;
