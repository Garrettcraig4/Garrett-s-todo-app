import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Todopopup.css";
import axios from "axios";
import swal from "sweetalert";
import List from "../List/List";
class Todopopup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggled1: false,
      title: "Your Todo Name",
      toggled2: false,
      useri: 4
    };
    this.toggled = this.toggled.bind(this);
    this.savetitle = this.savetitle.bind(this);
    this.toggledr = this.toggledr.bind(this);
    this.newtoggle = this.newtoggle.bind(this);
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

  newtoggle() {
    this.setState({
      toggled2: true
    });
  }

  render() {
    return (
      <div className="Cpopup">
        <div className="box">
          <div className="stuffinbox">
            <button onClick={() => this.props.toggler()}>d</button>
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

            <button className="plus" onClick={() => this.newtoggle()}>
              +{" "}
            </button>

            {this.state.toggled2 ? <List /> : null}
          </div>
        </div>
      </div>
    );
  }
}

export default Todopopup;
