import DataNotFound from "@/components/DataNotFound";
import ImageSkeleton from "@/components/ImageSkeleton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useGetApiReq from "@/hooks/useGetApiReq";
import { calculateAverageRating } from "@/utils/getAverageRating";
import { useCallback, useEffect, useState } from "react";
import { FaGraduationCap } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { IoSearchSharp } from "react-icons/io5";
import { MdLocationOn } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";
import ReactStars from "react-stars";

const SearchCompo = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState("");
  const [gender, setGender] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [allClinic, setAllClinic] = useState([]);
  const [allDentist, setAllDentist] = useState([]);
  const [showAllClinic, setShowAllClinic] = useState(false);
  const [showAllDentist, setShowAllDentist] = useState(false);
  const [showDentistAndClinic, setShowDentistAndClinic] = useState("All");
  const navigate = useNavigate();

  const { pathname } = useLocation();
  const { res, fetchData, isLoading } = useGetApiReq();

  const handleNavigate = (id) => {
    navigate(id);
  };

  const getSearchQuery = useCallback(async () => {
    fetchData(
      `/patient/search?searchText=${searchQuery}&location=${location}&gender=${gender}`,
    );
  }, [searchQuery, location, gender]);

  const handleGetSerachQuery = () => {
    searchQuery && getSearchQuery();
  };

  useEffect(() => {
    handleGetSerachQuery();
  }, [searchQuery, location, gender]);

  useEffect(() => {
    if (res?.status === 200 || res?.status === 201) {
      setIsModalOpen(true);
      console.log("res :", res);
      if (res?.data?.status === true) {
        const { foundClinics, foundDentists } = res?.data || {};
        setAllClinic(foundClinics);
        setAllDentist(foundDentists);
      } else {
        console.log(res?.data?.message);
        setAllClinic([]);
        setAllDentist([]);
      }
    }
  }, [res]);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isModalOpen && event.target.classList.contains("modal")) {
        setIsModalOpen(false);
      }
    };

    window.addEventListener("click", handleOutsideClick);
    return () => window.removeEventListener("click", handleOutsideClick);
  }, [isModalOpen]);

  return (
    <div className="bg-[#717171] px-10 py-5 relative z-10">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-[60%_39%] gap-[1%]">
        <div className="w-full">
          <div className="relative w-full">
            <FiSearch className="absolute size-5 left-3 top-1/2 -translate-y-1/2 text-[#95C22B]" />
            <Input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search Doctors, Clinics etc"
              className="placeholder:text-[#95C22B] placeholder:text-[17px] w-full pl-10 h-10 rounded"
            />
          </div>
        </div>
        <div className="grid grid-cols-[1fr_1fr_56px] gap-3">
          <Select value={location} onValueChange={setLocation}>
            <SelectTrigger className="h-10 w-[205px] rounded text-base text-[#95C22B] [&>svg]:text-[#95C22B] [&>svg]:size-5 font-poppins border-[#95C22B]">
              <div className="flex gap-1 items-center [&>span]:line-clamp-1">
                <MdLocationOn className="size-5 shrink-0" />
                <SelectValue className="" placeholder="Location" />
              </div>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Najabgarh">Najabgarh</SelectItem>
              <SelectItem value="Ramlila Maidan">Ramlila Maidan</SelectItem>
            </SelectContent>
          </Select>
          <Select value={gender} onValueChange={setGender}>
            <SelectTrigger className="h-10 w-[205px] rounded text-base [&>svg]:text-[#95C22B] [&>svg]:size-5 text-[#95C22B] font-poppins">
              <SelectValue placeholder="Gender" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="male">Male</SelectItem>
              <SelectItem value="female">Female</SelectItem>
            </SelectContent>
          </Select>
          <Button
            // disabled={!searchQuery}
            // onClick={handleGetSerachQuery}
            className="text-[#FFFFFF] text-base font-semibold font-poppins rounded w-14 h-10 hover:bg-[#95c22bcf] active:bg-[#95C22B]"
          >
            <IoSearchSharp size={20} />
          </Button>
        </div>
      </div>
      {isModalOpen && (
        <div className="absolute grid grid-cols-[60%_39%] max-[700px]:hidden top-16 max-w-7xl z-20 mx-auto left-0 right-0 w-full h-full">
          <div
            className={`flex flex-col py-8 px-10 gap-2 h-[400px] overflow-y-auto  bg-white ${
              isModalOpen ? "shadow-custom7 rounded-b" : "hidden"
            }`}
          >
            <div className="flex justify-center gap-10">
              <button
                onClick={() => setShowDentistAndClinic("All")}
                className={`w-[150px] ${
                  showDentistAndClinic === "All"
                    ? "bg-[#95C22B] text-[#FFFFFF] border-[#95C22B]"
                    : "bg-[#FFFFFF] text-[#95C22B] border-[#808080]"
                } text-base font-semibold font-inter border rounded px-10 py-2`}
              >
                All
              </button>
              <button
                onClick={() => setShowDentistAndClinic("doctor")}
                className={`w-[150px] ${
                  showDentistAndClinic === "doctor"
                    ? "bg-[#95C22B] text-[#FFFFFF] border-[#95C22B]"
                    : "bg-[#FFFFFF] text-[#95C22B] border-[#808080]"
                } text-base font-semibold font-inter border rounded px-10 py-2`}
              >
                Doctor
              </button>
              <button
                onClick={() => setShowDentistAndClinic("clinic")}
                className={`w-[150px] ${
                  showDentistAndClinic === "clinic"
                    ? "bg-[#95C22B] text-[#FFFFFF] border-[#95C22B]"
                    : "bg-[#FFFFFF] text-[#95C22B] border-[#808080]"
                } text-base font-semibold font-inter border rounded px-10 py-2`}
              >
                Clinics
              </button>
            </div>
            <div className="flex flex-col gap-5">
              {showDentistAndClinic === "All" && (
                <div>
                  {allClinic.length === 0 && allDentist.length === 0 ? (
                    <DataNotFound name="Clinics and Dentists" />
                  ) : (
                    <>
                      <div className="flex flex-col justify-between gap-12">
                        {allDentist.length > 0 && (
                          <div className="flex justify-between items-center">
                            <p className="text-[#3F3F3F] text-lg font-medium font-poppins">
                              Doctors
                            </p>
                            <p className="text-[#3F3F3F] text-lg font-medium font-poppins">
                              {allDentist.length} results
                            </p>
                          </div>
                        )}
                        {allDentist.length > 0 && (
                          <div className="flex flex-col gap-5">
                            {allDentist
                              .slice(0, showAllDentist ? allDentist.length : 3)
                              .map((e, i) => {
                                const averageRating = calculateAverageRating(
                                  e?.dentistRatings,
                                );
                                return (
                                  <div key={i} className="flex flex-col gap-3">
                                    <div className="flex gap-[10px]">
                                      <ImageSkeleton
                                        src={
                                          e?.personalDetails?.image
                                            ? e?.personalDetails?.image
                                            : "https://wallpapers.com/images/high/placeholder-profile-icon-20tehfawxt5eihco.png"
                                        }
                                        imgClassName={
                                          "w-[60px] h-[60px] rounded-sm cursor-pointer"
                                        }
                                        skeletonClassName={
                                          "w-[60px] h-[60px] rounded-sm cursor-pointer"
                                        }
                                        onClick={() =>
                                          handleNavigate(
                                            `/our-dentist/${e._id}`,
                                          )
                                        }
                                      />
                                      <div className="flex flex-col items-start gap-4">
                                        <div className="flex items-center gap-9 -mt-1">
                                          <h4
                                            onClick={() =>
                                              handleNavigate(
                                                `/our-dentist/${e._id}`,
                                              )
                                            }
                                            className="text-[#1A1A1A] hover:text-blue-800 hover:underline cursor-pointer text-lg font-semibold font-inter"
                                          >
                                            Dr. {e.personalDetails.Firstname}{" "}
                                            {e.personalDetails.lastName}
                                          </h4>
                                          <ReactStars
                                            count={5}
                                            value={averageRating}
                                            edit={false}
                                            color2="#FF8A00"
                                          />
                                        </div>
                                        <div className="flex gap-2">
                                          <FaGraduationCap className="text-[#717171] text-2xl" />
                                          <h4 className="text-[#FF8A00] text-base font-semibold font-inter flex items-center gap-2">
                                            {e.personalDetails.degree.join(
                                              ", ",
                                            )}
                                            <div className="border border-[#FF8A00] h-3"></div>{" "}
                                            {e?.clinic[0]?.clinicName}{" "}
                                          </h4>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                );
                              })}
                          </div>
                        )}
                        <div className="flex justify-center items-center">
                          <button
                            onClick={() => setShowAllDentist(true)}
                            className="text-[#3F3F3F] text-lg font-medium font-poppins"
                          >
                            {allDentist.length > 3 &&
                              `${showAllDentist ? "" : "See All"}`}
                          </button>
                        </div>
                      </div>
                      <div className="w-full border border-[#D9D9D9] mb-5"></div>
                      <div className="flex flex-col justify-between gap-12">
                        {allClinic.length > 0 && (
                          <div className="flex justify-between items-center">
                            <p className="text-[#3F3F3F] text-lg font-medium font-poppins">
                              Clinics
                            </p>
                            <p className="text-[#3F3F3F] text-lg font-medium font-poppins">
                              {allClinic.length} results
                            </p>
                          </div>
                        )}
                        <div className="flex flex-col gap-5">
                          {allClinic.length > 0 &&
                            allClinic
                              .slice(0, showAllClinic ? allClinic.length : 3)
                              .map((e, i) => {
                                const averageRating = calculateAverageRating(
                                  e?.clinicRating,
                                );
                                return (
                                  <div key={i} className="flex flex-col gap-3">
                                    <div className="flex gap-[10px]">
                                      <ImageSkeleton
                                        src={
                                          e?.clinicLogo
                                            ? e?.clinicLogo
                                            : "https://wallpapers.com/images/high/placeholder-profile-icon-20tehfawxt5eihco.png"
                                        }
                                        imgClassName={
                                          "w-[60px] h-[60px] rounded-sm cursor-pointer"
                                        }
                                        skeletonClassName={
                                          "w-[60px] h-[60px] rounded-sm cursor-pointer"
                                        }
                                        onClick={() =>
                                          handleNavigate(`/our-clinic/${e._id}`)
                                        }
                                      />
                                      {/* <img onClick={() => handleNavigate(`/our-clinic/${e._id}`)} src={e?.clinicLogo} alt="" className='w-[60px] h-[60px] rounded-sm cursor-pointer' /> */}
                                      <div className="flex flex-col items-start gap-1">
                                        <div className="flex items-center gap-9 -mt-1">
                                          <h4 className="text-[#1A1A1A] cursor-pointer hover:text-blue-800 hover:underline text-lg font-semibold font-inter">
                                            {e.clinicName}
                                          </h4>
                                          <ReactStars
                                            count={5}
                                            value={averageRating}
                                            edit={false}
                                            color2="#FF8A00"
                                          />
                                        </div>
                                        <div className="flex gap-2">
                                          <h4 className="text-[#FF8A00] text-base font-semibold font-inter">
                                            {e.area}
                                          </h4>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                );
                              })}
                        </div>
                        <div className="flex justify-center items-center">
                          <button
                            onClick={() => setShowAllClinic(true)}
                            className="text-[#3F3F3F] text-lg font-medium font-poppins"
                          >
                            {allClinic.length > 3 &&
                              `${showAllClinic ? "" : "See All"}`}
                          </button>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              )}
              {showDentistAndClinic === "doctor" && (
                <div className="flex flex-col justify-between">
                  {allDentist.length > 0 && (
                    <div className="flex justify-between items-center">
                      <p className="text-[#3F3F3F] text-lg font-medium font-poppins">
                        Doctors
                      </p>
                      <p className="text-[#3F3F3F] text-lg font-medium font-poppins">
                        {allDentist.length} results
                      </p>
                    </div>
                  )}
                  {allDentist.length > 0 ? (
                    <div className="flex flex-col gap-5">
                      {allDentist
                        .slice(0, showAllDentist ? allDentist.length : 3)
                        .map((e, i) => {
                          const averageRating = calculateAverageRating(
                            e?.dentistRatings,
                          );
                          return (
                            <div key={i} className="flex flex-col gap-3">
                              <div className="flex gap-[10px]">
                                <ImageSkeleton
                                  src={
                                    e?.personalDetails?.image
                                      ? e?.personalDetails?.image
                                      : "https://wallpapers.com/images/high/placeholder-profile-icon-20tehfawxt5eihco.png"
                                  }
                                  imgClassName={
                                    "w-[60px] h-[60px] rounded-sm cursor-pointer"
                                  }
                                  skeletonClassName={
                                    "w-[60px] h-[60px] rounded-sm cursor-pointer"
                                  }
                                  onClick={() =>
                                    handleNavigate(`/our-dentist/${e._id}`)
                                  }
                                />
                                <div className="flex flex-col items-start gap-4">
                                  <div className="flex items-center gap-9 -mt-1">
                                    <h4
                                      onClick={() =>
                                        handleNavigate(`/our-dentist/${e._id}`)
                                      }
                                      className="text-[#1A1A1A] hover:text-blue-800 hover:underline cursor-pointer text-lg font-semibold font-inter"
                                    >
                                      Dr. {e.personalDetails.Firstname}{" "}
                                      {e.personalDetails.lastName}
                                    </h4>
                                    <ReactStars
                                      count={5}
                                      value={averageRating}
                                      edit={false}
                                      color2="#FF8A00"
                                    />
                                  </div>
                                  <div className="flex gap-2">
                                    <FaGraduationCap className="text-[#717171] text-2xl" />
                                    <h4 className="text-[#FF8A00] text-base font-semibold font-inter flex items-center gap-2">
                                      {e.personalDetails.degree.join(", ")}
                                      <div className="border border-[#FF8A00] h-3"></div>{" "}
                                      {e?.clinic[0]?.clinicName}{" "}
                                    </h4>
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                    </div>
                  ) : (
                    <DataNotFound name="Dentist" />
                  )}
                  <div className="flex justify-center items-center">
                    <p
                      onClick={() => setShowAllDentist(true)}
                      className="text-[#3F3F3F] text-lg font-medium font-poppins"
                    >
                      {allDentist.length > 3 &&
                        `${showAllDentist ? "" : "See All"}`}
                    </p>
                  </div>
                </div>
              )}
              {showDentistAndClinic === "clinic" && (
                <div className="flex flex-col justify-between gap-12">
                  {allClinic.length > 0 && (
                    <div className="flex justify-between items-center">
                      <p className="text-[#3F3F3F] text-lg font-medium font-poppins">
                        Clinics
                      </p>
                      <p className="text-[#3F3F3F] text-lg font-medium font-poppins">
                        {allClinic.length} results
                      </p>
                    </div>
                  )}
                  <div className="flex flex-col gap-5">
                    {allClinic.length === 0 ? (
                      <DataNotFound name="Clinics" />
                    ) : (
                      allClinic
                        .slice(0, showAllClinic ? allClinic.length : 3)
                        .map((e, i) => {
                          const averageRating = calculateAverageRating(
                            e?.clinicRating,
                          );
                          return (
                            <div key={i} className="flex flex-col gap-3">
                              <div className="flex gap-[10px]">
                                <img
                                  onClick={() =>
                                    handleNavigate(`/our-clinic/${e._id}`)
                                  }
                                  src={e?.clinicLogo}
                                  alt=""
                                  className="w-[60px] object-cover h-[60px] rounded-sm cursor-pointer"
                                />
                                <div className="flex flex-col items-start gap-1">
                                  <div className="flex items-center gap-9 -mt-1">
                                    <h4 className="text-[#1A1A1A] text-lg font-semibold font-inter">
                                      {e.clinicName}
                                    </h4>
                                    <ReactStars
                                      count={5}
                                      value={averageRating}
                                      edit={false}
                                      color2="#FF8A00"
                                    />
                                  </div>
                                  <div className="flex gap-2">
                                    <h4 className="text-[#FF8A00] text-base font-semibold font-inter">
                                      {e?.area}
                                    </h4>
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })
                    )}
                  </div>
                  <div className="flex justify-center items-center">
                    <p
                      onClick={() => setShowAllClinic(true)}
                      className="text-[#3F3F3F] text-lg font-medium font-poppins"
                    >
                      {allClinic.length > 3 &&
                        `${showAllClinic ? "" : "See All"}`}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchCompo;
