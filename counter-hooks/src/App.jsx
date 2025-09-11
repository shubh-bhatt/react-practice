import { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div className="main-container">
      <p>{counter}</p>
      <button onClick={() => setCounter((prev) => prev + 1)}>Increase</button>
      <button
        onClick={() => {
          setCounter((prev) => Math.max(prev - 1, 0));
        }}
        disabled={counter === 0}
      >
        Decrease
      </button>
      <button onClick={() => setCounter(0)}>Reset</button>
    </div>
  );
};

export default App;
