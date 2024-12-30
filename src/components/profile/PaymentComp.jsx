import { useState } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { TableCell, TableRow } from '../ui/table'
import AppointmentModal from './AppointmentModal'
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
                <TableCell className="text-[#1A1A1A] text-sm font-normal font-inter">{payment?.date && format(new Date(payment?.date), "dd-MM-yyyy")}</TableCell>
                <TableCell>{payment?.appointmentId?.clinicId?.clinicName}</TableCell>
                <TableCell>{payment?.appointmentId?.dentistId?.personalDetails?.Firstname} {payment?.appointmentId?.dentistId?.personalDetails?.lastName}</TableCell>
                <TableCell>{payment?.totalAmount}</TableCell>
                <TableCell className={`font-medium ${payment?.paymentStatus === "Paid" ? "text-[#00CD4B]" : "text-[#FF0000]"}`}>{payment.paymentStatus}</TableCell>
                <TableCell className=''>
                    {payment?.status === "Paid" ?
                        <div className='flex items-center gap-2'>
                            <div className="rounded-lg px-1 text-xs text-center py-1 bg-[#717171] text-white w-10">Paid</div>
                            <img src={invoice} alt="" />
                            <MdOutlineFileDownload className='text-2xl cursor-pointer text-[#95C22B]' />
                        </div>
                        : <button onClick={() => setIsPayNowModalOpen(true)} className='rounded-[6px] border-[1px] border-[#95C22B] h-8 px-2 flex items-center gap-[6px]'>
                            <span className='text-[#95C22B] text-xs font-medium font-inter'>Pay Now</span>
                        </button>}
                </TableCell>

                {isPayNowModalOpen &&
                    <PayNowModal
                        isPayNowModalOpen={isPayNowModalOpen}
                        setIsPayNowModalOpen={setIsPayNowModalOpen}
                    />
                }
            </TableRow>
            {/* <TableRow className="text-[#1A1A1A] font-inter">
                <TableCell>{payment.date}</TableCell>
                <TableCell>{payment.clinicOrDoctor}</TableCell>
                <TableCell>{payment.amount}</TableCell>
                <TableCell className={`font-medium ${payment.status === "Paid" ? "text-[#00CD4B]" : "text-[#FF0000]"}`}>{payment.status}</TableCell>
                <TableCell className=''>
                    {payment.status === "Paid" ?
                        <div className='flex items-center gap-2'>
                            <div className="rounded-lg px-1 text-xs text-center py-1 bg-[#717171] text-white w-10">Paid</div>
                            <img src={invoice} alt="" />
                            <MdOutlineFileDownload className='text-2xl cursor-pointer text-[#95C22B]' />
                        </div>
                        : <button onClick={() => setIsPayNowModalOpen(true)} className='rounded-[6px] border-[1px] border-[#95C22B] h-8 px-2 flex items-center gap-[6px]'>
                            <span className='text-[#95C22B] text-xs font-medium font-inter'>Pay Now</span>
                        </button>}
                </TableCell>
            </TableRow> */}
        </>
    )
}

export default PaymentComp