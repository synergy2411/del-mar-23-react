import React, { Component } from "react";

class Expenses extends Component {
  render() {
    let expenses = [
      {
        id: "e001",
        title: "travelling",
        amount: 199,
        createdAt: new Date("Dec 20, 2022"),
      },
      {
        id: "e002",
        title: "food",
        amount: 19,
        createdAt: new Date("Aug 2, 2022"),
      },
    ];
    return (
      <div className="container">
        <h6>{expenses[0].title.toUpperCase()}</h6>
        <p>Amount : ${expenses[0].amount}</p>
        <p>Created At : {expenses[0].createdAt.toLocaleString()}</p>

        <h6>{expenses[1].title.toUpperCase()}</h6>
        <p>Amount : ${expenses[1].amount}</p>
        <p>Created At : {expenses[1].createdAt.toLocaleString()}</p>
      </div>
    );
  }
}

export default Expenses;

// eslint-disable-next-line no-lone-blocks
{
  /* <h2 className="text-center">Expenses coming soon...</h2>
        {isAdmin ? <p> Ternary Username : {username} </p> : ""}
        {!isAdmin && <p> Short Circuit Username : {username} </p>}
        {element}
        {}
        <p>The user is {isAdmin ? "" : "NOT"} an Admin</p> */
}

// npm install bootstrap
