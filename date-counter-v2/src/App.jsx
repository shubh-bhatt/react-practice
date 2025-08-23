import { useState } from "react";
import "./index.css";

export default function App() {
  return (
    <>
      <Counter />
    </>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  function handleReset() {
    setCount(0);
    setStep(1);
  }

  let date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <div className="main-container">
      <div className="increase">
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <span>{step}</span>
      </div>

      <div className="decrease">
        <button className="btn" onClick={() => setCount((c) => c - step)}>
          -
        </button>
        <input
          type="number"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button className="btn" onClick={() => setCount((c) => c + step)}>
          +
        </button>
      </div>

      <h1 style={{ textAlign: "center" }}>
        {count === 0
          ? "Today is "
          : count > 0
          ? `${count} days from today is `
          : `${Math.abs(count)} days from today was `}
        {date.toDateString()}
      </h1>

      {count !== 0 || step !== 1 ? (
        <div className="reset">
          <button onClick={handleReset}>Reset</button>
        </div>
      ) : null}
    </div>
  );
}
