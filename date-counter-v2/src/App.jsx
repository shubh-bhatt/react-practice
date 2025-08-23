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
  let date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <>
      <div className="increase">
        <button className="btn" onClick={() => setStep((s) => s - 1)}>
          -
        </button>
        <p>Step: {step}</p>
        <button className="btn" onClick={() => setStep((s) => s + 1)}>
          +
        </button>
      </div>
      <div className="decrease">
        <button className="btn" onClick={() => setCount((c) => c - step)}>
          -
        </button>
        <p>Count: {count}</p>
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
    </>
  );
}
