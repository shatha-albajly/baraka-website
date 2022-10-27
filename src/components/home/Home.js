import React from "react";
import Button from "../button/Button";
import "./home.css";
const Home = () => {
  return (
    <div className="home" id="home">
      <div className="title-text">
        <h1 className="title">
          <span className="black-text">Baraka </span>
          <span className="orange-text">Exchange </span>
          The First Shariya Compliant Crypto Exchange
        </h1>
        <div className="title-description">
          Welcome to the world of Baraka. Finally, an investment platform
          designed for the Muslim ummah to unlock a new world of investment
          opportunities.
        </div>
        <Button />
      </div>

      <div className="title-image">fff</div>
    </div>
  );
};

export default Home;
