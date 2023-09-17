import React from "react";
import Star from "./Star";
import Favorite from "./Favorite";
import PropTypes from "prop-types";
// skeleton
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';


const ProductComponentSkeleton = ({cards}) => {
    
  return (
    [...Array(cards)].map((x, i) =>
        <div className="card flex flex-col" key={i}>
        <div className="flex items-center gap-2 ml-4 mt-4">
        </div>

        <div className="h-[17.1rem] flex items-center self-center">
            <Skeleton width="18rem" height="19.9rem" className="mt-0 max-h-full max-w-full -z-10"/>
        </div>

        <div className="w-full mt-4 h-0.5 bg-gray-200"></div>

        <div className="p-5 flex flex-col gap-1">
        <div className="self-start">
        <span className="text-xl font-bold"><Skeleton width={70}/></span>
        </div>
        <div>
            <h2 className="product-title text-left"><Skeleton /></h2>
        </div>
        <span className="items-center mt-1">
            <Skeleton />
        </span>
        </div>
    </div>
     )
  );
};

export default ProductComponentSkeleton;