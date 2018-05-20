import React, { Component } from "react";
import { Link } from "react-router-dom";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="List">
        <p>item one:</p>
        <input />
        <p>item two:</p>
        <input />
      </div>
    );
  }
}

export default List;
