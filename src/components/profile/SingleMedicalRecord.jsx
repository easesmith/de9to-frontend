import { FaExternalLinkAlt, FaEye } from 'react-icons/fa'
import { TableCell, TableRow } from '../ui/table'
import { FaLocationDot } from 'react-icons/fa6'
import carouselImg from "@/assets/carouselImg.png"

const SingleMedicalRecord = ({ record }) => {
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
                <button className='w-10 h-11 rounded-md relative'>
                    <div className='w-full h-full'>
                        <img className='w-full h-full rounded-md' src={carouselImg} alt="carousel image" />
                        {/* Semi-transparent black overlay */}
                        <div className='absolute inset-0 bg-black opacity-30 rounded-md'></div>
                    </div>
                    <FaEye className='text-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />
                </button>

            </TableCell>
        </TableRow>
    )
}

export default SingleMedicalRecord