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
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Calendar } from '@/components/ui/calendar';
import { format } from 'date-fns';
import { FiExternalLink } from 'react-icons/fi';
import { FaLocationDot } from 'react-icons/fa6';
import { FaArrowRight } from 'react-icons/fa';
import AppointmentModal from '@/components/profile/AppointmentModal';
import { useLocation, useNavigate } from 'react-router-dom';

const Appointments = () => {
    const { res, fetchData, isLoading } = useGetApiReq();
    const { res: appointmentRes, fetchData: fetchAppointmentData, isLoading: isAppointmentLoading } = useGetApiReq();
    const userInfo = readCookie("userInfo");
    const [status, setStatus] = useState("all");
    const [allAppointments, setAllAppointments] = useState([]);
    const [isCalendarOpen, setIsCalendarOpen] = useState(false);
    const [date, setDate] = useState();
    const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);
    const navigate = useNavigate();
    const { pathname } = useLocation();

    const getAppointments = async () => {
        fetchData(`/patient/get-all-appointments?patientId=${userInfo?.userId}&status=${status}`);
    }

    console.log("date", date);


    useEffect(() => {
        !date && getAppointments();
    }, [status])


    useEffect(() => {
        if (res?.status === 200 || res?.status === 201) {
            setAllAppointments(res.data.foundAppointments)
            console.log("appointments response", res);
        }
    }, [res])

    const filterAppointments = async () => {
        fetchAppointmentData(`/patient/filter-appointment-by-date?patientId=${userInfo?.userId}&date=${format(new Date(date), "dd-MM-yyy")}&status=${status}`);
    }

    useEffect(() => {
        setIsCalendarOpen(false);
        date && filterAppointments();
    }, [date, status])


    useEffect(() => {
        if (appointmentRes?.status === 200 || appointmentRes?.status === 201) {
            console.log("filter appointments response", appointmentRes);
            setAllAppointments(appointmentRes?.data?.data?.appointments);
        }
    }, [appointmentRes])

    return (
        <ProfileLayout>
            <div className="bg-white rounded-lg p-5">
                <h1 className='font-inter text-2xl font-medium text-[#00214B] max-[425px]:text-xl'>List of Appointments</h1>

                <div className='flex items-center gap-2 mt-5'>
                    <button onClick={() => navigate("/profile/medical-records/appointment")} className={`border-b-[3px]  ${pathname === "/profile/medical-records/appointment" ? "text-[#1AA6F1] border-[#1AA6F1]" : "border-transparent"} font-inter px-2 py-1`}>Appointment</button>
                    <button onClick={() => navigate("/profile/medical-records/treatment")} className={`border-b-[3px] ${pathname === "/profile/medical-records/treatment" ? "text-[#1AA6F1] border-[#1AA6F1]" : "border-transparent"} font-inter px-2 py-1`}>Treatment</button>
                </div>

                <div className="flex gap-4 items-center mt-5">
                    <Popover open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
                        <PopoverTrigger asChild>
                            <Button variant="outline" className="border-[#717171] font-normal text-[#717171] ">
                                Filter by date
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                            <Calendar
                                mode="single"
                                selected={date}
                                onSelect={setDate}
                                initialFocus
                            />
                        </PopoverContent>
                    </Popover>
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

                <Table className="mt-4 max-[425px]:hidden">
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
                        {allAppointments?.map((appointment, i) => (
                            <Appointment
                                key={i}
                                appointment={appointment}
                                index={i}
                            />
                        ))}

                    </TableBody>
                </Table>
                <div className='max-[425px]:flex hidden mt-4 gap-3 justify-between flex-wrap w-full'>
                    {allAppointments?.map((appointment, i) => (
                        <>
                            <div key={i} className='rounded-md py-[10px] px-3 bg-[#F4F9EA] min-w-[133px] w-[47.8%] flex flex-col items-center gap-5'>
                                <div className='flex gap-3 justify-start items-center w-full -mb-3'>
                                    <p className='text-[#717171] text-[10px] font-medium font-inter'>Date</p>
                                    <p className='text-[#1A1A1A] text-xs font-normal font-inter'>{appointment?.timing?.date}</p>
                                </div>
                                <div className='flex gap-3 justify-start items-center w-full -mt-[6px] -mb-3'>
                                    <p className='text-[#717171] text-[8px] font-medium font-inter'>Scheduled at</p>
                                    <p className='text-[#1A1A1A] text-[10px] font-normal font-inter'>{appointment?.timing?.slot?.startTime || "no time"}</p>
                                </div>
                                <div className='flex flex-col justify-start items-start w-full -mb-3'>
                                    <p className='text-[#1A1A1A] text-[12px] font-medium font-inter'>{appointment?.patientId?.name}</p>
                                </div>
                                <div className='flex flex-col justify-center gap-2 w-full'>
                                    <div className='flex flex-col justify-start items-start'>
                                        <p className='text-[#717171] text-[10px] font-medium font-inter'>Dentist</p>
                                        <div className='w-full flex justify-start items-center gap-3'>
                                            <h5 className='text-[#1A1A1A] text-xs font-normal font-inter'>{`${appointment?.dentistId?.personalDetails?.prefix} ${appointment?.dentistId?.personalDetails?.Firstname} ${appointment?.dentistId?.personalDetails?.lastName}`}</h5>
                                            <FiExternalLink className='text-[#717171]' />
                                        </div>
                                    </div>
                                    <div className='w-full flex flex-col justify-start items-start'>
                                        <p className='text-[#717171] text-[10px] font-medium font-inter'>Clinics</p>
                                        <div className='w-full flex justify-between items-center'>
                                            <h5 className='text-[#1A1A1A] text-xs font-normal font-inter'>{appointment?.clinicId?.clinicName}</h5>
                                            <FaLocationDot className='text-[#717171]' />
                                        </div>
                                    </div>
                                </div>
                                <div className={`font-medium ${appointment.status === "completed" ? "text-[#00CD4B]" : appointment.status === "cancelled" ? "text-[#FF0000]" : appointment.status === "upcoming" ? "text-blue-400" : "text-yellow-400"}`}>{appointment?.status.charAt(0).toUpperCase() + appointment?.status.slice(1).toLowerCase()}</div>
                                <button onClick={() => setIsAppointmentModalOpen(true)} className='rounded-lg border-[1px] border-[#95C22B] text-[#95C22B] hover:bg-[#95C22B] hover:text-[#FFFFFF] h-8 px-2 flex justify-center items-center gap-[6px] w-full'>
                                    <span className='text-[10px] font-semibold font-poppins'>Check Details</span>
                                    <div className='w-4 h-4 rounded-full bg-[#EEEEEEEE] flex justify-center items-center cursor-pointer'>
                                        <FaArrowRight className='text-[#95C22B] text-[10px]' />
                                    </div>
                                </button>
                            </div>
                            {isAppointmentModalOpen &&
                                <AppointmentModal
                                    isAppointmentModalOpen={isAppointmentModalOpen}
                                    setIsAppointmentModalOpen={setIsAppointmentModalOpen}
                                    appointment={appointment}
                                />
                            }
                        </>
                    ))}
                </div>
                {allAppointments?.length === 0 && isLoading &&
                    <Spinner size={30} />
                }

                {allAppointments?.length === 0 && !isLoading &&
                    <div className='pt-5'>
                        <DataNotFound name={"Appointments"} />
                    </div>
                }
            </div>
        </ProfileLayout>
    )
}

export default Appointments