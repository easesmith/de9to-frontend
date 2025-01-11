import React, { useEffect, useState } from 'react'
import Layout from '../../component/Layout/Layout'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { contactFormSchema } from '@/schema/formSchema'
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from '@/components/ui/input'
import DoctorImg from '../../assets/excited-young-female-doctor-wearing-medical-robe-stethoscope-around-neck-doing-call-gesture.png'
import { Textarea } from '@/components/ui/textarea'
import { FaLocationDot } from "react-icons/fa6";
import usePostApiReq from '@/hooks/usePostApiReq'
import toast from 'react-hot-toast'
import { Helmet } from 'react-helmet-async'
import useGetApiReq from '@/hooks/useGetApiReq'
import ImageSkeleton from '@/components/ImageSkeleton'


const Contact = () => {

  const form = useForm({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: "",
      contactNumber: "",
      emailId: "",
      location: "",
      pincode: "",
      dentalIssue: ""
    },
  })

  const { res, fetchData, isLoading } = usePostApiReq();
  const { reset, handleSubmit } = form

  const onSubmit = (data) => {
    console.log(data)
    fetchData(`/patient/submit-contact-form`,
      {
        name: data.fullName,
        email: data.emailId,
        phone: data.contactNumber,
        location: data.location,
        pincode: data.pincode,
        dentalIssues: data.dentalIssue
      });
  }

  useEffect(() => {
    if (res?.status === 200 || res?.status === 201) {
      console.log("contact form res", res);
      toast.success(res?.data?.message)
      reset({
        fullName: "",
        contactNumber: "",
        emailId: "",
        location: "",
        pincode: "",
        dentalIssue: ""
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
    fetchData1(`/patient/get-seo?pageName=contact-us`);
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

  const { res: res2, fetchData: fetchData2 } = useGetApiReq()
  const [contentData, setContentData] = useState({
    content: "",
    image: "",
  })

  const getContent = () => {
    fetchData2(`/patient/get-specific-content?pageName=contact-us&sectionName=our-contact`)
  }

  useEffect(() => {
    getContent()
  }, [])

  useEffect(() => {
    if (res2?.status === 200 || res2?.status === 201) {
      console.log("get content api res: ", res2?.data?.foundContent)
      const { images = [], content = [] } = res2?.data?.foundContent;
      setContentData({
        content: content[0]?.resources,
        image: images[0]?.image
      })
    }
  }, [res2])

  return (
    <Layout>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.focusedKeywords} />
      </Helmet>

      <main className='max-w-[1240px] p-4 mx-auto flex flex-col gap-10 max-sm:gap-5 mt-4 mb-2'>
        <section className='flex flex-col justify-center items-center'>
          <h1 className='text-[#95C22B] text-[40px] text-center font-bold font-inter opacity-90 max-lg:text-2xl'>Get in touch</h1>
          <p className='text-[#717171] text-base text-center font-medium font-inter opacity-70 max-lg:text-xs'>{`${contentData.content ? contentData.content : "We're Here to Help Your Smile"}`}</p>
          <div className=' max-w-[1130px] flex justify-between items-start gap-5 shadow-custom rounded-[20px] p-5 max-lg:px-3 my-10 h-full'>
            <div className='w-1/2 max-[768px]:w-full border-[1px] border-[#212121] px-4 pt-5 pb-10 rounded-[10px] max-lg:px-3'>
              <Form {...form}>
                <p className='text-[#A4A4A4] text-base font-normal font-inter mb-5 max-[768px]:text-sm'>Have questions or need assistance? Reach out to us for support, appointments, or any dental care inquiries</p>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-[18px]">
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base font-medium font-inter mb-4 max-[768px]:text-base">Full Name <span className='text-[red]'>*</span></FormLabel>
                        <FormControl>
                          <Input placeholder="Enter full name" {...field}
                            className="h-12 max-[375px]:h-10 text-[#838383] text-base font-normal font-inter border-[1px] border-[#808080] rounded-[10px] px-5 py-[10px] placeholder:text-[#838383]"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className='grid grid-cols-2 gap-[24px] w-full max-lg:grid-cols-1 max-md:grid-cols-2 max-sm:grid-cols-1 max-sm:gap-[18px]'>
                    <FormField
                      control={form.control}
                      name="contactNumber"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-base font-medium font-inter mb-4 max-[768px]:text-base">Contact Number <span className='text-[red]'>*</span></FormLabel>
                          <FormControl>
                            <Input type='number' placeholder="Enter contact number" {...field}
                              className="h-12 max-[375px]:h-10 text-[#838383] text-base font-normal font-inter border-[1px] border-[#808080] rounded-[10px] px-5 py-[10px] placeholder:text-[#838383]"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="emailId"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-base font-medium max-[768px]:text-base font-inter mb-4">Email Id <span className='text-[red]'>*</span></FormLabel>
                          <FormControl>
                            <Input type='email' placeholder="Enter email id" {...field}
                              className="h-12 max-[375px]:h-10 text-[#838383] text-base font-normal font-inter border-[1px] border-[#808080] rounded-[10px] px-5 py-[10px] placeholder:text-[#838383]"
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
                        <FormLabel className="text-base font-medium max-[768px]:text-base font-inter mb-4">Location <span className='text-[red]'>*</span></FormLabel>
                        <div className='relative'>
                          <FormControl>
                            <Input placeholder="Enter your location" {...field}
                              className="h-12 max-[375px]:h-10 text-[#838383] text-base font-normal font-inter border-[1px] border-[#808080] rounded-[10px] px-5 pr-10 py-[10px] placeholder:text-[#838383]"
                            />
                          </FormControl>
                          <FaLocationDot className='text-[#C8C8C8] text-xl absolute top-[28%] right-[4%]' />
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="pincode"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base max-[768px]:text-base font-medium font-inter mb-4">Pincode <span className='text-[red]'>*</span></FormLabel>
                        <FormControl>
                          <Input type='number' placeholder="Enter your pincode" {...field}
                            className="h-12 max-[375px]:h-10 text-[#838383] text-base font-normal font-inter border-[1px] border-[#808080] rounded-[10px] px-5 py-[10px] placeholder:text-[#838383]"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="dentalIssue"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base max-[768px]:text-base font-medium font-inter mb-4">Dental Issue <span className='text-[red]'>*</span></FormLabel>
                        <FormControl>
                          <Textarea placeholder="Write your dental issue..." {...field} id="message-2"
                            className="max-h-20 resize-none max-[768px]:text-base min-h-20 text-[#838383] text-base font-normal font-inter border-[1px] border-[#808080] rounded-[10px] px-5 py-[10px] placeholder:text-[#838383]"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button variant='submit' size='lg' className='h-12 max-[768px]:text-base' type="submit">Submit</Button>
                </form>
              </Form>
            </div>
            <div className='w-1/2 max-[768px]:hidden h-full'>
              <ImageSkeleton
                src={contentData?.image}
                imgClassName={'h-[704px] max-lg:h-[807px] max-[939px]:h-[832px] w-full rounded-[10px]'}
                skeletonClassName={"h-[704px] max-lg:h-[807px] max-[939px]:h-[832px] w-full rounded-[10px]"}
              />
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}

export default Contact
