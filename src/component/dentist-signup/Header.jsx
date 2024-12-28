import logo from '@/assets/de9to-logo-qc7xun2b6cqji9b2etrrmn9ecu7aif9fr5oesz8pp6-1.png.png'
import { Input } from '@/components/ui/input'
import { useState } from 'react';
import { IoIosSearch } from 'react-icons/io'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { FiBell } from "react-icons/fi";
import { FiSettings } from "react-icons/fi";

const Header = () => {
    const [searchInput, setSearchInput] = useState("");

    return (
        <div className='h-20 bg-white ps-4 pe-10 py-5 flex justify-end items-center'>
            {/* <div className='flex items-center gap-6'>
                <img src={logo} className='w-[51px] h-[48px]' alt="de9to" />
                <img src={logo} className='w-[132px] h-[48px]' alt="de9to" />
            </div> */}
            <div className="flex items-center gap-4">
                <FiBell className='text-lg text-[#397FFE]' />
                <FiSettings className='text-lg text-[#397FFE]' />
                <Avatar className="">
                    <AvatarImage src="https://github.com/shadcn.png" alt="profile-img" />
                    <AvatarFallback>image</AvatarFallback>
                </Avatar>
                {/* <div>
                    <h2 className='font-bold text-xs'>Alex Johnson</h2>
                    <p className='text-[10px] font-bold text-[#444444]'>alex.johnson@gmail.com</p>
                </div> */}
            </div>
        </div>
    )
}

export default Header