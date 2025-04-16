import DocImage2 from "@/assets/Group 1321317071.png";
import ImageSkeleton from "@/components/ImageSkeleton";
import SearchListCompo from "@/components/SearchListCompo";
import useGetApiReq from "@/hooks/useGetApiReq";
import { useEffect, useState } from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  const { res, fetchData } = useGetApiReq();
  const [contentData, setContentData] = useState({
    content: "",
    image: "",
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
        image: images[0]?.image,
      });
    }
  }, [res]);

  return (
    <section className="bg-[#95C22B]">
      <div className="flex justify-center items-center flex-wrap pt-10">
        <div className="max-[970px]:hidden w-full">
          <SearchListCompo />
        </div>
        <div className="flex justify-center items-center flex-wrap mt-6">
          <div className="px-16 py-16 max-[500px]:px-6 max-[700px]:py-6">
            <h4 className="text-[#000000] text-[32px] max-[970px]:text-xl font-normal italic font-poppins max-[500px]:text-center mb-4">
              Your <span className="text-white font-bold">Smile</span>, Our
              Passion
            </h4>
            <h1 className="max-w-[700px] w-full text-[#000000] text-5xl max-[970px]:text-3xl max-[500px]:text-xl max-[500px]:text-center font-extrabold font-poppins leading-[72px] mb-8">
              {contentData.content}
            </h1>
            <div className=" flex gap-5 max-[500px]:justify-center">
              <button
                onClick={() => navigate("/our-dentist")}
                className="flex justify-center items-center gap-1 bg-[#5A5A5A] border-[1px] border-[#95C22B] rounded-lg px-5 py-4 max-[500px]:py-2 hover:bg-[#5A5A5A] cursor-pointer"
              >
                <div className=" text-[#FFFFFF] text-lg max-[970px]:text-base font-semibold font-poppins ">
                  Book an appointment
                </div>
                <MdOutlineArrowOutward
                  color="#FFFFFF"
                  className="text-xl max-[970px]:text-lg"
                />
              </button>
            </div>
          </div>
          <div className="">
            <div className=" relative">
              {/* <img className='max-w-md w-full' src={contentData.image} alt="" /> */}
              <ImageSkeleton
                src={contentData.image}
                imgClassName={"max-w-md w-full"}
                skeletonClassName={"max-w-md w-full h-[450px] w-[400px]"}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
