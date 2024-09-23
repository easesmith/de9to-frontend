import carouselImg from '@/assets/carouselImg.png'
import Layout from '@/component/Layout/Layout'
import ClinicBasicDetails from '@/components/ClinicBasicDetails'
import Dentist from '@/components/Dentist'
import RatingsComp from '@/components/RatingsComp'
import { useRef } from 'react'
import { BsArrowLeft, BsArrowRight } from "react-icons/bs"
import { FaArrowLeft } from 'react-icons/fa'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'


const ClinicDetails = () => {
    const swiperRef = useRef(null);

    return (
        <Layout>
            <section className='max-w-[1240px] px-4 mx-auto'>
                <div className='flex items-center gap-4 h-[18px] my-5'>
                    <FaArrowLeft className='text-[#717171]' />
                    <span className='text-[#1A1A1A] text-sm font-semibold font-inter'>Search List</span>
                </div>
                <div className="mb-5">
                    <ClinicBasicDetails />
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
                            onSlideChange={() => console.log('slide change')}
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
                    <div className='w-full'>
                        <RatingsComp />
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default ClinicDetails