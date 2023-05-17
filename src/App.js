import { useState } from "react";

function App() {
  let [counter, changeCounter] = useState(1);
window.changeCounter = changeCounter;

  return (
    <div>
      <h1>
        Counter
      </h1>
      <p>
        {counter}
      </p>
      <p>
        {counter}
      </p>
    </div>
  );
}

export default App;