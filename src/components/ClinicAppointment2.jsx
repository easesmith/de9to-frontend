import clinicImg from '@/assets/image (5).png'
import ReactStars from 'react-stars'
import { Button } from './ui/button'
import { FaLocationArrow } from 'react-icons/fa'
import { FiArrowUpRight } from 'react-icons/fi'
import { useState } from 'react'
import ConfirmBookingModal from './confirm-booking/ConfirmbookingModal'

const ClinicAppointment2 = () => {
    const [isConfirmBookingModalOpen, setIsConfirmBookingModalOpen] = useState(false);

    const handleMapSearch = () => {
        const latitude = 28.6466773;
        const longitude = 77.1564994;
        const mapUrl = `https://www.google.com/maps/@?api=1&map_action=map&center=${latitude},${longitude}&zoom=15`;
        window.open(mapUrl, '_blank'); // Opens Google Maps in a new tab with the coordinates
    };
    return (
        <div>
            <div className="grid grid-cols-[8px_1fr] gap-1">
                <div className="border-l-8 border-[#95C22B] h-full rounded-full w-2"></div>
                <div className='border-2 border-l-transparent border-[#5B5B5B] rounded-tr-md rounded-br-md px-4 py-2'>
                    <img src={clinicImg} alt="" />
                    <div>
                        <ReactStars edit={false} size={25} count={5} value={5} color2={'#FF8A00'} />
                        <h2 className='font-inter font-semibold text-[#1A1A1A]'>Dental Care Clinic</h2>
                        <Button onClick={handleMapSearch} variant="outline" className="flex gap-2 mt-3 text-[#717171] border-[#717171] hover:text-[#939292]">
                            <FaLocationArrow className='text-[#717171]' />
                            <span>Search on map</span>
                        </Button>
                        <p className='font-inter text-sm text-[#717171] my-2'><span className='font-bold'>Address:</span> L-31, Block L, Vinay Gulati Marg, West Patel Nagar, Patel Nagar, New Delhi, Delhi 110008</p>
                        <p className='text-[#5B5B5B]'><span className='line-through'>₹500</span> <b>FREE</b> via <b>de<span className='text-[#95C22B]'>9</span>to</b></p>
                        <Button onClick={() => setIsConfirmBookingModalOpen(true)} className="bg-[#95C22B] w-full mt-2 hover:bg-[#9dd41d] flex gap-3 items-center px-6 rounded-[10px]">
                            <span>Book Appointment</span>
                            <FiArrowUpRight className='text-2xl' />
                        </Button>

                        {isConfirmBookingModalOpen &&
                            <ConfirmBookingModal
                                isConfirmBookingModalOpen={isConfirmBookingModalOpen}
                                setIsConfirmBookingModalOpen={setIsConfirmBookingModalOpen}
                            />
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClinicAppointment2