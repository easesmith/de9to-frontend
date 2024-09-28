import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import Card from '@/component/Card/Card'
import BlogCircleImg1 from '../../assets/Frame 1171283296.png'
import BlogCircleImg2 from '../../assets/Frame 1171283297.png'
import Img1 from '../../assets/dentist-doing-check-up-patient 1.png'
import Img2 from '../../assets/horizontal-portrait-beautiful-cheerful-young-female-model-with-bobbed-hairstyle-pleasant-gentle-smile-healthy-skin-wears-green-sweater.png'
import Layout from '@/component/Layout/Layout'
import { CategoryBtn, Pagination, PrevLink } from '@/component/MiniCompo/MiniCompo'
import { HiArrowLongLeft } from "react-icons/hi2";
import { HiArrowLongRight } from "react-icons/hi2";
import { useNavigate } from 'react-router-dom'
import ReactPagination from '@/component/allComponents/ReactPagination'
import { BsChevronDoubleDown } from "react-icons/bs";
import CategoryData from '@/data/Blog/categoryData.json'


const Blog = () => {

    // const navigate = useNavigate()

    // const handleNagigate = (i) =>{
    //     navigate(`/blog/${i}`)
    // }

    const [isCategorySelected, setIsCategorySelected] = useState('All')

    const handleSelectCategoryed = (title) => {
        setIsCategorySelected(title)
    }

    // const filteredItems = CategoryData.filter((item) =>
    //     isCategorySelected === 'All' ? true : item.category === isCategorySelected
    //   );

    return (
        <Layout>
            <main className='bg-[#FFFFFF] w-full max-w-[1240px] mx-auto flex flex-col gap-8 my-8'>
                <PrevLink page="Blogs" />
                <section className="bg-[#95C22B] w-full h-[365px] text-white flex items-center justify-center rounded-3xl shadow-lg mx-auto">
                    <h1 className="text-[#FFFFFF] text-[40px] font-bold font-poppins w-[400px] leading-[47px]">
                        Insights & Stories:<br /><span className='font-light'>Explore the World of Dental Health</span>
                    </h1>
                    <div className='h-full flex items-center justify-center'>
                        <img src={Img2} alt="Smiling Person" className="self-end" />
                    </div>
                    {/* <div className='h-full '> */}
                    <img src={BlogCircleImg1} alt="Smiling Person" className="absolute top-[15%] right-[2%]" />
                    {/* </div> */}
                    {/* <div className='h-full relative'> */}
                    <img src={BlogCircleImg2} alt="Smiling Person" className=" absolute bottom-[18%] left-[3%]" />
                    {/* </div> */}
                </section>
                <section className='flex flex-col gap-4'>
                    <h3 className="text-[#717171] text-2xl font-medium font-inter">Choose Topic</h3>
                    <div className=' flex justify-between items-center'>
                        <div className=' flex items-center gap-4'>
                            <CategoryBtn isCategorySelected={isCategorySelected} setIsCategorySelected={setIsCategorySelected} handleSelectCategoryed={handleSelectCategoryed} />
                        </div>
                        <Select>
                            <SelectTrigger className="w-[110px] border-[1px] border-[#95C22B]">
                                <SelectValue placeholder="See All" />
                            </SelectTrigger>
                            <SelectContent className="border-[1px] border-[#95C22B] rounded-lg py-[10px] px-5">
                                <SelectGroup>
                                    <SelectLabel>Fruits</SelectLabel>
                                    <SelectItem value="apple">Apple</SelectItem>
                                    <SelectItem value="banana">Banana</SelectItem>
                                    <SelectItem value="blueberry">Blueberry</SelectItem>
                                    <SelectItem value="grapes">Grapes</SelectItem>
                                    <SelectItem value="pineapple">Pineapple</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                </section>
                <section className='flex flex-col items-center gap-4'>
                    <h3 className="text-[#717171] text-2xl font-medium font-inter self-start">Popular Blogs</h3>
                    <Card isCategorySelected={isCategorySelected} setIsCategorySelected={setIsCategorySelected} handleSelectCategoryed={handleSelectCategoryed} />
                </section>
                <section className='flex flex-col items-center gap-4'>
                    <h3 className="text-[#717171] text-2xl font-medium font-inter self-start">Recent Blogs</h3>
                    <Card />
                </section>
            </main>
        </Layout>
    )
}

export default Blog
