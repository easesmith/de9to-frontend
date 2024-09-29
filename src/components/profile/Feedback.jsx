import { FaArrowRight, FaTrash } from 'react-icons/fa';
import { TableCell, TableRow } from '../ui/table';
import AppointmentModal from './AppointmentModal';
import { BsThreeDotsVertical } from 'react-icons/bs';
import ReactStars from 'react-stars';

const Feedback = ({ feedback }) => {
    return (
        <TableRow className="text-[#1A1A1A] font-inter">
            <TableCell>{feedback.date}</TableCell>
            <TableCell>{feedback.clinicOrDoctor}</TableCell>
            <TableCell>
                <ReactStars
                    count={5}
                    value={feedback.ratings}
                    color2='#FF8A00'
                    edit={false}
                    size={22}
                />
            </TableCell>
            <TableCell className="text-[#0D0C22]">{feedback.feedback}</TableCell>
            <TableCell className="flex items-center gap-3">
                <BsThreeDotsVertical className='text-2xl cursor-pointer' />
                <FaTrash className='text-xl cursor-pointer text-[#FF0000]' />
            </TableCell>
        </TableRow>
    )
}

export default Feedback