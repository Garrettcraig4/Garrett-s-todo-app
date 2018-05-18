import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Todolistmaker.css";
import Todopopup from "../Todopopup/Todopopup";
class Todolistmaker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toggler: false
    };
    this.clicked = this.clicked.bind(this);
  }

  clicked() {
    this.setState({
      toggler: !this.state.toggler
    });
  }

  render() {
    return (
      <div className="Todolistmaker">
        <h1>Add new Todo-list!</h1>
        <button className="plus" onClick={() => this.clicked()}>
          {" "}
          +{" "}
        </button>

        {this.state.toggler == true ? (
          <Todopopup toggler={this.clicked} />
        ) : null}
      </div>
    );
  }
}

export default Todolistmaker;
