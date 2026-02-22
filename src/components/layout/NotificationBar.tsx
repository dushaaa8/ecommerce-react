import React from 'react';
import DiscountIcon from '../../assets/icons/ticket-percent.svg?react'
import BlueArrowIcon from '../../assets/icons/arrow-right.svg?react'
import CloseIcon from '../../assets/icons/close.svg?react'


const NotificationBar = ({value,isNotification, changeNotificationVisibility}:NotificationBarProps) => {
    const onClickCloseNotification = ():void => {
        changeNotificationVisibility(false)
    }
    if (!isNotification) return null;
    return (
         <section className="h-10 w-full bg-neutral-02 flex items-center justify-center text-neutral-07 font-semibold sticky">
            <div className="flex gap-3 text-[14px]"><DiscountIcon/>
                <span>{value}% off storewide — Limited time! </span>
                <a className="flex gap-1 items-center text-secondary-blue border-b cursor-pointer hover:scale-105">Shop
                    Now <BlueArrowIcon/></a>
            </div>
            <button className="cursor-pointer absolute right-4 transition-all ease-in-out duration-200 hover:rotate-90" onClick={onClickCloseNotification}><CloseIcon/></button>
        </section>
    )
};

export default NotificationBar;