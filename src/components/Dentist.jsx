import doctorImg from '@/assets/Rectangle 34624568.png'
import expImg from '@/assets/Vector (6).png'
import rupeeImg from '@/assets/Group (1).png'
import VerifiedImg from '@/assets/verified 1.png';
import { FaCalendarAlt, FaClock, FaGraduationCap } from 'react-icons/fa';
import ReactStars from 'react-stars';
import { Button } from './ui/button';
import { FiArrowUpRight } from 'react-icons/fi';
import { useState } from 'react';
import ConfirmbookingModal from './ConfirmbookingModal';

const Dentist = () => {
    const [isConfirmBookingModalOpen, setIsConfirmBookingModalOpen] = useState(false);

    return (
        <div className='border-2 border-[#5B5B5B] border-l-8 border-l-[#95C22B] rounded-md p-3 grid grid-cols-[24%_74%] gap-5'>
            <div>
                <div className='rounded-[6px] relative w-full'>
                    <img className='absolute top-1 right-1' src={VerifiedImg} alt="" />
                    <img className='h-full w-full' src={doctorImg} alt="" />
                </div>
                <p className="text-center font-inter font-semibold mt-4 text-sm text-[#717171]">Reg. No: A-14383</p>
            </div>
            <div>
                <div className="flex justify-between items-start gap-3">
                    <h2 className='text-xl font-inter font-semibold text-[#1A1A1A]'>Dr. Tanya Batra</h2>
                    <div>
                        <ReactStars size={25} count={5} value={5} color2={'#FF8A00'} />
                        <div className='text-[#000000] text-[10px] text-right font-normal font-inter'>Rated by 2 users</div>
                    </div>
                </div>
                <div className="flex items-center gap-2 mt-1">
                    <FaGraduationCap className='text-[#717171] text-2xl' />
                    <div className='flex gap-2 items-center'>
                        <p className=' text-[#FF8A00] font-inter font-semibold'>BDS</p>
                        <div className='w-[2px] h-[14px] bg-[#FF8A00]'></div>
                        <p className='text-[#FF8A00] font-inter font-semibold'>Dr. Narang’s Dental Hub</p>
                    </div>
                </div>
                <div className="flex items-center gap-2 mt-1">
                    <FaCalendarAlt className='text-[#717171] text-xl' />
                    <div className='flex gap-2 items-center'>
                        <p className=' text-[#717171] font-inter font-normal'>Availability: </p>
                        <p className='text-[#717171] font-inter font-semibold'>Tue - Wed- Thu</p>
                    </div>
                </div>
                <div className="flex items-center gap-2 mt-1">
                    <FaClock className='text-[#717171] text-xl' />
                    <div className='flex gap-2 items-center'>
                        <p className=' text-[#717171] font-inter font-normal'>Timings: </p>
                        <p className='text-[#717171] font-inter font-semibold'>10:45AM- 4:00PM</p>
                    </div>
                </div>
                <p className='text-[#717171] font-inter font-normal text-sm mt-1'>Dr Tanya Batra completed his graduation from Dr MGR Medical University Chennai in the year 2006 and internship in the year 2007</p>
                <div className="flex items-center gap-2 mt-2">
                    <div className="border border-[#95C22B] rounded-md flex items-center gap-2 p-2">
                        <img src={expImg} alt="expImg" />
                        <span className='text-[#95C22B] font-inter text-xs'>2+ years Experience</span>
                    </div>
                    <div className="border border-[#95C22B] rounded-md flex items-center gap-2 p-2">
                        <img src={rupeeImg} alt="expImg" />
                        <span className='text-[#95C22B] font-inter text-xs'>₹500 at clinic</span>
                    </div>
                </div>
                <div className="flex justify-end">
                    <div className="flex items-center gap-3">
                        <p className='text-[#5B5B5B]'><span className='line-through'>₹500</span> <b>FREE</b> via <b>de<span className='text-[#95C22B]'>9</span>to</b></p>
                        <Button onClick={() => setIsConfirmBookingModalOpen(true)} className="bg-[#95C22B] hover:bg-[#9dd41d] flex gap-3 items-center px-6 rounded-[10px]">
                            <span>Book Appointment</span>
                            <FiArrowUpRight className='text-2xl' />
                        </Button>
                    </div>
                </div>
            </div>

            {isConfirmBookingModalOpen &&
                <ConfirmbookingModal
                    isConfirmBookingModalOpen={isConfirmBookingModalOpen}
                    setIsConfirmBookingModalOpen={setIsConfirmBookingModalOpen}
                />
            }
        </div>
    )
}

export default Dentist