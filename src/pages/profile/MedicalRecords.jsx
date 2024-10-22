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

const MedicalRecords = () => {

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

    return (
        <ProfileLayout>
            <div>
                <div className="bg-white rounded-lg p-5">
                    <div className="flex justify-between items-center">
                        <h1 className='font-inter text-2xl font-medium text-[#00214B]'>List of Medical Records</h1>
                        <Button className="flex items-center gap-1 px-7">
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
                                <TableHead className="w-[110px] px-0">For whom</TableHead>
                                <TableHead className="w-[200px] px-0">Dentist</TableHead>
                                <TableHead className="w-[200px] px-0">Clinics</TableHead>
                                <TableHead className="w-[200px] px-0">medical concerns</TableHead>
                                <TableHead></TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {records.map((record, i) => (
                                <SingleMedicalRecord
                                    key={i}
                                    record={record}
                                />
                            ))}
                        </TableBody>
                    </Table>
                    <div className='max-[425px]:flex hidden mt-4 gap-3 justify-between flex-wrap w-full'>
                        {records.map((record, i) => (
                            <div key={i} className='rounded-md py-[10px] px-3 bg-[#F4F9EA] min-w-[136px] w-[47.8%] flex flex-col items-center gap-5'>
                                <div className='flex gap-3 justify-start items-center w-full -mb-3'>
                                    <p className='text-[#717171] text-[10px] font-medium font-inter'>Date</p>
                                    <p className='text-[#1A1A1A] text-xs font-normal font-inter'>{record.date}</p>
                                </div>
                                <div className='flex flex-col justify-start items-start w-full'>
                                    <p className='text-[#1A1A1A] text-[12px] font-medium font-inter'>{record.forWhom}</p>
                                    <p className='text-[#717171] text-[10px] font-medium font-inter'>medical concerns:<br/><span className='text-[#1A1A1A] font-semibold'>{record.instruction}</span></p>
                                </div>
                                <div className='flex flex-col justify-center gap-2 w-full'>
                                    <div className='flex flex-col justify-start items-start'>
                                        <p className='text-[#717171] text-[10px] font-medium font-inter'>Dentist</p>
                                        <div className='w-full flex justify-start items-center gap-3'>
                                            <h5 className='text-[#1A1A1A] text-xs font-normal font-inter'>{record.dentist} </h5>
                                            <FiExternalLink className='text-[#717171]' />
                                        </div>
                                    </div>
                                    <div className='w-full flex flex-col justify-start items-start'>
                                        <p className='text-[#717171] text-[10px] font-medium font-inter'>Clinics</p>
                                        <div className='w-full flex justify-between items-center'>
                                            <h5 className='text-[#1A1A1A] text-xs font-normal font-inter'>{record.clinics}</h5>
                                            <FaLocationDot className='text-[#717171]' />
                                        </div>
                                    </div>
                                </div>
                                <button className='rounded-lg border-[1px] border-[#95C22B] text-[#95C22B] hover:bg-[#95C22B] hover:text-[#FFFFFF] h-8 px-2 flex justify-center items-center gap-[6px] w-full'>
                                    <span className='text-[10px] font-semibold font-poppins'>View Prescription</span>
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </ProfileLayout>
    )
}

export default MedicalRecords