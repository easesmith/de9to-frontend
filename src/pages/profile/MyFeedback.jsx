import ProfileLayout from '@/component/Layout/ProfileLayout';
import DataNotFound from '@/components/DataNotFound';
import Feedback from '@/components/profile/Feedback';
import Spinner from '@/components/Spinner';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import {
    Table,
    TableBody,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table";
import useGetApiReq from '@/hooks/useGetApiReq';
import { cn } from '@/lib/utils';
import { readCookie } from '@/utils/readCookie';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import { FiExternalLink } from 'react-icons/fi';
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import ReactStars from 'react-stars';

const MyFeedback = () => {
    const [isCalendarOpen, setIsCalendarOpen] = useState(false);
    const [date, setDate] = useState();
  
    const handleDateSelect = (value) => {
      setDate(value);
      setIsCalendarOpen(false);
    };    const { res, fetchData, isLoading } = useGetApiReq();
    const userInfo = readCookie("userInfo");
    const [allReviews, setAllReviews] = useState([]);
    console.log("userInfo", userInfo);


    const getReviews = async () => {
        fetchData(`/patient/get-all-patient-review?patientId=${userInfo?.userId}&date=${date || ""}`);
    }

    useEffect(() => {
        getReviews();
    }, [date])


    useEffect(() => {
        if (res?.status === 200 || res?.status === 201) {
            setAllReviews(res.data.data);
            console.log("reviews response", res);
        }
    }, [res])

    return (
        <ProfileLayout>
            <div className="bg-white rounded-lg p-5">
                <h1 className='font-inter text-2xl font-medium text-[#00214B] max-[425px]:text-xl'>My Feedback</h1>
                <Popover open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-[240px] mt-5 text-[#717171] text-base font-normal font-inter h-10 flex justify-between",
                  !date && "text-muted-foreground h-10",
                )}
              >
                {date ? format(date, "PPP") : "Pick a date"}
                <CalendarIcon />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={date}
                onSelect={handleDateSelect}
                initialFocus
              />
            </PopoverContent>
          </Popover>

                <Table className="mt-4 max-[425px]:hidden">
                    <TableHeader className="bg-[#F6F6F6]">
                        <TableRow className="uppercase">
                            <TableHead className="w-[130px]">Date</TableHead>
                            <TableHead className="w-[230px]">Clinic/Doctor</TableHead>
                            <TableHead className="w-[130px]">ratings</TableHead>
                            <TableHead className="w-[380]">Feedback</TableHead>
                            <TableHead className="w-[110px]">Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {allReviews.map((feedback, i) => (
                            <Feedback
                                key={i}
                                feedback={feedback}
                                getReviews={getReviews}
                            />
                        ))}
                    </TableBody>
                </Table>

                <div className='mt-4 max-[425px]:flex flex-wrap gap-3 justify-between hidden w-full'>
                    {allReviews.map((feedback, i) => (
                        <div key={i} className='h-full rounded-md py-[10px] px-3 bg-[#F4F9EA] min-w-[133px] w-[47.8%] flex flex-col items-center gap-2'>
                            <div className='flex gap-3 justify-start items-center w-full'>
                                <p className='text-[#717171] text-[10px] font-medium font-inter'>Date</p>
                                <p className='text-[#1A1A1A] text-xs font-normal font-inter'>{format(new Date(feedback?.createdAt), "dd/MM/yyy")}</p>
                            </div>
                            <div className='flex flex-col justify-center gap-1 w-full'>
                                <div className='flex flex-col justify-start items-start'>
                                    <p className='text-[#717171] text-[10px] font-medium font-inter'>Dentist</p>
                                    <div className='w-full flex justify-start items-center'>
                                        <h5 className='text-[#1A1A1A] text-xs font-normal font-inter'>{feedback?.clinic ? feedback?.clinic?.clinicName : `${feedback?.dentist?.personalDetails?.prefix} ${feedback?.dentist?.personalDetails?.Firstname}`} </h5>
                                        <FiExternalLink className='text-[#717171] inline-block ml-3' />
                                    </div>
                                </div>
                            </div>
                            <ReactStars count={5} value={Number(feedback?.patientRating)} edit={false} color2='#FF8A00' size={20} className='my-1' />
                            <div className='h-full flex flex-col justify-start items-start w-full'>
                                <p className='text-[#717171] text-[10px] font-medium font-inter'>Feedback</p>
                                <p className='text-[#0D0C22] text-[10px] font-normal font-inter break-all'>{feedback?.patientRemarks}</p>
                            </div>
                            <div className='flex items-center gap-2 w-full'>
                                <button className='rounded-[6px] border-[1px] w-full border-[#95C22B] h-8 px-2 flex justify-center items-center gap-[6px]'>
                                    <MdEdit className='text-[#95C22B]' />
                                    <span className='text-[#95C22B] text-[10px] font-medium font-inter'>Edit</span>
                                </button>
                                <MdDelete className='text-[#FF0000] text-4xl' />
                            </div>
                        </div>
                    ))}
                </div>

                {allReviews?.length === 0 && isLoading &&
                    <Spinner size={30} />
                }

                {allReviews?.length === 0 && !isLoading &&
                    <div className='pt-5'>
                        <DataNotFound name={"Reviews"} />
                    </div>
                }
            </div>
        </ProfileLayout>
    )
}

export default MyFeedback