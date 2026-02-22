import React from 'react';
import newsletterBg from '../../assets/images/newsletter-bg.png';
import MailIcon from "../../assets/icons/mail.svg?react"

const Newsletter = () => {
    return (
        <section style={{ backgroundImage: `url(${newsletterBg})` }} className="w-360 h-90 flex flex-col justify-center items-center gap-8 text-neutral-07">
            <div>
                <h2 className="font-medium text-[40px]">Join Our Newsletter</h2>
                <p className="text-lg">Sign up for deals, new products and promotions</p>
            </div>

            <div className="flex items-center border-b border-neutral-04 w-122 gap-2 focus-within:border-neutral-07">
                <MailIcon/>
                <input type="text" className="w-[90%] h-full py-3 outline-none" placeholder="Email adress"/>
                <button className="text-neutral-04 font-medium cursor-pointer hover:text-neutral-07" onClick={()=> alert("Successful signup!")}>Signup</button>
            </div>
        </section>
    );
};

export default Newsletter;