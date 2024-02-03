import favoriteService from "../../services/favoriteService";

// Action Types
export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";
export const REMOVE_FROM_FAVORITES = "REMOVE_FROM_FAVORITES";
export const FETCH_FAVORITES = "FETCH_FAVORITES";

// Action Creators
export const addToFavorites = (productId) => async (dispatch) => {
  try {
    const newFavorite = await favoriteService.addToFavorites(productId);
    dispatch({ type: ADD_TO_FAVORITES, payload: newFavorite });
  } catch (error) {
    // Handle error
    console.error("Error adding to favorites:", error);
  }
};

export const removeFromFavorites = (productId) => async (dispatch) => {
  try {
    await favoriteService.removeFromFavorites(productId);
    dispatch({ type: REMOVE_FROM_FAVORITES, payload: productId });
  } catch (error) {
    // Handle error
    console.error("Error removing from favorites:", error);
  }
};

export const fetchFavorites = () => async (dispatch) => {
  try {
    const favorites = await favoriteService.getFavorites();
    dispatch({ type: FETCH_FAVORITES, payload: favorites });
  } catch (error) {
    // Handle error
    console.error("Error fetching favorites:", error);
  }
};
