import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot
} from "@/components/ui/input-otp";
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useState } from "react";
import { useForm } from 'react-hook-form';
import { BiSolidPencil } from "react-icons/bi";
import { FaArrowRight } from "react-icons/fa";
import { Button } from "../ui/button";
import { OtpSchema } from '@/schema/formSchema';

const OtpComp = ({ phone, setIsOtpSectionOpen, setIsShowTabs }) => {
    const [timeLeft, setTimeLeft] = useState(60);

    useEffect(() => {
        if (timeLeft > 0) {
            const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
            return () => clearTimeout(timer);
        }
    }, [timeLeft]);

    const handleResendOtp = () => {
        setTimeLeft(60);
    };

    const handleOpenClose = () => {
        setIsShowTabs(true);
        setIsOtpSectionOpen(false);
    }


    const form = useForm({
        resolver: zodResolver(OtpSchema),
        defaultValues: {
            otp: "",
        },
    });

    const { reset, handleSubmit, getValues, watch } = form;

    const onSubmit = (data) => {
        console.log("Data:", data);
        // reset();
    };

    return (
        <div className='flex flex-col justify-center items-center h-[77vh]'>
            <div className='shadow-[0px_0px_20px_#0000001F] p-4 rounded-md w-[70%]'>
                <h2 className='text-[#1A1A1A] text-2xl font-inter font-semibold'>Enter OTP</h2>
                <p className='font-inter mt-10'>Enter the OTP sent to <b>{phone}</b></p>

                <Form {...form}>
                    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-start gap-4 w-full'>
                        <FormField
                            control={form.control}
                            name="otp"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="font-inter text-base text-[#717171] font-normal"></FormLabel>
                                    <FormControl>
                                        <InputOTP
                                            value={field.value}
                                            onChange={field.onChange}
                                            containerClassName="mt-4"
                                            maxLength={6}
                                        >
                                            <InputOTPGroup>
                                                <InputOTPSlot index={0} />
                                            </InputOTPGroup>
                                            <InputOTPGroup>
                                                <InputOTPSlot index={1} />
                                            </InputOTPGroup>
                                            <InputOTPGroup>
                                                <InputOTPSlot index={2} />
                                            </InputOTPGroup>
                                            <InputOTPGroup>
                                                <InputOTPSlot index={3} />
                                            </InputOTPGroup>
                                            <InputOTPGroup>
                                                <InputOTPSlot index={4} />
                                            </InputOTPGroup>
                                            <InputOTPGroup>
                                                <InputOTPSlot index={5} />
                                            </InputOTPGroup>
                                        </InputOTP>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <div className="flex justify-between mt-5 w-full">
                            <div className='font-inter text-sm text-[#717171]'>Next OTP after {Math.floor(timeLeft / 60)}:{String(timeLeft % 60).padStart(2, '0')} secs</div>
                            <button type='button' onClick={handleOpenClose} className='font-inter text-sm text-[#717171] flex items-center gap-1'>
                                <BiSolidPencil />
                                Edit Number
                            </button>
                        </div>

                        <Button type="submit" className="bg-[#95C22B] mt-6 flex justify-between w-full h-12">
                            <span>Login to my Account</span>
                            <FaArrowRight className='text-white' />
                        </Button>
                    </form>
                </Form>

            </div>
        </div>
    )
}

export default OtpComp