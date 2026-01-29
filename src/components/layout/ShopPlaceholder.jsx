import React from 'react';
import heroBg from '../../assets/images/Placeholder.png';

const ShopPlaceholder = () => {
    return (
        <section style={{ backgroundImage: `url(${heroBg})` }}
            className=" w-280 h-98 top-25 flex flex-col items-center justify-center gap-6 mb-15">
            <nav className="text-[14px] font-medium">
                <a href="#" className="text-neutral-04">Home {"> "}</a>
                <a href="#">Shop</a>
            </nav>
            <h1 className="text-[54px] font-medium">Shop Page</h1>
            <h2 className="text-[20px]">Let’s design the place you always imagined.</h2>
        </section>
    );
};

export default ShopPlaceholder;