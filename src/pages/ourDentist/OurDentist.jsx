import React from 'react'
import Layout from '@/component/Layout/Layout'
import { AllProfileCard } from '@/component/MiniCompo/MiniCompo'
import DoctorImg from '../../assets/codifyformatter__2_-removebg-preview 1.png'
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
import ReactPagination from '@/component/allComponents/ReactPagination'
import SearchListCompo from '@/components/SearchListCompo'

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
        <SearchListCompo />
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
          <div className='flex flex-col gap-[60px]'>
            <div className='flex flex-col justify-between gap-5'>
              <p className='text-[#838383] text-base font-semibold font-inter'>Choose Your Dentist</p>
              <Dentist1 />
              <Dentist1 />
              <Dentist1 />
              <Dentist1 />
            </div>
            <ReactPagination />
          </div>
        </section>
      </main>
    </Layout>
  )
}

export default OurDentist
