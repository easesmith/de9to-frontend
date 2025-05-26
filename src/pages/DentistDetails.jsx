import ReactPagination from "@/component/allComponents/ReactPagination";
import Layout from "@/component/Layout/Layout";
import AddFeedbackModal from "@/components/AddFeedbackModal";
import ClinicAppointment from "@/components/ClinicAppointment";
import ClinicAppointment2 from "@/components/ClinicAppointment2";
import BookAppointment from "@/components/confirm-booking/BookAppointment";
import DataNotFound from "@/components/DataNotFound";
import ConsultQAndA from "@/components/dentist/ConsultQ&A";
import Tabs from "@/components/dentist/Tabs";
import DentistBasicDetails from "@/components/DentistBasicDetails";
import DentistGallery from "@/components/DentistGallery";
import RatingsComp from "@/components/RatingsComp";
import Review from "@/components/Review";
import Spinner from "@/components/Spinner";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useGetApiReq from "@/hooks/useGetApiReq";
import { useCallback, useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { TbEdit } from "react-icons/tb";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const DentistDetails = () => {
  const params = useParams();
  const { res, fetchData, isLoading } = useGetApiReq();
  const {
    res: dentistRatingsRes,
    fetchData: fetchDentistRatingsData,
    isLoading: isDentistRatingsLoading,
  } = useGetApiReq();
  const {
    res: allRatingsRes,
    fetchData: fetchAllRatingsData,
    isLoading: isAllRatingsLoading,
  } = useGetApiReq();
  const [dentistDetails, setDentistDetails] = useState("");
  const [ratings, setRatings] = useState([]);
  const [allRating, setAllRating] = useState({});
  const [sortRating, setSortRating] = useState("newest");
  const [isAddFeedbackModalOpen, setIsAddFeedbackModalOpen] = useState(false);
  const [pageCount, setPageCount] = useState(1);
  const [page, setPage] = useState(1);

  const navigate = useNavigate();
  const { pathname, hash } = useLocation();
  const getDentistDetails = useCallback(async () => {
    fetchData(
      `/dentist/get-dentist-details?dentistId=${params.dentistId || "66d02520cd6af954e0eba864"}`,
    );
  }, [fetchData]);

  useEffect(() => {
    getDentistDetails();
  }, []);

  useEffect(() => {
    if (res?.status === 200 || res?.status === 201) {
      console.log("Dentist details res", res);
      setDentistDetails(res?.data?.data?.dentist);
    }
  }, [res]);

  useEffect(() => {
    if (hash) {
      requestAnimationFrame(() => {
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      });
    }
  }, [pathname, hash]);

  const getDentistRating = async () => {
    fetchDentistRatingsData(
      `/patient/get-dentist-reviews?dentistId=${params?.dentistId}&sort=${sortRating}&page=${page}`,
    );
  };

  useEffect(() => {
    getDentistRating();
  }, [sortRating, page]);

  useEffect(() => {
    if (
      dentistRatingsRes?.status === 200 ||
      dentistRatingsRes?.status === 201
    ) {
      setRatings(dentistRatingsRes?.data?.data);
      console.log("dentistRatingsRes response", dentistRatingsRes);
    }
  }, [dentistRatingsRes]);

  const getAllRating = async () => {
    fetchAllRatingsData(
      `/patient/get-grouped-ratings?dentistId=${params?.dentistId}&reviewType=dentist`,
    );
  };

  useEffect(() => {
    getAllRating();
  }, []);

  useEffect(() => {
    if (allRatingsRes?.status === 200 || allRatingsRes?.status === 201) {
      setAllRating(allRatingsRes?.data);
      console.log("allRatingsRes response", allRatingsRes);
    }
  }, [allRatingsRes]);

  return (
    <Layout>
      <section className="max-w-[1240px] py-5 flex items-start px-4 mx-auto">
        <div className="w-full md:w-[65%]">
          <div className="flex items-center gap-4 h-[18px] my-5">
            <FaArrowLeft
              onClick={() => navigate(-1)}
              className="text-[#717171] cursor-pointer"
            />
            <span className="text-[#1A1A1A] text-sm font-semibold font-inter">
              Search List
            </span>
          </div>
          <div className="mb-5">
            <DentistBasicDetails details={dentistDetails} />
          </div>

          <div className="md:hidden block pl-5 pb-6 flex-1">
            <BookAppointment
              dentistId={dentistDetails?._id}
              timing={dentistDetails?.dentistAvailableTiming || []}
              clinic={dentistDetails?.clinic}
              selectedIndex={0}
            />
          </div>

          <Tabs
            clinics={dentistDetails?.clinic}
            dentistAvailableTiming={
              dentistDetails?.dentistAvailableTiming || []
            }
          />

          {/* <DentistGallery clinics={dentistDetails?.clinic} /> */}

          <div
            id="reviews"
            className="flex flex-col bg-white shadow-[0px_0px_20px_rgba(0,0,0,0.1)] p-4 rounded gap-2 mt-5"
          >
            <div className="font-inter font-medium text-[#1A1A1A]">Reviews</div>
            <div className="w-full mb-5">
              <RatingsComp allRating={allRating} />
              <div className="flex justify-end gap-5 my-5">
                <Select onValueChange={setSortRating} value={sortRating}>
                  <SelectTrigger className="w-1/5 max-[700px]:w-1/3 max-[500px]:w-1/2 border-[1px] border-[#95C22B] rounded-xl">
                    <SelectValue placeholder="" />
                  </SelectTrigger>
                  <SelectContent className="border-[1px] border-[#95C22B] rounded-lg py-[10px] px-5">
                    <SelectGroup>
                      <SelectItem value="newest">
                        Sort by newest review
                      </SelectItem>
                      <SelectItem value="oldest">
                        Sort by oldest review
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <Button
                  onClick={() => setIsAddFeedbackModalOpen(true)}
                  className="bg-[#95C22B] hover:bg-[#9dd41d] flex gap-2 items-center rounded-3xl px-16"
                >
                  <span>Write a Review</span>
                  <TbEdit className="text-2xl" />
                </Button>
              </div>
              <div className="reviews flex flex-col gap-6 max-h-[420px] overflow-y-auto mb-10">
                {ratings?.map((rating) => (
                  <Review key={rating?._id} rating={rating} />
                ))}

                {ratings?.length === 0 && isDentistRatingsLoading && (
                  <Spinner size={30} />
                )}

                {ratings?.length === 0 && !isDentistRatingsLoading && (
                  <DataNotFound name={"Reviews"} />
                )}
              </div>
              {ratings?.length > 0 && (
                <ReactPagination pageCount={pageCount} setPage={setPage} />
              )}
            </div>
          </div>

          {isAddFeedbackModalOpen && (
            <AddFeedbackModal
              isAddFeedbackModalOpen={isAddFeedbackModalOpen}
              setIsAddFeedbackModalOpen={setIsAddFeedbackModalOpen}
              dentistId={dentistDetails?._id}
              reviewType="dentist"
              getData={getDentistRating}
              getAllRating={getAllRating}
            />
          )}

          <ConsultQAndA />
        </div>

        <div className="sticky top-20 hidden md:block pl-5 pb-6 flex-1">
          <BookAppointment
            dentistId={dentistDetails?._id}
            timing={dentistDetails?.dentistAvailableTiming || []}
            clinic={dentistDetails?.clinic}
            selectedIndex={0}
          />
        </div>
      </section>
    </Layout>
  );
};

export default DentistDetails;
