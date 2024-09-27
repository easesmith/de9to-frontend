import React from 'react'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { LoginSchema, LoginSchema1 } from '@/schema/formSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaArrowRight, FaUnlockAlt, FaUser } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { Button } from '../ui/button';
import { Checkbox } from '../ui/checkbox';
import { Input } from '../ui/input';
import OtpComp from './OtpComp';

const Registercomp = ({ setIsShowTabs }) => {
    const [isPasswordShow, setIsPasswordShow] = useState(false);
    const [isLoginwithOtp, setIsLoginwithOtp] = useState(false);
    const [isOtpSectionOpen, setIsOtpSectionOpen] = useState(false);

    const form = useForm({
        resolver: zodResolver(isLoginwithOtp ? LoginSchema1 : LoginSchema),
        defaultValues: {
            name: "",
            phone: "",
            password: "",
            getUpdates: false,
        },
    });

    const { reset, handleSubmit, getValues, watch } = form;

    const loginWithOtp = watch("loginWithOtp");

    useEffect(() => {
        setIsLoginwithOtp(loginWithOtp);
    }, [loginWithOtp]);

    const onSubmit = (data) => {
        console.log("Data:", data);
        if (isLoginwithOtp) {
            setIsShowTabs(false);
            setIsOtpSectionOpen(true);
        }
        // reset();
    };

    return (
        <div>
            <h1 className='text-[#1A1A1A] font-inter text-2xl font-semibold mt-8'>Join De9to</h1>
            <div className="flex justify-between items-center">
                <p className='font-inter text-[#717171] font-normal mt-1 uppercase'>Your problems, our solutions</p>
                <div>
                    <p className='text-xs text-[#717171] font-inter leading-[8px]'>Are You a Dentist?</p>
                    <button className='text-xs text-[#1A1A1A] font-semibold font-inter'>REGISTER HERE</button>
                </div>
            </div>
            <Form {...form}>
                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-start gap-4 w-full'>
                    <div className="w-full flex flex-col gap-4 mt-4">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="font-inter text-base text-[#717171] font-normal"></FormLabel>
                                    <FormControl>
                                        <div className='relative'>
                                            <FaUser className='absolute left-3 top-1/2 -translate-y-1/2 text-[#717171]' />
                                            <Input placeholder="Enter Full Name" className="placeholder:text-[#717171] pl-10 h-12 border-[#E4E6EE]" {...field} />
                                        </div>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="font-inter text-base text-[#717171] font-normal"></FormLabel>
                                    <FormControl>
                                        <div className='relative'>
                                            <FaUser className='absolute left-3 top-1/2 -translate-y-1/2 text-[#717171]' />
                                            <Input placeholder="Enter Full Name" className="placeholder:text-[#717171] pl-10 h-12 border-[#E4E6EE]" {...field} />
                                        </div>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        {!getValues("loginWithOtp") && <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="font-inter text-base text-[#717171] font-normal"></FormLabel>
                                    <FormControl>
                                        <div className='relative'>
                                            <FaUnlockAlt className='absolute left-3 top-1/2 -translate-y-1/2 text-[#717171]' />
                                            <Input type={isPasswordShow ? "text" : "password"} placeholder="Create Password" className="placeholder:text-[#717171] pl-10 pr-12 h-12 border-[#E4E6EE]" {...field} />
                                            <button onClick={() => setIsPasswordShow(!isPasswordShow)} className='absolute right-3 top-1/2 -translate-y-1/2 text-[#717171] text-xs'>{isPasswordShow ? "Hide" : "Show"}</button>
                                        </div>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />}
                    </div>
                    <div className="w-full flex flex-col gap-2">
                        <FormField
                            control={form.control}
                            name="getUpdates"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="font-inter text-base text-[#717171] font-normal"></FormLabel>
                                    <FormControl>
                                        <div className="flex items-center space-x-2">
                                            <Checkbox
                                                onCheckedChange={field.onChange}
                                                checked={field.value}
                                                id="getUpdates"
                                            />

                                            <label
                                                htmlFor="getUpdates"
                                                className="text-sm text-[#717171] font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                            >
                                                Receive relevant offers & promos from De9to
                                            </label>
                                        </div>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <Button type="submit" className="bg-[#95C22B] mt-4 flex justify-center w-full h-12">
                        Send OTP
                    </Button>
                </form>
            </Form>
        </div>
    )
}

export default Registercomp