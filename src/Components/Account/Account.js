import React, { Component } from "react";
import { Link } from "react-router-dom";
import Cpopup from "../Cpopup/Cpopup";
class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false
    };
    this.click = this.click.bind(this);
  }

  click() {
    this.setState({
      toggle: !this.state.toggle
    });
  }

  render() {
    return (
      <div className="Account">
        <p>UserName</p>
        <input />
        <p>Password:</p>
        <input />

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
