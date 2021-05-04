import React from "react";
import logo from "../logo.svg";
import "../App.css";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  let navigate = useNavigate();
  function handleClick() {
    navigate("/home");
  }
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />

      <button onClick={handleClick}>Enter Site</button>
    </header>
  );
};

export default LandingPage;
