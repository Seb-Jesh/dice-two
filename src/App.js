import React, { Component } from "react";
import "./App.css";
import RollDice from "./components/RollDice";

export default class App extends Component {
  state = {};

  render() {
    return (
      <div className="App">
        <RollDice />
      </div>
    );
  }
}
