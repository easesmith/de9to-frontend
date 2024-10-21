import ProfileLayout from '@/component/Layout/ProfileLayout'
import { Button } from '@/components/ui/button'
import { FaPlus } from "react-icons/fa6";
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

                    <Table className="mt-4">
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
                </div>
            </div>
        </ProfileLayout>
    )
}

export default MedicalRecords