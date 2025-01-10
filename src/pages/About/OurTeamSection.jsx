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

    return (
        <section className='px-5'>
            <h3 className='text-[#717171] text-3xl max-lg:text-[28px] font-semibold font-inter mb-4 max-sm:text-2xl'>Our Team</h3>
            <div className='flex justify-between items-center gap-10 max-sm:gap-5 max-sm:flex-wrap max-lg:justify-center w-full'>
                <OurTeamMember img={contentData.teamMember1Image} name="Dr. Gajendra Yadav" profile="Director and COO" />
            </div>
        </section>
    )
}

export default OurTeamSection