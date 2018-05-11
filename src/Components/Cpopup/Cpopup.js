import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Cpopup.css";
import axios from "axios";
class Cpopup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      usern: "",
      userp: "",
      usere: ""
    };
  }

  createuser(user, pass, email) {
    axios.post("/api/Createuser", { user, pass }).then(results => {
      results.data, alert("user was created go log in");
    });
  }

  savenewusern(usern) {
    this.setstate({
      usern: usern
    });
  }

  savenewuserp(userp) {
    this.setstate({
      userp: userp
    });
  }

  savenewusere(usere) {
    this.setstate({
      usere: usere
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
            <input onChange={e => this.savenewusern(e.target.value)} />
            <p>Create Password:</p>
            <input onChange={e => this.savenewuserp(e.target.value)} />

            <p>Email:</p>
            <input onChange={e => this.savenewusere(e.target.value)} />

            <p>create account</p>
            <button>Submit</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Cpopup;
