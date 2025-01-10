import React, { useEffect, useRef, useState } from 'react'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import useGetApiReq from '@/hooks/useGetApiReq';
import ImageSkeleton from '@/components/ImageSkeleton';

const SuccessfulDentalCamps = () => {

    const swiperRef1 = useRef(null);

    const { res, fetchData } = useGetApiReq()
    const [contentData, setContentData] = useState({
        content: "",
        image: "",
    })

    const getContent = () => {
        fetchData(`/patient/get-specific-content?pageName=dental-camps&sectionName=successful-dental-camps`)
    }

    useEffect(() => {
        getContent()
    }, [])

    useEffect(() => {
        if (res?.status === 200 || res?.status === 201) {
            console.log("get content successfulDentalCamps: ", res?.data?.foundContent)
            const { images = [], content = [] } = res?.data?.foundContent;
            setContentData({
                content: content[0]?.resources,
                image: images
            })
        }
    }, [res])

    return (
        <section className='max-w-[1200px] mx-auto my-24 px-5 max-med:my-16'>
            <div className='flex justify-between max-sm:flex-col mb-12 w-full gap-4'>
                <div className='flex flex-col items-start gap-2 max-sm:items-center w-full'>
                    <h5 className='text-[#95C22B] text-xl italic font-bold font-inter'>Pictures</h5>
                    <h4 className='text-[#95C22B] text-[40px] font-extrabold font-inter max-large:text-3xl max-med:text-2xl max-sm:text-center'>De9to<span className='text-black'>’s Successful Dental Camps</span></h4>
                    <p className='text-[#606060] text-xl font-semibold font-roboto max-sm:text-base'>Elevating Oral Health Awareness</p>
                </div>
                <div className='flex items-center gap-5 justify-end'>
                    <div
                        className="bg-[#F4F4F4] rounded-full w-12 h-12 flex items-center justify-center cursor-pointer"
                        onClick={() => swiperRef1.current?.slidePrev()} // Navigate to the previous slide
                    >
                        <BsArrowLeft className='text-2xl ' />
                    </div>
                    <div
                        className="bg-[#F4F4F4] rounded-full w-12 h-12 flex items-center justify-center cursor-pointer"
                        onClick={() => swiperRef1.current?.slideNext()} // Navigate to the next slide
                    >
                        <BsArrowRight className='text-2xl' />
                    </div>
                </div>
            </div>
            <div className='flex justify-between dental-camp'>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}
                    breakpoints={
                        {
                            0: {
                                slidesPerView: 1
                            },
                            424: {
                                slidesPerView: 2
                            },
                            500: {
                                slidesPerView: 2
                            },
                            768: {
                                slidesPerView: 3
                            }
                        }
                    }
                    modules={[Pagination, Navigation, Autoplay]}
                    onSwiper={(swiper) => {
                        swiperRef1.current = swiper;
                    }}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    className='h-[420px]'
                >
                    {contentData?.image && contentData?.image.map(({ image }, index) => {
                        return (
                            <SwiperSlide key={index}>
                                {/* <img src={image} alt="" className='cursor-pointer h-[370px]' /> */}
                                <ImageSkeleton
                                    src={image}
                                    imgClassName={'cursor-pointer h-[370px]'}
                                    skeletonClassName={"cursor-pointer h-[370px]"}
                                />
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </section>
    )
}

export default SuccessfulDentalCamps