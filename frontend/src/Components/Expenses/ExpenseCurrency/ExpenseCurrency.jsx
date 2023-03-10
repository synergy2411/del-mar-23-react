import React, { Component } from "react";
import AuthContext from "../../../context/auth-context";

class ExpenseCurrency extends Component {
  render() {
    const formatter = new Intl.NumberFormat("en-IN", {
      currency: "INR",
      style: "currency",
    });
    const amount = formatter.format(this.props.amount);
    return (
      <AuthContext.Consumer>
        {(context) => {
          console.log("CONTEXT : ", context);
          return context.isLoggedIn && <p>Amount : {amount} </p>;
        }}
      </AuthContext.Consumer>
    );

    // ;
  }
}

export default ExpenseCurrency;
