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
import { calculateAverageRating } from '@/utils/getAverageRating';

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


    console.log("dentist1", dentist)
    const { personalDetails, _id, clinic, dentistRatings, dentistAvailableTiming = [], educationalQualification } = dentist || {}
    // console.log("personalDetails", personalDetails)
    // console.log("id", _id)

    const defaultClinic = clinic.find((singleClinic)=> singleClinic?.defaultClinic)
    const filteredAvailabilityData = dentistAvailableTiming?.filter((item) => item?.clinic === defaultClinic?._id);
    const availabilityData = filteredAvailabilityData?.map((item) => item?.day);

    console.log("availabilityData", availabilityData);

    const averageRating = calculateAverageRating(dentistRatings);
    // console.log("averageRating", averageRating);

    const navigate = useNavigate()

    function handleNavigateDentistDetailPage(id) {
        navigate(`/our-dentist/${id}`)
    }

    return (
        <div className='border-[1px max-[700px]:border-none shadow max-[700px]:shadow] border-[#C9C9C9] rounded-md p-3 grid grid-cols-[24%_74%] max-[769px]:grid-cols-[28%_70%] max-[700px]:grid-cols-[34%_60%] max-[600px]:grid-cols-1 gap-5'>
            <div>
                <div onClick={() => handleNavigateDentistDetailPage(_id)} className='rounded-[6px] relative w-full cursor-pointer'>
                    <img className='absolute top-1 right-1' src={VerifiedImg} alt="" />
                    <img className='h-full w-full' src={personalDetails?.image} alt="" />
                </div>
                <p className="text-center font-inter font-semibold mt-4 text-sm text-[#717171]">Reg. No: {educationalQualification?.regNumber}</p>
            </div>
            <div>
                <div className="flex justify-between items-start max-[500px]:flex-col max-[500px]:gap-0 gap-3">
                    <h2 onClick={() => handleNavigateDentistDetailPage(_id)} className='text-xl font-inter font-semibold text-[#1A1A1A] cursor-pointer'>{personalDetails?.prefix
                    }. {personalDetails?.Firstname} {personalDetails?.lastName}</h2>
                    <div>
                        <ReactStars size={25} count={5} value={averageRating} edit={false} color2={'#FF8A00'} />
                        <div className='text-[#000000] text-[10px] max-[500px]:text-left text-right font-normal font-inter'>Rated by {dentistRatings?.length} users</div>
                    </div>
                </div>
                <div className="flex items-center gap-2 mt-1">
                    <FaGraduationCap className='text-[#717171] text-2xl max-[700px]:text-xl' />
                    <div className='flex gap-2 items-center max-[700px]:text-xs'>
                        <p className=' text-[#FF8A00] font-inter font-semibold'>{personalDetails?.degree}</p>
                        <div className='w-[2px] h-[14px] bg-[#FF8A00]'></div>
                        <p className='text-[#FF8A00] font-inter font-semibold'>{personalDetails?.specialty}</p>
                        <div className='w-[2px] h-[14px] bg-[#FF8A00]'></div>
                        <p className='text-[#FF8A00] font-inter font-semibold'>{clinic?.length === 1 ? clinic[0]?.clinicName : clinic?.find((item) => item?.defaultClinic)?.clinicName}</p>
                    </div>
                </div>
                <div className="flex items-center gap-2 mt-1">
                    <FaCalendarAlt className='text-[#717171] text-xl max-[700px]:text-lg' />
                    <div className='flex gap-2 items-center max-[700px]:text-xs'>
                        <p className=' text-[#717171] font-inter font-normal'>Availability: </p>
                        <p className='text-[#717171] font-inter font-semibold'>{availabilityData?.join(" - ")}</p>
                    </div>
                </div>
                {/* <div className="flex items-center gap-2 mt-1">
                    <FaLocationDot className='text-[#717171] text-xl max-[700px]:text-xl' />
                    <p className=' text-[#717171] font-inter max-[700px]:text-xs font-normal'>{clinic[0]?.clinicAddress}</p>
                </div> */}
                <p className='text-[#717171] font-inter font-normal max-[700px]:text-xs text-sm mt-1'>{personalDetails?.Bio}</p>
                <div className="flex items-center gap-2 mt-2">
                    <div className="border border-[#717171] rounded-md max-[500px]:p-1 flex items-center gap-2 p-2">
                        <img src={VectorImg} alt="vectorImg" className='w-[26px] max-[500px]:w-3' />
                        <span className='text-[#717171] font-inter text-xs max-[500px]:text-[8px]'>{educationalQualification?.yearsOfExperience} years Experience</span>
                    </div>
                    {/* <div className="border border-[#717171] rounded-md max-[500px]:p-1 flex items-center gap-2 p-2">
                        <img src={MediDocImg} alt="doctorImg" className='w-[26px] max-[500px]:w-3' />
                        <span className='text-[#717171] font-inter text-xs max-[500px]:text-[8px]'>Medica Dentals and 3 more</span>
                    </div> */}
                    <div className="border border-[#717171] rounded-md max-[500px]:p-1 flex items-center gap-2 p-2">
                        <img src={RupayImg} alt="rupayImg" className='w-[26px] max-[500px]:w-3' />
                        <span className='text-[#717171] font-inter text-xs max-[500px]:text-[8px]'>₹500 at clinic</span>
                    </div>
                </div>
                <div className="flex justify-end mt-4">
                    <div className="flex items-center gap-3">
                        <p className='text-[#5B5B5B] max-[500px]:text-xs'><span className='line-through'>₹500</span> <b>FREE</b> via <b>de<span className='text-[#95C22B]'>9</span>to</b></p>
                        <Button onClick={() => setIsConfirmBookingModalOpen(true)} className="bg-[#95C22B] max-[500px]:text-xs max-[700px]:px-3 hover:bg-[#9dd41d] flex gap-3 items-center px-6 rounded-[10px]">
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
