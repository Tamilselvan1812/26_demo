import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Userinfo from './components/UserInfo';
import Counter from './components/Counter';
import Hooks from './components/Hooks';
import Facebook from './components/Facebook';    // import './components/Facebook.css';
import PassHideShow from './components/PassHideShow';
import BulbToggle from './components/BulbToggle';
import Productcard from './components/Productcard'; import'./components/Productcard.css';
import products from './components/products.json'; 




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}

    {/* <Hooks/> */}
    {/* <Userinfo/>  */}
    {/* <Counter/> */}
    {/* <Facebook/> */}
    {/* <PassHideShow/> */}
    {/* <BulbToggle /> */}
<div className="products-row">
    {
      products.map((product)=>(
        <Productcard data = {product}/>                               //  <Productcard name="watch" img=""/> - props
      ))
      
    }
  </div>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
