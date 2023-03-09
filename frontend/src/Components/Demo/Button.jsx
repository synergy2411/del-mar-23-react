import React, { Component } from "react";
import classes from "./Button.module.css";

class Button extends Component {
  render() {
    return (
      <button className={classes["my-btn"]} {...this.props}>
        {this.props.children}
      </button>
    );
  }
}

export default Button;

// <Button className="form-control" name="my-button" id="btnSave" >Save</Button>

// <Button />
