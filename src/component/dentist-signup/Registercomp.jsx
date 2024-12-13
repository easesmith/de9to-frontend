import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { DentistRegisterSchema, RegisterSchema } from '@/schema/formSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaUnlockAlt, FaUser } from 'react-icons/fa';
import { MdCall } from 'react-icons/md';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
// import OtpComp from './OtpComp';
import usePostApiReq from '@/hooks/usePostApiReq';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Registercomp = ({ setIsShowTabs, setSelected }) => {
    const [isPasswordShow, setIsPasswordShow] = useState(false);
    const [isOtpSectionOpen, setIsOtpSectionOpen] = useState(false);
    const navigate = useNavigate();

    const form = useForm({
        resolver: zodResolver(DentistRegisterSchema),
        defaultValues: {
            name: "",
            phone: "",
            otp: "",
            getUpdates: false,
        },
    });

    const { res, fetchData, isLoading } = usePostApiReq();
    const { reset, handleSubmit, getValues, watch } = form;


    const onSubmit = (data) => {
        console.log("Data:", data);
        // fetchData(`/patient/get-otp`, { phone: data.phone });
        // fetchData(`/patient/patient-signup`, data);
        // reset();
        navigate("/dentist/application")
    };

    useEffect(() => {
        if (res?.status === 200 || res?.status === 201) {
            console.log("otp res", res);
            setIsShowTabs(false);
            setIsOtpSectionOpen(true);
        }
    }, [res])

    return (
        <div>
            <h1 className='text-[#1A1A1A] font-inter text-2xl max-[500px]:text-xl font-semibold mt-8'>Join De9to</h1>
            <div className="flex justify-between items-center">
                <p className='font-inter text-[#717171] font-normal max-[500px]:text-xs mt-1 max-[500px]:break-all uppercase'>Be among 100000+ Dentist</p>
                <div>
                    <p className='text-xs text-[#717171] font-inter max-[500px]:text-xs max-[500px]:leading-3 leading-[8px]'>Not a Dentist?</p>
                    <button onClick={() => navigate("/login")} className='text-xs text-[#1A1A1A] max-[500px]:text-xs max-[500px]:leading-3 font-semibold font-inter'>REGISTER HERE</button>
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
                                            <Input placeholder="Enter Name" className="placeholder:text-[#717171] pl-10 h-12 border-[#E4E6EE]" {...field} />
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
                                        <div className='gap-3 items-center grid md:grid-cols-[10%_88%] grid-cols-[15%_83%]'>
                                            <div className="border rounded-md p-3">+91</div>
                                            <div className='relative'>
                                                <MdCall className='absolute left-3 top-1/2 -translate-y-1/2 text-[#717171]' />
                                                <Input placeholder="Mobile Number" className="placeholder:text-[#717171] w-full pl-10 h-12 border-[#E4E6EE]" {...field} />
                                            </div>
                                        </div>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="otp"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="font-inter text-base text-[#717171] font-normal"></FormLabel>
                                    <FormControl>
                                        <Input type="number" placeholder="Otp" className="placeholder:text-[#717171] h-12 border-[#E4E6EE]" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
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
                                                className="text-sm max-[500px]:text-xs text-[#717171] font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
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