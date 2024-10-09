import PlusImg from '@/assets/medical-doctor-logo-for-sale 1.png'
import doctorImg from '@/assets/Rectangle 34624568.png'
import VectorImg5 from '@/assets/Vector (5).png'
import VerifiedImg from '@/assets/verified 1.png'
import Layout from '@/component/Layout/Layout'
import ConfirmBookingForm from '@/components/confirm-booking/ConfirmBookingForm'
import ConfirmBookingModal from '@/components/confirm-booking/ConfirmbookingModal'
import { Button } from '@/components/ui/button'
import useGetApiReq from '@/hooks/useGetApiReq'
import { readCookie } from '@/utils/readCookie'
import { format } from 'date-fns'
import { useCallback, useEffect, useState } from 'react'
import { FaGraduationCap, FaLocationArrow, FaRegCalendarAlt, FaRegClock } from 'react-icons/fa'
import { MdCall } from 'react-icons/md'
import { useLocation } from 'react-router-dom'
import ReactStars from 'react-stars'

const ConfirmBookingPage = () => {
    const { state: { data, clinicDetails, slotId, timing, startIndex } } = useLocation();
    const { clinicPhotos, clinicName, clinicAddress, city, nearbyLandmark, state, clinicPincode } = clinicDetails || {};

    const userInfo = readCookie("userInfo");
    const { res, fetchData, isLoading } = useGetApiReq();
    console.log("userInfo", userInfo);
    console.log("data", data);
    console.log("clinicDetails", clinicDetails);
    console.log("slotId", slotId);

    const [isConfirmBookingModalOpen, setIsConfirmBookingModalOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState(data?.date);  // Initialize with default values
    const [selectedTime, setSelectedTime] = useState(data?.time);  // Initialize with default values

    useEffect(() => {
        setSelectedDate(data?.date);
        setSelectedTime(data?.time);
    }, [data])


    const [dentistDetails, setDentistDetails] = useState("")

    const getDentistDetails = useCallback(async () => {
        fetchData(`/dentist/get-dentist-details?dentistId=${data?.dentistId || "66d02520cd6af954e0eba864"}`);
    }, [fetchData])

    useEffect(() => {
        getDentistDetails();
    }, [])

    useEffect(() => {
        if (res?.status === 200 || res?.status === 201) {
            console.log("Dentist details res", res);
            setDentistDetails(res?.data?.data);
        }
    }, [res])

    const { personalDetails, clinic = [], educationalQualification } = dentistDetails || {};

    console.log("clinic", clinic[0]);


    return (
        <Layout>
            <div className='grid grid-cols-2 gap-5 max-w-[1240px] mx-auto mb-5'>
                <div className='bg-[#FCFFF4] px-4 py-6'>
                    <h1 className='font-inter font-medium text-3xl'>In Clinic Appointment</h1>
                    <h3 className='mt-5 font-inter text-xl'>Appointment Details</h3>
                    <div className='flex justify-between items-start mt-5'>
                        <div className='flex items-center gap-2'>
                            <FaRegCalendarAlt className='text-[#717171]' />
                            <span className='font-inter text-[#1A1A1A]'>On {format(new Date(selectedDate), "EEE MMM dd,yy")}</span>
                        </div>
                        <div>
                            <div className='flex items-center gap-2'>
                                <FaRegClock className='text-[#717171]' />
                                <span className='font-inter text-[#1A1A1A]'>At {selectedTime}</span>
                            </div>
                            <Button onClick={() => setIsConfirmBookingModalOpen(true)} variant="outline" className="h-7 text-[#95C22B] hover:text-[#95C22B] mt-4">Change Date & Time</Button>
                        </div>
                    </div>

                    <h4 className='font-inter mt-4 text-[#1A1A1A] font-semibold'>Selected Dentist</h4>
                    <div className='border-2 border-[#C9C9C9] rounded-md p-3 mt-5 grid grid-cols-[24%_73%] gap-3'>
                        <div>
                            <div className='rounded-[6px] relative w-full'>
                                <img className='absolute top-1 right-1' src={VerifiedImg} alt="" />
                                <img className='h-full w-full' src={`${import.meta.env.VITE_IMAGE_URL}/${personalDetails?.image}`} alt="" />
                            </div>
                            <p className="text-center font-inter font-semibold mt-4 text-sm text-[#717171]">Reg. No: {educationalQualification?.regNumber}</p>
                        </div>
                        <div>
                            <div className="flex justify-between items-center gap-3">
                                <h2 className='text-xl font-inter font-semibold text-[#1A1A1A]'>{`${personalDetails?.prefix} ${personalDetails?.Firstname} ${personalDetails?.lastName}`}</h2>
                                <div>
                                    <ReactStars edit={false} size={25} count={5} value={5} color2={'#FF8A00'} />
                                    <div className='text-[#000000] text-[10px] text-right font-normal font-inter'>Rated by 2 users</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaGraduationCap className='text-[#717171] text-2xl' />
                                <div className='flex gap-2 items-center'>
                                    <p className=' text-[#FF8A00] font-inter font-semibold'>{personalDetails?.degree}</p>
                                    <div className='w-[2px] h-[14px] bg-[#FF8A00]'></div>
                                    <p className='text-[#FF8A00] font-inter font-semibold'>Oral Pathology</p>
                                    <div className='w-[2px] h-[14px] bg-[#FF8A00]'></div>
                                    <p className='text-[#FF8A00] font-inter font-semibold'>{clinic[0]?.clinicName}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <h4 className='font-inter mt-4 text-[#1A1A1A] font-semibold'>Selected Clinic</h4>
                    <div className='shadow-lg rounded-md p-3 mt-5 bg-white grid grid-cols-[30%_68%] gap-3'>
                        <div className='rounded-[6px] relative'>
                            <img className='absolute top-1 right-1' src={VerifiedImg} alt="" />
                            <img className='h-full w-full' src={`${import.meta.env.VITE_IMAGE_URL}/${clinic?.clinicLogo}`} alt="" />
                        </div>
                        <div>
                            <div className="flex justify-between items-center gap-3">
                                <h2 className='text-xl font-inter font-semibold text-[#1A1A1A]'>{clinicName}</h2>
                                <div>
                                    <ReactStars edit={false} size={25} count={5} value={5} color2={'#FF8A00'} />
                                    <div className='text-[#000000] text-[10px] text-right font-normal font-inter'>Rated by 2 users</div>
                                </div>
                            </div>
                            <div className="flex gap-2 items-center">
                                <img src={VectorImg5} alt="" />
                                <h5 className='text-[#717171] text-base font-semibold font-inter'>Multi-Speciality Clinic</h5>
                            </div>
                            <p className='font-inter text-sm text-[#717171] my-2'><span className='font-bold'>Address:</span>{`${clinicAddress}, ${nearbyLandmark}, ${city}, ${state}, ${clinicPincode}`}</p>
                            <div className='flex items-center gap-4'>
                                <Button variant="outline" size="sm" className="flex gap-2 text-[#95C22B] border-[#95C22B] hover:text-[#95C22B]">
                                    <MdCall className='text-[#95C22B] text-xl' />
                                    <span>Call now</span>
                                </Button>
                                <Button variant="outline" size="sm" className="flex gap-2 text-[#95C22B] border-[#95C22B] hover:text-[#95C22B]">
                                    <FaLocationArrow className='text-[#95C22B]' />
                                    <span>Search on map</span>
                                </Button>
                            </div>
                        </div>
                    </div>

                    {isConfirmBookingModalOpen &&
                        <ConfirmBookingModal
                            isConfirmBookingModalOpen={isConfirmBookingModalOpen}
                            setIsConfirmBookingModalOpen={setIsConfirmBookingModalOpen}
                            selectedDate={selectedDate}
                            selectedTime={selectedTime}
                            clinic={{ _id: data.clinic }}
                            dentistId={data?.dentistId}
                            timing={timing}
                            selectedIndex={startIndex}
                        // updateDateAndTime={updateDateAndTime}
                        />
                    }
                </div>
                <div className='px-4 py-6'>
                    <h2 className='font-inter text-xl font-medium mb-4'>Enter Patient Details</h2>
                    <ConfirmBookingForm
                        apiData={{ ...data, slotId }}
                    />
                </div>
            </div>
        </Layout>
    )
}

export default ConfirmBookingPage