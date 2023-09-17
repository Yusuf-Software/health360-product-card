import React, { useEffect } from "react";
import ProductComponent from "./ProductComponent";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/actions/productActions"; // Import the fetchProducts action creator
import ProductComponentSkeleton from "./ProductComponentSkeleton";

const ProductListing = () => {
  const dispatch = useDispatch();

  const { products, loading } = useSelector((state) => state.allProducts);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="grid justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 my-10">
      {loading ? (
        <ProductComponentSkeleton cards={20} />
      ) : (
        products.map((product) => (
          <ProductComponent key={product.id} {...product} />
        ))
      )}
    </div>
  );
};

export default ProductListing;