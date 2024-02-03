import productService from "../../services/productService";

// Actions
export const ADD_PRODUCT = "ADD_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const EDIT_PRODUCT = "EDIT_PRODUCT";
export const FETCH_PRODUCTS = "FETCH_PRODUCTS";
export const SEARCH_PRODUCTS = "SEARCH_PRODUCTS"; // Added search action type

export const addProduct = (productData) => async (dispatch) => {
  try {
    // add product implementation
    const newProduct = await productService.addProduct(productData);

    dispatch({ type: ADD_PRODUCT, payload: newProduct });
  } catch (error) {
    console.error("Error adding product:", error);
  }
};

export const deleteProduct = (productId) => async (dispatch) => {
  try {
    //  delete product implementation
    await productService.deleteProduct(productId);

    dispatch({ type: DELETE_PRODUCT, payload: productId });
  } catch (error) {
    console.error("Error deleting product:", error);
  }
};

export const editProduct = (productId, productData) => async (dispatch) => {
  try {
    // edit product implementation
    const updatedProduct = await productService.editProduct(
      productId,
      productData
    );

    dispatch({ type: EDIT_PRODUCT, payload: updatedProduct });
  } catch (error) {
    console.error("Error editing product:", error);
  }
};

export const fetchProducts = () => async (dispatch) => {
  try {
    //  fetch products implementation
    const products = await productService.fetchProducts();

    dispatch({ type: FETCH_PRODUCTS, payload: products });
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};

// Search Products
export const searchProducts = (searchTerm) => async (dispatch) => {
  try {
    // search implementation
    const searchResults = await productService.searchProducts(searchTerm);

    dispatch({ type: SEARCH_PRODUCTS, payload: searchResults });
  } catch (error) {
    console.error("Error searching products:", error);
  }
};
