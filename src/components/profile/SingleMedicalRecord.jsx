import { FaArrowRight, FaExternalLinkAlt, FaEye } from 'react-icons/fa'
import { TableCell, TableRow } from '../ui/table'
import { FaLocationDot } from 'react-icons/fa6'
import carouselImg from "@/assets/carouselImg.png"
import { useState } from 'react'
import MedicalRecordImageModal from './MedicalRecordImageModal'
import De9tologo from '@/assets/de9to-logo-1.png'
import { format } from 'date-fns'
import { useNavigate } from 'react-router-dom'

const SingleMedicalRecord = ({ record }) => {
    const [isMedicalRecordModalOpen, setIsMedicalRecordModalOpen] = useState(false);
    // const { appointmentId: { clinicId, dentistId: { personalDetails }, patientId, dentalIssue }, date } = record || {};
    const navigate = useNavigate();

    return (
        <TableRow className="text-[#1A1A1A] font-inter">
            <TableCell>{record?.date && format(new Date(record?.date), "dd-MM-yyyy")}</TableCell>
            <TableCell>{record?.appointmentId?.patientId?.name}</TableCell>
            <TableCell>
                {`${record?.appointmentId?.dentistId?.personalDetails?.Firstname} ${record?.appointmentId?.dentistId?.personalDetails?.lastName}`}
                <FaExternalLinkAlt className='text-[#717171] inline-block ml-4' />
            </TableCell>
            <TableCell>
                {record?.appointmentId?.clinicId?.clinicName}
                <FaLocationDot className='text-[#717171] inline-block ml-3' />
            </TableCell>
            <TableCell>{record?.dentalIssue}</TableCell>
            <TableCell>
                <button onClick={() => navigate(`/profile/medical-records/treatment/${record?._id}`)} className='w-6 h-6 rounded-full bg-[#EEEEEEEE] flex justify-center items-center cursor-pointer'>
                    <FaArrowRight className='text-[#95C22B]' />
                </button>
            </TableCell>
            {isMedicalRecordModalOpen &&
                <MedicalRecordImageModal
                    isMedicalRecordModalOpen={isMedicalRecordModalOpen}
                    image={De9tologo}
                    setIsMedicalRecordModalOpen={setIsMedicalRecordModalOpen}
                />
            }
        </TableRow>
    )
}

export default SingleMedicalRecord