import { useState } from "react";

const App = () => {
  const [text, setText] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Enter the text"
        onChange={(e) => {
          setText(e.target.value);
        }}
      ></input>
      <br />
      <br />
      <span>You Typed: {text}</span>
    </div>
  );
};

export default App;
