import React, { Component, createRef } from "react";

class Auth extends Component {
  usernameInputRef = createRef();

  state = { enteredPassword: "" };

  passwordChangeHandler = (event) =>
    this.setState({ enteredPassword: event.target.value });

  submitHandler = (event) => {
    event.preventDefault();
    console.log("Username :", this.usernameInputRef.current.value);
    console.log("Password :", this.state.enteredPassword);
  };

  render() {
    return (
      <div className="row">
        <div className="col-6 offset-3">
          <div className="card">
            <div className="card-body">
              <h4 className="text-center">Login / Registration Form</h4>
              <form onSubmit={this.submitHandler}>
                {/* username - uncontrolled component*/}
                <div className="form-group mb-2">
                  <label htmlFor="username">Username/Email :</label>
                  <input
                    type="text"
                    name="username"
                    className="form-control"
                    ref={this.usernameInputRef}
                  />
                </div>
                {/* password - controlled component */}
                <label htmlFor="password">Password :</label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  value={this.state.enteredPassword}
                  onChange={this.passwordChangeHandler}
                />
                {/* buttons - login / registration */}
                <button className="btn btn-primary" type="submit">
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Auth;
