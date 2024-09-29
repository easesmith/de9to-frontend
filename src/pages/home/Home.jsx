import React, { useRef } from 'react'
import Layout from '@/component/Layout/Layout'
import TreatementCompo from '@/components/TreatementCompo'
import Card, { DentalTeamCard } from '@/component/Card/Card'
import DocImage from '@/assets/Progetto senza titolo (19) 1.png'
import TeethImg from '@/assets/_Compound Path_.png'
import ProfileImg from '@/assets/_Compound Path_.png'
import ProfileImg1 from '@/assets/dniedeibeib.png'
import Image from '@/assets/Picture1-removebg-preview 1.png'
import CheckMarkImg from '@/assets/anbx.png'
import Image1 from '@/assets/bixbhh .png'
import Image2 from '@/assets/Frame (1)  .png'
import Image3 from '@/assets/Frame (2)  .png'
import Image4 from '@/assets/Frame (3)  .png'
import PhoneImg from '@/assets/main.png'
import { IoMdArrowBack } from "react-icons/io";
import { IoMdArrowForward } from "react-icons/io";
import { MdOutlineArrowOutward } from "react-icons/md";
import { useState } from 'react'
import SearchListCompo from '@/components/SearchListCompo'
import { Navigation, Pagination } from 'swiper/modules'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import ConfirmBookingModal from '@/components/confirm-booking/ConfirmbookingModal'

