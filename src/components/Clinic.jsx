import PlusImg from "@/assets/medical-doctor-logo-for-sale 1.png";
import VerifiedImg from "@/assets/verified 1.png";
import DoctorBagImg from "@/assets/wpf_doctors-bag.png";
import RupayImg from "@/assets/Rupay.png";
import VectorImg from "@/assets/Vector.png";
import { FaLocationArrow } from "react-icons/fa";
import { MdOutlineArrowOutward } from "react-icons/md";
import ReactStars from "react-stars";
import { Button } from "./ui/button";
// import { IoMdCall } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { useState } from "react";
import ConfirmBookingModal from "./confirm-booking/ConfirmbookingModal";
import { useNavigate } from "react-router-dom";
import { calculateAverageRating } from "@/utils/getAverageRating";
import ImageSkeleton from "./ImageSkeleton";
import { searchOnMap } from "@/utils/searchOnMap";

const Clinic = ({ clinic }) => {
  const [isConfirmBookingModalOpen, setIsConfirmBookingModalOpen] =
    useState(false);
  const navigate = useNavigate();

  // const handleMapSearch = () => {
  //     const latitude = 28.6466773;
  //     const longitude = 77.1564994;
  //     const mapUrl = `https://www.google.com/maps/@?api=1&map_action=map&center=${latitude},${longitude}&zoom=15`;
  //     window.open(mapUrl, '_blank'); // Opens Google Maps in a new tab with the coordinates
  // };

  const averageRating = calculateAverageRating(clinic?.clinicRating);

  return (
    <div className="p-4 rounded-[6px] flex max-[500px]:flex-col gap-[10px] shadow-custom4 bg-[#FFFFFF]">
      <div
        onClick={() => navigate(`/our-clinic/${clinic?._id}`)}
        className="rounded-lg cursor-pointer w-[250px] max-[600px]:w-[350px] h-[250px] max-[500px]:w-full max-[500px]:h-full flex justify-center items-end relative -mt-[10px]"
      >
        <ImageSkeleton
          src={
            clinic?.clinicLogo
              ? clinic?.clinicLogo
              : "https://media.istockphoto.com/id/1451587807/vector/user-profile-icon-vector-avatar-or-person-icon-profile-picture-portrait-symbol-vector.jpg?s=612x612&w=0&k=20&c=yDJ4ITX1cHMh25Lt1vI1zBn2cAKKAlByHBvPJ8gEiIg="
          }
          imgClassName={"h-full w-[250px] rounded-lg"}
          skeletonClassName={"h-full w-[250px] rounded-lg"}
        />
        {/* <img className='h-full w-[250px] rounded-lg' src={clinic?.clinicLogo ? clinic?.clinicLogo : "https://media.istockphoto.com/id/1451587807/vector/user-profile-icon-vector-avatar-or-person-icon-profile-picture-portrait-symbol-vector.jpg?s=612x612&w=0&k=20&c=yDJ4ITX1cHMh25Lt1vI1zBn2cAKKAlByHBvPJ8gEiIg="} alt="" /> */}
        <img
          src={VerifiedImg}
          alt=""
          className="absolute top-[2%] right-[2%]"
        />
      </div>
      <div className="pe-[25px] ps-[9px] flex flex-col justify-start gap-2 max-[600px]:w-full w-[calc(100%-210px)]">
        <div className="flex items-center justify-between max-[650px]:flex-col max-[650px]:items-start gap-4">
          <div className="flex items-center gap-4">
            <h4
              onClick={() => navigate(`/our-clinic/${clinic?._id}`)}
              className="text-[#1A1A1A] cursor-pointer text-2xl max-[500px]:text-base font-semibold font-inter"
            >
              {clinic?.clinicName}
            </h4>
          </div>
          <div className="flex flex-col items-end gap-1">
            <ReactStars
              className="m-0 disable-hover"
              size={25}
              count={5}
              value={averageRating}
              color2={"#FF8A00"}
              edit={false}
            />
            <div className="text-[#000000] text-[10px] text-right font-normal font-inter">
              Rated by {clinic?.clinicRating?.length} users
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-start gap-2">
          <h5 className="text-[#FF8A00] text-base max-[500px]:text-sm font-semibold font-inter">
            Multi-Speciality Clinic
          </h5>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-[6px] rounded-[35px] px-[10px]">
              <img src={VectorImg} alt="" />
              <p className="text-[#838383] text-xs font-normal font-inter">
                2-8+ years Experience
              </p>
            </div>
            <div className="flex items-center gap-[6px] rounded-[35px] px-[10px]">
              <img src={DoctorBagImg} alt="" />
              <p className="text-[#838383] text-xs font-normal font-inter">
                {clinic?.dentistCount} Dentists
              </p>
            </div>
            <div className="flex items-center gap-[6px] rounded-[35px] px-[10px]">
              <img src={RupayImg} alt="" />
              <p className="text-[#838383] text-xs font-normal font-inter">
                ₹{clinic?.consultationfee} for consultation
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center max-[768px]:flex-col gap-4 max-[768px]:items-start">
          <div className="flex gap-2">
            <button
              onClick={() =>
                searchOnMap({
                  latitude: clinic?.latitude,
                  longitude: clinic?.longitude,
                })
              }
              className="rounded-[6px] border-[1px] border-[#95C22B] py-[6px] px-2 flex items-center gap-[6px]"
            >
              <FaLocationArrow className="text-[#95C22B] text-xs" />
              <span className="text-[#95C22B] text-xs font-medium font-inter">
                Search on map
              </span>
            </button>
            <button className="rounded-[6px] border-[1px] border-[#95C22B] py-[6px] px-2 flex items-center gap-[6px]">
              <IoCall className="text-[#95C22B] text-xs" />
              <span className="text-[#95C22B] text-xs font-medium font-inter">
                Call now
              </span>
            </button>
          </div>
          <div className="flex items-center max-[768px]:justify-between max-[768px]:w-full gap-2">
            <p className="text-[#838383] text-sm font-normal font-poppins">
              <span className="line-through">₹500</span>{" "}
              <span className="font-semibold">FREE</span> via{" "}
              <span className="font-semibold">
                de<span className="text-[#95C22B]">9</span>to
              </span>
            </p>
            <button
              onClick={() => navigate(`/our-clinic/${clinic?._id}`)}
              className="rounded-[6px] border-[1px] border-[#95C22B] bg-[#95C22B] py-[6px] px-2 flex justify-center items-center gap-[6px]"
            >
              <span className="text-[#FFFFFF] text-xs font-semibold font-inter">
                View
              </span>
              <MdOutlineArrowOutward className="text-[#FFFFFF] text-xs" />
            </button>
          </div>
        </div>
        {isConfirmBookingModalOpen && (
          <ConfirmBookingModal
            isConfirmBookingModalOpen={isConfirmBookingModalOpen}
            setIsConfirmBookingModalOpen={setIsConfirmBookingModalOpen}
          />
        )}
      </div>
    </div>
  );
};

export default Clinic;
