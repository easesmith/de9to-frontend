import Layout from '@/component/Layout/Layout'
import { useEffect, useRef, useState } from 'react'
import RequestDentalImg from '../../assets/codifyformatter__1_-removebg-preview 1.png'
import ProfessionalImg1 from '../../assets/Ellipse 3.png'
import ProfessionalImg2 from '../../assets/Ellipse 4.png'
import ProfessionalImg3 from '../../assets/Ellipse 5.png'
import ProfessionalImg4 from '../../assets/Ellipse 6.png'
import ProfessionalImg5 from '../../assets/Ellipse 7.png'
import ProfessionalImg6 from '../../assets/Ellipse 8.png'
import ProfessionalImg7 from '../../assets/Ellipse 9.png'
import DentalConsultationImg from '../../assets/Frame (1).png'
import DestistCampsImg from '../../assets/Frame (2).png'
import PinCodersCoveredImg from '../../assets/Frame (3).png'
import HealthWebinarImg from '../../assets/Frame (4).png'
import DentalCampImg1 from '../../assets/Frame 1171283211.png'
import DentalCampImg2 from '../../assets/Frame 1171283212.png'
import DestistSignupImg from '../../assets/Frame.png'
import DentalCampImg3 from '../../assets/image 150.png'
import OurCollaboratorImg1 from '../../assets/image 151.png'
import OurCollaboratorImg2 from '../../assets/image 153.png'
import OurCollaboratorImg3 from '../../assets/image 155.png'
import OurCollaboratorImg4 from '../../assets/image 157.png'
import GumDiseaseImg from '../../assets/noun-tooth-7037140 1.png'
import BoostingImg from '../../assets/noun-tooth-7037163 1.png'
import OverallImg from '../../assets/noun-tooth-7037172 1.png'
import PreventingImg from '../../assets/noun-toothache-6895920 3.png'


import { MangementInfo } from '@/component/MiniCompo/MiniCompo'
import ChoosePlanCompo from '@/components/ChoosePlanCompo'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { requestDentalCampSchema } from '@/schema/formSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import { FaLocationDot } from 'react-icons/fa6'
import { GoArrowLeft, GoArrowRight } from "react-icons/go"
import { HiArrowLongRight } from "react-icons/hi2"
import { MdAccessTimeFilled, MdCalendarMonth } from "react-icons/md"
import ReactStars from 'react-stars'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import Img1 from '../../assets/Frame 1171277952.png'
import NGOImg1 from '../../assets/image.png'
import ProfileImg from '../../assets/Profile picture.png'
import BackgroundImg from '../../assets/Subtract.png'

import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import usePostApiReq from '@/hooks/usePostApiReq'
import { cn } from "@/lib/utils"
import { generateTimeOptions } from '@/utils/generateTimeOptions'
import { format } from 'date-fns'
import toast from 'react-hot-toast'
import ReactPlayer from 'react-player'


