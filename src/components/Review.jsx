import React from 'react'
import ReactStars from 'react-stars'

const Review = () => {
    return (
        <div>
            <div className="grid grid-cols-[8px_1fr] gap-3">
                <div className="border-l-8 border-[#95C22B] h-full rounded-full w-2"></div>
                <div>
                    <p className='font-inter text-xs text-[#858585]'>Jan 20, 2024</p>
                    <ReactStars edit={false} size={25} count={5} value={5} color2={'#FF8A00'} />
                    <div className="flex items-center gap-2 my-1">
                        <div className="flex justify-center items-center w-[36px] h-[36px] rounded-full font-inter font-semibold text-sm text-[#95C22B] bg-[#eaf3d5]">AK</div>
                        <p className='font-inter font-semibold text-sm'>Alex K.</p>
                    </div>
                    <p className='text-[#858585] font-medium'>Senior Analyst</p>
                    <p className='font-inter font-normal text-sm mt-1 text-[#0D0C22]'>Working at Sam.AI has been an incredible journey so far. The technology we're building is truly cutting-edge, and being a part of a team that's revolutionizing how people achieve their goals is immensely fulfilling. </p>
                </div>
            </div>
            <div className="h-[1px] w-[98%] ml-auto bg-[#8f8f8f] mt-8"></div>
        </div>
    )
}

export default Review