import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Image from '../../assets/dentist-doing-check-up-patient 1.png'
import { Button } from '@/components/ui/button'
import { BsChevronDoubleDown } from 'react-icons/bs'


const Card = () => {

    const[number, setNumber] = useState(3)

    const cardData = [
        {
            img: Image,
            heading: "Shield Your Smile: How Dental Sealants Block Cavities",
            description: "June 28, 2024",
            category: 'ABC'
        },
        {
            img: Image,
            heading: "Shield Your Smile: How Dental Sealants Block Cavities",
            description: "June 28, 2024",
            category: 'ABC'
        },
        {
            img: Image,
            heading: "Shield Your Smile: How Dental Sealants Block Cavities",
            description: "June 28, 2024",
        },
        {
            img: Image,
            heading: "Shield Your Smile: How Dental Sealants Block Cavities",
            description: "June 28, 2024",
        },
        {
            img: Image,
            heading: "Shield Your Smile: How Dental Sealants Block Cavities",
            description: "June 28, 2024",
        },
        {
            img: Image,
            heading: "Shield Your Smile: How Dental Sealants Block Cavities",
            description: "June 28, 2024",
        },
        {
            img: Image,
            heading: "Shield Your Smile: How Dental Sealants Block Cavities",
            description: "June 28, 2024",
        },
        {
            img: Image,
            heading: "Shield Your Smile: How Dental Sealants Block Cavities",
            description: "June 28, 2024",
        },
        {
            img: Image,
            heading: "Shield Your Smile: How Dental Sealants Block Cavities",
            description: "June 28, 2024",
        },
    ]

    function handleShowData() {
        setNumber(number + 3)
    }

    const ab = useParams()
    console.log(ab)
    return (
        <>
            <div className='flex items-center flex-wrap gap-5 mb-4'>
                {cardData.map((e, i) => {
                    return (
                        <>
                            {i < number &&
                                <Link to={`/blog/${i + 1}`} key={i} className='rounded-2xl w-[400px] relative shadow-custom5 cursor-pointer'>
                                    <img src={e.img} alt=""
                                        className='w-fit rounded-2xl' />
                                    <div className=' absolute px-3 py-5 bottom-0 rounded-b-2xl bg-[#FFFFFF]'>
                                        <h4 className='text-[#313131] text-2xl font-medium font-poppins mb-2 leading-6'>{e.heading}</h4>
                                        <p className='text-[#535353] text-[15px] font-medium font-poppins'>{e.description}</p>
                                    </div>
                                </Link>}
                        </>
                    )
                })}
            </div>
            <Button onClick={handleShowData} variant='moreBlog' className='flex justify-center items-center gap-[10px] w-fit' size='sm'>Show more Blogs<BsChevronDoubleDown className='text-[#95C22B]' /></Button>
        </>
    )
}

const Cards = () => {
    const data = [
        {
            image: Image,
            title: "Shield Your Smile: How Dental Sealants Block Cavities",
            date: "June 28, 2024",
        },
        {
            image: Image,
            title: "Shield Your Smile: How Dental Sealants Block Cavities",
            date: "June 28, 2024",
        },
        {
            image: Image,
            title: "Shield Your Smile: How Dental Sealants Block Cavities",
            date: "June 28, 2024",
        }
    ]
    return (
        <section className='max-w-[1240px] mx-auto'>
            <div>
                <h2 className="text-[#313131] text-[32px] text-center font-semibold font-poppins mb-8">Read top <span className='text-[#95C22B]'>articles</span> from experts</h2>
                <div className=' flex justify-center items-center gap-10 flex-wrap'>
                    {data.map((item, index) => (
                        <div key={index} className="bg-[#FFFFFF] w-[360px]  bg-base-100 shadow-xl rounded-2xl">
                            <figure>
                                <img
                                    src={item.image}
                                    alt="Shoes" className='w-[360px] h-[300px] rounded-2xl' />
                            </figure>
                            <div className="w-[360px] p-5">
                                <h4 className="text-[#313131] text-2xl font-medium font-poppins mb-2 leading-6">{item.title}</h4>
                                <p className=' text-[#535353] text-[15px] font-medium font-poppins'>{item.date}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div >
        </section>
    )
}

export { Cards }


export default Card
