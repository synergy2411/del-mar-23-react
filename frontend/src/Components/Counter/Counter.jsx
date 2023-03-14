import React from "react";
import { useSelector, useDispatch } from "react-redux";
import * as fromActions from "../../store/actions/rootActions";
import Result from "../Result/Result";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const increaseClickHandler = () => dispatch(fromActions.onIncrement());

  return (
    <div className="text-center">
      <p className="display-4">Counter : {counter}</p>
      <hr />
      <button className="btn btn-primary" onClick={increaseClickHandler}>
        Increase
      </button>
      <button
        className="btn btn-secondary"
        onClick={() => dispatch(fromActions.onDecrement())}
      >
        Decrease
      </button>
      <button
        className="btn btn-success"
        onClick={() => dispatch(fromActions.onAddCounter(10))}
      >
        Add (10)
      </button>
      <button
        className="btn btn-warning"
        onClick={() => dispatch(fromActions.onSubractCounter(5))}
      >
        Subtract (5)
      </button>
      <hr />
      <Result />
    </div>
  );
};

export default Counter;
