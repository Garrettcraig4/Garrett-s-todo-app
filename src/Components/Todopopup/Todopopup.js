import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Todopopup.css";
import axios from "axios";
import swal from "sweetalert";
class Todopopup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggled1: false
    };
    this.toggled = this.toggled.bind(this);
  }
  toggled() {
    this.setState({
      toggled1: true
    });
  }

  render() {
    return (
      <div className="Cpopup">
        <div className="box">
          <div className="stuffinbox">
            <div onClick={() => this.toggled()}>
              {this.state.toggled1 ? <input /> : <h1>todo title</h1>}
            </div>

            <button className="plus">+ </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Todopopup;
