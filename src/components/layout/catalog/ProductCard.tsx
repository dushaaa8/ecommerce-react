import React from 'react';
import {Link} from "react-router-dom";
import Rating from "../../ui/Rating";
import useCartStorage from "../../../store/useCartStorage";

const ProductCard = ({product}:ProductProps) => {
    const addToCart = useCartStorage((state) => state.addToCart);
    return (
        <Link to={`/catalog/${product.id}`} className="group flex flex-col gap-3 cursor-pointer h-full">
            <div className="relative aspect-3/4 bg-neutral-02 p-10 flex items-center justify-center overflow-hidden">
                <span className="absolute top-4 left-4 bg-white px-3.5 py-1 rounded-md uppercase font-bold text-[16px]">New</span>
                <img loading="lazy" src={product.image} alt={product.title} className="max-h-full object-contain transition-transform duration-500 group-hover:scale-110"/>
                <button onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          addToCart(product);
                        }}
                    className="w-[90%] absolute bottom-4 left-1/2 -translate-x-1/2 text-neutral-01 bg-neutral-07 py-2 rounded-md cursor-pointer font-medium text-base opacity-0 group-hover:opacity-100 transition-all duration-200 translate-y-4 group-hover:translate-y-0">Add to cart</button>
            </div>
            <div className="flex flex-col gap-0.5 flex-1">
                <Rating rating={product.rating.rate}/>
                <span className="font-semibold text-base text-neutral-07 truncate">{product.title}</span>
                <span className="text-sm font-semibold">${product.price}</span>
            </div>
        </Link>
    );
};

export default ProductCard;