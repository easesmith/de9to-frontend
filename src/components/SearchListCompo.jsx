import React, { useCallback, useEffect, useRef, useState } from "react";
import ReactStars from "react-stars";
import doctorProfileImg from "@/assets/Rectangle 34624568.png";
import { FaGraduationCap } from "react-icons/fa6";
import LocationCompo from "@/component/allComponents/LocationCompo";
import useGetApiReq from "@/hooks/useGetApiReq";
import DataNotFound from "./DataNotFound";
import { calculateAverageRating } from "@/utils/getAverageRating";
import { useLocation, useNavigate } from "react-router-dom";
import { IoSearchSharp } from "react-icons/io5";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import ImageSkeleton from "./ImageSkeleton";
import { useIsMobile } from "@/hooks/use-mobile";

const SearchListCompo = ({
  setAllDentists = () => {},
  setAllClinics = () => {},
  handleGenderChange,
  gender,
}) => {
  const [isShadow, setIsShadow] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState("");
  const [allClinic, setAllClinic] = useState([]);
  const [allDentist, setAllDentist] = useState([]);
  const [showAllClinic, setShowAllClinic] = useState(false);
  const [showAllDentist, setShowAllDentist] = useState(false);
  const [showDentistAndClinic, setShowDentistAndClinic] = useState("All");
  const modalRef = useRef();

  const isMobile = useIsMobile();

  const handleQuery = () => {
    setQuery(true);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      console.log("event.target", event.target);
      console.log("modalRef", modalRef);

      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsShadow(false); // Close the modal
      }
    }

    if (isShadow) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isShadow]);

  const navigate = useNavigate();

  const handleNavigate = (id) => {
    navigate(id);
  };

  const { pathname } = useLocation();
  const { res, fetchData, isLoading } = useGetApiReq();

  const getSearchQuery = useCallback(async () => {
    fetchData(
      `/patient/search?searchText=${searchQuery}&location=${location}&gender=${gender}`,
    );
  }, [searchQuery, location, gender]);

  const handleGetSerachQuery = () => {
    searchQuery && getSearchQuery();
  };
  console.log("isMobile", isMobile);

  useEffect(() => {
    handleGetSerachQuery();
  }, [searchQuery, location, gender]);

  useEffect(() => {
    if (res?.status === 200 || res?.status === 201) {
      setIsShadow(true);
      console.log("res :", res);
      if (res?.data?.status === true) {
        const { foundClinics, foundDentists } = res?.data || {};
        setAllClinic(foundClinics);
        setAllDentist(foundDentists);
        if (isMobile) {
          setAllDentists(foundDentists);
          setAllClinics(foundClinics);
        }
        // setQuery(true)
      } else {
        console.log(res?.data?.message);
        setAllClinic([]);
        setAllDentist([]);
        if (isMobile) {
          setAllDentists([]);
          setAllClinics([]);
        }
      }
    }
  }, [res, isMobile]);

  return (
    <section
      className={`!max-w-[1200px] relative w-full mx-auto ${
        isShadow ? "min-[700px]:shadow-custom7" : ""
      }`}
    >
      <LocationCompo
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        handleQuery={handleQuery}
        handleGetSerachQuery={handleGetSerachQuery}
        location={location}
        isShadow={isShadow}
        setIsShadow={setIsShadow}
        setShowDentistAndClinic={setShowDentistAndClinic}
        setLocation={setLocation}
        handleGenderChange={handleGenderChange}
        gender={gender}
      />
      <div className="min-[700px]:hidden mt-4 flex items-center gap-2">
        <div className="relative w-full">
          <IoSearchSharp className="absolute left-3 top-1/2 -translate-y-1/2 text-[#717171]" />
          <Input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search doctors, clinic etc."
            className="placeholder:text-[#717171] w-full pl-10 h-12 border-[#E4E6EE]"
          />
        </div>
        <Button
          className={`h-12 ${
            pathname === "/"
              ? "bg-[#5A5A5A] hover:bg-[#4d4d4d]"
              : "bg-[#95C22B]"
          } `}
          onClick={handleGetSerachQuery}
        >
          <IoSearchSharp size={20} />
        </Button>
      </div>
      <>
        {
          isShadow && (
            // <div className='modal max-[700px]:hidden fixed inset-0 bg-black/50 flex justify-center items-center z-30'>
            <div
              ref={modalRef}
              className={`flex max-[700px]:hidden flex-col py-8 px-10 gap-8 max-h-[500px] overflow-y-auto max-w-[1240px] w-full z-20 mx-auto absolute top-16 bg-white ${
                isShadow ? "shadow-custom7 rounded-b-2xl" : "hidden"
              }`}
            >
              <div className="flex justify-center gap-10">
                <button
                  onClick={() => setShowDentistAndClinic("All")}
                  className={`w-[150px] ${
                    showDentistAndClinic === "All"
                      ? "bg-[#95C22B] text-[#FFFFFF] border-[#95C22B]"
                      : "bg-[#FFFFFF] text-[#95C22B] border-[#808080]"
                  } text-base font-semibold font-inter border rounded-[10px] px-10 py-2`}
                >
                  All
                </button>
                <button
                  onClick={() => setShowDentistAndClinic("doctor")}
                  className={`w-[150px] ${
                    showDentistAndClinic === "doctor"
                      ? "bg-[#95C22B] text-[#FFFFFF] border-[#95C22B]"
                      : "bg-[#FFFFFF] text-[#95C22B] border-[#808080]"
                  } text-base font-semibold font-inter border rounded-[10px] px-10 py-2`}
                >
                  Doctor
                </button>
                <button
                  onClick={() => setShowDentistAndClinic("clinic")}
                  className={`w-[150px] ${
                    showDentistAndClinic === "clinic"
                      ? "bg-[#95C22B] text-[#FFFFFF] border-[#95C22B]"
                      : "bg-[#FFFFFF] text-[#95C22B] border-[#808080]"
                  } text-base font-semibold font-inter border rounded-[10px] px-10 py-2`}
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
                          <div className="flex flex-col gap-5">
                            {allDentist.length > 0 &&
                              allDentist
                                .slice(
                                  0,
                                  showAllDentist ? allDentist.length : 3,
                                )
                                .map((e, i) => {
                                  const averageRating = calculateAverageRating(
                                    e?.dentistRatings,
                                  );
                                  return (
                                    <div
                                      key={i}
                                      className="flex flex-col gap-3"
                                    >
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
                                      {/* <h6 className="text-[#3F3F3F] text-sm font-normal font-inter">
                                        Searched keywords:{" "}
                                        <span className="text-[#95C22B] font-semibold">
                                          Multi-Speciality Clinic
                                        </span>
                                      </h6> */}
                                    </div>
                                  );
                                })}
                          </div>
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
                                    <div
                                      key={i}
                                      className="flex flex-col gap-3"
                                    >
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
                                            handleNavigate(
                                              `/our-clinic/${e._id}`,
                                            )
                                          }
                                        />
                                        {/* <img onClick={() => handleNavigate(`/our-clinic/${e._id}`)} src={e?.clinicLogo} alt="" className='w-[60px] h-[60px] rounded-sm cursor-pointer' /> */}
                                        <div className="flex flex-col items-start gap-1">
                                          <div className="flex items-center gap-9 -mt-1">
                                            <h4
                                              onClick={() =>
                                                handleNavigate(
                                                  `/our-clinic/${e._id}`,
                                                )
                                              }
                                              className="text-[#1A1A1A] cursor-pointer hover:text-blue-800 hover:underline text-lg font-semibold font-inter"
                                            >
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
                                      {/* <h6 className="text-[#3F3F3F] text-sm font-normal font-inter">
                                        Searched keywords:{" "}
                                        <span className="text-[#95C22B] font-semibold">
                                          2 years experience
                                        </span>
                                      </h6> */}
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
                    <div className="flex flex-col gap-5">
                      {allDentist.length > 0 &&
                        allDentist
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
                                        {e.personalDetails.degree.join(", ")}
                                        <div className="border border-[#FF8A00] h-3"></div>{" "}
                                        {e?.clinic[0]?.clinicName}{" "}
                                      </h4>
                                    </div>
                                  </div>
                                </div>
                                {/* <h6 className="text-[#3F3F3F] text-sm font-normal font-inter">
                                        Searched keywords:{" "}
                                        <span className="text-[#95C22B] font-semibold">
                                          Multi-Speciality Clinic
                                        </span>
                                      </h6> */}
                              </div>
                            );
                          })}
                    </div>
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
                                    className="w-[60px] h-[60px] rounded-sm cursor-pointer"
                                  />
                                  <div className="flex flex-col items-start gap-1">
                                    <div className="flex items-center gap-9 -mt-1">
                                      <h4
                                        onClick={() =>
                                          handleNavigate(`/our-clinic/${e._id}`)
                                        }
                                        className="text-[#1A1A1A] cursor-pointer hover:text-blue-800 hover:underline text-lg font-semibold font-inter"
                                      >
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
          )
          // </div>
        }
      </>
    </section>
  );
};

export default SearchListCompo;
