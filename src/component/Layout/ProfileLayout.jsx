import React from 'react'
import Header from '../Header/Header'
import Sidebar from '@/components/Sidebar'

const ProfileLayout = ({ children }) => {
    return (
        <>
            <div className="flex items-start">
                <Sidebar />
                <main className="w-[calc(100%-280px)] h-[100vh] bg-[#F4F9EA]">
                    <Header />
                    <div className='p-5 h-[calc(100vh-75px)] overflow-y-auto'>
                        {children}
                    </div>
                </main>
            </div>
        </>
    )
}

export default ProfileLayout