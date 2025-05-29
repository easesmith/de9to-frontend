/* eslint-disable react/prop-types */
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import noSlot from "@/assets/Vector (7).png";
import { format, addDays, parse } from "date-fns"; // Import for date manipulation
import { useNavigate } from "react-router-dom";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import SlotSection from "../SlotSection";
import useGetApiReq from "@/hooks/useGetApiReq";
import { readCookie } from "@/utils/readCookie";
import toast from "react-hot-toast";
import { Search, X } from "lucide-react";
import { Input } from "../ui/input";
import ReactStars from "react-stars";
import { calculateAverageRating } from "@/utils/getAverageRating";
import DataNotFound from "../DataNotFound";

const clinicSchema = z.object({
  clinic: z.string().min(1, "Please select a clinic"),
  date: z.string().min(1, "Please select a date"),
  time: z.string().min(1, "Please select a time slot"),
  dentistId: z.string().optional(),
});

const BookAppointment = ({
  selectedDate,
  selectedTime,
  selectedIndex,
  clinic = "",
  dentistId,
  timing,
}) => {
  // console.log("clinic",clinic);

  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [modifiedClinics, setModifiedClinics] = useState([]);

  const handleSearchOnChange = (e) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    if (searchQuery) {
      const filteredData = clinic.filter((item) =>
        item.clinicName.toLowerCase().includes(searchQuery.toLowerCase()),
      );

      console.log("filteredData", filteredData);

      setModifiedClinics(filteredData);
    } else {
      setModifiedClinics(clinic);
    }
  }, [searchQuery, clinic]);

  useEffect(() => {
    if (modifiedClinics.length === 0) {
      setValue("clinic", "");
    }
    else{
      setValue("clinic", modifiedClinics[0]?._id);
    }
  }, [modifiedClinics]);

  const form = useForm({
    resolver: zodResolver(clinicSchema),
    defaultValues: {
      clinic: clinic?._id || "",
      date: selectedDate || "",
      time: selectedTime || "",
      dentistId: dentistId || "",
    },
  });
  // console.log("dentistId:", dentistId);

  const { watch, handleSubmit, getValues, setValue } = form;

  useEffect(() => {
    setValue("dentistId", dentistId);
    // setValue("clinic", clinic[0]?._id);
  }, [dentistId]);

  const onSubmit = (data) => {
    console.log("Booking Data:", data);
    // reset();
    const userInfo = readCookie("userInfo");
    if (!userInfo || !userInfo?.userId) {
      toast.error("Please login first");
      navigate("/");
      return;
    }
    navigate("/confirm-booking", {
      state: { data, clinicDetails: clinic, slotId, timing, startIndex },
    });
  };

  const [selectedSlot, setSelectedSlot] = useState(selectedTime);
  const [slotId, setSlotId] = useState("");
  const [slots, setSlots] = useState([]);
  const [selectedDay, setSelectedDay] = useState(
    selectedDate || format(new Date(), "yyyy-MM-dd"),
  );
  const [selected, setSelected] = useState(selectedIndex || "selected0");
  const [startIndex, setStartIndex] = useState(selectedIndex);
  // console.log("selectedDate", selectedDay);
  // console.log("selectedSlot", selectedSlot);

  // Generate dates dynamically
  const getDaysFromToday = (days) => {
    return Array.from({ length: days }, (_, i) => {
      const date = addDays(new Date(), i);
      const day = format(date, "EEEE");
      const formattedDate = format(date, "yyyy-MM-dd");
      const displayDate =
        i === 0 ? "Today" : i === 1 ? "Tomorrow" : format(date, "EEE, dd MMM");

      // const availableSlots = {
      //     morning: slotTimes.morning[i] || [],
      //     afternoon: slotTimes.afternoon[i] || [],
      //     evening: slotTimes.evening[i] || [],
      //     night: slotTimes.night[i] || []
      // };

      const availableSlots = timing?.filter(
        (item) => item?.day.toLowerCase() === day?.toLowerCase(),
      );
      // console.log("availableSlots", availableSlots);

      const hasSlots = timing?.some(
        (item) =>
          item.day.toLowerCase() === day.toLowerCase() &&
          item?.slot?.length > 0,
      );

      return {
        name: displayDate,
        date: formattedDate,
        day: day,
        slotsAvailable: hasSlots,
        slots: availableSlots[0] || "",
      };
    });
  };

  // Generate the days with slot times
  const days = getDaysFromToday(31);

  // Output the result
  // console.log(days);
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
    const currentIndex = days.findIndex((day) => day.date === currentDate);
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

  const [visibleDays, setVisibleDays] = useState([]);
  useEffect(() => {
    const VisibleDays = days.slice(startIndex, startIndex + 3);
    setVisibleDays(VisibleDays);
    setSelected(`selected${startIndex}`);
    const selectedDate = days[startIndex]?.date;
    setSelectedDay(selectedDate);
  }, [startIndex]);

  // Get the visible days (3 at a time)
  const {
    res: slotsRes,
    fetchData: fetchSlotsData,
    isLoading: isSlotsLoading,
    error,
  } = useGetApiReq();

  // console.log("data", format(new Date(selectedDay), "EEEE"));

  const getSlots = async () => {
    fetchSlotsData(
      `/patient/get-dentist-available-timing?clinicId=${getValues("clinic")}&dentistId=${dentistId}&day=${format(new Date(selectedDay), "EEEE").toLowerCase()}&date=${format(new Date(selectedDay), "dd-MM-yyy")}`,
    );
  };

  useEffect(() => {
    if (getValues("clinic")) {
      getSlots();
    }
  }, [selectedDay, getValues("clinic")]);

  useEffect(() => {
    if (slotsRes?.status === 200 || slotsRes?.status === 201) {
      const filteredSlots = slotsRes?.data?.data?.availableSlots?.filter(
        (slot) => {
          const slotStartTime = slot?.slotId?.startTime; // Assume it's in "hh:mma" format, e.g., "03:45PM"
          if (!slotStartTime) return false;

          const currentTime = format(new Date(), "hh:mma");

          // Parse both times into Date objects for reliable comparison
          const slotTimeParsed = parse(slotStartTime, "hh:mma", new Date());
          const currentTimeParsed = parse(currentTime, "hh:mma", new Date());

          return slotTimeParsed > currentTimeParsed;
        },
      );
      // setSlots(slotsRes?.data?.data?.availableSlots);
      setSlots(filteredSlots);
      // console.log("slotsRes response", slotsRes);
      if (
        format(new Date(selectedDay), "EEEE").toLowerCase() ===
        format(new Date(), "EEEE").toLowerCase()
      ) {
        const filteredSlots = slotsRes?.data?.data?.availableSlots?.filter(
          (slot) => {
            const slotStartTime = slot?.slotId?.startTime; // Assume it's in "hh:mma" format, e.g., "03:45PM"
            if (!slotStartTime) return false;

            const currentTime = format(new Date(), "hh:mma");

            // Parse both times into Date objects for reliable comparison
            const slotTimeParsed = parse(slotStartTime, "hh:mma", new Date());
            const currentTimeParsed = parse(currentTime, "hh:mma", new Date());

            return slotTimeParsed > currentTimeParsed;
          },
        );
        setSlots(filteredSlots);
      } else {
        setSlots(slotsRes?.data?.data?.availableSlots);
      }
    }
  }, [slotsRes]);

  useEffect(() => {
    if (error) {
      // console.log("slotsRes error", error);
      setSlots([]);
    }
  }, [error]);

  return (
    <div className="max-w-[700px] w-full">
      <div className="text-left">
        <div className="flex justify-between items-center">
          <h2 className="font-inter font-medium text-[#0D0E0E] text-base">
            Book Your Appointment
          </h2>
        </div>
        <Form {...form}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col items-start gap-2 bg-[#EFEFEF] mt-2 p-2 w-full"
          >
            <h5 className="font-inter text-xs font-medium">Select Clinic</h5>

            {clinic && clinic.length > 0 && (
              <div className="w-full bg-white rounded p-2">
                <div className="w-full relative">
                  <Search className="absolute top-1/2 -translate-y-1/2 size-4 text-[#717171] left-3" />
                  <Input
                    value={searchQuery}
                    onChange={handleSearchOnChange}
                    placeholder="Search Clinic"
                    className="pl-9 h-8"
                  />
                </div>

                {modifiedClinics.length > 0 && (
                  <FormField
                    control={form.control}
                    name="clinic"
                    render={({ field }) => (
                      <FormItem className="space-y-0 mt-3">
                        <FormLabel className="font-inter text-sm sm:text-base text-left sm:text-left"></FormLabel>
                        <FormControl>
                          <div className={`grid grid-cols-1 ${modifiedClinics.length === 1 ? "sm:grid-cols-1" : "sm:grid-cols-2"} gap-2 mt-4 sm:max-h-[200px] overflow-y-auto`}>
                            {modifiedClinics.map((clinic) => {
                              const {
                                clinicAddress,
                                city,
                                nearbyLandmark,
                                state,
                                clinicPincode,
                                area,
                                clinicRating,
                              } = clinic || {};

                              const averageRating =
                                calculateAverageRating(clinicRating);

                              return (
                                <div
                                  key={clinic._id}
                                  className="border border-[#717171] rounded-lg p-2"
                                >
                                  <h2 className="font-inter text-[#1A1A1A] text-xs font-semibold">
                                    {clinic.clinicName}
                                  </h2>
                                  <ReactStars
                                    edit={false}
                                    size={15}
                                    count={5}
                                    value={averageRating}
                                    color2={"#FF8A00"}
                                    className="-mt-[2px]"
                                    // char="*"
                                  />
                                  <p className="font-inter text-[#717171] text-[10px] mt-3">
                                    <span className="font-bold">Address: </span>
                                    <span>
                                      {clinicAddress}, {nearbyLandmark}, {area},{" "}
                                      {city}, {state}, {clinicPincode}
                                    </span>
                                  </p>
                                  <Button
                                    type="button"
                                    variant={
                                      field.value === clinic?._id
                                        ? "default"
                                        : "outline"
                                    }
                                    className="mt-2 h-8 w-full hover:scale-100 text-sm"
                                    onClick={() => field.onChange(clinic._id)}
                                  >
                                    {field.value === clinic?._id
                                      ? "Selected"
                                      : "Select"}
                                  </Button>
                                </div>
                              );
                            })}
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}

                {!modifiedClinics.length && (
                  <DataNotFound className="text-sm mt-1" name="Clinic" />
                )}
              </div>
            )}

            {watch("clinic") && (
              <>
                <Label className="font-inter font-medium text-xs text-primary w-full">
                  Select Date and Time
                </Label>
                <div className="bg-white p-2 rounded w-full">
                  <div className="grid w-full gap-2 grid-cols-[8%_1fr_8%]">
                    <button
                      type="button"
                      className="flex justify-center border-none items-center disabled:text-gray-300"
                      onClick={handlePrev}
                      disabled={startIndex === 0}
                    >
                      <IoIosArrowBack className="size-6 rounded-full" />
                    </button>
                    <div className="grid w-full gap-4 grid-cols-[1fr_1fr_1fr]">
                      {visibleDays.map((day, index) => {
                        // Count available slots across all times of the day
                        const totalAvailableSlots =
                          day.date === selectedDay && slots.length;

                        return (
                          <button
                            type="button"
                            key={index + startIndex}
                            onClick={() =>
                              handleDaySelection(index + startIndex)
                            }
                            className={`${selectedDay === day.date ? "border-b-2 border-[#95C22B]" : "border-b-2 border-transparent"}`}
                          >
                            <p className="font-inter text-xs font-medium text-center text-[#1A1A1A]">
                              {day.name}
                            </p>
                            <p
                              className={`font-inter text-[10px] font-medium text-center ${totalAvailableSlots > 0 ? "text-[#95C22B]" : "text-[#717171]"}`}
                            >
                              {totalAvailableSlots > 0
                                ? `${totalAvailableSlots} Slots Available`
                                : "Click to check"}
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
                      <IoIosArrowForward className="size-6" />
                    </button>
                  </div>

                  {/* Slot Selection */}
                  <div className="mt-5 w-full">
                    {days.map((item, dayIndex) => (
                      <div key={dayIndex}>
                        {item.slotsAvailable ? (
                          // ['Morning', 'Afternoon', 'Evening', 'Night']
                          <div
                            className={`grid grid-cols-1 gap-3 ${selected === `selected${dayIndex}` ? "" : "hidden"}`}
                          >
                            {/* {slots.map((slot) => ( */}
                            <SlotSection
                              title={"Slots"}
                              slots={slots}
                              selectedSlot={selectedSlot}
                              handleSlotClick={handleSlotClick}
                              dayDate={item.date}
                            />
                            {/* ))} */}
                            <Button
                              type="submit"
                              className="bg-[#95C22B] hover:scale-100 w-full"
                            >
                              Confirm Booking
                            </Button>
                          </div>
                        ) : (
                          <div
                            className={`flex flex-col gap-2 items-center w-full ${selected === `selected${dayIndex}` ? "" : "hidden"}`}
                          >
                            <img src={noSlot} alt="No slots available" />
                            <p className="font-inter text-[#1A1A1A]">
                              Sorry, no slots available today
                            </p>
                            <Button
                              type="button"
                              className="bg-[#95C22B] w-full hover:scale-100"
                              onClick={() =>
                                handleDaySelection2(
                                  findNextAvailableDate(item.date).index,
                                )
                              }
                              disabled={!findNextAvailableDate(item.date)}
                            >
                              Next availability on{" "}
                              {findNextAvailableDate(item.date)?.name}{" "}
                              {/* Dynamic date */}
                            </Button>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </form>
        </Form>
      </div>
    </div>
  );
};

export default BookAppointment;
