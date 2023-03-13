import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link className="nav-link" to="/auth">
            Login
          </Link>
        </li>
        <li className="nav-items">
          <Link className="nav-link" to="/expenses">
            Expenses
          </Link>
        </li>
        <li className="nav-items">
          <Link className="nav-link" to="/product-list">
            Products
          </Link>
        </li>
        <li className="nav-items">
          <Link className="nav-link" to="/counter">
            Counter
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
