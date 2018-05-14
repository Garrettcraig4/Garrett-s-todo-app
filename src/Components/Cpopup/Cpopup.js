import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Cpopup.css";
import axios from "axios";
import swal from "sweetalert";
class Cpopup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      usern: "",
      userp: "",
      usere: ""
    };
    this.createuser = this.createuser.bind(this);
    this.savenewusern = this.savenewusern.bind(this);
    this.savenewuserp = this.savenewuserp.bind(this);
    this.savenewusere = this.savenewusere.bind(this);
  }

  ValidateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return true;
    }
    swal("You have entered an invalid email address!");
    return false;
  }

  createuser(user, pass, email) {
    axios
      .post("http://localhost:3001/api/Createuser", { user, pass, email })
      .then(results => {
        results.data, swal("user was created go log in"), this.props.toggle();
      });
  }

  savenewusern(usern) {
    this.setState({
      usern: usern
    });
  }

  savenewuserp(userp) {
    this.setState({
      userp: userp
    });
  }

  savenewusere(usere) {
    this.setState({
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
            <button
              onClick={() =>
                this.ValidateEmail(this.state.usere)
                  ? this.createuser(
                      this.state.usern,
                      this.state.userp,
                      this.state.usere
                    )
                  : null
              }
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Cpopup;
