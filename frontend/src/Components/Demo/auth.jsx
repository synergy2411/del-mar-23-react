import React, { Component, createRef } from "react";
import { connect } from "react-redux";
import * as fromActions from "../../store/actions/rootActions";

// import AuthContext from "../../context/auth-context";

class Auth extends Component {
  usernameInputRef = createRef();

  state = { enteredPassword: "", error: false };

  componentDidMount() {
    if (this.props.token !== null) {
      alert("Authenticated User");
    }
  }

  passwordChangeHandler = (event) =>
    this.setState({ enteredPassword: event.target.value });

  submitHandler = (event) => {
    event.preventDefault();
    if (this.usernameInputRef.current.value.trim() === "") {
      this.setState({ error: true });
      return;
    }
    if (!this.usernameInputRef.current.value.includes("@")) {
      this.setState({ error: true });
      return;
    }

    this.props.onUserLogin(
      this.usernameInputRef.current.value,
      this.state.enteredPassword
    );
    // console.log("Username :", this.usernameInputRef.current.value);s
    this.setState({ error: false });
  };

  onRegister = () => {
    this.props.onUserRegistration(
      this.usernameInputRef.current.value,
      this.state.enteredPassword
    );
  };
  render() {
    return (
      <div className="row">
        <div className="col-6 offset-3">
          <div className="card">
            <div className="card-body">
              <h5>User is {this.props.token ? "" : "NOT "} logged in!</h5>
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

                <button className="btn btn-primary" type="submit">
                  Login
                </button>
                <button
                  className="btn btn-danger"
                  type="button"
                  onClick={this.onRegister}
                >
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onUserRegistration: (email, password) =>
      dispatch(fromActions.onUserRegister(email, password)),
    onUserLogin: (email, password) =>
      dispatch(fromActions.onUserLogin(email, password)),
  };
};

const connected = connect(mapStateToProps, mapDispatchToProps);

export default connected(Auth);
