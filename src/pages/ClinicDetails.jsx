import Layout from '@/component/Layout/Layout'
import ClinicBasicDetails from '@/components/ClinicBasicDetails'
import React from 'react'
import { FaArrowLeft } from 'react-icons/fa'

const ClinicDetails = () => {
    return (
        <Layout>
            <section className='max-w-[1240px] px-4 mx-auto'>
                <div className='flex items-center gap-4 h-[18px] my-5'>
                    <FaArrowLeft className='text-[#717171]' />
                    <span className='text-[#1A1A1A] text-sm font-semibold font-inter'>Search List</span>
                </div>

                <ClinicBasicDetails />

            </section>
        </Layout>
    )
}

export default ClinicDetails