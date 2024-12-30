import ProfileLayout from '@/component/Layout/ProfileLayout';
import Appointment from '@/components/profile/Appointment';
import PaymentComp from '@/components/profile/PaymentComp';
import { Button } from '@/components/ui/button';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table";
import { FaLocationDot } from "react-icons/fa6";
import { FiExternalLink } from 'react-icons/fi';
import { MdOutlineFileDownload } from 'react-icons/md';
import invoice from '@/assets/invoice.png'
import { useEffect, useState } from 'react';
import PayNowModal from '@/components/profile/PayNowModal';
import useGetApiReq from '@/hooks/useGetApiReq';
import { readCookie } from '@/utils/readCookie';

const Payment = () => {
    const payments = [
        {
            date: "23/08/2024",
            clinicOrDoctor: "Dr Anusha",
            amount: 400,
            status: "Due"
        },
        {
            date: "23/08/2024",
            clinicOrDoctor: "Dr Anusha",
            amount: 400,
            status: "Paid"
        },
    ]

    const [isPayNowModalOpen, setIsPayNowModalOpen] = useState(false);

    const { res, fetchData, isLoading } = useGetApiReq();
    const userInfo = readCookie("userInfo");
    const [allPayments, setAllPayments] = useState([]);
    console.log("userInfo", userInfo);


    const getAppointments = async () => {
        fetchData(`/patient/get-all-patient-review?patientId=${userInfo?.userId}`);
    }

    useEffect(() => {
        getAppointments();
    }, [])


    useEffect(() => {
        if (res?.status === 200 || res?.status === 201) {
            // setAllPayments(res.data.data);
            console.log("payments response", res);
        }
    }, [res])

    return (
        <ProfileLayout>
            <div className="bg-white rounded-lg p-5">
                <h1 className='font-inter text-2xl font-medium text-[#00214B]'>Payment History</h1>
                <div className="flex gap-4 items-center mt-5">
                    <Button variant="outline" className="border-[#717171] font-normal text-[#717171]">
                        Filter by date
                    </Button>
                    <Select>
                        <SelectTrigger className="w-[130px] border-[#717171] text-[#717171]">
                            <SelectValue placeholder="All Payment" />
                        </SelectTrigger>
                        <SelectContent className="text-[#717171]">
                            <SelectItem value="light">Light</SelectItem>
                            <SelectItem value="dark">Dark</SelectItem>
                            <SelectItem value="system">System</SelectItem>
                        </SelectContent>
                    </Select>

                </div>

                <Table className="mt-4 max-[425px]:hidden">
                    <TableHeader className="bg-[#F6F6F6]">
                        <TableRow className="uppercase">
                            <TableHead className="w-[130px]">Date</TableHead>
                            <TableHead className="w-[190px]">Clinic/Doctor</TableHead>
                            <TableHead className="w-[190px]">Amount</TableHead>
                            <TableHead className="w-[190px]">Status</TableHead>
                            <TableHead className="w-[190px]">Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {payments.map((payment, i) => (
                            <PaymentComp
                                key={i}
                                payment={payment}
                            />
                        ))}
                    </TableBody>
                </Table>
                <div className='max-[425px]:flex hidden mt-4 gap-3 justify-between flex-wrap'>
                    {payments.map((payment, i) => (
                        <div key={i} className='rounded-md py-[10px] px-3 bg-[#F4F9EA] w-[154px] flex flex-col items-center gap-5'>
                            <div className='flex gap-3 justify-start items-center w-full -mb-2'>
                                <p className='text-[#717171] text-[10px] font-medium font-inter'>Date</p>
                                <p className='text-[#1A1A1A] text-xs font-normal font-inter'>{payment.date}</p>
                            </div>
                            <div className='flex flex-col justify-center gap-1 w-full'>
                                <div className='flex flex-col justify-start items-start'>
                                    <p className='text-[#717171] text-[10px] font-medium font-inter'>Dentist</p>
                                    <div className='w-full flex justify-start items-center gap-3'>
                                        <h5 className='text-[#1A1A1A] text-xs font-normal font-inter'>{payment.clinicOrDoctor} </h5>
                                        <FiExternalLink className='text-[#717171]' />
                                    </div>
                                </div>
                                <div className='w-full flex flex-col justify-start items-start'>
                                    <p className='text-[#717171] text-[10px] font-medium font-inter'>Clinics</p>
                                    <div className='w-full flex justify-between items-center'>
                                        <h5 className='text-[#1A1A1A] text-xs font-normal font-inter'>Health marc Clinic</h5>
                                        <FaLocationDot className='text-[#717171]' />
                                    </div>
                                </div>
                            </div>
                            <div className='flex gap-3 justify-start items-center w-full'>
                                <p className='text-[#1A1A1A] text-base font-normal font-inter'>₹{payment.amount}</p>
                                <p className={`${payment.status === "Paid" ? "text-[#00CD4B]" : "text-[#FF0000]"} text-sm font-normal font-inter`}>{payment.status}</p>
                            </div>
                            {payment.status === "Paid" ?
                                <div className='flex flex-col items-center gap-2'>
                                    <button className='rounded-[6px] bg-[#717171] h-8 px-2 flex justify-center items-center gap-[6px] w-[130px]'>
                                        <span className='text-[#FFFFFF] text-xs font-medium font-inter'>Paid</span>
                                    </button>
                                    <button className='rounded-[6px] border-[1px] border-[#95C22B] h-8 px-2 flex justify-center items-center gap-[6px] w-[130px]'>
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
                        </div>
                    ))}
                    {isPayNowModalOpen &&
                        <PayNowModal
                            isPayNowModalOpen={isPayNowModalOpen}
                            setIsPayNowModalOpen={setIsPayNowModalOpen}
                        />
                    }
                </div>
            </div>
        </ProfileLayout>
    )
}

export default Payment