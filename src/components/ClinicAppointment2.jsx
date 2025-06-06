import clinicImg from "@/assets/image (5).png";
import ReactStars from "react-stars";
import { Button } from "./ui/button";
import { FaLocationArrow } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { useState } from "react";
import ConfirmBookingModal from "./confirm-booking/ConfirmbookingModal";
import { useNavigate } from "react-router-dom";
import { calculateAverageRating } from "@/utils/getAverageRating";
import { searchOnMap } from "@/utils/searchOnMap";

const ClinicAppointment2 = ({ clinic, dentistId, dentistDetails }) => {
  const {
    clinicPhotos,
    clinicName,
    clinicAddress,
    city,
    nearbyLandmark,
    state,
    clinicPincode,
    clinicLogo,
  } = clinic || {};
  const [isConfirmBookingModalOpen, setIsConfirmBookingModalOpen] =
    useState(false);

  const navigate = useNavigate();

  console.log("dentistDetails", dentistDetails);
  const averageRating = calculateAverageRating(clinic?.clinicRating);

  return (
    <div className="grid grid-cols-[8px_1fr] gap-1">
      <div className="border-l-8 max-[500px]:border-l-4 border-[#C4C4C4] h-full rounded-full w-2"></div>
      <div className="border-2 max-[500px]:border border-l-transparent border-[#5B5B5B] rounded-tr-md rounded-br-md px-4 py-2">
        <img
          className="w-full cursor-pointer"
          onClick={() => navigate(`/our-clinic/${clinic?._id}`)}
          src={clinicLogo}
          alt=""
        />
        <div>
          <ReactStars
            edit={false}
            size={25}
            count={5}
            value={averageRating}
            color2={"#FF8A00"}
          />
          <h2
            onClick={() => navigate(`/our-clinic/${clinic?._id}`)}
            className="font-inter cursor-pointer font-semibold text-[#1A1A1A]"
          >
            {clinicName}
          </h2>
          <Button
            onClick={() =>
              searchOnMap({
                latitude: clinic?.latitude,
                longitude: clinic?.longitude,
              })
            }
            variant="outline"
            className="flex gap-2 mt-3 text-[#717171] border-[#717171] hover:text-[#939292]"
          >
            <FaLocationArrow className="text-[#717171]" />
            <span>Search on map</span>
          </Button>
          <p className="font-inter text-sm max-[500px]:text-[10px] text-[#717171] my-2">
            <span className="font-bold">Address:</span>
            {`${clinicAddress}, ${nearbyLandmark}, ${city}, ${state}, ${clinicPincode}`}
          </p>
          <p className="text-[#5B5B5B]">
            <span className="line-through">₹500</span> <b>FREE</b> via{" "}
            <b>
              de<span className="text-[#95C22B]">9</span>to
            </b>
          </p>
          {/* <Button onClick={() => setIsConfirmBookingModalOpen(true)} className="bg-[#95C22B] w-full mt-2 hover:bg-[#9dd41d] flex gap-3 items-center px-6 rounded-[10px]">
                        <span>Book Appointment</span>
                        <FiArrowUpRight className='text-2xl' />
                    </Button> */}

          {isConfirmBookingModalOpen && (
            <ConfirmBookingModal
              isConfirmBookingModalOpen={isConfirmBookingModalOpen}
              setIsConfirmBookingModalOpen={setIsConfirmBookingModalOpen}
              clinic={clinic}
              dentistId={dentistId}
              timing={dentistDetails?.dentistAvailableTiming}
              selectedIndex={0}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ClinicAppointment2;
