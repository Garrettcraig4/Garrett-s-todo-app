import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Todopopup.css";
import axios from "axios";
import swal from "sweetalert";
class Todopopup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggled1: false,
      title: "Your Todo Name"
    };
    this.toggled = this.toggled.bind(this);
    this.savetitle = this.savetitle.bind(this);
    this.toggledr = this.toggledr.bind(this);
  }
  toggled() {
    this.setState({
      toggled1: true
    });
  }

  toggledr() {
    this.setState({
      toggled1: false
    });
  }
  savetitle(input) {
    this.setState({
      title: input
    });
  }

  render() {
    return (
      <div className="Cpopup">
        <div className="box">
          <div className="stuffinbox">
            <div onClick={() => this.toggled()}>
              {this.state.toggled1 ? (
                <input
                  onChange={e => this.savetitle(e.target.value)}
                  onBlur={() => this.toggledr()}
                />
              ) : (
                <h1>{this.state.title}</h1>
              )}
            </div>

            <button className="plus">+ </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Todopopup;
