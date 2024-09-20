import React from 'react'

const Card = ({img, heading, description}) => {
    return (
        <div className='rounded-2xl w-[400px] relative shadow-2xl cursor-pointer'>
            <img src={img} alt=""
                className='w-fit rounded-2xl' />
            <div className=' absolute px-3 py-5 bottom-0 rounded-b-2xl bg-[#FFFFFF]'>
                <h4 className='text-[#313131] text-2xl font-medium font-poppins mb-2 leading-6'>{heading}</h4>
                <p className='text-[#535353] text-[15px] font-medium font-poppins'>{description}</p>
            </div>
        </div>
    )
}

export default Card
