import Ellipse1 from "@/assets/Ellipse-1.png";
import Ellipse2 from "@/assets/Ellipse-2.png";
import heroImg from "@/assets/hero-img.svg";

import teeth from "@/assets/teeth.svg";
import { Button } from "@/components/ui/button";
import { MdOutlineArrowOutward } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Feature from "./Feature";
import SearchCompo from "./SearchCompo";

const HeroSection = () => {
  const navigate = useNavigate();


  return (
    <section className="bg-[#95C22B] relative w-full overflow-hidden pb-10 sm:pb-0 sm:h-[546px]">
      <img className="absolute -top-28 right-0" src={Ellipse2} alt="" />
      <img className="absolute bottom-0 left-0" src={Ellipse1} alt="" />

      <div className="max-[970px]:hidden">
        <SearchCompo />
      </div>
      {/* <SearchListCompo /> */}

      <div className="flex h-full">
        <div className="px-5 lg:pl-40 pt-10 max-w-[860px] w-full">
          <h1 className="text-5xl sm:text-[52px] font-bold text-white">
            Personalized Dental Solutions for Every Patient
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 sm:items-center mt-5">
            <Button
              onClick={() => navigate("/our-dentist")}
              className="flex justify-center items-center gap-1 bg-[#5A5A5A] border-[1px] border-[#5A5A5A] rounded h-12 hover:bg-[#5A5A5A] cursor-pointer group"
            >
              <div className=" text-[#FFFFFF] text-sm font-semibold font-poppins ">
                Book an appointment
              </div>
              <MdOutlineArrowOutward
                color="#FFFFFF"
                className="text-xl group-hover:-translate-y-2 group-hover:translate-x-2 transition-transform duration-150 ease-out group-hover:rotate-12 group-hover:scale-110
 max-[970px]:text-lg"
              />
            </Button>
            <Button
              variant="outline"
              className="h-12 group bg-transparent text-white"
            >
              <span>Know more</span>
              <MdOutlineArrowOutward
                className="text-xl group-hover:-translate-y-2 group-hover:translate-x-2 transition-transform duration-150 ease-out group-hover:rotate-12 group-hover:scale-110
 max-[970px]:text-lg"
              />
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
            <Feature href="/our-dentist" img={teeth} title={"Find Dentist Near You"} />
            <Feature href="/about" img={teeth} title={"About Us"} />
            <Feature href="/dental-camp" img={teeth} title={"Request a Dental Camp"} />
          </div>
        </div>
        <div className="w-1/2 -ml-32 relative hidden lg:block">
          <img src={heroImg} alt="" className="absolute bottom-20 right-0" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
