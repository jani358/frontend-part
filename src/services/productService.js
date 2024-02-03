import axios from "axios";

const productService = {
  addProduct: async (newProduct) => {
    try {
      const response = await axios.post("/api/products", newProduct);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default productService;
