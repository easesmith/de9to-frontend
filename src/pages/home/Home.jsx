import React, { useCallback, useEffect, useRef } from 'react'
import Layout from '@/component/Layout/Layout'
import TreatementCompo from '@/components/TreatementCompo'
import Card, { DentalTeamCard } from '@/component/Card/Card'
import DocImage from '@/assets/Group 1321317071.png'
import DocImage2 from '@/assets/Group 1321317071.png'
import TeethImg from '@/assets/_Compound Path_.png'
import ProfileImg from '@/assets/_Compound Path_.png'
import ProfileImg1 from '@/assets/dniedeibeib.png'
import ProfileImg2 from '@/assets/Image-100.png'
import Image from '@/assets/Picture1-removebg-preview 1.png'
import CheckMarkImg from '@/assets/anbx.png'
import Image1 from '@/assets/dentist 1.png'
import Image2 from '@/assets/checklist 1.png'
import Image3 from '@/assets/dental-clinic (1) 1.png'
import Image4 from '@/assets/maps.png'
import PhoneImg from '@/assets/main.png'
import { IoMdArrowBack } from "react-icons/io";
import { IoMdArrowForward } from "react-icons/io";
import { MdOutlineArrowOutward } from "react-icons/md";
import { useState } from 'react'
import SearchListCompo from '@/components/SearchListCompo'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import ConfirmBookingModal from '@/components/confirm-booking/ConfirmbookingModal'
import useGetApiReq from '@/hooks/useGetApiReq'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'

