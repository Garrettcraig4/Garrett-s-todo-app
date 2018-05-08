import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Cpopup.css";

class Cpopup extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Cpopup">
        <div className="box">
          <div className="stuffinbox">
            <button onClick={() => this.props.toggle()}> cancolse </button>
            <h1>New Account</h1>

            <p>Create User Name:</p>
            <input />
            <p>Create Password:</p>
            <input />

            <p>Email:</p>
            <input />

            <p>create account</p>
            <button>Submit</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Cpopup;
