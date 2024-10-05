import carouselImg from '@/assets/carouselImg.png'
import Layout from '@/component/Layout/Layout'
import ClinicBasicDetails from '@/components/ClinicBasicDetails'
import Dentist from '@/components/Dentist'
import RatingsComp from '@/components/RatingsComp'
import { useEffect, useRef, useState } from 'react'
import { BsArrowLeft, BsArrowRight } from "react-icons/bs"
import { FaArrowLeft } from 'react-icons/fa'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import Review from '@/components/Review'
import { Button } from '@/components/ui/button'
import { TbEdit } from 'react-icons/tb'
import useGetApiReq from '@/hooks/useGetApiReq'
import { useParams } from 'react-router-dom'

const ClinicDetails = () => {
    const swiperRef = useRef(null);
    const params = useParams();
    const [clinic, setClinic] = useState("");
    const [ratings, setRatings] = useState([]);
    const { res, fetchData, isLoading } = useGetApiReq();
    const { res: clinicRatingsRes, fetchData: fetchClinicRatingsData, isLoading: isClinicRatingsLoading } = useGetApiReq();

    const getClinic = async () => {
        fetchData(`/patient/get-single-clinic?clinicId=${params?.clinicId}`);
    }

    useEffect(() => {
        getClinic();
    }, [])


    useEffect(() => {
        if (res?.status === 200 || res?.status === 201) {
            setClinic(res?.data?.foundClinic);
            console.log("clinic details response", res);
        }
    }, [res])


    const getClinicRating = async () => {
        fetchClinicRatingsData(`/patient/clinic-rating?clinicId=${params?.clinicId}&reviewType=clinic`);
    }

    useEffect(() => {
        getClinicRating();
    }, [])


    useEffect(() => {
        if (clinicRatingsRes?.status === 200 || clinicRatingsRes?.status === 201) {
            setRatings(clinicRatingsRes?.data?.foundRatings);
            console.log("clinicRatingsRes response", clinicRatingsRes);
        }
    }, [clinicRatingsRes])

    return (
        <Layout>
            <section className='max-w-[1240px] px-4 mx-auto'>
                <div className='flex items-center gap-4 h-[18px] my-5'>
                    <FaArrowLeft className='text-[#717171]' />
                    <span className='text-[#1A1A1A] text-sm font-semibold font-inter'>Search List</span>
                </div>
                <div className="mb-5">
                    <ClinicBasicDetails clinic={clinic} />
                </div>
                <div className="flex items-start gap-2">
                    <div className='font-inter font-medium px-4 py-2 border-r-[3px] border-r-[#95C22B]'>Dentists</div>
                    <div className="bg-white shadow w-full rounded">
                        <p className='p-3 font-inter font-medium text-[#717171]'>Book Your Appointment</p>
                        <div className="p-3 pt-4 flex flex-col gap-4">
                            <Dentist />
                            <Dentist />
                            <Dentist />
                        </div>
                    </div>
                </div>

                <div className="flex items-start gap-2 mt-10">
                    <div className='font-inter font-medium text-[#717171] px-4 py-2 border-r-[3px] border-r-[#95C22B]'>Gallery</div>

                    <div className="w-[65%] mx-auto relative">
                        <Swiper
                            loop={true}
                            modules={[Pagination, Autoplay]}
                            slidesPerView={3}
                            // navigation={{
                            //     nextEl: '.swiper-button-next',
                            //     prevEl: '.swiper-button-prev',
                            // }}
                            onSwiper={(swiper) => {
                                swiperRef.current = swiper; // Assign the Swiper instance to the ref
                            }}
                        // onSlideChange={() => console.log('slide change')}
                        >
                            <SwiperSlide>
                                <img className='' src={carouselImg} alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img className='' src={carouselImg} alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img className='' src={carouselImg} alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img className='' src={carouselImg} alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img className='' src={carouselImg} alt="" />
                            </SwiperSlide>
                        </Swiper>
                        <div
                            className="custom-swiper-button custom-swiper-button-prev"
                            onClick={() => swiperRef.current?.slidePrev()} // Navigate to the previous slide
                        >
                            <BsArrowLeft className='text-2xl' />
                        </div>
                        <div
                            className="custom-swiper-button custom-swiper-button-next"
                            onClick={() => swiperRef.current?.slideNext()} // Navigate to the next slide
                        >
                            <BsArrowRight className='text-2xl' />
                        </div>

                    </div>
                </div>

                <div className="flex items-start gap-2 mt-10">
                    <div className='font-inter font-medium text-[#717171] px-4 py-2 border-r-[3px] border-r-[#95C22B]'>Reviews</div>
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
                            {ratings?.map((rating)=>(
                                <Review
                                key={rating?._id}
                                 />
                            ))}
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

export default ClinicDetails