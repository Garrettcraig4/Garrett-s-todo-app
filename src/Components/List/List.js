import React, { Component } from "react";
import { Link } from "react-router-dom";

class List extends Component {
  render() {
    return (
      <div className="List">
        <p>Item:</p>
        <input />
        <p>Item:</p>
        <input />
        <p>Item:</p>
        <input />
        <button> Done</button>
      </div>
    );
  }
}

export default List;
