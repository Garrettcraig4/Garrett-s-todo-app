import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <h1 className="title">Garrett's Todo List Maker</h1>

        <Link to="/Creator">
          <button className="homebutton">Create A Todo List</button>
        </Link>

        <Link to="/History">
          <button className="homebutton">Past Todo Lists</button>
        </Link>
        <div className="des">
          <h3>Create a todo list and get those tasks done!!!! </h3>
          <p>
            With Garrett's Todo List Creator it's easy to get the things you
            need to do complete.
          </p>
          <h1>With easy methods to get you motavated </h1>
          <ul>
            <li className="red">Colors!!!</li>
            <li>Messages</li>
            <li>and more </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Home;
