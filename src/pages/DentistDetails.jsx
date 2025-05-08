import Layout from '@/component/Layout/Layout'
import AddFeedbackModal from '@/components/AddFeedbackModal'
import ClinicAppointment from '@/components/ClinicAppointment'
import ClinicAppointment2 from '@/components/ClinicAppointment2'
import DataNotFound from '@/components/DataNotFound'
import DentistBasicDetails from '@/components/DentistBasicDetails'
import RatingsComp from '@/components/RatingsComp'
import Review from '@/components/Review'
import SingleEducation from '@/components/SingleEducation'
import Spinner from '@/components/Spinner'
import { Button } from '@/components/ui/button'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select"
import useGetApiReq from '@/hooks/useGetApiReq'
import { useCallback, useEffect, useState } from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { TbEdit } from 'react-icons/tb'
import { useNavigate, useParams } from 'react-router-dom'

const DentistDetails = () => {
    const params = useParams();
    const { res, fetchData, isLoading } = useGetApiReq();
    const { res: dentistRatingsRes, fetchData: fetchDentistRatingsData, isLoading: isDentistRatingsLoading } = useGetApiReq();
    const { res: allRatingsRes, fetchData: fetchAllRatingsData, isLoading: isAllRatingsLoading } = useGetApiReq();
    const [dentistDetails, setDentistDetails] = useState("")
    const [ratings, setRatings] = useState([]);
    const [allRating, setAllRating] = useState({});
    const [sortRating, setSortRating] = useState("newest")
    const [isAddFeedbackModalOpen, setIsAddFeedbackModalOpen] = useState(false);

    const navigate = useNavigate();
    const getDentistDetails = useCallback(async () => {
        fetchData(`/dentist/get-dentist-details?dentistId=${params.dentistId || "66d02520cd6af954e0eba864"}`);
    }, [fetchData])

    useEffect(() => {
        getDentistDetails();
    }, [])

    useEffect(() => {
        if (res?.status === 200 || res?.status === 201) {
            console.log("Dentist details res", res);
            setDentistDetails(res?.data?.data?.dentist);
        }
    }, [res])

    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
            const el = document.querySelector(hash);
            if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, []);


    const getDentistRating = async () => {
        fetchDentistRatingsData(`/patient/get-dentist-reviews?dentistId=${params?.dentistId}&sort=${sortRating}`);
    }

    useEffect(() => {
        getDentistRating();
    }, [sortRating])


    useEffect(() => {
        if (dentistRatingsRes?.status === 200 || dentistRatingsRes?.status === 201) {
            setRatings(dentistRatingsRes?.data?.data);
            console.log("dentistRatingsRes response", dentistRatingsRes);
        }
    }, [dentistRatingsRes])

    const getAllRating = async () => {
        fetchAllRatingsData(`/patient/get-grouped-ratings?dentistId=${params?.dentistId}&reviewType=dentist`);
    }

    useEffect(() => {
        getAllRating();
    }, [])


    useEffect(() => {
        if (allRatingsRes?.status === 200 || allRatingsRes?.status === 201) {
            setAllRating(allRatingsRes?.data);
            console.log("allRatingsRes response", allRatingsRes);
        }
    }, [allRatingsRes])


    return (
        <Layout>
            <section className='max-w-[1240px] px-4 mx-auto'>
                <div className='flex items-center gap-4 h-[18px] my-5'>
                    <FaArrowLeft onClick={() => navigate(-1)} className='text-[#717171] cursor-pointer' />
                    <span className='text-[#1A1A1A] text-sm font-semibold font-inter'>Search List</span>
                </div>
                <div className="mb-10">
                    <DentistBasicDetails details={dentistDetails} />
                </div>

                <div className="flex items-start gap-2">
                    <div className='font-inter max-[900px]:hidden font-medium px-4 py-2 border-r-[3px] w-28 text-right text-[#717171] border-r-[#95C22B]'>Clinics</div>
                    <div className="bg-white shadow w-full rounded">
                        <p className='p-3 font-inter font-medium text-[#717171]'>Book Your Appointment</p>
                        <div className="p-3 pt-4">
                            {dentistDetails?.clinic?.map((clinic) => (
                                clinic?.defaultClinic &&
                                <ClinicAppointment
                                    key={clinic._id}
                                    clinic={clinic}
                                    dentistId={dentistDetails?._id}
                                    dentistDetails={dentistDetails}
                                />
                            ))}
                            <div className="grid grid-cols-3 max-[900px]:grid-cols-2 max-[560px]:grid-cols-1 gap-4 mt-5">
                                {dentistDetails?.clinic?.map((clinic) => (
                                    !clinic?.defaultClinic &&
                                    <ClinicAppointment2
                                        key={clinic._id}
                                        clinic={clinic}
                                        dentistId={dentistDetails?._id}
                                        dentistDetails={dentistDetails}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex max-[900px]:flex-col items-start gap-2 mt-10">
                    <div className='font-inter max-[900px]:border-none font-medium max-[900px]:px-0 px-4 py-2 border-r-[3px] text-[#717171] w-28 max-[900px]:text-left text-right border-r-[#95C22B]'>Educations</div>
                    <div className="flex flex-col gap-10 w-full">
                        <SingleEducation
                            degree="Bachelor of Dental Surgery (BDS) - TMS University"
                            year="(2014-2019)"
                        />
                        <SingleEducation
                            degree="Master of Dental Surgery (MDS) - Specialization in Endodontics and Conservative Dentistry"
                            year="(2020-2023)"
                        />
                        <SingleEducation
                            degree="Advanced Certification and Continuing Education"
                            year="(2024-Ongoing)"
                        />
                    </div>
                </div>

                <div id='reviews' className="flex items-start gap-2 mt-10">
                    <div className='font-inter font-medium max-[900px]:hidden text-[#717171] w-28 text-right px-4 py-2 border-r-[3px] border-r-[#95C22B]'>Reviews</div>
                    <div className='w-full mb-5'>
                        <RatingsComp allRating={allRating} />
                        <div className='flex justify-end my-5'>
                            <Select onValueChange={setSortRating} value={sortRating}>
                                <SelectTrigger className="w-1/5 max-[700px]:w-1/3 max-[500px]:w-1/2 border-[1px] border-[#95C22B] rounded-xl">
                                    <SelectValue placeholder="" />
                                </SelectTrigger>
                                <SelectContent className="border-[1px] border-[#95C22B] rounded-lg py-[10px] px-5">
                                    <SelectGroup>
                                        <SelectItem value="newest">Sort by newest review</SelectItem>
                                        <SelectItem value="oldest">Sort by oldest review</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className='reviews flex flex-col gap-5 max-h-[420px] overflow-y-auto mb-5'>
                            {ratings?.map((rating) => (
                                <Review
                                    key={rating?._id}
                                    rating={rating}
                                />
                            ))}

                            {ratings?.length === 0 && isDentistRatingsLoading &&
                                <Spinner size={30} />
                            }

                            {ratings?.length === 0 && !isDentistRatingsLoading &&
                                <DataNotFound name={"Reviews"} />
                            }
                        </div>
                        <Button onClick={() => setIsAddFeedbackModalOpen(true)} className="bg-[#95C22B] hover:bg-[#9dd41d] flex gap-2 items-center rounded-3xl px-16">
                            <span>Write a Review</span>
                            <TbEdit className='text-2xl' />
                        </Button>
                    </div>
                </div>
                {isAddFeedbackModalOpen &&
                    <AddFeedbackModal
                        isAddFeedbackModalOpen={isAddFeedbackModalOpen}
                        setIsAddFeedbackModalOpen={setIsAddFeedbackModalOpen}
                        dentistId={dentistDetails?._id}
                        reviewType="dentist"
                        getData={getDentistRating}
                        getAllRating={getAllRating}
                    />
                }
            </section>
        </Layout>
    )
}

export default DentistDetails