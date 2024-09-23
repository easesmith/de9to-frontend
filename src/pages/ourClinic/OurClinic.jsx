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
import Clinic from '@/components/Clinic';
import ProfessionalImg1 from '../../assets/Ellipse 3.png'
import ProfessionalImg2 from '../../assets/Ellipse 4.png'
import ProfessionalImg3 from '../../assets/Ellipse 5.png'
import ProfessionalImg4 from '../../assets/Ellipse 6.png'
import ProfessionalImg5 from '../../assets/Ellipse 7.png'
import ProfessionalImg6 from '../../assets/Ellipse 8.png'
import ProfessionalImg7 from '../../assets/Ellipse 9.png'
import DoctorImg from '../../assets/codifyformatter__2_-removebg-preview 1.png'
import ImgBackgroundImg from '../../assets/Group.png'
// import ClinicBasicDetails from '@/components/ClinicBasicDetails';

const OurClinic = () => {

    return (
        <Layout>
            <main className='max-w-[1240px] w-full mx-auto flex flex-col gap-10'>
                <section className='flex items-center justify-between w-full'>
                    <div className='flex flex-col gap-[18px] w-[483px]'>
                        <h1 className='text-[#0D0E0E] text-[60px] font-bold font-inter leading-[72px]'>Expert Care,<br /> Right Next Door</h1>
                        <p className='text-[#787878] text-base italic font-bold font-inter'>Where you get the list of certified doctors with years of
                            professional experiences</p>
                    </div>
                    <div className='relative'>
                        <img src={DoctorImg} alt="doctor-img" />
                        <img src={ImgBackgroundImg} alt="background-img" className='absolute -top-[13%] left-[5%] -z-10' />
                    </div>
                </section>
                <section className='w-full flex justify-between gap-6'>
                    <div className='p-4 rounded-[5px] w-[307px]'>
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
                    {/* <ClinicBasicDetails /> */}
                    <Clinic />
                </section>
            </main>
        </Layout>
    )
}

export default OurClinic
