import { useState } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { TableCell, TableRow } from '../../ui/table'
import AppointmentModal from '../AppointmentModal'
import invoice from '@/assets/invoice.png'
import PayNowModal from './PayNowModal'
import { MdOutlineFileDownload } from 'react-icons/md'
import { format } from 'date-fns'

const PaymentComp = ({ payment }) => {
    const [isPayNowModalOpen, setIsPayNowModalOpen] = useState(false);

    return (
        <>
            <TableRow className="text-[#1A1A1A] font-inter">
                {/* <TableCell className=''>{payment?.date}</TableCell> */}
                <TableCell className="text-[#1A1A1A] text-sm font-normal font-inter">{payment?.appointmentId?.payment?.createdAt && format(new Date(payment?.appointmentId?.payment?.createdAt), "dd-MM-yyyy")}</TableCell>
                <TableCell>{payment?.clinicId?.clinicName}</TableCell>
                <TableCell>{payment?.dentistId?.personalDetails?.prefix}. {payment?.dentistId?.personalDetails?.Firstname} {payment?.dentistId?.personalDetails?.lastName}</TableCell>
                <TableCell>₹{payment?.totalAmount}</TableCell>
                <TableCell className={`font-medium capitalize ${payment?.appointmentId?.payment?.paymentStatus === "paid" ? "text-[#00CD4B]" : "text-[#FF0000]"}`}>{payment?.appointmentId?.payment?.paymentStatus}</TableCell>
                <TableCell className=''>
                    {payment?.appointmentId?.payment?.paymentStatus === "paid" ?
                        <div className='flex items-center gap-2'>
                            <div className="rounded-lg px-1 text-xs text-center py-1 bg-[#717171] text-white w-10">Paid</div>
                            <img onClick={() => setIsPayNowModalOpen(true)} className='cursor-pointer' src={invoice} alt="" />
                            {/* <MdOutlineFileDownload className='text-2xl cursor-pointer text-[#95C22B]' /> */}
                        </div>
                        : <button onClick={() => setIsPayNowModalOpen(true)} className='rounded-[6px] border-[1px] border-[#95C22B] h-8 px-2 flex items-center gap-[6px]'>
                            <span className='text-[#95C22B] text-xs font-medium font-inter'>Pay Now</span>
                        </button>}
                </TableCell>

                {isPayNowModalOpen &&
                    <PayNowModal
                        isPayNowModalOpen={isPayNowModalOpen}
                        setIsPayNowModalOpen={setIsPayNowModalOpen}
                        payment={payment}
                    />
                }
            </TableRow>
        </>
    )
}

export default PaymentComp