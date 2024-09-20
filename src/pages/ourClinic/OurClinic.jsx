import React, { useState } from 'react'
import Layout from '@/component/Layout/Layout'
import { FaChevronUp } from "react-icons/fa";
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from '@/components/ui/label';
import ReactStars from 'react-stars';
import ButtonLocation, { FilterName } from '@/component/MiniCompo/MiniCompo';
import VerifiedCheckImg from '../../assets/verified 1.png'
import PlusImg from '../../assets/medical-doctor-logo-for-sale 1.png'
import VectorImg from '../../assets/Vector.png'

const OurClinic = () => {

    return (
        <Layout>
            <main>
                <section className='w-full'>
                    <div className='p-4 rounded-[5px] w-[308px]'>
                        <p className='text-[#838383] text-xl font-semibold font-inter'>Advance Filter</p>
                        <div>
                            <FilterName name="Free Range" />

                        </div>
                        <div className='h-[289px]'>
                            <FilterName name="Rating" />
                            <div>
                                <div className="flex items-center gap-2 py-[10px]">
                                    <Checkbox id="terms" className="focus-visible:bg-[red]" />
                                    <Label className="flex items-center gap-2"><ReactStars count={5} size={20} color2={'#FF8A00'} value={5} /><p className='text-[#1A1A1A] text-sm font-normal font-inter'>5.0</p></Label>
                                </div>
                                <div className="flex items-center gap-2 py-[10px]">
                                    <Checkbox id="terms" className="focus-visible:bg-[red]" />
                                    <Label className="flex items-center gap-2"><ReactStars count={5} size={15} color2={'#FF8A00'} value={4} /><p className='text-[#1A1A1A] text-sm font-normal font-inter'>4.0 & up</p></Label>
                                </div>
                                <div className="flex items-center gap-2 py-[10px]">
                                    <Checkbox id="terms" className="focus-visible:bg-[red]" />
                                    <Label className="flex items-center gap-2"><ReactStars count={5} size={15} color2={'#FF8A00'} value={3} /><p className='text-[#1A1A1A] text-sm font-normal font-inter'>3.0 & up</p></Label>
                                </div>
                                <div className="flex items-center gap-2 py-[10px]">
                                    <Checkbox id="terms" className="focus-visible:bg-[red]" />
                                    <Label className="flex items-center gap-2"><ReactStars count={5} size={15} color2={'#FF8A00'} value={1} /><p className='text-[#1A1A1A] text-sm font-normal font-inter'>2.0 & up</p></Label>
                                </div>
                                <div className="flex items-center gap-2 py-[10px]">
                                    <Checkbox id="terms" className="focus-visible:bg-[red]" />
                                    <Label className="flex items-center gap-2"><ReactStars count={5} size={15} color2={'#FF8A00'} value={1} /><p className='text-[#1A1A1A] text-sm font-normal font-inter'>1.0 & up</p></Label>
                                </div>
                            </div>
                        </div>
                        <div>
                            <FilterName name="Location" />
                            <div className='flex flex-wrap items-center gap-[10px]'>
                                <ButtonLocation location="Delhi" />
                                <ButtonLocation location="Location 2" />
                                <ButtonLocation location="Location" />
                                <ButtonLocation location="Location 4" />
                                <ButtonLocation location="Location 5" />
                                <ButtonLocation location="Location 6" />
                                <ButtonLocation location="Location 7" />
                            </div>
                        </div>
                    </div>
                    <div className='p-4 rounded-[5px] flex flex-col gap-5'>
                        <p className='text-[#838383] text-xl font-semibold font-inter'>Choose clinic near you</p>
                        <div className='p-4 rounded-[6px] flex gap-[10px] shadow-custom4'>
                            <div className='rounded-[6px] border-[1px] border-[#C5C5C5]'>
                                <img src={PlusImg} alt="" />
                            </div>
                            <div className='pe-[25px] ps-[9px] gap-6'>
                                <div className='flex items-center justify-between gap-4'>
                                    <h4 className='text-[#1A1A1A] text-xl font-semibold font-inter'>DentMarc Dental Clinic</h4>
                                    <div>
                                        <ReactStars count={5} value={5} color2={'#FF8A00'}/>
                                        <div className='text-[#000000] text-[10px] font-normal font-inter'>Rated by 2 users</div>
                                    </div>
                                </div>
                                <div className='flex flex-col justify-start gap-2'>
                                    <h5 className='text-[#FF8A00] text-base font-semibold font-inter'>Multi-Speciality Clinic</h5>
                                    <div className='flex flex-col gap-2'>
                                        <div className='flex items-center gap-[6px] rounded-[35px] px-[10px]'>
                                            <img src={VectorImg} alt="" />
                                            <p className='text-[#838383] text-xs font-normal font-inter'>2-8+ years Experience</p>
                                        </div>
                                        <div className='flex items-center gap-[6px] rounded-[35px] px-[10px]'>
                                            <img src={VectorImg} alt="" />
                                            <p className='text-[#838383] text-xs font-normal font-inter'>3 Dentists</p>
                                        </div>
                                        <div className='flex items-center gap-[6px] rounded-[35px] px-[10px]'>
                                            <img src={VectorImg} alt="" />
                                            <p className='text-[#838383] text-xs font-normal font-inter'>₹500-1000 for consultation</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </Layout>
    )
}

export default OurClinic
