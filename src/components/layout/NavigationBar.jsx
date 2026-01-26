import React from 'react';
import CartButtonIcon from "../../assets/icons/shopping-bag.svg?react"
import UserIcon from "../../assets/icons/user-circle.svg?react"
import SearchButtonIcon from "../../assets/icons/search.svg?react"


const NavigationBar = () => {
    return (
        <nav className="w-[1120px] h-[60px] flex justify-between items-center bg-white">
            <div className="font-medium text-[24px]">3legant.</div>
            <div className="flex gap-[40px] text-[14px] font-medium text-neutral-04">
                <a href="#">Home</a>
                <a href="#" className="text-neutral-07">Shop</a>
                <a href="#">Product</a>
                <a href="#">Contact Us</a>
            </div>
            <div className="flex gap-[16px] *:cursor-pointer *:hover:scale-110">
                <button><SearchButtonIcon/></button>
                <button><UserIcon/></button>
                <button><CartButtonIcon/></button>
            </div>
        </nav>
    );
};

export default NavigationBar;