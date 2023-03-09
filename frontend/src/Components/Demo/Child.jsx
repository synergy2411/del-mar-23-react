import React, { Component, PureComponent } from "react";
import Button from "./Button";

class Child extends PureComponent {
  render() {
    console.log("[Child Render]");
    return (
      <div>
        <h2>Child Component</h2>
        {this.props.toggle && <p>Some cool contents here...</p>}
        <p>Parent Value : {this.props.title} </p>
        {this.props.children}
        <Button>Add</Button>
      </div>
    );
  }
}

export default Child;

Child.defaultProps = {
  toggle: false,
  title: "Grocery",
};

// "PureComponent" will re-render the component when supplied props will change
// prevProps.title === currProps.title  => no need to re-render component

// "Component" will re-render the component no matter supplied props change or not.
