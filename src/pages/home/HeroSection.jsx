import SearchListCompo from "@/components/SearchListCompo";
import { useIsMobile } from "@/hooks/use-mobile";
import useGetApiReq from "@/hooks/useGetApiReq";
import { useEffect, useState } from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  const { res, fetchData } = useGetApiReq();
  const [contentData, setContentData] = useState({
    content: "",
    image: "",
    image1: "",
  });

  const getContent = () => {
    fetchData(`/patient/get-specific-content?pageName=home&sectionName=hero`);
  };

  useEffect(() => {
    getContent();
  }, []);

  useEffect(() => {
    if (res?.status === 200 || res?.status === 201) {
      const { images = [], content = [] } = res?.data?.foundContent || {};

      setContentData({
        content: content[0]?.resources,
        image: images[0]?.image || "",
        image1: images[1]?.image || "",
      });
    }
  }, [res]);
  console.log("contentData", contentData);

  const [gender, setGender] = useState('');

  const handleGenderChange = (value) => {
    setGender(value);
  }

  return (
    <div className="relative w-full">
      <section
        style={{
          backgroundImage: `url("${isMobile ? contentData.image1 : contentData.image
            }")`,
        }}
        className="bg-cover bg-center bg-no-repeat h-[800px] sm:h-[600px] w-full"
      >
        <div className="max-w-[1200px] px-1 relative w-full mx-auto pt-20 h-full">
          <div className="max-[970px]:hidden w-full">
            <SearchListCompo gender={gender} handleGenderChange={handleGenderChange} />
          </div>
          <div className="w-full h-[90%] sm:h-[75%] flex items-start sm:items-end">
            <button
              onClick={() => navigate("/our-dentist")}
              className="flex justify-center items-center gap-1 bg-[#5A5A5A] border-[1px] border-[#5A5A5A] rounded-lg px-5 py-3 max-[500px]:py-2 hover:bg-[#5A5A5A] cursor-pointer mt-52 sm:mt-0 group"
            >
              <div className=" text-[#FFFFFF] text-base max-[970px]:text-sm font-semibold font-poppins ">
                Book an appointment
              </div>
              <MdOutlineArrowOutward
                color="#FFFFFF"
                className="text-xl group-hover:-translate-y-2 group-hover:translate-x-2 transition-transform duration-150 ease-out group-hover:rotate-12 group-hover:scale-110
 max-[970px]:text-lg"
              />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
