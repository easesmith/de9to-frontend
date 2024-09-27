import React from 'react'
import Layout from '@/component/Layout/Layout'
import { Cards } from '@/component/Card/Card'
import TeethImg from '@/assets/_Compound Path_.png'
import ProfileImg from '@/assets/_Compound Path_.png'
import Image from '@/assets/Picture1-removebg-preview 1.png'
import CheckMarkImg from '@/assets/anbx.png'
import Image1 from '@/assets/bixbhh .png'
import Image2 from '@/assets/Frame (1)  .png'
import Image3 from '@/assets/Frame (2)  .png'
import Image4 from '@/assets/Frame (3)  .png'
import { IoMdArrowBack } from "react-icons/io";
import { IoMdArrowForward } from "react-icons/io";
import TreatementCompo from '@/components/TreatementCompo'


const Home = () => {


  return (
    <Layout>
      <section className='bg-[#FFFFFF]'>
        <div className='bg-[#FFFFFF] flex justify-center items-start gap-20 flex-wrap px-5 py-16'>
          <div className='w-[550px] max-md:w-[400px] max-[450px]:w-[300px] rounded-[40px]'>
            <div className=' relative'>
              <img src={Image} alt="" className='w-[550px] bg-[#F8F8F8] rounded-[40px]' />
              <img src={CheckMarkImg} alt="" className=' absolute bottom-[9%] right-[8%] z-20 w-[90px] h-[80px] rounded-[40px]' />
              <div className=' absolute z-10 bottom-[-4%] right-[-4%] border-[20px] border-[#FFFFFF] max-w-[225px] max-h-[225px] w-full h-full max-md:w-[175px] max-md:h-[175px] max-[450px]:w-[130px] max-[450px]:h-[130px] bg-[#95C22B] rounded-[40px]'>
              </div>
            </div>
          </div>
          <div className='max-w-[590px] flex flex-col gap-[13px]'>
            <div className='flex flex-col items-start justify-start gap-[22px]'>
              <h2 className='text-[#000000] text-[32px] font-medium font-poppins tracking-[8%]'>What We Have Achieved</h2>
              <p className='max-w-[590px] text-[#000000] text-xl font-normal font-poppins tracking-[2%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim nisi ut aliquip ex ea  commodo consequat.</p>
            </div>
            <div className=' flex flex-wrap'>
              <div className='w-[250px] mb-10'>
                <img src={Image1} alt="" />
                <span className='text-[#95C22B] text-5xl font-semibold font-poppins'>150+</span>
                <p className='text-[#818181] text-xl font-normal font-poppins'>Dentist Signups</p>
              </div>
              <div className='w-[250px] mb-10'>
                <img src={Image2} alt="" />
                <span className='text-[#95C22B] text-5xl font-semibold font-poppins'>150+</span>
                <p className='text-[#818181] text-xl font-normal font-poppins'>Dentist Signups</p>
              </div>
              <div className='w-[250px]'>
                <img src={Image3} alt="" />
                <span className='text-[#95C22B] text-5xl font-semibold font-poppins'>150+</span>
                <p className='text-[#818181] text-xl font-normal font-poppins'>Dentist Signups</p>
              </div>
              <div className='w-[250px]'>
                <img src={Image4} alt="" />
                <span className='text-[#95C22B] text-5xl font-semibold font-poppins'>150+</span>
                <p className='text-[#818181] text-xl font-normal font-poppins'>Dentist Signups</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <TreatementCompo />
      <section>
        <div className=' relative flex flex-col justify-center items-center gap-8 px-5 pt-16 pb-40'>
          <h2 className="max-w-[350px] text-[#000000] text-[32px] text-center font-semibold font-poppins">The Honest <span className='text-[#95C22B]'>Review</span> From Our Client</h2>
          <p className='max-w-[425px] text-[#3F3F3F] text-xl text-center font-normal font-poppins'>See what our patients are saying about their experiences at our clinic.</p>
          <div className=' z-20 bg-white max-w-[640px] flex flex-col items-center gap-12 rounded-2xl shadow-2xl p-10'>
            <p className=' text-[#636571] text-2xl text-center font-light 
                    italic font-poppins'>Lorem ipsum dolor sit amet, consectetuer
              adipiscing elit. Aenean commodo ligula eget
              dolor. Aenean massa.</p>
            <div className="profile flex justify-center items-start gap-6">
              <div className="profile-picture">
                <img src={ProfileImg} />
              </div>
              <div>
                <h4 className=' text-[#3F3F3F] text-2xl font-bold font-inter'>Jonathan Vallem</h4>
                <p className=" text-[#595959] text-base font-normal font-inter">New york, USA</p>
              </div>
            </div>
          </div>
          <div className=' flex gap-3 pt-20'>
            <IoMdArrowBack fontSize={30} className=' cursor-pointer hover:text-[#95C22B]' />
            <IoMdArrowForward fontSize={30} className=' cursor-pointer hover:text-[#95C22B]' />
          </div>
          <div className=' absolute z-10 left-[12%] mt-48'>
            <div className=' relative flex justify-center items-center'>
              <img src={ProfileImg} alt="" className=' absolute z-10 left-[0%] bottom-[25%]' />
              <div className='relative z-0 w-[510px] h-[510px] flex justify-center items-center border-[1px] border-[#D7D7D7] rounded-full'>
                <img src={ProfileImg} alt="" className=' absolute z-10 left-[25%] bottom-[18%]' />
                <img src={ProfileImg} alt="" className=' absolute z-10 left-[18%] top-[25%]' />
                <div className='relative w-[350px] h-[350px] flex justify-center items-center  border-[1px] border-[#D7D7D7] rounded-full'>
                  <div className='w-[200px] h-[200px] flex justify-center items-center border-[1px] border-[#D7D7D7] rounded-full'></div>
                </div>
              </div>
            </div>
          </div>


          <div className=' absolute right-[12%] mt-48'>
            <div className=' relative flex justify-center items-center'>
              <img src={ProfileImg} alt="" className=' absolute z-10 right-[3%] top-[18%]' />
              <img src={ProfileImg} alt="" className=' absolute z-10 right-[3%] bottom-[18%]' />
              <div className='relative w-[510px] h-[510px] flex justify-center items-center border-[1px] border-[#D7D7D7] rounded-full'>
                <div className='relative w-[350px] h-[350px] flex justify-center items-center  border-[1px] border-[#D7D7D7] rounded-full'>
                  <img src={ProfileImg} alt="" className=' absolute right-[16%] top-[42%]' />
                  <div className='w-[200px] h-[200px] flex justify-center items-center border-[1px] border-[#D7D7D7] rounded-full'></div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
      <section className=' bg-[#95C22B] flex justify-center items-center rounded-3xl'>
        <div className=' flex items-start px-5 pt-16 max-md:pb-16'>
          <div className=' max-md:hidden'>
            <img src={TeethImg} alt="" className='bg-transparent opacity-[0.1]' />
          </div>
          <div className='max-w-[550px] flex flex-col items-center'>
            <h2 className="text-[#313131] text-[32px] text-center font-semibold font-poppins leading-[48px] mb-8">Don’t wait <span className='text-[#FFFFFF]'>and make an appointment today</span></h2>
            <button className='bg-[#FFFFFF] text-[#95C22B] text-xl font-semibold font-poppins rounded-2xl px-5 py-3'>Book Appointment</button>
          </div>
        </div>
      </section>
      <section>
        <h2 className="text-[#313131] text-[32px] text-center font-semibold font-poppins mb-8">Read top <span className='text-[#95C22B]'>articles</span> from experts</h2>
        <div className=' flex justify-center items-center gap-10 flex-wrap'>

        </div>
      </section>
      <Cards />
    </Layout>
  )
}

export default Home
