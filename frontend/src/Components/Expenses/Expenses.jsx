import React, { Component } from "react";

class Expenses extends Component {
  render() {
    let expense = {
      id: "e001",
      title: "travelling",
      amount: 199,
      createdAt: new Date("Dec 20, 2022"),
    };
    return (
      <div className="container">
        <h6>{expense.title.toUpperCase()}</h6>
        <p>Amount : ${expense.amount}</p>
        <p>Created At : {expense.createdAt.toLocaleString()}</p>
      </div>
    );
  }
}

export default Expenses;

{
  /* <h2 className="text-center">Expenses coming soon...</h2>
        {isAdmin ? <p> Ternary Username : {username} </p> : ""}
        {!isAdmin && <p> Short Circuit Username : {username} </p>}
        {element}
        {}
        <p>The user is {isAdmin ? "" : "NOT"} an Admin</p> */
}
