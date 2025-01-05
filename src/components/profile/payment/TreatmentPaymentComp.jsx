import invoice from '@/assets/invoice.png'
import { format } from 'date-fns'
import { useState } from 'react'
import { MdOutlineFileDownload } from 'react-icons/md'
import { TableCell, TableRow } from '../../ui/table'
import TreatmentPayNowModal from './TreatmentPayNowModal'

const TreatmentPaymentComp = ({ payment,getAppointments }) => {
    const [isPayNowModalOpen, setIsPayNowModalOpen] = useState(false);

    return (
        <>
            <TableRow className="text-[#1A1A1A] font-inter">
                {/* <TableCell className=''>{payment?.date}</TableCell> */}
                <TableCell className="text-[#1A1A1A] text-sm font-normal font-inter">{payment?.date && format(new Date(payment?.date), "dd-MM-yyyy")}</TableCell>
                <TableCell>{payment?.clinicId?.clinicName}</TableCell>
                <TableCell>{payment?.dentistId?.personalDetails?.prefix}. {payment?.dentistId?.personalDetails?.Firstname} {payment?.dentistId?.personalDetails?.lastName}</TableCell>
                <TableCell>₹{payment?.totalAmount}</TableCell>
                <TableCell className={`font-medium capitalize ${payment?.paymentStatus === "paid" ? "text-[#00CD4B]" : "text-[#FF0000]"}`}>{payment?.paymentStatus}</TableCell>
                <TableCell className=''>
                    {payment?.paymentStatus === "paid" ?
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
                    <TreatmentPayNowModal
                        isPayNowModalOpen={isPayNowModalOpen}
                        setIsPayNowModalOpen={setIsPayNowModalOpen}
                        payment={payment}
                        getAppointments={getAppointments}
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

export default TreatmentPaymentComp