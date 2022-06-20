import React from "react";
import Card from "./card/Card";
import "./Main.css";
function Main() {
  return (
    <div className="inner">
      <div className="main-container">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Main;
