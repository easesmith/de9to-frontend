import React, { useState } from "react";
import Clinics from "./Clinics";
import DentistGallery from "../DentistGallery";
import { useNavigate, useParams } from "react-router-dom";

const Tabs = ({ clinics, dentistAvailableTiming }) => {
  const [currentTab, setCurrentTab] = useState("clinics");
  const navigate = useNavigate();
  const params = useParams();

  const handleTabClick = (tab) => {
    setCurrentTab(tab);
  };

  const handleClickReview = () => {
    navigate(`/our-dentist/${params?.dentistId}#reviews`);
  };

  const handleClick = () => {
    navigate(`/our-dentist/${params?.dentistId}#consultQA`);
  };

  return (
    <div>
      <div className="flex items-center ">
        <button
          onClick={() => handleTabClick("clinics")}
          className={`font-inter px-2 sm:px-6 text-sm sm:text-base text-[#1A1A1A] font-medium ${currentTab === "clinics" ? "bg-[#D9D9D9] border-b-2  border-[#95C22B]" : ""} py-2`}
        >
          Clinics
        </button>
        <button
          onClick={() => handleTabClick("gallery")}
          className={`font-inter px-2 sm:px-6 text-sm sm:text-base text-[#1A1A1A] font-medium ${currentTab === "gallery" ? "bg-[#D9D9D9] border-b-2  border-[#95C22B]" : ""} py-2`}
        >
          Gallery
        </button>
        <button
          onClick={handleClickReview}
          className={`font-inter px-2 sm:px-6 text-sm sm:text-base text-[#1A1A1A] font-medium py-2`}
        >
          Reviews
        </button>
        <button
          onClick={handleClick}
          className={`font-inter px-2 sm:px-6 text-sm sm:text-base text-[#1A1A1A] font-medium py-2`}
        >
          Consult Q&A
        </button>
      </div>
      <div>
        {currentTab === "clinics" && (
          <Clinics
            clinics={clinics}
            dentistAvailableTiming={dentistAvailableTiming}
          />
        )}
        {currentTab === "gallery" && <DentistGallery clinics={clinics} />}
      </div>
    </div>
  );
};

export default Tabs;
