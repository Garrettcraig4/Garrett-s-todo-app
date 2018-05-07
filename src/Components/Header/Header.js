import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <Link to="/">
          <a className="HeaderLinks">Home</a>
        </Link>
      </div>
    );
  }
}

export default Header;
