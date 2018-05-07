import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Account.css";

class Account extends Component {
  render() {
    return (
      <div className="Account">
        <p>UserName</p>
        <input />
        <p>Password:</p>
        <input />

        <a>Create Account</a>
      </div>
    );
  }
}

export default Account;
