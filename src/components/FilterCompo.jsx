import React from 'react'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from './ui/select';

const FilterCompo = (props) => {

    const { gender, rating, location, handleGenderChange, handleRatingChange, handleLocationChange } = props
    // console.log(rating)

    return (
        <div className='grid grid-cols-3 gap-3 rounded-[10px] bg-[#EEEEEE]'>
            <div className='flex justify-center'>
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
            </div>
            <div className='flex justify-center'>
                <Select value={rating} onValueChange={handleRatingChange}>
                    <SelectTrigger className="w-[250px] px-8 border-none text-[#1A1A1A] bg-[#EEEEEE] text-sm font-medium font-inter">
                        <SelectValue placeholder="Search by Rating" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectItem value="1">1</SelectItem>
                            <SelectItem value="2">2</SelectItem>
                            <SelectItem value="3">3</SelectItem>
                            <SelectItem value="4">4</SelectItem>
                            <SelectItem value="5">5</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>
            <div className='flex justify-center'>
                <Select value={location} onValueChange={handleLocationChange}>
                    <SelectTrigger className="w-[250px] px-12 border-none text-[#1A1A1A] bg-[#EEEEEE] text-sm font-medium font-inter">
                        <SelectValue placeholder="Search by Locality" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectItem value="Najabgarh">Najabgarh</SelectItem>
                            <SelectItem value="Ramlila Maidan">Ramlila Maidan</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>
        </div>
    )
}

export default FilterCompo
