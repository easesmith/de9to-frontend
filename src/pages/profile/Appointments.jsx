import ProfileLayout from '@/component/Layout/ProfileLayout';
import DataNotFound from '@/components/DataNotFound';
import Appointment from '@/components/profile/Appointment';
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

    const { res, fetchData, isLoading } = useGetApiReq();
    const userInfo = readCookie("userInfo");
    const [status, setStatus] = useState("upcoming")
    const [allAppointments, setAllAppointments] = useState([]);

    const getAppointments = async () => {
        fetchData(`/patient/get-all-appointments?patientId=${userInfo?.userId}&status=${status}`);
    }

    useEffect(() => {
        getAppointments();
    }, [status])


    useEffect(() => {
        if (res?.status === 200 || res?.status === 201) {
            setAllAppointments(res.data.foundAppointments)
            console.log("appointments response", res);
        }
    }, [res])

    return (
        <ProfileLayout>
            <div className="bg-white rounded-lg p-5">
                <h1 className='font-inter text-2xl font-medium text-[#00214B]'>List of Appointments</h1>
                <div className="flex gap-4 items-center mt-5">
                    <Button variant="outline" className="border-[#717171] font-normal text-[#717171]">
                        Filter by date
                    </Button>
                    <Select value={status} onValueChange={(val) => setStatus(val)}>
                        <SelectTrigger className="w-[130px] border-[#717171] text-[#717171]">
                            <SelectValue placeholder="Status" />
                        </SelectTrigger>
                        <SelectContent className="text-[#717171]">
                            <SelectItem value="all">All</SelectItem>
                            <SelectItem value="completed">Completed</SelectItem>
                            <SelectItem value="upcoming">Upcoming</SelectItem>
                            <SelectItem value="active">Active</SelectItem>
                        </SelectContent>
                    </Select>

                </div>

                <Table className="mt-4">
                    <TableHeader className="bg-[#F6F6F6]">
                        <TableRow className="uppercase">
                            <TableHead className="w-[80px] uppercase">SL no</TableHead>
                            <TableHead className="w-[130px]">Date</TableHead>
                            <TableHead className="w-[190px]">Scheduled at</TableHead>
                            <TableHead className="w-[170px]">Patient</TableHead>
                            <TableHead className="w-[210px]">Doctor</TableHead>
                            <TableHead className="w-[190px]">Clinic</TableHead>
                            <TableHead className="w-[150px]">Status</TableHead>
                            <TableHead className="w-[25px]"></TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {allAppointments.map((appointment, i) => (
                            <Appointment
                                key={i}
                                appointment={appointment}
                                index={i}
                            />
                        ))}

                        {allAppointments.length === 0 && isLoading &&
                            <Spinner size={30} />
                        }

                        {allAppointments.length === 0 && !isLoading &&
                            <DataNotFound name={"Appointments"} />
                        }
                    </TableBody>
                </Table>
            </div>
        </ProfileLayout>
    )
}

export default Appointments