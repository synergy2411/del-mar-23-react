import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const { token } = useSelector((state) => state.auth);

  return (
    <div>
      <ul className="nav nav-tabs">
        {token === null && (
          <li className="nav-item">
            <Link className="nav-link" to="/auth">
              Login/Register
            </Link>
          </li>
        )}
        <li className="nav-items">
          <Link className="nav-link" to="/expenses">
            Expenses
          </Link>
        </li>
        {token !== null && (
          <li className="nav-items">
            <Link className="nav-link" to="/product-list">
              Products
            </Link>
          </li>
        )}
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
