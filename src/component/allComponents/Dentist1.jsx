import doctorImg from '@/assets/Rectangle 34624568.png'
// import expImg from '@/assets/Vector (6).png'
// import rupeeImg from '@/assets/Group (1).png'
import VectorImg from '@/assets/Vector.png';
import VerifiedImg from '@/assets/verified 1.png';
import MediDocImg from '@/assets/mediDoc.png';
import RupayImg from '@/assets/Rupay.png';
import { FaCalendarAlt, FaCheck, FaCheckCircle, FaClock, FaGraduationCap, FaRegHeart, FaShieldVirus } from 'react-icons/fa';
import { FaLocationDot } from "react-icons/fa6";
import ReactStars from 'react-stars';
import { Button } from '@/components/ui/button';
import { FiArrowUpRight } from 'react-icons/fi';
import { useState } from 'react';
import ConfirmbookingModal from '@/components/confirm-booking/ConfirmbookingModal';
import { useNavigate } from 'react-router-dom';
import { calculateAverageRating } from '@/utils/getAverageRating';
import ImageSkeleton from '@/components/ImageSkeleton';
import { IoChatbox } from 'react-icons/io5';
import { BiSolidInjection } from 'react-icons/bi';

const Dentist1 = ({ dentist }) => {
    const [isConfirmBookingModalOpen, setIsConfirmBookingModalOpen] = useState(false);

    console.log("dentist1", dentist)
    const { personalDetails, _id, clinic, assignedClinic, dentistRatings, dentistAvailableTiming = [], educationalQualification } = dentist || {}

    const defaultClinic = clinic.find((singleClinic) => singleClinic?.defaultClinic)
    const filteredAvailabilityData = dentistAvailableTiming?.filter((item) => item?.clinic === defaultClinic?._id);
    const availabilityData = filteredAvailabilityData?.map((item) => item?.day);
    const modifiedClinic = assignedClinic.map((clinic) => clinic?.clinicId)

    console.log("modifiedClinic", [...modifiedClinic, ...clinic]);


    console.log("availabilityData", availabilityData);

    const averageRating = calculateAverageRating(dentistRatings);

    const navigate = useNavigate()

    function handleNavigateDentistDetailPage(id) {
        navigate(`/our-dentist/${id}`)
    }

    return (
        <>
            {/* <div className='border-[1px] max-[700px]:border-none shadow max-[700px]:shadow] border-[#C9C9C9] rounded-md p-3 flex justify-between gap-5 max-sm:flex-wrap'>
                <div className='flex justify-center flex-col items-center w-[250px] max-sm:w-full'>
                    <div onClick={() => handleNavigateDentistDetailPage(_id)} className='rounded-lg relative w-[250px] h-[250px] cursor-pointer'>
                        <img className='absolute top-1 right-1' src={VerifiedImg} alt="" />
                        <ImageSkeleton
                            src={personalDetails?.image ? personalDetails?.image : "https://media.istockphoto.com/id/1451587807/vector/user-profile-icon-vector-avatar-or-person-icon-profile-picture-portrait-symbol-vector.jpg?s=612x612&w=0&k=20&c=yDJ4ITX1cHMh25Lt1vI1zBn2cAKKAlByHBvPJ8gEiIg="}
                            imgClassName={'rounded-lg h-[250px] w-[250px]'}
                            skeletonClassName={"rounded-lg h-[250px] w-[250px]"}
                        />
                    </div>
                    <p className="text-center font-inter font-semibold mt-4 text-sm text-[#717171]">Reg. No: {educationalQualification?.regNumber}</p>
                </div>
                <div className='w-full'>
                    <div className="flex justify-between items-center max-[500px]:flex-col max-[500px]:gap-0 gap-3">
                        <h2 onClick={() => handleNavigateDentistDetailPage(_id)} className='text-xl font-inter font-semibold text-[#1A1A1A] cursor-pointer'>{personalDetails?.prefix
                        }. {personalDetails?.Firstname} {personalDetails?.lastName}</h2>
                        <div>
                            <ReactStars size={25} count={5} value={averageRating} edit={false} color2={'#FF8A00'} />
                            <div className='text-[#000000] text-[10px] max-[500px]:text-left text-right font-normal font-inter'>Rated by {dentistRatings?.length} users</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
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
                    <p className='text-[#717171] font-inter font-normal max-[700px]:text-xs text-sm mt-1'>{personalDetails?.Bio}</p>
                    <div className="flex items-center gap-2 mt-2">
                        <div className="border border-[#717171] rounded-md max-[500px]:p-1 flex items-center gap-2 p-2">
                            <img src={VectorImg} alt="vectorImg" className='w-[26px] max-[500px]:w-3' />
                            <span className='text-[#717171] font-inter text-xs max-[500px]:text-[8px]'>{educationalQualification?.yearsOfExperience} years Experience</span>
                        </div>
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

            </div> */}

            <div className="border-2 p-4 grid grid-cols-1 lg:grid-cols-[75%_23%] gap-x-[2%] border-[#95C22B]">
                <div className="grid grid-cols-1 md:grid-cols-[20%_78%] gap-x-[2%]">
                    <div className="flex flex-col items-center">
                        <div className="w-32 h-32 rounded-full relative">
                            <img src={personalDetails?.image} className='w-full h-full object-cover rounded-full' alt="" />
                            <div className="w-8 h-8 rounded-full flex justify-center items-center bg-[#95C22B] absolute -bottom-1 right-0">
                                <FaCheck className='text-white size-5' />
                            </div>
                        </div>
                        <p className="text-center font-inter font-semibold mt-4 text-sm text-[#717171]">Reg. No: {educationalQualification?.regNumber}</p>
                        <Button onClick={() => handleNavigateDentistDetailPage(_id)} className="rounded-none mt-2 h-9">View Profile</Button>
                    </div>
                    <div>
                        <div className="flex flex-col sm:flex-row justify-between gap-3 flex-wrap">
                            <div className="">
                                <h2 className='text-2xl font-inter font-semibold text-gray-600'>{personalDetails?.prefix
                                }. {personalDetails?.Firstname} {personalDetails?.lastName}</h2>
                                <div className='flex gap-2 items-center max-[700px]:text-xs'>
                                    <p className='text-gray-500 font-inter font-semibold'>{personalDetails?.degree[0]}</p>
                                    <div className='w-[1.5px] h-[14px] bg-gray-500'></div>
                                    <p className='text-gray-500 font-inter font-semibold'>{personalDetails?.specialty}</p>
                                </div>
                                <p className='text-[#95C22B] font-inter text-lg font-bold'>{clinic?.length === 1 ? clinic[0]?.clinicName : clinic?.find((item) => item?.defaultClinic)?.clinicName}</p>
                                <p className='text-gray-500 font-inter font-semibold'>Self Owned Clinic</p>
                                <p className='text-gray-500 font-medium'><b className='mr-2'>Experience:</b> {educationalQualification?.yearsOfExperience}+ Years</p>
                            </div>
                            <div className="max-w-[340px] w-full">
                                <ReactStars size={30} count={5} value={averageRating} edit={false} color2={'#95C22B'} />
                                <b className='text-gray-500'>Monday to Sunday</b>
                                <p className='text-gray-500 font-medium'>10:00 AM to 01:30 PM</p>
                                <p className='text-gray-500 font-medium'>05:30 AM to 08:30 PM</p>
                                <p className='text-gray-500 font-medium'><b className='mr-2'>Info:</b> Monday (Morning) & Sunday(Evening)</p>
                            </div>
                        </div>
                        {/* <p className='text-gray-500 font-medium'><b className='mr-2'>Address:</b> {educationalQualification?.yearsOfExperience}+ Years</p> */}
                    </div>
                </div>
                <div className='lg:border-l-4 border-gray-500 flex flex-row flex-wrap lg:flex-col mt-5 lg:mt-0 items-center md:justify-center gap-2 px-5'>
                    <div className="border-2 flex items-center gap-x-3 justify-center text-gray-400 border-gray-400 px-2 lg:mt-2 h-9 w-full sm:w-44">
                        <IoChatbox className='text-[#95C22B] size-5' />
                        <span className='font-medium'>7 Patient Stories</span>
                    </div>
                    <Button className="rounded-none text-base h-9 w-full sm:w-44">Share Your Review</Button>
                    <Button className="rounded-none text-base h-9 w-full sm:w-44">Book Appointment</Button>
                    <div className="rounded-none mt-1 w-full sm:w-44 flex items-center justify-center gap-x-4">
                        <BiSolidInjection className='text-[#95C22B]' />
                        <FaShieldVirus className='text-[#95C22B]' />
                        <FaRegHeart className='text-[#95C22B]' />
                        <FaCheckCircle className='text-[#95C22B]' />
                    </div>

                </div>
            </div>
            {isConfirmBookingModalOpen &&
                <ConfirmbookingModal
                    isConfirmBookingModalOpen={isConfirmBookingModalOpen}
                    setIsConfirmBookingModalOpen={setIsConfirmBookingModalOpen}
                    dentistId={_id}
                    clinic={[...modifiedClinic, ...clinic]}
                    timing={dentist?.dentistAvailableTiming}
                    selectedIndex={0}
                />
            }
        </>
    )
}

export default Dentist1
