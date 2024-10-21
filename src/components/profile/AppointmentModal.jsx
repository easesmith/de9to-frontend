import logo from '@/assets/logo.png'
import { FaLocationArrow } from "react-icons/fa"
import { IoCall } from "react-icons/io5"
import { Button } from "../ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "../ui/dialog"
import { format, parse } from 'date-fns'

const AppointmentModal = ({ isAppointmentModalOpen, setIsAppointmentModalOpen, appointment }) => {
    const handleMapSearch = () => {
        const latitude = 28.6466773;
        const longitude = 77.1564994;
        const mapUrl = `https://www.google.com/maps/@?api=1&map_action=map&center=${latitude},${longitude}&zoom=15`;
        window.open(mapUrl, '_blank'); // Opens Google Maps in a new tab with the coordinates
    };

    console.log("appointment?.timing?.date", appointment?.timing?.date);
    const parsedDate = parse(appointment?.timing?.date, "dd-MM-yyyy", new Date());
    const formattedDate = format(parsedDate, "EEE dd, yyyy");

    return (
        <Dialog open={isAppointmentModalOpen} onOpenChange={setIsAppointmentModalOpen}>
            <DialogContent className="max-w-[620px] max-sm:w-[320px] w-full rounded-lg p-4">
                <div className='max-h-[75vh] overflow-y-auto scrollBar'>
                    <DialogHeader>
                        <div className='flex justify-start max-sm:justify-center w-full'>
                            <img src={logo} className='max-w-40 max-sm:w-[296px] max-sm:h-[65px] w-full' alt="logo" />
                        </div>
                        <DialogTitle className="font-inter font-bold text-[#0D0E0E] text-2xl max-sm:text-xl max-sm:text-center pt-1">Your Appointment is {appointment?.status}</DialogTitle>
                        <DialogDescription className="text-base text-[#1A1A1A] max-sm:text-center font-inter pt-4">
                            Hello {appointment?.patientId?.name}, <br />
                            Thanks for booking the appointment on De9to. Please find below the details of your appointment.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid grid-cols-[40%_60%] border border-[#717171] mt-2">
                        <div>
                            <p className="p-2 border-b border-[#717171] text-[#1A1A1A] max-sm:text-xs font-inter">Doctor’s name</p>
                            <p className="p-2 border-b border-[#717171] text-[#1A1A1A] max-sm:text-xs font-inter">Date & Time</p>
                            <p className="p-2 border-b border-[#717171] text-[#1A1A1A] max-sm:text-xs font-inter">For</p>
                            <p className="p-2 border-b border-[#717171] text-[#1A1A1A] max-sm:text-xs font-inter row-span-3 h-[110px]">
                                Clinic Details
                                <div className="h-9"></div>
                            </p>
                            <p className="p-2 text-[#1A1A1A] max-sm:text-xs font-inter">Appointment ID</p>
                        </div>
                        <div className="border-l border-[#717171]">
                            <p className="p-2 border-b border-[#717171] text-[#1A1A1A] max-sm:text-xs font-inter">{`${appointment?.dentistId?.personalDetails?.prefix} ${appointment?.dentistId?.personalDetails?.Firstname}`}</p>
                            <p className="p-2 border-b border-[#717171] text-[#1A1A1A] max-sm:text-xs font-inter">{formattedDate} | {appointment?.timing?.slot?.startTime || "no time"}</p>
                            <p className="p-2 border-b border-[#717171] text-[#1A1A1A] max-sm:text-xs font-inter">{appointment?.patientId?.name}</p>
                            <p className="p-2 border-b border-[#717171] text-[#1A1A1A] max-sm:text-xs font-inter h-[110px]">
                                {appointment?.clinicId?.clinicName}
                                <div className="flex flex-wrap gap-2 mt-1">
                                    <button onClick={handleMapSearch} className='rounded-[6px] border-[1px] border-[#95C22B] h-8 px-2 flex items-center gap-[6px]'>
                                        <FaLocationArrow className='text-[#95C22B] text-xs' />
                                        <span className='text-[#95C22B] text-xs font-medium font-inter'>Search on map</span>
                                    </button>
                                    <button className='rounded-[6px] border-[1px] border-[#95C22B] h-8 px-2 flex items-center gap-[6px]'>
                                        <IoCall className='text-[#95C22B] text-xs' />
                                        <span className='text-[#95C22B] text-xs font-medium font-inter'>Call now</span>
                                    </button>
                                </div>
                            </p>
                            <p className="p-2 text-[#1A1A1A] max-sm:text-xs font-inter">{appointment?._id}</p>
                        </div>
                    </div>
                    <Button className="w-full mt-5 max-sm:text-base" onClick={() => setIsAppointmentModalOpen(false)}>Reschedule</Button>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default AppointmentModal