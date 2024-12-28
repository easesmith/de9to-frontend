import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { DentistRegisterSchema, DentistRegisterSchema1, RegisterSchema } from '@/schema/formSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash, FaUnlockAlt, FaUser } from 'react-icons/fa';
import { MdCall } from 'react-icons/md';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
// import OtpComp from './OtpComp';
import usePostApiReq from '@/hooks/usePostApiReq';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const Registercomp = ({ setIsShowTabs, setSelected }) => {
    const [isOtpSectionOpen, setIsOtpSectionOpen] = useState(false);
    const [isShowPassword, setIsShowPassword] = useState(false);
    const navigate = useNavigate();

    const form = useForm({
        resolver: zodResolver(isOtpSectionOpen ? DentistRegisterSchema1 : DentistRegisterSchema),
        defaultValues: {
            category: "",
            firstName: "",
            lastName: "",
            phone: "",
            password: "",
            otp: "",
            getUpdates: false,
        },
    });

    const { res, fetchData, isLoading } = usePostApiReq();
    const { res: res1, fetchData: fetchData1, isLoading: isLoading1 } = usePostApiReq();
    const { reset, handleSubmit, getValues, watch, control } = form;


    const onSubmit = (data) => {
        console.log("Data:", data);
        if (isOtpSectionOpen) {
            fetchData1(`/dentist/verify-otp`, { ...data, Firstname: data.firstName });
        }
        else {
            fetchData(`/dentist/get-otp`, { phone: data.phone });
        }
        // reset();
    };

    useEffect(() => {
        if (res?.status === 200 || res?.status === 201) {
            console.log("otp res", res);
            setIsShowTabs(false);
            setIsOtpSectionOpen(!isOtpSectionOpen);
        }
    }, [res])

    useEffect(() => {
        if (res1?.status === 200 || res1?.status === 201) {
            console.log("submit res", res1);
            setIsShowTabs(false);
            setIsOtpSectionOpen(!isOtpSectionOpen);
            localStorage.setItem("dentistId", res1?.data?.newDentist?._id);
            if (isOtpSectionOpen) {
                navigate("/dentist/application")
            }
        }
    }, [res1])

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
                            control={control}
                            name="category"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className={`text-[#111928] text-sm font-medium font-barlow`}></FormLabel>
                                    <Select onValueChange={field.onChange} value={field.value}>
                                        <FormControl>
                                            <SelectTrigger className="text-[#6B7280]">
                                                <SelectValue placeholder="Select Category" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectItem value="main-dentist">Main Dentist</SelectItem>
                                                <SelectItem value="visiting-dentist">Visiting Dentist</SelectItem>
                                                <SelectItem value="associate-dentist">Associate Dentist</SelectItem>
                                                <SelectItem value="enterprise-owner">Enterprise Owner</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <div className='grid grid-cols-2 gap-4'>
                            <FormField
                                control={control}
                                name="firstName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className={`text-[#111928] text-sm font-medium font-barlow`}></FormLabel>
                                        <div className="relative mt-1">
                                            <FormControl>
                                                <Input type="text" placeholder="Enter First Name" className={`text-[#6B7280] text-sm font-normal font-barlow`} {...field} />
                                            </FormControl>
                                            {/* <button
                                                type="button"
                                                className="absolute inset-y-0 right-0 flex items-center pr-3 text-[#6B7280] hover:text-gray-600"
                                                onClick={() => setValue("firstName", "")}
                                            >
                                                &times;
                                            </button> */}
                                        </div>
                                        {/* <FormDescription /> */}
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={control}
                                name="lastName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className={`text-[#111928] text-sm font-medium font-barlow`}></FormLabel>
                                        <div className="relative mt-1">
                                            <FormControl>
                                                <Input type="text" placeholder="Enter Last Name" className={`text-[#6B7280] text-sm font-normal font-barlow`} {...field} />
                                            </FormControl>
                                            {/* <button
                                                type="button"
                                                className="absolute inset-y-0 right-0 flex items-center pr-3 text-[#6B7280] hover:text-gray-600"
                                                onClick={() => setValue("lastName", "")}
                                            >
                                                &times;
                                            </button> */}
                                        </div>
                                        {/* <FormDescription /> */}
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <FormField
                            control={control}
                            name="phone"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="font-inter text-base text-[#717171] font-normal"></FormLabel>
                                    <FormControl>
                                        <div className='gap-3 items-center grid md:grid-cols-[10%_88%] grid-cols-[15%_83%]'>
                                            <div className="border rounded-md h-10 flex items-center text-[#6B7280] px-3">+91</div>
                                            <div className='relative'>
                                                <MdCall className='absolute left-3 top-1/2 -translate-y-1/2 text-[#717171]' />
                                                <Input placeholder="Mobile Number" className="placeholder:text-[#717171] w-full pl-10 border-[#E4E6EE]" {...field} />
                                            </div>
                                        </div>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className={`text-[#111928] text-sm font-medium font-barlow`}></FormLabel>
                                    <div className='relative'>
                                        <Input type={isShowPassword ? "text" : "password"} className="pr-8" placeholder="Enter password" {...field} />
                                        {isShowPassword ?
                                            <FaEyeSlash onClick={() => setIsShowPassword(false)} className='absolute text-gray-600 right-3 bottom-[9px] cursor-pointer text-lg' />
                                            : <FaEye onClick={() => setIsShowPassword(true)} className='absolute text-gray-600 right-3 bottom-[9px] cursor-pointer text-lg' />
                                        }
                                    </div>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        {isOtpSectionOpen &&
                            <FormField
                                control={control}
                                name="otp"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="font-inter text-base text-[#717171] font-normal"></FormLabel>
                                        <FormControl>
                                            <Input type="number" placeholder="Otp" className="placeholder:text-[#717171] border-[#E4E6EE]" {...field} />
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
                        {isOtpSectionOpen ? "Submit" : "Send OTP"}
                    </Button>
                </form>
            </Form>
        </div>
    )
}

export default Registercomp