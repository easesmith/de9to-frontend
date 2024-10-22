import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Image from '../../assets/dentist-doing-check-up-patient 1.png'
import { Button } from '@/components/ui/button'
import { BsChevronDoubleDown } from 'react-icons/bs'
import DentalData from '@/data/homeData/dentalTeam.json'
import Image1 from '@/assets/user-cover-1.png'
import BlogData from '@/data/Blog/blogData.json'
import usePostApiReq from '@/hooks/usePostApiReq'
import useGetApiReq from '@/hooks/useGetApiReq'
import Spinner from '@/components/Spinner'
import DataNotFound from '@/components/DataNotFound'
// import Image2 from '@/assets/user-cover-1 (1).png'
// import Image3 from '@/assets/360_F_295518052_aO5d9CqRhPnjlNDTRDjKLZHNftqfsxzI 1.png'


const Card = ({ hidden, isCategorySelected, setIsCategorySelected, handleSelectCategoryed }) => {

    const [number, setNumber] = useState(3)

    function handleShowData() {
        setNumber(number + 3)
    }

    const ab = useParams()
    // console.log(ab)
    return (
        <div className='flex flex-col items-center'>
            <div className='flex items-center flex-wrap gap-5 mb-4'>
                {BlogData.map((e, i) => {
                    return (
                        <>
                            {i < number &&
                                <Link to={`/blog/${i + 1}`} key={i} className={`rounded-2xl w-[400px] relative shadow-custom5 cursor-pointer`}>
                                    <img src={Image} alt=""
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
            <Button onClick={handleShowData} variant='moreBlog' className={`flex justify-center items-center gap-[10px] w-fit ${hidden}`} size='sm'>Show more Blogs<BsChevronDoubleDown className='text-[#95C22B]' /></Button>
        </div>
    )
}

const DentalTeamCard = () => {
    const [featuredDentist, setFeaturedDentist] = useState([]);
    const { res, fetchData, isLoading } = useGetApiReq();
    const navigate = useNavigate();

    const getFeaturedDentist = () => {
        fetchData(`/dentist/get-dentists?page=1`);
    }

    useEffect(() => {
        getFeaturedDentist();
    }, [])

    useEffect(() => {
        if (res?.status === 200 || res?.status === 201) {
            console.log("getFeaturedDentist res", res);
            setFeaturedDentist(res?.data?.data?.dentists);
        }
    }, [res])



    return (
        <section>
            <div className='bg-[#FFFFFF] px-5 py-16'>
                <h5 className="text-[#95C22B] text-xl max-[500px]:text-base text-center font-normal italic font-poppins mb-3">Our Specialised Doctors</h5>
                <h2 className="text-[#252B42] text-[32px] max-[500px]:text-xl text-center font-semibold font-poppins mb-8">Meet Our Highly Skilled Dental Team</h2>
                <div className=' bg-[#FFFFFF] flex items-center overflow-x-auto gap-10 pb-5'>
                    {
                        featuredDentist.map((item, index) => {
                            const { personalDetails, _id, clinic, dentistRatings } = item || {}
                            return (
                                <div key={index} className='w-[360px] max-[500px]:w-[250px]  cursor-pointer shadow-custom9 rounded-2xl'>
                                    <figure>
                                        <img
                                            src={Image1}
                                            alt="" className=' rounded-2xl' />
                                    </figure>
                                    <div className='w-[360px] max-[500px]:w-[250px] flex flex-col p-6'>
                                        <h3 className="text-[#2D2D32] max-[500px]:text-xl text-2xl font-medium font-poppins">{personalDetails?.prefix
                                        } {personalDetails?.Firstname} {personalDetails?.lastName}</h3>
                                        <p className="text-[#474747] max-[500px]:text-sm text-base font-normal font-poppins">{item.experience}</p>
                                        <p className="text-[#474747] max-[500px]:text-sm text-base font-normal font-poppins">{item.location}</p>
                                        <button onClick={() => navigate(`/our-dentist/${_id}`)} className="text-[#95C22B] max-[500px]:text-base text-xl font-semibold font-poppins border-[1px] border-[#95C22B] rounded-2xl py-3 mt-10">View Profile</button>
                                    </div>
                                </div>
                            )
                        })
                    }

                    {featuredDentist?.length === 0 && isLoading &&
                        <Spinner size={30} />
                    }

                    {featuredDentist?.length === 0 && !isLoading &&
                        <DataNotFound name={"Dentists"} />
                    }
                </div>
            </div>
        </section>
    )
}

export { DentalTeamCard }

export default Card