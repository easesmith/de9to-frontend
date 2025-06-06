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
import { Skeleton } from '@/components/ui/skeleton'
import ImageSkeleton from '@/components/ImageSkeleton'
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
            <div className='grid grid-cols-3 max-[900px]:grid-cols-2 max-w-[1200px] mx-auto gap-8 max-med:gap-4 px-4 mb-4'>
                {BlogData.map((e, i) => {
                    return (
                        <>
                            {i < number &&
                                <Link to={`/blog/${i + 1}`} key={i} className={`rounded-2xl max-small:h-52 max-[500px]:rounded-2xl relative shadow-lg cursor-pointer w-full h-full max-w-[400px]`}>
                                    <div className='w-full h-full'>
                                        <img src={Image} alt=""
                                            className='rounded-2xl ' />
                                    </div>
                                    <div className=' absolute px-3 max-[500px]:px-1 max-[500px]:py-3 py-5 -bottom-[1px] rounded-b-2xl bg-[#FFFFFF]'>
                                        <h4 className='text-[#313131] text-xl max-[900px]:text-lg max-[700px]:text-sm max-[500px]:text-xs font-medium font-poppins mb-2 leading-6'>{e.heading}</h4>
                                        <p className='text-[#535353] text-[15px] max-[700px]:text-xs font-medium font-poppins'>{e.description}</p>
                                    </div>
                                </Link>}
                        </>
                    )
                })}
            </div>
            <Button onClick={handleShowData} variant='moreBlog' className={`flex justify-center max-[500px]:text-xs items-center gap-[10px] w-fit ${hidden}`} size='sm'>Show more Blogs<BsChevronDoubleDown className='text-[#95C22B]' /></Button>
        </div>
    )
}

const DentalTeamCard = () => {
    const [featuredDentist, setFeaturedDentist] = useState([]);
    const { res, fetchData, isLoading } = useGetApiReq();
    // const [imageLoading, setImageLoading] = useState(true);
    const navigate = useNavigate();

    const getFeaturedDentist = () => {
        fetchData(`/patient/get-featured-dentist`);
    }

    useEffect(() => {
        getFeaturedDentist();
    }, [])

    useEffect(() => {
        if (res?.status === 200 || res?.status === 201) {
            console.log("getFeaturedDentist res", res);
            setFeaturedDentist(res?.data?.foundDentist);
        }
    }, [res])



    return (
        <section>
            <div className='bg-[#FFFFFF] px-5 pb-16 pt-16 max-[500px]:pt-4'>
                <h5 className="text-[#95C22B] text-xl max-[500px]:text-base text-center font-normal italic font-poppins mb-3">Our Specialised Doctors</h5>
                <h2 className="text-[#252B42] text-[32px] max-[500px]:text-xl text-center font-semibold font-poppins mb-8">Meet Our Highly Skilled Dental Team</h2>
                <div className='scrollBar max-w-[1170px] mx-auto bg-[#FFFFFF] flex items-center overflow-x-auto gap-10 pb-5'>
                    {
                        featuredDentist?.length > 0 && featuredDentist?.map((item, index) => {
                            const { personalDetails, _id, clinic, dentistRatings, educationalQualification } = item || {}
                            return (
                                <div key={index} className='w-[350px] max-[500px]:w-[250px] cursor-pointer shadow-custom9 rounded-2xl'>
                                    <figure>
                                        <ImageSkeleton
                                            src={personalDetails?.image ? personalDetails?.image : "https://media.istockphoto.com/id/1451587807/vector/user-profile-icon-vector-avatar-or-person-icon-profile-picture-portrait-symbol-vector.jpg?s=612x612&w=0&k=20&c=yDJ4ITX1cHMh25Lt1vI1zBn2cAKKAlByHBvPJ8gEiIg="}
                                            imgClassName={' rounded-2xl rounded-ee-none rounded-es-none w-full h-72 object-cover object-top'}
                                            skeletonClassName={"w-full h-72 rounded-3xl"}
                                        />
                                    </figure>
                                    <div className='w-[350px] max-[500px]:w-[250px] flex flex-col p-6'>
                                        <h3 className="text-[#2D2D32] max-[500px]:text-xl text-2xl font-medium font-poppins">{personalDetails?.prefix
                                        }. {personalDetails?.Firstname} {personalDetails?.lastName}</h3>
                                        <p className="text-[#474747] max-[500px]:text-sm text-base font-normal font-poppins">{educationalQualification?.yearsOfExperience} Yr Exp</p>
                                        <p className="text-[#474747] max-[500px]:text-sm text-base font-normal font-poppins">{ }</p>
                                        <button onClick={() => navigate(`/our-dentist/${_id}`)} className="text-[#95C22B] hover:bg-[#95C22B] hover:text-[#FFFFFF] transition-all duration-500 max-[500px]:text-base text-xl font-medium font-poppins border-[1px] border-[#95C22B] rounded-2xl h-12 mt-10">View Profile</button>
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