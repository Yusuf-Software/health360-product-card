// Favorite.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaHeart } from "react-icons/fa";
import { addToFavorites, removeFromFavorites } from "../redux/actions/productActions";

const Favorite = ({ productId }) => {
  const favorites = useSelector((state) => state.allProducts.favorites);
  const dispatch = useDispatch();

  const isFavorite = favorites.includes(productId);

  const toggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites(productId));
    } else {
      dispatch(addToFavorites(productId));
    }
  };

  return (
    <button className="ml-auto mr-4 button-primary" onClick={toggleFavorite}>
      {isFavorite ? (
        <FaHeart className="transition-all w-5 m-1 text-blue-500" /> // Show filled heart if in favorites
      ) : (
        <FaHeart className="transition-all w-5 m-1" /> // Show outline heart if not in favorites
      )}
    </button>
  );
};

export default Favorite;