import { Skeleton } from '@/components/ui/skeleton'
import useGetApiReq from '@/hooks/useGetApiReq'
import React, { useEffect, useRef, useState } from 'react'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import ReactPlayer from 'react-player'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react';

const SharpNGO = () => {

  const swiperRef3 = useRef(null);
  const [videoLoading, setVideoLoading] = useState(true);

  const { res, fetchData } = useGetApiReq()
  const [contentData, setContentData] = useState()

  const getContent = () => {
    fetchData(`/patient/get-specific-content?pageName=about-us&sectionName=dental-camp-url`)
  }

  useEffect(() => {
    getContent()
  }, [])

  useEffect(() => {
    if (res?.status === 200 || res?.status === 201) {
      console.log("get content SharpNGO: ", res?.data?.foundContent)
      const { content = [] } = res?.data?.foundContent;
      setContentData(content)
    }
  }, [res])
  return (
    <section className='max-w-[1240px] mx-auto my-24 px-5 max-med:my-16'>
      <div className="relative w-full ">
        <div className="">
          <div className='w-full flex justify-between items-center mb-12'>
            <div className='flex flex-col gap-[15px]'>
              <p className='text-[#95C22B] text-xl font-bold font-inter max-sm:text-center max-sm:text-sm'>Our  Best Practices</p>
              <h2 className='text-[#000A2D] max-w-[900px] text-[40px] font-bold font-inter max-md:text-[30px] max-sm:text-xl max-sm:text-center'>
                Our Dental Camp Organized In Association With Sharp NGO
              </h2>
            </div>
            <div className='flex items-center gap-5 max-sm:hidden'>
              <div
                className="bg-[#F4F4F4] rounded-full w-12 h-12 flex items-center justify-center cursor-pointer"
                onClick={() => swiperRef3.current?.slidePrev()} // Navigate to the previous slide
              >
                <BsArrowLeft className='text-2xl ' />
              </div>
              <div
                className="bg-[#F4F4F4] rounded-full w-12 h-12 flex items-center justify-center cursor-pointer"
                onClick={() => swiperRef3.current?.slideNext()} // Navigate to the next slide
              >
                <BsArrowRight className='text-2xl' />
              </div>
            </div>
          </div>
          <div className='flex justify-between items-center gap-8'>
            <Swiper
              slidesPerView={2}
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
                  600: {
                    slidesPerView: 2
                  }
                }
              }
              modules={[Pagination, Navigation, Autoplay]}
              onSwiper={(swiper) => {
                swiperRef3.current = swiper;
              }}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              className="mySwiper h-[420px] dental-camp"
            >
              {contentData && contentData.map(({ resources }, index) => {
                return (
                  <SwiperSlide key={index} className='rounded-2xl overflow-hidden h-full w-full'>
                    <ReactPlayer
                      url={resources}
                      playing={true}
                      onPlay={false}
                      controls={true}
                      onReady={() => setVideoLoading(false)} />
                    {videoLoading && <Skeleton className={`w-[565px] h-[380px]`} />}
                  </SwiperSlide>
                )
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SharpNGO