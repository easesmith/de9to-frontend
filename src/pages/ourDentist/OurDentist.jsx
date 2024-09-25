import React from 'react'
import Layout from '@/component/Layout/Layout'
import { AllProfileCard } from '@/component/MiniCompo/MiniCompo'
import DoctorImg from '../../assets/codifyformatter__2_-removebg-preview 1.png'
import doctorProfileImg from '@/assets/Rectangle 34624568.png'

import ImgBackgroundImg from '../../assets/Group.png'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import Dentist1 from '@/component/allComponents/Dentist1'
import { FaGraduationCap } from 'react-icons/fa6'
import ReactStars from 'react-stars'

const OurDentist = () => {
  return (
    <Layout>
      <main className='w-full relative'>
        <section className='flex items-center justify-end  pr-20'>
          <div className='flex flex-col gap-[18px] w-[483px]'>
            <h1 className='text-[#0D0E0E] text-[60px] font-bold font-inter leading-[72px]'>Expert Care,<br /> Right Next Door</h1>
            <p className='text-[#787878] text-base italic font-bold font-inter'>Where you get the list of certified doctors with years of
              professional experiences</p>
            <AllProfileCard />
          </div>
          <div className='relative'>
            <img src={DoctorImg} alt="doctor-img" />
          </div>
        </section>
        <img src={ImgBackgroundImg} alt="background-img" className='absolute -top-[4%] right-0 -z-10' />
        <section className='max-w-[1240px] w-full mx-auto flex flex-col gap-10 my-12'>
          <div className=' rounded-[5px] flex flex-col gap-3'>
            <p className='text-[#838383] text-base font-semibold font-inter'>Advance Filter</p>
            <div className='flex justify-between items-center gap-3 rounded-[10px] bg-[#EEEEEE]'>
              <Select>
                <SelectTrigger className="w-[250px] px-12 border-none text-[#1A1A1A] bg-[#EEEEEE] text-sm font-medium font-inter">
                  <SelectValue placeholder="Search by Gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="transgender">Transgender</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <div className='border-[1.5px] border-[#717171] h-[30px]'></div>
              <Select>
                <SelectTrigger className="w-[250px] px-8 border-none text-[#1A1A1A] bg-[#EEEEEE] text-sm font-medium font-inter">
                  <SelectValue placeholder="Search by Fee Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="apple">Apple</SelectItem>
                    <SelectItem value="banana">Banana</SelectItem>
                    <SelectItem value="blueberry">Blueberry</SelectItem>
                    <SelectItem value="grapes">Grapes</SelectItem>
                    <SelectItem value="pineapple">Pineapple</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <div className='border-[1.5px] border-[#717171] h-[30px]'></div>
              <Select>
                <SelectTrigger className="w-[250px] px-12 border-none text-[#1A1A1A] bg-[#EEEEEE] text-sm font-medium font-inter">
                  <SelectValue placeholder="Search by Rating" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="5">5</SelectItem>
                    <SelectItem value="4">4</SelectItem>
                    <SelectItem value="3">3</SelectItem>
                    <SelectItem value="2">2</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <div className='border-[1.5px] border-[#717171] h-[30px]'></div>
              <Select>
                <SelectTrigger className="w-[250px] px-12 border-none text-[#1A1A1A] bg-[#EEEEEE] text-sm font-medium font-inter">
                  <SelectValue placeholder="Search by Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="lucknow">Lucknow</SelectItem>
                    <SelectItem value="lucknow">Lucknow</SelectItem>
                    <SelectItem value="lucknow">Lucknow</SelectItem>
                    <SelectItem value="lucknow">Lucknow</SelectItem>
                    <SelectItem value="lucknow">Lucknow</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className='gap-[60px]'>
            <div className='flex flex-col justify-between gap-5'>
              <p className='text-[#838383] text-base font-semibold font-inter'>Choose Your Dentist</p>
              <Dentist1 />
              <Dentist1 />
              <Dentist1 />
              <Dentist1 />
            </div>
          </div>
          <div className='flex flex-col py-8 px-10 gap-8'>
            <div className='flex justify-center gap-10'>
              <button className='text-[#95C22B] text-base font-bold font-inter border border-[#808080] rounded-[10px] py-3 px-24'>Doctor</button>
              <button className='text-[#95C22B] text-base font-bold font-inter border border-[#808080] rounded-[10px] py-3 px-24'>Clinics</button>
            </div>
            <div className='flex flex-col gap-5'>
              <div className='flex flex-col justify-between gap-12'>
                <div className='flex justify-between items-center'>
                  <p className='text-[#3F3F3F] text-lg font-medium font-poppins'>Doctors</p>
                  <p className='text-[#3F3F3F] text-lg font-medium font-poppins'>53 results</p>
                </div>
                <div className='flex flex-col gap-5'>
                  <div className='flex flex-col gap-3'>
                    <div className='flex gap-[10px]'>
                      <img src={doctorProfileImg} alt="" className='w-[60px] h-[60px] rounded-sm' />
                      <div className='flex flex-col items-start gap-4'>
                        <div className='flex items-center gap-9 -mt-1'>
                          <h4 className='text-[#1A1A1A] text-lg font-semibold font-inter'>Dr. Tanya Batra</h4>
                          <ReactStars count={5} value={4} edit={false} color2='#FF8A00' />
                        </div>
                        <div className='flex gap-2'>
                          <FaGraduationCap className='text-[#717171] text-2xl' />
                          <h4 className='text-[#FF8A00] text-base font-semibold font-inter flex items-center gap-2'>BDS <div className='border border-[#FF8A00] h-3'></div> Oral Pathology <div className='border border-[#FF8A00] h-3'></div> Dr. Narang’s Dental Hub</h4>
                        </div>
                      </div>
                    </div>
                    <h6 className='text-[#3F3F3F] text-sm font-normal font-inter'>Searched keywords: <span className='text-[#95C22B] font-semibold'>Multi-Speciality Clinic</span></h6>
                  </div>
                  <div className='flex flex-col gap-3'>
                    <div className='flex gap-[10px]'>
                      <img src={doctorProfileImg} alt="" className='w-[60px] h-[60px] rounded-sm' />
                      <div className='flex flex-col items-start gap-4'>
                        <div className='flex items-center gap-9 -mt-1'>
                          <h4 className='text-[#1A1A1A] text-lg font-semibold font-inter'>Dr. Tanya Batra</h4>
                          <ReactStars count={5} value={4} edit={false} color2='#FF8A00' />
                        </div>
                        <div className='flex gap-2'>
                          <FaGraduationCap className='text-[#717171] text-2xl' />
                          <h4 className='text-[#FF8A00] text-base font-semibold font-inter flex items-center gap-2'>BDS <div className='border border-[#FF8A00] h-3'></div> Oral Pathology <div className='border border-[#FF8A00] h-3'></div> Dr. Narang’s Dental Hub</h4>
                        </div>
                      </div>
                    </div>
                    <h6 className='text-[#3F3F3F] text-sm font-normal font-inter'>Searched keywords: <span className='text-[#95C22B] font-semibold'>Multi-Speciality Clinic</span></h6>
                  </div>
                  <div className='flex flex-col gap-3'>
                    <div className='flex gap-[10px]'>
                      <img src={doctorProfileImg} alt="" className='w-[60px] h-[60px] rounded-sm' />
                      <div className='flex flex-col items-start gap-4'>
                        <div className='flex items-center gap-9 -mt-1'>
                          <h4 className='text-[#1A1A1A] text-lg font-semibold font-inter'>Dr. Tanya Batra</h4>
                          <ReactStars count={5} value={4} edit={false} color2='#FF8A00' />
                        </div>
                        <div className='flex gap-2'>
                          <FaGraduationCap className='text-[#717171] text-2xl' />
                          <h4 className='text-[#FF8A00] text-base font-semibold font-inter flex items-center gap-2'>BDS <div className='border border-[#FF8A00] h-3'></div> Oral Pathology <div className='border border-[#FF8A00] h-3'></div> Dr. Narang’s Dental Hub</h4>
                        </div>
                      </div>
                    </div>
                    <h6 className='text-[#3F3F3F] text-sm font-normal font-inter'>Searched keywords: <span className='text-[#95C22B] font-semibold'>2 years experience</span></h6>
                  </div>
                </div>
                <div className='flex justify-center items-center'>
                  <p className='text-[#3F3F3F] text-lg font-medium font-poppins'>See All</p>
                </div>
              </div>
              <div className='w-full border border-[#D9D9D9]'></div>
              <div className='flex flex-col justify-between gap-12'>
                <div className='flex justify-between items-center'>
                  <p className='text-[#3F3F3F] text-lg font-medium font-poppins'>Clinics</p>
                  <p className='text-[#3F3F3F] text-lg font-medium font-poppins'>102 results</p>
                </div>
                <div className='flex flex-col gap-5'>
                  <div className='flex flex-col gap-3'>
                    <div className='flex gap-[10px]'>
                      <img src={doctorProfileImg} alt="" className='w-[60px] h-[60px] rounded-sm' />
                      <div className='flex flex-col items-start gap-4'>
                        <div className='flex items-center gap-9 -mt-1'>
                          <h4 className='text-[#1A1A1A] text-lg font-semibold font-inter'>DentMarc Dental Clinic</h4>
                          <ReactStars count={5} value={4} edit={false} color2='#FF8A00' />
                        </div>
                        <div className='flex gap-2'>
                          <h4 className='text-[#FF8A00] text-base font-semibold font-inter'>Multi-Speciality Clinic</h4>
                        </div>
                      </div>
                    </div>
                    <h6 className='text-[#3F3F3F] text-sm font-normal font-inter'>Searched keywords: <span className='text-[#95C22B] font-semibold'>2 years experience</span></h6>
                  </div>
                  <div className='flex flex-col gap-3'>
                    <div className='flex gap-[10px]'>
                      <img src={doctorProfileImg} alt="" className='w-[60px] h-[60px] rounded-sm' />
                      <div className='flex flex-col items-start gap-4'>
                        <div className='flex items-center gap-9 -mt-1'>
                          <h4 className='text-[#1A1A1A] text-lg font-semibold font-inter'>DentMarc Dental Clinic</h4>
                          <ReactStars count={5} value={4} edit={false} color2='#FF8A00' />
                        </div>
                        <div className='flex gap-2'>
                          <h4 className='text-[#FF8A00] text-base font-semibold font-inter'>Multi-Speciality Clinic</h4>
                        </div>
                      </div>
                    </div>
                    <h6 className='text-[#3F3F3F] text-sm font-normal font-inter'>Searched keywords: <span className='text-[#95C22B] font-semibold'>2 years experience</span></h6>
                  </div>
                  <div className='flex flex-col gap-3'>
                    <div className='flex gap-[10px]'>
                      <img src={doctorProfileImg} alt="" className='w-[60px] h-[60px] rounded-sm' />
                      <div className='flex flex-col items-start gap-4'>
                        <div className='flex items-center gap-9 -mt-1'>
                          <h4 className='text-[#1A1A1A] text-lg font-semibold font-inter'>DentMarc Dental Clinic</h4>
                          <ReactStars count={5} value={4} edit={false} color2='#FF8A00' />
                        </div>
                        <div className='flex justify-start gap-2'>
                          <h4 className='text-[#FF8A00] text-base font-semibold font-inter'>Multi-Speciality Clinic</h4>
                        </div>
                      </div>
                    </div>
                    <h6 className='text-[#3F3F3F] text-sm font-normal font-inter'>Searched keywords: <span className='text-[#95C22B] font-semibold'>2 years experience</span></h6>
                  </div>
                </div>
                <div className='flex justify-center items-center'>
                  <p className='text-[#3F3F3F] text-lg font-medium font-poppins'>See All</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}

export default OurDentist
