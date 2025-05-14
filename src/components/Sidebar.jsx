import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { IoIosArrowDown } from 'react-icons/io'
import DeleteAccountModal from './DeleteAccountModal'
import LogoutModal from './LogoutModal'
import De9tologo from '@/assets/de9to-logo-1.png'

const Sidebar = () => {
    const { pathname } = useLocation()

    const [isMasterOpen, setIsMasterOpen] = useState(false);
    const [isDeleteAccountModalOpen, setIsDeleteAccountModalOpen] = useState(false);
    const [isLogOutModalOpen, setIsLogOutModalOpen] = useState(false);

    return (
        <section className='sticky top-0 w-[280px] h-screen overflow-y-auto overflow-x-visible max-lg:hidden'>
            <div className="w-28 sm:w-40 mt-4 px-3">
                <img src={De9tologo} alt="" />
            </div>
            <div className='flex flex-col gap-2 bg-[#FFFFFF] mt-2'>
                <Link to="/profile/medical-records/appointment" className={`flex justify-start items-center gap-[14px] h-[52px] p-[14px] cursor-pointer font-inter font-medium group hover:bg-[#EEEEEE] ${pathname.includes("medical-records") ? 'bg-[#EEEEEE] text-[#95C22B]' : 'text-[#0F172A]'}`}>
                    Medical Records
                </Link>
                {/* <Link to="/profile/appointments" className={`flex justify-start items-center gap-[14px] h-[52px] p-[14px] cursor-pointer font-inter font-medium group hover:bg-[#EEEEEE] ${pathname.includes("appointments") ? 'bg-[#EEEEEE] text-[#95C22B]' : 'text-[#0F172A]'}`}>
                    Appointments
                </Link> */}
                <Link to="/profile/my-feedback" className={`flex justify-start items-center gap-[14px] h-[52px] p-[14px] cursor-pointer font-inter font-medium group hover:bg-[#EEEEEE] ${pathname.includes("my-feedback") ? 'bg-[#EEEEEE] text-[#95C22B]' : 'text-[#0F172A]'}`}>
                    My Feedback
                </Link>
                <Link to="/profile/payment/appointment" className={`flex justify-start items-center gap-[14px] h-[52px] p-[14px] cursor-pointer font-inter font-medium group hover:bg-[#EEEEEE] ${pathname.includes("payment") ? 'bg-[#EEEEEE] text-[#95C22B]' : 'text-[#0F172A]'}`}>
                    Payment
                </Link>
                <Link to="/profile/update-profile" className={`flex justify-start items-center gap-[14px] h-[52px] p-[14px] cursor-pointer font-inter font-medium group hover:bg-[#EEEEEE] ${pathname.includes("update-profile") ? 'bg-[#EEEEEE] text-[#95C22B]' : 'text-[#0F172A]'}`}>
                    Update Profile
                </Link>
                <Link to="/profile/complaints" className={`flex justify-start items-center gap-[14px] h-[52px] p-[14px] cursor-pointer font-inter font-medium group hover:bg-[#EEEEEE] ${pathname.includes("complaints") ? 'bg-[#EEEEEE] text-[#95C22B]' : 'text-[#0F172A]'}`}>
                    Complaints
                </Link>
                <button onClick={() => setIsMasterOpen(!isMasterOpen)} className='flex justify-between px-3'>
                    <span className='font-inter text-[#1A1A1A] font-medium'>Setting</span>
                    <IoIosArrowDown className={`text-xl text-[#717171] duration-300 ${isMasterOpen && "rotate-180 transition-transform duration-300"}`} />
                </button>
                {isMasterOpen &&
                    <div className='flex flex-col gap-2'>
                        {/* <Link to="/profile/change-password" className={`flex justify-start items-center gap-[14px] h-[52px] p-[14px] cursor-pointer font-inter font-medium group hover:bg-[#EEEEEE] ${pathname.includes("change-password") ? 'bg-[#EEEEEE] text-[#95C22B]' : 'text-[#0F172A]'}`}>
                            Change Password
                        </Link> */}
                        <Link to="/profile/notifications-settings" className={`flex justify-start items-center gap-[14px] h-[52px] p-[14px] cursor-pointer font-inter font-medium group hover:bg-[#EEEEEE] ${pathname.includes("notifications-settings") ? 'bg-[#EEEEEE] text-[#95C22B]' : 'text-[#0F172A]'}`}>
                            Notification Settings
                        </Link>
                        <Link to="/profile/delete-account" className={`flex justify-start items-center gap-[14px] h-[52px] p-[14px] cursor-pointer font-inter font-medium group hover:bg-[#EEEEEE] ${pathname.includes("delete-account") ? 'bg-[#EEEEEE] text-[#FF0000]' : 'text-[#FF0000]'}`}>
                            Delete Account
                        </Link>
                    </div>
                }

                <button onClick={() => setIsLogOutModalOpen(true)} className={`flex justify-start items-center gap-[14px] h-[52px] p-[14px] cursor-pointer font-inter font-medium group hover:bg-[#EEEEEE]`}>
                    Log out
                </button>

                {isDeleteAccountModalOpen &&
                    <DeleteAccountModal
                        isDeleteAccountModalOpen={isDeleteAccountModalOpen}
                        setIsDeleteAccountModalOpen={setIsDeleteAccountModalOpen}
                    />
                }

                {isLogOutModalOpen &&
                    <LogoutModal
                        isLogOutModalOpen={isLogOutModalOpen}
                        setIsLogOutModalOpen={setIsLogOutModalOpen}
                    />
                }
            </div>
        </section>
    )
}

export default Sidebar