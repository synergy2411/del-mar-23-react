import React, { Fragment } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Auth = () => {
  const navigate = useNavigate();

  const loginClickHandler = () => navigate("/auth/sign-in");
  const registerClickHandler = () => navigate("/auth/sign-up");

  return (
    <Fragment>
      <div className="row mb-4">
        <div className="col-6 offset-3">
          <p className="display-3 text-center">Ready to Proceed</p>
        </div>
      </div>
      <div className="row">
        <div className="col-6 offset-3">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-4 offset-2">
                  <div className="d-grid">
                    <button
                      className="btn btn-sm btn-secondary"
                      onClick={registerClickHandler}
                    >
                      Register
                    </button>
                  </div>
                </div>
                <div className="col-4">
                  <div className="d-grid">
                    <button
                      className="btn btn-sm btn-dark"
                      onClick={loginClickHandler}
                    >
                      Login
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Outlet />
      </div>
    </Fragment>
  );
};

export default Auth;
