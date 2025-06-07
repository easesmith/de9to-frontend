import clinicImg from "@/assets/image (5).png";
import { FaLocationArrow } from "react-icons/fa";
import ReactStars from "react-stars";
import { Button } from "./ui/button";
import ConfirmBookingModal from "./confirm-booking/ConfirmbookingModal";
import { useEffect, useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { calculateAverageRating } from "@/utils/getAverageRating";
import { searchOnMap } from "@/utils/searchOnMap";
import { FaLocationDot } from "react-icons/fa6";
import { Skeleton } from "./ui/skeleton";

const ClinicAppointment = ({ clinic, dentistId, dentistAvailableTiming }) => {
  const {
    clinicPhotos,
    clinicName,
    clinicAddress,
    city,
    nearbyLandmark,
    clinicLogo,
    state,
    clinicPincode,
    consultationfee,
    area,
  } = clinic || {};
  const [isConfirmBookingModalOpen, setIsConfirmBookingModalOpen] =
    useState(false);
  const navigate = useNavigate();

  const averageRating = calculateAverageRating(clinic?.clinicRating);
  const {
    cabinetPics = [],
    opdArea = [],
    certificateWall,
    consultationTable,
    frontFascia,
    receptionCounter,
    waitingArea,
  } = clinic?.clinicPhotos || {};

  const [allPhotos, setAllPhotos] = useState([]);

  useEffect(() => {
    if (clinic?.clinicPhotos) {
      setAllPhotos([
        ...cabinetPics,
        ...opdArea,
        certificateWall,
        consultationTable,
        frontFascia,
        receptionCounter,
        waitingArea,
      ]);
    }
  }, [clinic]);

  return (
    <div className="w-full">
      <p className="font-inter font-semibold text-sm mb-3">{clinic.area}</p>
      <div className="border border-[#85858533] rounded px-4 py-2">
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-[50%_1fr_1fr] gap-4">
            <div>
              <h2
                onClick={() => navigate(`/our-clinic/${clinic?._id}`)}
                className="font-inter cursor-pointer font-semibold text-[#95C22B]"
              >
                {clinicName}
              </h2>
              <ReactStars
                edit={false}
                size={25}
                count={5}
                value={averageRating}
                color2={"#FF8A00"}
                className="-mt-2"
                // char="*"
              />
            </div>
            <div className="grid sm:hidden grid-cols-2 gap-2 mb-3">
              <div>
                <p className="text-[#717171] font-inter font-semibold text-xs">
                  Mon-Fri
                </p>
                <p className="text-[#717171] font-inter font-semibold text-xs">
                  09:30 AM - 07:45 PM
                </p>
              </div>
              <p className="font-inter text-sm text-[#717171]">
                ₹{consultationfee}
              </p>
            </div>
            <div className="mt-4 hidden sm:block">
              <p className="text-[#717171] font-inter font-semibold text-xs">
                Mon-Fri
              </p>
              <p className="text-[#717171] font-inter font-semibold text-xs">
                09:30 AM - 07:45 PM
              </p>
            </div>
            <p className="font-inter hidden sm:block text-sm text-[#717171]">
              ₹{consultationfee}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <p className="flex items-start gap-2">
              <FaLocationDot className="text-[#95C22B] size-6 hidden sm:block shrink-0" />
              <span className="text-sm text-[#717171]">
                {clinicAddress}, {nearbyLandmark}, {area}, {city}, {state},{" "}
                {clinicPincode}
              </span>
            </p>
            <Button
              onClick={() =>
                searchOnMap({
                  latitude: clinic?.latitude,
                  longitude: clinic?.longitude,
                })
              }
              variant="outline"
              className="flex gap-2 text-[#717171] border-[#95C22B] hover:text-[#939292]"
            >
              Get Directions
            </Button>
          </div>
          <p className="font-inter text-xs mt-3 text-[#95C22B] font-semibold">
            Gallery
          </p>
          <div className="flex items-center gap-2 mt-3">
            {allPhotos?.slice(0, 3).map((item, i) => (
              <img
                key={i}
                className="w-10 h-10 rounded-sm"
                src={item?.photoPath}
                alt="clinic image"
              />
            ))}
            {allPhotos?.length > 3 && (
              <div className="w-10 h-10 flex items-center justify-center bg-[#D9D9D9] rounded-sm">
                +{allPhotos.length - 3}
              </div>
            )}
          </div>

          <div className="flex justify-end items-center gap-2">
            <p className="text-[#5B5B5B] text-xs sm:text-base">
              <span className="line-through">₹500</span> <b>FREE</b> via{" "}
              <b>
                de<span className="text-[#95C22B]">9</span>to
              </b>
            </p>
            <Button
              onClick={() => setIsConfirmBookingModalOpen(true)}
              className="bg-[#95C22B] mt-2 text-xs sm:text-sm h-8 sm:h-10 hover:bg-[#9dd41d] flex gap-3 items-center px-6 rounded"
            >
              <span>Book Appointment</span>
              <FiArrowUpRight className="text-xl sm:text-2xl" />
            </Button>
          </div>
          {isConfirmBookingModalOpen && (
            <ConfirmBookingModal
              isConfirmBookingModalOpen={isConfirmBookingModalOpen}
              setIsConfirmBookingModalOpen={setIsConfirmBookingModalOpen}
              clinic={clinic}
              dentistId={dentistId}
              timing={dentistAvailableTiming}
              selectedIndex={0}
            />
          )}
        </div>
      </div>
    </div>
  );
};

ClinicAppointment.Skeleton = function ClinicAppointmentSkeleton() {
  return (
    <div>
      <Skeleton className="w-40 h-8 mb-3" />
      <div className="h-60">
        <div className="grid grid-cols-3 gap-4">
          <div>
            <Skeleton className="w-full h-8" />
            <Skeleton className="w-full h-8 mt-2" />
          </div>
          <div>
            <Skeleton className="w-full h-8" />
            <Skeleton className="w-full h-8 mt-2" />
          </div>
          <div>
            <Skeleton className="w-full h-8" />
          </div>
        </div>
        <div className="flex items-center gap-3 mt-3">
          <Skeleton className="w-full h-10" />
          <Skeleton className="w-40 h-10" />
        </div>
        <div className="flex items-center gap-2 mt-3">
          <Skeleton className="w-10 h-10 rounded-sm" />
          <Skeleton className="w-10 h-10 rounded-sm" />
          <Skeleton className="w-10 h-10 rounded-sm" />
          <Skeleton className="w-10 h-10 rounded-sm" />
        </div>
        <div className="flex justify-end items-center gap-2 mt-3">
          <Skeleton className="w-44 h-10 rounded-sm" />
          <Skeleton className="w-36 h-10 rounded-sm" />
        </div>
      </div>
    </div>
  );
};

export default ClinicAppointment;
