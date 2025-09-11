import { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);
  const [mode, setMode] = useState("Dark");

  const styles =
    mode === "Dark"
      ? { color: "white", backgroundColor: "black" }
      : { color: "black", backgroundColor: "white" };

  const toggleTheme = () => {
    setMode((prev) => (prev === "Dark" ? "Light" : "Dark"));
  };

  return (
    <div className="main-container" style={styles}>
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
      <button onClick={toggleTheme}>{mode} Mode</button>
    </div>
  );
};

export default App;
