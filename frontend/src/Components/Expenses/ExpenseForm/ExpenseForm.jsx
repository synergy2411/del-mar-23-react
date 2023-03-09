import React, { Component } from "react";

class ExpenseForm extends Component {
  state = {
    enteredTitle: "",
  };

  titleChangeHandler = (event) => {
    this.setState({ enteredTitle: event.target.value });
  };

  render() {
    return (
      <div className="row">
        <div className="col-6 offset-3">
          <div className="card">
            <div className="card-body">
              <form>
                {/* title (Controlled Component)*/}
                <div className="form-group">
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
                {/* createdAt */}
                {/* buttons : Add / Cancel*/}
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ExpenseForm;
