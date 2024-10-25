import React from 'react'
import { FaCircleXmark } from 'react-icons/fa6'
import { IoIosCheckmarkCircle } from 'react-icons/io'

const ChoosePlanCompo = ({ title, amount, isSelected, onSelect }) => {

    // const [selectPlan, setSelectPlan] = useState(false)

    // const handleSelectPlan = () => {
    //     setSelectPlan(!selectPlan)
    // }

    return (
        <div  className={`max-w-[365px] w-full cursor-pointer mx-auto border-[2.8px] flex flex-col gap-7 border-[#95C22B] rounded-lg p-8 max-small:p-2 ${isSelected ? 'bg-[#95C22B] ' : 'bg-[#FFFFFF]'}`}>
            <div className='flex flex-col items-start gap-4'>
                {isSelected && <button className={`bg-[#FFFFFF] text-[#1A1A1A] text-sm font-normal font-roboto py-1 px-3 rounded-sm`}>Popular</button>}
                <div className="bg-[#F1F1F1] rounded-md text-center py-[6px] px-3">
                    <span className="text-sm text-[#000B33] font-semibold font-poppins">{title}</span>
                </div>
                <p className={`${isSelected ? 'text-[#FFFFFF] ' : 'text-[#000000]'} text-sm font-light font-poppins`}>For all individuals and starters who
                    want to start with domaining.</p>
            </div>
            <div className={`border-[1px] ${isSelected ? 'border-[#FFFFFF]' : 'border-[#95C22B]'}`}></div>
            <div className='flex flex-col items-start'>
                <p className={`text-6xl font-semibold font-poppins ${isSelected ? 'text-[#FFFFFF] ' : 'text-[#000B33]'}`}>₹{amount}</p>
                <p className={`${isSelected ? 'text-[#FFFFFF] ' : 'text-[#000000]'} opacity-80 text-sm font-semibold font-poppins`}>Per member, per Month</p>
            </div>
            <div className={`border-[1px] ${isSelected ? 'border-[#FFFFFF]' : 'border-[#95C22B]'}`}></div>
            <div className='flex flex-col gap-[14px]'>
                <div className='flex items-center gap-1'>
                    <IoIosCheckmarkCircle className={`${isSelected ? 'text-[#FFFFFF] ' : 'text-[#000000]'}`} />
                    <p className={`${isSelected ? 'text-[#FFFFFF] ' : 'text-[#000000]'} text-sm font-normal font-poppins`}>Access to All Features</p>
                </div>
                <div className='flex items-center gap-1'>
                    <IoIosCheckmarkCircle className={`${isSelected ? 'text-[#FFFFFF] ' : 'text-[#000000]'}`} />
                    <p className={`${isSelected ? 'text-[#FFFFFF] ' : 'text-[#000000]'} opacity-80 text-sm font-semibold font-poppins`}>1k lookups / per month</p>
                </div>
                <div className='flex items-center gap-1'>
                    {amount > 1000 ? <IoIosCheckmarkCircle className={`${isSelected ? 'text-[#FFFFFF] ' : 'text-[#000000]'}`} /> : <FaCircleXmark className={`h-[13px] text-[red]`} />}
                    <p className={`${isSelected ? 'text-[#FFFFFF] ' : 'text-[#000000]'} opacity-80 text-sm font-semibold font-poppins`}>{amount > 1000 ? '30K API Credits / month' : 'No API Credits'}</p>
                </div>
                <div className='flex items-center gap-1'>
                    <IoIosCheckmarkCircle className={`${isSelected ? 'text-[#FFFFFF] ' : 'text-[#000000]'}`} />
                    <p className={`${isSelected ? 'text-[#FFFFFF] ' : 'text-[#000000]'} opacity-80 text-sm font-semibold font-poppins`}>10 Monitoring Quota</p>
                </div>
                <div className='flex items-center gap-1'>
                    <IoIosCheckmarkCircle className={`${isSelected ? 'text-[#FFFFFF] ' : 'text-[#000000]'}`} />
                    <p className={`${isSelected ? 'text-[#FFFFFF] ' : 'text-[#000000]'} opacity-80 text-sm font-semibold font-poppins`}>60 minutes Monitoring intervel</p>
                </div>
                <div className='flex items-center gap-1'>
                    <IoIosCheckmarkCircle className={`${isSelected ? 'text-[#FFFFFF] ' : 'text-[#000000]'}`} />
                    <p className={`${isSelected ? 'text-[#FFFFFF] ' : 'text-[#000000]'} opacity-80 text-sm font-semibold font-poppins`}>20% discount on backorders</p>
                </div>
                <div className='flex items-center justify-start gap-1'>
                    <IoIosCheckmarkCircle className={`${isSelected ? 'text-[#FFFFFF] ' : 'text-[#000000]'}`} />
                    <p className={`${isSelected ? 'text-[#FFFFFF] ' : 'text-[#000000]'} opacity-80 text-sm font-normal font-poppins`}>Domain Name Appraisal </p>
                    <p className='text-[#1AA703] text-[9px] font-normal font-poppins rounded-sm p-1 bg-[#C9FAD6]'>Coming Soon</p>
                </div>
                <div className='flex items-center justify-start gap-1'>
                    <IoIosCheckmarkCircle className={`${isSelected ? 'text-[#FFFFFF] ' : 'text-[#000000]'}`} />
                    <p className={`${isSelected ? 'text-[#FFFFFF] ' : 'text-[#000000]'} opacity-80 text-sm font-semibold font-poppins`}>Ip Monitoring</p>
                    <p className='text-[#1AA703] text-[9px] font-normal font-poppins rounded-sm p-1 bg-[#C9FAD6]'>Coming Soon</p>
                </div>
                <div className='flex items-center justify-start gap-1'>
                    <IoIosCheckmarkCircle className={`${isSelected ? 'text-[#FFFFFF] ' : 'text-[#000000]'}`} />
                    <p className={`${isSelected ? 'text-[#FFFFFF] ' : 'text-[#000000]'} opacity-80 text-sm font-semibold font-poppins`}>Backlink Monitoring</p>
                    <p className='text-[#1AA703] text-[9px] font-normal font-poppins rounded-sm p-1 bg-[#C9FAD6]'>Coming Soon</p>
                </div>
            </div>
            <p className={`${isSelected ? 'text-[#FFFFFF] ' : 'text-[#444444]'} text-sm font-light font-poppins`}>No credit card required</p>
        </div>
    )
}

export default ChoosePlanCompo
