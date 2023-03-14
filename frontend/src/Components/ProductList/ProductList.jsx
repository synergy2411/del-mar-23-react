import React, { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate, Navigate } from "react-router-dom";
import axios from "axios";
import classes from "./ProductList.module.css";
import { useSelector } from "react-redux";

const sortProduct = (products, isAscending) => {
  if (isAscending) {
    return products.sort((a, b) => {
      if (a.company > b.company) {
        return 1;
      } else if (a.company < b.company) {
        return -1;
      } else {
        return 0;
      }
    });
  } else {
    return products.sort((a, b) => {
      if (a.company > b.company) {
        return -1;
      } else if (a.company < b.company) {
        return 1;
      } else {
        return 0;
      }
    });
  }
};

const ProductList = () => {
  const [products, setProducts] = useState([]);

  const { token } = useSelector((state) => state.auth);

  const navigate = useNavigate();

  useEffect(() => {
    if (token !== null) {
      axios
        .get(
          "https://deloitte-react-mar23-default-rtdb.firebaseio.com/products.json?auth=" +
            token
        )
        .then((resp) => setProducts(resp.data))
        .catch(console.error);
    } else {
      navigate("/auth");
    }
  }, [token, navigate]);

  const location = useLocation();
  const query = new URLSearchParams(location.search); // Provide query parameters from URL

  const isAscending = query.get("order") === "asc";

  const onCardSelectHandler = (productId) => {
    navigate("/product-list/" + productId);
  };

  const sortClickHandler = () => {
    navigate(`/product-list?order=${isAscending ? "desc" : "asc"}`);
  };

  const sortedProducts = sortProduct(products, isAscending);

  return (
    <div>
      <div className="row mb-3">
        <div className="offset-4 col-4">
          <div className="d-grid">
            <button className="btn btn-secondary" onClick={sortClickHandler}>
              Sort {isAscending ? "Decending" : "Ascending"}
            </button>
          </div>
        </div>
      </div>
      {sortedProducts.length > 0 && (
        <div className="row">
          {sortedProducts.map((product) => (
            <div className="col-4" key={product.id}>
              <div
                className={`card ${classes["clickable"]}`}
                onClick={() => onCardSelectHandler(product.id)}
              >
                <div className="card-header">
                  <h6 className="text-center">
                    {product.company.toUpperCase()}
                  </h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <Outlet />
    </div>
  );
};

export default ProductList;
