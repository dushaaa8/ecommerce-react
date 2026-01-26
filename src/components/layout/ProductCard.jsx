import React from 'react';

const ProductCard = ({product}) => {
    return (
        <div className="group flex flex-col gap-3 cursor-pointer">
            <div className="relative bg-neutral-02 p-10">
                <span className="absolute top-4 left-4 bg-white px-[14px] py-[4px] rounded-md uppercase font-bold text-[16px]">New</span>
                <img src={product.image} alt={product.title} className="max-h-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-110"/>
            </div>
            <div className="flex flex-col gap-1">
                <span>{product.rating.rate}</span>
                <span>{product.title}</span>
                <span>${product.price}</span>
            </div>
        </div>
    );
};

export default ProductCard;