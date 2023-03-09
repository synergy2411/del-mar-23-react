import React, { Component } from "react";

class LifeCycle extends Component {
  constructor() {
    super();
    console.log("constructor");
    this.state = {
      toggle: false,
    };
  }
  componentDidMount() {
    console.log("componentDidMount");
  }
  shouldComponentUpdate() {
    const rnd = Math.round(Math.random() * 10);
    console.log("shouldComponentUpdate", rnd);
    return rnd > 5 ? true : false;
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  toggleChangeHandler = () => this.setState({ toggle: !this.state.toggle });

  render() {
    console.log("render");
    return (
      <div>
        <h4>Life cycle Demo</h4>
        <button className="btn btn-primary" onClick={this.toggleChangeHandler}>
          Toggle
        </button>
        {this.state.toggle && <p>Toggled</p>}
      </div>
    );
  }
}

export default LifeCycle;
