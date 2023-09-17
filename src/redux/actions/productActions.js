import { ActionTypes } from "../constants/actionTypes";
import axios from "axios";

export const fetchProducts = () => {
  return async (dispatch) => {
    dispatch({ type: ActionTypes.FETCH_PRODUCTS_REQUEST });
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      dispatch({ type: ActionTypes.FETCH_PRODUCTS_SUCCESS, payload: response.data });
    } catch (err) {
      alert(err.message)
      dispatch({ type: ActionTypes.FETCH_PRODUCTS_FAILURE, payload: err.message });
    }
  };
};

export const addToFavorites = (itemId) => ({
  type: ActionTypes.ADD_TO_FAVORITES,
  payload: itemId,
});

export const removeFromFavorites = (itemId) => ({
  type: ActionTypes.REMOVE_FROM_FAVORITES,
  payload: itemId,
});
