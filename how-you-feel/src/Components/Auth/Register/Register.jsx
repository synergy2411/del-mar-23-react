import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import * as fromActions from "../../../store/actions/rootActions";

import classes from "./Register.module.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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

  const registerSubmitHandler = (event) => {
    event.preventDefault();
    dispatch(fromActions.onUserRegister(email, password));
  };

  return (
    <div className={classes["backdrop"]}>
      <div className={`card ${classes["my-style"]}`}>
        <div className="card-body">
          <div className="text-center">
            <h5 className="text-center">Please Share Your details</h5>
            <form className="mb-4" onSubmit={registerSubmitHandler}>
              {/* email */}
              <div className="form-group mb-3">
                <label htmlFor="email">Email :</label>
                <input
                  type="text"
                  className="form-control form-control-sm"
                  value={email}
                  onChange={emailChangeHandler}
                />
              </div>
              {/* password */}
              <div className="form-group mb-3">
                <label htmlFor="password">Password :</label>
                <input
                  type="password"
                  className="form-control form-control-sm"
                  value={password}
                  onChange={passwordChangeHandler}
                />
              </div>
              {/* button */}
              <div className="row">
                <div className="col-6 offset-3">
                  <div className="d-grid">
                    <button className="btn btn-primary btn-sm" type="submit">
                      Create
                    </button>
                  </div>
                </div>
              </div>
            </form>
            <p className="small">
              Already registered? <Link to={"/auth/sign-in"}>Login here</Link> .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
