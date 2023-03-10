import React, { useEffect, useState } from "react";
import axios from "axios";

const UseEffectDemo = () => {
  const [toggle, setToggle] = useState(false);
  const [show, setShow] = useState(false);
  const [enteredUsername, setEnteredUsername] = useState("");
  const [repos, setRepos] = useState([]);

  //   useEffect(() => {
  //     console.log("UseEffect Callback");
  //     return () => {
  //       console.log("Clean Up");
  //     };
  //   }, [show]);

  useEffect(() => {
    let notifier;
    if (enteredUsername.trim() !== "") {
      notifier = setTimeout(() => {
        axios
          .get(`https://api.github.com/users/${enteredUsername}/repos`)
          .then((response) => {
            console.log("RESPOSNE : ", response.data);
            setRepos(response.data);
          })
          .catch(console.error);
      }, 1500);
    }
    return () => {
      clearTimeout(notifier);
    };
  }, [enteredUsername]);

  return (
    <div>
      <input
        type="text"
        value={enteredUsername}
        onChange={(event) => setEnteredUsername(event.target.value)}
      />
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      <button onClick={() => setShow(!show)}>Show</button>

      <ul>
        {repos.map((repo) => (
          <li key={repo.id}>{repo.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UseEffectDemo;
