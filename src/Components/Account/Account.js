import React, { Component } from "react";
import { Link } from "react-router-dom";
import Cpopup from "../Cpopup/Cpopup";
import "./Account.css";
import axios from "axios";
import swal from "sweetalert";
class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false,
      email: "",
      pass: ""
    };
    this.click = this.click.bind(this);
    this.setusere = this.setusere.bind(this);
    this.setpass = this.setpass.bind(this);
    this.checkandgetuser = this.checkandgetuser.bind(this);
    this.showpass = this.showpass.bind(this);
  }

  click() {
    this.setState({
      toggle: !this.state.toggle
    });
  }

  setusere(input) {
    this.setState({
      email: input
    });
  }

  setpass(inputs) {
    this.setState({
      pass: inputs
    });
  }

  showpass() {
    let x = document.getElementById("myInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

  checkandgetuser(email, pass) {
    axios
      .post("http://localhost:3001/api/login", { email, pass })
      .then(results => {
        !results.data[0] === true
          ? swal("Email or Password is invalid Please try again.")
          : swal(`Welcome ${results.data[0].usernames}`);
      });
  }

  render() {
    return (
      <div className="Account">
        <p>Email:</p>
        <input onChange={e => this.setusere(e.target.value)} />
        <p>Password:</p>
        <input
          onChange={e => this.setpass(e.target.value)}
          type="password"
          id="myInput"
        />
        <button onclick={() => this.showpass()}>show pass </button>
        <div className="accbuttons">
          <button
            onClick={() =>
              this.checkandgetuser(this.state.email, this.state.pass)
            }
          >
            Login
          </button>

          <button onClick={() => this.click()}>Create Account</button>
          {this.state.toggle === true ? <Cpopup toggle={this.click} /> : null}
        </div>
      </div>
    );
  }
}

export default Account;
