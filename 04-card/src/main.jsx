import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

function Image() {
  return (
    <img
      className="elon-musk"
      src="https://fortune.com/img-assets/wp-content/uploads/2023/09/MUS1123.Elon-Musk.jpg?w=1440&q=75"
      alt="elon musk"
    />
  );
}

function Details() {
  return (
    <div className="details">
      <h1>Elon Musk</h1>
      <p className="about">
        Elon Reeve Musk FRS is an international businessman and entrepreneur
        known for his leadership of Tesla, SpaceX, X, and the Department of
        Government Efficiency.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="Tesla" emoji="🚗" color="red" />
      <Skill skill="SpaceX" emoji="🚀" color="skyblue" />
      <Skill skill="SolarCity" emoji="💪" color="lightgreen" />
      <Skill skill="xAI" emoji="💻" color="yellow" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

function App() {
  return (
    <div className="container">
      <Image />
      <Details />
      <SkillList />
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
