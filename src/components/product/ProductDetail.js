import React, { useEffect, useState } from "react";
import productService from "../../services/productService";

const ProductDetail = ({ productId }) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        // Fetch product details based on the productId
        const productDetails = await productService.getProductDetails(
          productId
        );
        setProduct(productDetails);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchProductDetails();
  }, [productId]);

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h3>Product Details</h3>
      <p>SKU: {product.sku}</p>
      <p>Product Name: {product.productName}</p>
      <p>Price: {product.price}</p>
      <p>Product Description: {product.productDescription}</p>
      <p>Images:</p>
      <div>
        {product.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Product ${index + 1}`}
            style={{ maxWidth: "100px", maxHeight: "100px" }}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductDetail;
