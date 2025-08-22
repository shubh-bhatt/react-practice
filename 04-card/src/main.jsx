import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

const companies = [
  {
    company: "Tesla",
    level: "advanced",
    color: "#e84f33",
  },
  {
    company: "SpaceX",
    level: "advanced",
    color: "#60dafb",
  },
  {
    company: "SolarCity",
    level: "intermediate",
    color: "#86ef1dff",
  },
  {
    company: "xAI",
    level: "begineer",
    color: "#f1af6cff",
  },
];

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

function CompanyList() {
  return (
    <div className="company-list">
      {companies.map((data) => (
        <Company data={data} key={data.color} />
      ))}
    </div>
  );
}

function Company(props) {
  const { color, company, level } = props.data;

  return (
    <div className={`company`} style={{ backgroundColor: `${color}` }}>
      <span>{company}</span>
      <span>{level === "begineer" && "👶"}</span>
      <span>{level === "intermediate" && "👌"}</span>
      <span>{level === "advanced" && "💪"}</span>
    </div>
  );
}

function App() {
  return (
    <div className="container">
      <Image />
      <Details />
      <CompanyList />
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
