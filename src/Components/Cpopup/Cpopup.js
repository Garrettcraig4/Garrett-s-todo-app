import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Cpopup.css";

class Cpopup extends Component {
  render() {
    return (
      <div className="Cpopup">
        <div className="box">
          <p>Create User Name:</p>
          <input />
          <p>Create Password:</p>
          <input />
          <p>Password again:</p>
          <input />
        </div>
      </div>
    );
  }
}

export default Cpopup;
