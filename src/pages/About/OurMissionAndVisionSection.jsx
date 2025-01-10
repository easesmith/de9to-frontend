import useGetApiReq from '@/hooks/useGetApiReq'
import React, { useEffect, useState } from 'react'

const OurMissionAndVisionSection = () => {
    const { res, fetchData } = useGetApiReq()
    const [contentData, setContentData] = useState({
        content: "",
        image: "",
    })

    const getContent = () => {
        fetchData(`/admin/get-specific-content?pageName=about-us&sectionName=our-journey`)
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
        <section className='flex max-md:flex-wrap justify-start items-center gap-6 min-h-[384px] w-full px-5'>
            <div className="max-md:w-full flex justify-center">
                <img src={contentData.image} alt="" />
            </div>
            <div className="w-2/3 max-md:w-full flex flex-col gap-3">
                <h3 className='text-[#717171] text-3xl max-lg:text-[28px] font-semibold font-inter max-sm:text-2xl'>Our Mission & Vision</h3>
                <p className='text-[#5C5C5C] text-[17px] font-normal font-inter'>At De9to, our vision is to revolutionize dental care in India by shifting the focus from treatment to prevention. We align with the WHO's mission to prioritize regular dental check-ups, and we aim to be the leading platform that connects patients with trusted dentists, making preventive dentistry accessible to all.</p>
                <p className='text-[#5C5C5C] text-[17px] font-normal font-inter'>Our mission at De9to is to make quality dental care accessible and affordable for everyone. By 2025, we aim to onboard over 5,000 dental clinics and serve more than 100,000 patients, ensuring that everyone has access to the best in oral health.</p>
            </div>
        </section>
    )
}

export default OurMissionAndVisionSection