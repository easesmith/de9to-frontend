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
import DataNotFound from '@/components/DataNotFound'
import Spinner from '@/components/Spinner'
import AddFeedbackModal from '@/components/AddFeedbackModal'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"


const ClinicDetails = () => {
    const swiperRef = useRef(null);
    const params = useParams();
    const [clinic, setClinic] = useState("");
    const [ratings, setRatings] = useState([]);
    const [dentists, setDentists] = useState([]);
    const [sortRating, setSortRating] = useState("newest")
    const { res, fetchData, isLoading } = useGetApiReq();
    const { res: clinicRatingsRes, fetchData: fetchClinicRatingsData, isLoading: isClinicRatingsLoading } = useGetApiReq();
    const { res: clinicDentistsRes, fetchData: fetchClinicDentistsData, isLoading: isClinicDentistsLoading } = useGetApiReq();
    const { res: allRatingsRes, fetchData: fetchAllRatingsData, isLoading: isAllRatingsLoading } = useGetApiReq();
    const [allRating, setAllRating] = useState({});
    const [allPhotos, setAllPhotos] = useState([]);
    const [isAddFeedbackModalOpen, setIsAddFeedbackModalOpen] = useState(false);


    const getClinic = async () => {
        fetchData(`/patient/get-single-clinic?clinicId=${params?.clinicId}`);
    }

    useEffect(() => {
        getClinic();
    }, [])

    const { cabinetPics = [], opdArea = [], certificateWall, consultationTable, frontFascia, receptionCounter, waitingArea } = clinic?.clinicPhotos || {};
    useEffect(() => {
        if (clinic?.clinicPhotos) {
            setAllPhotos([...cabinetPics, ...opdArea]);
        }
    }, [clinic])


    useEffect(() => {
        if (res?.status === 200 || res?.status === 201) {
            setClinic(res?.data?.foundClinic);
            console.log("clinic details response", res);
        }
    }, [res])


    const getClinicRating = async () => {
        fetchClinicRatingsData(`/patient/sort-reviews?clinicId=${params?.clinicId}&reviewType=clinic&sortOrder=${sortRating}`);
    }

    useEffect(() => {
        getClinicRating();
    }, [sortRating])


    useEffect(() => {
        if (clinicRatingsRes?.status === 200 || clinicRatingsRes?.status === 201) {
            setRatings(clinicRatingsRes?.data?.data?.reviews);
            console.log("clinicRatingsRes response", clinicRatingsRes?.data?.data?.reviews);
        }
    }, [clinicRatingsRes])

    const getClinicDentists = async () => {
        fetchClinicDentistsData(`/patient/get-clinic-dentists?clinicId=${params?.clinicId}`);
    }

    useEffect(() => {
        getClinicDentists();
    }, [])


    useEffect(() => {
        if (clinicDentistsRes?.status === 200 || clinicDentistsRes?.status === 201) {
            setDentists(clinicDentistsRes?.data?.data?.doctors);
            console.log("clinicDentistsRes response", clinicDentistsRes);
        }
    }, [clinicDentistsRes])

    const getAllRating = async () => {
        fetchAllRatingsData(`/patient/get-grouped-ratings?clinicId=${params?.clinicId}&reviewType=clinic`);
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
                    <FaArrowLeft className='text-[#717171]' />
                    <span className='text-[#1A1A1A] text-sm font-semibold font-inter'>Search List</span>
                </div>
                <div className="mb-5">
                    <ClinicBasicDetails clinic={clinic} />
                </div>
                <div className="flex max-[900px]:flex-col items-start gap-2">
                    <div className='font-inter max-[900px]:border-none max-[900px]:px-0 font-medium px-4 py-2 border-r-[3px] border-r-[#95C22B]'>Dentists</div>
                    <div className="bg-white shadow max-[700px]:shadow-none w-full rounded">
                        <p className='p-3 font-inter font-medium text-[#717171]'>Book Your Appointment</p>
                        <div className="p-3 pt-4 flex flex-col gap-4">
                            {dentists?.map((dentist) => (
                                <Dentist
                                    key={dentist?._id}
                                    dentist={dentist}
                                />
                            ))}

                            {dentists?.length === 0 && isClinicDentistsLoading &&
                                <Spinner size={30} />
                            }

                            {dentists?.length === 0 && !isClinicDentistsLoading &&
                                <DataNotFound name={"Dentists"} />
                            }
                        </div>
                    </div>
                </div>

                <div className="flex max-[900px]:flex-col items-start gap-2 mt-10">
                    <div className='font-inter  font-medium text-[#717171] max-[900px]:border-none max-[900px]:px-0 px-4 py-2 border-r-[3px] border-r-[#95C22B]'>Gallery</div>
                    <div>
                        <Carousel
                            opts={{
                                align: "start",
                                loop: true,
                            }}
                            className="w-[70%] mx-auto px-4 mb-10"
                        >
                            <CarouselContent>
                                {allPhotos?.map((item, i) => (
                                    <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3">
                                        <img className='h-40 w-full' src={`${import.meta.env.VITE_IMAGE_URL}/${item?.photoPath}`} alt="" />
                                    </CarouselItem>
                                ))}
                                {/* {Array.from({ length: 5 }).map((_, index) => (
                                    <div className="p-1">
                                        <Card>
                                            <CardContent className="flex aspect-square items-center justify-center p-6">
                                                <span className="text-3xl font-semibold">{index + 1}</span>
                                            </CardContent>
                                        </Card>
                                    </div>
                                ))} */}
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel>
                        <div className="w-[65%] max-[500px]:w-[70%] mx-auto relative max-[500px]:px-2">
                            {/* <Swiper
                                loop={true}
                                modules={[Pagination, Autoplay]}
                                slidesPerView={3}
                                spaceBetween={20}
                                // breakpoints={{
                                //     500: {
                                //         slidesPerView: 1,
                                //     },
                                // }}

                                // navigation={{
                                //     nextEl: '.swiper-button-next',
                                //     prevEl: '.swiper-button-prev',
                                // }}
                                onSwiper={(swiper) => {
                                    swiperRef.current = swiper; // Assign the Swiper instance to the ref
                                }}
                            // onSlideChange={() => console.log('slide change')}
                            >
                                {allPhotos?.map((item, i) => (
                                    <SwiperSlide key={i}>
                                        <img className='h-40 max-[700px]:h-20 w-full' src={`${import.meta.env.VITE_IMAGE_URL}/${item?.photoPath}`} alt="" />
                                    </SwiperSlide>
                                ))}
                            </Swiper> */}
                            {/* <div
                                className="custom-swiper-button custom-swiper-button-prev max-[700px]:h-8 max-[700px]:w-8 max-[500px]:hidden"
                                onClick={() => swiperRef.current?.slidePrev()} // Navigate to the previous slide
                            >
                                <BsArrowLeft className='text-2xl max-[700px]:text-lg' />
                            </div>
                            <div
                                className="custom-swiper-button custom-swiper-button-next max-[700px]:h-8 max-[700px]:w-8 max-[500px]:hidden"
                                onClick={() => swiperRef.current?.slideNext()} // Navigate to the next slide
                            >
                                <BsArrowRight className='text-2xl max-[700px]:text-lg' />
                            </div> */}

                        </div>
                        <div className="grid grid-cols-5 max-[900px]:grid-cols-4 max-[700px]:grid-cols-3 max-[500px]:grid-cols-2 max-[400px]:grid-cols-1  gap-5 mt-10">
                            <img className='h-40 w-full max-[400px]:h-full' src={`${import.meta.env.VITE_IMAGE_URL}/${certificateWall}`} alt="" />
                            <img className='h-40 w-full max-[400px]:h-full' src={`${import.meta.env.VITE_IMAGE_URL}/${consultationTable}`} alt="" />
                            <img className='h-40 w-full max-[400px]:h-full' src={`${import.meta.env.VITE_IMAGE_URL}/${frontFascia}`} alt="" />
                            <img className='h-40 w-full max-[400px]:h-full' src={`${import.meta.env.VITE_IMAGE_URL}/${receptionCounter}`} alt="" />
                            <img className='h-40 w-full max-[400px]:h-full' src={`${import.meta.env.VITE_IMAGE_URL}/${waitingArea}`} alt="" />
                        </div>
                    </div>
                </div>

                <div className="flex max-[900px]:flex-col items-start gap-2 mt-10">
                    <div className='font-inter max-[900px]:border-none max-[900px]:px-0 font-medium text-[#717171] px-4 py-2 border-r-[3px] border-r-[#95C22B]'>Reviews</div>
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

                            {ratings?.length === 0 && isClinicRatingsLoading &&
                                <Spinner size={30} />
                            }

                            {ratings?.length === 0 && !isClinicRatingsLoading &&
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
                        clinicId={clinic?._id}
                        reviewType="clinic"
                        getData={getClinicRating}
                    />
                }
            </section>
        </Layout>
    )
}

export default ClinicDetails