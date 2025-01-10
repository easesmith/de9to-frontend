import ProfileLayout from '@/component/Layout/ProfileLayout';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { ProfileSchema } from '@/schema/formSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { format } from "date-fns";
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaCalendar, FaUser } from 'react-icons/fa';
import { MdCall, MdMail } from 'react-icons/md';

import { Calendar } from "@/components/ui/calendar";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { updatePreview } from '@/utils/updatePreview';
import usePatchApiReq from '@/hooks/usePatchApiReq';
import { readCookie } from '@/utils/readCookie';
import toast from 'react-hot-toast';
import useGetApiReq from '@/hooks/useGetApiReq';

const UpdateProfile = () => {
    const [isMobileEdit, setIsMobileEdit] = useState(false);
    const { res, fetchData, isLoading } = usePatchApiReq();
    const { res: profileRes, fetchData: fetchProfileData, isLoading: isProfileLoading } = useGetApiReq();
    const userInfo = readCookie("userInfo");

    const form = useForm({
        resolver: zodResolver(ProfileSchema),
        defaultValues: {
            name: "",
            profileImg: "",
            profileImgPreview: "",
            mobile: "",
            email: "",
            gender: "",
            dateOfBirth: "",
            address: "",
            area: "",
            city: "",
            state: "",
            country: "",
            pincode: "",
        },
    });

    
    
    const { reset, handleSubmit, getValues, watch, register, setValue } = form;
    console.log("getValues",getValues());

    const profileImgRef = register("profileImg");

    const profileImg = watch("profileImg");

    useEffect(() => {
        updatePreview(profileImg, "profileImgPreview", setValue);
    }, [form, profileImg, setValue]);


    const onSubmit = (data) => {
        console.log("Data:", data);
        const formData = new FormData();

        formData.append("profileImage", data.profileImg[0])
        formData.append("name", data.name)
        formData.append("email", data.email)
        formData.append("pincode", data.pincode)
        formData.append("city", data.city)
        formData.append("state", data.state)
        formData.append("gender", data.gender)
        formData.append("mobile", data.mobile)
        formData.append("address", data.address)
        formData.append("area", data.area)
        formData.append("dob", data.dateOfBirth)
        formData.append("country", data.country)
        formData.append("patientId", userInfo?.userId)
        fetchData(`/patient/update-patient`, formData);
    };
+
    useEffect(() => {
        if (res?.status === 200 || res?.status === 201) {
            console.log("patient profile res", res);
            toast.success("Patient profile updated successfully");
        }
    }, [res])

    const getPatientProfile = () => {
        fetchProfileData(`/patient/get-patient-details?patientId=${userInfo?.userId}`);
    }

    useEffect(() => {
        getPatientProfile();
    }, [])

    useEffect(() => {
        if (profileRes?.status === 200 || profileRes?.status === 201) {
            console.log("patient profile get res", profileRes);
            const { foundPatient } = profileRes?.data;

            setValue("name", foundPatient.name);
            // setValue("profileImg", foundPatient.profileImage);
            setValue("profileImgPreview", foundPatient?.profileImage && foundPatient.profileImage);
            setValue("mobile", foundPatient.phone);
            setValue("email", foundPatient.email);
            setValue("gender", foundPatient.gender);
            setValue("dateOfBirth", foundPatient?.dob ? new Date(foundPatient?.dob): new Date());
            setValue("address", foundPatient.address);
            setValue("area", foundPatient.area);
            setValue("city", foundPatient.city);
            setValue("state", foundPatient.state);
            setValue("country", foundPatient.country);
            setValue("pincode", foundPatient.pincode);
        }
    }, [profileRes])

    return (
        <ProfileLayout>
            <div>
                <h1 className='font-inter text-2xl font-medium text-[#00214B]'>Your Profile</h1>
                <div>
                    <Form {...form}>
                        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-start gap-4 w-full mt-5'>
                            <div className='flex flex-col gap-5 w-full h-full'>
                                <div className="grid grid-cols-3 max-[900px]:grid-cols-2 max-sm:grid-cols-1 w-full h-full gap-5">
                                    <div className="">
                                        <FormField
                                            control={form.control}
                                            name="profileImg"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <div className='flex gap-3 items-center'>
                                                        <div className='w-[100px]  h-[100px] rounded-full flex justify-center items-center overflow-hidden bg-white'>
                                                            {watch("profileImgPreview") ?
                                                                <img src={watch("profileImgPreview")} alt="profileImg" />
                                                                : <FaUser className='text-6xl text-[#717171]' />
                                                            }
                                                        </div>
                                                        <div>
                                                            <p className='text-sm w-40 text-[#717171] font-inter'>Browse your profile photo from your device</p>
                                                            <FormLabel className='rounded-[6px] cursor-pointer border-[1px] border-[#95C22B] h-7 w-20 px-2 flex items-center justify-center mt-3 gap-[6px] bg-white'>
                                                                <span className='text-[#95C22B] text-xs font-medium font-inter'>Add Photo</span>
                                                            </FormLabel>
                                                        </div>
                                                    </div>
                                                    <FormControl>
                                                        <Input type="file" className="placeholder:text-[#717171] hidden h-12 border-[#E4E6EE]" {...profileImgRef} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                    <div className="">
                                        <FormField
                                            control={form.control}
                                            name="name"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="font-inter text-base text-[#717171] font-normal">Name<span className='text-red-500'>*</span></FormLabel>
                                                    <FormControl>
                                                        <div className='relative'>
                                                            <FaUser className='absolute left-3 top-1/2 -translate-y-1/2 text-[#717171]' />
                                                            <Input placeholder="Full Name" className="placeholder:text-[#717171] pl-10 h-12 border-[#E4E6EE]" {...field} />
                                                        </div>
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-3 max-[900px]:grid-cols-2 max-sm:grid-cols-1 w-full gap-5">
                                    <div className="">
                                        <FormField
                                            control={form.control}
                                            name="mobile"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <div className="flex justify-between items-center w-full">
                                                        <FormLabel className="font-inter text-base text-[#717171] font-normal">Mobile<span className='text-red-500'>*</span></FormLabel>
                                                        <button type='button' onClick={() => setIsMobileEdit(true)} className='rounded-[6px] border-[1px] border-[#95C22B] h-6 px-2 flex items-center gap-[6px]'>
                                                            <span className='text-[#95C22B] text-xs font-medium font-inter'>Edit</span>
                                                        </button>
                                                    </div>
                                                    <FormControl>
                                                        <div className='relative'>
                                                            <MdCall className={`absolute z-10 left-3 top-1/2 -translate-y-1/2 ${isMobileEdit ? "text-[#717171]" : "text-white"}`} />
                                                            <Input disabled={!isMobileEdit} type="number" placeholder="Enter Your Mobile Number" className="placeholder:text-[#FFFFFF] disabled:text-white text-black disabled:bg-[#717171B2] pl-10 h-12 border-[#E4E6EE]" {...field} />
                                                        </div>
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                    <div className="">
                                        <FormField
                                            control={form.control}
                                            name="email"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <div className="flex justify-between items-center w-full">
                                                        <FormLabel className="font-inter text-base text-[#717171] font-normal">Email</FormLabel>
                                                        {/* <button type='button' onClick={() => setIsMobileEdit(true)} className='rounded-[6px] border-[1px] border-[#95C22B] h-7 px-2 flex items-center gap-[6px]'>
                                                            <span className='text-[#95C22B] text-xs font-medium font-inter'>Add</span>
                                                        </button> */}
                                                    </div>
                                                    <FormControl>
                                                        <div className='relative'>
                                                            <MdMail className='absolute left-3 top-1/2 -translate-y-1/2 text-[#717171]' />
                                                            <Input type="email" placeholder="Enter Your Email" className="placeholder:text-[#717171] pl-10 h-12 border-[#E4E6EE]" {...field} />
                                                        </div>
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                    <div className="">
                                        <FormField
                                            control={form.control}
                                            name="gender"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="font-inter text-base text-[#717171] font-normal">Gender</FormLabel>
                                                    <FormControl>
                                                        <Select value={field.value} onValueChange={field.onChange}>
                                                            <SelectTrigger className="w-full h-12 text-[#717171]">
                                                                <SelectValue placeholder="Select an option" />
                                                            </SelectTrigger>
                                                            <SelectContent className="text-[#717171]">
                                                                <SelectItem value="Male">Male</SelectItem>
                                                                <SelectItem value="Female">Female</SelectItem>
                                                                <SelectItem value="Other">Other</SelectItem>
                                                            </SelectContent>
                                                        </Select>
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                    <div className="">
                                        <FormField
                                            control={form.control}
                                            name="dateOfBirth"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="font-inter text-base text-[#717171] font-normal">Date of Birth</FormLabel>
                                                    <FormControl>
                                                        <Popover>
                                                            <PopoverTrigger asChild>
                                                                <FormControl>
                                                                    <Button
                                                                        variant={"outline"}
                                                                        className={cn(
                                                                            "w-full h-12 flex gap-2 justify-start text-[#717171]",
                                                                            !field.value && "text-muted-foreground"
                                                                        )}
                                                                    >
                                                                        <FaCalendar className='text-[#717171]' />
                                                                        {field.value ? (
                                                                            format(field.value, "PPP")
                                                                        ) : (
                                                                            <span>Pick a date</span>
                                                                        )}
                                                                    </Button>
                                                                </FormControl>
                                                            </PopoverTrigger>
                                                            <PopoverContent className="w-auto p-0" align="start">
                                                                <Calendar
                                                                    mode="single"
                                                                    selected={field.value}
                                                                    onSelect={field.onChange}
                                                                    disabled={(date) =>
                                                                        date > new Date() || date < new Date("1900-01-01")
                                                                    }
                                                                    initialFocus
                                                                />
                                                            </PopoverContent>
                                                        </Popover>
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                </div>

                                {/* <div className="grid grid-cols-3 w-full gap-5"> */}
                                    {/* <div className="">
                                        <FormField
                                            control={form.control}
                                            name="dateOfBirth"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="font-inter text-base text-[#717171] font-normal">Date of Birth</FormLabel>
                                                    <FormControl>
                                                        <Popover>
                                                            <PopoverTrigger asChild>
                                                                <FormControl>
                                                                    <Button
                                                                        variant={"outline"}
                                                                        className={cn(
                                                                            "w-full flex gap-2 justify-start text-[#717171]",
                                                                            !field.value && "text-muted-foreground"
                                                                        )}
                                                                    >
                                                                        <FaCalendar className='text-[#717171]' />
                                                                        {field.value ? (
                                                                            format(field.value, "PPP")
                                                                        ) : (
                                                                            <span>Pick a date</span>
                                                                        )}
                                                                    </Button>
                                                                </FormControl>
                                                            </PopoverTrigger>
                                                            <PopoverContent className="w-auto p-0" align="start">
                                                                <Calendar
                                                                    mode="single"
                                                                    selected={field.value}
                                                                    onSelect={field.onChange}
                                                                    disabled={(date) =>
                                                                        date > new Date() || date < new Date("1900-01-01")
                                                                    }
                                                                    initialFocus
                                                                />
                                                            </PopoverContent>
                                                        </Popover>
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div> */}
                                    {/* <div className="">
                                        <FormField
                                            control={form.control}
                                            name="bloodGroup"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="font-inter text-base text-[#717171] font-normal">Blood Group</FormLabel>
                                                    <FormControl>
                                                        <Select value={field.value} onValueChange={field.onChange}>
                                                            <SelectTrigger className="w-full h-12 text-[#717171]">
                                                                <SelectValue placeholder="Select an option" />
                                                            </SelectTrigger>
                                                            <SelectContent className="text-[#717171]">
                                                                <SelectItem value="A+">A+</SelectItem>
                                                                <SelectItem value="A-">A-</SelectItem>
                                                                <SelectItem value="B+">B+</SelectItem>
                                                                <SelectItem value="B-">B-</SelectItem>
                                                                <SelectItem value="AB+">AB+</SelectItem>
                                                                <SelectItem value="AB-">AB-</SelectItem>
                                                                <SelectItem value="O+">O+</SelectItem>
                                                                <SelectItem value="O-">O-</SelectItem>
                                                            </SelectContent>
                                                        </Select>
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div> */}
                                    {/* <div className="">
                                        <FormField
                                            control={form.control}
                                            name="timezone"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="font-inter text-base text-[#717171] font-normal">Timezone</FormLabel>
                                                    <FormControl>
                                                        <Select value={field.value} onValueChange={field.onChange}>
                                                            <SelectTrigger className="w-full h-12 text-[#717171]">
                                                                <SelectValue placeholder="(UTC +5:30) Asia/Kolkata" />
                                                            </SelectTrigger>
                                                            <SelectContent className="text-[#717171]">
                                                                <SelectItem value="(UTC +5:30) Asia/Kolkata">(UTC +5:30) Asia/Kolkata</SelectItem>
                                                            </SelectContent>
                                                        </Select>
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div> */}
                                {/* </div> */}

                                <h2 className='text-xl font-inter font-medium text-[#0D0E0E] mt-5'>Address</h2>

                                <div className="grid grid-cols-3 max-[900px]:grid-cols-2 max-sm:grid-cols-1 w-full gap-5">
                                    <div className="">
                                        <FormField
                                            control={form.control}
                                            name="address"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="font-inter text-base text-[#717171] font-normal">Address</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="Enter Details" className="placeholder:text-[#717171] h-12 border-[#E4E6EE]" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                    <div className="">
                                        <FormField
                                            control={form.control}
                                            name="area"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="font-inter text-base text-[#717171] font-normal">Area</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="Enter Details" className="placeholder:text-[#717171] h-12 border-[#E4E6EE]" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                    <div className="">
                                        <div className="">
                                            <FormField
                                                control={form.control}
                                                name="city"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel className="font-inter text-base text-[#717171] font-normal">City</FormLabel>
                                                        <FormControl>
                                                            <Input placeholder="Enter Details" className="placeholder:text-[#717171] h-12 border-[#E4E6EE]" {...field} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-3 max-[900px]:grid-cols-2 max-sm:grid-cols-1 w-full gap-5">
                                    <div className="">
                                        <FormField
                                            control={form.control}
                                            name="state"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="font-inter text-base text-[#717171] font-normal">State</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="Enter Details" className="placeholder:text-[#717171] h-12 border-[#E4E6EE]" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                    <div className="">
                                        <FormField
                                            control={form.control}
                                            name="country"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="font-inter text-base text-[#717171] font-normal">Country</FormLabel>
                                                    <FormControl>
                                                        <Select value={field.value} onValueChange={field.onChange}>
                                                            <SelectTrigger className="w-full h-12 text-[#717171]">
                                                                <SelectValue placeholder="India" />
                                                            </SelectTrigger>
                                                            <SelectContent className="text-[#717171]">
                                                                <SelectItem value="India">India</SelectItem>
                                                            </SelectContent>
                                                        </Select>
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                    <div className="">
                                        <FormField
                                            control={form.control}
                                            name="pincode"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="font-inter text-base text-[#717171] font-normal">Pincode</FormLabel>
                                                    <FormControl>
                                                        <Input type="number" placeholder="Enter Details" className="placeholder:text-[#717171] h-12 border-[#E4E6EE]" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                </div>

                                {/* <h2 className='text-xl font-inter font-medium text-[#0D0E0E] mt-10'>Other Information</h2> */}

                                {/* <div className="grid grid-cols-3 w-full gap-5">
                                    <div className="">
                                        <FormField
                                            control={form.control}
                                            name="alternateMobileNumber"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="font-inter text-base text-[#717171] font-normal">Alternate Mobile Number</FormLabel>
                                                    <FormControl>
                                                        <div className='relative'>
                                                            <MdCall className='absolute left-3 top-1/2 -translate-y-1/2 text-[#717171]' />
                                                            <Input type="number" placeholder="Enter Your Alternate Mobile Number" className="placeholder:text-[#717171] pl-10 pr-12 h-12 border-[#E4E6EE]" {...field} />
                                                        </div>
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                    <div className="">
                                        <FormField
                                            control={form.control}
                                            name="language"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="font-inter text-base text-[#717171] font-normal">Language</FormLabel>
                                                    <FormControl>
                                                        <Select value={field.value} onValueChange={field.onChange}>
                                                            <SelectTrigger className="w-full h-12 text-[#717171]">
                                                                <SelectValue placeholder="English" />
                                                            </SelectTrigger>
                                                            <SelectContent className="text-[#717171]">
                                                                <SelectItem value="English">English</SelectItem>
                                                                <SelectItem value="Hindi">Hindi</SelectItem>
                                                            </SelectContent>
                                                        </Select>
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                </div> */}

                                <div className="grid grid-cols-3 max-[900px]:grid-cols-2 max-sm:grid-cols-1 w-full gap-5 mt-4">
                                    <div></div>
                                    <div className='max-[900px]:hidden'></div>
                                    <Button type="submit" className="bg-[#95C22B] flex justify-center w-full h-12">
                                        Save changes
                                    </Button>
                                </div>
                            </div>
                        </form>
                    </Form>
                </div>
            </div>
        </ProfileLayout>
    )
}

export default UpdateProfile