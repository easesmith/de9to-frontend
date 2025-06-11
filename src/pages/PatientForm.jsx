import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import useGetApiReq from '@/hooks/useGetApiReq';
import usePostApiReq from '@/hooks/usePostApiReq';
import { cn } from '@/lib/utils';
import { PatientFormSchema } from '@/schema/formSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { format } from 'date-fns';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { MdCalendarMonth } from 'react-icons/md';
import { useNavigate, useParams } from 'react-router-dom';

const PatientForm = () => {
    const { res, fetchData, isLoading, error } = useGetApiReq();

    const [isVerified, setIsVerified] = useState(false);
    const params = useParams();
    const navigate = useNavigate();

    const verify = async () => {
        fetchData(`/patient/verify-dental-camp?dentalCampId=${params.dentalCampId}`);
    }

    useEffect(() => {
        verify();
    }, [])


    useEffect(() => {
        if (res?.status === 200 || res?.status === 201) {
            console.log("patient form is verified response", res);
            setIsVerified(res?.data?.status);
        }
    }, [res])
    console.log("error", error);

    useEffect(() => {
        if (error?.status === 404) {
            setIsVerified(false);
        }
    }, [error])

    const form = useForm({
        resolver: zodResolver(PatientFormSchema),
        defaultValues: {
            name: "",
            mobile: "",
            dob: "",
            gender: "",
            area: "",
            pincode: "",
            dentalIssue: ""
        }
    })

    const { res: res1, fetchData: fetchData1, isLoading: isLoading1 } = usePostApiReq();
    const { reset, handleSubmit, setValue } = form
    const [isCalender, setIsCalender] = useState(false)

    const handleDateSelect = (value) => {
        setValue("dob", value)
        setIsCalender(false)
    }

    console.log("getvalues", form.getValues());

    const onSubmit = (data) => {
        console.log(data)
        fetchData1(`/patient/submit-attending-patient-form`,
            {
                name: data.name,
                gender: data.gender,
                area: data.area,
                dob: data.dob,
                mobile: data.mobile,
                pincode: data.pincode,
                dentalIssue: data.dentalIssue,
                dentalCampId: params.dentalCampId,
                role: "patient",
            });

    }

    useEffect(() => {
        if (res1?.status === 200 || res1?.status === 201) {
            console.log("patient form res", res1);
            toast.success(res1?.data?.message)
            navigate("/")
            reset({
                name: "",
                mobile: "",
                dob: "",
                gender: "",
                area: "",
                pincode: "",
                dentalIssue: ""
            })
        }
    }, [res1])

    // if (isLoading && !isVerified) {
    //     return <Spinner />
    // }

    if (!isLoading && !isVerified) {
        return <div className='w-full h-screen flex justify-center items-center text-2xl'>Page not found</div>
    }

    return (
        <Form {...form}>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 max-w-4xl mx-auto bg-white p-4 shadow-2xl rounded-xl mt-10 max-[950px]:gap-3">
                <h2 className='text-3xl text-center font-medium'>Patient Attending Dental Camp</h2>
                <div className='grid grid-cols-2 gap-4 w-full mt-5 max-md:grid-cols-1 max-small:grid-cols-1 max-[950px]:gap-3'>
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className=" text-base font-medium font-inter mb-4 max-[950px]:text-base max-small:text-sm">Name <span className='text-[red]'>*</span></FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter Name" {...field}
                                        className="h-12 text-[#838383] text-base font-normal font-inter border-[1px] border-[#808080] rounded-[10px] px-5 py-[10px] placeholder:text-[#838383] max-[950px]:px-3 max-[950px]:text-sm max-[950px]:h-[46px] max-[950px]:rounded-lg"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="mobile"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-[] text-base font-medium font-inter mb-4 max-med:text-base max-small:text-sm">Mobile <span className='text-[red]'>*</span></FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter Mobile no" {...field}
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
                        name="dob"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-base font-medium font-inter mb-4 max-[950px]:px-3 max-[950px]:text-sm max-[950px]:h-[46px] max-[950px]:rounded-lg">DOB <span className='text-[red]'>*</span></FormLabel>
                                <div className='relative'>
                                    <FormControl>
                                        <Popover open={isCalender} onOpenChange={setIsCalender}>
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
                                                    onSelect={handleDateSelect}
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
                        name="gender"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-base font-medium font-inter mb-4 max-med:text-base max-small:text-sm">Gender <span className='text-[red]'>*</span></FormLabel>
                                <div className='relative'>
                                    <FormControl>
                                        <Select
                                            {...field}
                                            onValueChange={(e) => {
                                                field.onChange(e);
                                            }}
                                        >
                                            <SelectTrigger className="w-full border-[#808080] text-[#838383] text-base h-12 px-5 max-[950px]:px-3 max-[950px]:text-sm max-[950px]:h-[46px] max-[950px]:rounded-lg">
                                                <SelectValue placeholder="Select Gender" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectGroup>
                                                    <SelectItem value="male">Male</SelectItem>
                                                    <SelectItem value="female">Female</SelectItem>
                                                    <SelectItem value="other">Other</SelectItem>
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
                <div className='grid grid-cols-2 gap-4 w-full max-md:grid-cols-1 max-med:grid-cols-2 max-small:grid-cols-1 max-[950px]:gap-3'>
                    <FormField
                        control={form.control}
                        name="area"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-[] text-base font-medium font-inter mb-4 max-med:text-base max-small:text-sm">Area <span className='text-[red]'>*</span></FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter Area" {...field}
                                        className="h-12 text-[#838383] text-base font-normal font-inter border-[1px] border-[#808080] rounded-[10px] px-5 py-[10px] placeholder:text-[#838383] max-[950px]:px-3 max-[950px]:text-sm max-[950px]:h-[46px] max-[950px]:rounded-lg"
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
                                <FormLabel className="text-[] text-base font-medium font-inter mb-4 max-med:text-base max-small:text-sm">Pincode <span className='text-[red]'>*</span></FormLabel>
                                <FormControl>
                                    <Input type="number" placeholder="Enter Pincode" {...field}
                                        className="h-12 text-[#838383] text-base font-normal font-inter border-[1px] border-[#808080] rounded-[10px] px-5 py-[10px] placeholder:text-[#838383] max-[950px]:px-3 max-[950px]:text-sm max-[950px]:h-[46px] max-[950px]:rounded-lg"
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
                                <FormLabel className="text-[] text-base font-medium font-inter mb-4 max-med:text-base max-small:text-sm">Dental Issue<span className='text-[red]'>*</span></FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter Dental Issue" {...field}
                                        className="h-12 text-[#838383] text-base font-normal font-inter border-[1px] border-[#808080] rounded-[10px] px-5 py-[10px] placeholder:text-[#838383] max-[950px]:px-3 max-[950px]:text-sm max-[950px]:h-[46px] max-[950px]:rounded-lg"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <Button size='lg' className='h-11 text-lg' type="submit">Submit</Button>
            </form>
        </Form>
    )
}

export default PatientForm