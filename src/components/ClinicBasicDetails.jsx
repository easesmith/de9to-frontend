import carouselImg from "@/assets/carouselImg.png";
import PlusImg from "@/assets/medical-doctor-logo-for-sale 1.png";
import VectorImg5 from "@/assets/Vector (5).png";
import VerifiedImg from "@/assets/verified 1.png";
import { FaLocationArrow } from "react-icons/fa";
import { MdCall } from "react-icons/md";
import ReactStars from "react-stars";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Button } from "./ui/button";
import { FaLocationDot } from "react-icons/fa6";
import { calculateAverageRating } from "@/utils/getAverageRating";
import ImageSkeleton from "./ImageSkeleton";
import { searchOnMap } from "@/utils/searchOnMap";

const ClinicBasicDetails = ({ clinic }) => {
  const {
    clinicPhotos,
    clinicName,
    clinicAddress,
    city,
    nearbyLandmark,
    state,
    clinicPincode,
    clinicRating,
  } = clinic || {};
  const averageRating = clinicRating && calculateAverageRating(clinicRating);

  return (
    <div className="grid grid-cols-[77%_260px] max-[960px]:grid-cols-1 max-[700px]:grid-cols-1 h-full gap-4">
      <div className="rounded-[5px] flex flex-col h-full gap-5">
        {/* <p className='text-[#838383] text-xl font-semibold font-inter'>Choose clinic near you</p> */}
        <div className="p-4 rounded-[6px] h-full flex max-[700px]:flex-col gap-[10px] shadow-lg">
          <div className="rounded-[6px] relative w-[210px] max-[500px]:w-full max-[900px]:w-[50%]">
            <img className="absolute top-1 right-1" src={VerifiedImg} alt="" />
            <ImageSkeleton
              src={clinic?.clinicLogo}
              imgClassName={"h-full w-full"}
              skeletonClassName={"h-full w-full"}
            />
            {/* <img className='h-full w-full' src={clinic?.clinicLogo} alt="" /> */}
          </div>
          <div className=" h-full ps-[9px] max-[500px]:px-0 flex flex-col items-start justify-between max-[900px]:w-full w-[calc(100%-210px)]">
            <div>
              <div className="flex items-center max-[500px]:flex-col max-[500px]:items-start max-[500px]:justify-start max-[500px]:gap-0 justify-between gap-4">
                <div className="flex items-center gap-4">
                  <h4 className="text-[#1A1A1A] text-2xl max-[500px]:base font-semibold font-inter">
                    {clinic?.clinicName}
                  </h4>
                  <Button
                    onClick={() =>
                      searchOnMap({
                        latitude: clinic?.latitude,
                        longitude: clinic?.longitude,
                      })
                    }
                    variant="outline"
                    size="sm"
                    className="flex gap-2 max-[1045px]:hidden text-[#95C22B] border-[#95C22B] hover:text-[#95C22B]"
                  >
                    <FaLocationArrow className="text-[#95C22B]" />
                    <span>Search on map</span>
                  </Button>
                </div>
                <div>
                  <ReactStars
                    edit={false}
                    size={25}
                    count={5}
                    value={averageRating}
                    color2={"#FF8A00"}
                  />
                  <div className="text-[#000000] text-[10px] text-right max-[500px]:text-left font-normal font-inter">
                    Rated by {clinicRating?.length} users
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-start gap-2 mt-2">
                <div className="flex gap-2 items-center">
                  <img src={VectorImg5} alt="" />
                  <h5 className="text-[#717171] text-base font-semibold font-inter">
                    Multi-Speciality Clinic
                  </h5>
                </div>
                <div className="flex gap-2 items-center my-[2px]">
                  <FaLocationDot className="text-[#717171]" />
                  <p className="text-sm text-[#717171]">{`${clinicAddress}, ${nearbyLandmark}, ${city}, ${state}, ${clinicPincode}`}</p>
                </div>
                <p className="text-[#717171] font-inter">
                  Best in{" "}
                  <span className="font-semibold text-black">
                    Dental Care, State-of-the-Art-Facilities
                  </span>
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-center mt-4">
              <Button
                asChild
                variant="outline"
                size="sm"
                className="flex gap-2 max-[500px]:py-2 max-[500px]:px-2 text-[#95C22B] border-[#95C22B] hover:text-[#95C22B] max-[500px]:text-sm"
              >
                <a href={`tel:+91${clinic?.receptionNumber}`}>
                  <MdCall className="text-[#95C22B] text-xl" />
                  <span>Call now</span>
                </a>
              </Button>
              <Button
                onClick={() =>
                  searchOnMap({
                    latitude: clinic?.latitude,
                    longitude: clinic?.longitude,
                  })
                }
                variant="outline"
                size="sm"
                className="flex max-[500px]:py-2 max-[500px]:px-2 min-[1045px]:hidden gap-2 text-[#95C22B] border-[#95C22B] hover:text-[#95C22B]"
              >
                <FaLocationArrow className="text-[#95C22B]" />
                <span>Search on map</span>
              </Button>
            </div>
            {/* <div>
                        </div> */}
          </div>
        </div>
      </div>
      <div className="max-[960px]:hidden">
        <Swiper
          loop={true}
          modules={[Pagination, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          // onSwiper={(swiper) => console.log(swiper)}
          // onSlideChange={() => console.log('slide change')}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide>
            <img className="" src={carouselImg} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="" src={carouselImg} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="" src={carouselImg} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default ClinicBasicDetails;
