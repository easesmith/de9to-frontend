import React from 'react'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from './ui/select';

const FilterCompo = (props) => {

    const { gender, rating, location, handleGenderChange, handleRatingChange, handleLocationChange } = props
    // console.log(rating)

    return (
        <div className='flex justify-between items-center gap-3 rounded-[10px] bg-[#EEEEEE]'>
            <Select value={gender} onValueChange={handleGenderChange}>
                <SelectTrigger className="w-[250px] px-12 border-none text-[#1A1A1A] bg-[#EEEEEE] text-sm font-medium font-inter">
                    <SelectValue placeholder="Search by Gender" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
            <div className='border-[1.5px] border-[#717171] h-[30px]'></div>
            <Select value={rating} onValueChange={handleRatingChange}>
                <SelectTrigger className="w-[250px] px-8 border-none text-[#1A1A1A] bg-[#EEEEEE] text-sm font-medium font-inter">
                    <SelectValue placeholder="Search by Fee Range" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectItem value="3">3</SelectItem>
                        <SelectItem value="3.5">3.5</SelectItem>
                        <SelectItem value="4">4</SelectItem>
                        <SelectItem value="4.5">4.5</SelectItem>
                        <SelectItem value="5">5</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
            <div className='border-[1.5px] border-[#717171] h-[30px]'></div>
            <Select value={location} onValueChange={handleLocationChange}>
                <SelectTrigger className="w-[250px] px-12 border-none text-[#1A1A1A] bg-[#EEEEEE] text-sm font-medium font-inter">
                    <SelectValue placeholder="Search by Locality" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectItem value="Lucknow">Lucknow</SelectItem>
                        <SelectItem value="Delhi">Delhi</SelectItem>
                        <SelectItem value="Noida">Noida</SelectItem>
                        <SelectItem value="Pune">Pune</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    )
}

export default FilterCompo
