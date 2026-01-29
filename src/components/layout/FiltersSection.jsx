import React, {useState} from 'react';
import SelectFilter from "../ui/SelectFilter.jsx";

const FiltersSection = ({setActiveFilters}) =>{

    const handleFilterChange = (filterName,value) =>{
        setActiveFilters( prev =>({
            ...prev,
            [filterName]:value
            }))

        console.log(`Filter ${filterName} changed to ${value}`)
    }
    return (
        <section className="flex w-280 gap-6">
            <SelectFilter onChange={(val) => handleFilterChange('category', val)} name={"category"} options={[
                "electronics",
                "jewelery",
                "men's clothing",
                "women's clothing"

            ]}/>
            <SelectFilter onChange={(val) => handleFilterChange('price', val)} name={"price"} options={[
                 "All Price",
                "0.00 - 99.99",
                "100.00 - 199.99",
                "200.00 - 499.99",
                "500.00+"
            ]}/>
        </section>
    );
};

export default FiltersSection;