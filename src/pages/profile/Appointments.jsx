import ProfileLayout from '@/component/Layout/ProfileLayout';
import Appointment from '@/components/profile/Appointment';
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


const Appointments = () => {
    const appointments = [
        {
            date: "23/08/2024",
            scheduledAt: "10:30 AM",
            patient: "Myself",
            doctor: "Dr Anusha P",
            clinic: "Health marc Clinic",
            status: "Completed"
        },
        {
            date: "23/08/2024",
            scheduledAt: "10:30 AM",
            patient: "Soumya",
            doctor: "Dr Radheram",
            clinic: "Health marc Clinic",
            status: "Cancelled"
        },
    ]

    return (
        <ProfileLayout>
            <div className="bg-white rounded-lg p-5">
                <h1 className='font-inter text-2xl font-medium text-[#00214B]'>List of Appointments</h1>
                <div className="flex gap-4 items-center mt-5">
                    <Button variant="outline" className="border-[#717171] font-normal text-[#717171]">
                        Filter by date
                    </Button>
                    <Select>
                        <SelectTrigger className="w-[130px] border-[#717171] text-[#717171]">
                            <SelectValue placeholder="All status" />
                        </SelectTrigger>
                        <SelectContent className="text-[#717171]">
                            <SelectItem value="light">Light</SelectItem>
                            <SelectItem value="dark">Dark</SelectItem>
                            <SelectItem value="system">System</SelectItem>
                        </SelectContent>
                    </Select>

                </div>

                <Table className="mt-4">
                    <TableHeader className="bg-[#F6F6F6]">
                        <TableRow className="uppercase">
                            <TableHead className="w-[80px] uppercase">SL no</TableHead>
                            <TableHead className="w-[130px]">Date</TableHead>
                            <TableHead className="w-[190px]">Scheduled at</TableHead>
                            <TableHead className="w-[190px]">Patient</TableHead>
                            <TableHead className="w-[190px]">Doctor</TableHead>
                            <TableHead className="w-[190px]">Clinic</TableHead>
                            <TableHead className="w-[150px]">Status</TableHead>
                            <TableHead className="w-[25px]"></TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {appointments.map((appointment, i) => (
                            <Appointment
                                key={i}
                                appointment={appointment}
                                index={i}
                            />
                        ))}
                    </TableBody>
                </Table>
            </div>
        </ProfileLayout>
    )
}

export default Appointments