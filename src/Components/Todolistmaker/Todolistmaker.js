import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Todolistmaker.css";

class Todolistmaker extends Component {
  render() {
    return (
      <div className="Todolistmaker">
        <button className="plus"> + </button>
      </div>
    );
  }
}

export default Todolistmaker;
