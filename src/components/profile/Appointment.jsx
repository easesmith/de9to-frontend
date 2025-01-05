import { FaArrowRight, FaExternalLinkAlt } from 'react-icons/fa'
import { TableCell, TableRow } from '../ui/table'
import { useState } from 'react'
import AppointmentModal from './AppointmentModal';
import { FaLocationDot } from 'react-icons/fa6';

const Appointment = ({ appointment, index }) => {
    const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);

    return (
        <TableRow className="text-[#1A1A1A] font-inter">
            <TableCell>{index + 1}</TableCell>
            <TableCell>{appointment?.timing?.date}</TableCell>
            <TableCell>{appointment?.timing?.slot?.startTime || "no time"}</TableCell>
            <TableCell>{appointment?.patientId?.name}</TableCell>
            <TableCell>{`${appointment?.dentistId?.personalDetails?.prefix}. ${appointment?.dentistId?.personalDetails?.Firstname} ${appointment?.dentistId?.personalDetails?.lastName}`}
                <FaExternalLinkAlt className='text-[#717171] inline-block ml-3' />
            </TableCell>
            <TableCell>
                {appointment?.clinicId?.clinicName}
                <FaLocationDot className='text-[#717171] inline-block ml-3' />
            </TableCell>
            <TableCell className={`font-medium ${appointment.status === "completed" ? "text-[#00CD4B]" :appointment.status === "cancelled"? "text-[#FF0000]":appointment.status === "upcoming"?"text-blue-400":"text-yellow-400"}`}>{appointment?.status.charAt(0).toUpperCase() + appointment?.status.slice(1).toLowerCase()}</TableCell>
            <TableCell>
                <button onClick={() => setIsAppointmentModalOpen(true)} className='w-6 h-6 rounded-full bg-[#EEEEEEEE] flex justify-center items-center cursor-pointer'>
                    <FaArrowRight className='text-[#95C22B]' />
                </button>
            </TableCell>

            {isAppointmentModalOpen &&
                <AppointmentModal
                    isAppointmentModalOpen={isAppointmentModalOpen}
                    setIsAppointmentModalOpen={setIsAppointmentModalOpen}
                    appointment={appointment}
                />
            }
        </TableRow>
    )
}

export default Appointment