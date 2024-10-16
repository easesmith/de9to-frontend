import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle
} from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from "zod";
import { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import noSlot from "@/assets/Vector (7).png";
import { format, addDays } from 'date-fns';  // Import for date manipulation
import { useNavigate } from "react-router-dom";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import SlotSection from "../SlotSection";
import useGetApiReq from "@/hooks/useGetApiReq";
import { readCookie } from "@/utils/readCookie";
import toast from "react-hot-toast";

const clinicSchema = z.object({
    clinic: z.string().min(1, "Please select a clinic"),
    date: z.string().min(1, "Please select a date"),
    time: z.string().min(1, "Please select a time slot"),
    dentistId: z.string().optional(),
});

const ConfirmBookingModal = ({ isConfirmBookingModalOpen, setIsConfirmBookingModalOpen, selectedDate, selectedTime, selectedIndex, clinic = "", dentistId, timing }) => {

    const navigate = useNavigate();

    const form = useForm({
        resolver: zodResolver(clinicSchema),
        defaultValues: {
            clinic: clinic?._id || "",
            date: selectedDate || "",
            time: selectedTime || "",
            dentistId: dentistId || "",
        },
    });
    console.log("clinic:", clinic);

    const { reset, handleSubmit, getValues } = form;

    const onSubmit = (data) => {
        console.log("Booking Data:", data);
        // reset();
        const userInfo = readCookie("userInfo");
        if (!userInfo || !userInfo?.userId) {
            toast.error("Please login first")
            navigate("/")
            return;
        }
        setIsConfirmBookingModalOpen(false); // Close modal after submission
        navigate("/confirm-booking", { state: { data, clinicDetails: clinic, slotId, timing, startIndex } });
    };

    const [selectedSlot, setSelectedSlot] = useState(selectedTime);
    const [slotId, setSlotId] = useState("");
    const [slots, setSlots] = useState([]);
    const [selectedDay, setSelectedDay] = useState(selectedDate || format(new Date(), "yyyy-MM-dd"));
    const [selected, setSelected] = useState(selectedIndex || "selected0");
    const [startIndex, setStartIndex] = useState(selectedIndex);
    console.log("selectedDate", selectedDay);
    console.log("selectedSlot", selectedSlot);

    // Generate dates dynamically
    const getDaysFromToday = (days) => {
        return Array.from({ length: days }, (_, i) => {
            const date = addDays(new Date(), i);
            const day = format(date, "EEEE");
            const formattedDate = format(date, "yyyy-MM-dd");
            const displayDate = i === 0 ? "Today" : i === 1 ? "Tomorrow" : format(date, "EEE, dd MMM");

            // const availableSlots = {
            //     morning: slotTimes.morning[i] || [],
            //     afternoon: slotTimes.afternoon[i] || [],
            //     evening: slotTimes.evening[i] || [],
            //     night: slotTimes.night[i] || []
            // };

            const availableSlots = timing?.filter((item) => item?.day.toLowerCase() === day?.toLowerCase());
            // console.log("availableSlots", availableSlots);


            const hasSlots = timing?.some((item) => item.day.toLowerCase() === day.toLowerCase() && item?.allSlots.length > 0);

            return {
                name: displayDate,
                date: formattedDate,
                day: day,
                slotsAvailable: hasSlots,
                slots: availableSlots[0] || "",
            };
        });
    };

    // Example of slot times with empty slots for Day 3
    const slotTimes = {
        morning: [
            ["09:00 AM", "09:30 AM"], // Today
            ["09:00 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM"], // Tomorrow
            [], // Day 3: No slots available
            ["09:00 AM"], // Day 4
            ["10:00 AM", "11:00 AM"], // Day 5
            ["05:00 PM"], // Day 6
            []  // Day 7
        ],
        afternoon: [
            ["12:00 PM", "12:30 PM"], // Today
            ["01:00 PM", "01:30 PM", "02:00 PM"], // Tomorrow
            [], // Day 3: No slots available
            ["01:00 PM"], // Day 4
            ["02:00 PM", "03:00 PM"], // Day 5
            ["05:00 PM"], // Day 6
            [] // Day 7
        ],
        evening: [
            ["05:00 PM", "05:30 PM"], // Today
            ["06:00 PM", "06:30 PM", "07:00 PM"], // Tomorrow
            [], // Day 3: No slots available
            ["06:00 PM"], // Day 4
            ["07:00 PM", "08:00 PM"], // Day 5
            ["05:00 PM"], // Day 6
            [] // Day 7
        ],
        night: [
            ["08:00 PM", "08:30 PM"], // Today
            ["09:00 PM", "09:30 PM", "10:00 PM"], // Tomorrow
            [], // Day 3: No slots available
            ["09:00 PM"], // Day 4
            ["10:00 PM", "11:00 PM"], // Day 5
            ["08:00 PM"], // Day 6
            [], // Day 7
        ]
    };

    // Generate the days with slot times
    const days = getDaysFromToday(7);

    // Output the result
    console.log(days);
    // Generate the next 7 days starting from today

    // Handle slot selection
    const handleSlotClick = (slot, date, slotId) => {
        setSelectedSlot(slot);
        setSlotId(slotId);
        setSelectedDay(date);
        form.setValue("time", slot);
        form.setValue("date", date);
    };

    const handleDaySelection = (index) => {
        setSelected(`selected${index}`);
        setSelectedSlot("");
        // setStartIndex(index);
        const selectedDate = days[index].date;
        setSelectedDay(selectedDate);
        form.setValue("date", selectedDate);
    };

    const handleDaySelection2 = (index) => {
        setSelected(`selected${index}`);
        setSelectedSlot("");
        setStartIndex(index);
        const selectedDate = days[index].date;
        setSelectedDay(selectedDate);
        form.setValue("date", selectedDate);
    };

    const findNextAvailableDate = (currentDate) => {
        const currentIndex = days.findIndex(day => day.date === currentDate);
        for (let i = currentIndex + 1; i < days.length; i++) {
            if (days[i].slotsAvailable) {
                return { name: days[i].name, index: i }; // Return the display name of the next available date
            }
        }
        return null; // No next available date found
    };

    // const handleDaySelection = (index) => {
    //     setSelected(`selected${index}`);
    //     setSelectedSlot("");

    //     const selectedDate = days[index].date;
    //     form.setValue("date", selectedDate);

    //     // Check if the selected day has slots available
    //     if (!days[index].slotsAvailable) {
    //         const nextAvailable = findNextAvailableDate(selectedDate);
    //         if (nextAvailable) {
    //             alert(`Next availability on ${nextAvailable}`);
    //         }
    //     }
    // };

    // Handle next and previous navigation
    const handleNext = () => {
        if (startIndex + 3 < days.length) {
            setStartIndex(startIndex + 3);
        }
    };

    const handlePrev = () => {
        if (startIndex > 0) {
            setStartIndex(startIndex - 3);
        }
    };

    const [visibleDays, setVisibleDays] = useState([])
    useEffect(() => {
        const VisibleDays = days.slice(startIndex, startIndex + 3);
        setVisibleDays(VisibleDays)
        setSelected(`selected${startIndex}`)
        const selectedDate = days[startIndex].date;
        setSelectedDay(selectedDate);
    }, [startIndex])

    // Get the visible days (3 at a time)
    const { res: slotsRes, fetchData: fetchSlotsData, isLoading: isSlotsLoading, error } = useGetApiReq();

    console.log("data", format(new Date(selectedDay), "EEEE"));

    const getSlots = async () => {
        fetchSlotsData(`/patient/get-dentist-available-timing?clinicId=${getValues("clinic")}&dentistId=${dentistId}&day=${format(new Date(selectedDay), "EEEE")}&date=${format(new Date(selectedDay), "dd-MM-yyy")}`);
    }

    useEffect(() => {
        if (getValues("clinic")) {
            getSlots();
        }
    }, [selectedDay, getValues("clinic")])


    useEffect(() => {
        if (slotsRes?.status === 200 || slotsRes?.status === 201) {
            setSlots(slotsRes?.data?.data?.availableSlots);
            console.log("slotsRes response", slotsRes);
        }
    }, [slotsRes])

    useEffect(() => {
        if (error) {
            console.log("slotsRes error", error);
            setSlots([]);
        }
    }, [error])

    return (
        <Dialog open={isConfirmBookingModalOpen} onOpenChange={setIsConfirmBookingModalOpen}>
            <DialogContent className="max-w-[700px] max-h-[90vh] overflow-y-auto w-full">
                <DialogHeader>
                    <DialogTitle className="font-inter font-medium text-[#0D0E0E] text-2xl">Confirm Your Booking</DialogTitle>
                    <Form {...form}>
                        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-start gap-4 w-full'>
                            {/* Clinic Selection */}
                            {clinic && clinic.length > 0 && <div className="w-full">
                                <FormField
                                    control={form.control}
                                    name="clinic"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="font-inter text-base">Select Clinic</FormLabel>
                                            <FormControl>
                                                <Select value={field.value} onValueChange={field.onChange}>
                                                    <SelectTrigger className="w-full border bg-[#F9FFEA] border-[#95C22B]">
                                                        <SelectValue placeholder="Select clinic" />
                                                    </SelectTrigger>
                                                    <SelectContent className="border border-[#95C22B] rounded-lg py-[10px]">
                                                        <SelectGroup>
                                                            {clinic.map((item) => (
                                                                <SelectItem key={item?._id} value={item?._id}>{item?.clinicName}</SelectItem>
                                                            ))}
                                                        </SelectGroup>
                                                    </SelectContent>
                                                </Select>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>}

                            {/* Availability Section */}
                            {getValues("clinic") &&
                                <>
                                    <Label className="font-inter text-base border-b pb-2 border-b-[#71717154] w-full">Select Availability</Label>

                                    <div className="grid w-full gap-4 grid-cols-[10%_1fr_10%]">
                                        <button
                                            type="button"
                                            className="flex justify-center items-center disabled:text-gray-300"
                                            onClick={handlePrev}
                                            disabled={startIndex === 0}
                                        >
                                            <IoIosArrowBack className="border w-14 h-14 p-4 rounded-full" />
                                        </button>
                                        <div className="grid w-full gap-4 grid-cols-[1fr_1fr_1fr]">
                                            {visibleDays.map((day, index) => {
                                                // Count available slots across all times of the day
                                                const totalAvailableSlots = day.date === selectedDay && slots.length;

                                                return (
                                                    <button
                                                        type="button"
                                                        key={index + startIndex}
                                                        onClick={() => handleDaySelection(index + startIndex)}
                                                        className={`${selectedDay === day.date ? "border-b-2 border-[#95C22B]" : "border-b-2 border-transparent"}`}
                                                    >
                                                        <p className="font-inter font-medium text-center text-[#1A1A1A]">{day.name}</p>
                                                        <p className={`font-inter font-medium text-sm text-center ${totalAvailableSlots > 0 ? "text-[#95C22B]" : "text-[#717171]"}`}>
                                                            {totalAvailableSlots > 0 ? `${totalAvailableSlots} Slots Available` : "Click to check"}
                                                        </p>
                                                    </button>
                                                );
                                            })}

                                        </div>
                                        <button
                                            type="button"
                                            className="flex justify-center items-center disabled:text-gray-300"
                                            onClick={handleNext}
                                            disabled={startIndex + 3 >= days.length}
                                        >
                                            <IoIosArrowForward className="border w-14 h-14 p-4 rounded-full" />
                                        </button>
                                    </div>

                                    {/* Slot Selection */}
                                    <div className="mt-3 w-full">
                                        {days.map((item, dayIndex) => (
                                            <div key={dayIndex}>
                                                {item.slotsAvailable ? (
                                                    // ['Morning', 'Afternoon', 'Evening', 'Night']
                                                    <div className={`grid grid-cols-1 gap-3 ${selected === `selected${dayIndex}` ? '' : 'hidden'}`}>
                                                        {/* {slots.map((slot) => ( */}
                                                        <SlotSection
                                                            title={"Slots"}
                                                            slots={slots}
                                                            selectedSlot={selectedSlot}
                                                            handleSlotClick={handleSlotClick}
                                                            dayDate={item.date}
                                                        />
                                                        {/* ))} */}
                                                        <Button type="submit" className="bg-[#95C22B] w-full">
                                                            Confirm Booking
                                                        </Button>
                                                    </div>
                                                ) : (
                                                    <div className={`flex flex-col gap-2 items-center w-full ${selected === `selected${dayIndex}` ? '' : 'hidden'}`}>
                                                        <img src={noSlot} alt="No slots available" />
                                                        <p className="font-inter text-[#1A1A1A]">Sorry, no slots available today</p>
                                                        <Button
                                                            type="button"
                                                            className="bg-[#95C22B] w-full"
                                                            onClick={() => handleDaySelection2(dayIndex + findNextAvailableDate(item.date).index)}
                                                            disabled={!findNextAvailableDate(item.date)}
                                                        >
                                                            Next availability on {findNextAvailableDate(item.date)?.name} {/* Dynamic date */}
                                                        </Button>
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </>}


                            {/* Submit Button */}
                            {/* <Button type="submit" className="bg-[#95C22B] w-full">
                                Confirm Booking
                            </Button> */}
                        </form>
                    </Form>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
};

export default ConfirmBookingModal;
