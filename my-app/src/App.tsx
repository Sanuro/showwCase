import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Homepage } from './Homepage';
// import {MainScreen} from './MainScreen';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Homepage />
        {/* <MainScreen/> */}


        {/* <img src={logo} className="App-logo" alt="logo" /> */}



        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
