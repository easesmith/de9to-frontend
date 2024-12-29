import { FaExternalLinkAlt, FaEye } from 'react-icons/fa'
import { TableCell, TableRow } from '../ui/table'
import { FaLocationDot } from 'react-icons/fa6'
import carouselImg from "@/assets/carouselImg.png"
import { useState } from 'react'
import MedicalRecordImageModal from './MedicalRecordImageModal'
import De9tologo from '@/assets/de9to-logo-1.png'

const SingleMedicalRecord = ({ record }) => {
    const [isMedicalRecordModalOpen, setIsMedicalRecordModalOpen] = useState(false);

    return (
        <TableRow className="text-[#1A1A1A] font-inter">
            <TableCell>{record.date}</TableCell>
            <TableCell>{record.forWhom}</TableCell>
            <TableCell>
                {record.dentist}
                <FaExternalLinkAlt className='text-[#717171] inline-block ml-4' />
            </TableCell>
            <TableCell>
                {record.clinics}
                <FaLocationDot className='text-[#717171] inline-block ml-3' />
            </TableCell>
            <TableCell>{record.instruction}</TableCell>
            <TableCell>
                <button onClick={() => setIsMedicalRecordModalOpen(true)} className='w-10 h-11 rounded-md relative'>
                    <div className='w-full h-full'>
                        <img className='w-full h-full rounded-md' src={carouselImg} alt="carousel image" />
                        {/* Semi-transparent black overlay */}
                        <div className='absolute inset-0 bg-black opacity-30 rounded-md'></div>
                    </div>
                    <FaEye className='text-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />
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