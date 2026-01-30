import React from 'react';
import StarIcon from '../../assets/icons/star.svg?react'
import StarIconLight from '../../assets/icons/star-light.svg?react'

const Rating = ({rating}) => {
    return (
        <span className="flex gap-1">
                    {[...Array(5)].map((_, index) => (
                        index < Math.round(rating)
                            ? <StarIcon key={index}/>
                            : <StarIconLight key={index}/>
                    ))}
        </span>
    );
};

export default Rating;