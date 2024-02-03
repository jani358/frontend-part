import React, { useState, useEffect } from "react";
import {
  TextField,
  Button,
  Typography,
  Grid,
  Container,
  Box,
} from "@mui/material";

const ProductForm = ({ onSubmit, isEditing, initialProductData }) => {
  const [product, setProduct] = useState({
    sku: "",
    productName: "",
    images: [],
    price: 0,
  });

  useEffect(() => {
    if (isEditing) {
      setProduct(initialProductData);
    }
  }, [isEditing, initialProductData]);

  const handleInputChange = (field) => (event) => {
    setProduct({ ...product, [field]: event.target.value });
  };

  const handleImageChange = (e) => {
    // Handle multiple image uploads
    const files = Array.from(e.target.files);
    setProduct({ ...product, images: [...product.images, ...files] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(product);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        {isEditing ? "Edit Product" : "Add new product"}
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="SKU"
              value={product.sku}
              onChange={handleInputChange("sku")}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Product Name"
              value={product.productName}
              onChange={handleInputChange("productName")}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Price"
              value={product.price}
              onChange={handleInputChange("price")}
            />
          </Grid>
        </Grid>

        <Box mt={2}>
          <Typography variant="h6" gutterBottom>
            Product Images
          </Typography>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            multiple
          />
        </Box>

        <Box mt={3}>
          <Button variant="contained" color="primary" type="submit">
            {isEditing ? "Edit Product" : "Add Product"}
          </Button>
        </Box>
      </form>
    </Container>
  );
};

export default ProductForm;
