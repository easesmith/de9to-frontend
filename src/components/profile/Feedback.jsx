import { FaArrowRight, FaTrash } from 'react-icons/fa';
import { TableCell, TableRow } from '../ui/table';
import AppointmentModal from './AppointmentModal';
import { BsThreeDotsVertical } from 'react-icons/bs';
import ReactStars from 'react-stars';
import { format } from 'date-fns';

const Feedback = ({ feedback }) => {
    return (
        <TableRow className="text-[#1A1A1A] font-inter">
            <TableCell>{format(new Date(feedback?.createdAt),"dd/MM/yyy")}</TableCell>
            <TableCell>{feedback?.clinic?"":`${feedback?.dentist?.personalDetails?.prefix} ${feedback?.dentist?.personalDetails?.Firstname}`}</TableCell>
            <TableCell>
                <ReactStars
                    count={5}
                    value={Number(feedback?.patientRating)}
                    color2='#FF8A00'
                    edit={false}
                    size={22}
                />
            </TableCell>
            <TableCell className="text-[#0D0C22]">{feedback?.patientRemarks}</TableCell>
            <TableCell className="flex items-center gap-3">
                <BsThreeDotsVertical className='text-2xl cursor-pointer' />
                <FaTrash className='text-xl cursor-pointer text-[#FF0000]' />
            </TableCell>
        </TableRow>
    )
}

export default Feedback