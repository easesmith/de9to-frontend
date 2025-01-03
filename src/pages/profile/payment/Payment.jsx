import ReactPagination from '@/component/allComponents/ReactPagination';
import ProfileLayout from '@/component/Layout/ProfileLayout';
import DataNotFound from '@/components/DataNotFound';
import PaymentComp from '@/components/profile/payment/PaymentComp';
import SmPaymentComp from '@/components/profile/payment/SmPaymentComp';
import Spinner from '@/components/Spinner';
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
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table";
import useGetApiReq from '@/hooks/useGetApiReq';
import { readCookie } from '@/utils/readCookie';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Payment = () => {
    const { res, fetchData, isLoading } = useGetApiReq();
    const userInfo = readCookie("userInfo");
    const [allPayments, setAllPayments] = useState([]);
    const [totalPage, setTotalPage] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    const [total, setTotal] = useState(0);
    const [limit, setLimit] = useState(0);
    const navigate = useNavigate();
    const { pathname } = useLocation();

    const getAppointments = async () => {
        // fetchData(`/patient/get-payment-records-patient?patientId=${userInfo?.userId}`);
        fetchData(`/patient/patient-payment-history?patientId=${userInfo?.userId}&paymentFor=appointment&page=${currentPage}`);
    }

    useEffect(() => {
        getAppointments();
    }, [])


    useEffect(() => {
        if (res?.status === 200 || res?.status === 201) {
            console.log("payments response", res);
            const { payments, pagination = "" } = res?.data?.data;
            setAllPayments(payments);
            if (pagination) {
                setTotalPage(pagination?.totalPages)
                setTotal(pagination?.totalDocs)
                setLimit(pagination?.limit)
            }
        }
    }, [res])

    return (
        <ProfileLayout>
            <div className="bg-white rounded-lg p-5">
                <h1 className='font-inter text-2xl font-medium text-[#00214B]'>Payment History</h1>
                <div className='flex items-center gap-2'>
                    <button onClick={() => navigate("/profile/payment/appointment")} className={`border-b-[3px]  ${pathname === "/profile/payment/appointment" ? "text-[#1AA6F1] border-[#1AA6F1]" : "border-transparent"} font-inter px-2 py-1`}>Appointment</button>
                    <button onClick={() => navigate("/profile/payment/treatment")} className={`border-b-[3px] ${pathname === "/profile/payment/treatment" ? "text-[#1AA6F1] border-[#1AA6F1]" : "border-transparent"} font-inter px-2 py-1`}>Treatment</button>
                </div>
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

                <Table className="mt-4 mb-6 max-[425px]:hidden">
                    <TableHeader className="bg-[#F6F6F6]">
                        <TableRow className="uppercase">
                            <TableHead className="w-[130px]">Date</TableHead>
                            <TableHead className="w-[190px]">Clinic Name</TableHead>
                            <TableHead className="w-[190px]">Dentist Name</TableHead>
                            <TableHead className="w-[190px]">Amount</TableHead>
                            <TableHead className="w-[190px]">Payment Status</TableHead>
                            <TableHead className="w-[190px]">Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {allPayments.length > 0 && allPayments.map((payment, index) => (
                            <PaymentComp
                                key={index}
                                payment={payment}
                            />
                        ))}
                    </TableBody>
                </Table>
                <div className='max-[425px]:flex hidden mt-4 mb-6 gap-3 justify-between flex-wrap'>
                    {allPayments.map((payment, i) => (
                        <SmPaymentComp
                            key={i}
                            payment={payment}
                        />
                    ))}
                </div>

                {allPayments?.length === 0 && isLoading &&
                    <Spinner size={30} />
                }

                {allPayments?.length === 0 && !isLoading &&
                    <DataNotFound name={"Payments Record"} />
                }

                <div className="flex items-center justify-center mt-5">
                    <ReactPagination pageCount={totalPage} setPage={setCurrentPage} />
                </div>
            </div>
        </ProfileLayout>
    )
}

export default Payment