import React from 'react'

export const Rating = ({ ratingValue, ratingStar, maxRating = 500 }) => {
    // Calculate width as a percentage of 5 stars
    // const scaledPercent = Math.min((ratingValue / 5) * 100, 100);
    const scaledPercent = Math.min((ratingValue / maxRating) * 100, 100);
    return (
        <div className='grid grid-cols-[6%_87%_6%] items-center gap-3'>
            <p className='font-inter text-xs font-medium'>{ratingStar === 1 ? `${ratingStar} star` : `${ratingStar} stars`} </p>
            <div className='w-11/12 h-2 bg-[#d2d8df] rounded-3xl overflow-hidden'>
                <div
                    className='h-full rounded-3xl bg-[#95C22B]'
                    style={{ width: `${scaledPercent}%` }}
                ></div>
            </div>
            <div className='font-inter text-xs font-medium'>{ratingValue}</div>
        </div>
    )
}
