import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import axios from "axios";
import classes from "./ProductList.module.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(
        "https://deloitte-react-mar23-default-rtdb.firebaseio.com/products.json"
      )
      .then((resp) => setProducts(resp.data))
      .catch(console.error);
  }, []);

  const onCardSelectHandler = (productId) => {
    navigate("/product-list/" + productId);
  };
  return (
    <div>
      {products.length > 0 && (
        <div className="row">
          {products.map((product) => (
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
