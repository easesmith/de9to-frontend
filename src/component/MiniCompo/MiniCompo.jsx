import { Button } from '@/components/ui/button';
import React, { useState } from 'react'
import { FaArrowLeft, FaChevronUp } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import ProfessionalImg1 from '../../assets/Ellipse 3.png'
import ProfessionalImg2 from '../../assets/Ellipse 4.png'
import ProfessionalImg3 from '../../assets/Ellipse 5.png'
import ProfessionalImg4 from '../../assets/Ellipse 6.png'
import ProfessionalImg5 from '../../assets/Ellipse 7.png'
import ProfessionalImg6 from '../../assets/Ellipse 8.png'
import ProfessionalImg7 from '../../assets/Ellipse 9.png'
import CategoryData from '@/data/Blog/categoryData.json'
import CountUp from 'react-countup';
import ImageSkeleton from '@/components/ImageSkeleton';

const ButtonLocation = ({ location, setLocation, name }) => {
  const [isSelectLocation, setSelectLocation] = useState(false);


  const handleSelectLocation = () => {
    setLocation(name);
  };
  return (
    <button onClick={handleSelectLocation} className={`${location === name ? 'bg-[#95C22B] text-[#F8F8F8]' : 'bg-[#FFFFFF] text-[#1A1A1A]'} text-sm font-normal font-inter rounded-[30px] py-[6px] px-[14px] `}>{name}</button>
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

const MangementInfo = ({ img, number, title, isCounter }) => {
  return (
    <div className='w-fit flex flex-col items-center justify-center'>
      <img src={img} alt="destistSignup-img" className='h-[72px] max-lg:w-16 max-lg:h-16 max-sm:w-12 max-sm:h-12 max-[425px]:w-5 max-[425px]:h-5' />
      <p className=' text-[32px] text-center font-bold font-inter max-lg:text-[27px] max-sm:text-xl max-[425px]:text-sm'>{isCounter && <CountUp start={0} end={number} duration={2} />}+</p>
      <p className=' text-[16px] text-center font-medium font-inter max-lg:text-sm max-sm:text-xs max-[425px]:text-[10px] max-[425px]:font-medium'>{title}</p>
    </div>
  )
}

const OurTeamMember = ({ img, name, profile }) => {
  return (
    <>
      <div className='flex justify-center relative max-[425px]:hidden'>
        {/* <img src={img} alt="" className='rounded-b-[10px]' /> */}
        <ImageSkeleton
          src={img}
          imgClassName={'rounded-[10px]'}
          skeletonClassName={"rounded-[10px] h-80 w-full"}
        />
        <div className=' absolute bottom-2'>
          <h3 className='text-[#FFFFFF] text-[26px] text-center font-bold font-inter max-lg:text-[22px] max-md:text-lg'>{name}</h3>
          <p className='text-[#FFFFFF] text-[15px] text-center font-normal font-inter max-lg:text-sm max-md:text-xs'>{profile}</p>
        </div>
      </div>
      <div className='justify-start items-center gap-3 hidden max-[425px]:flex w-full'>
        {/* <img src={img} alt="" className='rounded-[10px] w-[118px] h-[125px]' /> */}
        <ImageSkeleton
          src={img}
          imgClassName={'rounded-[10px] w-[118px] h-[125px]'}
          skeletonClassName={"rounded-[10px] w-[118px] h-[125px]"}
        />
        <div className=''>
          <h3 className='text-[#000000] text-base text-start font-bold font-inter'>{name}</h3>
          <p className='text-[#000000] text-xs font-normal font-inter'>{profile}</p>
        </div>
      </div>
    </>
  )
}

const PrevLink = ({ page }) => {

  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <div onClick={handleBackClick} className='flex items-center gap-3 h-[18px] cursor-pointer px-5'>
      <FaArrowLeft className='text-[#717171]' />
      <span className='text-[#1A1A1A] text-sm font-semibold font-inter'>{page}</span>
    </div>
  )
}

// const [isCategorySelect, setIsCategorySelect] = useState('All')

// const handleSelectCategory = (number) => {
//   setIsCategorySelect(number)
// }
const CategoryBtn = ({ isCategorySelected, setIsCategorySelected, handleSelectCategoryed }) => {


  return (
    <>
      {CategoryData.map((e, i) => {
        return (
          <Button key={i} variant='category' size='lg' className={`${isCategorySelected === e.category ? 'bg-[#95C22B] text-[#FFFFFF] border-[#95C22B]' : 'bg-[#FFFFFF] text-[#1A1A1A] border-[#212121]'} max-[500px]:text-xs max-[500px]:py-[5px] max-[700px]:px-2`} onClick={() => handleSelectCategoryed(e.category)}>{e.category}</Button>
        )
      })}
    </>
  )
}

const Pagination = ({ number }) => {

  const [isCategorySelect, setIsCategorySelect] = useState(false)
  const handleSelectCategory = () => {
    setIsCategorySelect(!isCategorySelect)
  }

  return (
    // <div className='h-[45px]'>
    <button onClick={handleSelectCategory} className={`rounded-[10px] w-[45px] h-[45px] text-base text-center font-bold font-inter shadow-custom6 ${isCategorySelect ? 'bg-[#95C22B] text-[#FFFFFF]' : 'bg-[#FFFFFF] text-[#274760]'}`}>{number}</button>
    // </div>
  )
}

const RangeSlider = () => {
  // State to track the min and max values
  const [minValue, setMinValue] = useState(500);
  const [maxValue, setMaxValue] = useState(1500);

  // Minimum and Maximum range for the slider
  const minRange = 500;
  const maxRange = 1500;

  // Handlers to update the min and max values
  const handleMinChange = (event) => {
    const value = Math.min(Number(event.target.value), maxValue - 100);
    setMinValue(value);
  };

  const handleMaxChange = (event) => {
    const value = Math.max(Number(event.target.value), minValue + 100);
    setMaxValue(value);
  };

  return (
    <div className="w-full p-6">
      {/* Slider Container */}
      <div className="relative w-full">
        {/* Track */}
        <div className="absolute inset-0 bg-gray-300 h-2 rounded-full"></div>
        {/* Highlighted range between the two handles */}
        <div
          className="absolute bg-green-500 h-2 rounded-full"
          style={{
            left: `${((minValue - minRange) / (maxRange - minRange)) * 100}%`,
            right: `${100 - ((maxValue - minRange) / (maxRange - minRange)) * 100}%`,
          }}
        ></div>

        {/* Min Handle */}
        <input
          type="range"
          min={minRange}
          max={maxRange}
          value={minValue}
          onChange={handleMinChange}
          className="absolute w-full -top-2 h-4 appearance-none pointer-events-none"
          style={{
            pointerEvents: 'all',
            left: 0,
            zIndex: minValue === maxValue ? 5 : 3,
          }}
        />

        {/* Max Handle */}
        <input
          type="range"
          min={minRange}
          max={maxRange}
          value={maxValue}
          onChange={handleMaxChange}
          className="absolute w-full -top-2 h-4 appearance-none pointer-events-none"
          style={{
            pointerEvents: 'all',
            right: 0,
            zIndex: maxValue === minValue ? 5 : 3,
          }}
        />
      </div>

      {/* Display Values */}
      <div className="mt-4 text-center">
        <p className="text-sm font-medium text-gray-700">
          Selected Range: ₹{minValue} - ₹{maxValue}
        </p>
      </div>
    </div>
  );
};

const AllProfileCard = () => {
  return (
    <div className=' h-[60px] rounded-2xl py-2 px-4 bg-[#F4F9EA] shadow-custom3 flex items-center justify-start gap-[14px] w-[285px]'>
      <h5 className='text-[rgb(0,0,0)] text-xs text-center italic font-bold font-inter'>Our professionals</h5>
      <div className=' flex items-center relative w-[130px]'>
        <img src={ProfessionalImg1} alt="" className='absolute  z-0 w-[26.5px] h-[26.5px]' />
        <img src={ProfessionalImg2} alt="" className='absolute left-[15px] z-[1] w-[26.5px] h-[26.5px]' />
        <img src={ProfessionalImg3} alt="" className='absolute left-[30px] z-[2] w-[26.5px] h-[26.5px]' />
        <img src={ProfessionalImg4} alt="" className='absolute left-[45px] z-[3] w-[26.5px] h-[26.5px]' />
        <img src={ProfessionalImg5} alt="" className='absolute left-[60px] z-[4] w-[26.5px] h-[26.5px]' />
        <img src={ProfessionalImg6} alt="" className='absolute left-[75px] z-[5] w-[26.5px] h-[26.5px]' />
        <img src={ProfessionalImg7} alt="" className='absolute left-[90px] z-[6] w-[26.5px] h-[26.5px]' />
        <div className='bg-[#95C22B] rounded-full flex justify-center items-center absolute left-[105px] z-[7] w-[28.5px] h-[27.5px]'>
          <p className='text-[#FFFFFF] text-xs text-center font-normal font-poppins'>30+</p>
        </div>
      </div>
    </div>
    // </div>
  )
}

export default ButtonLocation
export { FilterName, MangementInfo, OurTeamMember, PrevLink, CategoryBtn, Pagination, RangeSlider, AllProfileCard }