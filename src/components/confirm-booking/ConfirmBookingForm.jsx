import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { ConfirmBookingFormSchema } from '@/schema/formSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaUser } from 'react-icons/fa';
import { MdCall, MdEmail } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import ConfirmBookingSuccessModal from './ConfirmBookingSuccessModal';
import usePostApiReq from '@/hooks/usePostApiReq';
import { readCookie } from '@/utils/readCookie';
import { format } from 'date-fns';

const ConfirmBookingForm = ({ apiData }) => {
    const navigate = useNavigate();
    const userInfo = readCookie("userInfo");

    const [isConfirmBookingSuccessModalOpen, setIsConfirmBookingSuccessModalOpen] = useState(true);

    const form = useForm({
        resolver: zodResolver(ConfirmBookingFormSchema),
        defaultValues: {
            for: "Myself",
            name: "",
            mobile: "",
            email: "",
            paymentDetails: true,
        },
    });

    const { reset, handleSubmit, getValues } = form;
    const { res, fetchData, isLoading } = usePostApiReq();
    console.log("date", format(new Date(apiData.date), "EEEE"));

    const onSubmit = (data) => {
        console.log("Booking Data:", data);
        // reset();
        // navigate("/confirm-booking");
        fetchData(`/patient/book-appointment`,
            {
                doctorsId: apiData?.dentistId,
                patientId: userInfo.userId,
                slotId: apiData?.slotId,
                clinicId: apiData?.clinic,
                fullName: data.name,
                mobile: data.mobile,
                email: data.email,
                timing: {
                    date: format(new Date(apiData.date), "dd-MM-yyy"),
                    day: format(new Date(apiData.date), "EEEE")
                }
            });
            
        };

    useEffect(() => {
        if (res?.status === 200 || res?.status === 201) {
            console.log("booking res", res);
            setIsConfirmBookingSuccessModalOpen(true);
        }
    }, [res])

    return (
        <Form {...form}>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-start gap-4 w-full'>
                {/* Clinic Selection */}
                <div className="w-full">
                    <FormField
                        control={form.control}
                        name="for"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel></FormLabel>
                                <FormControl>
                                    <RadioGroup
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                        className="grid grid-cols-2 gap-5"
                                    >
                                        <FormItem className="flex items-center w-full">
                                            <FormControl>
                                                <RadioGroupItem className="hidden" value="Myself" />
                                            </FormControl>
                                            <FormLabel className={`font-medium w-full font-inter cursor-pointer rounded-3xl px-8 py-3 border-[#717171] text-center border ${getValues("for") === "Myself" ? "bg-[#95C22B] text-white border-[#95C22B]" : "text-[#717171]"}`}>
                                                Myself
                                            </FormLabel>
                                        </FormItem>
                                        <FormItem className="flex items-center w-full">
                                            <FormControl>
                                                <RadioGroupItem className="hidden" value="Someone else" />
                                            </FormControl>
                                            <FormLabel className={`font-medium w-full font-inter cursor-pointer rounded-3xl px-8 py-3 border-[#717171] text-center border ${getValues("for") === "Someone else" ? "bg-[#95C22B] text-white border-[#95C22B]" : "text-[#717171]"}`}>
                                                Someone else
                                            </FormLabel>
                                        </FormItem>
                                    </RadioGroup>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <div className="w-full flex flex-col gap-4 mt-4">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="font-inter text-base text-[#717171] font-normal">Enter full name<span className='text-red-500'>*</span></FormLabel>
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
                    <FormField
                        control={form.control}
                        name="mobile"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="font-inter text-base text-[#717171] font-normal">Mobile<span className='text-red-500'>*</span></FormLabel>
                                <FormControl>
                                    <div className='relative'>
                                        <MdCall className='absolute left-3 top-1/2 -translate-y-1/2 text-[#717171]' />
                                        <Input type="number" placeholder="Enter Your Mobile Number" className="placeholder:text-[#717171] pl-10 h-12 border-[#E4E6EE]" {...field} />
                                    </div>
                                </FormControl>
                                <FormDescription className="text-xs font-inter">Updates will be sent to the number you will provide</FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="font-inter text-base text-[#717171] font-normal">Email</FormLabel>
                                <FormControl>
                                    <div className='relative'>
                                        <MdEmail className='absolute left-3 top-1/2 -translate-y-1/2 text-[#717171]' />
                                        <Input placeholder="Enter Your Mail" className="placeholder:text-[#717171] pl-10 h-12 border-[#E4E6EE]" {...field} />
                                    </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div className="flex items-center space-x-2">
                        <div className="border border-[#1DC9A0] w-4 h-4 p-[3px] rounded-full">
                            <div className='w-full h-full rounded-full bg-[#1DC9A0]'></div>
                        </div>
                        <p className="text-[#5B5B5B] font-normal max-[500px]:text-sm">₹500 <span className='text-[#5B5B5B] font-semibold'>FREE</span> via <span className='text-[#5B5B5B] font-semibold'>de<span className='text-[#95C22B]'>9</span>to on first appointment</span></p>
                    </div>

                    <p className="font-inter max-[500px]:text-sm text-[#717171]">By booking this appointment, you agree to De9to’s Terms and Conditions.</p>

                </div>

                <Button type="submit" className="bg-[#95C22B] w-full h-12">
                    Book Appointment
                </Button>

                {isConfirmBookingSuccessModalOpen &&
                    <ConfirmBookingSuccessModal
                        isConfirmBookingSuccessModalOpen={isConfirmBookingSuccessModalOpen}
                        setIsConfirmBookingSuccessModalOpen={setIsConfirmBookingSuccessModalOpen}
                    />
                }
            </form>
        </Form>
    )
}

export default ConfirmBookingForm