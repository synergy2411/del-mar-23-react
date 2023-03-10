import React, { useState } from "react";

const UseStateDemo = () => {
  const [toggle, setToggle] = useState(false);
  const [counter, setCounter] = useState(0);
  const [result, setResult] = useState([]);

  const toggleHandler = () => setToggle(!toggle);

  const counterHandler = () => setCounter(counter + 1);

  const storeResultHandler = () =>
    setResult((prevResult) => [counter, ...prevResult]);

  return (
    <div className="text-center">
      <button className="btn btn-primary" onClick={toggleHandler}>
        Toggle
      </button>
      <button className="btn btn-primary" onClick={counterHandler}>
        Clicked : {counter}
      </button>
      <button className="btn btn-secondary" onClick={storeResultHandler}>
        Store Result
      </button>
      {toggle && <p>Some contents here...</p>}
      <hr />
      <ul>
        {result.map((r) => (
          <li>{r}</li>
        ))}
      </ul>
    </div>
  );
};

export default UseStateDemo;
