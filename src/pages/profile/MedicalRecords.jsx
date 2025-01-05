import ProfileLayout from '@/component/Layout/ProfileLayout'
import { Button } from '@/components/ui/button'
import { FaLocationDot, FaPlus } from "react-icons/fa6";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import SingleMedicalRecord from '@/components/profile/SingleMedicalRecord';
import { FiExternalLink } from 'react-icons/fi';
import MedicalRecordImageModal from '@/components/profile/MedicalRecordImageModal';
import { useEffect, useState } from 'react';
import useGetApiReq from '@/hooks/useGetApiReq';
import { readCookie } from '@/utils/readCookie';
import ReactPagination from '@/component/allComponents/ReactPagination';
import { format } from 'date-fns';

const records = [
    {
        date: "23/08/2024",
        forWhom: "Myself",
        dentist: "Dr Radheram",
        clinics: "Health marc Clinic",
        instruction: "Surgery, Fillings"
    },
    {
        date: "23/08/2024",
        forWhom: "Myself",
        dentist: "Dr Radheram",
        clinics: "Health marc Clinic",
        instruction: "Surgery, Fillings"
    },
    {
        date: "23/08/2024",
        forWhom: "Myself",
        dentist: "Dr Radheram",
        clinics: "Health marc Clinic",
        instruction: "Surgery, Fillings"
    },
    {
        date: "23/08/2024",
        forWhom: "Myself",
        dentist: "Dr Radheram",
        clinics: "Health marc Clinic",
        instruction: "Surgery, Fillings"
    },
]

const MedicalRecords = () => {
    const [isMedicalRecordModalOpen, setIsMedicalRecordModalOpen] = useState(false);
    const [totalPage, setTotalPage] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    const [total, setTotal] = useState(0);
    const [limit, setLimit] = useState(0);

    const { res, fetchData, isLoading } = useGetApiReq();
    const userInfo = readCookie("userInfo");
    const [allTreatments, setAllTreatments] = useState([]);
    console.log("userInfo", userInfo);


    const getAppointments = async () => {
        fetchData(`/patient/get-treatment-list?patientId=${userInfo?.userId}`);
    }

    useEffect(() => {
        getAppointments();
    }, [])


    useEffect(() => {
        if (res?.status === 200 || res?.status === 201) {
            setAllTreatments(res.data.foundTreatment);
            if (res?.data?.pagination) {
                setTotalPage(res?.data?.pagination?.totalPages)
                setTotal(res?.data?.pagination?.totalDocs)
                setLimit(res?.data?.pagination?.limit)
            }
            console.log("treatment response", res);
        }
    }, [res])

    return (
        <ProfileLayout>
            <div>
                <div className="bg-white rounded-lg p-5">
                    <div className="flex justify-between items-center">
                        <h1 className='font-inter text-2xl font-medium text-[#00214B]max-[425px]:text-xl'>List of Treatments</h1>
                        <Button className="flex items-center gap-1 px-7 max-[425px]:hidden">
                            <FaPlus />
                            Upload
                        </Button>
                    </div>
                    <Button variant="outline" className="border-[#717171] font-normal mt-5 text-[#717171]">
                        Filter by date
                    </Button>

                    <Table className="mt-4 max-[425px]:hidden">
                        <TableHeader className="bg-[#F6F6F6]">
                            <TableRow className="uppercase">
                                <TableHead className="w-[130px]">Date</TableHead>
                                <TableHead className="w-[110px]">For whom</TableHead>
                                <TableHead className="w-[250px]">Dentist</TableHead>
                                <TableHead className="w-[200px]">Clinics</TableHead>
                                <TableHead className="w-[200px]">medical concerns</TableHead>
                                {/* <TableHead></TableHead> */}
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {allTreatments.map((record, i) => (
                                <SingleMedicalRecord
                                    key={i}
                                    record={record}
                                />
                            ))}
                        </TableBody>
                    </Table>
                    <div className='max-[425px]:flex hidden mt-4 gap-3 justify-between flex-wrap w-full'>
                        {allTreatments.map((record, i) => (
                            <div key={i} className='rounded-md py-[10px] px-3 bg-[#F4F9EA] min-w-[133px] w-[47.8%] flex flex-col items-center gap-5'>
                                <div className='flex gap-3 justify-start items-center w-full -mb-3'>
                                    <p className='text-[#717171] text-[10px] font-medium font-inter'>Date</p>
                                    <p className='text-[#1A1A1A] text-xs font-normal font-inter'>{record?.date && format(new Date(record?.date), "dd-MM-yyyy")}</p>
                                </div>
                                <div className='flex flex-col justify-start items-start w-full'>
                                    <p className='text-[#1A1A1A] text-[12px] font-medium font-inter'>{record?.appointmentId?.patientId?.name}</p>
                                    <p className='text-[#717171] text-[10px] font-medium font-inter'>medical concerns:<br /><span className='text-[#1A1A1A] font-semibold'>{record?.dentalIssue}</span></p>
                                </div>
                                <div className='flex flex-col justify-center gap-2 w-full'>
                                    <div className='flex flex-col justify-start items-start'>
                                        <p className='text-[#717171] text-[10px] font-medium font-inter'>Dentist</p>
                                        <div className='w-full flex justify-start items-center gap-3'>
                                            <h5 className='text-[#1A1A1A] text-xs font-normal font-inter'>{`${record?.appointmentId?.dentistId?.personalDetails?.Firstname} ${record?.appointmentId?.dentistId?.personalDetails?.lastName}`} </h5>
                                            <FiExternalLink className='text-[#717171] inline-block ml-3' />
                                        </div>
                                    </div>
                                    <div className='w-full flex flex-col justify-start items-start'>
                                        <p className='text-[#717171] text-[10px] font-medium font-inter'>Clinics</p>
                                        <div className='w-full flex justify-between items-center'>
                                            <h5 className='text-[#1A1A1A] text-xs font-normal font-inter'>{record?.appointmentId?.clinicId?.clinicName}</h5>
                                            <FaLocationDot className='text-[#717171] inline-block ml-3' />
                                        </div>
                                    </div>
                                </div>
                                {/* <button onClick={() => setIsMedicalRecordModalOpen(true)} className='rounded-lg border-[1px] border-[#95C22B] text-[#95C22B] hover:bg-[#95C22B] hover:text-[#FFFFFF] h-8 px-2 flex justify-center items-center gap-[6px] w-full'>
                                    <span className='text-[10px] font-semibold font-poppins'>View Prescription</span>
                                </button> */}
                                {isMedicalRecordModalOpen &&
                                    <MedicalRecordImageModal
                                        isMedicalRecordModalOpen={isMedicalRecordModalOpen}
                                        setIsMedicalRecordModalOpen={setIsMedicalRecordModalOpen}
                                    />
                                }
                            </div>
                        ))}
                    </div>

                    <div className="flex items-center justify-center mt-5">
                        <ReactPagination pageCount={totalPage} setPage={setCurrentPage} />
                    </div>
                </div>
            </div>
        </ProfileLayout>
    )
}

export default MedicalRecords