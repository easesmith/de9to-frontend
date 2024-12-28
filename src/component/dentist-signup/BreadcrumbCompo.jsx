import React from 'react'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import HomeImg from "@/assets/home.png"
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

function BreadcrumbCompo({hidden, title}) {
    return (
        <>
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbPage className="bg-[#95C22B] w-[66px] h-[33px] flex justify-center items-center gap-[10px] rounded-[30px]">
                            <IoIosArrowBack className='w-[24px] h-[24px] text-white' />
                            <IoIosArrowForward className='w-[24px] h-[24px] text-white' />
                        </BreadcrumbPage>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <BreadcrumbPage className="w-[24px] h-[24px]">
                            <img src={HomeImg} alt="home_img" />
                        </BreadcrumbPage>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <BreadcrumbPage className="text-[#374151] text-sm font-medium font-Inter">Home</BreadcrumbPage>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator className="text-[#374151] text-sm font-extrabold font-Inter">/</BreadcrumbSeparator>
                    <BreadcrumbItem>
                        <BreadcrumbPage className="text-[#374151] text-sm font-medium font-Inter">Application Form</BreadcrumbPage>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator className={`text-[#95C22B] text-sm font-extrabold font-Inter ${hidden}`}>/</BreadcrumbSeparator>
                    <BreadcrumbItem>
                        <BreadcrumbPage className="text-[#95C22B] text-sm font-medium font-Inter">{title}</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
        </>
    )
}

export default BreadcrumbCompo

