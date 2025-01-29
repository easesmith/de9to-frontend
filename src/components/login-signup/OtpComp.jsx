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
import usePostApiReq from '@/hooks/usePostApiReq';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const OtpComp = ({ phone, getOtp, setIsOtpSectionOpen, setSelected = () => { }, setIsShowTabs, login = true, apiData }) => {
    const [timeLeft, setTimeLeft] = useState(60);
    const navigate = useNavigate();

    useEffect(() => {
        if (timeLeft > 0) {
            const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
            return () => clearTimeout(timer);
        }
    }, [timeLeft]);

    const handleResendOtp = () => {
        setTimeLeft(60);
        if (login) {
            getOtp({ emailOrPhone: phone })
        }
        else {
            getOtp({ phone })
        }
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
    const { res, fetchData, isLoading } = usePostApiReq();
    const { reset, handleSubmit, getValues, watch } = form;


    const onSubmit = (data) => {
        console.log("Data:", data);
        if (login) {
            fetchData(`/patient/patient-login`, { loginInput: apiData.emailOrPhone, password: apiData.password, otp: data.otp });
        }
        else {
            fetchData(`/patient/patient-signup`, { ...apiData, otp: data.otp });
        }
        // reset();
    };

    useEffect(() => {
        if (res?.status === 200 || res?.status === 201) {
            console.log("patient register res", res);
            setIsShowTabs(false);
            setIsOtpSectionOpen(true);
            if (login) {
                const { userInfo } = res?.data?.cookies || {}
                Cookies.set("userInfo", JSON.stringify(userInfo), { expires: 7 });
                navigate("/")
            }
            else {
                setSelected("login")
            }
        }
    }, [res])

    return (
        <div className='flex flex-col justify-center items-center h-[77vh]'>
            <div className='shadow-[0px_0px_20px_#0000001F] p-4 rounded-md w-full sm:w-[70%]'>
                <h2 className='text-[#1A1A1A] text-2xl max-[500px]:text-base font-inter font-semibold'>Enter OTP</h2>
                <p className='font-inter mt-10 max-[500px]:mt-5'>Enter the OTP sent to <b>{phone}</b></p>

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
                                        </InputOTP>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <div className="flex justify-between mt-5 w-full">
                            {timeLeft === 0 ?
                                <button className='font-inter max-[500px]:text-xs text-sm text-[#717171]' onClick={handleResendOtp}>Resend Otp</button>
                                : <div className='font-inter max-[500px]:text-xs text-sm text-[#717171]'>Next OTP after {Math.floor(timeLeft / 60)}:{String(timeLeft % 60).padStart(2, '0')} secs</div>}
                            <button type='button' onClick={handleOpenClose} className='font-inter max-[500px]:text-xs text-sm text-[#717171] flex items-center gap-1'>
                                <BiSolidPencil />
                                Edit Number
                            </button>
                        </div>

                        <Button type="submit" className="bg-[#95C22B] mt-6 flex justify-between w-full h-12">
                            <span>{login ? "Login to my Account" : "Register Account"}</span>
                            <FaArrowRight className='text-white' />
                        </Button>
                    </form>
                </Form>

            </div>
        </div>
    )
}

export default OtpComp