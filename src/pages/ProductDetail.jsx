import React from 'react';
import {useParams} from "react-router-dom";
import {useFetchProducts} from "../hooks/useFetch.js";
import Rating from "../components/ui/Rating.jsx";
import Breadcrumbs from "../components/layout/Breadcrumbs.jsx";

const ProductDetail = () => {
    const { id } = useParams();
    const { data: product, isLoading } = useFetchProducts(id)

    if (isLoading) return <div className="text-center py-20">Loading product...</div>;
    if (!product) return <div className="text-center py-20">Product not found</div>;

    return (
        <main className="relative max-w-280 mx-auto py-30 px-4 flex gap-10">
            <Breadcrumbs classes="absolute top-10 left-5"/>
            <div className="flex-1 bg-neutral-02 p-10">
                <img src={product.image} alt={product.title} className="w-full max-h-125 object-contain" />
            </div>
            <div className="flex-1 flex flex-col gap-4 justify-between">
                <div>
                    <span className="flex items-center gap-3 text-neutral-07 text-sm"><Rating rating={product.rating.rate}/> {Math.round(product.rating.rate)*3} reviews </span>
                    <h1 className="text-[40px] font-medium text-neutral-07">{product.title}</h1>
                    <p className="text-neutral-04 text-base">{product.description}</p>
                    <span className="text-3xl font-medium">${product.price}</span>
                </div>
                <button className="bg-neutral-07 text-white cursor-pointer py-4 rounded-md mt-6 hover:scale-101 transition-all duration-150">
                    Add to Cart
                </button>
            </div>
        </main>
    );
};

export default ProductDetail;