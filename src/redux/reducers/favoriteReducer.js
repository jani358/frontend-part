import {
  ADD_TO_FAVORITES,
  REMOVE_FROM_FAVORITES,
  FETCH_FAVORITES,
} from "../actions/favoriteActions";

const initialState = [];

const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      return [...state, action.payload];
    case REMOVE_FROM_FAVORITES:
      return state.filter((favorite) => favorite.productId !== action.payload);
    case FETCH_FAVORITES:
      return action.payload;
    default:
      return state;
  }
};

export default favoriteReducer;
