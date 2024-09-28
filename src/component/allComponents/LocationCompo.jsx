import React from 'react'

const LocationCompo = ({handleQuery}) => {
    return (
        <div className=' bg-[#FFFFFF] flex justify-center items-center gap-5 rounded-2xl p-8 border-[1px] border-[#D9D9D9]'>
            <div className=' bg-[#FFFFFF] border-[1px] border-[#E1E1E1] rounded-2xl'>
                <input
                    type="search"
                    placeholder='Search doctors, clinic etc.'
                    className="w-[500px] text-[#000000] font-medium font-poppins rounded-2xl placeholder:text-[#000000] px-10 py-5"
                    onClick={handleQuery}
                />
            </div>
            <div className='  bg-[#FFFFFF] border-[1px] border-[#E1E1E1] rounded-2xl px-4 py-5'>
                <select className="w-[228px] border-none outline-none text-[#3F3F3F] font-medium font-poppins">
                    <option disabled selected>location</option>
                    <option>Homer</option>
                    <option>Marge</option>
                    <option>Bart</option>
                    <option>Lisa</option>
                    <option>Maggie</option>
                </select>
            </div>
            <div className=' '>
                <button className=' w-[228px] bg-[#95C22B] text-[#FFFFFF] text-xl font-semibold font-poppins border-[1px] border-[#95C22B]  rounded-lg px-10 py-4'>search</button>
            </div>
        </div>
    )
}

export default LocationCompo