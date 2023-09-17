import React from "react";
import {FaStar, FaStarHalfAlt} from "react-icons/fa";
import {AiOutlineStar} from "react-icons/ai";

import 'react-loading-skeleton/dist/skeleton.css';

const Star = ({rate=2.5, reviews=100}) => {
    const ratingStar = Array.from({length:5}, (element, index) => {
        let number = index + 0.5;
        
        return (
            <span key={index} title={rate}>
                {
                    rate >= index + 1 ? (<FaStar className="icon"/>)
                    : rate >= number ? (<FaStarHalfAlt className="icon" />)
                    : (<AiOutlineStar className="empty-icon" />)
                }
            </span>
        )

    })
    return (
        <div className="flex items-center">
            {ratingStar}
            <p className="text-xs ml-2 text-gray-500">{reviews} Customer Reviews</p>
        </div>
    );
};

export default Star;