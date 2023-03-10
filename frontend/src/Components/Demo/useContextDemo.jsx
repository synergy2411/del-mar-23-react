import React, { useContext } from "react";
import AuthContext from "../../context/auth-context";

const UseContextDemo = () => {
  const context = useContext(AuthContext);

  return (
    <div>
      <h4>User is {context.isLoggedIn ? "" : "NOT"} logged In! </h4>
    </div>
  );
};

export default UseContextDemo;
