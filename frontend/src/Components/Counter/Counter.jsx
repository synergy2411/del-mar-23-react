import React from "react";
import { useSelector } from "react-redux";

const Counter = () => {
  const counter = useSelector((state) => state.counter);

  return (
    <div>
      <p className="display-4">Counter : {counter}</p>
    </div>
  );
};

export default Counter;
