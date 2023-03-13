import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const increaseClickHandler = () => dispatch({ type: "INCREMENT" });

  return (
    <div className="text-center">
      <p className="display-4">Counter : {counter}</p>
      <hr />
      <button className="btn btn-primary" onClick={increaseClickHandler}>
        Increase
      </button>
    </div>
  );
};

export default Counter;
