import carouselImg from '@/assets/carouselImg.png';
import PlusImg from '@/assets/medical-doctor-logo-for-sale 1.png';
import VectorImg5 from '@/assets/Vector (5).png';
import VerifiedImg from '@/assets/verified 1.png';
import { FaLocationArrow } from 'react-icons/fa';
import { MdCall } from 'react-icons/md';
import ReactStars from 'react-stars';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Button } from './ui/button';


const ClinicBasicDetails = () => {
    return (
        <div className="grid grid-cols-[77%_260px] gap-4">
            <div className='rounded-[5px] flex flex-col gap-5'>
                {/* <p className='text-[#838383] text-xl font-semibold font-inter'>Choose clinic near you</p> */}
                <div className='p-4 rounded-[6px] flex gap-[10px] shadow-lg'>
                    <div className='rounded-[6px] relative w-[210px] h-[210px]'>
                        <img className='absolute top-1 right-1' src={VerifiedImg} alt="" />
                        <img className='h-full w-full' src={PlusImg} alt="" />
                    </div>
                    <div className='pe-[25px] ps-[9px] gap-6 w-[calc(100%-210px)]'>
                        <div className='flex items-center justify-between gap-4'>
                            <div className='flex items-center gap-4'>
                                <h4 className='text-[#1A1A1A] text-2xl font-semibold font-inter'>DentMarc Dental Clinic</h4>
                                <Button variant="outline" className="flex gap-2 text-[#95C22B] border-[#95C22B] hover:text-[#95C22B]">
                                    <FaLocationArrow className='text-[#95C22B]' />
                                    <span>Search on map</span>
                                </Button>
                            </div>
                            <div>
                                <ReactStars size={25} count={5} value={5} color2={'#FF8A00'} />
                                <div className='text-[#000000] text-[10px] text-right font-normal font-inter'>Rated by 2 users</div>
                            </div>
                        </div>
                        <div className='flex flex-col justify-start gap-2'>
                            <div className="flex gap-2 items-center">
                                <img src={VectorImg5} alt="" />
                                <h5 className='text-[#717171] text-base font-semibold font-inter'>Multi-Speciality Clinic</h5>
                            </div>
                            <ul className='flex flex-col gap-2'>
                                <li className='text-sm text-[#717171] leading-[10px]'><b>DentMarc:</b> Your One-Stop Dental Solution</li>
                                <li className='text-sm text-[#717171] leading-[10px]'><b>Multi-Specialty Practice:</b> Comprehensive care for all dental needs</li>
                                <li className='text-sm text-[#717171] leading-[10px]'><b>State-of-the-Art Facilities:</b> Equipped with the latest technology for exceptional care</li>
                                <li className='text-sm text-[#717171] leading-[10px]'><b>Unique Dental Experience:</b> Focused on customer service and practical solutions</li>
                                <li className='text-sm text-[#717171] leading-[10px]'><b>Continuity of Care:</b> Ensuring consistent, high-quality treatment across all services</li>
                            </ul>
                        </div>
                        <Button variant="outline" className="flex mt-3 gap-2 text-[#95C22B] border-[#95C22B] hover:text-[#95C22B]">
                            <MdCall className='text-[#95C22B] text-xl' />
                            <span>Call now</span>
                        </Button>
                        {/* <div>
                        </div> */}
                    </div>
                </div>
            </div>
            <div>
                <Swiper
                    loop={true}
                    modules={[Pagination, Autoplay]}
                    spaceBetween={50}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                >
                    <SwiperSlide>
                        <img className='' src={carouselImg} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='' src={carouselImg} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='' src={carouselImg} alt="" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default ClinicBasicDetails