import React from "react";
import PropTypes from "prop-types";
import Star from "./Star";
import Favorite from "./Favorite";

const ProductImage = ({ image, title, description }) => (
  <div className="relative group flex flex-col overflow-visible">
    <div className="h-[15rem] px-4 pt-1 flex items-center self-center">
      <img
        src={image}
        alt={title}
        className="max-h-full max-w-full group-hover:blur-[2px] transition-all duration-200 ease-out"
      />
    </div>
    <div className="absolute w-4/5 inset-x-0 -bottom-4 bg-sky-950 text-white p-6 opacity-0 transition-all duration-300 ease-in-out -translate-x-28 group-hover:opacity-75 group-hover:translate-x-0 rounded-tr-lg">
      <p className="max-h-14 text-sm overflow-ellipsis overflow-hidden text-gray-100">
        {description}
      </p>
    </div>
  </div>
);

const ProductPrice = ({ price }) => (
  <div className="self-start">
    {isNaN(price) || price < 0 ? (
      <span className="text-xl font-bold">Invalid price</span>
    ) : (
      <div>
        <span className="text-xl font-bold text-blue-500">$</span>
        <span className="text-xl font-bold">{price}</span>
      </div>
    )}
  </div>
);

const ProductComponent = ({ id, title, image, price, description, rating, category }) => {
  const rate = rating.rate;
  const count = rating.count;

  return (
    <div className="card flex flex-col">
      <div className="flex items-center gap-2 ml-4 mt-4">
        <span className="badge capitalize">{category}</span>
        <Favorite productId={id} />
      </div>

      <ProductImage image={image} title={title} description={description} />

      <div className="w-full mt-4 h-0.5 bg-gray-200"></div>

      <div className="p-5 flex flex-col gap-1">
        <ProductPrice price={price} />

        <div>
          <h2 className="product-title text-left" title={title}>
            {title}
          </h2>
        </div>

        <span className="items-center mt-1">
          <Star rate={rate} reviews={count} />
        </span>
      </div>
    </div>
  );
};

ProductImage.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

ProductPrice.propTypes = {
  price: PropTypes.number.isRequired,
};

ProductComponent.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  rating: PropTypes.shape({
    rate: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
  }).isRequired,
  category: PropTypes.string.isRequired,
};

ProductComponent.defaultProps = {
  description: 'No description available',
  category: 'None',
};

export default ProductComponent;