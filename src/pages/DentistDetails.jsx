import Layout from '@/component/Layout/Layout'
import ClinicAppointment from '@/components/ClinicAppointment'
import ClinicAppointment2 from '@/components/ClinicAppointment2'
import DentistBasicDetails from '@/components/DentistBasicDetails'
import RatingsComp from '@/components/RatingsComp'
import Review from '@/components/Review'
import SingleEducation from '@/components/SingleEducation'
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
import { useParams } from 'react-router-dom'

const DentistDetails = () => {
    const params = useParams();
    const { res, fetchData, isLoading } = useGetApiReq();
    const [dentistDetails, setDentistDetails] = useState("")

    const getDentistDetails = useCallback(async () => {
        fetchData(`/dentist/get-dentist-details?dentistId=${params.dentistId ||"66d02520cd6af954e0eba864"}`);
    }, [fetchData])

    useEffect(() => {
        getDentistDetails();
    }, [])

    useEffect(() => {
        if (res?.status === 200 || res?.status === 201) {
            console.log("Dentist details res", res);
            setDentistDetails(res?.data?.data);
        }
    }, [res])

    return (
        <Layout>
            <section className='max-w-[1240px] px-4 mx-auto'>
                <div className='flex items-center gap-4 h-[18px] my-5'>
                    <FaArrowLeft className='text-[#717171]' />
                    <span className='text-[#1A1A1A] text-sm font-semibold font-inter'>Search List</span>
                </div>
                <div className="mb-10">
                    <DentistBasicDetails details={dentistDetails} />
                </div>

                <div className="flex items-start gap-2">
                    <div className='font-inter font-medium px-4 py-2 border-r-[3px] w-28 text-right text-[#717171] border-r-[#95C22B]'>Clinics</div>
                    <div className="bg-white shadow w-full rounded">
                        <p className='p-3 font-inter font-medium text-[#717171]'>Book Your Appointment</p>
                        <div className="p-3 pt-4">
                            <ClinicAppointment />
                            <div className="grid grid-cols-3 gap-4 mt-5">
                                <ClinicAppointment2 />
                                <ClinicAppointment2 />
                                <ClinicAppointment2 />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex items-start gap-2 mt-10">
                    <div className='font-inter font-medium px-4 py-2 border-r-[3px] text-[#717171] w-28 text-right border-r-[#95C22B]'>Educations</div>
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

                <div className="flex items-start gap-2 mt-10">
                    <div className='font-inter font-medium text-[#717171] w-28 text-right px-4 py-2 border-r-[3px] border-r-[#95C22B]'>Reviews</div>
                    <div className='w-full mb-5'>
                        <RatingsComp />
                        <div className='flex justify-end my-5'>
                            <Select defaultValue='newestReview'>
                                <SelectTrigger className="w-1/5 border-[1px] border-[#95C22B] rounded-xl">
                                    <SelectValue placeholder="" />
                                </SelectTrigger>
                                <SelectContent className="border-[1px] border-[#95C22B] rounded-lg py-[10px] px-5">
                                    <SelectGroup>
                                        <SelectItem value="newestReview">Sort by newest review</SelectItem>
                                        <SelectItem value="oldestReview">Sort by oldest review</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className='reviews flex flex-col gap-5 max-h-[420px] overflow-y-auto mb-5'>
                            <Review />
                            <Review />
                            <Review />
                        </div>
                        <Button className="bg-[#95C22B] hover:bg-[#9dd41d] flex gap-2 items-center rounded-3xl px-16">
                            <span>Write a Review</span>
                            <TbEdit className='text-2xl' />
                        </Button>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default DentistDetails