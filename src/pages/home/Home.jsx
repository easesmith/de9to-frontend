import ProfileImg2 from "@/assets/Image-100.png";
import TeethImg from "@/assets/_Compound Path_.png";
import ProfileImg1 from "@/assets/dniedeibeib.png";
import Card, { DentalTeamCard } from "@/component/Card/Card";
import Layout from "@/component/Layout/Layout";
import ImageSkeleton from "@/components/ImageSkeleton";
import TreatementCompo from "@/components/TreatementCompo";
import useGetApiReq from "@/hooks/useGetApiReq";
import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import HeroSection from "./HeroSection";
import WhatWeHaveAchieved from "./WhatWeHaveAchieved";
import Marquee from "react-fast-marquee";

const Home = () => {
  const navigate = useNavigate();
  const swiperRef3 = useRef(null);
  const [testimonials, setTestimonials] = useState([]);

  const { res, fetchData } = useGetApiReq();

  const getTestimonialData = async () => {
    fetchData(`/patient/get-testimonials`);
  };

  useEffect(() => {
    getTestimonialData();
  }, []);

  useEffect(() => {
    if (res?.status === 200 || res?.status === 201) {
      console.log(res);
      setTestimonials(res.data.testimonials);
    }
  }, [res]);

  const [seoData, setSeoData] = useState({
    title: "",
    description: "",
    focusedKeywords: "",
  });

  const { res: res1, fetchData: fetchData1 } = useGetApiReq();

  const getSeo = () => {
    fetchData1(`/patient/get-seo?pageName=home-page`);
  };

  useEffect(() => {
    getSeo();
  }, []);

  useEffect(() => {
    if (res1?.status === 200 || res1?.status === 201) {
      console.log("get seo api res: ", res1);
      const { seoTitle, focusedKeywords, description } = res1?.data?.seo;

      setSeoData({
        title: seoTitle,
        description: description,
        focusedKeywords: focusedKeywords,
      });
    }
  }, [res1]);

  return (
    <Layout>
      <main>
        <Helmet>
          <title>{seoData.title}</title>
          <meta name="description" content={seoData.description} />
          <meta name="keywords" content={seoData.focusedKeywords} />
        </Helmet>

        <HeroSection />

        <Marquee
          className="bg-[#F6F6F6] overflow-hidden py-4"
          autoFill
          gradient={false}
          speed={50}
        >
          {Array.from({ length: 10 }).map((_, index) => (
            <span
              key={index}
              className="text-[#5A5A5A] text-2xl px-5 max-[700px]:text-xl max-[500px]:text-sm font-semibold font-poppins whitespace-nowrap"
            >
              Pay via <span className="font-bold text-black">De9to</span> and
              get Upto
              <span className="font-bold text-black"> 20% Discount</span>
            </span>
          ))}
        </Marquee>

        <WhatWeHaveAchieved />

        <DentalTeamCard />
        <TreatementCompo />
        <section>
          <div className=" flex  flex-col justify-center items-center gap-8 pt-16 max-[900px]:pb-5 pb-40 max-w-[1240px] px-5 mx-auto">
            <h2 className="max-w-[350px] text-[#000000] text-[32px] max-[500px]:text-xl text-center font-semibold font-poppins">
              The Honest <span className="text-[#95C22B]">Review</span> From Our
              Client
            </h2>
            <p className="max-w-[425px] text-[#3F3F3F] text-xl max-[500px]:text-base text-center font-normal font-poppins">
              See what our patients are saying about their experiences at our
              clinic.
            </p>
            <div className="flex justify-center items-center z-20">
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
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }}
                modules={[Pagination, Navigation, Autoplay]}
                onSwiper={(swiper) => {
                  swiperRef3.current = swiper;
                }}
                className="mySwiper flex justify-center dental-camp max-w-[600px] max-[620px]:max-w-[320px] w-full gap-5"
              >
                {testimonials.length > 0 &&
                  testimonials.map((testimonial, index) => {
                    return (
                      <SwiperSlide key={index}>
                        <div className=" bg-white flex flex-col items-center gap-8 rounded-2xl shadow-custom5 p-10 px-0 h-[300px] max-lg:h-[270px] mb-7">
                          <p
                            className=" text-[#636571] text-2xl max-w-[500px] break-words whitespace-break-spaces max-lg:text-lg max-sm:text-base text-center font-light 
                    italic font-poppins"
                          >
                            {testimonial?.comment}
                          </p>
                          <div className="profile flex justify-center items-start gap-4">
                            <div className="profile-picture">
                              <ImageSkeleton
                                src={
                                  testimonial?.image
                                    ? testimonial?.image
                                    : "https://wallpapers.com/images/high/placeholder-profile-icon-20tehfawxt5eihco.png"
                                }
                                imgClassName={"w-12 h-12 rounded-full"}
                                skeletonClassName={"w-12 h-12 rounded-full"}
                              />
                            </div>
                            <div>
                              <h4 className=" text-[#595959] text-2xl max-lg:text-lg max-sm:text-base font-bold font-inter">
                                {testimonial?.name}
                              </h4>
                              <p className=" text-[#595959] text-base max-lg:text-sm max-sm:text-[10px] font-normal font-inter">
                                {testimonial?.location}
                              </p>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    );
                  })}
              </Swiper>
            </div>
            <div className=" flex gap-3 pt-20 max-[900px]:pt-5">
              <BsArrowLeft
                onClick={() => swiperRef3.current?.slidePrev()}
                fontSize={30}
                className=" cursor-pointer text-[#909090] hover:text-[#95C22B]"
              />
              <BsArrowRight
                onClick={() => swiperRef3.current?.slideNext()}
                fontSize={30}
                className=" cursor-pointer text-[#909090] hover:text-[#95C22B]"
              />
            </div>
            <div className=" absolute z-10 left-[12%] mt-48 max-[1200px]:hidden">
              <div className=" relative flex justify-center items-center">
                <img
                  src={ProfileImg1}
                  alt=""
                  className=" absolute z-10 -left-[4%] bottom-[35%]"
                />
                <svg
                  className="absolute top-[72%] right-[85%]"
                  width="60"
                  height="60"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="100"
                    height="100"
                    rx="50"
                    fill="url(#paint0_linear_718_1564)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_718_1564"
                      x1="50"
                      y1="0"
                      x2="50"
                      y2="100"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="white" />
                      <stop offset="1" stop-color="#F4F9EA" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="relative z-0 w-[510px] h-[510px] flex justify-center items-center border-[1px] border-[#D7D7D7] rounded-full">
                  <img
                    src={ProfileImg1}
                    alt=""
                    className=" absolute z-10 left-[25%] bottom-[18%]"
                  />
                  <img
                    src={ProfileImg2}
                    alt=""
                    className=" absolute z-10 left-[18%] top-[25%]"
                  />
                  <svg
                    className="absolute bottom-[82%] left-[47%]"
                    width="100"
                    height="100"
                    viewBox="0 0 110 110"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width="110"
                      height="110"
                      rx="55"
                      fill="url(#paint0_linear_718_1563)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_718_1563"
                        x1="55"
                        y1="0"
                        x2="55"
                        y2="110"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="white" />
                        <stop offset="1" stop-color="#F4F9EA" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="relative w-[350px] h-[350px] flex justify-center items-center  border-[1px] border-[#D7D7D7] rounded-full">
                    <div className="w-[200px] h-[200px] flex justify-center items-center border-[1px] border-[#D7D7D7] rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" absolute right-[12%] mt-48 max-[1200px]:hidden">
              <div className=" relative flex justify-center items-center">
                <img
                  src={ProfileImg2}
                  alt=""
                  className=" absolute z-10 right-[3%] top-[18%]"
                />
                <img
                  src={ProfileImg1}
                  alt=""
                  className=" absolute z-10 right-[3%] bottom-[18%]"
                />
                <svg
                  className="absolute top-[55%] left-[92%]"
                  width="60"
                  height="60"
                  viewBox="0 0 110 110"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="110"
                    height="110"
                    rx="55"
                    fill="url(#paint0_linear_718_1563)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_718_1563"
                      x1="55"
                      y1="0"
                      x2="55"
                      y2="110"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="white" />
                      <stop offset="1" stop-color="#F4F9EA" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="relative w-[510px] h-[510px] flex justify-center items-center border-[1px] border-[#D7D7D7] rounded-full">
                  <div className="relative w-[350px] h-[350px] flex justify-center items-center  border-[1px] border-[#D7D7D7] rounded-full">
                    <svg
                      className="absolute bottom-[90%] left-[28%]"
                      width="100"
                      height="100"
                      viewBox="0 0 110 110"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        width="110"
                        height="110"
                        rx="55"
                        fill="url(#paint0_linear_718_1563)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_718_1563"
                          x1="55"
                          y1="0"
                          x2="55"
                          y2="110"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="white" />
                          <stop offset="1" stop-color="#F4F9EA" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <img
                      src={ProfileImg1}
                      alt=""
                      className=" absolute right-[16%] top-[42%]"
                    />
                    <svg
                      className="absolute top-[60%]"
                      width="100"
                      height="100"
                      viewBox="0 0 110 110"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        width="110"
                        height="110"
                        rx="55"
                        fill="url(#paint0_linear_718_1563)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_718_1563"
                          x1="55"
                          y1="0"
                          x2="55"
                          y2="110"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="white" />
                          <stop offset="1" stop-color="#F4F9EA" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="w-[200px] h-[200px] flex justify-center items-center border-[1px] border-[#D7D7D7] rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="max-[500px]:px-4 h-fit -mt-60 max-md:mt-0">
          <div className=" max-md:hidden">
            <img
              src={TeethImg}
              alt=""
              className="bg-transparent opacity-[0.1] relative top-[308px] left-[15%]"
            />
          </div>
          <section className=" bg-[#95C22B] flex justify-center items-center rounded-3xl max-[500px]:rounded-lg">
            <div className=" flex items-start px-5 py-16 max-md:pb-16 max-[500px]:py-5">
              <div className="max-w-[550px] flex flex-col items-center">
                <h2 className="text-[#313131] text-[32px] max-[700px]:text-xl text-center font-semibold font-poppins leading-[48px] mb-8">
                  Don’t wait{" "}
                  <span className="text-[#FFFFFF]">
                    and make an appointment today
                  </span>
                </h2>
                <button
                  onClick={() => navigate("/our-dentist")}
                  className="bg-[#FFFFFF] text-[#95C22B] text-xl max-[500px]:w-full max-[700px]:text-base font-semibold font-poppins rounded-2xl max-[500px]:rounded-lg px-5 py-3 hover:bg-[#f9f9f9] active:scale-105 hover:scale-95 transition-all duration-200"
                >
                  Book Appointment
                </button>
              </div>
            </div>
          </section>
        </div>
        <section>
          <h2 className="text-[#313131] text-[32px] max-[500px]:text-xl text-center font-semibold font-poppins pt-[70px]">
            Read top <span className="text-[#95C22B]">articles</span> from
            experts
          </h2>
          <div className="my-10">
            <Card hidden="hidden" />
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Home;
