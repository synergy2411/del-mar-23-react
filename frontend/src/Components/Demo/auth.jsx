import React, { Component, createRef } from "react";
import AuthContext from "../../context/auth-context";

class Auth extends Component {
  usernameInputRef = createRef();

  state = { enteredPassword: "", error: false };

  passwordChangeHandler = (event) =>
    this.setState({ enteredPassword: event.target.value });

  render() {
    return (
      <AuthContext.Consumer>
        {(context) => {
          const submitHandler = (event) => {
            event.preventDefault();
            if (this.usernameInputRef.current.value.trim() === "") {
              this.setState({ error: true });
              return;
            }
            if (!this.usernameInputRef.current.value.includes("@")) {
              this.setState({ error: true });
              return;
            }
            console.log("Username :", this.usernameInputRef.current.value);
            console.log("Password :", this.state.enteredPassword);
            this.setState({ error: false });
            context.setIsLoggedIn(true);
          };

          const logoutHandler = () => context.setIsLoggedIn(false);

          return (
            <div className="row">
              <div className="col-6 offset-3">
                <div className="card">
                  <div className="card-body">
                    <h4 className="text-center">Login / Registration Form</h4>
                    <form onSubmit={submitHandler}>
                      {/* username - uncontrolled component*/}
                      <div className="form-group mb-2">
                        <label htmlFor="username">Username/Email :</label>
                        <input
                          type="text"
                          name="username"
                          className="form-control"
                          ref={this.usernameInputRef}
                        />

                        {this.state.error && (
                          <div className="alert alert-danger">
                            <p>Something wrong with Username field</p>
                          </div>
                        )}
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
                      {!context.isLoggedIn && (
                        <button className="btn btn-primary" type="submit">
                          Login
                        </button>
                      )}
                      {context.isLoggedIn && (
                        <button
                          className="btn btn-danger"
                          type="button"
                          onClick={logoutHandler}
                        >
                          Logout
                        </button>
                      )}
                    </form>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </AuthContext.Consumer>
    );
  }
}

export default Auth;
