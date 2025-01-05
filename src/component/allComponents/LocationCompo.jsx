import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { HiMiniXMark } from "react-icons/hi2";
import { Input } from '@/components/ui/input';


const LocationCompo = ({ searchQuery, setSearchQuery, handleGetSerachQuery, location, isShadow, setLocation, setIsShadow, setShowDentistAndClinic }) => {

    return (
        <div className={`flex max-[700px]:hidden justify-center items-center gap-5 ${isShadow ? 'rounded-b-none border-t-0 border-s-0 border-e-0' : ''}`}>
            <div className="relative w-[450px]">
                <Input
                    type="search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder='Search Dentists, Clinic etc.'
                    className="text-[#000000] text-base font-medium font-poppins rounded-lg focus-visible:ring-[#95C22B] placeholder:text-[#000000] px-6 py-5"
                />
                {searchQuery &&
                    <HiMiniXMark onClick={() => { setIsShadow(false), setShowDentistAndClinic('All'), setSearchQuery("") }} className='absolute text-lg right-5 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer' />
                }
            </div>
            <Select value={location} onValueChange={setLocation}>
                <SelectTrigger className="w-[180px] py-5 rounded-lg text-base text-[#3F3F3F] font-medium font-poppins">
                    <SelectValue placeholder="location" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="Najabgarh">Najabgarh</SelectItem>
                    <SelectItem value="Ramlila Maidan">Ramlila Maidan</SelectItem>
                </SelectContent>
            </Select>
            <div className=' '>
                <button onClick={handleGetSerachQuery} className=' w-[150px] bg-[#95C22B] text-[#FFFFFF] text-base font-semibold font-poppins border-[1px] border-[#95C22B] rounded-lg px-10 py-2'>Search</button>
            </div>
        </div>
    )
}

export default LocationCompo