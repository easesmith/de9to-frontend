import React, { useCallback, useEffect, useState } from 'react'
import ReactStars from 'react-stars'
import doctorProfileImg from '@/assets/Rectangle 34624568.png'
import { FaGraduationCap } from 'react-icons/fa6'
import LocationCompo from '@/component/allComponents/LocationCompo'
import useGetApiReq from '@/hooks/useGetApiReq'
import DataNotFound from './DataNotFound'

const SearchListCompo = () => {
    const [isShadow, setIsShadow] = useState(false)
    const [searchQuery, setSearchQuery] = useState('')
    const [location, setLocation] = useState('')
    const [allClinic, setAllClinic] = useState([])
    const [allDentist, setAllDentist] = useState([])
    const [showAllClinic, setShowAllClinic] = useState(false);
    const [showAllDentist, setShowAllDentist] = useState(false);
    const [showDentistAndClinic, setShowDentistAndClinic] = useState('');

    const handleQuery = () => {
        setQuery(true)
    }

    const { res, fetchData, isLoading } = useGetApiReq();

    const getSearchQuery = useCallback(async () => {
        fetchData(`/patient/search?searchText=${searchQuery}&location=${location}`);
    }, [searchQuery, location])

    const handleGetSerachQuery = () => {
        getSearchQuery()
        setIsShadow(true)
    }

    useEffect(() => {
        if (res?.status === 200 || res?.status === 201) {
            console.log("res :", res)
            setAllClinic(res?.data?.foundClinics)
            setAllDentist(res?.data?.foundDentists)
            // setQuery(true)
        }
    }, [res])

    console.log("foundClinics :", allClinic)
    console.log("allDentist :", allDentist)

    console.log(showDentistAndClinic)
    return (
        <section className={`max-w-[1240px] w-full mx-auto ${isShadow ? 'shadow-custom7' : ''}`}>
            <LocationCompo searchQuery={searchQuery} setSearchQuery={setSearchQuery} handleQuery={handleQuery} handleGetSerachQuery={handleGetSerachQuery} location={location} isShadow={isShadow} setIsShadow={setIsShadow} setShowDentistAndClinic={setShowDentistAndClinic} setLocation={setLocation} />
            <>
                {/* {searchQuery.length === 0  <DataNotFound /> : */}
                <div className={`flex flex-col py-8 px-10 gap-8 max-w-[1240px] w-full mx-auto absolute z-10 bg-white ${isShadow ? 'shadow-custom7 rounded-b-2xl' : 'hidden'}`}>
                    <div className='flex justify-center gap-10'>
                        <button onClick={() => setShowDentistAndClinic('doctor')} className='text-[#95C22B] text-base font-bold font-inter border border-[#808080] rounded-[10px] py-3 px-24'>Doctor</button>
                        <button onClick={() => setShowDentistAndClinic('clinic')} className='text-[#95C22B] text-base font-bold font-inter border border-[#808080] rounded-[10px] py-3 px-24'>Clinics</button>
                    </div>
                    <div className='flex flex-col gap-5'>
                        {showDentistAndClinic === '' ?
                            <>
                                <div className='flex flex-col justify-between gap-12'>
                                    {allDentist.length > 0 &&
                                        <div className='flex justify-between items-center'>
                                            <p className='text-[#3F3F3F] text-lg font-medium font-poppins'>Doctors</p>
                                            <p className='text-[#3F3F3F] text-lg font-medium font-poppins'>{allDentist.length} results</p>
                                        </div>
                                    }
                                    <div className='flex flex-col gap-5'>
                                        {
                                            allDentist.length > 0 && allDentist.slice(0, showAllDentist ? allDentist.length : 3).map((e, i) => {
                                                return (
                                                    <>
                                                        <div key={i} className='flex flex-col gap-3'>
                                                            <div className='flex gap-[10px]'>
                                                                <img src={doctorProfileImg} alt="" className='w-[60px] h-[60px] rounded-sm' />
                                                                <div className='flex flex-col items-start gap-4'>
                                                                    <div className='flex items-center gap-9 -mt-1'>
                                                                        <h4 className='text-[#1A1A1A] text-lg font-semibold font-inter'>{e.personalDetails.Firstname} {e.personalDetails.lastName}</h4>
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
                                                    </>
                                                )
                                            })
                                        }
                                    </div>
                                    <div className='flex justify-center items-center'>
                                        <p onClick={() => setShowAllDentist(true)} className='text-[#3F3F3F] text-lg font-medium font-poppins'>{allDentist.length > 3 && `${showAllDentist ? '' : 'See All'}`}</p>
                                    </div>
                                </div>
                                <div className='w-full border border-[#D9D9D9]'></div>
                                <div className='flex flex-col justify-between gap-12'>
                                    {allClinic.length > 0 &&
                                        <div className='flex justify-between items-center'>
                                            <p className='text-[#3F3F3F] text-lg font-medium font-poppins'>Clinics</p>
                                            <p className='text-[#3F3F3F] text-lg font-medium font-poppins'>{allClinic.length} results</p>
                                        </div>
                                    }
                                    <div className='flex flex-col gap-5'>
                                        {
                                            allClinic.length > 0 && allClinic.slice(0, showAllClinic ? allClinic.length : 3).map((e, i) => {
                                                return (
                                                    <div key={i} className='flex flex-col gap-3'>
                                                        <div className='flex gap-[10px]'>
                                                            <img src={doctorProfileImg} alt="" className='w-[60px] h-[60px] rounded-sm' />
                                                            <div className='flex flex-col items-start gap-4'>
                                                                <div className='flex items-center gap-9 -mt-1'>
                                                                    <h4 className='text-[#1A1A1A] text-lg font-semibold font-inter'>{e.clinicName}</h4>
                                                                    <ReactStars count={5} value={4} edit={false} color2='#FF8A00' />
                                                                </div>
                                                                <div className='flex gap-2'>
                                                                    <h4 className='text-[#FF8A00] text-base font-semibold font-inter'>Multi-Speciality Clinic</h4>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <h6 className='text-[#3F3F3F] text-sm font-normal font-inter'>Searched keywords: <span className='text-[#95C22B] font-semibold'>2 years experience</span></h6>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                    <div className='flex justify-center items-center'>
                                        <p onClick={() => setShowAllClinic(true)} className='text-[#3F3F3F] text-lg font-medium font-poppins'>{allClinic.length > 3 && `${showAllClinic ? '' : 'See All'}`}</p>
                                    </div>
                                </div>
                            </>
                            : showDentistAndClinic === 'doctor' ?
                                <div className='flex flex-col justify-between gap-12'>
                                    {allDentist.length > 0 &&
                                        <div className='flex justify-between items-center'>
                                            <p className='text-[#3F3F3F] text-lg font-medium font-poppins'>Doctors</p>
                                            <p className='text-[#3F3F3F] text-lg font-medium font-poppins'>{allDentist.length} results</p>
                                        </div>
                                    }
                                    <div className='flex flex-col gap-5'>
                                        {
                                            allDentist.length > 0 && allDentist.slice(0, showAllDentist ? allDentist.length : 3).map((e, i) => {
                                                return (
                                                    <>
                                                        <div key={i} className='flex flex-col gap-3'>
                                                            <div className='flex gap-[10px]'>
                                                                <img src={doctorProfileImg} alt="" className='w-[60px] h-[60px] rounded-sm' />
                                                                <div className='flex flex-col items-start gap-4'>
                                                                    <div className='flex items-center gap-9 -mt-1'>
                                                                        <h4 className='text-[#1A1A1A] text-lg font-semibold font-inter'>{e.personalDetails.Firstname} {e.personalDetails.lastName}</h4>
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
                                                    </>
                                                )
                                            })
                                        }
                                    </div>
                                    <div className='flex justify-center items-center'>
                                        <p onClick={() => setShowAllDentist(true)} className='text-[#3F3F3F] text-lg font-medium font-poppins'>{allDentist.length > 3 && `${showAllDentist ? '' : 'See All'}`}</p>
                                    </div>
                                </div>
                                :
                                <div className='flex flex-col justify-between gap-12'>
                                    {allClinic.length > 0 &&
                                        <div className='flex justify-between items-center'>
                                            <p className='text-[#3F3F3F] text-lg font-medium font-poppins'>Clinics</p>
                                            <p className='text-[#3F3F3F] text-lg font-medium font-poppins'>{allClinic.length} results</p>
                                        </div>
                                    }
                                    <div className='flex flex-col gap-5'>
                                        {
                                            allClinic.length > 0 && allClinic.slice(0, showAllClinic ? allClinic.length : 3).map((e, i) => {
                                                return (
                                                    <div key={i} className='flex flex-col gap-3'>
                                                        <div className='flex gap-[10px]'>
                                                            <img src={doctorProfileImg} alt="" className='w-[60px] h-[60px] rounded-sm' />
                                                            <div className='flex flex-col items-start gap-4'>
                                                                <div className='flex items-center gap-9 -mt-1'>
                                                                    <h4 className='text-[#1A1A1A] text-lg font-semibold font-inter'>{e.clinicName}</h4>
                                                                    <ReactStars count={5} value={4} edit={false} color2='#FF8A00' />
                                                                </div>
                                                                <div className='flex gap-2'>
                                                                    <h4 className='text-[#FF8A00] text-base font-semibold font-inter'>Multi-Speciality Clinic</h4>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <h6 className='text-[#3F3F3F] text-sm font-normal font-inter'>Searched keywords: <span className='text-[#95C22B] font-semibold'>2 years experience</span></h6>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                    <div className='flex justify-center items-center'>
                                        <p onClick={() => setShowAllClinic(true)} className='text-[#3F3F3F] text-lg font-medium font-poppins'>{allClinic.length > 3 && `${showAllClinic ? '' : 'See All'}`}</p>
                                    </div>
                                </div>
                        }
                    </div>
                </div>
                {/* } */}
            </>
        </section>
    )
}

export default SearchListCompo