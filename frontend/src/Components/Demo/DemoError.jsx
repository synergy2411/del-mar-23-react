import React, { useState } from "react";

const DemoError = () => {
  const [counter, setCounter] = useState(0);

  if (counter > 3) {
    throw new Error("Too large value");
  }

  return (
    <div>
      <h2>Semo Error Component</h2>
      <button onClick={() => setCounter(counter + 1)}>{counter}</button>
    </div>
  );
};

export default DemoError;
