import React, {useState} from 'react';
import ProductsList from "../components/layout/ProductsList.jsx";
import ShopPlaceholder from "../components/layout/ShopPlaceholder.jsx";
import FiltersSection from "../components/layout/FiltersSection.jsx";
import {useFetchProducts} from "../hooks/useFetch.js";

const CatalogPage = () => {
    const { data: products, isLoading, error } = useFetchProducts();
    const [activeFilters, setActiveFilters] = useState({
        category: "All Categories",
        price: "All Price"
    })


    const filteredProducts = products.filter(product => {
        const categoryMatch =
            activeFilters.category === 'All Categories' ||
            product.category === activeFilters.category;

        let priceMatch = true;
        if (activeFilters.price !== 'All Price') {
            const clearFilters = activeFilters.price.replace(/[^\d.-]/g, '')
            console.log(clearFilters)
            const [min, max] = clearFilters.split('-',).map(Number);

            if (max) {
                priceMatch = product.price >= min && product.price <= max;
            } else {
                priceMatch = product.price >= min;
            }
        }

        return categoryMatch && priceMatch;
    });

    if(error) return <p>Something wrong with fetching data!</p>
    return (
        <>
            <ShopPlaceholder/>
            <FiltersSection activeFilters={activeFilters} setActiveFilters={setActiveFilters}/>
            {filteredProducts.length
                ?<ProductsList products={filteredProducts} isLoading={isLoading}/>
                :<p className="py-10">Items not found</p>
            }
        </>
    );
};

export default CatalogPage;