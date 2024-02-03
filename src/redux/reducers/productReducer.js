import {
  FETCH_PRODUCTS,
  ADD_PRODUCT,
  EDIT_PRODUCT,
  DELETE_PRODUCT,
} from "../actions/productActions";

const initialState = [];

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return action.payload;
    case ADD_PRODUCT:
      return [...state, action.payload];
    case EDIT_PRODUCT:
      return state.map((product) =>
        product._id === action.payload._id ? action.payload : product
      );
    case DELETE_PRODUCT:
      return state.filter((product) => product._id !== action.payload);
    default:
      return state;
  }
};

export default productReducer;