const Home = () => {

  const [active, setActive] = useState(1)
  const swiperRef3 = useRef(null);
  const [isConfirmBookingModalOpen, setIsConfirmBookingModalOpen] = useState(false);



  const handleActive = (number) => {
    setActive(number)
  }

  return (
    <Layout>
      <main>
        <section className='bg-[#FBFEF6]'>
          <div className='flex justify-center items-center flex-wrap pt-10'>
            <SearchListCompo />
            <div className='flex justify-center items-center flex-wrap'>
              <div className='px-16 py-16'>
                <h4 className="text-[#000000] text-[32px] font-normal italic font-poppins mb-4">Your <span className='text-[#95C22B]'>Smile</span>, Our Passion</h4>
                <h1 className="max-w-[700px] w-full text-[#000000] text-5xl font-extrabold font-poppins leading-[72px] mb-8">Personalized <span className='text-[#95C22B]'>Dental Solutions</span> for Every Patient</h1>
                <div className=' flex gap-5'>
                  <div className='flex justify-center items-center gap-1 bg-[#95C22B] border-[1px] border-[#95C22B] rounded-lg px-5 py-4'>
                    <button  onClick={() => setIsConfirmBookingModalOpen(true)} className=' text-[#FFFFFF] text-lg font-semibold font-poppins '>Book an appointment</button>
                    <MdOutlineArrowOutward color='#FFFFFF' fontSize={24} />
                  </div>
                  <div className='flex justify-center items-center gap-1 border-[1px] border-[#95C22B] rounded-lg px-5 py-4'>
                    <button className=' text-[#95C22B] text-lg font-semibold font-poppins'>Know more</button>
                    <MdOutlineArrowOutward color='#95C22B' fontSize={24} />
                  </div>
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
                  <div className=' absolute top-[39%] w-fit bg-[#D8F3AB] flex justify-center items-center gap-1 rounded-2xl px-5 py-3'>
                    <span className='text-[#000000] text-2xl font-medium font-poppins'>30+</span>
                    <p className='text-[#000000] text-xs font-normal font-poppins'>Expert<br />
                      Dentist</p>
                  </div>
                  <img src={DocImage} alt="" />
                  <div className=' absolute bottom-[65%] right-[0%] w-fit bg-[#D8F3AB] flex justify-center items-center gap-1 rounded-2xl px-5 py-3'>
                    <span className='text-[#000000] text-2xl font-medium font-poppins'>200k+</span>
                    <p className='text-[#000000] text-xs font-normal font-poppins break-all'>Expert
                      Dentist</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='overflow-hidden bg-[#F6F6F6]'>
          <div className="w-[100vw] flex justify-between items-center gap-20 animate-scroll py-3">
            <span className="text-[#5A5A5A] text-2xl font-semibold font-poppins">Pay via De9to App an get Flat 20% Discount</span>
            <span className="text-[#5A5A5A] text-2xl font-semibold font-poppins">Pay via De9to App an get Flat 20% Discount</span>
          </div>
        </section>
        <section className='bg-[#FFFFFF]'>
          <div className='bg-[#FFFFFF] flex justify-center items-start gap-20 flex-wrap px-5 pt-28 pb-20 h-full'>
            <div className='w-[550px] max-md:w-[400px] max-[450px]:w-[300px] rounded-[40px]'>
              <div className=' relative'>
                <img src={Image} alt="" className='w-[550px] bg-[#F8F8F8] rounded-[40px]' />
                <div className=' absolute z-10 top-[2%] right-[2%] border-[16px] border-[#EBEBEB] rounded-full max-w-[150px] max-h-[150px] w-full h-full max-md:w-[175px] max-md:h-[175px] max-[450px]:w-[130px] max-[450px]:h-[130px] '>
                  <img src={CheckMarkImg} alt="" />
                </div>
              </div>
            </div>
            <div className='max-w-[590px] flex flex-col gap-[45px] h-full'>
              <div className='flex flex-col items-start justify-start gap-[22px]'>
                <h2 className='text-[#000000] text-[32px] font-medium font-poppins tracking-[8%]'>What We Have Achieved</h2>
                <p className='max-w-[590px] text-[#818181] text-xl font-normal font-poppins tracking-[2%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim nisi ut aliquip ex ea  commodo consequat.</p>
              </div>
              <div className=' flex flex-wrap'>
                <div className='w-[250px] mb-10'>
                  <img src={Image1} alt="" />
                  <div className='text-[#95C22B] text-5xl font-semibold font-poppins my-[10px]'>150+</div>
                  <p className='text-[#818181] text-xl font-normal font-poppins'>Dentist Signups</p>
                </div>
                <div className='w-[250px] mb-10'>
                  <img src={Image2} alt="" />
                  <div className='text-[#95C22B] text-5xl font-semibold font-poppins my-[10px]'>10k+</div>
                  <p className='text-[#818181] text-xl font-normal font-poppins'>Dental Consultations</p>
                </div>
                <div className='w-[250px]'>
                  <img src={Image3} alt="" />
                  <div className='text-[#95C22B] text-5xl font-semibold font-poppins my-[10px]'>150+</div>
                  <p className='text-[#818181] text-xl font-normal font-poppins my-[10px]'>Dental Camps</p>
                </div>
                <div className='w-[250px]'>
                  <img src={Image4} alt="" />
                  <div className='text-[#95C22B] text-5xl font-semibold font-poppins my-[10px]'>175+</div>
                  <p className='text-[#818181] text-xl font-normal font-poppins'>Pincode Covered</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <DentalTeamCard />
        <TreatementCompo />
        <section className='flex justify-center items-center'>
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
                    <h4 className=' text-[#000000] text-2xl font-medium font-poppins'>Lorem Ipsum</h4>
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
        </section>


        {/* <section>
        <div className=' relative flex flex-col justify-center items-center gap-8 px-5 pt-16 pb-40'>
          <h2 className="max-w-[350px] text-[#000000] text-[32px] text-center font-semibold font-poppins">The Honest <span className='text-[#95C22B]'>Review</span> From Our Client</h2>
          <p className='max-w-[425px] text-[#3F3F3F] text-xl text-center font-normal font-poppins'>See what our patients are saying about their experiences at our clinic.</p>
          <div className=' z-20 bg-white max-w-[640px] flex flex-col items-center gap-12 rounded-2xl shadow-2xl p-10'>
            <p className=' text-[#636571] text-2xl text-center font-light 
                    italic font-poppins'>Lorem ipsum dolor sit amet, consectetuer
              adipiscing elit. Aenean commodo ligula eget
              dolor. Aenean massa.</p>
            <div className="profile flex justify-center items-start gap-6">
              <div className="profile-picture">
                <img src={ProfileImg1} />
              </div>
              <div>
                <h4 className=' text-[#595959] text-2xl font-bold font-inter'>Jonathan Vallem</h4>
                <p className=" text-[#595959] text-base font-normal font-inter">New york, USA</p>
              </div>
            </div>
          </div>
          <div className=' flex gap-3 pt-20'>
            <BsArrowLeft fontSize={30} className=' cursor-pointer hover:text-[#95C22B]' />
            <BsArrowRight fontSize={30} className=' cursor-pointer hover:text-[#95C22B]' />
          </div>
          <div className=' absolute z-10 left-[12%] mt-48'>
            <div className=' relative flex justify-center items-center'>
              <img src={ProfileImg} alt="" className=' absolute z-10 left-[0%] bottom-[25%]' />
              <div className='relative z-0 w-[510px] h-[510px] flex justify-center items-center border-[1px] border-[#D7D7D7] rounded-full'>
                <img src={ProfileImg} alt="" className=' absolute z-10 left-[25%] bottom-[18%]' />
                <img src={ProfileImg} alt="" className=' absolute z-10 left-[18%] top-[25%]' />
                <div className='relative w-[350px] h-[350px] flex justify-center items-center  border-[1px] border-[#D7D7D7] rounded-full'>
                  <div className='w-[200px] h-[200px] flex justify-center items-center border-[1px] border-[#D7D7D7] rounded-full'></div>
                </div>
              </div>
            </div>
          </div>

          <div className=' absolute right-[12%] mt-48'>
            <div className=' relative flex justify-center items-center'>
              <img src={ProfileImg} alt="" className=' absolute z-10 right-[3%] top-[18%]' />
              <img src={ProfileImg} alt="" className=' absolute z-10 right-[3%] bottom-[18%]' />
              <div className='relative w-[510px] h-[510px] flex justify-center items-center border-[1px] border-[#D7D7D7] rounded-full'>
                <div className='relative w-[350px] h-[350px] flex justify-center items-center  border-[1px] border-[#D7D7D7] rounded-full'>
                  <img src={ProfileImg} alt="" className=' absolute right-[16%] top-[42%]' />
                  <div className='w-[200px] h-[200px] flex justify-center items-center border-[1px] border-[#D7D7D7] rounded-full'></div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section> */}

        <section>
          <div className=' flex flex-col justify-center items-center gap-8 pt-16 pb-40 max-w-[1240px] mx-auto'>
            <h2 className="max-w-[350px] text-[#000000] text-[32px] text-center font-semibold font-poppins">The Honest <span className='text-[#95C22B]'>Review</span> From Our Client</h2>
            <p className='max-w-[425px] text-[#3F3F3F] text-xl text-center font-normal font-poppins'>See what our patients are saying about their experiences at our clinic.</p>
            <div className='flex justify-center  items-center z-20'>
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                  clickable: true,
                }}
                navigation={{
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
                }}
                modules={[Pagination, Navigation]}
                onSwiper={(swiper) => {
                  swiperRef3.current = swiper;
                }}
                className="mySwiper flex justify-center dental-camp w-[600px] h-[350px] gap-5"
              >
                <SwiperSlide>
                  <div className=' bg-white flex flex-col items-center gap-12 rounded-2xl shadow-custom5 p-10'>
                    <p className=' text-[#636571] text-2xl text-center font-light 
                    italic font-poppins'>Lorem ipsum dolor sit amet, consectetuer
                      adipiscing elit. Aenean commodo ligula eget
                      dolor. Aenean massa.</p>
                    <div className="profile flex justify-center items-start gap-6">
                      <div className="profile-picture">
                        <img src={ProfileImg1} />
                      </div>
                      <div>
                        <h4 className=' text-[#595959] text-2xl font-bold font-inter'>Jonathan Vallem</h4>
                        <p className=" text-[#595959] text-base font-normal font-inter">New york, USA</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className=' bg-white flex flex-col items-center gap-12 rounded-2xl shadow-custom4 p-10'>
                    <p className=' text-[#636571] text-2xl text-center font-light 
                    italic font-poppins'>Lorem ipsum dolor sit amet, consectetuer
                      adipiscing elit. Aenean commodo ligula eget
                      dolor. Aenean massa.</p>
                    <div className="profile flex justify-center items-start gap-6">
                      <div className="profile-picture">
                        <img src={ProfileImg1} />
                      </div>
                      <div>
                        <h4 className=' text-[#595959] text-2xl font-bold font-inter'>Jonathan Vallem</h4>
                        <p className=" text-[#595959] text-base font-normal font-inter">New york, USA</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className=' bg-white flex flex-col items-center gap-12 rounded-2xl shadow-custom4 p-10'>
                    <p className=' text-[#636571] text-2xl text-center font-light 
                    italic font-poppins'>Lorem ipsum dolor sit amet, consectetuer
                      adipiscing elit. Aenean commodo ligula eget
                      dolor. Aenean massa.</p>
                    <div className="profile flex justify-center items-start gap-6">
                      <div className="profile-picture">
                        <img src={ProfileImg1} />
                      </div>
                      <div>
                        <h4 className=' text-[#595959] text-2xl font-bold font-inter'>Jonathan Vallem</h4>
                        <p className=" text-[#595959] text-base font-normal font-inter">New york, USA</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            <div className=' flex gap-3 pt-20'>
              <BsArrowLeft onClick={() => swiperRef3.current?.slidePrev()} fontSize={30} className=' cursor-pointer hover:text-[#95C22B]' />
              <BsArrowRight onClick={() => swiperRef3.current?.slideNext()} fontSize={30} className=' cursor-pointer hover:text-[#95C22B]' />
            </div>
            <div className=' absolute z-10 left-[12%] mt-48'>
            <div className=' relative flex justify-center items-center'>
              <img src={ProfileImg1} alt="" className=' absolute z-10 left-[0%] bottom-[25%]' />
              <div className='relative z-0 w-[510px] h-[510px] flex justify-center items-center border-[1px] border-[#D7D7D7] rounded-full'>
                <img src={ProfileImg1} alt="" className=' absolute z-10 left-[25%] bottom-[18%]' />
                <img src={ProfileImg1} alt="" className=' absolute z-10 left-[18%] top-[25%]' />
                <div className='relative w-[350px] h-[350px] flex justify-center items-center  border-[1px] border-[#D7D7D7] rounded-full'>
                  <div className='w-[200px] h-[200px] flex justify-center items-center border-[1px] border-[#D7D7D7] rounded-full'></div>
                </div>
              </div>
            </div>
          </div>

          <div className=' absolute right-[12%] mt-48'>
            <div className=' relative flex justify-center items-center'>
              <img src={ProfileImg1} alt="" className=' absolute z-10 right-[3%] top-[18%]' />
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

        <section className=' bg-[#95C22B] flex justify-center items-center rounded-3xl'>
          <div className=' flex items-start px-5 pt-16 max-md:pb-16'>
            <div className=' max-md:hidden'>
              <img src={TeethImg} alt="" className='bg-transparent opacity-[0.1]' />
            </div>
            <div className='max-w-[550px] flex flex-col items-center'>
              <h2 className="text-[#313131] text-[32px] text-center font-semibold font-poppins leading-[48px] mb-8">Don’t wait <span className='text-[#FFFFFF]'>and make an appointment today</span></h2>
              <button className='bg-[#FFFFFF] text-[#95C22B] text-xl font-semibold font-poppins rounded-2xl px-5 py-3'>Book Appointment</button>
            </div>
          </div>
        </section>
        <section>
          <h2 className="text-[#313131] text-[32px] text-center font-semibold font-poppins pt-[70px]">Read top <span className='text-[#95C22B]'>articles</span> from experts</h2>
          <div className=' flex justify-center items-center gap-10 flex-wrap my-10'>
            <Card hidden='hidden' />
          </div>
        </section>
      </main>
    </Layout>
  )
}

export default Home
