import React from 'react'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from './ui/select';

const FilterCompo = (props) => {

    const {gender, feeRange, location, handleGenderChange, handleFeeRangeChange, handleLocationChange} = props
    console.log(gender)
    
    return (
        <div className='flex justify-between items-center gap-3 rounded-[10px] bg-[#EEEEEE]'>
            <Select onValueChange={handleGenderChange} defaultValue={gender}>
                <SelectTrigger className="w-[250px] px-12 border-none text-[#1A1A1A] bg-[#EEEEEE] text-sm font-medium font-inter">
                    <SelectValue placeholder="Search by Gender" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                        <SelectItem value="transgender">Transgender</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
            <div className='border-[1.5px] border-[#717171] h-[30px]'></div>
            <Select onValueChange={handleFeeRangeChange} defaultValue={feeRange}>
                <SelectTrigger className="w-[250px] px-8 border-none text-[#1A1A1A] bg-[#EEEEEE] text-sm font-medium font-inter">
                    <SelectValue placeholder="Search by Fee Range" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectItem value="299">299 to 499</SelectItem>
                        <SelectItem value="499">499 to 799</SelectItem>
                        <SelectItem value="799">799 to 999</SelectItem>
                        <SelectItem value="999">999 to 1499</SelectItem>
                        <SelectItem value="1499">1499 to 1999</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
            <div className='border-[1.5px] border-[#717171] h-[30px]'></div>
            <Select onValueChange={handleLocationChange} defaultValue={location}>
                <SelectTrigger className="w-[250px] px-12 border-none text-[#1A1A1A] bg-[#EEEEEE] text-sm font-medium font-inter">
                    <SelectValue placeholder="Search by Location" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectItem value="lucknow">Lucknow</SelectItem>
                        <SelectItem value="delhi">Delhi</SelectItem>
                        <SelectItem value="hardoi">Hardoi</SelectItem>
                        <SelectItem value="mumbai">Mumbai</SelectItem>
                        <SelectItem value="noida">Noida</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    )
}

export default FilterCompo