const Home = () => {

  const [active, setActive] = useState(1)
  const swiperRef3 = useRef(null);
  const [isConfirmBookingModalOpen, setIsConfirmBookingModalOpen] = useState(false);
  const [testimonials, setTestimonials] = useState([])

  const [isCounter, setIsCounter] = useState(false);

  const { res, fetchData } = useGetApiReq()


  const getTestimonialData = async () => {
    fetchData(`/patient/get-testimonials`)
  }

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setActive((prev) => (prev === 3 ? 1 : prev + 1));
  //   }, 2000);

  //   return () => clearInterval(interval);
  // }, []);

  useEffect(() => {
    getTestimonialData()
  }, [])

  useEffect(() => {
    if (res?.status === 200 || res?.status === 201) {
      console.log(res)
      setTestimonials(res.data.testimonials)
    }
  }, [res])

  console.log("testimonials:", testimonials)


  const handleActive = (number) => {
    setActive(number)
  }

  return (
    <Layout>
      <main>
        <section className='bg-[#FBFEF6]'>
          <div className='flex justify-center items-center flex-wrap pt-10'>
            <div className="max-[970px]:hidden">
              <SearchListCompo />
            </div>
            <div className='flex justify-center items-center flex-wrap'>
              <div className='px-16 py-16 max-[500px]:px-6 max-[700px]:py-6'>
                <h4 className="text-[#000000] text-[32px] max-[970px]:text-xl font-normal italic font-poppins max-[500px]:text-center mb-4">Your <span className='text-[#95C22B]'>Smile</span>, Our Passion</h4>
                <h1 className="max-w-[700px] w-full text-[#000000] text-5xl max-[970px]:text-3xl max-[500px]:text-xl max-[500px]:text-center font-extrabold font-poppins leading-[72px] mb-8">Personalized <span className='text-[#95C22B]'>Dental Solutions</span> for Every Patient</h1>
                <div className=' flex gap-5 max-[500px]:justify-center'>
                  <button onClick={() => setIsConfirmBookingModalOpen(false)} className='flex justify-center items-center gap-1 bg-[#95C22B] border-[1px] border-[#95C22B] rounded-lg px-5 py-4 max-[500px]:py-2 hover:bg-[#98c52f] cursor-pointer'>
                    <div className=' text-[#FFFFFF] text-lg max-[970px]:text-base font-semibold font-poppins '>Book an appointment</div>
                    <MdOutlineArrowOutward color='#FFFFFF' className='text-xl max-[970px]:text-lg' />
                  </button>
                  {/* <div className='flex justify-center items-center gap-1 border-[1px] border-[#95C22B] rounded-lg px-5 py-4 hover:bg-[#FFFFFF] cursor-pointer'>
                    <button className=' text-[#95C22B] text-lg font-semibold font-poppins'>Know more</button>
                    <MdOutlineArrowOutward color='#95C22B' fontSize={24} />
                  </div> */}
                </div>
                {isConfirmBookingModalOpen &&
                  <ConfirmBookingModal
                    isConfirmBookingModalOpen={isConfirmBookingModalOpen}
                    setIsConfirmBookingModalOpen={setIsConfirmBookingModalOpen}
                  />
                }
              </div>
              <div className=''>
                <div className=' relative'>
                  {/* <div className=' absolute hidden top-[39%] w-fit bg-[#D8F3AB] flex justify-center items-center gap-1 rounded-2xl px-5 py-3'>
                    <span className='text-[#000000] text-2xl font-medium font-poppins'>30+</span>
                    <p className='text-[#000000] text-xs font-normal font-poppins'>Expert<br />
                      Dentist</p>
                  </div> */}
                  <img className='max-w-md w-full' src={DocImage2} alt="" />
                  {/* <div className=' absolute hidden bottom-[65%] right-[0%] w-fit bg-[#D8F3AB] flex justify-center items-center gap-1 rounded-2xl px-5 py-3'>
                    <span className='text-[#000000] text-2xl font-medium font-poppins'>200k+</span>
                    <p className='text-[#000000] text-xs font-normal font-poppins break-all'>Expert
                      Dentist</p>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="overflow-hidden bg-[#F6F6F6]">
          <div className="logos">
            <div className="logos-slide">
              <span
                className="text-[#5A5A5A] text-2xl max-[700px]:text-xl max-[500px]:text-sm font-semibold font-poppins whitespace-nowrap"
              >
                Pay via De9to App and get Flat 20% Discount
              </span>
              <span
                className="text-[#5A5A5A] text-2xl max-[700px]:text-xl max-[500px]:text-sm font-semibold font-poppins whitespace-nowrap"
              >
                Pay via De9to App and get Flat 20% Discount
              </span>
              <span
                className="text-[#5A5A5A] text-2xl max-[700px]:text-xl max-[500px]:text-sm font-semibold font-poppins whitespace-nowrap"
              >
                Pay via De9to App and get Flat 20% Discount
              </span>
              <span
                className="text-[#5A5A5A] text-2xl max-[700px]:text-xl max-[500px]:text-sm font-semibold font-poppins whitespace-nowrap"
              >
                Pay via De9to App and get Flat 20% Discount
              </span>
              <span
                className="text-[#5A5A5A] text-2xl max-[700px]:text-xl max-[500px]:text-sm font-semibold font-poppins whitespace-nowrap"
              >
                Pay via De9to App and get Flat 20% Discount
              </span>
              <span
                className="text-[#5A5A5A] text-2xl max-[700px]:text-xl max-[500px]:text-sm font-semibold font-poppins whitespace-nowrap"
              >
                Pay via De9to App and get Flat 20% Discount
              </span>
              <span
                className="text-[#5A5A5A] text-2xl max-[700px]:text-xl max-[500px]:text-sm font-semibold font-poppins whitespace-nowrap"
              >
                Pay via De9to App and get Flat 20% Discount
              </span>
              <span
                className="text-[#5A5A5A] text-2xl max-[700px]:text-xl max-[500px]:text-sm font-semibold font-poppins whitespace-nowrap"
              >
                Pay via De9to App and get Flat 20% Discount
              </span>
            </div>
            <div className="logos-slide">
              <span
                className="text-[#5A5A5A] text-2xl max-[700px]:text-xl max-[500px]:text-sm font-semibold font-poppins whitespace-nowrap"
              >
                Pay via De9to App and get Flat 20% Discount
              </span>
              <span
                className="text-[#5A5A5A] text-2xl max-[700px]:text-xl max-[500px]:text-sm font-semibold font-poppins whitespace-nowrap"
              >
                Pay via De9to App and get Flat 20% Discount
              </span>
              <span
                className="text-[#5A5A5A] text-2xl max-[700px]:text-xl max-[500px]:text-sm font-semibold font-poppins whitespace-nowrap"
              >
                Pay via De9to App and get Flat 20% Discount
              </span>
              <span
                className="text-[#5A5A5A] text-2xl max-[700px]:text-xl max-[500px]:text-sm font-semibold font-poppins whitespace-nowrap"
              >
                Pay via De9to App and get Flat 20% Discount
              </span>
              <span
                className="text-[#5A5A5A] text-2xl max-[700px]:text-xl max-[500px]:text-sm font-semibold font-poppins whitespace-nowrap"
              >
                Pay via De9to App and get Flat 20% Discount
              </span>
              <span
                className="text-[#5A5A5A] text-2xl max-[700px]:text-xl max-[500px]:text-sm font-semibold font-poppins whitespace-nowrap"
              >
                Pay via De9to App and get Flat 20% Discount
              </span>
              <span
                className="text-[#5A5A5A] text-2xl max-[700px]:text-xl max-[500px]:text-sm font-semibold font-poppins whitespace-nowrap"
              >
                Pay via De9to App and get Flat 20% Discount
              </span>
              <span
                className="text-[#5A5A5A] text-2xl max-[700px]:text-xl max-[500px]:text-sm font-semibold font-poppins whitespace-nowrap"
              >
                Pay via De9to App and get Flat 20% Discount
              </span>
            </div>
          </div>
        </section>

        <section className='bg-[#FFFFFF]'>
          <div className='bg-[#FFFFFF] flex justify-center items-start gap-20 flex-wrap px-5 pt-28 pb-20 h-full'>
            <div className='w-[550px] max-md:w-[400px] max-[450px]:w-[300px] rounded-[40px]'>
              <div className=' relative'>
                <img src={Image} alt="" className='w-[550px] bg-[#F8F8F8] rounded-[40px]' />
                <div className=' absolute top-[2%] right-[2%] border-[16px] border-[#EBEBEB] rounded-full max-w-[150px] max-h-[150px] w-full h-full max-md:w-[175px] max-md:h-[175px] max-[500px]:w-[90px] max-[500px]:h-[90px] '>
                  <img src={CheckMarkImg} alt="" />
                </div>
              </div>
            </div>
            <div className='max-w-[590px] flex flex-col gap-[45px] h-full'>
              <div className='flex flex-col items-start justify-start gap-[22px]'>
                <h2 className='text-[#000000] text-[32px] max-[970px]:text-2xl max-[500px]:text-xl max-[500px]:text-center font-medium font-poppins tracking-[8%] w-full'>What We Have Achieved</h2>
                <p className='max-w-[590px] text-[#818181] text-xl max-[970px]:text-lg max-[500px]:text-base max-[500px]:text-center font-normal font-poppins tracking-[2%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim nisi ut aliquip ex ea  commodo consequat.</p>
              </div>
              <ScrollTrigger onEnter={() => setIsCounter(true)} onExit={() => setIsCounter(false)}>
                <div className=' grid grid-cols-2 gap-5 max-[500px]:grid-cols-4'>
                  <div className=''>
                    <img className='w-14 h-14 max-[500px]:w-8 max-[500px]:h-8' src={Image1} alt="" />
                    <div className='text-[#8E8E8E] max-[500px]:text-sm text-5xl font-semibold font-poppins my-[10px] max-[500px]:my-1'>{isCounter && <CountUp start={0} end={150} duration={2} />}+</div>
                    <p className='text-[#818181] max-[500px]:text-[8px] text-xl font-normal font-poppins -mt-1 max-[500px]:leading-3'>Dentist Signups</p>
                  </div>
                  <div className=''>
                    <img className='w-14 h-14 max-[500px]:w-8 max-[500px]:h-8' src={Image2} alt="" />
                    <div className='text-[#8E8E8E] max-[500px]:text-sm text-5xl font-semibold font-poppins my-[10px] max-[500px]:my-1'>{isCounter && <CountUp start={0} end={10000} duration={2} />}+</div>
                    <p className='text-[#818181] max-[500px]:text-[8px] text-xl font-normal font-poppins -mt-1 max-[500px]:leading-3'>Dental Consultations</p>
                  </div>
                  <div className=''>
                    <img className='w-14 h-14 max-[500px]:w-8 max-[500px]:h-8' src={Image3} alt="" />
                    <div className='text-[#8E8E8E] max-[500px]:text-sm text-5xl font-semibold font-poppins my-[10px] max-[500px]:my-1'>{isCounter && <CountUp start={0} end={150} duration={2} />}+</div>
                    <p className='text-[#818181] max-[500px]:text-[8px] text-xl font-normal font-poppins my-[10px] -mt-1 max-[500px]:leading-3'>Dental Camps</p>
                  </div>
                  <div className=''>
                    <img className='w-14 h-14 max-[500px]:w-8 max-[500px]:h-8' src={Image4} alt="" />
                    <div className='text-[#8E8E8E] max-[500px]:text-sm text-5xl font-semibold font-poppins my-[10px] max-[500px]:my-1'>{isCounter && <CountUp start={0} end={175} duration={2} />}+</div>
                    <p className='text-[#818181] max-[500px]:text-[8px] text-xl font-normal font-poppins -mt-1 max-[500px]:leading-3'>Pincode Covered</p>
                  </div>
                </div>
              </ScrollTrigger>

            </div>
          </div>
        </section>
        <DentalTeamCard />
        <TreatementCompo />
        {/* <section className='flex justify-center items-center'>
          <div className=' w-[85%] flex justify-between items-center gap-10 flex-wrap py-16'>
            <div className=''>
              <h2 className='text-[#000000] text-4xl font-semibold font-poppins ps-3'>Lorem Ipsum</h2>
              <p className='max-w-[535px] text-[#000000] text-base font-normal font-poppins ps-3'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem  accusantium doloremque laudantium, totam rem aperiam, eaque quasi architecto beatae vitae dicta sunt  explicabo.</p>
              <div className=' flex gap-5 pt-8'>
                <div className="slider w-[16px] h-[390px] bg-[#E8F7CA] rounded-[16px]">
                  <div onClick={() => handleActive(1)} className={`slider w-[16px] rounded-[16px] cursor-pointer ${active === 1 ? 'bg-[#95C22B] h-[100px]' : 'bg-[#E8F7CA] h-[65px] '}`}></div>
                  <div onClick={() => handleActive(2)} className={`slider w-[16px] rounded-[16px] cursor-pointer ${active === 2 ? 'bg-[#95C22B]  h-[100px]' : 'bg-[#E8F7CA] h-[65px] '}`}></div>
                  <div onClick={() => handleActive(3)} className={`slider w-[16px]  rounded-[16px] cursor-pointer ${active === 3 ? 'bg-[#95C22B]  h-[100px]' : 'bg-[#E8F7CA] h-[65px] '}`}></div>
                </div>
                <div className='flex flex-col gap-[14px]'>
                  <div className='py-[10px] flex flex-col justify-center'>
                    <h4 className='text-[#000000] text-2xl font-medium font-poppins'>Lorem Ipsum</h4>
                    {active == 1 &&
                      <p className='max-w-[430px] text-[#737373] text-base font-light font-poppins'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem  accusantium doloremque laudantium</p>
                    }
                  </div>
                  <div className='py-[10px] flex flex-col justify-center'>
                    <h4 className=' text-[rgb(0,0,0)] text-2xl font-medium font-poppins'>Lorem Ipsum</h4>
                    {active == 2 &&
                      <p className='max-w-[430px] text-[#737373] text-base font-light font-poppins'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem  accusantium doloremque laudantium</p>
                    }
                  </div>
                  <div className='py-[10px] flex flex-col justify-center'>
                    <h4 className='text-[#000000] text-2xl font-medium font-poppins'>Lorem Ipsum</h4>
                    {active == 3 &&
                      <p className='max-w-[430px] text-[#737373] text-base font-light font-poppins'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem  accusantium doloremque laudantium</p>
                    }
                  </div>
                </div>
              </div>
            </div>
            <div>
              {active === 1 && <img src={PhoneImg} alt="" />}
              {active === 2 && <img src={PhoneImg} alt="" />}
              {active === 3 && <img src={PhoneImg} alt="" />}
            </div>
          </div>
        </section> */}

        <section>
          <div className=' flex  flex-col justify-center items-center gap-8 pt-16 max-[900px]:pb-5 pb-40 max-w-[1240px] px-5 mx-auto'>
            <h2 className="max-w-[350px] text-[#000000] text-[32px] max-[500px]:text-xl text-center font-semibold font-poppins">The Honest <span className='text-[#95C22B]'>Review</span> From Our Client</h2>
            <p className='max-w-[425px] text-[#3F3F3F] text-xl max-[500px]:text-base text-center font-normal font-poppins'>See what our patients are saying about their experiences at our clinic.</p>
            <div className='flex justify-center items-center z-20'>
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                  clickable: true,
                }}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                }}
                navigation={{
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
                }}
                modules={[Pagination, Navigation, Autoplay]}
                onSwiper={(swiper) => {
                  swiperRef3.current = swiper;
                }}
                className="mySwiper flex justify-center dental-camp max-w-[600px] max-[620px]:max-w-[320px] w-full gap-5"
              >
                {testimonials.length > 0 && testimonials.map((e, i) => {
                  return (
                    <SwiperSlide key={i}>
                      <div className=' bg-white flex flex-col items-center gap-12 rounded-2xl shadow-custom5 p-10 px-0'>
                        <p className=' text-[#636571] text-2xl max-w-[500px] break-words whitespace-break-spaces max-[500px]:text-lg text-center font-light 
                    italic font-poppins'>{e.comment}</p>
                        <div className="profile flex justify-center items-start gap-6">
                          <div className="profile-picture">
                            <img src={e.image} className='w-12 h-12 rounded-full' />
                          </div>
                          <div>
                            <h4 className=' text-[#595959] text-2xl max-[500px]:text-lg font-bold font-inter'>{e.name}</h4>
                            <p className=" text-[#595959] text-base max-[500px]:text-sm font-normal font-inter">New york, USA</p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  )
                })}
              </Swiper>
            </div>
            <div className=' flex gap-3 pt-20 max-[900px]:pt-5'>
              <BsArrowLeft onClick={() => swiperRef3.current?.slidePrev()} fontSize={30} className=' cursor-pointer text-[#909090] hover:text-[#95C22B]' />
              <BsArrowRight onClick={() => swiperRef3.current?.slideNext()} fontSize={30} className=' cursor-pointer text-[#909090] hover:text-[#95C22B]' />
            </div>
            <div className=' absolute z-10 left-[12%] mt-48 max-[1200px]:hidden'>
              <div className=' relative flex justify-center items-center'>
                <img src={ProfileImg1} alt="" className=' absolute z-10 left-[0%] bottom-[25%]' />
                <div className='relative z-0 w-[510px] h-[510px] flex justify-center items-center border-[1px] border-[#D7D7D7] rounded-full'>
                  <img src={ProfileImg1} alt="" className=' absolute z-10 left-[25%] bottom-[18%]' />
                  <img src={ProfileImg2} alt="" className=' absolute z-10 left-[18%] top-[25%]' />
                  <div className='relative w-[350px] h-[350px] flex justify-center items-center  border-[1px] border-[#D7D7D7] rounded-full'>
                    <div className='w-[200px] h-[200px] flex justify-center items-center border-[1px] border-[#D7D7D7] rounded-full'></div>
                  </div>
                </div>
              </div>
            </div>
            <div className=' absolute right-[12%] mt-48 max-[1200px]:hidden'>
              <div className=' relative flex justify-center items-center'>
                <img src={ProfileImg2} alt="" className=' absolute z-10 right-[3%] top-[18%]' />
                <img src={ProfileImg1} alt="" className=' absolute z-10 right-[3%] bottom-[18%]' />
                <div className='relative w-[510px] h-[510px] flex justify-center items-center border-[1px] border-[#D7D7D7] rounded-full'>
                  <div className='relative w-[350px] h-[350px] flex justify-center items-center  border-[1px] border-[#D7D7D7] rounded-full'>
                    <img src={ProfileImg1} alt="" className=' absolute right-[16%] top-[42%]' />
                    <div className='w-[200px] h-[200px] flex justify-center items-center border-[1px] border-[#D7D7D7] rounded-full'></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className='max-[500px]:px-4'>
          <section className=' bg-[#95C22B] flex justify-center items-center rounded-3xl max-[500px]:rounded-lg'>
            <div className=' flex items-start px-5 pt-16 max-md:pb-16 max-[500px]:py-5'>
              <div className=' max-md:hidden'>
                <img src={TeethImg} alt="" className='bg-transparent opacity-[0.1]' />
              </div>
              <div className='max-w-[550px] flex flex-col items-center'>
                <h2 className="text-[#313131] text-[32px] max-[700px]:text-xl text-center font-semibold font-poppins leading-[48px] mb-8">Don’t wait <span className='text-[#FFFFFF]'>and make an appointment today</span></h2>
                <button className='bg-[#FFFFFF] text-[#95C22B] text-xl max-[500px]:w-full max-[700px]:text-base font-semibold font-poppins rounded-2xl max-[500px]:rounded-lg px-5 py-3 hover:bg-[#f9f9f9]'>Book Appointment</button>
              </div>
            </div>
          </section>
        </div>
        <section>
          <h2 className="text-[#313131] text-[32px] max-[500px]:text-xl text-center font-semibold font-poppins pt-[70px]">Read top <span className='text-[#95C22B]'>articles</span> from experts</h2>
          <div className='my-10'>
            <Card hidden='hidden' />
          </div>
        </section>
      </main>
    </Layout>
  )
}

export default Home
