import React, { useState } from "react";
import { useDispatch } from "react-redux";

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

// class Login extends React.Component {
//   state = {enteredUsername : ""};

//   submitHandler = () => {
//     this.setState({enteredUsername : "New Username"})
//   }
// }
// import * as fromActions from '../../store/actions/rootActions';

const Login = () => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  const dispatch = useDispatch();

  const submitHandler = () => {
    console.log(enteredUsername, enteredPassword);
    // dispatch(fromActions.onUserLogin(enteredUsername, enteredPassword))
  };

  return (
    <div className="container">
      <form onSubmit={submitHandler}>
        {/* username */}
        <label htmlFor="username">USername :</label>
        <input
          type="text"
          value={enteredUsername}
          onChange={(event) => setEnteredUsername(event.target.value)}
        />
        {/* password */}
        <label htmlFor="password">Password :</label>
        <input
          type="text"
          value={enteredPassword}
          onChange={(event) => setEnteredPassword(event.target.value)}
        />
        {/* button */}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
