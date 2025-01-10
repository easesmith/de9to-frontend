import useGetApiReq from '@/hooks/useGetApiReq'
import React, { useEffect, useState } from 'react'
import parse from 'html-react-parser';
import ImageSkeleton from '@/components/ImageSkeleton';

const OurJourneySection = () => {
    const { res, fetchData } = useGetApiReq()
    const [contentData, setContentData] = useState({
        content: "",
        image: "",
    })

    const getContent = () => {
        fetchData(`/patient/get-specific-content?pageName=about-us&sectionName=our-journey`)
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
        <section className='flex max-md:flex-wrap justify-between items-center gap-5 w-full px-5'>
            <div className="w-2/3 max-md:w-full flex flex-col gap-3">
                <h3 className='text-[#717171] text-3xl max-lg:text-[28px] font-semibold font-inter max-sm:text-2xl max-[375px]:text-xl'>Our Journey</h3>
                <p className='text-[#5C5C5C] text-[17px] font-normal font-inter'>{parse(contentData.content)}</p>
            </div>
            <div className="w-full md:w-1/3 h-full flex justify-center">
                {/* <img src={contentData.image} alt="" className='rounded-lg' /> */}
                <ImageSkeleton
                    src={contentData.image}
                    imgClassName={'rounded-lg'}
                    skeletonClassName={"rounded-lg h-80 w-full"}
                />
            </div>
        </section>
    )
}

export default OurJourneySection