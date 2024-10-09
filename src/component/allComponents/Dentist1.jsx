import doctorImg from '@/assets/Rectangle 34624568.png'
// import expImg from '@/assets/Vector (6).png'
// import rupeeImg from '@/assets/Group (1).png'
import VectorImg from '@/assets/Vector.png';
import VerifiedImg from '@/assets/verified 1.png';
import MediDocImg from '@/assets/mediDoc.png';
import RupayImg from '@/assets/Rupay.png';
import { FaCalendarAlt, FaClock, FaGraduationCap } from 'react-icons/fa';
import { FaLocationDot } from "react-icons/fa6";
import ReactStars from 'react-stars';
import { Button } from '@/components/ui/button';
import { FiArrowUpRight } from 'react-icons/fi';
import { useState } from 'react';
import ConfirmbookingModal from '@/components/confirm-booking/ConfirmbookingModal';
import { useNavigate } from 'react-router-dom';

const Dentist1 = ({ dentist }) => {
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

    const availabilityData = clinic[0]?.weeklyHoliday?.map((item) => {
        if (daysOfWeek.some(day => day.toLowerCase() === item.day.toLowerCase())) {
            const dayAbbreviation = item.day.substring(0, 3);
            return dayAbbreviation.charAt(0).toUpperCase() + dayAbbreviation.slice(1);
        }
    })

    // console.log("availabilityData", availabilityData);


    const navigate = useNavigate()

    function handleNavigateDentistDetailPage(id) {
        navigate(`/our-dentist/${id}`)
    }

    return (
        <div className='border-[1px] border-[#C9C9C9] rounded-md p-3 grid grid-cols-[24%_74%] gap-5'>
            <div>
                <div onClick={() => handleNavigateDentistDetailPage(_id)} className='rounded-[6px] relative w-full cursor-pointer'>
                    <img className='absolute top-1 right-1' src={VerifiedImg} alt="" />
                    <img className='h-full w-full' src={`${import.meta.env.VITE_IMAGE_URL}/${personalDetails?.image}`} alt="" />
                </div>
                <p className="text-center font-inter font-semibold mt-4 text-sm text-[#717171]">Reg. No: A-14383</p>
            </div>
            <div>
                <div className="flex justify-between items-start gap-3">
                    <h2 onClick={() => handleNavigateDentistDetailPage(_id)} className='text-xl font-inter font-semibold text-[#1A1A1A] cursor-pointer'>{personalDetails?.prefix
                    } {personalDetails?.Firstname} {personalDetails?.lastName}</h2>
                    <div>
                        <ReactStars size={25} count={5} value={5} edit={false} color2={'#FF8A00'} />
                        <div className='text-[#000000] text-[10px] text-right font-normal font-inter'>Rated by 2 users</div>
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
                    <p className=' text-[#717171] font-inter font-normal'>{clinic[0]?.clinicAddress}</p>
                </div>
                <p className='text-[#717171] font-inter font-normal text-sm mt-1'>Dr Tanya Batra completed his graduation from Dr MGR Medical University Chennai in the year 2006 and internship in the year 2007</p>
                <div className="flex items-center gap-2 mt-2">
                    <div className="border border-[#717171] rounded-md flex items-center gap-2 p-2">
                        <img src={VectorImg} alt="vectorImg" className='w-[26px] h-7' />
                        <span className='text-[#717171] font-inter text-xs'>2+ years Experience</span>
                    </div>
                    <div className="border border-[#717171] rounded-md flex items-center gap-2 p-2">
                        <img src={MediDocImg} alt="doctorImg" className='w-[26px] h-7' />
                        <span className='text-[#717171] font-inter text-xs'>Medica Dentals and 3 more</span>
                    </div>
                    <div className="border border-[#717171] rounded-md flex items-center gap-2 p-2">
                        <img src={RupayImg} alt="rupayImg" className='w-[26px] h-7' />
                        <span className='text-[#717171] font-inter text-xs'>₹500 at clinic</span>
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
                    dentistId={_id}
                    clinic={dentist.clinic}
                    timing={dentist?.dentistAvailableTiming}
                    selectedIndex={0}
                />
            }
        </div>
    )
}

export default Dentist1
