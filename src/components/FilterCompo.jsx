import React, { useState } from 'react'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from './ui/select';

const FilterCompo = () => {
    const [gender, setGender] = useState('');
    const [feeRange, setFeeRange] = useState('');
    const [rating, setRating] = useState('');
    const [location, setLocation] = useState('');

    const handleGenderChange = (value) => setGender(value);
    const handleFeeRangeChange = (value) => setFeeRange(value);
    const handleRatingChange = (value) => setRating(value);
    const handleLocationChange = (value) => setLocation(value);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(gender);
      };
    return (
        <form onSubmit={handleSubmit} className='flex justify-between items-center gap-3 rounded-[10px] bg-[#EEEEEE]'>
            <Select onChangeValue={handleGenderChange}>
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
            <Select onChangeValue={handleFeeRangeChange}>
                <SelectTrigger className="w-[250px] px-8 border-none text-[#1A1A1A] bg-[#EEEEEE] text-sm font-medium font-inter">
                    <SelectValue placeholder="Search by Fee Range" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectItem value="apple">Apple</SelectItem>
                        <SelectItem value="banana">Banana</SelectItem>
                        <SelectItem value="blueberry">Blueberry</SelectItem>
                        <SelectItem value="grapes">Grapes</SelectItem>
                        <SelectItem value="pineapple">Pineapple</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
            <div className='border-[1.5px] border-[#717171] h-[30px]'></div>
            <Select onChangeValue={handleRatingChange}>
                <SelectTrigger className="w-[250px] px-12 border-none text-[#1A1A1A] bg-[#EEEEEE] text-sm font-medium font-inter">
                    <SelectValue placeholder="Search by Rating" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectItem value="5">5</SelectItem>
                        <SelectItem value="4">4</SelectItem>
                        <SelectItem value="3">3</SelectItem>
                        <SelectItem value="2">2</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
            <div className='border-[1.5px] border-[#717171] h-[30px]'></div>
            <Select onChangeValue={handleLocationChange}>
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
        </form>
    )
}

export default FilterCompo
