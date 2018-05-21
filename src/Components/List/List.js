import React, { Component } from "react";
import { Link } from "react-router-dom";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userinput: 4
    };
    this.renders = this.renders.bind(this);
  }
  renders(useri) {
    for (let i = 0; i < useri; i++) {
      return (
        <div className="List">
          <p>item:</p>
          <input />
        </div>
      );
    }
  }

  //loop over user amount

  render() {
    return (
      <div className="List">
        {this.renders(this.state.userinput)}

        <p />
      </div>
    );
  }
}

export default List;
