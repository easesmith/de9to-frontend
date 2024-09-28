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
            <TableCell>{appointment.date}</TableCell>
            <TableCell>{appointment.scheduledAt}</TableCell>
            <TableCell>{appointment.patient}</TableCell>
            <TableCell>
                {appointment.doctor}
                <FaExternalLinkAlt className='text-[#717171] inline-block ml-4' />
            </TableCell>
            <TableCell className="flex gap-2 items-center">
                {appointment.clinic}
                <FaLocationDot className='text-[#717171]' />
            </TableCell>
            <TableCell className={`font-medium ${appointment.status === "Completed" ? "text-[#00CD4B]" : "text-[#FF0000]"}`}>{appointment.status}</TableCell>
            <TableCell>
                <button onClick={() => setIsAppointmentModalOpen(true)} className='w-6 h-6 rounded-full bg-[#EEEEEEEE] flex justify-center items-center cursor-pointer'>
                    <FaArrowRight className='text-[#95C22B]' />
                </button>
            </TableCell>

            {isAppointmentModalOpen &&
                <AppointmentModal
                    isAppointmentModalOpen={isAppointmentModalOpen}
                    setIsAppointmentModalOpen={setIsAppointmentModalOpen}
                />
            }
        </TableRow>
    )
}

export default Appointment