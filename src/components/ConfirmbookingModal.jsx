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
import { Label } from "./ui/label";
import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import noSlot from "@/assets/Vector (7).png";
import { Button } from "./ui/button";
import { format, addDays } from 'date-fns';  // Import for date manipulation
import SlotSection from "./SlotSection";
import { useNavigate } from "react-router-dom";

const clinicSchema = z.object({
    clinic: z.string().min(1, "Please select a clinic"),
    date: z.string().min(1, "Please select a date"),
    time: z.string().min(1, "Please select a time slot"),
});

const ConfirmBookingModal = ({ isConfirmBookingModalOpen, setIsConfirmBookingModalOpen }) => {
    const navigate = useNavigate();

    const form = useForm({
        resolver: zodResolver(clinicSchema),
        defaultValues: {
            clinic: "",
            date: "",
            time: "",
        },
    });

    const { reset, handleSubmit } = form;

    const onSubmit = (data) => {
        console.log("Booking Data:", data);
        // reset();
        // setIsConfirmBookingModalOpen(false); // Close modal after submission
        navigate("/confirm-booking");
    };

    const [selectedSlot, setSelectedSlot] = useState("");
    const [selectedDay, setSelectedDay] = useState("");
    const [selected, setSelected] = useState("selected0");
    const [startIndex, setStartIndex] = useState(0);

    // Generate dates dynamically
    const getDaysFromToday = (days, slotTimes) => {
        return Array.from({ length: days }, (_, i) => {
            const date = addDays(new Date(), i);
            const formattedDate = format(date, "yyyy-MM-dd");
            const displayDate = i === 0 ? "Today" : i === 1 ? "Tomorrow" : format(date, "EEE, dd MMM");

            const availableSlots = {
                morning: slotTimes.morning[i] || [],
                afternoon: slotTimes.afternoon[i] || [],
                evening: slotTimes.evening[i] || [],
                night: slotTimes.night[i] || []
            };

            const hasSlots = Object.values(availableSlots).some(slots => slots.length > 0);

            return {
                name: displayDate,
                date: formattedDate,
                slotsAvailable: hasSlots,
                slots: availableSlots,
                message: hasSlots ? null : "No slots available.",
                nextSlotButton: !hasSlots // true if no slots available, to show the button
            };
        });
    };

    // Example of slot times with empty slots for Day 3
    const slotTimes = {
        morning: [
            ["09:00 AM", "09:30 AM"], // Today
            ["09:00 AM", "10:00 AM", "10:30 AM"], // Tomorrow
            [], // Day 3: No slots available
            ["09:00 AM"], // Day 4
            ["10:00 AM", "11:00 AM"], // Day 5
            ["09:30 AM", "10:30 AM"], // Day 6
            ["08:00 AM", "09:00 AM"]  // Day 7
        ],
        afternoon: [
            ["12:00 PM", "12:30 PM"], // Today
            ["01:00 PM", "01:30 PM", "02:00 PM"], // Tomorrow
            [], // Day 3: No slots available
            ["01:00 PM"], // Day 4
            ["02:00 PM", "03:00 PM"], // Day 5
            ["01:30 PM", "02:30 PM"], // Day 6
            [] // Day 7
        ],
        evening: [
            ["05:00 PM", "05:30 PM"], // Today
            ["06:00 PM", "06:30 PM", "07:00 PM"], // Tomorrow
            ["06:00 PM", "06:30 PM", "07:00 PM"], // Day 3: No slots available
            ["06:00 PM"], // Day 4
            ["07:00 PM", "08:00 PM"], // Day 5
            ["06:30 PM", "07:30 PM"], // Day 6
            ["05:00 PM"] // Day 7
        ],
        night: [
            ["08:00 PM", "08:30 PM"], // Today
            ["09:00 PM", "09:30 PM", "10:00 PM"], // Tomorrow
            [], // Day 3: No slots available
            ["09:00 PM"], // Day 4
            ["10:00 PM", "11:00 PM"], // Day 5
            ["09:30 PM", "10:30 PM"], // Day 6
            ["08:00 PM"] // Day 7
        ]
    };

    // Generate the days with slot times
    const days = getDaysFromToday(7, slotTimes);

    // Output the result
    console.log(days);
    // Generate the next 7 days starting from today

    // Handle slot selection
    const handleSlotClick = (slot, date) => {
        setSelectedSlot(slot);
        setSelectedDay(date);
        form.setValue("time", slot);
        form.setValue("date", date);
    };

    const handleDaySelection = (index) => {
        setSelected(`selected${index}`); // Update selected day visually
        // Reset selected slot when day is changed
        setSelectedSlot(""); // Optional: Reset slot when changing day
        // Set form value for date as per the selected day
        const selectedDate = days[index].date; // Get the date of the selected day
        form.setValue("date", selectedDate); // Update form value for date
    };

    // Handle next and previous navigation
    const handleNext = () => {
        if (startIndex + 3 < days.length) {
            setStartIndex(startIndex + 1);
        }
    };

    const handlePrev = () => {
        if (startIndex > 0) {
            setStartIndex(startIndex - 1);
        }
    };

    // Get the visible days (3 at a time)
    const visibleDays = days.slice(startIndex, startIndex + 3);

    return (
        <Dialog open={isConfirmBookingModalOpen} onOpenChange={setIsConfirmBookingModalOpen}>
            <DialogContent className="max-w-[700px] max-h-[80vh] overflow-y-scroll w-full">
                <DialogHeader>
                    <DialogTitle className="font-inter font-medium text-[#0D0E0E] text-2xl">Confirm Your Booking</DialogTitle>
                    <Form {...form}>
                        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-start gap-4 w-full'>
                            {/* Clinic Selection */}
                            <div className="w-full">
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
                                                    <SelectContent className="border border-[#95C22B] rounded-lg py-[10px] px-5">
                                                        <SelectGroup>
                                                            <SelectItem value="DentalMarc Dental Clinic">DentalMarc Dental Clinic (2 kms away)</SelectItem>
                                                            <SelectItem value="Another Clinic">Another Clinic (3 kms away)</SelectItem>
                                                        </SelectGroup>
                                                    </SelectContent>
                                                </Select>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            {/* Availability Section */}
                            <Label className="font-inter text-base border-b pb-2 border-b-[#71717154] w-full">Select Availability</Label>

                            <div className="grid w-full gap-4 grid-cols-[10%_1fr_1fr_1fr_10%]">
                                <button
                                    type="button"
                                    className="flex justify-center items-center"
                                    onClick={handlePrev}
                                    disabled={startIndex === 0}
                                >
                                    <IoIosArrowBack className="border w-14 h-14 p-4 rounded-full" />
                                </button>
                                {visibleDays.map((day, index) => {
                                    // Count available slots across all times of the day
                                    const totalAvailableSlots = Object.values(day.slots).reduce((acc, slots) => acc + slots.length, 0);

                                    return (
                                        <button
                                            type="button"
                                            key={index + startIndex}
                                            onClick={() => handleDaySelection(index + startIndex)}
                                            className={`${selected === `selected${index + startIndex}` ? "border-b-2 border-[#95C22B]" : "border-b-2 border-transparent"}`}
                                        >
                                            <p className="font-inter font-medium text-center text-[#1A1A1A]">{day.name}</p>
                                            <p className={`font-inter font-medium text-sm text-center ${totalAvailableSlots > 0 ? "text-[#95C22B]" : "text-[#717171]"}`}>
                                                {totalAvailableSlots > 0 ? `${totalAvailableSlots} Slots Available` : "No slots available"}
                                            </p>
                                        </button>
                                    );
                                })}

                                <button
                                    type="button"
                                    className="flex justify-center items-center"
                                    onClick={handleNext}
                                    disabled={startIndex + 3 >= days.length}
                                >
                                    <IoIosArrowForward className="border w-14 h-14 p-4 rounded-full" />
                                </button>
                            </div>

                            {/* Slot Selection */}
                            <div className="mt-3 w-full">
                                {days.map((day, dayIndex) => (
                                    <div key={dayIndex}>
                                        {day.slotsAvailable ? (
                                            <div className={`grid grid-cols-1 gap-3 ${selected === `selected${dayIndex}` ? '' : 'hidden'}`}>
                                                {['Morning', 'Afternoon', 'Evening', 'Night'].map((timeOfDay) => (
                                                    <SlotSection
                                                        key={timeOfDay}
                                                        title={timeOfDay}
                                                        slots={day.slots[timeOfDay.toLowerCase()]}
                                                        selectedSlot={selectedSlot}
                                                        handleSlotClick={handleSlotClick}
                                                        dayDate={day.date}
                                                    />
                                                ))}
                                                <Button type="submit" className="bg-[#95C22B] w-full">
                                                    Confirm Booking
                                                </Button>
                                            </div>
                                        ) : (
                                            <div className="flex flex-col gap-2 items-center w-full">
                                                <img src={noSlot} alt="No slots available" />
                                                <p className="font-inter text-[#1A1A1A]">Sorry, no slots available today</p>
                                                <Button type="button" className="bg-[#95C22B] w-full">
                                                    Next availability on {format(addDays(new Date(), 1), "EEE, dd MMM")} {/* Dynamic date */}
                                                </Button>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>


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
