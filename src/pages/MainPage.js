import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import AddIcon from "@material-ui/icons/Add";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import productService from "../services/productService";
import Box from "@material-ui/core/Box";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import StarIcon from "@material-ui/icons/Star";

const useStyles = makeStyles((theme) => ({}));

const MainPage = () => {
  const classes = useStyles();
  const [searchTerm, setSearchTerm] = useState("");
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

  const handleSearch = async () => {
    try {
      const searchResults = await productService.searchProducts(searchTerm);
      setProducts(searchResults);
    } catch (error) {
      console.error("Error searching products:", error);
    }
  };

  return (
    <div>
      <h2>Main Page</h2>
      <Paper className={classes.root}>
        <TextField
          className={classes.search}
          label="Search"
          variant="outlined"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <IconButton onClick={handleSearch}>
          <SearchIcon />
        </IconButton>
        <Box className={classes.addProduct}>
          <div className={classes.adminText}>ADMIN</div>
          <IconButton className={classes.expandIcon}>
            {/* Add your expand icon here */}
          </IconButton>
        </Box>
      </Paper>
      <TableContainer component={Paper} className={classes.tableContainer}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>SKU</TableCell>
              <TableCell>PRODUCT NAME</TableCell>
              <TableCell>PRICE</TableCell>
              <TableCell>IMAGE</TableCell>
              <TableCell>ACTIONS</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product._id}>
                <TableCell>{product.sku}</TableCell>
                <TableCell>{product.productName}</TableCell>
                <TableCell>{product.price}</TableCell>
                <TableCell>
                  <img
                    src={product.imageUrl}
                    alt="Product"
                    style={{ maxWidth: "50px", maxHeight: "50px" }}
                  />
                </TableCell>
                <TableCell>
                  <IconButton>
                    <DeleteIcon />
                  </IconButton>
                  <IconButton>
                    <EditIcon />
                  </IconButton>
                  <IconButton>
                    <StarIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default MainPage;
