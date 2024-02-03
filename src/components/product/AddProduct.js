import React, { useState } from "react";
import productService from "../../services/productService";
import {
  TextField,
  Button,
  Typography,
  Grid,
  Container,
  Box,
} from "@mui/material";

const AddProduct = () => {
  const [product, setProduct] = useState({
    sku: "",
    productName: "",
    images: [],
    price: 0,
  });

  const handleInputChange = (field) => (event) => {
    setProduct({ ...product, [field]: event.target.value });
  };

  const handleImageChange = (e) => {
    // Handle multiple image uploads
    const files = Array.from(e.target.files);
    setProduct({ ...product, images: [...product.images, ...files] });
  };

  const handleAddProduct = async () => {
    try {
      //  service to add the product
      await productService.addProduct(product);

      setProduct({
        sku: "",
        productName: "",
        images: [],
        price: 0,
      });

      // Alert for successful
      alert("Product added successfully!");
    } catch (error) {
      console.error("Error adding product:", error);
      // Alert for error
      alert("Error adding product. Please try again.");
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Add new product
      </Typography>
      <form>
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
          <Button
            variant="contained"
            color="primary"
            onClick={handleAddProduct}
          >
            Add Product
          </Button>
        </Box>
      </form>
    </Container>
  );
};

export default AddProduct;
