import { ActionTypes } from "../constants/actionTypes";

const initialState = {
  products: [],
  favorites: [],
  loading: true,
  error: null,
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    
      case ActionTypes.FETCH_PRODUCTS_REQUEST:
      // Set loading to true when the request is initiated
      return { ...state, loading: true, error: null };

    case ActionTypes.FETCH_PRODUCTS_SUCCESS:
      // Set loading to false when the data is successfully fetched
      return { ...state, products: payload, loading: false, error: null };

    case ActionTypes.FETCH_PRODUCTS_FAILURE:
      // Set loading to false and store the error message on failure
      return { ...state, loading: false, error: payload };
      
    case ActionTypes.ADD_TO_FAVORITES:
      // Check if the product ID is already in favorites to avoid duplicates
      if (!state.favorites.includes(payload)) {
        return {
          ...state,
          favorites: [...state.favorites, payload],
        };
      }
      return state; // Product already in favorites, no change

    case ActionTypes.REMOVE_FROM_FAVORITES:
      return {
        ...state,
        favorites: state.favorites.filter((id) => id !== payload),
      };

    default:
      return state;
  }
};
