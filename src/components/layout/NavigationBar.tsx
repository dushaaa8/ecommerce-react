import React from 'react';
import CartButtonIcon from "../../assets/icons/shopping-bag.svg?react"
import UserIcon from "../../assets/icons/user-circle.svg?react"
import SearchButtonIcon from "../../assets/icons/search.svg?react"
import {Link} from "react-router-dom";
import useCartStorage from "../../store/useCartStorage";

const NavigationBar = () => {
    const count: number = useCartStorage((state) => state.cart.length);
    return (
        <nav className="w-280 h-15 flex justify-between items-center bg-white">
            <div className="font-medium text-[24px]">3legant.</div>
            <div className="flex gap-10 text-[14px] font-medium text-neutral-04">
                <a href="#">Home</a>
                <Link to={"/catalog"} className="text-neutral-07">Shop</Link>
                <a href="#">Product</a>
                <a href="#">Contact Us</a>
            </div>
            <div className="flex gap-4 *:cursor-pointer *:hover:scale-110">
                <button><SearchButtonIcon/></button>
                <button><UserIcon/></button>
                <Link className="flex" to={"/cart"}><CartButtonIcon/><span>{count}</span></Link>
            </div>
        </nav>
    );
};

export default NavigationBar;