import React, { Component } from "react";
import Child from "./Child";

class Parent extends Component {
  state = { toggle: false };

  clickHandler = () => this.setState({ toggle: !this.state.toggle });

  render() {
    console.log("Parent Render");
    return (
      <div className="text-center">
        <h1>Parent Component</h1>
        <button className="btn btn-secondary" onClick={this.clickHandler}>
          Toggle
        </button>
        <hr />
        <Child toggle={this.state.toggle} title={"Shopping"} />
        <Child>
          <h1>Hello There</h1>
        </Child>
      </div>
    );
  }
}

export default Parent;
