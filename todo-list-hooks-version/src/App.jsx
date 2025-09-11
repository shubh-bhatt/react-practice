import { useState } from "react";

const App = () => {
  const [todo, setTodo] = useState([]);
  const [input, setInput] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setMsg("");
    if (input.trim() === "") {
      setMsg("Todo cannot be empty");
      return;
    }

    setTodo([...todo, input]);
    setInput("");
  };

  const handleDelete = (indexToDelete) => {
    setTodo(todo.filter((_, index) => index !== indexToDelete));
  };

  return (
    <div>
      <h1>ToDo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter the Todo"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Add Todo</button>
      </form>
      <span>{msg}</span>
      <ol>
        {todo.map((list, index) => {
          return (
            <li key={index}>
              {list} <button onClick={() => handleDelete(index)}>Delete</button>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default App;
