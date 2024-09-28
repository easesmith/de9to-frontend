import React, { useState } from 'react'
import ReactStars from 'react-stars'
import doctorProfileImg from '@/assets/Rectangle 34624568.png'
import { FaGraduationCap } from 'react-icons/fa6'
import LocationCompo from '@/component/allComponents/LocationCompo'

const SearchListCompo = () => {
    const[query, setQuery] = useState(false)

    const handleQuery = () =>{
        setQuery(true)
        console.log(true)
    }
    console.log(query)

    return (
        <section className={`max-w-[1240px] w-full mx-auto ${query === true && 'shadow-custom7'}`}>
            <LocationCompo handleQuery={handleQuery} />
            {query === true &&
            <div className='flex flex-col py-8 px-10 gap-8 max-w-[1240px] w-full mx-auto absolute z-10 bg-white'>
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
            </div>}
        </section>
    )
}

export default SearchListCompo