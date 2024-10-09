import clinicImg from '@/assets/image (5).png'
import { FaLocationArrow } from 'react-icons/fa'
import ReactStars from 'react-stars'
import { Button } from './ui/button'
import ConfirmBookingModal from './confirm-booking/ConfirmbookingModal'
import { useState } from 'react'
import { FiArrowUpRight } from 'react-icons/fi'

const ClinicAppointment = ({ clinic, dentistId, dentistDetails }) => {
    const { clinicPhotos, clinicName, clinicAddress, city, nearbyLandmark,clinicLogo, state, clinicPincode,consultationfee } = clinic || {};
    const [isConfirmBookingModalOpen, setIsConfirmBookingModalOpen] = useState(false);

    const handleMapSearch = () => {
        const latitude = 28.6466773;
        const longitude = 77.1564994;
        const mapUrl = `https://www.google.com/maps/@?api=1&map_action=map&center=${latitude},${longitude}&zoom=15`;
        window.open(mapUrl, '_blank'); // Opens Google Maps in a new tab with the coordinates
    };

    return (
        <div className='w-full'>
            <div className="grid grid-cols-[8px_1fr] gap-1">
                <div className="border-l-8 border-[#95C22B] h-full rounded-full w-2"></div>
                <div className='border-2 border-l-transparent border-[#5B5B5B] rounded-tr-md rounded-br-md px-4 grid grid-cols-2 py-2'>
                    <img className='w-full' src={`${import.meta.env.VITE_IMAGE_URL}/${clinicLogo}`} alt="" />
                    <div>
                        <ReactStars edit={false} size={25} count={5} value={5} color2={'#FF8A00'} />
                        <div className="flex justify-between items-center">
                            <h2 className='font-inter font-semibold text-[#1A1A1A]'>{clinicName}</h2>
                            <Button onClick={handleMapSearch} variant="outline" className="flex gap-2 text-[#717171] border-[#717171] hover:text-[#939292]">
                                <FaLocationArrow className='text-[#717171]' />
                                <span>Search on map</span>
                            </Button>
                        </div>
                        <p className='font-inter text-sm text-[#717171] my-2'><span className='font-bold'>Fee:</span> ₹{consultationfee}</p>
                        <p className='font-inter text-sm text-[#717171] my-2'><span className='font-bold'>Timings:</span> Mon-Sat (10:45AM- 4:00PM)</p>
                        <p className='font-inter text-sm text-[#717171] my-2'><span className='font-bold'>Address:</span>  {`${clinicAddress}, ${nearbyLandmark}, ${city}, ${state}, ${clinicPincode}`}</p>
                        <div className='flex justify-between items-end'>
                            {/* <p className='font-inter text-sm text-[#5B5B5B]'>Booked appointment on 23 Aug’24</p> */}
                            {/* <Button onClick={() => { }} className="bg-[#465C13] mt-2 hover:bg-[#526d13] flex gap-3 items-center px-6 rounded-[10px]">
                                Pending
                            </Button> */}
                            <Button onClick={() => setIsConfirmBookingModalOpen(true)} className="bg-[#95C22B] mt-2 ml-auto hover:bg-[#9dd41d] flex gap-3 items-center px-6 rounded-[10px]">
                                <span>Book Appointment</span>
                                <FiArrowUpRight className='text-2xl' />
                            </Button>
                        </div>
                        {isConfirmBookingModalOpen &&
                            <ConfirmBookingModal
                                isConfirmBookingModalOpen={isConfirmBookingModalOpen}
                                setIsConfirmBookingModalOpen={setIsConfirmBookingModalOpen}
                                clinic={clinic}
                                dentistId={dentistId}
                                timing={dentistDetails?.dentistAvailableTiming}
                                selectedIndex={0}
                            />
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClinicAppointment