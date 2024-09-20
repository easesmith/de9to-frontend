import React from 'react'
import Layout from '../../component/Layout/Layout'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { contactFormSchema } from '@/schema/formSchema'
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from '@/components/ui/input'
import DoctorImg from '../../assets/excited-young-female-doctor-wearing-medical-robe-stethoscope-around-neck-doing-call-gesture.png'
import { Textarea } from '@/components/ui/textarea'
import { FaArrowLeft } from "react-icons/fa";


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

  const { reset, handleSubmit } = form

  const onSubmit = (data) => {
    console.log(data)
    reset({
      fullName: "",
      contactNumber: "",
      emailId: "",
      location: "",
      pincode: "",
      dentalIssue: ""
    })
  }

  return (
    <Layout>
      <div className='flex items-center gap-4 h-[18px] px-20 my-5'>
      <FaArrowLeft className='text-[#717171]' />
        <span className='text-[#1A1A1A] text-sm font-semibold font-inter'>Contact us</span>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <h1 className='text-[#95C22B] text-5xl text-center font-bold font-inter opacity-90 mb-2'>Get in touch</h1>
        <p className='text-[#717171] text-lg text-center font-medium font-inter opacity-70'>We're Here to Help Your Smile</p>
        <div className=' w-[1130px] flex justify-between items-start gap-5 shadow-custom rounded-[20px] p-5 my-10'>
          <div className='w-1/2 border-[1px] border-[#212121] px-5 pt-5 pb-10 rounded-[10px]'>
            <Form {...form}>
              <p className='text-[#A4A4A4] text-xl font-normal font-inter mb-5'>Have questions or need assistance? Reach out to us for support, appointments, or any dental care inquiries</p>
              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-[18px]">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[] text-xl font-medium font-inter mb-4">Full Name <span className='text-[red]'>*</span></FormLabel>
                      <FormControl>
                        <Input placeholder="Enter full name" {...field}
                          className="h-[60px] text-[#838383] text-base font-normal font-inter border-[1px] border-[#808080] rounded-[10px] px-5 py-[10px] placeholder:text-[#838383]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className='grid grid-cols-2 gap-[30px] w-full'>
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
                <FormField
                  control={form.control}
                  name="pincode"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[] text-xl font-medium font-inter mb-4">Pincode <span className='text-[red]'>*</span></FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your pincode" {...field}
                          className="h-[60px] text-[#838383] text-base font-normal font-inter border-[1px] border-[#808080] rounded-[10px] px-5 py-[10px] placeholder:text-[#838383]"
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
                      <FormLabel className="text-[] text-xl font-medium font-inter mb-4">Dental Issue <span className='text-[red]'>*</span></FormLabel>
                      <FormControl>
                        <Textarea placeholder="Write your dental issue..." {...field} id="message-2"
                          className="h-[110px] text-[#838383] text-base font-normal font-inter border-[1px] border-[#808080] rounded-[10px] px-5 py-[10px] placeholder:text-[#838383]"
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
          <div className='w-1/2 h-full'>
            <img src={DoctorImg} alt="" className='' />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Contact
