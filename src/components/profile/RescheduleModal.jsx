/* eslint-disable react/prop-types */
import noSlot from "@/assets/Vector (7).png";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Form } from "@/components/ui/form";
import useGetApiReq from "@/hooks/useGetApiReq";
import usePatchApiReq from "@/hooks/usePatchApiReq";
import { zodResolver } from "@hookform/resolvers/zod";
import { addDays, format, parse } from "date-fns";
import { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { z } from "zod";
import SlotSection from "../SlotSection";

const Schema = z.object({
  date: z.string().min(1, "Please select a date"),
  time: z.string().min(1, "Please select a time slot"),
  dentistId: z.string().optional(),
});

const RescheduleModal = ({
  isRescheduleModalOpen,
  setIsRescheduleModalOpen,
  clinicId,
  dentistId,
  time,
  date,
  appointmentId,
  selectedSlotId,
  getAppointmentDetails,
}) => {
  const [timing, setTiming] = useState([]);
  const [days, setDays] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState(time || "");
  const [slotId, setSlotId] = useState(selectedSlotId || "");
  const [slots, setSlots] = useState([]);
  const [selectedDay, setSelectedDay] = useState(
    format(new Date(), "yyyy-MM-dd"),
  );
  const [selected, setSelected] = useState("selected0");
  const [startIndex, setStartIndex] = useState(0);

  const form = useForm({
    resolver: zodResolver(Schema),
    defaultValues: {
      date: date || "",
      time: time || "",
      dentistId: dentistId || "",
    },
  });

  const {
    handleSubmit,
    setValue,
    formState: { errors },
  } = form;

  const { res, fetchData, isLoading } = usePatchApiReq();

  const onSubmit = (data) => {
    console.log("Booking Data:", data);
    const day = data?.date && format(new Date(data?.date), "EEEE");

    fetchData(`/patient/reschedule-appointment`, {
      appointmentId,
      day: day.toLowerCase(),
      date: format(new Date(data.date), "dd-MM-yyyy"),
      slotId,
    });
  };

  useEffect(() => {
    if (res?.status === 200 || res?.status === 201) {
      setIsRescheduleModalOpen(false);
      getAppointmentDetails();
    }
  }, [res]);

  useEffect(() => {
    console.log("date", date);

    const parsedDate = parse(date, "dd-MM-yyyy", new Date());
    const formattedDate = format(parsedDate, "yyyy-MM-dd");
    setSelectedDay(formattedDate);
  }, [date]);

  // Generate dates dynamically
  const getDaysFromToday = (days) => {
    return Array.from({ length: days }, (_, i) => {
      const date = addDays(new Date(), i);
      const day = format(date, "EEEE");
      const formattedDate = format(date, "yyyy-MM-dd");
      const displayDate =
        i === 0 ? "Today" : i === 1 ? "Tomorrow" : format(date, "EEE, dd MMM");

      const availableSlots = timing?.find(
        (item) => item?.day.toLowerCase() === day?.toLowerCase(),
      );

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
        slots: availableSlots || "",
      };
    });
  };

  useEffect(() => {
    const localDays = getDaysFromToday(7);
    const foundIndex = localDays.findIndex(
      (day) => format(day.date, "dd-MM-yyyy") === date,
    );
    setStartIndex(foundIndex);
    setSelected(`selected${foundIndex}`);
    setDays(localDays);
  }, [timing]);

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
    setValue("time", "");
    // setStartIndex(index);
    const selectedDate = days[index].date;
    console.log("selectedDate", selectedDate);

    setSelectedDay(selectedDate);
    form.setValue("date", selectedDate);
  };

  const handleDaySelection2 = (index) => {
    setSelected(`selected${index}`);
    setSelectedSlot("");
    setValue("time", "");
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

  // Handle next and previous navigation
  const handleNext = () => {
    if (startIndex + 3 < days.length) {
      setStartIndex(startIndex + 1);
      const selectedDate = days[startIndex + 1]?.date;
      setSelectedDay(selectedDate);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
      const selectedDate = days[startIndex - 1]?.date;
      setSelectedDay(selectedDate);
    }
  };

  const [visibleDays, setVisibleDays] = useState([]);
  useEffect(() => {
    const VisibleDays = days.slice(startIndex, startIndex + 3);
    // console.log("VisibleDays", VisibleDays);

    setVisibleDays(VisibleDays);
    setSelected(`selected${startIndex}`);
    // const selectedDate = days[startIndex]?.date;
    // setSelectedDay(selectedDate);
  }, [startIndex, days]);

  useEffect(() => {
    if (selectedDay) {
      const filteredTimings = timing.find(
        (item) =>
          item?.day.toLowerCase() ===
          format(new Date(selectedDay), "EEEE").toLowerCase(),
      );
      if (
        filteredTimings &&
        filteredTimings.day === format(new Date(), "EEEE").toLowerCase()
      ) {
        const filteredSlots = filteredTimings?.allSlots?.filter((slot) => {
          const slotStartTime = slot?.slotId?.startTime; // Assume it's in "hh:mma" format, e.g., "03:45PM"
          if (!slotStartTime) return false;

          const currentTime = format(new Date(), "hh:mma");

          // Parse both times into Date objects for reliable comparison
          const slotTimeParsed = parse(slotStartTime, "hh:mma", new Date());
          const currentTimeParsed = parse(currentTime, "hh:mma", new Date());

          return slotTimeParsed > currentTimeParsed;
        });
        setSlots(filteredSlots);
      } else {
        setSlots(filteredTimings?.allSlots);
      }
    }
  }, [selectedDay, timing]);

  const {
    res: slotsRes,
    fetchData: fetchSlotsData,
    isLoading: isSlotsLoading,
  } = useGetApiReq();

  const getSlots = useCallback(async () => {
    fetchSlotsData(
      `/admin/get-dentist-available-timing?clinicId=${clinicId}&dentistId=${dentistId}`,
    );
  }, []);

  useEffect(() => {
    getSlots();
  }, []);

  useEffect(() => {
    if (slotsRes?.status === 200 || slotsRes?.status === 201) {
      console.log("slotsRes response", slotsRes);
      setTiming(slotsRes?.data?.foundClinic);
    }
  }, [slotsRes]);

  return (
    <Dialog
      open={isRescheduleModalOpen}
      onOpenChange={setIsRescheduleModalOpen}
    >
      <DialogContent className="max-w-[700px] max-h-[90vh] overflow-y-auto w-full">
        <DialogHeader className="text-left">
          <DialogTitle className="font-inter font-medium text-[#0D0E0E] text-base sm:text-2xl ">
            Reschedule Booking
          </DialogTitle>
          {/* <Label className="font-inter text-sm sm:text-base border-b pb-2 border-b-[#71717154] w-full">Select Availability</Label> */}
          <Form {...form}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col items-start gap-4 w-full"
            >
              <div className="grid w-full gap-4 grid-cols-[10%_1fr_10%]">
                <button
                  type="button"
                  className="flex justify-center items-center disabled:text-gray-300"
                  onClick={handlePrev}
                  disabled={startIndex === 0}
                >
                  <IoIosArrowBack className="border w-14 h-14 p-2 sm:p-4 rounded-full" />
                </button>
                <div className="grid w-full gap-4 grid-cols-[1fr_1fr_1fr]">
                  {visibleDays.map((day, index) => {
                    // Count available slots across all times of the day
                    const totalAvailableSlots =
                      day.date === selectedDay && slots?.length;

                    return (
                      <button
                        type="button"
                        key={index + startIndex}
                        onClick={() => handleDaySelection(index + startIndex)}
                        className={`${selectedDay === day.date ? "border-b-2 border-[#95C22B]" : "border-b-2 border-transparent"}`}
                      >
                        <p className="font-inter sm:text-base text-xs font-medium text-center text-[#1A1A1A]">
                          {day.name}
                        </p>
                        <p
                          className={`font-inter sm:text-sm text-xs font-medium text-center ${totalAvailableSlots > 0 ? "text-[#95C22B]" : "text-[#717171]"}`}
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
                  <IoIosArrowForward className="border w-14 h-14 p-2 sm:p-4 rounded-full" />
                </button>
              </div>

              {/* Slot Selection */}
              <div className="mt-3 w-full">
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

                        {errors?.time?.message && (
                          <p className="text-destructive text-sm font-medium">
                            {errors.time.message}
                          </p>
                        )}

                        {/* ))} */}
                        <Button
                          disabled={isLoading}
                          type="submit"
                          className="bg-[#95C22B] w-full"
                        >
                          Confirm
                        </Button>
                      </div>
                    ) : (
                      <div
                        className={`flex flex-col gap-2 items-center w-full ${selected === `selected${dayIndex}` ? "" : "hidden"}`}
                      >
                        <img src={noSlot} alt="No slots available" />
                        <p className="font-inter text-[#1A1A1A]">
                          Sorry, no slots available on{" "}
                          {format(new Date(selectedDay), "EEEE")}
                        </p>
                        <Button
                          type="button"
                          className="bg-[#95C22B] w-full"
                          onClick={() =>
                            handleDaySelection2(
                              dayIndex + findNextAvailableDate(item.date).index,
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
            </form>
          </Form>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default RescheduleModal;
