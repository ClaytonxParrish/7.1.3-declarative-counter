import { useState } from "react";
import "./App.css";

function App() {
   let [counter, changeCounter] = useState(1);
   window.changeCounter = changeCounter;
  return (
    <div className="box">
    <div className="container">
      <h1 className="title">Counter</h1>
      <p className="counter">{counter}</p>
      <p className="counter">{counter}</p>
    </div>
    </div>
  );
}

export default App;
