import React from 'react';
import FacebookIcon from "../../assets/icons/facebook.svg?react"
import InstagramIcon from "../../assets/icons/instagram.svg?react"
import YoutubeIcon from "../../assets/icons/youtube.svg?react"

const Footer = () => {
    return (
        <footer className="flex flex-col w-full bg-neutral-07 items-center justify-center h-[249px] gap-15">
            <div className=" flex w-[60%] justify-between">
                <div className="flex items-center gap-[65px] relative before:content-[''] before:absolute before:h-[80%] before:w-[1px] before:border-l before:border-neutral-04 before:left-31.5">
                    <h3 className="text-white font-medium text-2xl">3legant<span className="text-neutral-04">.</span></h3>
                    <h4 className="text-sm text-neutral-03">Gift & Decoration Store</h4>
                </div>
                <div className="flex text-neutral-01 gap-10 text-sm">
                    <a href="#">Home</a>
                    <a href="#">Shop</a>
                    <a href="#">Prodcut</a>
                    <a href="#">Blog</a>
                    <a href="#">Contact Us</a>
                </div>
            </div>
            <div className="flex w-[60%] justify-between text-neutral-01 py-4 border-t border-neutral-04">
                <div className="flex items-center gap-12  text-xs">
                    <p className="text-neutral-04">Copyright © 2023 3legant. All rights reserved</p>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Use</a>
                </div>
                <div className="flex gap-6">
                    <a href=""><InstagramIcon/></a>
                    <a href=""><FacebookIcon/></a>
                    <a href=""><YoutubeIcon/></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;