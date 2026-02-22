import React from 'react';
import ProductCard from "./ProductCard";

const ProductsList = ({products,isLoading}:ProductsListProps) => {

    if(isLoading) return(
        <section className="grid grid-cols-4 w-280 gap-6 py-10">
                <ProductCard product={{id: 0,title: " ", description:"bebe", category:"null", price: 0, image: " ", rating: {rate:5,count:0}}}/>
                <ProductCard product={{id: 0,title: " ", description:"bebe", category:"null", price: 0, image: " ", rating: {rate:5,count:0}}}/>
                <ProductCard product={{id: 0,title: " ", description:"bebe", category:"null", price: 0, image: " ", rating: {rate:5,count:0}}}/>
                <ProductCard product={{id: 0,title: " ", description:"bebe", category:"null", price: 0, image: " ", rating: {rate:5,count:0}}}/>
        </section>
    )
    return (
        <section className="grid grid-cols-4 w-280 gap-6 py-10">
            {products?.map(product => (
                <ProductCard product={product} key={product.id}/>
            ))}
        </section>
    );
};

export default ProductsList;