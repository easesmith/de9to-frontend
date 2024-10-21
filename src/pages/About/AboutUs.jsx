import Layout from '@/component/Layout/Layout'
import React from 'react'
import DestistSignupImg from '../../assets/dentist 1.png'
import DentalConsultationImg from '../../assets/checklist 1.png'
import DestistCampsImg from '../../assets/dental-clinic (1) 1.png'
import PinCodersCoveredImg from '../../assets/maps.png'
import HealthWebinarImg from '../../assets/image 158.png'
import OurJourneyImg from '../../assets/stomatolog-professioanl-teeth-clinic-smiling-wearing-uniform-looking-camera-dentist-doctor-discussing-with-mother-child-about-teeth-treatment.png'
import OurMissionImg from '../../assets/low-angle-orthodontist-starting-procedure.png'
import CardImg from '../../assets/authenticity 1.png'
import TeamMemberOne from '../../assets/WhatsApp-Image-2021-07-30-at-6.20.59-PM.png.png'
import TeamMemberTwo from '../../assets/yash-1.png.png'
import TeamMemberThree from '../../assets/mohit-1.png.png'
import HappyDentistImg from '../../assets/happy-dentists-with-patient 1.png'
import { MangementInfo, OurTeamMember, PrevLink } from '@/component/MiniCompo/MiniCompo'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/pagination';
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Textarea } from '@/components/ui/textarea'
import { z } from 'zod'
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
    return (
        <Layout>
            <main className=' max-w-[1240px] mx-auto flex flex-col gap-[60px] mb-12 mt-4'>
                <PrevLink page='About us' />
                <section className=''>
                    <div className="min-h-[365px] rounded-3xl flex justify-center items-center">
                        <div className='w-[400px]'>
                            <h1 className='text-[#95C22B] text-[64px] font-bold font-poppins leading-[70px] mb-3'>Your Smile<span className='text-[#717171]'>, Our Mission</span></h1>
                            <p className='text-[#717171] text-xl font-normal font-poppins'>Dedicated Dental Care You Can Trust</p>
                        </div>
                        <img src={HappyDentistImg} alt="happy-dentist-mg" />
                    </div>
                    <div className="rounded-xl bg-[#95C22B]">
                        <div className='min-h-[228px] flex justify-between items-center gap-9 px-10 text-[#FFFFFF]'>
                            <MangementInfo img={DestistSignupImg} number="150+" title="Dentist Signups" />
                            <MangementInfo img={DentalConsultationImg} number="10K+" title="Dental Consultations" />
                            <MangementInfo img={DestistCampsImg} number="150+" title="Dental Camps" />
                            <MangementInfo img={PinCodersCoveredImg} number="75+" title="Pin Codes Covered" />
                            <MangementInfo img={HealthWebinarImg} number="75+" title="Health Webinars" />
                        </div>
                    </div>
                </section>
                <section className='flex justify-between items-center gap-6 h-[388px] w-full'>
                    <div className="w-2/3 flex flex-col gap-4">
                        <h3 className='text-[#717171] text-3xl font-semibold font-inter'>Our Journey</h3>
                        <p className='text-[#5C5C5C] text-2xl font-normal font-inter'>De9to – Your Oral Health Partner</p>
                        <p className='text-[#5C5C5C] text-2xl font-normal font-inter'>India faces a dental health crisis—cavities, oral cancers, and limited access to care affect millions. At De9to, we’re on a mission to change that. Founded in 2020, we’re shifting the focus from treatment to prevention, making regular dental check-ups easy and accessible.</p>
                        <p className='text-[#5C5C5C] text-2xl font-normal font-inter'>Our platform connects you with certified dentists for hassle-free appointments and free consultations. We also lead awareness campaigns through dental camps and social media.</p>
                        <p className='text-[#5C5C5C] text-2xl font-normal font-inter'>Join De9to and let’s make healthier smiles a reality for everyone in India.</p>
                    </div>
                    <div className="">
                        <img src={OurJourneyImg} alt="" />
                    </div>
                </section>
                <section className='flex justify-start items-center gap-6 min-h-[384px] w-full'>
                    <div className="">
                        <img src={OurMissionImg} alt="" />
                    </div>
                    <div className=" w-2/3 flex flex-col gap-4">
                        <h3 className='text-[#717171] text-3xl font-semibold font-inter'>Our Mission & Vision</h3>
                        <p className='text-[#5C5C5C] text-2xl font-normal font-inter'>At De9to, our vision is to revolutionize dental care in India by shifting the focus from treatment to prevention. We align with the WHO's mission to prioritize regular dental check-ups, and we aim to be the leading platform that connects patients with trusted dentists, making preventive dentistry accessible to all.</p>
                        <p className='text-[#5C5C5C] text-2xl font-normal font-inter'>Our mission at De9to is to make quality dental care accessible and affordable for everyone. By 2025, we aim to onboard over 5,000 dental clinics and serve more than 100,000 patients, ensuring that everyone has access to the best in oral health.</p>
                    </div>
                </section>
                {/* <section>
                    <h3 className='text-[#717171] text-3xl font-semibold font-inter mb-4'>Our Values</h3>
                    <p className='text-[#5C5C5C] text-2xl font-normal font-inter mb-10'>At De9to, we are deeply committed to upholding the highest standards in every aspect of our work. Here’s what drives us:</p>
                    <div className="cards flex flex-col gap-10">
                        <div className=' flex flex-col items-center border-[1px] border-[#E0E0E0] py-5 rounded-[14px] shadow-custom2 w-full'>
                            <img src={CardImg} alt="" />
                            <div className=' flex flex-col gap-1 py-[5px] px-5'>
                                <h4 className='text-[#95C22B] text-xl text-center font-bold font-inter'>Data Privacy & Security</h4>
                                <p className='text-[#717171] text-sm text-center font-medium font-inter'>Your trust is our top priority. We are ISO/IEC 27001:2013 and ISO 9001:2015 certified, ensuring that your data is secure and never shared without consent.</p>
                            </div>
                        </div>
                        <div className='w-full grid grid-cols-3 gap-10'>
                            <div className=' flex flex-col items-center border-[1px] border-[#E0E0E0] p-5 rounded-[14px] shadow-custom2'>
                                <img src={CardImg} alt="" />
                                <div className=' flex flex-col gap-1 py-[5px] px-5'>
                                    <h4 className='text-[#95C22B] text-xl text-center font-bold font-inter'>Data Privacy & Security</h4>
                                    <p className='text-[#717171] text-sm text-center font-medium font-inter'>Your trust is our top priority. We are ISO/IEC 27001:2013 and ISO 9001:2015 certified, ensuring that your data is secure and never shared without consent.</p>
                                </div>
                            </div>
                            <div className=' flex flex-col items-center border-[1px] border-[#E0E0E0] p-5 rounded-[14px] shadow-custom2'>
                                <img src={CardImg} alt="" />
                                <div className=' flex flex-col gap-1 py-[5px] px-5'>
                                    <h4 className='text-[#95C22B] text-xl text-center font-bold font-inter'>Data Privacy & Security</h4>
                                    <p className='text-[#717171] text-sm text-center font-medium font-inter'>Your trust is our top priority. We are ISO/IEC 27001:2013 and ISO 9001:2015 certified, ensuring that your data is secure and never shared without consent.</p>
                                </div>
                            </div>
                            <div className=' flex flex-col items-center border-[1px] border-[#E0E0E0] p-5 rounded-[14px] shadow-custom2'>
                                <img src={CardImg} alt="" />
                                <div className=' flex flex-col gap-1 py-[5px] px-5'>
                                    <h4 className='text-[#95C22B] text-xl text-center font-bold font-inter'>Data Privacy & Security</h4>
                                    <p className='text-[#717171] text-sm text-center font-medium font-inter'>Your trust is our top priority. We are ISO/IEC 27001:2013 and ISO 9001:2015 certified, ensuring that your data is secure and never shared without consent.</p>
                                </div>
                            </div>
                        </div>
                        <div className='w-full grid grid-cols-3 gap-10'>
                            <div className=' flex flex-col items-center border-[1px] border-[#E0E0E0] p-5 rounded-[14px] shadow-custom2'>
                                <img src={CardImg} alt="" />
                                <div className=' flex flex-col gap-1 py-[5px] px-5'>
                                    <h4 className='text-[#95C22B] text-xl text-center font-bold font-inter'>Data Privacy & Security</h4>
                                    <p className='text-[#717171] text-sm text-center font-medium font-inter'>Your trust is our top priority. We are ISO/IEC 27001:2013 and ISO 9001:2015 certified, ensuring that your data is secure and never shared without consent.</p>
                                </div>
                            </div>
                            <div className=' flex flex-col items-center border-[1px] border-[#E0E0E0] p-5 rounded-[14px] shadow-custom2'>
                                <img src={CardImg} alt="" />
                                <div className=' flex flex-col gap-1 py-[5px] px-5'>
                                    <h4 className='text-[#95C22B] text-xl text-center font-bold font-inter'>Data Privacy & Security</h4>
                                    <p className='text-[#717171] text-sm text-center font-medium font-inter'>Your trust is our top priority. We are ISO/IEC 27001:2013 and ISO 9001:2015 certified, ensuring that your data is secure and never shared without consent.</p>
                                </div>
                            </div>
                            <div className=' flex flex-col items-center border-[1px] border-[#E0E0E0] p-5 rounded-[14px] shadow-custom2'>
                                <img src={CardImg} alt="" />
                                <div className=' flex flex-col gap-1 py-[5px] px-5'>
                                    <h4 className='text-[#95C22B] text-xl text-center font-bold font-inter'>Data Privacy & Security</h4>
                                    <p className='text-[#717171] text-sm text-center font-medium font-inter'>Your trust is our top priority. We are ISO/IEC 27001:2013 and ISO 9001:2015 certified, ensuring that your data is secure and never shared without consent.</p>
                                </div>
                            </div>
                        </div>
                        <div className='w-full grid grid-cols-3 gap-10'>
                            <div className=' flex flex-col items-center border-[1px] border-[#E0E0E0] p-5 rounded-[14px] shadow-custom2'>
                                <img src={CardImg} alt="" />
                                <div className=' flex flex-col gap-1 py-[5px] px-5'>
                                    <h4 className='text-[#95C22B] text-xl text-center font-bold font-inter'>Data Privacy & Security</h4>
                                    <p className='text-[#717171] text-sm text-center font-medium font-inter'>Your trust is our top priority. We are ISO/IEC 27001:2013 and ISO 9001:2015 certified, ensuring that your data is secure and never shared without consent.</p>
                                </div>
                            </div>
                            <div className=' flex flex-col items-center border-[1px] border-[#E0E0E0] p-5 rounded-[14px] shadow-custom2'>
                                <img src={CardImg} alt="" />
                                <div className=' flex flex-col gap-1 py-[5px] px-5'>
                                    <h4 className='text-[#95C22B] text-xl text-center font-bold font-inter'>Data Privacy & Security</h4>
                                    <p className='text-[#717171] text-sm text-center font-medium font-inter'>Your trust is our top priority. We are ISO/IEC 27001:2013 and ISO 9001:2015 certified, ensuring that your data is secure and never shared without consent.</p>
                                </div>
                            </div>
                            <div className=' flex flex-col items-center border-[1px] border-[#E0E0E0] p-5 rounded-[14px] shadow-custom2'>
                                <img src={CardImg} alt="" />
                                <div className=' flex flex-col gap-1 py-[5px] px-5'>
                                    <h4 className='text-[#95C22B] text-xl text-center font-bold font-inter'>Data Privacy & Security</h4>
                                    <p className='text-[#717171] text-sm text-center font-medium font-inter'>Your trust is our top priority. We are ISO/IEC 27001:2013 and ISO 9001:2015 certified, ensuring that your data is secure and never shared without consent.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}

                <section>
                    <h3 className='text-[#717171] text-3xl font-semibold font-inter mb-4'>Our Values</h3>
                    <p className='text-[#5C5C5C] text-2xl font-normal font-inter mb-10'>At De9to, we are deeply committed to upholding the highest standards in every aspect of our work. Here’s what drives us:</p>
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
                        className="mySwiper about-us"
                    >
                        <SwiperSlide className='m-2'>
                            <div className=' flex flex-col items-center border-[1px] border-[#E0E0E0] py-5 rounded-[14px]  shadow-custom2'>
                                <img src={CardImg} alt="" />
                                <div className=' flex flex-col gap-1 py-[5px] px-5'>
                                    <h4 className='text-[#95C22B] text-xl text-center font-bold font-inter'>Data Privacy & Security</h4>
                                    <p className='text-[#717171] text-sm text-center font-medium font-inter'>Your trust is our top priority. We are ISO/IEC 27001:2013 and ISO 9001:2015 certified, ensuring that your data is secure and never shared without consent.</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='m-2'>
                            <div className=' flex flex-col items-center border-[1px] border-[#E0E0E0] py-5 rounded-[14px]  shadow-custom2'>
                                <img src={CardImg} alt="" />
                                <div className=' flex flex-col gap-1 py-[5px] px-5'>
                                    <h4 className='text-[#95C22B] text-xl text-center font-bold font-inter'>Data Privacy & Security</h4>
                                    <p className='text-[#717171] text-sm text-center font-medium font-inter'>Your trust is our top priority. We are ISO/IEC 27001:2013 and ISO 9001:2015 certified, ensuring that your data is secure and never shared without consent.</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='m-2'>
                            <div className=' flex flex-col items-center border-[1px] border-[#E0E0E0] py-5 rounded-[14px]  shadow-custom2'>
                                <img src={CardImg} alt="" />
                                <div className=' flex flex-col gap-1 py-[5px] px-5'>
                                    <h4 className='text-[#95C22B] text-xl text-center font-bold font-inter'>Data Privacy & Security</h4>
                                    <p className='text-[#717171] text-sm text-center font-medium font-inter'>Your trust is our top priority. We are ISO/IEC 27001:2013 and ISO 9001:2015 certified, ensuring that your data is secure and never shared without consent.</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='m-2'>
                            <div className=' flex flex-col items-center border-[1px] border-[#E0E0E0] py-5 rounded-[14px]  shadow-custom2'>
                                <img src={CardImg} alt="" />
                                <div className=' flex flex-col gap-1 py-[5px] px-5'>
                                    <h4 className='text-[#95C22B] text-xl text-center font-bold font-inter'>Data Privacy & Security</h4>
                                    <p className='text-[#717171] text-sm text-center font-medium font-inter'>Your trust is our top priority. We are ISO/IEC 27001:2013 and ISO 9001:2015 certified, ensuring that your data is secure and never shared without consent.</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </section>
                <section className='h-[455px]'>
                    <h3 className='text-[#717171] text-3xl font-semibold font-inter mb-4'>Our Team</h3>
                    <div className='flex justify-between items-center gap-10'>
                        <OurTeamMember img={TeamMemberOne} name="Dr. Gajendra Yadav" profile="Director and COO" />
                        <OurTeamMember img={TeamMemberTwo} name="Yash Bansal" profile="Founder and CEO" />
                        <OurTeamMember img={TeamMemberThree} name="Mohit kapoor" profile="Co-Founder and CFO" />
                    </div>
                </section>
                <div className='p-5 bg-[#95C22B] rounded-lg'>
                    <h2 className='font-inter font-semibold text-2xl text-[#FFFFFFE5]'>Feedback to the CEO</h2>
                    <p className="font-inter text-white">Your every words matter. Please share your feedback to improve the overall experience of <span className='font-bold'>De9to</span></p>
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
                                                <div className='relative h-[100px] w-full flex gap-2 items-center bg-white p-5 rounded-lg'>
                                                    <Textarea placeholder="Write your message" className="placeholder:text-[#717171] focus-visible:outline-0 focus-visible:ring-ring focus-visible:ring-offset-0 ring-0 border-none p-0 h-full rounded-none resize-none" {...field} />
                                                    <Button type="submit" className="bg-[#95C22B] flex max-w-[200px] justify-center w-full h-14 text-lg">
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
            </main>
        </Layout>
    )
}

export default AboutUs
