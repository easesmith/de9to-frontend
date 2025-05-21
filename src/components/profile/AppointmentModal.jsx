/* eslint-disable react/prop-types */
import logo from "@/assets/logo.png";
import { FaLocationArrow } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { format, parse } from "date-fns";
import { searchOnMap } from "@/utils/searchOnMap";
import { useState } from "react";
import RescheduleModal from "./RescheduleModal";
// import RescheduleModal from "./RescheduleModal";

const AppointmentModal = ({
  isAppointmentModalOpen,
  setIsAppointmentModalOpen,
  appointment,
  getAppointments,
}) => {
  console.log("appointment", appointment);
  const parsedDate = parse(appointment?.timing?.date, "dd-MM-yyyy", new Date());
  const formattedDate = format(parsedDate, "EEE dd, yyyy");
  const [isRescheduleModalOpen, setIsRescheduleModalOpen] = useState(false);

  const getAppointmentDetails = () => {
    setIsAppointmentModalOpen(false);
    setIsRescheduleModalOpen(false);
    getAppointments();
  };

  return (
    <>
      <Dialog
        open={isAppointmentModalOpen}
        onOpenChange={setIsAppointmentModalOpen}
      >
        <DialogContent className="max-w-[620px] w-full rounded-lg p-4">
          <div className="max-h-[75vh] overflow-y-auto scrollBar">
            <DialogHeader>
              <div className="flex justify-start max-sm:justify-center w-full">
                <img
                  src={logo}
                  className="max-w-40 max-sm:w-[296px] max-sm:h-[65px] w-full"
                  alt="logo"
                />
              </div>
              <DialogTitle className="font-inter font-bold text-[#0D0E0E] text-2xl max-sm:text-xl max-sm:text-center pt-1">
                Your Appointment is {appointment?.status}
              </DialogTitle>
              <DialogDescription className="text-base text-[#1A1A1A] max-sm:text-center font-inter pt-4">
                Hello {appointment?.patientId?.name}, <br />
                Thanks for booking the appointment on De9to. Please find below
                the details of your appointment.
              </DialogDescription>
            </DialogHeader>
            <div className="grid grid-cols-[40%_60%] border border-[#717171] mt-2">
              <div>
                <p className="p-2 border-b border-[#717171] text-[#1A1A1A] max-sm:text-xs font-inter">
                  Doctor’s name
                </p>
                <p className="p-2 border-b border-[#717171] text-[#1A1A1A] max-sm:text-xs font-inter">
                  Date & Time
                </p>
                <p className="p-2 border-b border-[#717171] text-[#1A1A1A] max-sm:text-xs font-inter">
                  For
                </p>
                <p className="p-2 border-b border-[#717171] text-[#1A1A1A] max-sm:text-xs font-inter row-span-3 h-[110px]">
                  Clinic Details
                  <div className="h-9"></div>
                </p>
                <p className="p-2 text-[#1A1A1A] max-sm:text-xs font-inter">
                  Appointment ID
                </p>
              </div>
              <div className="border-l border-[#717171]">
                <p className="p-2 border-b border-[#717171] text-[#1A1A1A] max-sm:text-xs font-inter">{`${appointment?.dentistId?.personalDetails?.prefix} ${appointment?.dentistId?.personalDetails?.Firstname}`}</p>
                <p className="p-2 border-b border-[#717171] text-[#1A1A1A] max-sm:text-xs font-inter">
                  {formattedDate} |{" "}
                  {appointment?.timing?.slot?.startTime || "no time"}
                </p>
                <p className="p-2 border-b border-[#717171] text-[#1A1A1A] max-sm:text-xs font-inter">
                  {appointment?.patientId?.name}
                </p>
                <p className="p-2 border-b border-[#717171] text-[#1A1A1A] max-sm:text-xs font-inter h-[110px]">
                  {appointment?.clinicId?.clinicName}
                  <div className="flex flex-wrap gap-2 mt-1">
                    <button
                      onClick={() =>
                        searchOnMap({
                          latitude: appointment?.clinicId?.latitude,
                          longitude: appointment?.clinicId?.longitude,
                        })
                      }
                      className="rounded-[6px] border-[1px] border-[#95C22B] h-8 px-2 flex items-center gap-[6px]"
                    >
                      <FaLocationArrow className="text-[#95C22B] text-xs" />
                      <span className="text-[#95C22B] text-xs font-medium font-inter">
                        Search on map
                      </span>
                    </button>
                    <a
                      href={`tel:+91${appointment?.clinicId?.receptionNumber}`}
                      className="rounded-[6px] border-[1px] border-[#95C22B] h-8 px-2 flex items-center gap-[6px]"
                    >
                      <IoCall className="text-[#95C22B] text-xs" />
                      <span className="text-[#95C22B] text-xs font-medium font-inter">
                        Call now
                      </span>
                    </a>
                  </div>
                </p>
                <p className="p-2 text-[#1A1A1A] max-sm:text-xs font-inter">
                  {appointment?.customAppointmentId}
                </p>
              </div>
            </div>
            {appointment.status === "upcoming" && (
              <Button
                className="w-full mt-5 max-sm:text-base"
                onClick={() => setIsRescheduleModalOpen(true)}
              >
                Reschedule
              </Button>
            )}
          </div>
        </DialogContent>
      </Dialog>

      {isRescheduleModalOpen && (
        <RescheduleModal
          isRescheduleModalOpen={isRescheduleModalOpen}
          setIsRescheduleModalOpen={setIsRescheduleModalOpen}
          clinicId={appointment?.clinicId?._id}
          dentistId={appointment?.dentistId?._id}
          time={appointment?.timing?.slot?.startTime}
          date={appointment?.timing?.date}
          selectedSlotId={appointment?.timing?.slot?._id}
          appointmentId={appointment?._id}
          getAppointmentDetails={getAppointmentDetails}
        />
      )}
    </>
  );
};

export default AppointmentModal;
