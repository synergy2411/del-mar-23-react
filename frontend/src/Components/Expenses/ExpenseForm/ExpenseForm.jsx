import React, { Component } from "react";

class ExpenseForm extends Component {
  state = {
    enteredTitle: "",
    enteredAmount: "",
    enteredCreatedAt: "",
  };

  titleChangeHandler = (event) =>
    this.setState({ enteredTitle: event.target.value });
  amountChangeHandler = (event) =>
    this.setState({ enteredAmount: event.target.value });
  createdAtChangeHandler = (event) =>
    this.setState({ enteredCreatedAt: event.target.value });

  render() {
    return (
      <div className="row">
        <div className="col-6 offset-3">
          <div className="card">
            <div className="card-body">
              <form>
                {/* title (Controlled Component)*/}
                <div className="form-group mb-2">
                  <label htmlFor="title">Title :</label>
                  <input
                    type="text"
                    className="form-control"
                    name="title"
                    value={this.state.enteredTitle}
                    onChange={this.titleChangeHandler}
                  />
                </div>
                {/* amount */}
                <div className="form-group mb-2">
                  <label htmlFor="amount">Amount :</label>
                  <input
                    type="number"
                    className="form-control"
                    name="amount"
                    value={this.state.enteredAmount}
                    onChange={this.amountChangeHandler}
                    min="0.1"
                    step="0.1"
                  />
                </div>
                {/* createdAt */}
                <div className="form-group mb-2">
                  <label htmlFor="createdAt">Date :</label>
                  <input
                    type="date"
                    className="form-control"
                    name="createdAt"
                    value={this.state.enteredCreatedAt}
                    onChange={this.createdAtChangeHandler}
                    min="2020-04-01"
                    max="2023-03-31"
                  />
                </div>
                {/* buttons : Add / Cancel*/}
                <div className="form-group mb-1">
                  <div className="row">
                    <div className="col">
                      <div className="d-grid">
                        <button className="btn btn-primary">Add</button>
                      </div>
                    </div>
                    <div className="col">
                      <div className="d-grid">
                        <button className="btn btn-light">Cancel</button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ExpenseForm;
