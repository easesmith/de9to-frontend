import React from 'react'
import Layout from '@/component/Layout/Layout'
import PreventingImg from '../../assets/noun-toothache-6895920 3.png'
import GumDiseaseImg from '../../assets/noun-tooth-7037140 1.png'
import OverallImg from '../../assets/noun-tooth-7037172 1.png'
import BoostingImg from '../../assets/noun-tooth-7037163 1.png'
import OurCollaboratorImg1 from '../../assets/image 151.png'
import OurCollaboratorImg2 from '../../assets/image 153.png'
import OurCollaboratorImg3 from '../../assets/image 155.png'
import OurCollaboratorImg4 from '../../assets/image 157.png'
import ProfessionalImg1 from '../../assets/Ellipse 3.png'
import ProfessionalImg2 from '../../assets/Ellipse 4.png'
import ProfessionalImg3 from '../../assets/Ellipse 5.png'
import ProfessionalImg4 from '../../assets/Ellipse 6.png'
import ProfessionalImg5 from '../../assets/Ellipse 7.png'
import ProfessionalImg6 from '../../assets/Ellipse 8.png'
import ProfessionalImg7 from '../../assets/Ellipse 9.png'
import RequestDentalImg from '../../assets/codifyformatter__1_-removebg-preview 1.png'
import DestistSignupImg from '../../assets/dentist 1.png'
import DentalConsultationImg from '../../assets/checklist 1.png'
import DestistCampsImg from '../../assets/dental-clinic (1) 1.png'
import PinCodersCoveredImg from '../../assets/maps.png'
import HealthWebinarImg from '../../assets/image 158.png'


import NGOImg1 from '../../assets/image.png'
import ProfileImg from '../../assets/Profile picture.png'
import { HiArrowLongRight } from "react-icons/hi2";
import { Button } from '@/components/ui/button'
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import ReactStars from 'react-stars'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { requestDentalCampSchema } from '@/schema/formSchema'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { MangementInfo } from '@/component/MiniCompo/MiniCompo'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

