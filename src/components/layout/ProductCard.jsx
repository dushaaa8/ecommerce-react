import React from 'react';
import StarIcon from '../../assets/icons/star.svg?react'

const ProductCard = ({product}) => {
    return (
        <div className="group flex flex-col gap-3 cursor-pointer">
            <div className="relative bg-neutral-02 p-10">
                <span className="absolute top-4 left-4 bg-white px-[14px] py-[4px] rounded-md uppercase font-bold text-[16px]">New</span>
                <img src={product.image} alt={product.title} className="max-h-full object-contain transition-transform duration-500 group-hover:scale-110"/>
                <button className="w-[90%] absolute bottom-4 left-1/2 -translate-x-1/2 text-neutral-01 bg-neutral-07 py-2 rounded-md cursor-pointer font-medium text-base opacity-0 group-hover:opacity-100 transition-all duration-200 translate-y-4 group-hover:translate-y-0">Add to cart</button>
            </div>
            <div className="flex flex-col gap-[2px]">
                <span className="text-neutral-07 text-lg">
                    {"★".repeat(Math.round(product.rating.rate))}
                    <span className="text-neutral-04">{"★".repeat(Math.round(5-product.rating.rate))}</span>
                </span>
                <span className="font-semibold text-base text-neutral-07">{product.title}</span>
                <span className="text-sm font-semibold">${product.price}</span>
            </div>
        </div>
    );
};

export default ProductCard;