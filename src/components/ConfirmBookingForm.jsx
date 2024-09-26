import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ConfirmBookingFormSchema } from '@/schema/formSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Input } from './ui/input';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Button } from './ui/button';

const ConfirmBookingForm = () => {
    const navigate = useNavigate();

    const form = useForm({
        resolver: zodResolver(ConfirmBookingFormSchema),
        defaultValues: {
            for: "",
            name: "",
            time: "",
        },
    });

    const { reset, handleSubmit, getValues } = form;

    const onSubmit = (data) => {
        console.log("Booking Data:", data);
        // reset();
        // setIsConfirmBookingModalOpen(false); // Close modal after submission
        navigate("/confirm-booking");
    };

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

                <div className="w-full">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="font-inter text-base">Enter full name<span className='text-red-500'>*</span></FormLabel>
                                <FormControl>
                                    <Input placeholder="Full Name" className="placeholder:text-[#AEB4CF] border-[#E4E6EE]" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <Button type="submit" className="bg-[#95C22B] w-full h-14">
                    Book Appointment
                </Button>
            </form>
        </Form>
    )
}

export default ConfirmBookingForm