import axios from "../utils/api";

const favoriteService = {
  addToFavorites: async (productId) => {
    try {
      const response = await axios.post("/api/favorites", { productId });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  removeFromFavorites: async (productId) => {
    try {
      const response = await axios.delete(`/api/favorites/${productId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  getFavorites: async () => {
    try {
      const response = await axios.get("/api/favorites");
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default favoriteService;