const DentalCamp = () => {

  // const swiperRef = useRef(null);
  const swiperRef1 = useRef(null);
  const swiperRef2 = useRef(null);
  const swiperRef3 = useRef(null);

  const [selectedPlan, setSelectedPlan] = useState(null);

  const handleSelectPlan = (planIndex) => {
    setSelectedPlan(planIndex);
  };

  const timeOptions = generateTimeOptions();

  const data = [
    {
      image: Img1,
      description: 'Provide free or low-cost dental care, making oral health services accessible to everyone.'
    },
    {
      image: Img1,
      description: 'Provide free or low-cost dental care, making oral health services accessible to everyone.'
    },
    {
      image: Img1,
      description: 'Provide free or low-cost dental care, making oral health services accessible to everyone.'
    },
    {
      image: Img1,
      description: 'Provide free or low-cost dental care, making oral health services accessible to everyone.'
    },
    {
      image: Img1,
      description: 'Provide free or low-cost dental care, making oral health services accessible to everyone.'
    },
    {
      image: Img1,
      description: 'Provide free or low-cost dental care, making oral health services accessible to everyone.'
    },
    {
      image: Img1,
      description: 'Provide free or low-cost dental care, making oral health services accessible to everyone.'
    },
    {
      image: Img1,
      description: 'Provide free or low-cost dental care, making oral health services accessible to everyone.'
    },
    {
      image: Img1,
      description: 'Provide free or low-cost dental care, making oral health services accessible to everyone.'
    },
    {
      image: Img1,
      description: 'Provide free or low-cost dental care, making oral health services accessible to everyone.'
    },
    {
      image: Img1,
      description: 'Provide free or low-cost dental care, making oral health services accessible to everyone.'
    },
    {
      image: Img1,
      description: 'Provide free or low-cost dental care, making oral health services accessible to everyone.'
    },
    {
      image: Img1,
      description: 'Provide free or low-cost dental care, making oral health services accessible to everyone.'
    },
    {
      image: Img1,
      description: 'Provide free or low-cost dental care, making oral health services accessible to everyone.'
    },
    {
      image: Img1,
      description: 'Provide free or low-cost dental care, making oral health services accessible to everyone.'
    },
    {
      image: Img1,
      description: 'Provide free or low-cost dental care, making oral health services accessible to everyone.'
    },
    {
      image: Img1,
      description: 'Provide free or low-cost dental care, making oral health services accessible to everyone.'
    },
    {
      image: Img1,
      description: 'Provide free or low-cost dental care, making oral health services accessible to everyone.'
    },
    {
      image: Img1,
      description: 'Provide free or low-cost dental care, making oral health services accessible to everyone.'
    },
    {
      image: Img1,
      description: 'Provide free or low-cost dental care, making oral health services accessible to everyone.'
    },
    {
      image: Img1,
      description: 'Provide free or low-cost dental care, making oral health services accessible to everyone.'
    },
    {
      image: Img1,
      description: 'Provide free or low-cost dental care, making oral health services accessible to everyone.'
    },
    {
      image: Img1,
      description: 'Provide free or low-cost dental care, making oral health services accessible to everyone.'
    },
    {
      image: Img1,
      description: 'Provide free or low-cost dental care, making oral health services accessible to everyone.'
    },
    {
      image: Img1,
      description: 'Provide free or low-cost dental care, making oral health services accessible to everyone.'
    },
    {
      image: Img1,
      description: 'Provide free or low-cost dental care, making oral health services accessible to everyone.'
    },
    {
      image: Img1,
      description: 'Provide free or low-cost dental care, making oral health services accessible to everyone.'
    },
  ]


  const form = useForm({
    resolver: zodResolver(requestDentalCampSchema),
    defaultValues: {
      organiserName: "",
      designation: "",
      emailId: "",
      contactNumber: "",
      campPerferredDate: "",
      campTiming: "",
      location: ""
    }
  })

  const { res, fetchData, isLoading } = usePostApiReq();
  const { reset, handleSubmit } = form

  console.log("getvalues",form.getValues());
  
  const onSubmit = (data) => {
    console.log(data)
    fetchData(`/patient/submit-dental-camp-form`,
      {
        name: data.organiserName,
        email: data.emailId,
        phone: data.contactNumber,
        position: data.designation,
        place: data.location,
        time: data.campTiming,
        date: data.campPerferredDate,
      });

  }

  useEffect(() => {
    if (res?.status === 200 || res?.status === 201) {
      console.log("dental camp form res", res);
      toast.success(res?.data?.message)
      reset({
        organiserName: "",
        designation: "",
        emailId: "",
        contactNumber: "",
        campPerferredDate: "",
        campTiming: "",
        location: ""
      })
    }
  }, [res])

  return (
    <Layout>
      <main className=' relative'>
        <section className="flex items-end gap-[30px] bg-[#F6F6F6] w-full py-7 ps-[100px]">
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
                      name="designation"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[] text-xl font-medium font-inter mb-4">Designation  <span className='text-[red]'>*</span></FormLabel>
                          <FormControl>
                            <Input placeholder="Enter designation" {...field}
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
                          <FormLabel className="text-xl font-medium font-inter mb-4">Camp Perferred Date <span className='text-[red]'>*</span></FormLabel>
                          <div className='relative'>
                            <FormControl>
                              <Popover>
                                <PopoverTrigger asChild>
                                  <FormControl>
                                    <Button
                                      variant={"outline"}
                                      className={cn(
                                        "w-full flex h-[60px] border-[#808080] gap-2 justify-start text-[#717171]",
                                        !field.value && "text-muted-foreground"
                                      )}
                                    >
                                      <MdCalendarMonth className='text-[#838383] text-xl absolute top-[35%] right-[6.5%]' />
                                      {field.value ? (
                                        format(field.value, "PPP")
                                      ) : (
                                        <span className='text-[#838383] text-lg font-normal'>Select a date</span>
                                      )}
                                    </Button>
                                  </FormControl>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0" align="start">
                                  <Calendar
                                    mode="single"
                                    selected={field.value}
                                    onSelect={field.onChange}
                                    // disabled={(date) =>
                                    //   date > new Date() || date < new Date("1900-01-01")
                                    // }
                                    initialFocus
                                  />
                                </PopoverContent>
                              </Popover>
                            </FormControl>
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="campTiming"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xl font-medium font-inter mb-4">Camp Timings <span className='text-[red]'>*</span></FormLabel>
                          <div className='relative'>
                            <FormControl>
                              <Select
                                {...field}
                                onValueChange={(e) => {
                                  field.onChange(e);
                                }}
                              >
                                <SelectTrigger className="w-full border-[#808080] text-[#838383] text-lg h-[60px] px-5">
                                  <SelectValue placeholder="Select timing" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectGroup>
                                    {timeOptions.map((time, index) => (
                                      <SelectItem key={index} value={time}>
                                        {time}
                                      </SelectItem>
                                    ))}
                                  </SelectGroup>
                                </SelectContent>
                              </Select>
                            </FormControl>
                            <MdAccessTimeFilled className='text-[#838383] text-xl absolute top-[35%] right-[6.5%]' />
                          </div>
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
                        <FormLabel className="text-xl font-medium font-inter mb-4">Location <span className='text-[red]'>*</span></FormLabel>
                        <div className='relative'>
                          <FormControl>
                            <Input placeholder="Enter your location" {...field}
                              className="h-[60px] text-[#838383] text-base font-normal font-inter border-[1px] border-[#808080] rounded-[10px] px-5 pr-10 py-[10px] placeholder:text-[#838383]"
                            />
                          </FormControl>
                          <FaLocationDot className='text-[#838383] text-xl absolute top-[35%] right-[3%]' />
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button variant='submit' size='lg' className='h-16' type="submit">Submit</Button>
                </form>
              </Form>
            </div>
          </div>
          <div className="right-side relative w-fit flex flex-col items-center">
            <div className='w-[214px] h-[87px] rounded-2xl py-3 px-5 bg-[#F4F9EA] shadow-custom3 -mb-5 ml-8'>
              <h5 className='text-[#000000] text-center font-normal font-poppins mb-1'>our professionals</h5>
              <div className='flex relative'>
                <img src={ProfessionalImg1} alt="" className='absolute  z-0' />
                <img src={ProfessionalImg2} alt="" className='absolute left-5 z-10' />
                <img src={ProfessionalImg3} alt="" className='absolute left-10 z-[11]' />
                <img src={ProfessionalImg4} alt="" className='absolute left-[60px] z-[12]' />
                <img src={ProfessionalImg5} alt="" className='absolute left-20 z-[13]' />
                <img src={ProfessionalImg6} alt="" className='absolute left-[100px] z-[14]' />
                <img src={ProfessionalImg7} alt="" className='absolute left-[120px] z-[15]' />
                <div className='bg-[#95C22B] rounded-full flex justify-center items-center absolute left-[140px] z-[16] w-[37px] h-[37px]'>
                  <p className='text-[#FFFFFF] text-sm font-normal font-poppins'>30+</p>
                </div>
              </div>
            </div>
            <img src={RequestDentalImg} alt="" className='-mb-20 relative z-10' />
          </div>
        </section>
        <img src={BackgroundImg} alt="" className='min-w-[685px] absolute top-[0%] right-[0%] -z-0' />

        <section className="min-h-[228px] flex justify-between items-end gap-9 px-[125px] text-[#808080] bg-[#FFFFFF] relative z-10 pt-20 mb-6">
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
              <Button variant='submit' size='sm'>Book Dental Camp</Button>
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

        <section className='max-w-[1240px] mx-auto my-36'>
          <div className='flex justify-between mb-12'>
            <div className='flex flex-col items-start gap-2'>
              <h5 className='text-[#95C22B] text-xl italic font-bold font-inter'>Pictures</h5>
              <h4 className='text-[#95C22B] text-[40px] font-extrabold font-inter'>De9to<span className='text-black'>’s Successful Dental Camps</span></h4>
              <p className='text-[#606060] text-xl font-semibold font-roboto'>Elevating Oral Health Awareness</p>
            </div>
            <div className='flex items-center gap-5'>
              <div
                className="bg-[#F4F4F4] rounded-full w-12 h-12 flex items-center justify-center cursor-pointer"
                onClick={() => swiperRef1.current?.slidePrev()} // Navigate to the previous slide
              >
                <BsArrowLeft className='text-2xl ' />
              </div>
              <div
                className="bg-[#F4F4F4] rounded-full w-12 h-12 flex items-center justify-center cursor-pointer"
                onClick={() => swiperRef1.current?.slideNext()} // Navigate to the next slide
              >
                <BsArrowRight className='text-2xl' />
              </div>
            </div>
          </div>
          <div className='flex justify-between dental-camp'>
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              loop={true}
              pagination={{
                clickable: true,
              }}
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }}
              modules={[Pagination, Navigation, Autoplay]}
              onSwiper={(swiper) => {
                swiperRef1.current = swiper;
              }}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              className='h-[430px]'
            >
              <SwiperSlide>
                <img src={DentalCampImg1} alt="" className='cursor-pointer' />
              </SwiperSlide>
              <SwiperSlide>
                <img src={DentalCampImg2} alt="" className='cursor-pointer' />
              </SwiperSlide>
              <SwiperSlide>
                <img src={DentalCampImg3} alt="" className='rounded-2xl cursor-pointer' />
              </SwiperSlide>
              <SwiperSlide>
                <img src={DentalCampImg1} alt="" className='cursor-pointer' />
              </SwiperSlide>
              <SwiperSlide>
                <img src={DentalCampImg2} alt="" className='cursor-pointer' />
              </SwiperSlide>
              <SwiperSlide>
                <img src={DentalCampImg3} alt="" className='rounded-2xl cursor-pointer' />
              </SwiperSlide>
            </Swiper>
          </div>
        </section>

        <section className='max-w-[1240px] mx-auto my-36'>
          <div className='flex justify-between mb-12'>
            <div className='flex flex-col items-start gap-2'>
              <h5 className='text-[#95C22B] text-xl italic font-bold font-inter'>Pictures</h5>
              <h4 className='text-[#1A1A1A] text-[40px] font-extrabold font-inter'>Pick a Plan that is right for You</h4>
              <p className='text-[#606060] text-xl font-semibold font-roboto'>Elevating Oral Health Awareness</p>
            </div>
          </div>
          <div className="min-h-screen flex items-end justify-center gap-9">
            <ChoosePlanCompo title='BASIC' amount='1000' isSelected={selectedPlan === 1} onSelect={() => handleSelectPlan(1)} />
            <ChoosePlanCompo title='PROFESSIONAL' amount='3000' isSelected={selectedPlan === 3} onSelect={() => handleSelectPlan(3)} />
            <ChoosePlanCompo title='ADVANCED' amount='2000' isSelected={selectedPlan === 2} onSelect={() => handleSelectPlan(2)} />
          </div>
        </section>

        <section className=' my-36'>
          <div className='flex justify-between mb-12 max-w-[1240px] mx-auto'>
            <div className='flex flex-col items-start gap-2'>
              <h5 className='text-[#95C22B] text-xl italic font-bold font-inter'>Why Dental Camps?</h5>
              <h4 className='text-[#1A1A1A] text-[40px] font-extrabold font-inter'>Why Dental Camps are Important</h4>
            </div>
          </div>
          <div className='flex gap-12 items-center overflow-hidden overflow-y-visible'>
            {data.map((e, i) => {
              return (
                <div key={i} className='animate-scroll rounded-2xl bg-[#FFFFFF] flex flex-col items-center gap-5 py-3 px-2 my-2 min-w-[180px] h-[170px] shadow-lg cursor-pointer '>
                  <img src={e.image} alt="" className='w-[64px] h-[36px]' />
                  <p className={`text-[#1A1A1A] text-center text-sm font-normal font-inter`}>{e.description}</p>
                </div>
              )
            })}
          </div>
        </section>

        <section className='w-full h-[464px] max-w-[1240px] mx-auto'>
          <div className='bg-[#95C22B] rounded-3xl flex items-center justify-center gap-20 h-full'>
            <div className='w-[327px] h-[234px] flex flex-col '>
              <p className='text-[#FFFFFF] text-base font-semibold font-inter '>TESTIMONIALs</p>
              <h3 className='text-[#FFFFFF] text-4xl font-bold font-inter leading-[48px]'>The Honest<br />Review<br />
                From Our Dentists</h3>
              <p className='text-[#FFFFFF] text-base font-medium font-inter '>See what our dentists are saying about their experiences of our service</p>
            </div>
            <div className='border-2 border-[#FFFFFF] h-[320px]'></div>
            <div className='w-[500px]'>
              <div className='flex justify-between items-end gap-4'>
                <Swiper
                  loop={true}
                  modules={[Pagination, Autoplay]}
                  slidesPerView={1}
                  navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                  }}
                  onSwiper={(swiper) => {
                    swiperRef2.current = swiper;
                  }}
                  autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                  }}
                  // onSlideChange={() => console.log('slide change')}
                >
                  <SwiperSlide>
                    <p className='text-[#FFFFFF] text-2xl font-bold font-inter mb-16'>I joined De9to with the aim of promoting oral health awareness, benefiting from their free registration. My experience has been excellent, resulting in revenue exceeding 2.5 lac</p>
                    <div className="profile flex gap-3">
                      <img src={ProfileImg} alt="" />
                      <div className=' flex flex-col items-start justify-start'>
                        <ReactStars edit={false} count={5} value={4} color2='#FFD400' />
                        <h5 className="text-[#FFFFFF] text-xl font-bold font-inter">Dr. Jonathan Vallem</h5>
                        <p className="text-[#FFFFFF] text-sm font-medium font-inter">New york, USA</p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <p className='text-[#FFFFFF] text-2xl font-bold font-inter mb-16'>I joined De9to with the aim of promoting oral health awareness, benefiting from their free registration. My experience has been excellent, resulting in revenue exceeding 2.5 lac</p>
                    <div className="profile flex gap-3">
                      <img src={ProfileImg} alt="" />
                      <div className=' flex flex-col items-start justify-start'>
                        <ReactStars edit={false} count={5} value={4} color2='#FFD400' />
                        <h5 className="text-[#FFFFFF] text-xl font-bold font-inter">Dr. Jonathan Vallem</h5>
                        <p className="text-[#FFFFFF] text-sm font-medium font-inter">New york, USA</p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <p className='text-[#FFFFFF] text-2xl font-bold font-inter mb-16'>I joined De9to with the aim of promoting oral health awareness, benefiting from their free registration. My experience has been excellent, resulting in revenue exceeding 2.5 lac</p>
                    <div className="profile flex gap-3">
                      <img src={ProfileImg} alt="" />
                      <div className=' flex flex-col items-start justify-start'>
                        <ReactStars edit={false} count={5} value={4} color2='#FFD400' />
                        <h5 className="text-[#FFFFFF] text-xl font-bold font-inter">Dr. Jonathan Vallem</h5>
                        <p className="text-[#FFFFFF] text-sm font-medium font-inter">New york, USA</p>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
                <div className='flex justify-center items-end gap-4'>
                  <div className='w-[48px] h-[48px] bg-[#E1FF9A] flex justify-center items-center rounded-full cursor-pointer' onClick={() => swiperRef2.current?.slidePrev()}>
                    <GoArrowLeft className='text-2xl' />
                  </div>
                  <div className='w-[62px] h-[62px] bg-[#FFFFFF] flex justify-center items-center rounded-full cursor-pointer' onClick={() => swiperRef2.current?.slideNext()}>
                    <GoArrowRight className='text-2xl' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='max-w-[1240px] mx-auto my-36'>
          <div className="relative w-full ">
            <div className="">
              <div className='w-full flex justify-between items-center mb-12'>
                <div className='flex flex-col gap-[15px]'>
                  <p className='text-[#95C22B] text-xl font-bold font-inter'>Our  Best Practices</p>
                  <h2 className='text-[#000A2D] w-[900px] text-[40px] font-bold font-inter '>
                    Our Dental Camp Organized In Association With Sharp NGO
                  </h2>
                </div>
                <div className='flex items-center gap-5'>
                  <div
                    className="bg-[#F4F4F4] rounded-full w-12 h-12 flex items-center justify-center cursor-pointer"
                    onClick={() => swiperRef3.current?.slidePrev()} // Navigate to the previous slide
                  >
                    <BsArrowLeft className='text-2xl ' />
                  </div>
                  <div
                    className="bg-[#F4F4F4] rounded-full w-12 h-12 flex items-center justify-center cursor-pointer"
                    onClick={() => swiperRef3.current?.slideNext()} // Navigate to the next slide
                  >
                    <BsArrowRight className='text-2xl' />
                  </div>
                </div>
              </div>
              <div className='flex justify-between items-center gap-8'>
                <Swiper
                  slidesPerView={2}
                  spaceBetween={30}
                  loop={true}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                  }}
                  modules={[Pagination, Navigation, Autoplay]}
                  onSwiper={(swiper) => {
                    swiperRef3.current = swiper;
                  }}
                  autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                  }}
                  className="mySwiper h-[450px] dental-camp"
                >
                  <SwiperSlide>
                    {/* <img src={NGOImg1} alt="" className='cursor-pointer' /> */}
                    <ReactPlayer url="https://www.youtube.com/embed/mOFoh9FUR8w?si=4dveYjVDszEuxwQL" playing={true} controls={true} width="100%" height="366px" className='rounded-3xl'/>
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={NGOImg1} alt="" className='cursor-pointer' />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={NGOImg1} alt="" className='cursor-pointer' />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={NGOImg1} alt="" className='cursor-pointer' />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={NGOImg1} alt="" className='cursor-pointer' />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={NGOImg1} alt="" className='cursor-pointer' />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </section>
        <section className=" flex flex-col items-center gap-10 w-full max-w-[1240px] mx-auto my-36">
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
