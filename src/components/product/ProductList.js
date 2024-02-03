import React, { useEffect, useState } from "react";
import productService from "../../services/productService";
import { Link } from "react-router-dom";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import StarIcon from "@material-ui/icons/Star";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productList = await productService.getProducts();
        setProducts(productList);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  //  handling edit action
  const handleEdit = (productId) => {
    //  editing a product
    console.log(`Edit product with ID: ${productId}`);
  };

  // handling delete action
  const handleDelete = (productId) => {
    //  deleting a product
    console.log(`Delete product with ID: ${productId}`);
  };

  // handling favorite action
  const handleFavorite = (productId) => {
    //  marking a product as favorite
    console.log(`Favorite product with ID: ${productId}`);
  };

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product._id}>
            <Link to={`/product/${product._id}`}>{product.productName}</Link>
            {" - "}
            Quantity: {product.quantity} - SKU: {product.sku}
            <img src={product.mainImage} alt={product.productName} />
            <button onClick={() => handleEdit(product._id)}>
              <EditIcon />
            </button>
            <button onClick={() => handleDelete(product._id)}>
              <DeleteIcon />
            </button>
            <button onClick={() => handleFavorite(product._id)}>
              <StarIcon />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
