import Layout from '@/component/Layout/Layout'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Textarea } from '@/components/ui/textarea'
import useGetApiReq from '@/hooks/useGetApiReq'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import 'swiper/css'
import 'swiper/css/pagination'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { z } from 'zod'
import CardImg from '../../assets/authenticity 1.png'
import AboutUsHero from './AboutUsHero'
import OurJourneySection from './OurJourneySection'
import OurMissionAndVisionSection from './OurMissionAndVisionSection'
import OurTeamSection from './OurTeamSection'
// import './styles.css';


const AboutUs = () => {
    const form = useForm({
        resolver: zodResolver(z.object({

            feedback: z.string().min(1, "Feedback is required")
        })),
        defaultValues: {
            feedback: "",
        },
    });

    const { reset, handleSubmit, getValues, watch } = form;

    const onSubmit = (data) => {
        console.log("Data:", data);
    };

    const [seoData, setSeoData] = useState({
        title: "",
        description: "",
        focusedKeywords: "",
    });

    const { res: res1, fetchData: fetchData1 } = useGetApiReq();

    const getSeo = () => {
        fetchData1(`/patient/get-seo?pageName=about-us`);
    }

    useEffect(() => {
        getSeo();
    }, [])

    useEffect(() => {
        if (res1?.status === 200 || res1?.status === 201) {
            console.log("get seo api res: ", res1)
            const { seoTitle, focusedKeywords, description } = res1?.data?.seo;

            setSeoData({
                title: seoTitle,
                description: description,
                focusedKeywords: focusedKeywords,
            })
        }
    }, [res1])

    return (
        <Layout>
            <Helmet>
                <title>{seoData.title}</title>
                <meta name="description" content={seoData.description} />
                <meta name="keywords" content={seoData.focusedKeywords} />
            </Helmet>

            <main className=' max-w-[1240px] mx-auto flex flex-col gap-12 max-[425px]:gap-5 mb-12 mt-4'>
                <AboutUsHero />

                <OurJourneySection />

                <OurMissionAndVisionSection />

                <section className=''>
                    <h3 className='text-[#717171] text-3xl max-lg:text-[28px] font-semibold font-inter mb-2 max-sm:text-2xl px-5'>Our Values</h3>
                    <p className='text-[#5C5C5C] text-[17px] font-normal font-inter mb-10 max-md:text-base px-5'>At De9to, we are deeply committed to upholding the highest standards in every aspect of our work. Here’s what drives us:</p>
                    <Swiper
                        loop={true}
                        slidesPerView={3}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination, Autoplay]}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            1154: {
                                slidesPerView: 3,
                            },
                        }}
                        className="mySwiper about-us max-w-[940px] h-[380px] p-5"
                    >
                        <SwiperSlide>
                            <div className='h-[300px] flex flex-col justify-center items-center border-[1px] border-[#E0E0E0] py-5 rounded-[14px] shadow-custom2'>
                                <img src={CardImg} alt="" />
                                <div className=' flex flex-col gap-1 py-[5px] px-5'>
                                    <h4 className='text-[#95C22B] text-xl text-center font-bold font-inter'>Data Privacy & Security</h4>
                                    <p className='text-[#717171] text-sm text-center font-medium font-inter'>Your trust is our top priority. We are ISO/IEC 27001:2013 and ISO 9001:2015 certified, ensuring that your data is secure and never shared without consent.</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='h-[300px] flex flex-col justify-center items-center border-[1px] border-[#E0E0E0] py-5 rounded-[14px]  shadow-custom2'>
                                <img src={CardImg} alt="" />
                                <div className=' flex flex-col gap-1 py-[5px] px-5'>
                                    <h4 className='text-[#95C22B] text-xl text-center font-bold font-inter'>Data Privacy & Security</h4>
                                    <p className='text-[#717171] text-sm text-center font-medium font-inter'>Your trust is our top priority. We are ISO/IEC 27001:2013 and ISO 9001:2015 certified, ensuring that your data is secure and never shared without consent.</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='h-[300px] flex flex-col justify-center items-center border-[1px] border-[#E0E0E0] py-5 rounded-[14px]  shadow-custom2'>
                                <img src={CardImg} alt="" />
                                <div className=' flex flex-col gap-1 py-[5px] px-5'>
                                    <h4 className='text-[#95C22B] text-xl text-center font-bold font-inter'>Data Privacy & Security</h4>
                                    <p className='text-[#717171] text-sm text-center font-medium font-inter'>Your trust is our top priority. We are ISO/IEC 27001:2013 and ISO 9001:2015 certified, ensuring that your data is secure and never shared without consent.</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='h-[300px] flex flex-col justify-center items-center border-[1px] border-[#E0E0E0] py-5 rounded-[14px]  shadow-custom2'>
                                <img src={CardImg} alt="" />
                                <div className=' flex flex-col gap-1 py-[5px] px-5'>
                                    <h4 className='text-[#95C22B] text-xl text-center font-bold font-inter'>Data Privacy & Security</h4>
                                    <p className='text-[#717171] text-sm text-center font-medium font-inter'>Your trust is our top priority. We are ISO/IEC 27001:2013 and ISO 9001:2015 certified, ensuring that your data is secure and never shared without consent.</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </section>
                
                <OurTeamSection />

                <div>
                    <div className='p-5 bg-[#95C22B] rounded-lg max-sm:rounded-none '>
                        <h2 className='font-inter font-semibold text-2xl max-sm:text-xl max-sm:mb-3 text-[#FFFFFFE5]'>Feedback to the CEO</h2>
                        <p className="font-inter text-white max-sm:text-sm font-normal">Your every words matter. Please share your feedback to improve the overall experience of <span className='font-bold'>De9to</span></p>
                        <Form {...form}>
                            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-start gap-4 mt-2 w-full'>
                                {/* Clinic Selection */}
                                <div className="w-full">
                                    <FormField
                                        control={form.control}
                                        name="feedback"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="font-inter text-base text-[#1A1A1A] font-normal"></FormLabel>
                                                <FormControl>
                                                    <div className='relative w-full flex max-sm:flex-col gap-2 items-center bg-white p-5 rounded-lg'>
                                                        <Textarea placeholder="Write your message" className="placeholder:text-[#717171] max-sm:text-base focus-visible:outline-0 focus-visible:ring-ring focus-visible:ring-offset-0 ring-0 border-none p-0 h-full rounded-none resize-none" {...field} />
                                                        <Button type="submit" className="bg-[#95C22B] flex w-[200px] justify-center h-14 text-xl rounded-[10px] max-sm:w-full max-sm:text-base max-sm:h-12">
                                                            Share Feedback
                                                        </Button>
                                                    </div>
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                            </form>
                        </Form>
                    </div>
                </div>
            </main>
        </Layout>
    )
}

export default AboutUs
