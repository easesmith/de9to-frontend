import ProfileLayout from '@/component/Layout/ProfileLayout';
import DataNotFound from '@/components/DataNotFound';
import Feedback from '@/components/profile/Feedback';
import Spinner from '@/components/Spinner';
import { Button } from '@/components/ui/button';
import {
    Table,
    TableBody,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table";
import useGetApiReq from '@/hooks/useGetApiReq';
import { readCookie } from '@/utils/readCookie';
import { format } from 'date-fns';
import { useEffect, useState } from 'react';
import { FiExternalLink } from 'react-icons/fi';
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import ReactStars from 'react-stars';

const MyFeedback = () => {
    const feedbacks = [
        {
            date: "23/08/2024",
            clinicOrDoctor: "Dr Anusha",
            ratings: 4,
            feedback: "Working at Sam.AI has been an incredible journey so far. The technology we're building is truly cutting-edge, and being a part of a team that's revolutionizing how people achieve their goals is immensely fulfilling.",
        },
        {
            date: "23/08/2024",
            clinicOrDoctor: "Dr Anusha",
            ratings: 4,
            feedback: "Working at Sam.AI has been an incredible journey so far. The technology we're building is truly cutting-edge, and being a part of a team that's revolutionizing how people achieve their goals is immensely fulfilling.",
        },
    ]

    const { res, fetchData, isLoading } = useGetApiReq();
    const userInfo = readCookie("userInfo");
    const [allReviews, setAllReviews] = useState([]);
    console.log("userInfo", userInfo);


    const getAppointments = async () => {
        fetchData(`/patient/get-all-patient-review?patientId=${userInfo?.userId}`);
    }

    useEffect(() => {
        getAppointments();
    }, [])


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
                <Button variant="outline" className="border-[#717171] mt-5 font-normal text-[#717171]">
                    Filter by date
                </Button>

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
                                    <div className='w-full flex justify-start items-center gap-3'>
                                        <h5 className='text-[#1A1A1A] text-xs font-normal font-inter'>{feedback?.clinic ? feedback?.clinic?.clinicName : `${feedback?.dentist?.personalDetails?.prefix} ${feedback?.dentist?.personalDetails?.Firstname}`} </h5>
                                        <FiExternalLink className='text-[#717171]' />
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
                    <DataNotFound name={"Reviews"} />
                }
            </div>
        </ProfileLayout>
    )
}

export default MyFeedback