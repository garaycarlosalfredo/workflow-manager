import React from "react";
import useConfig from "../components/useConfig";
import logo from "../logo.svg";
import "../App.css";
import { StandardButton, Button2 } from "@atoms";

const Home = () => {
  const config = useConfig();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to {config.app.TITLE}</h1>
      </header>
      <p className="App-intro">
        To get started, edit <code>src/App.tsx</code> and save to reload.
      </p>
      <StandardButton></StandardButton>
      <Button2></Button2>
    </div>
  );
};

export default Home;
