/* eslint-disable react/prop-types */
import carouselImg from "@/assets/carouselImg.png";
import PlusImg from "@/assets/medical-doctor-logo-for-sale 1.png";
import VerifiedImg from "@/assets/verified 1.png";
import testVideo from "@/assets/videos/test.mp4";
import { Badge } from "@/components/ui/badge";
import { calculateAverageRating } from "@/utils/getAverageRating";
import { FaGraduationCap, FaPlay } from "react-icons/fa";
import ReactPlayer from "react-player";
import ReactStars from "react-stars";
import ImageSkeleton from "./ImageSkeleton";
import location from "@/assets/location.svg";

const DentistBasicDetails = ({ details }) => {
  const averageRating =
    details && calculateAverageRating(details?.dentistRatings);

  return (
    <div className="grid grid-cols-1  gap-4">
      <div className="rounded-[5px] flex flex-col gap-5">
        {/* <p className='text-[#838383] text-xl font-semibold font-inter'>Choose clinic near you</p> */}
        <div className="p-4 rounded-[6px] flex flex-col sm:flex-row gap-[10px] shadow-md">
          <div>
            <div className="rounded-[6px] relative h-[200px] w-[200px] ">
              <img
                className="absolute top-1 right-1"
                src={VerifiedImg}
                alt=""
              />
              <ImageSkeleton
                src={details?.personalDetails?.image}
                imgClassName={"aspect-square"}
                skeletonClassName={"aspect-square"}
              />
              {/* <img className='h-full w-full' src={details?.personalDetails?.image} alt="" /> */}
            </div>
            <p className="text-center max-[900px]:text-left font-inter font-semibold mt-4 text-sm text-[#717171]">
              Reg. No: {details?.educationalQualification?.regNumber}
            </p>
          </div>
          <div className="pe-[25px] ps-[9px] max-[500px]:px-0 gap-6 w-[calc(100%-210px)] max-[900px]:w-full">
            <div className="flex items-center justify-between max-[500px]:justify-start max-[500px]:items-start max-[500px]:flex-col max-[500px]:gap-0 gap-4">
              <div className="flex items-center">
                <h4 className="text-[#1A1A1A] text-2xl font-semibold font-inter">{`${details?.personalDetails?.prefix}. ${details?.personalDetails?.Firstname} ${details?.personalDetails?.lastName}`}</h4>
              </div>
              <div>
                <ReactStars
                  edit={false}
                  size={25}
                  count={5}
                  value={averageRating}
                  color2={"#FF8A00"}
                />
                <div className="text-[#000000] text-[10px] max-[900px]:text-left text-right font-normal font-inter">
                  Rated by {details?.dentistRatings?.length} users
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-start gap-2">
              <div className="flex items-center gap-2 mt-1">
                <FaGraduationCap className="text-[#95C22B] text-2xl" />
                <div className="flex gap-1 items-center">
                  {details?.personalDetails?.degree.some(
                    (item) => item === "MDS",
                  ) && (
                    <p className="text-[#95C22B] font-inter font-semibold max-[760px]:text-sm max-[500px]:text-xs">
                      {details?.personalDetails?.degree.find(
                        (item) => item === "MDS",
                      )}{" "}
                      -
                    </p>
                  )}
                  {details?.personalDetails?.specialty && (
                    <p className="text-[#95C22B] font-inter font-semibold whitespace-nowrap max-[760px]:text-sm max-[500px]:text-xs">
                      {details?.personalDetails?.specialty},
                    </p>
                  )}
                  {details?.personalDetails?.degree.some(
                    (item) => item === "BDS",
                  ) && (
                    <p className="text-[#95C22B] font-inter font-semibold max-[760px]:text-sm max-[500px]:text-xs">
                      {details?.personalDetails?.degree.find(
                        (item) => item === "BDS",
                      )}
                    </p>
                  )}
                </div>
              </div>
              <div className="px-3 py-2 bg-[#F4F9EA] border border-[#95C22B] rounded mt-2">
                <div className="flex items-center gap-1">
                  <svg
                    width="12"
                    height="14"
                    viewBox="0 0 12 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.12134 8.54375C4.30815 8.21899 4.66236 7.99032 5.08479 7.85934C5.60952 8.31511 6.39005 8.31511 6.9148 7.85934C7.33723 7.99034 7.69145 8.21899 7.87826 8.54452C6.98223 9.87925 5.01736 9.87925 4.12134 8.54375ZM11.9351 3.85982L11.4197 4.52564L11.7855 5.2837L10.9934 4.99847L10.3849 5.58136L10.4113 4.73961L9.66873 4.34121L10.4779 4.10636L10.6275 3.27779L11.1011 3.97382L11.9351 3.85988V3.85982ZM9.4269 1.35082L9.31296 2.18559L10.009 2.65919L9.18042 2.80878L8.94477 3.6172L8.54637 2.87545L7.70462 2.90102L8.28748 2.29333L8.00303 1.50118L8.76108 1.86701L9.4269 1.35082ZM0.0644805 3.85982L0.899258 3.97377L1.37282 3.27773L1.52242 4.1063L2.33084 4.34116L1.58909 4.73955L1.61468 5.58131L1.00699 4.99842L0.214051 5.28364L0.580676 4.52559L0.0644531 3.85977L0.0644805 3.85982ZM2.57346 1.35082L3.23849 1.86704L3.9973 1.50121L3.71205 2.29336L4.29491 2.90104L3.45316 2.87548L3.05477 3.61723L2.81991 2.80881L1.99055 2.65921L2.68735 2.18562L2.57341 1.35084L2.57346 1.35082ZM6.00018 0.433105L6.31873 1.21287L7.15816 1.27488L6.51561 1.81823L6.71557 2.63674L6.00015 2.19262L5.28396 2.63674L5.4847 1.81823L4.84138 1.27488L5.6816 1.21287L6.00015 0.433105H6.00018ZM6.00018 5.73711C6.59004 5.73711 7.06749 6.21535 7.06749 6.80521C7.06749 7.39507 6.59004 7.87328 6.00018 7.87328C5.41032 7.87328 4.93208 7.39504 4.93208 6.80521C4.93208 6.21538 5.41032 5.73711 6.00018 5.73711ZM5.35839 3.47305C5.74285 3.2033 6.25751 3.2033 6.64194 3.47305C6.85664 3.6242 7.08917 3.68619 7.35039 3.66295C7.81857 3.62188 8.26421 3.87921 8.46265 4.30473C8.5735 4.54347 8.74322 4.71322 8.9812 4.82405C9.40748 5.02248 9.66482 5.46739 9.62298 5.93554C9.6005 6.19752 9.66252 6.42929 9.81288 6.64476C10.0826 7.02921 10.0826 7.54387 9.81288 7.92833C9.66252 8.14303 9.6005 8.37556 9.62298 8.63754C9.66484 9.10493 9.40751 9.5506 8.9812 9.74904C8.74322 9.85986 8.5735 10.0296 8.46265 10.2676C8.26421 10.6939 7.81854 10.9512 7.35039 10.9101C7.08917 10.8869 6.85664 10.9489 6.64194 11.1C6.25748 11.3698 5.74282 11.3698 5.35839 11.1C5.14293 10.9489 4.91116 10.8869 4.64918 10.9101C4.181 10.9512 3.73535 10.6939 3.53768 10.2676C3.42683 10.0296 3.25632 9.85989 3.01837 9.74904C2.59285 9.5506 2.33552 9.10493 2.37659 8.63754C2.39983 8.37556 2.33784 8.14303 2.18668 7.92833C1.91694 7.54387 1.91694 7.02921 2.18668 6.64476C2.33781 6.42929 2.39983 6.19752 2.37659 5.93554C2.33552 5.46739 2.59285 5.02248 3.01837 4.82405C3.25632 4.71322 3.42683 4.54347 3.53768 4.30473C3.73535 3.87921 4.181 3.62188 4.64918 3.66295C4.91116 3.68622 5.14293 3.6242 5.35839 3.47305ZM6.00018 4.69772C7.42946 4.69772 8.58824 5.85726 8.58824 7.28654C8.58824 8.71583 7.42946 9.8746 6.00018 9.8746C4.57089 9.8746 3.41136 8.71583 3.41136 7.28654C3.41136 5.85726 4.57013 4.69772 6.00018 4.69772ZM3.17806 10.2962L2.39056 13.2354L3.90431 12.4417L4.81893 13.8865L5.45218 11.5224C5.35262 11.4818 5.25798 11.4301 5.17005 11.3682C5.01889 11.262 4.86156 11.2202 4.67786 11.2364C4.0725 11.2899 3.49582 10.9566 3.24005 10.4063C3.22145 10.3668 3.20133 10.3296 3.17806 10.2962ZM8.82156 10.2962L9.60906 13.2354L8.09531 12.4417L7.18069 13.8865L6.54744 11.5224C6.64664 11.4821 6.7412 11.4302 6.83034 11.3682C6.98149 11.262 7.13806 11.2202 7.32176 11.2364C7.92712 11.2899 8.5038 10.9566 8.75957 10.4063C8.7774 10.3681 8.79811 10.3313 8.82156 10.2962Z"
                      fill="#717171"
                    />
                  </svg>
                  <span className="text-[#717171] font-inter text-xs">
                    {details?.educationalQualification?.yearsOfExperience}+
                    years Experience
                  </span>
                </div>
                {/* <div className="flex items-center gap-1 mt-2">
                  <img src={location} alt="location" />
                  <span className="text-[#717171] font-inter text-xs">
                    no address
                  </span>
                </div> */}
              </div>

              <div className="flex items-center gap-2 mt-2 py-1 px-2 bg-[#F6F6F6] w-auto">
              <img
                className="size-5"
                src={VerifiedImg}
                alt=""
              />
                <span className="text-xs text-[#717171] font-inter font-semibold">Medical Registrations Verified</span>
              </div>
              <p className="text-[#717171] font-inter font-normal text-xs mt-1">
                {details?.personalDetails?.Bio}
              </p>
            </div>

            {/* <div>
                        </div> */}
          </div>
        </div>
      </div>
      <div className="relative rounded-md h-full w-full">
        {/* <ReactPlayer
                    url={testVideo}
                    playing={true}
                    controls
                    width="100%"
                    height="100%"
                    light={
                        <div className='h-full w-full'>
                            <img className='h-full w-full' src={carouselImg} alt="" />
                            <div className="absolute inset-0 flex justify-center items-center">
                                <div className="bg-[#95C22B] rounded-full flex justify-center cursor-pointer items-center h-[70px] w-[70px]">
                                    <FaPlay className='text-xl text-white' />
                                </div>
                            </div>
                        </div>
                    }
                /> */}
      </div>
    </div>
  );
};

export default DentistBasicDetails;
