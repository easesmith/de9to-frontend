import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import Img1 from '../assets/Frame 1171277952.png'

const WhyDentalCampsCarousel = () => {
    return (
        <div>
            <Swiper
                spaceBetween={50}
                slidesPerView={7}
            // onSlideChange={() => console.log('slide change')}
            // onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide className=''>
                    <div className='rounded-2xl bg-[#FFFFFF] flex flex-col items-center p-1 w-[168px] h-[166px] shadow-lg cursor-pointer'>
                        <img src={Img1} alt="" className='w-[64px] h-[36px]' />
                        <p className={`text-[#1A1A1A] text-center text-sm font-normal font-inter`}>Provide free or low-cost dental care, making oral health services accessible to everyone.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='rounded-2xl bg-[#FFFFFF] flex flex-col items-center p-1 w-[168px] h-[166px] shadow-lg cursor-pointer'>
                        <img src={Img1} alt="" className='w-[64px] h-[36px]' />
                        <p className={`text-[#1A1A1A] text-center text-sm font-normal font-inter`}>Provide free or low-cost dental care, making oral health services accessible to everyone.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='rounded-2xl bg-[#FFFFFF] flex flex-col items-center p-1 w-[168px] h-[166px] shadow-lg cursor-pointer'>
                        <img src={Img1} alt="" className='w-[64px] h-[36px]' />
                        <p className={`text-[#1A1A1A] text-center text-sm font-normal font-inter`}>Provide free or low-cost dental care, making oral health services accessible to everyone.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='rounded-2xl bg-[#FFFFFF] flex flex-col items-center p-1 w-[168px] h-[166px] shadow-lg cursor-pointer'>
                        <img src={Img1} alt="" className='w-[64px] h-[36px]' />
                        <p className={`text-[#1A1A1A] text-center text-sm font-normal font-inter`}>Provide free or low-cost dental care, making oral health services accessible to everyone.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='rounded-2xl bg-[#FFFFFF] flex flex-col items-center p-1 w-[168px] h-[166px] shadow-lg cursor-pointer'>
                        <img src={Img1} alt="" className='w-[64px] h-[36px]' />
                        <p className={`text-[#1A1A1A] text-center text-sm font-normal font-inter`}>Provide free or low-cost dental care, making oral health services accessible to everyone.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='rounded-2xl bg-[#FFFFFF] flex flex-col items-center p-1 w-[168px] h-[166px] shadow-lg cursor-pointer'>
                        <img src={Img1} alt="" className='w-[64px] h-[36px]' />
                        <p className={`text-[#1A1A1A] text-center text-sm font-normal font-inter`}>Provide free or low-cost dental care, making oral health services accessible to everyone.</p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default WhyDentalCampsCarousel
