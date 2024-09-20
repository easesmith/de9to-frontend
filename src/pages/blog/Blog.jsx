import { Button } from '@/components/ui/button'
import React from 'react'
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
import Img1 from '../../assets/dentist-doing-check-up-patient 1.png'
import Img2 from '../../assets/horizontal-portrait-beautiful-cheerful-young-female-model-with-bobbed-hairstyle-pleasant-gentle-smile-healthy-skin-wears-green-sweater.png'
import Layout from '@/component/Layout/Layout'


const Blog = () => {

    const cards = [
        {
            img: Img1,
            heading: "Shield Your Smile: How Dental Sealants Block Cavities",
            description: "June 28, 2024",
        },
        {
            img: Img1,
            heading: "Shield Your Smile: How Dental Sealants Block Cavities",
            description: "June 28, 2024",
        },
        {
            img: Img1,
            heading: "Shield Your Smile: How Dental Sealants Block Cavities",
            description: "June 28, 2024",
        },
    ]
    return (
        <Layout>
            <main className='bg-[#FFFFFF] px-20'>
                <section className="bg-[#95C22B] w-full min-h-[365px] h-[365px] text-white flex items-center justify-center  rounded-3xl shadow-lg mx-auto">
                    <h1 className="text-[#FFFFFF] text-[40px] font-bold font-poppins w-[400px] leading-[47px]">
                        Insights & Stories:<br /><span className='font-light'>Explore the World of Dental Health</span>
                    </h1>
                    <div>
                        <img
                            src={Img2}
                            alt="Smiling Person"
                            className=" "
                        />
                    </div>
                </section>
                <section>
                    <h3 className="text-[#717171] text-2xl font-medium font-inter mb-4">Choose Topic</h3>
                    <div className=' flex justify-between items-center'>
                        <div className=' flex items-center gap-4'>
                            <Button variant='category' size='category'>Bleeding Gums</Button>
                            <Button variant='category' size='category'>Teeth Care</Button>
                            <Button variant='category' size='category'>Cavity</Button>
                            <Button variant='category' size='category'>Healthy Gum</Button>
                            <Button variant='category' size='category'>Top 10 foods for teeth</Button>
                            <Button variant='category' size='category'>Hair Care</Button>
                            <Button variant='category' size='category'>Hair Care</Button>
                            <Button variant='category' size='category'>Hair Care</Button>
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
                <section>
                    <h3 className="text-[#717171] text-2xl font-medium font-inter mb-5">Popular Blogs</h3>
                    <div className='flex items-center justify-center gap-5 mb-5'>
                        <Card img={Img1} heading="Shield Your Smile: How Dental Sealants Block Cavities" description="June 28, 2024" />
                        <Card img={Img1} heading="Shield Your Smile: How Dental Sealants Block Cavities" description="June 28, 2024" />
                        <Card img={Img1} heading="Shield Your Smile: How Dental Sealants Block Cavities" description="June 28, 2024" />
                    </div>
                    <div className='flex justify-center mb-5'>
                        <Select>
                            <SelectTrigger className="w-[190px] border-[1px] border-[#95C22B]">
                                <SelectValue placeholder="Show more blogs" />
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
                <section>
                    <h3 className="text-[#717171] text-2xl font-medium font-inter mb-5">Recent Blogs</h3>
                    <div className='flex items-center justify-center gap-5 mb-5'>
                        <Card img={Img1} heading="Shield Your Smile: How Dental Sealants Block Cavities" description="June 28, 2024" />
                        <Card img={Img1} heading="Shield Your Smile: How Dental Sealants Block Cavities" description="June 28, 2024" />
                        <Card img={Img1} heading="Shield Your Smile: How Dental Sealants Block Cavities" description="June 28, 2024" />
                    </div>
                    <div className='flex justify-center mb-5'>
                        <Select>
                            <SelectTrigger className="w-[190px] border-[1px] border-[#95C22B]">
                                <SelectValue placeholder="Show more blogs" />
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
            </main>
        </Layout>
    )
}

export default Blog
