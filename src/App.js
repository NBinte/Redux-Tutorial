import React from 'react';
import logo from './logo.svg';
import './App.css';

import { useState, useEffect } from 'react';

import Posts from './components/Posts';
import Postform from './components/Postform';

const App = () => {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Postform />
      <hr />
      <Posts />
    </div>
  );
}

export default App;
