import PlusImg from '@/assets/medical-doctor-logo-for-sale 1.png';
import VerifiedImg from '@/assets/verified 1.png';
import DoctorBagImg from '@/assets/wpf_doctors-bag.png';
import RupayImg from '@/assets/Rupay.png';
import VectorImg from '@/assets/Vector.png';
import { FaLocationArrow } from 'react-icons/fa';
import { MdOutlineArrowOutward } from "react-icons/md";
import ReactStars from 'react-stars';
import { Button } from './ui/button';
// import { IoMdCall } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { useState } from 'react';
import ConfirmBookingModal from './confirm-booking/ConfirmbookingModal';
import { useNavigate } from 'react-router-dom';

const Clinic = ({clinic}) => {
    const [isConfirmBookingModalOpen, setIsConfirmBookingModalOpen] = useState(false);
    const navigate = useNavigate()

    const handleMapSearch = () => {
        const latitude = 28.6466773;
        const longitude = 77.1564994;
        const mapUrl = `https://www.google.com/maps/@?api=1&map_action=map&center=${latitude},${longitude}&zoom=15`;
        window.open(mapUrl, '_blank'); // Opens Google Maps in a new tab with the coordinates
    };

    return (
        <div className='p-4 rounded-[6px] flex gap-[10px] shadow-custom4 bg-[#FFFFFF]'>
            <div onClick={() => navigate(`/our-clinic/${clinic?._id}`)} className='rounded-[6px] cursor-pointer w-[210px] h-[210px] flex justify-center items-end relative -mt-[10px]'>
                <img className='h-full w-full' src={`${import.meta.env.VITE_IMAGE_URL}/${clinic?.clinicLogo}`} alt="" />
                <img src={VerifiedImg} alt="" className='absolute top-[8%] right-[3%]' />
            </div>
            <div className='pe-[25px] ps-[9px] flex flex-col justify-between gap-2 w-[calc(100%-210px)]'>
                <div className='flex items-center justify-between gap-4'>
                    <div className='flex items-center gap-4'>
                        <h4 onClick={() => navigate(`/our-clinic/${clinic?._id}`)} className='text-[#1A1A1A] cursor-pointer text-2xl font-semibold font-inter'>{clinic?.clinicName}</h4>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <ReactStars className='m-0 disable-hover' size={16} count={5} value={Number(clinic?.avgRating)} color2={'#FF8A00'} edit={false} />
                        <div className='text-[#000000] text-[10px] text-right font-normal font-inter'>Rated by {clinic?.clinicRating?.length} users</div>
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
                            <img src={DoctorBagImg} alt="" />
                            <p className='text-[#838383] text-xs font-normal font-inter'>{clinic?.dentistCount} Dentists</p>
                        </div>
                        <div className='flex items-center gap-[6px] rounded-[35px] px-[10px]'>
                            <img src={RupayImg} alt="" />
                            <p className='text-[#838383] text-xs font-normal font-inter'>₹{clinic?.consultationfee} for consultation</p>
                        </div>
                    </div>
                </div>
                <div className='flex justify-between items-center'>
                    <div className='flex gap-2'>
                        <button onClick={handleMapSearch} className='rounded-[6px] border-[1px] border-[#95C22B] py-[6px] px-2 flex items-center gap-[6px]'>
                            <FaLocationArrow className='text-[#95C22B] text-xs' />
                            <span className='text-[#95C22B] text-xs font-medium font-inter'>Search on map</span>
                        </button>
                        <button className='rounded-[6px] border-[1px] border-[#95C22B] py-[6px] px-2 flex items-center gap-[6px]'>
                            <IoCall className='text-[#95C22B] text-xs' />
                            <span className='text-[#95C22B] text-xs font-medium font-inter'>Call now</span>
                        </button>
                    </div>
                    <div className='flex items-center gap-2'>
                        <p className='text-[#838383] text-sm font-normal font-poppins'><span className='line-through'>₹500</span> <span className='font-semibold'>FREE</span> via <span className='font-semibold'>de<span className='text-[#95C22B]'>9</span>to</span></p>
                        <button onClick={() => setIsConfirmBookingModalOpen(true)} className='rounded-[6px] border-[1px] border-[#95C22B] bg-[#95C22B] py-[6px] px-2 flex justify-center items-center gap-[6px]'>
                            <span className='text-[#FFFFFF] text-xs font-semibold font-inter'>Book for consultation</span>
                            <MdOutlineArrowOutward className='text-[#FFFFFF] text-xs' />
                        </button>
                    </div>
                </div>
                {isConfirmBookingModalOpen &&
                    <ConfirmBookingModal
                        isConfirmBookingModalOpen={isConfirmBookingModalOpen}
                        setIsConfirmBookingModalOpen={setIsConfirmBookingModalOpen}
                    />
                }
            </div>
        </div>
    )
}

export default Clinic