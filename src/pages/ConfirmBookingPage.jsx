import doctorImg from '@/assets/Rectangle 34624568.png'
import VerifiedImg from '@/assets/verified 1.png'
import Layout from '@/component/Layout/Layout'
import ConfirmBookingModal from '@/components/ConfirmbookingModal'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { FaGraduationCap, FaRegCalendarAlt, FaRegClock } from 'react-icons/fa'
import ReactStars from 'react-stars'

const ConfirmBookingPage = () => {
    const [isConfirmBookingModalOpen, setIsConfirmBookingModalOpen] = useState(false);

    return (
        <Layout>
            <div className='grid grid-cols-2 gap-5 max-w-[1240px] mx-auto mb-5'>
                <div className='bg-[#FCFFF4] px-4 py-6'>
                    <h1 className='font-inter font-medium text-3xl'>In Clinic Appointment</h1>
                    <h3 className='mt-5 font-inter text-xl'>Appointment Details</h3>
                    <div className='flex justify-between items-start mt-5'>
                        <div className='flex items-center gap-2'>
                            <FaRegCalendarAlt className='text-[#717171]' />
                            <span className='font-inter text-[#1A1A1A]'>On Fri Sep 25,24</span>
                        </div>
                        <div>
                            <div className='flex items-center gap-2'>
                                <FaRegClock className='text-[#717171]' />
                                <span className='font-inter text-[#1A1A1A]'>At 03:00PM</span>
                            </div>
                            <Button onClick={() => setIsConfirmBookingModalOpen(true)} variant="outline" className="h-7 text-[#95C22B] hover:text-[#95C22B] mt-4">Change Date & Time</Button>
                        </div>
                    </div>

                    <h4 className='font-inter mt-4 text-[#1A1A1A] font-semibold'>Selected Dentist</h4>

                    <div className='border-2 border-[#5B5B5B] rounded-md p-3 mt-5 grid grid-cols-[24%_73%] gap-3'>
                        <div>
                            <div className='rounded-[6px] relative w-full'>
                                <img className='absolute top-1 right-1' src={VerifiedImg} alt="" />
                                <img className='h-full w-full' src={doctorImg} alt="" />
                            </div>
                            <p className="text-center font-inter font-semibold mt-4 text-sm text-[#717171]">Reg. No: A-14383</p>
                        </div>
                        <div>
                            <div className="flex justify-between items-center gap-3">
                                <h2 className='text-xl font-inter font-semibold text-[#1A1A1A]'>Dr. Tanya Batra</h2>
                                <div>
                                    <ReactStars edit={false} size={25} count={5} value={5} color2={'#FF8A00'} />
                                    <div className='text-[#000000] text-[10px] text-right font-normal font-inter'>Rated by 2 users</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaGraduationCap className='text-[#717171] text-2xl' />
                                <div className='flex gap-2 items-center'>
                                    <p className=' text-[#FF8A00] font-inter font-semibold'>BDS</p>
                                    <div className='w-[2px] h-[14px] bg-[#FF8A00]'></div>
                                    <p className='text-[#FF8A00] font-inter font-semibold'>Oral Pathology</p>
                                    <div className='w-[2px] h-[14px] bg-[#FF8A00]'></div>
                                    <p className='text-[#FF8A00] font-inter font-semibold'>Dr. Narang’s Dental Hub</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h4 className='font-inter mt-4 text-[#1A1A1A] font-semibold'>Selected Clinic</h4>
                    {isConfirmBookingModalOpen &&
                        <ConfirmBookingModal
                            isConfirmBookingModalOpen={isConfirmBookingModalOpen}
                            setIsConfirmBookingModalOpen={setIsConfirmBookingModalOpen}
                        />
                    }
                </div>
                <div></div>
            </div>
        </Layout>
    )
}

export default ConfirmBookingPage