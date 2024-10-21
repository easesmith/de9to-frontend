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

const Modal = ({ isOpen, onClose, children }) => {
  // Close the modal if the user clicks outside of it
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isOpen && event.target.classList.contains('modal-overlay')) {
        onClose();
      }
    };

    window.addEventListener('click', handleOutsideClick);
    return () => window.removeEventListener('click', handleOutsideClick);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        {children}
      </div>
    </div>
  );
};

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
      console.log("ShortDentist:", res2)
      setAllDentists(res2?.data?.dentists)
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

  const [isOpen, setIsOpen] = useState(false);

  const [searchListModel, setSearchListModel] = useState(false)
  const [ayush, setAyush] = useState(false)

  // function handleSearchListOpenModel() {
  //   setSearchListModel(true)
  // }

  function handleAyush() {
    setAyush(!ayush)
  }

  // function handleSearchListCloseModel() {
  //   setSearchListModel(false)
  // }

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Layout>
      <main className='w-full relative'>
        {/* <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
          <button
            onClick={()=> setIsOpen(true)}
            className="cursor-pointer rounded bg-black px-4 py-2 text-white active:bg-slate-400"
          >
            OPEN MODAL
          </button>
          {isOpen && (
            <div onClick={()=> setIsOpen(false)}
              className="fixed inset-0 flex items-center justify-center bg-slate-700/30">
              <div className="max-w-[calc(100vw-3rem)] w-[24rem] rounded-md bg-white p-6 text-black shadow-xl transition">
                <h3 className="text-lg font-bold">Modal opened!</h3>
                <p className="py-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a
                  metus ac nulla consequat aliquet id quis turpis. Suspendisse
                  potenti. Etiam sollicitudin vel turpis nec posuere.
                </p>
                <button onClick={()=> setIsOpen(false)}
                  className="mt-4 cursor-pointer rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
                  Close Modal
                </button>
              </div>
            </div>
          )}
        </div> */}
        {/* <div className="h-screen flex items-center justify-center">
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
          >
            Open Modal
          </button>

          <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
            <h2 className="text-lg font-bold">Modal Content</h2>
            <p className="mt-2">This is the content inside the modal.</p>
            <button
              onClick={()=>setIsModalOpen(false)}
              className="mt-4 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600"
            >
              Close Modal
            </button>
          </Modal>
        </div> */}
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
                  <DataNotFound name='Dentist' />
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
