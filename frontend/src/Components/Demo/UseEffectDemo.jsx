import React, { useEffect, useState } from "react";

const UseEffectDemo = () => {
  const [toggle, setToggle] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    console.log("UseEffect Callback");
    return () => {
      console.log("Clean Up");
    };
  }, [show]);

  return (
    <div>
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      <button onClick={() => setShow(!show)}>Show</button>
    </div>
  );
};

export default UseEffectDemo;
