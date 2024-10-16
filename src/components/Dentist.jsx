import doctorImg from '@/assets/Rectangle 34624568.png'
import expImg from '@/assets/Vector (6).png'
import rupeeImg from '@/assets/Vector (8).png'
import VerifiedImg from '@/assets/verified 1.png';
import { FaCalendarAlt, FaClock, FaGraduationCap } from 'react-icons/fa';
import ReactStars from 'react-stars';
import { Button } from './ui/button';
import { FiArrowUpRight } from 'react-icons/fi';
import { useState } from 'react';
import ConfirmbookingModal from './confirm-booking/ConfirmbookingModal';
import { calculateAverageRating } from '@/utils/getAverageRating';
import { format } from 'date-fns';

const Dentist = ({ dentist }) => {
    const [isConfirmBookingModalOpen, setIsConfirmBookingModalOpen] = useState(false);

    const daysOfWeek = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
    ];


    console.log("dentist", dentist)
    const { personalDetails, _id, clinic } = dentist || {}
    // console.log("personalDetails", personalDetails)
    // console.log("id", _id)

    const availabilityData = dentist?.dentistAvailableTiming?.map((item) => {
        if (daysOfWeek.some(day => day.toLowerCase() === item.day.toLowerCase())) {
            const dayAbbreviation = item.day.substring(0, 3);
            return dayAbbreviation.charAt(0).toUpperCase() + dayAbbreviation.slice(1);
        }
    })
    const today = format(new Date(), "EEEE");
    const availabilityTime = dentist?.dentistAvailableTiming?.find((item) => item.day === today)

    const averageRating = calculateAverageRating(dentist?.dentistRatings);

    return (
        <div className='border-2 border-[#5B5B5B] border-l-8 border-l-[#95C22B] rounded-md p-3 grid grid-cols-[24%_74%] gap-5'>
            <div>
                <div className='rounded-[6px] relative w-full'>
                    <img className='absolute top-1 right-1' src={VerifiedImg} alt="" />
                    <img className='h-full w-full' src={`${import.meta.env.VITE_IMAGE_URL}/${personalDetails?.image}`} alt="" />
                </div>
                <p className="text-center font-inter font-semibold mt-4 text-sm text-[#717171]">Reg. No: A-14383</p>
            </div>
            <div>
                <div className="flex justify-between items-start gap-3">
                    <h2 className='text-xl font-inter font-semibold text-[#1A1A1A]'>{personalDetails?.prefix
                    } {personalDetails?.Firstname} {personalDetails?.lastName}</h2>
                    <div>
                        <ReactStars edit={false} size={25} count={5} value={averageRating} color2={'#FF8A00'} />
                        <div className='text-[#000000] text-[10px] text-right font-normal font-inter'>Rated by {dentist?.dentistRatings?.length} users</div>
                    </div>
                </div>
                <div className="flex items-center gap-2 mt-1">
                    <FaGraduationCap className='text-[#717171] text-2xl' />
                    <div className='flex gap-2 items-center'>
                        <p className=' text-[#FF8A00] font-inter font-semibold'>{personalDetails?.degree}</p>
                        <div className='w-[2px] h-[14px] bg-[#FF8A00]'></div>
                        <p className='text-[#FF8A00] font-inter font-semibold'>{clinic[0]?.clinicName}</p>
                    </div>
                </div>
                <div className="flex items-center gap-2 mt-1">
                    <FaCalendarAlt className='text-[#717171] text-xl' />
                    <div className='flex gap-2 items-center'>
                        <p className=' text-[#717171] font-inter font-normal'>Availability: </p>
                        <p className='text-[#717171] font-inter font-semibold'>{availabilityData?.join(" - ")}</p>
                    </div>
                </div>
                <div className="flex items-center gap-2 mt-1">
                    <FaClock className='text-[#717171] text-xl' />
                    <div className='flex gap-2 items-center'>
                        <p className=' text-[#717171] font-inter font-normal'>Timings: </p>
                        <p className='text-[#717171] font-inter font-semibold'>{availabilityTime?.slot[0]?.startTime} - {availabilityTime?.slot[0]?.endTime}</p>
                    </div>
                </div>
                <p className='text-[#717171] font-inter font-normal text-sm mt-1'>Dr Tanya Batra completed his graduation from Dr MGR Medical University Chennai in the year 2006 and internship in the year 2007</p>
                <div className="flex justify-between items-center gap-2 mt-2">
                    <div className="border border-[#95C22B] rounded-md flex items-center gap-2 p-2">
                        <img src={expImg} alt="expImg" />
                        <span className='text-[#95C22B] font-inter text-xs'>2+ years Experience</span>
                    </div>
                    <div className='flex items-center gap-4'>
                        <p className='text-[#1A1A1A] font-inter font-medium'>₹500 at clinic</p>
                        <div className="border border-[#95C22B] bg-[#7171710F] rounded-md flex items-center gap-2 p-2">
                            <img src={rupeeImg} alt="expImg" />
                            <p className='text-[#5B5B5B]'><span className='line-through'></span> <b>FREE</b> via <b>de<span className='text-[#95C22B]'>9</span>to</b></p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-end mt-3">
                    <div className="flex items-center gap-3">
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