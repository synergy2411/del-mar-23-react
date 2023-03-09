import React, { Component } from "react";

class ExpenseCurrency extends Component {
  render() {
    const formatter = new Intl.NumberFormat("en-IN", {
      currency: "INR",
      style: "currency",
    });
    const amount = formatter.format(this.props.amount);
    return <p>Amount : {amount}</p>;
  }
}

export default ExpenseCurrency;
