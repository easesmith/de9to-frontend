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
import DentalConsultationImg from '../../assets/checklist 1.png'
import DestistCampsImg from '../../assets/dental-clinic (1) 1.png'
import PinCodersCoveredImg from '../../assets/maps.png'
import HealthWebinarImg from '../../assets/image 158.png'
import DentalCampImg1 from '../../assets/Frame 1171283211.png'
import DentalCampImg2 from '../../assets/Frame 1171283212.png'
import DestistSignupImg from '../../assets/dentist 1.png'
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
import ScrollTrigger from 'react-scroll-trigger'
import useGetApiReq from '@/hooks/useGetApiReq'
import { Helmet } from 'react-helmet-async'
import SuccessfulDentalCamps from '@/component/dentalComponent/SuccessfulDentalCamps'


const DentalCamp = () => {

  // const swiperRef = useRef(null);
  const swiperRef1 = useRef(null);
  const swiperRef2 = useRef(null);
  const swiperRef3 = useRef(null);
  const swiperRef4 = useRef(null);
  const [isCounter, setIsCounter] = useState(false);

  const [selectedPlan, setSelectedPlan] = useState(3);

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

  console.log("getvalues", form.getValues());

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


  const [seoData, setSeoData] = useState({
    title: "",
    description: "",
    focusedKeywords: "",
  });

  const { res: res1, fetchData: fetchData1 } = useGetApiReq();

  const getSeo = () => {
    fetchData1(`/patient/get-seo?pageName=dental-camps`);
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
      <main className=' relative'>
        <Helmet>
          <title>{seoData.title}</title>
          <meta name="description" content={seoData.description} />
          <meta name="keywords" content={seoData.focusedKeywords} />
        </Helmet>

        <div className='bg-[#F6F6F6] w-full px-5 max-med rounded-lg'>
          <section className="flex items-start max-w-[1200px] gap-2 py-5  mx-auto max-large:items-center">
            <div className="left-side w-1/2 flex flex-col gap-3 max-med:w-full max-med:gap-0">
              <div className="upper flex flex-col items-start gap-2">
                <span className='text-[#95C22B] text-sm italic font-bold font-inter'>Request</span>
                <h2 className='text-[#000A2D] text-2xl font-bold font-inter max-large:text-xl'>Request A Dental Camp</h2>
                <p className='text-[#606060] text-sm font-normal font-roboto'>Feel free to drop a message related to your requirement.Our team will get back to you soon. </p>
              </div>
              <div className="lower">
                <Form {...form}>
                  <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 max-[950px]:gap-3">
                    <div className='grid grid-cols-2 gap-4 w-full max-md:grid-cols-1 max-small:grid-cols-1 max-[950px]:gap-3'>
                      <FormField
                        control={form.control}
                        name="organiserName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className=" text-base font-medium font-inter mb-4 max-[950px]:text-base max-small:text-sm">Organiser's Name <span className='text-[red]'>*</span></FormLabel>
                            <FormControl>
                              <Input placeholder="Enter Organiser Name" {...field}
                                className="h-12 text-[#838383] text-base font-normal font-inter border-[1px] border-[#808080] rounded-[10px] px-5 py-[10px] placeholder:text-[#838383] max-[950px]:px-3 max-[950px]:text-sm max-[950px]:h-[46px] max-[950px]:rounded-lg"
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
                            <FormLabel className="text-[] text-base font-medium font-inter mb-4 max-med:text-base max-small:text-sm">Designation  <span className='text-[red]'>*</span></FormLabel>
                            <FormControl>
                              <Input placeholder="Enter designation" {...field}
                                className="h-12 text-[#838383] text-base font-normal font-inter border-[1px] border-[#808080] rounded-[10px] px-5 py-[10px] placeholder:text-[#838383] max-[950px]:px-3 max-[950px]:text-sm max-[950px]:h-[46px] max-[950px]:rounded-lg"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className='grid grid-cols-2 gap-4 w-full max-md:grid-cols-1 max-med:grid-cols-2 max-small:grid-cols-1 max-[950px]:gap-3'>
                      <FormField
                        control={form.control}
                        name="emailId"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-[] text-base font-medium font-inter mb-4 max-med:text-base max-small:text-sm">Email Id <span className='text-[red]'>*</span></FormLabel>
                            <FormControl>
                              <Input placeholder="Enter email id" {...field}
                                className="h-12 text-[#838383] text-base font-normal font-inter border-[1px] border-[#808080] rounded-[10px] px-5 py-[10px] placeholder:text-[#838383] max-[950px]:px-3 max-[950px]:text-sm max-[950px]:h-[46px] max-[950px]:rounded-lg"
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
                            <FormLabel className="text-[] text-base font-medium font-inter mb-4 max-med:text-base max-small:text-sm">Contact Number <span className='text-[red]'>*</span></FormLabel>
                            <FormControl>
                              <Input placeholder="Enter contact number" {...field}
                                className="h-12 text-[#838383] text-base font-normal font-inter border-[1px] border-[#808080] rounded-[10px] px-5 py-[10px] placeholder:text-[#838383] max-[950px]:px-3 max-[950px]:text-sm max-[950px]:h-[46px] max-[950px]:rounded-lg"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className='grid grid-cols-2 gap-4 w-full max-md:grid-cols-1 max-med:grid-cols-2 max-small:grid-cols-1 max-[950px]:gap-3'>
                      <FormField
                        control={form.control}
                        name="campPerferredDate"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-base font-medium font-inter mb-4 max-[950px]:px-3 max-[950px]:text-sm max-[950px]:h-[46px] max-[950px]:rounded-lg">Camp Perferred Date <span className='text-[red]'>*</span></FormLabel>
                            <div className='relative'>
                              <FormControl>
                                <Popover>
                                  <PopoverTrigger asChild>
                                    <FormControl>
                                      <Button
                                        variant={"outline"}
                                        className={cn(
                                          "w-full flex h-12 border-[#808080] gap-2 justify-start text-[#717171] max-med:px-3 max-med:h-[46px] max-med:rounded-lg",
                                          !field.value && "text-muted-foreground"
                                        )}
                                      >
                                        <MdCalendarMonth className='text-[#838383] text-xl absolute top-[35%] right-[6.5%]' />
                                        {field.value ? (
                                          format(field.value, "PPP")
                                        ) : (
                                          <span className='text-[#838383] text-base font-normal max-med:text-sm'>Select a date</span>
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
                            <FormLabel className="text-base font-medium font-inter mb-4 max-med:text-base max-small:text-sm">Camp Timings <span className='text-[red]'>*</span></FormLabel>
                            <div className='relative'>
                              <FormControl>
                                <Select
                                  {...field}
                                  onValueChange={(e) => {
                                    field.onChange(e);
                                  }}
                                >
                                  <SelectTrigger className="w-full border-[#808080] text-[#838383] text-base h-12 px-5 max-[950px]:px-3 max-[950px]:text-sm max-[950px]:h-[46px] max-[950px]:rounded-lg">
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
                          <FormLabel className="text-base font-medium font-inter mb-4 max-med:text-base max-small:text-sm">Location <span className='text-[red]'>*</span></FormLabel>
                          <div className='relative'>
                            <FormControl>
                              <Input placeholder="Enter your location" {...field}
                                className="h-12 text-[#838383] text-base font-normal font-inter border-[1px] border-[#808080] rounded-[10px] px-5 pr-10 py-[10px] placeholder:text-[#838383] max-[950px]:px-3 max-[950px]:text-sm max-[950px]:h-[46px] max-[950px]:rounded-lg"
                              />
                            </FormControl>
                            <FaLocationDot className='text-[#838383] text-xl absolute top-[35%] right-[3%]' />
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button variant='submit' size='lg' className='h-[56px] max-med:text-base max-med:h-11' type="submit">Submit</Button>
                  </form>
                </Form>
              </div>
            </div>
            <div className="right-side relative w-1/2 flex flex-col items-center h-[560px] max-med:hidden gap-5">
              <div className='w-[214px] h-[87px] rounded-2xl py-3 px-5 bg-[#F4F9EA] shadow-custom3 -mb-10 ml-8'>
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
              <img src={RequestDentalImg} alt="" className='relative object-contain z-10 h-[500px] max-large:h-[700px] max-large:w-[350px] w-full' />
            </div>
          </section>
        </div>
        <img src={BackgroundImg} alt="" className='min-w-[685px] max-h-[600px] absolute top-[0%] right-[0%] -z-0 max-large:hidden' />

        <div className="rounded-xl w-full max-md:hidden max-lg:rounded-none">
          <ScrollTrigger onEnter={() => setIsCounter(true)} onExit={() => setIsCounter(false)}>
            <div className='flex flex-wrap justify-between items-center gap-6 px-10 py-10 text-[#808080] w-full max-lg:justify-between max-lg:px-5 max-[425px]:px-2'>
              <MangementInfo isCounter={isCounter} img={DestistSignupImg} number={150} title="Dentist Signups" />
              <MangementInfo isCounter={isCounter} img={DentalConsultationImg} number={10000} title="Dental Consultations" />
              <MangementInfo isCounter={isCounter} img={DestistCampsImg} number={150} title="Dental Camps" />
              <MangementInfo isCounter={isCounter} img={PinCodersCoveredImg} number={75} title="Pin Codes Covered" />
              <MangementInfo isCounter={isCounter} img={HealthWebinarImg} number={75} title="Health Webinars" />
            </div>
          </ScrollTrigger>
        </div>
        <div className="w-full hidden max-md:block py-5">
          <ScrollTrigger onEnter={() => setIsCounter(true)} onExit={() => setIsCounter(false)}>
            <>
              <div className='grid grid-cols-3 justify-items-center text-[#808080] w-full mb-5 max-small:mb-[10px]'>
                <MangementInfo isCounter={isCounter} img={DestistSignupImg} number={150} title="Dentist Signups" />
                <MangementInfo isCounter={isCounter} img={DentalConsultationImg} number={10000} title="Dental Consultations" />
                <MangementInfo isCounter={isCounter} img={DestistCampsImg} number={150} title="Dental Camps" />
              </div>
              <div className='grid grid-cols-2 justify-items-center text-[#808080] w-[450px] max-sm:w-[350px] max-small:w-[250px] mx-auto'>
                <MangementInfo isCounter={isCounter} img={PinCodersCoveredImg} number={75} title="Pin Codes Covered" />
                <MangementInfo isCounter={isCounter} img={HealthWebinarImg} number={75} title="Health Webinars" />
              </div>
            </>
          </ScrollTrigger>

        </div>
        <section className=" bg-[#F6F6F6] w-full py-[70px] px-5">
          <div className='max-w-[1200px] mx-auto w-full flex flex-col gap-[30px]'>
            <div className="upper flex items-end justify-between gap-10 w-full">
              <div className="w-full flex flex-col items-start gap-[15px] max-med:items-center max-small:gap-2">
                <span className='text-[#95C22B] text-xl font-bold font-inter max-small:text-sm'>Our  Best Practices</span>
                <h2 className='text-[#000A2D] text-5xl font-bold font-inter max-large:text-4xl max-med:text-3xl max-small:text-base'>What Is Dental Camp?</h2>
                <div className='flex justify-between max-med:justify-center max-med:flex-wrap items-start w-full gap-6'>
                  <p className='text-[#606060] text-xl font-semibold font-roboto w-[55%] max-large:text-lg max-med:w-full max-med:text-center max-med:text-base max-med:font-normal max-small:text-sm'>To create awareness and on-spot dental solutions De9to has a portable setup of modern dental equipment which can be installed in areas</p>
                  <Button variant='submit' className='max-large:text-lg max-med:text-base max-small:text-sm max-small:h-[36px] max-small:w-[160px]' size='sm'>Book Dental Camp</Button>
                </div>
              </div>
            </div>
            <div className="lower w-full grid grid-cols-4 max-large:grid-cols-3 place-items-start justify-items-center max-med:grid-cols-2 gap-6 max-[1154px]:justify-center max-med:gap-3">
              <div className="hover:translate-y-2 max-w-[278px] h-[410px] max-lg:h-[340px] max-md:h-[320px] max-small:h-[200px] bg-[#FFFFFF] rounded-xl p-5 flex flex-col items-start justify-center gap-3 cursor-pointer max-small:gap-2 max-small:p-3">
                <img src={PreventingImg} alt="" className='max-small:w-8 max-small:h-8' />
                <div className='flex flex-col items-start gap-2 max-small:gap-0'>
                  <h4 className='text-[#1A1A1A] text-xl font-semibold font-inter max-large:text-lg max-med:text-base max-small:text-[10px] max-small:leading-[13px]'>Preventing Tooth Decay</h4>
                  <p className='text-[#667085] text-base font-normal font-inter max-large:text-sm max-med:text-xs max-small:text-[8px] max-small:leading-3'>Regular brushing, flossing, and dental check-ups help prevent cavities and tooth decay, ensuring your smile stays healthy and bright.</p>
                </div>
                <HiArrowLongRight className='text-2xl ms-2' />
              </div>
              <div className="hover:translate-y-2 max-w-[278px] h-[410px] max-lg:h-[340px] max-md:h-[320px] max-small:h-[200px] bg-[#FFFFFF] rounded-xl p-5 flex flex-col items-start justify-center gap-3 cursor-pointer max-small:gap-2 max-small:p-3">
                <img src={GumDiseaseImg} alt="" className='max-small:w-8 max-small:h-8' />
                <div className='flex flex-col items-start gap-2 max-small:gap-0'>
                  <h4 className='text-[#1A1A1A] text-xl font-semibold font-inter max-large:text-lg max-med:text-base max-small:text-[10px] max-small:leading-[13px]'>Gum Disease Prevention</h4>
                  <p className='text-[#667085] text-base font-normal font-inter max-large:text-sm max-med:text-xs max-small:text-[8px] max-small:leading-3'>Maintaining good oral hygiene reduces the risk of gum disease, which can lead to tooth loss and other health complications if left untreated.</p>
                </div>
                <HiArrowLongRight className='text-2xl ms-2' />
              </div>
              <div className="hover:translate-y-2 max-w-[278px] h-[410px] max-lg:h-[340px] max-md:h-[320px] max-small:h-[200px] bg-[#FFFFFF] rounded-xl p-5 flex flex-col items-start justify-center gap-3 cursor-pointer max-small:gap-2 max-small:p-3">
                <img src={OverallImg} alt="" className='max-small:w-8 max-small:h-8' />
                <div className='flex flex-col items-start gap-2 max-small:gap-0'>
                  <h4 className='text-[#1A1A1A] text-xl font-semibold font-inter max-large:text-lg max-med:text-base max-small:text-[10px] max-small:leading-[13px]'>Overall Health Connect</h4>
                  <p className='text-[#667085] text-base font-normal font-inter max-large:text-sm max-med:text-xs max-small:text-[8px] max-small:leading-3'>Oral health is closely linked to overall health; poor dental hygiene can contribute to conditions like heart disease, diabetes respiratory issues etc</p>
                </div>
                <HiArrowLongRight className='text-2xl ms-2' />
              </div>
              <div className='hidden max-large:block max-med:hidden'></div>
              <div className="hover:translate-y-2 max-w-[278px] h-[410px] max-lg:h-[340px] max-md:h-[320px] max-small:h-[200px] bg-[#FFFFFF] rounded-xl p-5 flex flex-col items-start justify-center gap-3 cursor-pointer max-small:gap-2 max-small:p-3">
                <img src={BoostingImg} alt="" className='max-small:w-8 max-small:h-8' />
                <div className='flex flex-col items-start gap-2 max-small:gap-0'>
                  <h4 className='text-[#1A1A1A] text-xl font-semibold font-inter max-large:text-lg max-med:text-base max-small:text-[10px] max-small:leading-[13px]'>Boosting Confidence and Appearance</h4>
                  <p className='text-[#667085] text-base font-normal font-inter max-large:text-sm max-med:text-xs max-small:text-[8px] max-small:leading-3'>Healthy teeth and gums contribute to a more attractive smile, boosting self-esteem and confidence in social and professional interactions.</p>
                </div>
                <HiArrowLongRight className='text-2xl ms-2' />
              </div>
            </div>
          </div>
        </section>

        {/* <section className='max-w-[1200px] mx-auto my-24 px-5 max-med:my-16'>
          <div className='flex justify-between max-sm:flex-col mb-12 w-full gap-4'>
            <div className='flex flex-col items-start gap-2 max-sm:items-center w-full'>
              <h5 className='text-[#95C22B] text-xl italic font-bold font-inter'>Pictures</h5>
              <h4 className='text-[#95C22B] text-[40px] font-extrabold font-inter max-large:text-3xl max-med:text-2xl max-sm:text-center'>De9to<span className='text-black'>’s Successful Dental Camps</span></h4>
              <p className='text-[#606060] text-xl font-semibold font-roboto max-sm:text-base'>Elevating Oral Health Awareness</p>
            </div>
            <div className='flex items-center gap-5 justify-end'>
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
              breakpoints={
                {
                  0: {
                    slidesPerView: 1
                  },
                  424: {
                    slidesPerView: 2
                  },
                  500: {
                    slidesPerView: 2
                  },
                  768: {
                    slidesPerView: 3
                  }
                }
              }
              modules={[Pagination, Navigation, Autoplay]}
              onSwiper={(swiper) => {
                swiperRef1.current = swiper;
              }}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              className='h-[420px]'
            >
              <SwiperSlide>
                <img src={DentalCampImg1} alt="" className='cursor-pointer h-[370px]' />
              </SwiperSlide>
              <SwiperSlide>
                <img src={DentalCampImg2} alt="" className='cursor-pointer h-[370px]' />
              </SwiperSlide>
              <SwiperSlide>
                <img src={DentalCampImg3} alt="" className='rounded-2xl cursor-pointer h-[370px]' />
              </SwiperSlide>
              <SwiperSlide>
                <img src={DentalCampImg1} alt="" className='cursor-pointer h-[370px]' />
              </SwiperSlide>
              <SwiperSlide>
                <img src={DentalCampImg2} alt="" className='cursor-pointer h-[370px]' />
              </SwiperSlide>
              <SwiperSlide>
                <img src={DentalCampImg3} alt="" className='rounded-2xl cursor-pointer h-[370px]' />
              </SwiperSlide>
            </Swiper>
          </div>
        </section> */}
        <SuccessfulDentalCamps/>

        <section className='max-w-[1240px] mx-auto my-24 max-med:my-16 w-full px-4'>
          <div className='flex justify-between mb-12 w-full'>
            <div className='flex flex-col items-start gap-2 max-med:items-center w-full'>
              <h5 className='text-[#95C22B] text-xl italic font-bold font-inter'>Pictures</h5>
              <h4 className='text-[#1A1A1A] text-[40px] font-extrabold font-inter max-large:text-3xl max-med:text-2xl max-small:text-base'>Pick a Plan that is right for You</h4>
              <p className='text-[#606060] text-xl font-semibold font-roboto max-med:text-base max-small:text-xs'>Elevating Oral Health Awareness</p>
            </div>
          </div>
          <div className='w-full flex justify-between dental-camp'>
            <Swiper
              loop={true}
              modules={[Pagination, Autoplay]}
              slidesPerView={3}
              onSwiper={(swiper) => {
                swiperRef4.current = swiper;
              }}
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
              className='w-full'
            >
              <div className="min-h-screen flex items-end justify-center gap-9 w-full">
                <SwiperSlide>
                  <ChoosePlanCompo title='BASIC' amount='1000' isSelected={selectedPlan === 1} onSelect={() => handleSelectPlan(1)} />
                </SwiperSlide>
                <SwiperSlide>
                  <ChoosePlanCompo title='ADVANCED' amount='2000' isSelected={selectedPlan === 2} onSelect={() => handleSelectPlan(2)} />
                </SwiperSlide>
                <SwiperSlide>
                  <ChoosePlanCompo title='PROFESSIONAL' amount='3000' isSelected={selectedPlan === 3} onSelect={() => handleSelectPlan(3)} />
                </SwiperSlide>
              </div>
            </Swiper>
          </div>
        </section>

        <section className=' my-24 max-med:my-16'>
          <div className='flex justify-between mb-12 max-w-[1240px] mx-auto w-full px-5 max-sm:mb-4'>
            <div className='flex flex-col items-start gap-2 max-med:items-center w-full'>
              <h5 className='text-[#95C22B] text-xl italic font-bold font-inter max-med:text-base max-small:text-sm'>Why Dental Camps?</h5>
              <h4 className='text-[#1A1A1A] text-[40px] font-extrabold font-inter max-large:text-3xl max-med:text-2xl max-small:text-base max-med:text-center'>Why Dental Camps are Important</h4>
            </div>
          </div>
          <div className='flex gap-12 items-center overflow-hidden overflow-y-visible max-sm:gap-8 max-small:gap-2'>
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

        <section className='w-full max-w-[1240px] mx-auto px-3'>
          <div className='bg-[#95C22B] rounded-3xl flex items-start justify-center gap-20 h-full max-large:gap-8 max-med:flex-col max-med:gap-5 px-5 py-14 max-med:py-6'>
            <div className='w-[327px] h-[234px] flex flex-col max-med:h-fit max-med:w-full'>
              <p className='text-[#FFFFFF] text-base font-semibold font-inter max-med:text-sm mb-2'>TESTIMONIALS</p>
              <h3 className='text-[#FFFFFF] text-4xl font-bold font-inter leading-[48px] max-large:text-3xl max-med:text-xl w-[85%] max-large:w-full'>The Honest Review From Our Dentists</h3>
              <p className='text-[#FFFFFF] text-base font-medium font-inter max-large:text-sm w-[85%]'>See what our dentists are saying about their experiences of our service</p>
            </div>
            <div className=' h-[320px] w-1 max-med:h-1 max-med:w-full bg-[#FFFFFF]'></div>
            <div className='max-w-[500px] w-full max-large:max-w-[430px]'>
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
                >
                  <SwiperSlide>
                    <p className='text-[#FFFFFF] text-2xl font-bold font-inter mb-16 max-large:text-base max-med:text-sm max-med:font-normal max-med:mb-10'>I joined De9to with the aim of promoting oral health awareness, benefiting from their free registration. My experience has been excellent, resulting in revenue exceeding 2.5 lac</p>
                    <div className="profile flex gap-3">
                      <img src={ProfileImg} alt="" />
                      <div className=' flex flex-col items-start justify-start'>
                        <ReactStars edit={false} count={5} value={4} color2='#FFD400' />
                        <h5 className="text-[#FFFFFF] text-xl font-bold font-inter max-med:text-base">Dr. Jonathan Vallem</h5>
                        <p className="text-[#FFFFFF] text-sm font-medium font-inter max-med:text-xs">New york, USA</p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <p className='text-[#FFFFFF] text-2xl font-bold font-inter mb-16 max-large:text-base max-med:text-sm max-med:font-normal max-med:mb-10'>I joined De9to with the aim of promoting oral health awareness, benefiting from their free registration. My experience has been excellent, resulting in revenue exceeding 2.5 lac</p>
                    <div className="profile flex gap-3">
                      <img src={ProfileImg} alt="" />
                      <div className=' flex flex-col items-start justify-start'>
                        <ReactStars edit={false} count={5} value={4} color2='#FFD400' />
                        <h5 className="text-[#FFFFFF] text-xl font-bold font-inter max-med:text-base">Dr. Jonathan Vallem</h5>
                        <p className="text-[#FFFFFF] text-sm font-medium font-inter max-med:text-xs">New york, USA</p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <p className='text-[#FFFFFF] text-2xl font-bold font-inter mb-16 max-large:text-base max-med:text-sm max-med:font-normal max-med:mb-10'>I joined De9to with the aim of promoting oral health awareness, benefiting from their free registration. My experience has been excellent, resulting in revenue exceeding 2.5 lac</p>
                    <div className="profile flex gap-3">
                      <img src={ProfileImg} alt="" />
                      <div className=' flex flex-col items-start justify-start'>
                        <ReactStars edit={false} count={5} value={4} color2='#FFD400' />
                        <h5 className="text-[#FFFFFF] text-xl font-bold font-inter max-med:text-base">Dr. Jonathan Vallem</h5>
                        <p className="text-[#FFFFFF] text-sm font-medium font-inter max-med:text-xs">New york, USA</p>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
                <div className='flex justify-center items-end gap-4 max-med:hidden'>
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

        <section className='max-w-[1240px] mx-auto my-24 px-5 max-med:my-16'>
          <div className="relative w-full ">
            <div className="">
              <div className='w-full flex justify-between items-center mb-12'>
                <div className='flex flex-col gap-[15px]'>
                  <p className='text-[#95C22B] text-xl font-bold font-inter max-sm:text-center max-sm:text-sm'>Our  Best Practices</p>
                  <h2 className='text-[#000A2D] max-w-[900px] text-[40px] font-bold font-inter max-md:text-[30px] max-sm:text-xl max-sm:text-center'>
                    Our Dental Camp Organized In Association With Sharp NGO
                  </h2>
                </div>
                <div className='flex items-center gap-5 max-sm:hidden'>
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
                  breakpoints={
                    {
                      0: {
                        slidesPerView: 1
                      },
                      600: {
                        slidesPerView: 2
                      }
                    }
                  }
                  modules={[Pagination, Navigation, Autoplay]}
                  onSwiper={(swiper) => {
                    swiperRef3.current = swiper;
                  }}
                  autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                  }}
                  className="mySwiper h-[420px] dental-camp"
                >
                  <SwiperSlide className='rounded-2xl overflow-hidden h-full w-full'>
                    <ReactPlayer url="https://www.youtube.com/embed/mOFoh9FUR8w?si=4dveYjVDszEuxwQL" playing={true} onPlay={false} controls={true} />
                  </SwiperSlide>
                  <SwiperSlide className='rounded-2xl overflow-hidden h-full w-full'>
                    <ReactPlayer url="https://www.youtube.com/embed/mOFoh9FUR8w?si=4dveYjVDszEuxwQL" playing={true} onPlay={false} controls={true} />
                  </SwiperSlide>
                  <SwiperSlide className='rounded-2xl overflow-hidden h-full w-full'>
                    <ReactPlayer url="https://www.youtube.com/embed/mOFoh9FUR8w?si=4dveYjVDszEuxwQL" playing={true} onPlay={false} controls={true} />
                  </SwiperSlide>
                  <SwiperSlide className='rounded-2xl overflow-hidden h-full w-full'>
                    <ReactPlayer url="https://www.youtube.com/embed/mOFoh9FUR8w?si=4dveYjVDszEuxwQL" playing={true} onPlay={false} controls={true} />
                  </SwiperSlide>
                  <SwiperSlide className='rounded-2xl overflow-hidden h-full w-full'>
                    <ReactPlayer url="https://www.youtube.com/embed/mOFoh9FUR8w?si=4dveYjVDszEuxwQL" playing={true} onPlay={false} controls={true} />
                  </SwiperSlide>
                  <SwiperSlide className='rounded-2xl overflow-hidden h-full w-full'>
                    <ReactPlayer url="https://www.youtube.com/embed/mOFoh9FUR8w?si=4dveYjVDszEuxwQL" playing={true} onPlay={false} controls={true} />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </section>
        <section className=" flex flex-col items-center gap-10 w-full max-w-[1240px] mx-auto my-28 px-5 max-med:my-16">
          <div className='flex flex-col items-center'>
            <span className='text-[#95C22B] text-xl text-center italic font-bold font-inter max-md:text-base max-sm:text-sm'>Our Contributors</span>
            <h3 className='text-[#000000] text-[40px] text-center font-bold font-inter max-md:text-[30px] max-sm:text-xl'>Our Collaborators</h3>
          </div>
          <div className='flex max-w-[1000px] max-sm:max-w-[450px] gap-5 justify-between w-full max-small:gap-[14px]'>
            <img src={OurCollaboratorImg1} alt="" className='max-md:w-[130px] max-md:h-[130px] max-sm:w-[60px] max-sm:h-[60px] max-[425px]:w-[60px] max-[425px]:h-[60px]' />
            <img src={OurCollaboratorImg2} alt="" className='max-md:w-[130px] max-md:h-[130px] max-sm:w-[60px] max-sm:h-[60px] max-[425px]:w-[60px] max-[425px]:h-[60px]' />
            <img src={OurCollaboratorImg3} alt="" className='max-md:w-[130px] max-md:h-[130px] max-sm:w-[60px] max-sm:h-[60px] max-[425px]:w-[60px] max-[425px]:h-[60px]' />
            <img src={OurCollaboratorImg4} alt="" className='max-md:w-[130px] max-md:h-[130px] max-sm:w-[60px] max-sm:h-[60px] max-[425px]:w-[60px] max-[425px]:h-[60px]' />
          </div>
        </section>
      </main>
    </Layout>
  )
}

export default DentalCamp
