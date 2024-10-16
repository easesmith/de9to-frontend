import React, { useCallback, useEffect, useState } from 'react'
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
import useGetApiReq from '@/hooks/useGetApiReq'
import FilterCompo from '@/components/FilterCompo'
import DataNotFound from '@/components/DataNotFound'

const OurDentist = () => {

  const { res, fetchData, isLoading } = useGetApiReq();
  const [pageCount, setPageCount] = useState(1)
  const [page, setPage] = useState(1)
  const [allDentists, setAllDentists] = useState([])

  const getDentists = useCallback(async () => {
    fetchData(`/dentist/get-dentists?page=${page}`);
  }, [page, fetchData])

  useEffect(() => {
    getDentists();
  }, [page])


  useEffect(() => {
    if (res?.status === 200 || res?.status === 201) {
      // console.log("AllDentists:", res.data.data.dentists)
      setAllDentists(res.data.data.dentists)
      setPageCount(res.data.totalPages)
      setPage(res.data.currentPage)
    }
  }, [res])

  const { res: res2, fetchData: fetchData2, isLoading: isLoading2 } = useGetApiReq();

  const [gender, setGender] = useState('');
  const [rating, setRating] = useState('');
  const [location, setLocation] = useState('');

  const getfilterDentist = useCallback(async () => {
    if (location || rating || gender) {
      fetchData2(`/patient/filter?area=${location}&ratings=${rating}&gender=${gender}`);
    }
  }, [location, rating, gender, fetchData2])

  useEffect(() => {
    getfilterDentist();
  }, [location, rating, gender])


  useEffect(() => {
    if (res2?.status === 200 || res2?.status === 201) {
      console.log("ShortDentist:", res)
      setAllDentists(res2.data.dentists)
    }
  }, [res2])

  const handleGenderChange = (value) => {
    setGender(value);
  }
  const handleRatingChange = (value) => {
    setRating(value);
  }
  const handleLocationChange = (value) => {
    setLocation(value);
  }


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
            <FilterCompo gender={gender} handleGenderChange={handleGenderChange} rating={rating} handleRatingChange={handleRatingChange} location={location} handleLocationChange={handleLocationChange} />
          </div>
          <div className='flex flex-col gap-[60px]'>
            <div className='flex flex-col justify-between gap-5'>
              <p className='text-[#838383] text-base font-semibold font-inter'>Choose Your Dentist</p>
              {
                allDentists.length > 0 && !isLoading ? allDentists.map((e, i) => {
                  return (
                    <Dentist1 key={i} dentist={e} />
                  )
                }) :
                  <DataNotFound />
              }
            </div>
            {allDentists.length > 0 &&
            <ReactPagination pageCount={pageCount} setPage={setPage} />}
          </div>
        </section>
      </main>
    </Layout>
  )
}

export default OurDentist
