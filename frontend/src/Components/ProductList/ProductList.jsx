import React, { useEffect, useState } from "react";
import axios from "axios";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://deloitte-react-mar23-default-rtdb.firebaseio.com/products.json"
      )
      .then((resp) => setProducts(resp.data))
      .catch(console.error);
  }, []);
  return (
    <div>
      <h4>Product list coming soon...</h4>

      {products.length > 0 && (
        <div className="row">
          {products.map((product) => (
            <div className="col-4" key={product.id}>
              <div className="card">
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
    </div>
  );
};

export default ProductList;
