import React, { Component } from "react";

import Die from "./Die";

class RollDice extends Component {
  static defaultProps = {
    dices: ["one", "two", "three", "four", "five", "six"]
  };
  constructor(props) {
    super(props);
    this.state = {
      dice1: "one",
      dice2: "one",
      isRolling: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = e => {
    let die1 = Math.floor(Math.random() * this.props.dices.length);
    let die2 = Math.floor(Math.random() * this.props.dices.length);
    let num1 = this.props.dices[die1];
    let num2 = this.props.dices[die2];

    this.setState({ dice1: num1, dice2: num2, isRolling: true });

    setTimeout(() => {
      this.setState({ isRolling: false });
    }, 1000);
  };

  render() {
    return (
      <div>
        <div className="Roll-Dice">
          <Die num={this.state.dice1} shake={this.state.isRolling} />
          <Die num={this.state.dice2} shake={this.state.isRolling} />
        </div>
        <div>
          <button
            onClick={this.handleClick}
            className="btn btn-primary btn-lg mt-4"
            disabled={this.state.isRolling}
          >
            {this.state.isRolling ? "Rolling..." : "Roll Dice"}
          </button>
        </div>
      </div>
    );
  }
}

export default RollDice;
