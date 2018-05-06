import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <h1>Garrett's Todo List Maker!!</h1>
        <Link to="/Creator">
          <button>Create A Todo List</button>
        </Link>
        <button>Past Todo Lists</button>
      </div>
    );
  }
}

export default Home;
