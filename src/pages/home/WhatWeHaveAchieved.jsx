import CheckMarkImg from '@/assets/anbx.png';
import Image1 from '@/assets/dentist-signups.png';
import Image2 from '@/assets/dental-consultations.png';
import Image3 from '@/assets/dental-camps.png';
import Image4 from '@/assets/pincode-covered.png';
import ImageSkeleton from '@/components/ImageSkeleton';
import useGetApiReq from '@/hooks/useGetApiReq';
import { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

const WhatWeHaveAchieved = () => {
    const [isCounter, setIsCounter] = useState(false);

    const { res, fetchData } = useGetApiReq()
    const [contentData, setContentData] = useState({
        content: "",
        image: "",
    })

    const getContent = () => {
        fetchData(`/patient/get-specific-content?pageName=home&sectionName=whatWeHaveAchieved`)
    }

    useEffect(() => {
        getContent()
    }, [])

    useEffect(() => {
        if (res?.status === 200 || res?.status === 201) {
            console.log("getHeroSection: ", res?.data)
            const { images = [], content = [] } = res?.data?.foundContent || {};
            setContentData({
                content: content[0]?.resources,
                image: images[0]?.image
            })
        }
    }, [res])

    return (
        <section className='bg-[#FFFFFF]'>
            <div className='bg-[#FFFFFF] flex justify-center items-start gap-20 flex-wrap px-5 pt-20 pb-10 h-full'>
                <div className='w-[550px] max-md:w-[400px] max-[450px]:w-[300px] rounded-[40px] h-full'>
                    <div className=' relative'>
                        {/* <img src={contentData.image} alt="" className='w-[550px] bg-[#F8F8F8] rounded-[40px]' /> */}
                        <ImageSkeleton
                            src={contentData.image}
                            imgClassName={'w-[550px] bg-[#F8F8F8] rounded-[40px]'}
                            skeletonClassName={"w-[550px] max-md:w-[400px] max-[450px]:w-[300px] max-md:h-[400px] max-[450px]:h-[300px] h-[560px] rounded-[40px]"}
                        />
                        <div className=' absolute top-[2%] right-[2%] border-[16px] border-[#EBEBEB] rounded-full max-w-[150px] max-h-[150px] w-full h-full max-md:w-[175px] max-md:h-[175px] max-[500px]:w-[90px] max-[500px]:h-[90px] '>
                            <img src={CheckMarkImg} alt="" />
                        </div>
                    </div>
                </div>
                <div className='max-w-[590px] flex flex-col gap-[45px] h-full'>
                    <div className='flex flex-col items-start justify-start gap-[22px]'>
                        <h2 className='text-[#000000] text-[32px] max-[970px]:text-2xl max-[500px]:text-xl max-[500px]:text-center font-medium font-poppins tracking-[8%] w-full'>What We Have Achieved</h2>
                        <p className='max-w-[590px] text-[#818181] text-xl max-[970px]:text-lg max-[500px]:text-base max-[500px]:text-center font-normal font-poppins tracking-[2%]'>{contentData.content}</p>
                    </div>
                    <ScrollTrigger onEnter={() => setIsCounter(true)} onExit={() => setIsCounter(false)}>
                        <div className=' grid grid-cols-2 gap-5 max-[500px]:grid-cols-4 max-[500px]:gap-1'>
                            <div className='w-full flex flex-col items-start max-[500px]:items-center justify-start'>
                                <img className='w-14 h-14 max-[500px]:w-8 max-[500px]:h-8' src={Image1} alt="" />
                                <div className='text-[#95C22B] max-[500px]:text-sm text-5xl font-semibold font-poppins my-[10px] max-[500px]:my-1'>{isCounter && <CountUp start={0} end={150} duration={2} />}+</div>
                                <p className='text-[#818181] max-[500px]:text-[8px] text-xl font-normal text-center font-poppins -mt-1 max-[500px]:leading-3'>Dentist Signups</p>
                            </div>
                            <div className='w-full flex flex-col items-start max-[500px]:items-center justify-start'>
                                <img className='w-14 h-14 max-[500px]:w-8 max-[500px]:h-8' src={Image2} alt="" />
                                <div className='text-[#95C22B] max-[500px]:text-sm text-5xl font-semibold font-poppins my-[10px] max-[500px]:my-1'>{isCounter && <CountUp start={0} end={10000} duration={2} />}+</div>
                                <p className='text-[#818181] max-[500px]:text-[8px] text-xl font-normal text-center font-poppins -mt-1 max-[500px]:leading-3'>Dental Consultations</p>
                            </div>
                            <div className='w-full flex flex-col items-start max-[500px]:items-center justify-start'>
                                <img className='w-14 h-14 max-[500px]:w-8 max-[500px]:h-8' src={Image3} alt="" />
                                <div className='text-[#95C22B] max-[500px]:text-sm text-5xl font-semibold font-poppins my-[10px] max-[500px]:my-1'>{isCounter && <CountUp start={0} end={150} duration={2} />}+</div>
                                <p className='text-[#818181] max-[500px]:text-[8px] text-xl font-normal text-center font-poppins my-[10px] -mt-1 max-[500px]:leading-3'>Dental Camps</p>
                            </div>
                            <div className='w-full flex flex-col items-start max-[500px]:items-center justify-start'>
                                <img className='w-14 h-14 max-[500px]:w-8 max-[500px]:h-8' src={Image4} alt="" />
                                <div className='text-[#95C22B] max-[500px]:text-sm text-5xl font-semibold font-poppins my-[10px] max-[500px]:my-1'>{isCounter && <CountUp start={0} end={175} duration={2} />}+</div>
                                <p className='text-[#818181] max-[500px]:text-[8px] text-xl font-normal text-center font-poppins -mt-1 max-[500px]:leading-3'>Pincode Covered</p>
                            </div>
                        </div>
                    </ScrollTrigger>

                </div>
            </div>
        </section>
    )
}

export default WhatWeHaveAchieved