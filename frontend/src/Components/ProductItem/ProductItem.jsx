import React from "react";
import { useParams } from "react-router-dom";

const ProductItem = () => {
  const { productId } = useParams();
  console.log("Product ID : ", productId);
  return (
    <div>
      <h5>product citem coming soon...</h5>
    </div>
  );
};

export default ProductItem;
