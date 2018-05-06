import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="HeaderLinks">
          <Link to="/">
            <p>Home</p>
          </Link>
        </div>
      </div>
    );
  }
}

export default Header;
