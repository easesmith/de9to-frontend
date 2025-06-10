import doctorImg from "@/assets/Rectangle 34624568.png";
// import expImg from '@/assets/Vector (6).png'
// import rupeeImg from '@/assets/Group (1).png'
import VectorImg from "@/assets/Vector.png";
import VerifiedImg from "@/assets/verified 1.png";
import MediDocImg from "@/assets/mediDoc.png";
import RupayImg from "@/assets/Rupay.png";
import {
  FaCalendarAlt,
  FaCheck,
  FaCheckCircle,
  FaClock,
  FaGraduationCap,
  FaRegHeart,
  FaShieldVirus,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import ReactStars from "react-stars";
import { Button } from "@/components/ui/button";
import { FiArrowUpRight } from "react-icons/fi";
import { useState } from "react";
import ConfirmbookingModal from "@/components/confirm-booking/ConfirmbookingModal";
import { useNavigate } from "react-router-dom";
import { calculateAverageRating } from "@/utils/getAverageRating";
import ImageSkeleton from "@/components/ImageSkeleton";
import { IoChatbox } from "react-icons/io5";
import { BiSolidInjection } from "react-icons/bi";
import { MdVerified } from "react-icons/md";
import VerifiedIcon from "@/components/VerifiedIcon";
import { Verified } from "lucide-react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { format } from "date-fns";

const Dentist1 = ({ dentist }) => {
  const [isConfirmBookingModalOpen, setIsConfirmBookingModalOpen] =
    useState(false);

  const handleClick = (e) => {
    e.stopPropagation();
    setIsConfirmBookingModalOpen(true);
  };

  const handleClickReview = (e) => {
    e.stopPropagation();
    navigate(`/our-dentist/${dentist?._id}#reviews`);
  };

  const {
    personalDetails,
    _id,
    clinic,
    assignedClinic,
    dentistRatings,
    dentistAvailableTiming = [],
    educationalQualification,
  } = dentist || {};

  const defaultClinic = clinic.find(
    (singleClinic) => singleClinic?.defaultClinic,
  );
  const filteredAvailabilityData = dentistAvailableTiming?.filter(
    (item) => item?.clinic === defaultClinic?._id,
  );
  const availabilityData = filteredAvailabilityData?.map((item) => item?.day);
  const modifiedClinic = assignedClinic.map((clinic) => clinic?.clinicId);

  // console.log("modifiedClinic", [...modifiedClinic, ...clinic]);

  // console.log("availabilityData", availabilityData);

  const averageRating = calculateAverageRating(dentistRatings);

  const navigate = useNavigate();

  function handleNavigateDentistDetailPage(id) {
    navigate(`/our-dentist/${id}`);
  }

  const today = format(new Date(), "EEEE");
  const filteredTiming = dentistAvailableTiming?.find(
    (item) => item?.day.toLowerCase() === today.toLowerCase(),
  );

  return (
    <>
      <div className="border-2 p-4 grid grid-cols-1 lg:grid-cols-[75%_23%] gap-x-[2%] border-[#95C22B]">
        <div className="grid grid-cols-1 md:grid-cols-[18%_80%] gap-x-[2%]">
          <div className="flex flex-col items-center">
            <div className=" rounded-full relative">
              <TooltipProvider delayDuration={200}>
                <ImageSkeleton
                  src={
                    personalDetails?.image
                      ? personalDetails?.image
                      : "https://media.istockphoto.com/id/1451587807/vector/user-profile-icon-vector-avatar-or-person-icon-profile-picture-portrait-symbol-vector.jpg?s=612x612&w=0&k=20&c=yDJ4ITX1cHMh25Lt1vI1zBn2cAKKAlByHBvPJ8gEiIg="
                  }
                  imgClassName={
                    "rounded-full h-24 cursor-pointer w-24 object-cover"
                  }
                  skeletonClassName={"rounded-full h-24 w-24"}
                  onClick={() => handleNavigateDentistDetailPage(_id)}
                />
                {/* <MdVerified className='text-[#95C22B] absolute -top-1 right-1 size-6' /> */}
                <Tooltip>
                  <TooltipTrigger className="absolute -top-1 right-1">
                    <VerifiedIcon />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>De9to Verified</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <p className="text-center font-inter font-semibold mt-2 text-sm text-[#717171]">
              Reg. No: {educationalQualification?.regNumber}
            </p>
            <Button
              onClick={() => handleNavigateDentistDetailPage(_id)}
              className="rounded-none mt-2 h-8"
            >
              View Profile
            </Button>
          </div>
          <div>
            <div className="flex flex-col sm:flex-row justify-between gap-3 flex-wrap sm:flex-nowrap">
              <div className="mt-2 sm:mt-0">
                <h2
                  onClick={() => handleNavigateDentistDetailPage(_id)}
                  className="text-2xl cursor-pointer hover:underline hover:text-blue-800 font-inter -mt-1 font-semibold text-gray-600"
                >
                  {personalDetails?.prefix}. {personalDetails?.Firstname}{" "}
                  {personalDetails?.lastName}
                </h2>
                <div className="flex gap-1 items-center text-sm">
                  {personalDetails?.degree.some((item) => item === "MDS") && (
                    <p className="text-muted-foreground font-inter font-semibold">
                      {personalDetails?.degree.find((item) => item === "MDS")} -
                    </p>
                  )}
                  {personalDetails?.specialty && (
                    <p className="text-muted-foreground font-inter font-semibold whitespace-nowrap max-[760px]:text-sm max-[500px]:text-xs">
                      {personalDetails?.specialty},
                    </p>
                  )}
                  {personalDetails?.degree.some((item) => item === "BDS") && (
                    <p className="text-muted-foreground font-inter font-semibold">
                      {personalDetails?.degree.find((item) => item === "BDS")}
                    </p>
                  )}
                </div>
                <p className="text-[#95C22B] font-inter text-base font-bold">
                  {clinic?.length === 1
                    ? clinic[0]?.clinicName
                    : clinic?.find((item) => item?.defaultClinic)?.clinicName}
                </p>
                <p className="text-gray-500 font-inter text-sm font-semibold">
                  Self Owned Clinic
                </p>
                <p className="text-gray-500 font-medium">
                  <b className="mr-1">Experience:</b>{" "}
                  {educationalQualification?.yearsOfExperience > 0
                    ? `${educationalQualification?.yearsOfExperience}+ Years`
                    : "Not mentioned"}
                </p>
                <p className="text-gray-500 font-medium">
                  <b className="mr-1">Area:</b>{" "}
                  {clinic?.length === 1
                    ? clinic[0]?.area
                    : clinic?.find((item) => item?.defaultClinic)?.area}
                </p>
              </div>
              <div className="sm:ml-auto">
                <ReactStars
                  className="-mt-3"
                  size={30}
                  count={5}
                  value={averageRating}
                  edit={false}
                  color2={"#95C22B"}
                />
                <b className="text-gray-500">Today ({today})</b>
                {filteredTiming?.slot[0] && (
                  <p className="text-gray-500 font-medium">
                    {filteredTiming?.slot[0]?.startTime} to{" "}
                    {filteredTiming?.slot[0]?.endTime}
                  </p>
                )}
                {filteredTiming?.slot[1] && (
                  <p className="text-gray-500 font-medium">
                    {filteredTiming?.slot[1]?.startTime} to{" "}
                    {filteredTiming?.slot[1]?.endTime}
                  </p>
                )}
                {/* <p className='text-gray-500 font-medium'><b className='mr-2'>Info:</b> Monday (Morning) & <br /> Sunday(Evening)</p> */}
                <div>
                  <button
                    onClick={() => handleNavigateDentistDetailPage(_id)}
                    className="text-[#95C22B] hover:text-[#b1e045] hover:underline"
                  >
                    View More
                  </button>
                </div>
              </div>
            </div>
            {/* <p className='text-gray-500 font-medium'><b className='mr-2'>Address:</b> {educationalQualification?.yearsOfExperience}+ Years</p> */}
          </div>
        </div>
        <div className="lg:border-l-4 border-gray-500 flex flex-row flex-wrap lg:flex-col mt-5 lg:mt-0 lg:justify-center items-center gap-3 px-5">
          <div className="rounded-none mt-1 w-full sm:w-44 flex items-center justify-center gap-x-4">
            <BiSolidInjection className="text-[#95C22B] hover:scale-125 transition" />
            <FaShieldVirus className="text-[#95C22B] hover:scale-125 transition" />
            <FaRegHeart className="text-[#95C22B] hover:scale-125 transition" />
            <FaCheckCircle className="text-[#95C22B] hover:scale-125 transition" />
          </div>
          <div className="border-2 flex items-center gap-x-3 justify-center text-gray-400 border-gray-400 px-2 h-9 w-full sm:w-44">
            <IoChatbox className="text-[#95C22B] size-5" />
            <span className="font-medium">
              {dentist?.dentistRatings?.length} Patient Stories
            </span>
          </div>
          <Button
            onClick={handleClickReview}
            className="rounded-none text-base h-9 w-full sm:w-44"
          >
            Share Your Review
          </Button>
          <Button
            onClick={handleClick}
            className="rounded-none text-base h-9 w-full sm:w-44"
          >
            Book Appointment
          </Button>
        </div>
      </div>
      {isConfirmBookingModalOpen && (
        <ConfirmbookingModal
          isConfirmBookingModalOpen={isConfirmBookingModalOpen}
          setIsConfirmBookingModalOpen={setIsConfirmBookingModalOpen}
          dentistId={_id}
          clinic={[...modifiedClinic, ...clinic]}
          timing={dentist?.dentistAvailableTiming}
          selectedIndex={0}
        />
      )}
    </>
  );
};

export default Dentist1;
