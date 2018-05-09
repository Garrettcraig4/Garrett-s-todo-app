import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Cpopup.css";
import axios from "axios";
class Cpopup extends Component {
  constructor(props) {
    super(props);
  }

  createuser(user, pass) {
    axios.post("/api/Createuser", { user, pass }).then(results => {
      results.data, alert("user was created go log in");
    });
  }

  render() {
    return (
      <div className="Cpopup">
        <div className="box">
          <div className="stuffinbox">
            <button onClick={() => this.props.toggle()}> Close </button>
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
