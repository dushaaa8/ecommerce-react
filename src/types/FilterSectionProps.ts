// for determining type of useState
import {Dispatch, SetStateAction} from "react";

export interface FilterSectionProps{
    setActiveFilters: Dispatch<SetStateAction<Filters>>
}
export interface Filters{
    category:string;
    price:string;
}