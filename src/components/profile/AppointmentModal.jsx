import logo from '@/assets/logo.png'
import { FaLocationArrow } from "react-icons/fa"
import { IoCall } from "react-icons/io5"
import { Button } from "../ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "../ui/dialog"
import { format } from 'date-fns'

const AppointmentModal = ({ isAppointmentModalOpen, setIsAppointmentModalOpen,appointment }) => {
    const handleMapSearch = () => {
        const latitude = 28.6466773;
        const longitude = 77.1564994;
        const mapUrl = `https://www.google.com/maps/@?api=1&map_action=map&center=${latitude},${longitude}&zoom=15`;
        window.open(mapUrl, '_blank'); // Opens Google Maps in a new tab with the coordinates
    };

    return (
        <Dialog open={isAppointmentModalOpen} onOpenChange={setIsAppointmentModalOpen}>
            <DialogContent className="max-w-[680px] w-full">
                <div className='max-h-[75vh] overflow-y-auto scrollBar'>
                    <DialogHeader>
                        <img src={logo} className='max-w-40 w-full' alt="logo" />
                        <DialogTitle className="font-inter font-bold text-[#0D0E0E] text-2xl pt-1">Your Appointment is {appointment?.status}</DialogTitle>
                        <DialogDescription className="text-base text-[#1A1A1A] font-inter pt-4">
                            Hello {appointment?.patientId?.name}, <br />
                            Thanks for booking the appointment on De9to. Please find below the details of your appointment.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid grid-cols-[40%_60%] border border-[#717171] mt-2">
                        <div>
                            <p className="p-2 border-b border-[#717171] text-[#1A1A1A] font-inter">Doctor’s name</p>
                            <p className="p-2 border-b border-[#717171] text-[#1A1A1A] font-inter">Date & Time</p>
                            <p className="p-2 border-b border-[#717171] text-[#1A1A1A] font-inter">For</p>
                            <p className="p-2 border-b border-[#717171] text-[#1A1A1A] font-inter row-span-3">
                                Clinic Details
                                <div className="h-9"></div>
                            </p>
                            <p className="p-2 text-[#1A1A1A] font-inter">Appointment ID</p>
                        </div>
                        <div className="border-l border-[#717171]">
                            <p className="p-2 border-b border-[#717171] text-[#1A1A1A] font-inter">{`${appointment?.dentistId?.personalDetails?.prefix} ${appointment?.dentistId?.personalDetails?.Firstname}`}</p>
                            <p className="p-2 border-b border-[#717171] text-[#1A1A1A] font-inter">{format(new Date(appointment?.timing?.date),"EEE dd, yyy")} | {appointment?.timing?.slot?.startTime || "no time"}</p>
                            <p className="p-2 border-b border-[#717171] text-[#1A1A1A] font-inter">{appointment?.patientId?.name}</p>
                            <p className="p-2 border-b border-[#717171] text-[#1A1A1A] font-inter">
                            {appointment?.clinicId?.clinicName}
                                <div className="flex gap-2 mt-1">
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
                            <p className="p-2 text-[#1A1A1A] font-inter">{appointment?._id}</p>
                        </div>
                    </div>
                    <Button className="w-full mt-5" onClick={() => setIsAppointmentModalOpen(false)}>Reschedule</Button>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default AppointmentModal