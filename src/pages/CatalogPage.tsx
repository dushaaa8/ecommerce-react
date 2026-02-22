import React, {useState} from 'react';
import ProductsList from "../components/layout/catalog/ProductsList";
import ShopPlaceholder from "../components/layout/ShopPlaceholder";
import FiltersSection from "../components/layout/catalog/FiltersSection";
import {useFetchProducts} from "../hooks/useFetch";
import {Filters} from "../types/FilterSectionProps";

const CatalogPage = () => {
    const { data: products, isLoading, error } = useFetchProducts() as UseFetch<Product[]>;
    const [activeFilters, setActiveFilters] = useState<Filters>({
        category: "All Categories",
        price: "All Price"
    })
    const currentProducts = Array.isArray(products) ? products : [];

    const filteredProducts = currentProducts.filter((product) => {
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
            <FiltersSection setActiveFilters={setActiveFilters}/>
            {filteredProducts.length
                ?<ProductsList products={filteredProducts} isLoading={isLoading}/>
                :<p className="py-10">Items not found</p>
            }
        </>
    );
};

export default CatalogPage;