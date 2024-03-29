import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import classes from "./Alert.module.css";
import * as fromActions from "../../store/actions/rootActions";

const Alert = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const btnClickHandler = () => {
    dispatch(fromActions.onUserLogout());
    setTimeout(() => {
      navigate("/auth");
    }, 1200);
  };
  return (
    <div className={classes["backdrop"]}>
      <div className={classes["my-style"]}>
        <div className="container">
          <div className="p-3">
            <p className="m-4 ">
              Thanks for sharing your thoughts with us. Hope you enjoyed it! ☺
            </p>

            <div className="row">
              <div className="col-8 offset-2">
                <div className="d-grid">
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={btnClickHandler}
                  >
                    <strong> Yes, I enjoyed it. ♥</strong>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alert;
