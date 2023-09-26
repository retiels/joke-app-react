// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';
// import Card from "./components/Card";
import Button from './components/Button';
import Footer from './components/Footer.jsx';
import image_test from './assets/minions.png'

function App() {  
  console.log("Welcome desde React Js..")

  return (
    <div className='App'>
      <div>
        <h1>Random Jokes App</h1>
        {/* <img src={image_test}></img> */}
        <Button/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
