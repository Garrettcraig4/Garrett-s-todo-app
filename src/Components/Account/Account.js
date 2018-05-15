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

  checkandgetuser(email, pass) {
    axios
      .post("http://localhost:3001/api/login", { email, pass })
      .then(results => {
        console.log(results.data[0].usernames, "resdata");

        results.data, swal(`Welcome ${results.data[0].usernames}`);
      });
  }

  render() {
    return (
      <div className="Account">
        <p>Email:</p>
        <input onChange={e => this.setusere(e.target.value)} />
        <p>Password:</p>
        <input onChange={e => this.setpass(e.target.value)} />

        <button
          onClick={() =>
            this.checkandgetuser(this.state.email, this.state.pass)
          }
        >
          Login
        </button>

        <button onClick={() => this.click()}>Create Account</button>
        {this.state.toggle === true ? (
          <Cpopup
            toggle={this.click}

            // photoRef={this.props.results.photos[0].photo_reference}
          />
        ) : null}
      </div>
    );
  }
}

export default Account;
