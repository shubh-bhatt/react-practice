import React from "react";
import ReactDOM from "react-dom/client";

/*
  Header
    - Logo
    - Nav Items
  Body
    - Search
    - RestaurantContainer
      - RestaurantCard
  Footer
    - Copyright
    - Links
    - Address
    - Contact
*/

const Heading = () => {
  return (
    <div className="header">
      <div>
        <img></img>
        <ul>
          <li>Home</li>
          <li>Products</li>
          <li>About Us</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Heading />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
