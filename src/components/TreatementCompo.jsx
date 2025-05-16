import React from 'react'
import { IoMdArrowForward } from "react-icons/io";
import TeethImg from '@/assets/caries_5720817 1.png'
import data from "@/data/homeData/treatment.json"

const TreatementCompo = () => {

  return (
    <section className='bg-[#F4F9EA]'>
      <div className='bg-[#F4F9EA] px-5 py-16'>
        <h5 className="text-[#95C22B] text-xl max-[500px]:text-base text-center font-normal italic font-poppins mb-3">Our Services</h5>
        <h2 className="text-[#252B42] text-[32px] max-[500px]:text-xl text-center font-semibold font-poppins mb-8">Treatments Provided by Our<br /><span className='text-[#95C22B]'>Expert Dentist</span></h2>
        <div className=' flex justify-center items-start max-[700px]:grid max-[700px]:grid-cols-2 gap-10 max-[500px]:gap-5 flex-wrap'>
          {data.map((item, index) => (
            <div key={index} className=' w-[285px] max-[700px]:w-auto h-fit bg-[#FFFFFF] flex flex-col justify-center items-center cursor-pointer rounded-2xl shadow-custom5 p-4 max-[500px]:p-2 group hover:scale-110 transition-all duration-200'>
              <div className='bg-[#FFF0F0] w-[80px] h-[80px] flex justify-center items-center rounded-full'>
                <img src={TeethImg} alt="" className='w-[40px] h-[40px] bg-transparent rounded-full' />
              </div>
              <h5 className="text-[#000000] text-lg max-[500px]:text-base text-center font-semibold font-poppins">{item.name}</h5>
              <p className="text-[#6C6C6C] text-base max-[500px]:text-xs text-center font-normal font-poppins">{item.description}</p>
              <div className=' bg-[#95C22B] max-[500px]:flex cursor-pointer justify-center items-center gap-3 border-[1px] border-[#95C22B] active:scale-105 hover:scale-95 transition-all duration-200 rounded-2xl max-[500px]:rounded-lg px-12 max-[500px]:px-2 max-[500px]:py-1 py-4 mt-10 max-[500px]:mt-5 hidden group-hover:flex'>
                <button className=' text-[#FFFFFF] text-lg max-[500px]:text-[10px] font-semibold font-poppins'>Learn more</button>
                <IoMdArrowForward color='#FFFFFF' className='text-2xl max-[500px]:text-lg' />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TreatementCompo