import React from 'react'
import { IoMdArrowForward } from "react-icons/io";
import TeethImg from '@/assets/caries_5720817 1.png'

const TreatementCompo = () => {

  const data = [
    {
      image: TeethImg,
      name: "Cracked Tooth",
      description: "diagnose, treat teeth and jaw irregularities"
    },
    {
      image: TeethImg,
      name: "Stained Teeth",
      description: "diagnose, treat teeth and jaw irregularities"
    },
    {
      image: TeethImg,
      name: "Toothache",
      description: "diagnose, treat teeth and jaw irregularities"
    },
    {
      image: TeethImg,
      name: "Sensitive to Cold",
      description: "diagnose, treat teeth and jaw irregularities"
    },
    {
      image: TeethImg,
      name: "Chipped Tooth",
      description: "diagnose, treat teeth and jaw irregularities"
    },
    {
      image: TeethImg,
      name: "Chipped Tooth",
      description: "diagnose, treat teeth and jaw irregularities"
    },
  ]
  return (
    <section className='bg-[#F4F9EA]'>
      <div className='bg-[#F4F9EA] px-5 py-16'>
        <h5 className="text-[#95C22B]  text-xl text-center font-normal italic font-poppins mb-3">Our Services</h5>
        <h2 className="text-[#252B42] text-[32px] text-center font-semibold font-poppins mb-8">Treatments Provided by Our<br /><span className='text-[#95C22B]'>Expert Dentist</span></h2>
        <div className=' flex justify-center items-start gap-10 flex-wrap'>
          {data.map((item, index) => (
            <div key={index} className=' w-[285px] h-fit bg-[#FFFFFF] flex flex-col justify-center items-center cursor-pointer rounded-2xl shadow-2xl p-4 group'>
              <div className='bg-[#FFF0F0] w-[80px] h-[80px] flex justify-center items-center rounded-full'>
                <img src={item.image} alt="" className='w-[40px] h-[40px] bg-transparent rounded-full' />
              </div>
              <h5 className="text-[#000000] text-lg text-center font-semibold font-poppins">{item.name}</h5>
              <p className="text-[#6C6C6C] text-base text-center font-normal font-poppins">{item.description}</p>
              <div className=' bg-[#95C22B] cursor-pointer justify-center items-center gap-3 border-[1px] border-[#95C22B] rounded-2xl px-12 py-4 mt-10 hidden group-hover:flex'>
                <button className=' text-[#FFFFFF] text-lg font-semibold font-poppins'>Learn more</button>
                <IoMdArrowForward color='#FFFFFF' fontSize={24} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TreatementCompo