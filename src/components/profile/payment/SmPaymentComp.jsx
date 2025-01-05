import invoice from '@/assets/invoice.png'
import { format } from 'date-fns'
import { useState } from 'react'
import { FaLocationDot } from 'react-icons/fa6'
import { FiExternalLink } from 'react-icons/fi'
import PayNowModal from './PayNowModal'

const SmPaymentComp = ({ payment }) => {
    const [isPayNowModalOpen, setIsPayNowModalOpen] = useState(false);

    return (
        <div className='rounded-md py-[10px] px-3 bg-[#F4F9EA] w-[154px] flex flex-col items-center gap-5'>
            <div className='flex gap-3 justify-start items-center w-full -mb-2'>
                <p className='text-[#717171] text-[10px] font-medium font-inter'>Date</p>
                <p className='text-[#1A1A1A] text-xs font-normal font-inter'>{payment?.appointmentId?.payment?.createdAt && format(new Date(payment?.appointmentId?.payment?.createdAt), "dd-MM-yyyy")}</p>
            </div>
            <div className='flex flex-col justify-center gap-1 w-full'>
                <div className='flex flex-col justify-start items-start'>
                    <p className='text-[#717171] text-[10px] font-medium font-inter'>Dentist</p>
                    <div className='w-full flex justify-start items-center gap-3'>
                        <h5 className='text-[#1A1A1A] text-xs font-normal font-inter'>{payment?.dentistId?.personalDetails?.prefix}. {payment?.dentistId?.personalDetails?.Firstname} {payment?.dentistId?.personalDetails?.lastName}</h5>
                        <FiExternalLink className='text-[#717171]' />
                    </div>
                </div>
                <div className='w-full flex flex-col justify-start items-start'>
                    <p className='text-[#717171] text-[10px] font-medium font-inter'>Clinics</p>
                    <div className='w-full flex justify-between items-center'>
                        <h5 className='text-[#1A1A1A] text-xs font-normal font-inter'>{payment?.clinicId?.clinicName}</h5>
                        <FaLocationDot className='text-[#717171]' />
                    </div>
                </div>
            </div>
            <div className='flex gap-3 justify-start items-center w-full'>
                <p className='text-[#1A1A1A] text-base font-normal font-inter'>₹{payment?.totalAmount}</p>
                <p className={`${payment?.appointmentId?.payment?.paymentStatus === "paid" ? "text-[#00CD4B]" : "text-[#FF0000]"} text-sm capitalize font-normal font-inter`}>{payment?.appointmentId?.payment?.paymentStatus}</p>
            </div>
            {payment.paymentStatus === "paid" ?
                <div className='flex flex-col items-center gap-2'>
                    <button className='rounded-[6px] bg-[#717171] h-8 px-2 flex justify-center items-center gap-[6px] w-[130px]'>
                        <span className='text-[#FFFFFF] text-xs font-medium font-inter'>Paid</span>
                    </button>
                    <button onClick={() => setIsPayNowModalOpen(true)} className='rounded-[6px] border-[1px] border-[#95C22B] h-8 px-2 flex justify-center items-center gap-[6px] w-[130px]'>
                        <img src={invoice} alt="" className='w-[14px] h-[14px]' />
                        <span className='text-[#95C22B] text-xs font-medium font-inter'>Invoice</span>
                    </button>
                </div>
                : <button onClick={() => setIsPayNowModalOpen(true)} className='rounded-[6px] border-[1px] border-[#95C22B] h-8 px-2 flex justify-center items-center gap-[6px] w-[130px]'>
                    <span className='text-[#95C22B] text-xs font-medium font-inter'>Pay Now</span>
                </button>}
            {/* <button className='rounded-lg border-[1px] border-[#95C22B] hover:bg-[#95C22B] text-[#95C22B] hover:text-[#FFFFFF] h-8 px-2 py-2 w-32 flex justify-center items-center'>
                            <span className='text-[10px] font-bold font-inter'>Pay Now</span>
                        </button> */}
            {isPayNowModalOpen &&
                <PayNowModal
                    isPayNowModalOpen={isPayNowModalOpen}
                    setIsPayNowModalOpen={setIsPayNowModalOpen}
                    payment={payment}
                />
            }
        </div>
    )
}

export default SmPaymentComp