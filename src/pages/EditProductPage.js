import React from "react";
import { useParams } from "react-router-dom";
import EditProduct from "../components/product/EditProduct";

const EditProductPage = () => {
  const { productId } = useParams();

  return (
    <div>
      <h2>Edit Product Page</h2>
      <EditProduct productId={productId} />
    </div>
  );
};

export default EditProductPage;
