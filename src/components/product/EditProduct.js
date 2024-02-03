import React from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import ProductForm from "./ProductForm";
import { editProduct } from "../../redux/actions/productActions"; // Update import statement

const EditProduct = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const handleSubmit = (productData) => {
    dispatch(editProduct(id, productData)); // Use 'editProduct'
  };

  return (
    <div>
      <h2>Edit Product</h2>
      <ProductForm onSubmit={handleSubmit} isEditing={true} />
    </div>
  );
};

export default EditProduct;
