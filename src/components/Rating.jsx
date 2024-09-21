import React from 'react'

export const Rating = ({rating,star}) => {
    return (
        <div className='grid grid-cols-[6%_87%_6%] items-center gap-3'>
            <p className='font-inter text-xs font-medium'>4 stars</p>
            <div className='w-11/12 h-2 bg-[#d2d8df] rounded-3xl overflow-hidden'>
                <div className='w-full h-full rounded-3xl transform -translate-x-40 bg-[#95C22B]'></div>
            </div>
            <div className='font-inter text-xs font-medium'>488</div>
        </div>
    )
}