const DentalCamp = () => {

  const form = useForm({
    resolver: zodResolver(requestDentalCampSchema),
    defaultValues: {
      organiserName: "",
      campType: "",
      emailId: "",
      contactNumber: "",
      campPerferredDate: "",
      campTiming: "",
      location: ""
    }
  })

  const { reset, handleSubmit } = form

  const onSubmit = (data) => {
    console.log(data)
    reset({
      organiserName: "",
      campType: "",
      emailId: "",
      contactNumber: "",
      campPerferredDate: "",
      campTiming: "",
      location: ""
    })
  }

  return (
    <Layout>
      <main className='flex flex-col gap-12'>
        <section className="flex items-end gap-[30px] bg-[#F6F6F6] w-full py-[70px] px-[100px]">
          <div className="left-side w-1/2 flex flex-col gap-10">
            <div className="upper flex flex-col items-start gap-[15px]">
              <span className='text-[#95C22B] text-xl italic font-bold font-inter'>Request</span>
              <h2 className='text-[#000A2D] text-5xl font-bold font-inter '>Request A Dental Camp</h2>
              <p className='text-[#606060] text-xl font-semibold font-roboto'>Feel free to drop a message related to your requirement.Our team will get back to you soon. </p>
            </div>
            <div className="lower">
              <Form {...form}>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-[18px]">
                  <div className='grid grid-cols-2 gap-[30px] w-full'>
                    <FormField
                      control={form.control}
                      name="organiserName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[] text-xl font-medium font-inter mb-4">Organiser's Name <span className='text-[red]'>*</span></FormLabel>
                          <FormControl>
                            <Input placeholder="Enter Organiser's Name" {...field}
                              className="h-[60px] text-[#838383] text-base font-normal font-inter border-[1px] border-[#808080] rounded-[10px] px-5 py-[10px] placeholder:text-[#838383]"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="campType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[] text-xl font-medium font-inter mb-4">Choose Camp Type <span className='text-[red]'>*</span></FormLabel>
                          <FormControl>
                            <Input placeholder="Select Type" {...field}
                              className="h-[60px] text-[#838383] text-base font-normal font-inter border-[1px] border-[#808080] rounded-[10px] px-5 py-[10px] placeholder:text-[#838383]"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className='grid grid-cols-2 gap-[30px] w-full'>
                    <FormField
                      control={form.control}
                      name="emailId"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[] text-xl font-medium font-inter mb-4">Email Id <span className='text-[red]'>*</span></FormLabel>
                          <FormControl>
                            <Input placeholder="Enter email id" {...field}
                              className="h-[60px] text-[#838383] text-base font-normal font-inter border-[1px] border-[#808080] rounded-[10px] px-5 py-[10px] placeholder:text-[#838383]"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="contactNumber"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[] text-xl font-medium font-inter mb-4">Contact Number <span className='text-[red]'>*</span></FormLabel>
                          <FormControl>
                            <Input placeholder="Enter contact number" {...field}
                              className="h-[60px] text-[#838383] text-base font-normal font-inter border-[1px] border-[#808080] rounded-[10px] px-5 py-[10px] placeholder:text-[#838383]"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className='grid grid-cols-2 gap-[30px] w-full'>
                    <FormField
                      control={form.control}
                      name="campPerferredDate"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[] text-xl font-medium font-inter mb-4">Camp Perferred Date <span className='text-[red]'>*</span></FormLabel>
                          <FormControl>
                            <Input placeholder="Select a date" {...field}
                              className="h-[60px] text-[#838383] text-base font-normal font-inter border-[1px] border-[#808080] rounded-[10px] px-5 py-[10px] placeholder:text-[#838383]"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="campTiming"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[] text-xl font-medium font-inter mb-4">Camp Timings <span className='text-[red]'>*</span></FormLabel>
                          <FormControl>
                            <Input placeholder="Select timing" {...field}
                              className="h-[60px] text-[#838383] text-base font-normal font-inter border-[1px] border-[#808080] rounded-[10px] px-5 py-[10px] placeholder:text-[#838383]"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[] text-xl font-medium font-inter mb-4">Location <span className='text-[red]'>*</span></FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your location" {...field}
                            className="h-[60px] text-[#838383] text-base font-normal font-inter border-[1px] border-[#808080] rounded-[10px] px-5 py-[10px] placeholder:text-[#838383]"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button variant='submit' size='submit' className='' type="submit">Submit</Button>
                </form>
              </Form>
            </div>
          </div>
          <div className="right-side relative">
            <div className='w-[214px] h-[87px] rounded-2xl py-3 px-5 bg-[#F4F9EA] shadow-custom3 absolute left-[6%]'>
              <h5 className='text-[#000000] text-center font-normal font-poppins mb-1'>our professionals</h5>
              <div className='flex relative'>
                <img src={ProfessionalImg1} alt="" className='absolute  z-0' />
                <img src={ProfessionalImg2} alt="" className='absolute left-5 z-10' />
                <img src={ProfessionalImg3} alt="" className='absolute left-10 z-20' />
                <img src={ProfessionalImg4} alt="" className='absolute left-[60px] z-30' />
                <img src={ProfessionalImg5} alt="" className='absolute left-20 z-40' />
                <img src={ProfessionalImg6} alt="" className='absolute left-[100px] z-50' />
                <img src={ProfessionalImg7} alt="" className='absolute left-[120px] z-60' />
                <div className='bg-[#95C22B] rounded-full flex justify-center items-center absolute left-[140px] z-70 w-[37px] h-[37px]'>
                  <p className='text-[#FFFFFF] text-sm font-normal font-poppins'>30+</p>
                </div>
              </div>
            </div>
            <img src={RequestDentalImg} alt="" />
          </div>
        </section>
        <section className="min-h-[228px] flex justify-between items-center gap-9 px-[125px] text-[#808080]">
          <MangementInfo img={DestistSignupImg} number="150+" title="Dentist Signups" />
          <MangementInfo img={DentalConsultationImg} number="10K+" title="Dental Consultations" />
          <MangementInfo img={DestistCampsImg} number="150+" title="Dental Camps" />
          <MangementInfo img={PinCodersCoveredImg} number="75+" title="Pin Codes Covered" />
          <MangementInfo img={HealthWebinarImg} number="75+" title="Health Webinars" />
        </section>
        <section className="flex flex-col gap-[30px] bg-[#F6F6F6] w-full py-[70px] px-[125px]">
          <div className="upper flex items-end justify-between gap-10 w-full">
            <div className="left-upper w-[55%] flex flex-col items-start gap-[15px]">
              <span className='text-[#95C22B] text-xl font-bold font-inter'>Our  Best Practices</span>
              <h2 className='text-[#000A2D] text-5xl font-bold font-inter '>What Is Dental Camp?</h2>
              <p className='text-[#606060] text-xl font-semibold font-roboto'>To create awareness and on-spot dental solutions De9to has a portable setup of modern dental equipment which can be installed in areas</p>
            </div>
            <div className="right-upper">
              <Button variant='submit' size='submit'>Book Dental Camp</Button>
            </div>
          </div>
          <div className="lower flex gap-[30px] justify-between">
            <div className="hover:translate-y-2 w-[278px] h-[380px] bg-[#FFFFFF] rounded-[30px] p-5 flex flex-col items-start justify-center gap-5 cursor-pointer">
              <img src={PreventingImg} alt="" />
              <div className='flex flex-col items-start gap-2'>
                <h4 className='text-[#1A1A1A] text-xl font-semibold font-inter '>Preventing Tooth Decay</h4>
                <p className='text-[#667085] text-base font-normal font-inter'>Regular brushing, flossing, and dental check-ups help prevent cavities and tooth decay, ensuring your smile stays healthy and bright.</p>
              </div>
              <HiArrowLongRight className='text-2xl ms-2 mt-2' />
            </div>
            <div className="hover:translate-y-2 w-[278px] h-[380px] bg-[#FFFFFF] rounded-[30px] p-5 flex flex-col items-start justify-center gap-5 cursor-pointer">
              <img src={GumDiseaseImg} alt="" />
              <div className='flex flex-col items-start gap-2'>
                <h4 className='text-[#1A1A1A] text-xl font-semibold font-inter '>Gum Disease Prevention</h4>
                <p className='text-[#667085] text-base font-normal font-inter'>Maintaining good oral hygiene reduces the risk of gum disease, which can lead to tooth loss and other health complications if left untreated.</p>
              </div>
              <HiArrowLongRight className='text-2xl ms-2 mt-2' />
            </div>
            <div className="hover:translate-y-2 w-[278px] h-[380px] bg-[#FFFFFF] rounded-[30px] p-5 flex flex-col items-start justify-center gap-5 cursor-pointer">
              <img src={OverallImg} alt="" />
              <div className='flex flex-col items-start gap-2'>
                <h4 className='text-[#1A1A1A] text-xl font-semibold font-inter '>Overall Health Connect</h4>
                <p className='text-[#667085] text-base font-normal font-inter'>Oral health is closely linked to overall health; poor dental hygiene can contribute to conditions like heart disease, diabetes respiratory issues etc</p>
              </div>
              <HiArrowLongRight className='text-2xl ms-2 mt-2' />
            </div>
            <div className="hover:translate-y-2 w-[278px] h-[380px] bg-[#FFFFFF] rounded-[30px] p-5 flex flex-col items-start justify-center gap-5 cursor-pointer">
              <img src={BoostingImg} alt="" />
              <div className='flex flex-col items-start gap-2'>
                <h4 className='text-[#1A1A1A] text-xl font-semibold font-inter '>Boosting Confidence and Appearance</h4>
                <p className='text-[#667085] text-base font-normal font-inter'>Healthy teeth and gums contribute to a more attractive smile, boosting self-esteem and confidence in social and professional interactions.</p>
              </div>
              <HiArrowLongRight className='text-2xl ms-2 mt-2' />
            </div>
          </div>
        </section>

        <Swiper
       modules={[Navigation, Pagination, Scrollbar, A11y]}
       spaceBetween={50}
       slidesPerView={3}
       navigation
       pagination={{ clickable: true }}
       scrollbar={{ draggable: true }}
       onSwiper={(swiper) => console.log(swiper)}
       onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      ...
    </Swiper>

        <section className='w-full px-[125px] h-[464px]'>
          <div className='bg-[#95C22B] rounded-3xl flex items-center justify-center gap-20 h-full'>
            <div className='w-[327px] h-[234px] flex flex-col '>
              <p className='text-[#FFFFFF] text-base font-semibold font-inter '>TESTIMONIALs</p>
              <h3 className='text-[#FFFFFF] text-4xl font-bold font-inter leading-[48px]'>The Honest<br/>Review<br/>
                From Our Dentists</h3>
              <p className='text-[#FFFFFF] text-base font-medium font-inter '>See what our dentists are saying about their experiences of our service</p>
            </div>
            <div className='border-2 border-[#FFFFFF] h-[320px]'></div>
            <div className='w-[500px]'>
              <p className='text-[#FFFFFF] text-2xl font-bold font-inter mb-16'>I joined De9to with the aim of promoting oral health awareness, benefiting from their free registration. My experience has been excellent, resulting in revenue exceeding 2.5 lac</p>
              <div className='flex justify-between items-center gap-4'>
                <div className="profile flex gap-3">
                  <img src={ProfileImg} alt="" />
                  <div className=' flex flex-col items-start justify-start'>
                    <ReactStars count={5} value={4} />
                    <h5 className="text-[#FFFFFF] text-xl font-bold font-inter">Dr. Jonathan Vallem</h5>
                    <p className="text-[#FFFFFF] text-sm font-medium font-inter">New york, USA</p>
                  </div>
                </div>
                <div className='flex justify-center items-end gap-4'>
                  <div className='w-[48px] h-[48px] bg-[#E1FF9A] flex justify-center items-center rounded-full cursor-pointer'>
                    <GoArrowLeft className='text-2xl' />
                  </div>
                  <div className='w-[62px] h-[62px] bg-[#FFFFFF] flex justify-center items-center rounded-full cursor-pointer'>
                    <GoArrowRight className='text-2xl' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="relative w-full max-w-screen-lg mx-auto px-4 py-8">
            {/* Title Section */}
            <div className="upper">
              <div className='w-full flex justify-between items-center'>
                <div className='flex flex-col gap-[15px]'>
                  <p className='text-[#95C22B] text-xl font-bold font-inter'>Our  Best Practices</p>
                  <h2 className='text-[#000A2D] text-5xl font-bold font-inter '>
                    Our Dental Camp Organized In Association With Sharp NGO
                  </h2>
                </div>
                <div>
                  <button className='bg-[#F4F4F4] py-[7px] px-[13px] rounded-full '><GoArrowLeft className='text-xl' /></button>
                  <GoArrowRight className='bg-[#F4F4F4] rounded-full' />
                </div>
              </div>
              <div className='flex justify-center items-center gap-8'>
                <img src={NGOImg1} alt="" className='cursor-pointer' />
                <img src={NGOImg1} alt="" className='cursor-pointer' />
              </div>
            </div>
            <div className="lower">

            </div>

          </div>
        </section>
        <section className=" flex flex-col items-center gap-10 px-[70px] w-full">
          <div className='flex flex-col items-center'>
            <span className='text-[#000000] text-xl text-center italic font-bold font-inter'>Our Contributors</span>
            <h3 className='text-[#000000] text-[40px] text-center font-bold font-inter '>Our Collaborators</h3>
          </div>
          <div className='flex gap-[115px]'>
            <img src={OurCollaboratorImg1} alt="" />
            <img src={OurCollaboratorImg2} alt="" />
            <img src={OurCollaboratorImg3} alt="" />
            <img src={OurCollaboratorImg4} alt="" />
          </div>
        </section>
      </main>
    </Layout>
  )
}

export default DentalCamp
