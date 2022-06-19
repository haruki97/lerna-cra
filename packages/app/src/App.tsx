import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from "components/src";

function App() {
    const [count, setCount] = useState(0)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello, now Count is {count}
        </p>
        <Button onClick={() => setCount(count + 1)}/>
      </header>
    </div>
  );
}

export default App;
