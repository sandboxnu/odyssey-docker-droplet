import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [text, setText] = useState("");

  const handleClick = () => {
    fetch("http://localhost:5000/click")
      .then((response) => response.json())
      .then((data) => setText(data.message));
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={handleClick}>Click Me</button>
        <p>{text}</p>
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
