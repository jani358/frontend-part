import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductDetailPage = () => {
  // Get the product ID from the URL
  const { id } = useParams();

  // Redux store based on the ID
  const product = useSelector((state) =>
    state.products.find((p) => p._id === id)
  );

  //  product is not found, display a message
  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h2>{product.productName}</h2>
      <p>{product.productDescription}</p>
      <p>SKU: {product.sku}</p>
      <p>Price: ${product.price}</p>
    </div>
  );
};

export default ProductDetailPage;
