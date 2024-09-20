import React, { useState } from 'react'
import { FaChevronUp } from 'react-icons/fa';

const ButtonLocation = ({ location }) => {
    const [isSelectLocation, setSelectLocation] = useState(false);


    const handleSelectLocation = () => {
        setSelectLocation(!isSelectLocation);
    };
    return (
        <button onClick={handleSelectLocation} className={`${isSelectLocation ? 'bg-[#95C22B] text-[#F8F8F8]' : 'bg-[#FFFFFF] text-[#1A1A1A]'} text-sm font-normal font-inter rounded-[30px] py-[6px] px-[14px] `}>{location}</button>
    )
}

const FilterName = ({ name }) => {

    return (
        <div className=' flex justify-between items-center py-5'>
            <h4 className='text-[#1A1A1A] text-xl font-medium font-poppins'>Search by {name}</h4>
            <FaChevronUp className='cursor-pointer' />
        </div>
    )
}

const MangementInfo = ({ img, number, title }) => {
    return (
        <div className='w-fit flex flex-col items-center justify-center'>
            <img src={img} alt="destistSignup-img" className=' h-[90px]' />
            <p className=' text-[40px] text-center font-bold font-inter'>{number}</p>
            <p className=' text-[19px] text-center font-bold font-inter'>{title}</p>
        </div>
    )
}

const OurTeamMember = ({ img, name, profile }) => {
    return (
        <div className='w-[403px] h-[400px] flex justify-center relative'>
            <img src={img} alt="" className='rounded-b-[10px]' />
            <div className=' absolute bottom-2'>
                <h3 className='text-[#FFFFFF] text-[26px] text-center font-bold font-inter'>{name}</h3>
                <p className='text-[#FFFFFF] text-[15px] text-center font-normal font-inter'>{profile}</p>
            </div>
        </div>
    )
}

export default ButtonLocation
export { FilterName, MangementInfo, OurTeamMember }