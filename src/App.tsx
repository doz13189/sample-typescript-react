import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Practice1 } from './9/Practice/Practice1';
import { Practice2 } from './9/Practice/Practice2';

function App() {
  return (
    <div className="App">
      <Practice1 />
      <Practice2 />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
    </div>
  );
}

export default App;
