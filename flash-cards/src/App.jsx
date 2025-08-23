import { useState } from "react";

const questions = [
  {
    id: 1,
    question:
      "What hook is used to manage state in a functional React component",
    answer: "useState",
  },
  {
    id: 2,
    question:
      "In JavaScript, which keyword is used to declare a block-scoped variable?",
    answer: "let",
  },
  {
    id: 3,
    question: "What hook is used to perform side effects in React?",
    answer: "useEffect",
  },
  {
    id: 4,
    question: "Which data type is returned by typeof null in JavaScript?",
    answer: "object",
  },
  {
    id: 5,
    question:
      "What is the default type of component in React (Class or Functional) nowadays?",
    answer: "Functional",
  },
  {
    id: 6,
    question:
      "Which keyword is used to create a constant variable in JavaScript?",
    answer: "const",
  },
];

export default function App() {
  return (
    <div className="container">
      <FlashCards />
    </div>
  );
}

function FlashCards() {
  const [selectedId, setSelectedId] = useState(null);

  function handleClick(id) {
    setSelectedId(id !== selectedId ? id : null);
  }

  return (
    <div className="flashcards">
      {questions.map((questions) => (
        <div
          key={questions.id}
          onClick={() => handleClick(questions.id)}
          className={questions.id === selectedId ? "selected" : ""}
        >
          <p>
            {questions.id === selectedId
              ? questions.answer
              : questions.question}
          </p>
        </div>
      ))}
    </div>
  );
}
