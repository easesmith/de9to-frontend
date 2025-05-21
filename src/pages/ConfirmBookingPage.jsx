import PlusImg from "@/assets/medical-doctor-logo-for-sale 1.png";
import doctorImg from "@/assets/Rectangle 34624568.png";
import VectorImg5 from "@/assets/Vector (5).png";
import VerifiedImg from "@/assets/verified 1.png";
import Layout from "@/component/Layout/Layout";
import ConfirmBookingForm from "@/components/confirm-booking/ConfirmBookingForm";
import ConfirmBookingModal from "@/components/confirm-booking/ConfirmbookingModal";
import { Button } from "@/components/ui/button";
import useGetApiReq from "@/hooks/useGetApiReq";
import { calculateAverageRating } from "@/utils/getAverageRating";
import { readCookie } from "@/utils/readCookie";
import { searchOnMap } from "@/utils/searchOnMap";
import { format } from "date-fns";
import { useCallback, useEffect, useState } from "react";
import {
  FaGraduationCap,
  FaLocationArrow,
  FaRegCalendarAlt,
  FaRegClock,
} from "react-icons/fa";
import { MdCall } from "react-icons/md";
import { useLocation } from "react-router-dom";
import ReactStars from "react-stars";

const ConfirmBookingPage = () => {
  const {
    state: { data, clinicDetails, slotId, timing, startIndex },
  } = useLocation();
  const [singleClinic, setSingleClinic] = useState();
  const userInfo = readCookie("userInfo");
  const { res, fetchData, isLoading } = useGetApiReq();
  const {
    res: res1,
    fetchData: fetchData1,
    isLoading: isLoading1,
  } = useGetApiReq();

  console.log("userInfo", userInfo);
  console.log("data", data);
  console.log("clinicDetails", clinicDetails);
  console.log("slotId", slotId);

  const [isConfirmBookingModalOpen, setIsConfirmBookingModalOpen] =
    useState(false);
  const [selectedDate, setSelectedDate] = useState(data?.date); // Initialize with default values
  const [selectedTime, setSelectedTime] = useState(data?.time); // Initialize with default values

  useEffect(() => {
    setSelectedDate(data?.date);
    setSelectedTime(data?.time);
  }, [data]);

  const [dentistDetails, setDentistDetails] = useState("");

  const getDentistDetails = useCallback(async () => {
    fetchData(`/dentist/get-dentist-details?dentistId=${data?.dentistId}`);
  }, [fetchData]);

  useEffect(() => {
    getDentistDetails();
  }, [data?.dentistId]);

  useEffect(() => {
    if (res?.status === 200 || res?.status === 201) {
      console.log("Dentist details res", res);
      setDentistDetails(res?.data?.data?.dentist);
    }
  }, [res]);

  const getClinic = async () => {
    fetchData1(`/patient/get-single-clinic?clinicId=${data.clinic}`);
  };

  useEffect(() => {
    getClinic();
  }, []);

  useEffect(() => {
    if (res1?.status === 200 || res1?.status === 201) {
      setSingleClinic(res1?.data?.foundClinic);
      console.log("clinic details response", res1);
    }
  }, [res1]);

  const {
    clinicPhotos,
    clinicName,
    clinicAddress,
    city,
    nearbyLandmark,
    state,
    clinicPincode,
    latitude,
    longitude,
    receptionNumber,
  } = singleClinic || {};

  const {
    personalDetails,
    clinic = [],
    educationalQualification,
    dentistRatings,
  } = dentistDetails || {};

  console.log("clinicDetails?.clinicRating", clinicDetails?.clinicRating);

  const clinicAverageRating =
    clinicDetails?.clinicRating &&
    calculateAverageRating(clinicDetails?.clinicRating);
  const dentistAverageRating =
    dentistRatings && calculateAverageRating(dentistRatings);

  return (
    <Layout>
      <div className="grid grid-cols-2 max-[900px]:grid-cols-1 gap-5 max-w-[1240px] mx-auto mb-5">
        <div className="bg-[#FCFFF4] px-4 py-6">
          <h1 className="font-inter font-medium text-xl sm:text-3xl">
            In Clinic Appointment
          </h1>
          <h3 className="mt-5 font-inter text-base sm:text-xl">
            Appointment Details
          </h3>
          <div className="flex justify-between items-start mt-5">
            <div className="flex items-center gap-2">
              <FaRegCalendarAlt className="text-[#717171]" />
              <span className="font-inter text-sm sm:text-base text-[#1A1A1A]">
                On {format(new Date(selectedDate), "EEE MMM dd,yy")}
              </span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <FaRegClock className="text-[#717171]" />
                <span className="font-inter text-sm sm:text-base text-[#1A1A1A]">
                  At {selectedTime}
                </span>
              </div>
              <Button
                onClick={() => setIsConfirmBookingModalOpen(true)}
                variant="outline"
                className="h-7 text-[#95C22B] text-sm sm:text-base hover:text-[#95C22B] mt-4"
              >
                Change Date & Time
              </Button>
            </div>
          </div>

          <h4 className="font-inter mt-4 text-[#1A1A1A] text-sm sm:text-base font-semibold">
            Selected Dentist
          </h4>
          <div className="border-2 border-[#C9C9C9] rounded-md p-3 mt-5 grid grid-cols-[24%_73%] max-[500px]:grid-cols-1 gap-3">
            <div>
              <div className="rounded-[6px] relative w-full">
                <img
                  className="absolute top-1 right-1"
                  src={VerifiedImg}
                  alt=""
                />
                <img
                  className="h-full w-full"
                  src={personalDetails?.image}
                  alt=""
                />
              </div>
              <p className="text-center font-inter font-semibold mt-4 text-sm max-[500px]:text-xs text-[#717171]">
                Reg. No: {educationalQualification?.regNumber}
              </p>
            </div>
            <div>
              <div className="flex max justify-between max-[500px]:flex-col max-[500px]:items-start items-center gap-3">
                <h2 className="text-base sm:text-xl font-inter font-semibold text-[#1A1A1A]">{`${personalDetails?.prefix} ${personalDetails?.Firstname} ${personalDetails?.lastName}`}</h2>
                <div>
                  <ReactStars
                    edit={false}
                    size={25}
                    count={5}
                    value={dentistAverageRating}
                    color2={"#FF8A00"}
                  />
                  <div className="text-[#000000] text-[10px] max-[500px]:text-left text-right font-normal font-inter">
                    Rated by {dentistRatings && dentistRatings.length} users
                  </div>
                </div>
              </div>
              <div className="flex items-center max-[500px]:items-start gap-2 mt-3">
                <FaGraduationCap className="text-[#717171] text-2xl" />
                <div className="flex gap-2 items-center flex- text-sm">
                      <p className=" text-[#717171] font-inter font-semibold">
                        {personalDetails?.degree.join(", ")}
                      </p>
                </div>
              </div>
              <p className="text-[#717171] font-inter mt-3 break-words font-semibold">
                {clinic?.some((item) => item.defaultClinic)
                  ? clinic?.find((item) => item.defaultClinic)?.clinicName
                  : clinic[0]?.clinicName}
              </p>
            </div>
          </div>

          <h4 className="font-inter mt-4 text-[#1A1A1A] text-sm sm:text-base font-semibold">
            Selected Clinic
          </h4>
          <div className="shadow-lg rounded-md p-3 mt-5 bg-white grid max-[500px]:grid-cols-1 grid-cols-[40%_58%] lg:grid-cols-[30%_68%] gap-3">
            <div className="rounded-[6px] relative">
              <img
                className="absolute top-1 right-1"
                src={VerifiedImg}
                alt=""
              />
              <img
                className="w-full h-full"
                src={singleClinic?.clinicLogo}
                alt=""
              />
            </div>
            <div>
              <div className="flex justify-between flex-col lg:flex-row items-start lg:items-center gap-0 lg:gap-3">
                <h2 className="text-xl font-inter font-semibold text-[#1A1A1A]">
                  {clinicName}
                </h2>
                <div className="w-32">
                  <ReactStars
                    edit={false}
                    size={20}
                    count={5}
                    value={clinicAverageRating}
                    color2={"#FF8A00"}
                  />
                  <div className="text-[#000000] text-[10px] text-left lg:text-right font-normal font-inter">
                    Rated by {singleClinic?.clinicRating?.length} users
                  </div>
                </div>
              </div>
              <div className="flex gap-2 items-center mt-3">
                <img src={VectorImg5} alt="" />
                <h5 className="text-[#717171] text-base max-[500px]:text-sm font-semibold font-inter">
                  Multi-Speciality Clinic
                </h5>
              </div>
              <p className="font-inter text-sm max-[500px]:text-xs text-[#717171] my-2">
                <span className="font-bold">Address:</span>
                {`${clinicAddress}, ${nearbyLandmark}, ${city}, ${state}, ${clinicPincode}`}
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex max-[500px]:text-sm max-[500px]:h-8 max-[500px]:px-2 gap-2 text-[#95C22B] border-[#95C22B] hover:text-[#95C22B]"
                  asChild
                >
                  <a href={`tel:+91${receptionNumber}`}>
                    <MdCall className="text-[#95C22B] text-xl" />
                    <span>Call now</span>
                  </a>
                </Button>
                <Button
                  onClick={() =>
                    searchOnMap({
                      latitude,
                      longitude,
                    })
                  }
                  variant="outline"
                  size="sm"
                  className="flex max-[500px]:text-sm max-[500px]:h-8 max-[500px]:px-2 gap-2 text-[#95C22B] border-[#95C22B] hover:text-[#95C22B]"
                >
                  <FaLocationArrow className="text-[#95C22B]" />
                  <span>Search on map</span>
                </Button>
              </div>
            </div>
          </div>

          {isConfirmBookingModalOpen && (
            <ConfirmBookingModal
              isConfirmBookingModalOpen={isConfirmBookingModalOpen}
              setIsConfirmBookingModalOpen={setIsConfirmBookingModalOpen}
              selectedDate={selectedDate}
              selectedTime={selectedTime}
              clinic={{ _id: data.clinic }}
              dentistId={data?.dentistId}
              timing={timing}
              selectedIndex={startIndex}
              // updateDateAndTime={updateDateAndTime}
            />
          )}
        </div>
        <div className="px-4 py-6">
          <h2 className="font-inter text-xl font-medium mb-4">
            Enter Patient Details
          </h2>
          <ConfirmBookingForm apiData={{ ...data, slotId }} />
        </div>
      </div>
    </Layout>
  );
};

export default ConfirmBookingPage;
