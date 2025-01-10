import { OurTeamMember } from '@/component/MiniCompo/MiniCompo'
import useGetApiReq from '@/hooks/useGetApiReq'
import React, { useEffect, useState } from 'react'

const OurTeamSection = () => {
    const { res, fetchData } = useGetApiReq()
    const [contentData, setContentData] = useState({
        teamMember1Name: "",
        teamMember1Designation: "",
        teamMember1Image: "",
        teamMember2Name: "",
        teamMember2Designation: "",
        teamMember2Image: "",
        teamMember3Name: "",
        teamMember3Designation: "",
        teamMember3Image: "",
    })

    const getContent = () => {
        fetchData(`/patient/get-teams-section`)
    }

    useEffect(() => {
        getContent()
    }, [])

    useEffect(() => {
        if (res?.status === 200 || res?.status === 201) {
            console.log("get-teams-section get-teams-section",res);
            
            const {
                teamMember1Name,
                teamMember1Designation,
                teamMember1Image,
                teamMember2Name,
                teamMember2Designation,
                teamMember2Image,
                teamMember3Name,
                teamMember3Designation,
                teamMember3Image,
            } = res?.data?.foundTeams[0] || {};

            setContentData({
                teamMember1Name,
                teamMember1Designation,
                teamMember1Image,
                teamMember2Name,
                teamMember2Designation,
                teamMember2Image,
                teamMember3Name,
                teamMember3Designation,
                teamMember3Image,
            })
        }
    }, [res])

    console.log("contentData",contentData?.teamMember1Designation);
    

    return (
        <section className='px-5'>
            <h3 className='text-[#717171] text-3xl max-lg:text-[28px] font-semibold font-inter mb-4 max-sm:text-2xl'>Our Team</h3>
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-10 max-sm:gap-5 max-lg:justify-center w-full h-full'>
                <OurTeamMember img={contentData.teamMember1Image} name={contentData.teamMember1Name} profile={contentData.teamMember1Designation} />
                <OurTeamMember img={contentData.teamMember2Image} name={contentData.teamMember2Name} profile={contentData.teamMember2Designation} />
                <OurTeamMember img={contentData.teamMember3Image} name={contentData.teamMember3Name} profile={contentData.teamMember3Designation} />
            </div>
        </section>
    )
}

export default OurTeamSection