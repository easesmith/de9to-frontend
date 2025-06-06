import ReactPagination from "@/component/allComponents/ReactPagination";
import ProfileLayout from "@/component/Layout/ProfileLayout";
import DataNotFound from "@/components/DataNotFound";
import SmTreatmentPaymentComp from "@/components/profile/payment/SmTreatmentPaymentComp";
import TreatmentPaymentComp from "@/components/profile/payment/TreatmentPaymentComp";
import Spinner from "@/components/Spinner";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import useGetApiReq from "@/hooks/useGetApiReq";
import { cn } from "@/lib/utils";
import { readCookie } from "@/utils/readCookie";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const TreatmentPayment = () => {
  const { res, fetchData, isLoading } = useGetApiReq();
  const userInfo = readCookie("userInfo");
  const [allPayments, setAllPayments] = useState([]);
  const [totalPage, setTotalPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [limit, setLimit] = useState(0);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [date, setDate] = useState();
  const [status, setStatus] = useState("all");

  const handleDateSelect = (value) => {
    setDate(value);
    setIsCalendarOpen(false);
  };

  const getTreatments = async () => {
    // fetchData(`/patient/get-payment-records-patient?patientId=${userInfo?.userId}`);
    fetchData(
      `/patient/patient-payment-history?patientId=${userInfo?.userId}&paymentFor=treatment&page=${currentPage}&status=${status === "all" ? "" : status}&date=${date || ""}`,
    );
  };

  useEffect(() => {
    getTreatments();
  }, [currentPage,date,status]);

  useEffect(() => {
    if (res?.status === 200 || res?.status === 201) {
      console.log("payments response", res);
      const { payments, pagination = "" } = res?.data?.data;
      setAllPayments(payments);
      if (pagination) {
        setTotalPage(pagination?.totalPages);
        setTotal(pagination?.totalDocs);
        setLimit(pagination?.limit);
      }
    }
  }, [res]);

  return (
    <ProfileLayout>
      <div className="bg-white rounded-lg p-5">
        <h1 className="font-inter text-2xl font-medium text-[#00214B]">
          Payment History
        </h1>
        <div className="flex items-center gap-2">
          <button
            onClick={() => navigate("/profile/payment/appointment")}
            className={`border-b-[3px]  ${pathname === "/profile/payment/appointment" ? "text-[#1AA6F1] border-[#1AA6F1]" : "border-transparent"} font-inter px-2 py-1`}
          >
            Appointment
          </button>
          <button
            onClick={() => navigate("/profile/payment/treatment")}
            className={`border-b-[3px] ${pathname === "/profile/payment/treatment" ? "text-[#1AA6F1] border-[#1AA6F1]" : "border-transparent"} font-inter px-2 py-1`}
          >
            Treatment
          </button>
        </div>
        <div className="flex gap-4 items-center mt-5">
          <Popover open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-[240px] text-[#717171] text-base font-normal font-inter h-10 flex justify-between",
                  !date && "text-muted-foreground h-10",
                )}
              >
                {date ? format(date, "PPP") : "Pick a date"}
                <CalendarIcon />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={date}
                onSelect={handleDateSelect}
                initialFocus
              />
            </PopoverContent>
          </Popover>
          <Select onValueChange={(val) => setStatus(val)} value={status}>
            <SelectTrigger className="w-[130px] border-[#717171] text-[#717171]">
              <SelectValue placeholder="Select status" />
            </SelectTrigger>
            <SelectContent className="text-[#717171]">
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="paid">Paid</SelectItem>
              <SelectItem value="due">Due</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Table className="mt-4 mb-6 max-[425px]:hidden">
          <TableHeader className="bg-[#F6F6F6]">
            <TableRow className="uppercase">
              <TableHead className="w-[130px]">Date</TableHead>
              <TableHead className="w-[190px]">Clinic Name</TableHead>
              <TableHead className="w-[190px]">Dentist Name</TableHead>
              <TableHead className="w-[190px]">Amount</TableHead>
              <TableHead className="w-[190px]">Payment Status</TableHead>
              <TableHead className="w-[190px]">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {allPayments.length > 0 &&
              allPayments.map((payment, index) => (
                <TreatmentPaymentComp
                  key={index}
                  payment={payment}
                  getAppointments={getTreatments}
                />
              ))}
          </TableBody>
        </Table>
        <div className="max-[425px]:flex hidden mt-4 mb-6 gap-3 justify-between flex-wrap">
          {allPayments.map((payment, i) => (
            <SmTreatmentPaymentComp
              key={i}
              payment={payment}
              getAppointments={getTreatments}
            />
          ))}
        </div>

        {allPayments?.length === 0 && isLoading && <Spinner size={30} />}

        {allPayments?.length === 0 && !isLoading && (
          <DataNotFound name={"Payments Record"} />
        )}

        <div className="flex items-center justify-center mt-5">
          <ReactPagination pageCount={totalPage} setPage={setCurrentPage} />
        </div>
      </div>
    </ProfileLayout>
  );
};

export default TreatmentPayment;
