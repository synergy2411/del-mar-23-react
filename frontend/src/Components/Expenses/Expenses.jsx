import React, { Component } from "react";
import ExpenseItem from "./ExpenseItem/ExpenseItem";

class Expenses extends Component {
  state = {
    toggle: false,
  };

  showClickHandler = () => {
    console.log("Clicked");
    this.setState({ toggle: !this.state.toggle });
    // this.state.toggle = !this.state.toggle;          // NEVER EVER CHANGE STATE MUTATIVELY
  };
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
        createdAt: new Date("Aug 2, 2021"),
      },
      {
        id: "e003",
        title: "shopping",
        amount: 249,
        createdAt: new Date("Nov 12, 2020"),
      },
    ];
    return (
      <div className="container">
        <div className="row">
          <div className="col-4 offset-4 mb-3">
            <div className="d-grid">
              <button className="btn btn-dark" onClick={this.showClickHandler}>
                Show/Hide
              </button>
            </div>
          </div>
        </div>

        {this.state.toggle && <p>This content will be toggled</p>}

        <div className="row">
          <ExpenseItem exp={expenses[0]} />
          <ExpenseItem exp={expenses[1]} />
          <ExpenseItem exp={expenses[2]} />
        </div>
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
