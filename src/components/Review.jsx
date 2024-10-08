import { format } from 'date-fns'
import React from 'react'
import ReactStars from 'react-stars'

const Review = ({ rating }) => {
    const nameArray = rating?.patient?.name?.split(" ") || [];

    return (
        <div>
            {rating && <div>
                <div className="grid grid-cols-[8px_1fr] gap-3">
                    <div className="border-l-8 border-[#95C22B] h-full rounded-full w-2"></div>
                    <div>
                        <p className='font-inter text-xs text-[#858585]'>{rating?.createdAt && format(new Date(rating?.createdAt), "MMM dd, yyy")}</p>
                        <ReactStars edit={false} size={25} count={5} value={Number(rating?.patientRating)} color2={'#FF8A00'} />
                        <div className="flex items-center gap-2 my-1">
                            <div className="flex justify-center items-center w-[36px] h-[36px] rounded-full font-inter font-semibold text-sm text-[#95C22B] bg-[#eaf3d5]">{nameArray[0].charAt(0)}{nameArray[1].charAt(0)}</div>
                            <p className='font-inter font-semibold text-sm'>{rating?.patient?.name}</p>
                        </div>
                        {/* <p className='text-[#858585] font-medium'>Senior Analyst</p> */}
                        <p className='font-inter font-normal text-sm mt-1 text-[#0D0C22]'>{rating?.patientRemarks}</p>
                    </div>
                </div>
                <div className="h-[1px] w-[98%] ml-auto bg-[#8f8f8f] mt-8"></div>
            </div>}
        </div>
    )
}

export default Review