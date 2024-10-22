import React from 'react'
import { FaGraduationCap } from 'react-icons/fa'

const SingleEducation = ({ degree, year }) => {
    return (
        <div className='border-2 flex gap-3 w-full p-4 border-[#95C22B] rounded-md bg-[#F9FFEA]'>
            <div className="flex justify-center items-center bg-[#E9FFB4] h-8 w-8">
                <FaGraduationCap className='text-[#95C22B] text-2xl' />
            </div>
            <div>
                <h3 className='text-lg max-[500px]:text-sm font-inter font-semibold text-[#1A1A1A]'>{degree}</h3>
                <p className='text-sm max-[500px]:text-xs font-inter font-semibold text-[#1A1A1A]'>{year}</p>
            </div>
        </div>
    )
}

export default SingleEducation