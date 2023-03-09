import React, { Component } from "react";
import ExpenseForm from "./ExpenseForm/ExpenseForm";
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

  onAddNewExpense = (expense) => {
    console.log("[PARENT]", expense);
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
                {this.state.toggle ? "Hide" : "Show"}
              </button>
            </div>
          </div>
        </div>

        {this.state.toggle && (
          <ExpenseForm addNewExpense={this.onAddNewExpense} />
        )}

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
