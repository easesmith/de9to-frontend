import React, { useEffect } from 'react'
import Header from '../Header/Header'
import Sidebar from '@/components/Sidebar'
import { useLocation } from 'react-router-dom'

const ProfileLayout = ({ children }) => {
    const { pathname } = useLocation();

    useEffect(() => {
        if (pathname === "/profile/notifications-settings" || pathname === "/profile/update-profile") {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        
        return () => {
            document.body.style.overflow = "";
        };
    }, [pathname]);

    return (
        <>
            <div className="flex items-start">
                <Sidebar />
                <main className="w-[calc(100%-280px)] max-lg:w-full bg-[#F4F9EA]">
                    <Header />
                    <div className='p-5 h-[calc(100vh-75px)] overflow-y-auto max-[425px]:p-5'>
                        {children}
                    </div>
                </main>
            </div>
        </>
    )
}

export default ProfileLayout