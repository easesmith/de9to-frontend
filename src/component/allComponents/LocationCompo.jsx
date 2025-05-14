import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { HiMiniXMark } from "react-icons/hi2";
import { Input } from "@/components/ui/input";
import { useLocation } from "react-router-dom";
import { IoSearchSharp } from "react-icons/io5";
import { Button } from "@/components/ui/button";

const LocationCompo = ({
  searchQuery,
  setSearchQuery,
  handleGetSerachQuery,
  location,
  isShadow,
  setLocation,
  setIsShadow,
  setShowDentistAndClinic,
  gender,
  handleGenderChange
}) => {
  const { pathname } = useLocation();

  return (
    <div
      className={`flex max-[700px]:hidden w-full justify-center items-center gap-3 ${isShadow ? "rounded-b-none border-t-0 border-s-0 border-e-0" : ""
        }`}
    >
      <div className="relative w-full">
        <Input
          // type="search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search Dentists, Clinic etc."
          className="text-[#000000] text-base font-medium font-poppins border-[#95C22B] placeholder:text-[#000000] px-6 py-7 rounded-lg"
        />
        {searchQuery && (
          <HiMiniXMark
            onClick={() => {
              setIsShadow(false),
                setShowDentistAndClinic("All"),
                setSearchQuery("");
            }}
            className="absolute text-lg right-5 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
          />
        )}
      </div>
      <Select value={location} onValueChange={setLocation}>
        <SelectTrigger className="w-[280px] py-7 rounded-lg text-base text-[#3F3F3F] font-medium font-poppins border-[#95C22B]">
          <SelectValue placeholder="Select Location" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Najabgarh">Najabgarh</SelectItem>
          <SelectItem value="Ramlila Maidan">Ramlila Maidan</SelectItem>
        </SelectContent>
      </Select>
      <Select value={gender} onValueChange={handleGenderChange}>
        <SelectTrigger className="w-[280px] py-7 rounded-lg text-base text-[#3F3F3F] font-medium font-poppins border-[#95C22B]">
          <SelectValue placeholder="Select Gender" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="male">Male</SelectItem>
          <SelectItem value="female">Female</SelectItem>
        </SelectContent>
      </Select>
      <Button
        disabled={!searchQuery}
        onClick={handleGetSerachQuery}
        className={`${pathname === "/" ? "bg-[#5A5A5A]" : "bg-[#5B5B5B]"
          }  text-[#FFFFFF] text-base font-semibold font-poppins rounded-lg px-5 hover:bg-[#5A5A5A] py-[18px] h-full`}
      >
        <IoSearchSharp size={20} />
      </Button>
    </div>
  );
};

export default LocationCompo;
