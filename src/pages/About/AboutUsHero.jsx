import DestistSignupImg from '../../assets/dentist 1.png'
import DentalConsultationImg from '../../assets/checklist 1.png'
import DestistCampsImg from '../../assets/dental-clinic (1) 1.png'
import PinCodersCoveredImg from '../../assets/maps.png'
import HealthWebinarImg from '../../assets/image 158.png'
import ScrollTrigger from 'react-scroll-trigger'
import { MangementInfo } from '@/component/MiniCompo/MiniCompo'
import HappyDentistImg from '../../assets/happy-dentists-with-patient 1.png'
import { useState } from 'react'
import { useEffect } from 'react'
import useGetApiReq from '@/hooks/useGetApiReq'
import ImageSkeleton from '@/components/ImageSkeleton'

const AboutUsHero = () => {
    const [isCounter, setIsCounter] = useState(false);

    const { res, fetchData } = useGetApiReq()
    const [contentData, setContentData] = useState({
        content: "",
        image: "",
    })

    const getContent = () => {
        fetchData(`/patient/get-specific-content?pageName=about-us&sectionName=hero`)
    }

    useEffect(() => {
        getContent()
    }, [])

    useEffect(() => {
        if (res?.status === 200 || res?.status === 201) {
            const { images = [], content = [] } = res?.data?.foundContent;
            setContentData({
                content: content[0]?.resources,
                image: images[0]?.image
            })
        }
    }, [res])

    return (
        <section className='w-full'>
            <div className="rounded-3xl flex max-md:flex-wrap justify-center items-center w-full">
                {/* <div className='w-[400px] max-md:w-full max-md:text-center'>
                    <h1 className='text-[#95C22B] text-[64px] max-lg:text-5xl max-[425px]:text-[23px] font-bold font-poppins leading-[70px] mb-3'>Your Smile<span className='text-[#717171]'>, Our Mission</span></h1>
                    <p className='text-[#717171] text-xl font-normal font-poppins max-[425px]:text-sm'>Dedicated Dental Care You Can Trust</p>
                </div> */}
                <div className="w-full h-full">
                    {/* <img src={contentData.image} alt="happy-dentist-mg" className='w-full h-full' /> */}
                    <ImageSkeleton
                    src={contentData.image}
                    imgClassName={'rounded-lg'}
                    skeletonClassName={"rounded-lg h-96 w-full"}
                />
                </div>
            </div>
            <div className="rounded-xl bg-[#95C22B] w-full max-md:hidden max-lg:rounded-none">
                <ScrollTrigger onEnter={() => setIsCounter(true)} onExit={() => setIsCounter(false)}>
                    <div className='flex flex-wrap justify-between items-center gap-6 px-10 py-10 text-[#FFFFFF] w-full max-lg:justify-between max-lg:px-5 max-[425px]:px-2'>
                        <MangementInfo isCounter={isCounter} img={DestistSignupImg} number={150} title="Dentist Signups" />
                        <MangementInfo isCounter={isCounter} img={DentalConsultationImg} number={10000} title="Dental Consultations" />
                        <MangementInfo isCounter={isCounter} img={DestistCampsImg} number={150} title="Dental Camps" />
                        <MangementInfo isCounter={isCounter} img={PinCodersCoveredImg} number={75} title="Pin Codes Covered" />
                        <MangementInfo isCounter={isCounter} img={HealthWebinarImg} number={75} title="Health Webinars" />
                    </div>
                </ScrollTrigger>
            </div>
            <div className="bg-[#95C22B] w-full hidden max-md:block py-5">
                <ScrollTrigger onEnter={() => setIsCounter(true)} onExit={() => setIsCounter(false)}>
                    <div className='grid grid-cols-3 justify-items-center text-[#FFFFFF] w-full mb-5 max-[425px]:mb-[10px]'>
                        <MangementInfo isCounter={isCounter} img={DestistSignupImg} number={150} title="Dentist Signups" />
                        <MangementInfo isCounter={isCounter} img={DentalConsultationImg} number={10000} title="Dental Consultations" />
                        <MangementInfo isCounter={isCounter} img={DestistCampsImg} number={150} title="Dental Camps" />
                    </div>
                    <div className='grid grid-cols-2 justify-items-center text-[#FFFFFF] w-[450px] max-sm:w-[350px] max-[425px]:w-[250px] mx-auto'>
                        <MangementInfo isCounter={isCounter} img={PinCodersCoveredImg} number={75} title="Pin Codes Covered" />
                        <MangementInfo isCounter={isCounter} img={HealthWebinarImg} number={75} title="Health Webinars" />
                    </div>
                </ScrollTrigger>
            </div>
        </section>
    )
}

export default AboutUsHero