import React, { useState } from "react";
import Clinics from "./Clinics";
import DentistGallery from "../DentistGallery";
import { useNavigate, useParams } from "react-router-dom";

const Tabs = ({clinics,dentistAvailableTiming}) => {
  const [currentTab, setCurrentTab] = useState("clinics");
const navigate = useNavigate();
const params = useParams();

  const handleTabClick = (tab) => {
    setCurrentTab(tab);
  };

  const handleClickReview = () => {
    navigate(`/our-dentist/${params?.dentistId}#reviews`)
}

  console.log("currentTab", currentTab);

  return (
    <div>
      <div className="flex items-center ">
        <button
          onClick={() => handleTabClick("clinics")}
          className={`font-inter px-6 text-[#1A1A1A] font-medium ${currentTab === "clinics" ? "bg-[#D9D9D9] border-b-2  border-[#95C22B]" : ""} py-2`}
        >
          Clinics
        </button>
        <button
          onClick={handleClickReview}
          className={`font-inter px-6 text-[#1A1A1A] font-medium py-2`}
        >
          Reviews
        </button>
        <button
          onClick={() => {}}
          className={`font-inter px-6 text-[#1A1A1A] font-medium py-2`}
        >
          Consult Q&A
        </button>
        <button
          onClick={() => handleTabClick("gallery")}
          className={`font-inter px-6 text-[#1A1A1A] font-medium ${currentTab === "gallery" ? "bg-[#D9D9D9] border-b-2  border-[#95C22B]" : ""} py-2`}
        >
          Gallery
        </button>
      </div>
      <div className="bg-white shadow-[0px_0px_20px_rgba(0,0,0,0.1)] rounded p-4">
        {currentTab === "clinics" && <Clinics clinics={clinics} dentistAvailableTiming={dentistAvailableTiming} />}
        {currentTab === "gallery" && <DentistGallery clinics={clinics} /> }
      </div>
    </div>
  );
};

export default Tabs;
