import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import classes from "./Login.module.css";
import * as fromActions from "../../../store/actions/rootActions";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailIsBlurred, setEmailIsBlurred] = useState(false);
  const [emailIsValid, setEmailIsValid] = useState(false);

  const [passwordIsValid, setPasswordIsValid] = useState(false);
  const [passwordIsBlurred, setPasswordIsBlurred] = useState(false);

  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    if (!email.includes("@")) {
      return setEmailIsValid(false);
    }
    if (email.trim() === "") {
      return setEmailIsValid(false);
    }
    setEmailIsValid(true);
  }, [email]);

  useEffect(() => {
    if (password.length < 6) {
      return setPasswordIsValid(false);
    }
    setPasswordIsValid(true);
  }, [password]);

  let emailIsInvalid = !emailIsValid && emailIsBlurred;
  let passwordIsInvalid = !passwordIsValid && passwordIsBlurred;

  useEffect(() => {
    if (emailIsValid && passwordIsValid) {
      return setFormIsValid(true);
    }
    setFormIsValid(false);
  }, [emailIsValid, passwordIsValid]);

  const dispatch = useDispatch();

  const { token } = useSelector((state) => state);
  const navigate = useNavigate();

  useEffect(() => {
    if (token !== null) {
      return navigate("/the-form");
    }
  }, [token, navigate]);

  const emailChangeHandler = (event) => setEmail(event.target.value);
  const passwordChangeHandler = (event) => setPassword(event.target.value);

  const loginSubmitHandler = (event) => {
    event.preventDefault();
    dispatch(fromActions.onUserLogin(email, password));
  };

  return (
    <div className={classes["backdrop"]}>
      <div className={`card ${classes["my-style"]}`}>
        <div className="card-body">
          <div className="text-center">
            <h5 className="text-center">Login</h5>
            <form className="mb-4" onSubmit={loginSubmitHandler}>
              {/* email */}
              <div className="form-group mb-3">
                <label htmlFor="email">Email :</label>
                <input
                  type="text"
                  className="form-control form-control-sm"
                  value={email}
                  onChange={emailChangeHandler}
                  onBlur={() => setEmailIsBlurred(true)}
                />
                {emailIsInvalid && (
                  <p className="alert alert-danger">
                    Email Field is not valid. Try Again!
                  </p>
                )}
              </div>
              {/* password */}
              <div className="form-group mb-3">
                <label htmlFor="password">Password :</label>
                <input
                  type="password"
                  className="form-control form-control-sm"
                  value={password}
                  onChange={passwordChangeHandler}
                  onBlur={() => setPasswordIsBlurred(true)}
                />
                {passwordIsInvalid && (
                  <p className="alert alert-danger">
                    Password Field is not valid. Try Again!
                  </p>
                )}
              </div>
              {/* buttons */}
              <div className="row">
                <div className="col-6 offset-3">
                  <div className="d-grid">
                    <button
                      className="btn btn-success btn-sm"
                      type="submit"
                      disabled={!formIsValid}
                    >
                      Login
                    </button>
                  </div>
                </div>
              </div>
            </form>
            <p className="small">
              Create your new account{" "}
              <Link to={"/auth/sign-up"}>Click here</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
