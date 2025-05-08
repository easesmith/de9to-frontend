import ReactPagination from '@/component/allComponents/ReactPagination'
import ProfileLayout from '@/component/Layout/ProfileLayout'
import DataNotFound from '@/components/DataNotFound'
import Spinner from '@/components/Spinner'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Input } from '@/components/ui/input'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import useGetApiReq from '@/hooks/useGetApiReq'
import { cn } from '@/lib/utils'
import { readCookie } from '@/utils/readCookie'
import { format } from 'date-fns'
import { CalendarIcon } from 'lucide-react'
import { useEffect, useState } from 'react'
import { FaArrowRight } from "react-icons/fa6"
import { useNavigate } from 'react-router-dom'

const ComplaintList = () => {

  const navigate = useNavigate()
  const [complaintData, setComplaintData] = useState([])
  const [dateFilter, setDateFilter] = useState("")
  const [statusFilter, setStatusFilter] = useState("")
  const [searchQuery, setSearchQuery] = useState("")
  const [totalPage, setTotalPage] = useState(1)
  const [currentPage, setCurrentPage] = useState(1)
  const [total, setTotal] = useState(0);
  const [limit, setLimit] = useState(0);
  const [isCalender, setIsCalender] = useState(false)
  const userInfo = readCookie("userInfo");

  const handleDateSelect = (value) => {
    setDateFilter(value)
    setIsCalender(false)
  }

  const handleNavigate = (id) => {
    navigate(`/profile/complaints/${id}`)
  }

  const { res, fetchData, isLoading } = useGetApiReq()

  const getAllComplaint = () => {
    fetchData(
      `/patient/get-all-complaints?patientId=${userInfo.userId}&page=${currentPage}&date=${dateFilter}&status=${statusFilter === "all" ? "" : statusFilter
      }&searchQuery=${searchQuery}`
    );
  }

  useEffect(() => {
    getAllComplaint();
  }, [currentPage, dateFilter, statusFilter, searchQuery]);

  useEffect(() => {
    if (res?.status === 200 || res?.status === 201) {
      console.log("Complaint List: ", res?.data)
      setComplaintData(res?.data?.foundComplaints)
      setCurrentPage(res?.data?.pagination?.currentPage)
      setTotalPage(res?.data?.pagination?.totalPages || 0)
      setTotal(res?.data?.pagination?.totalDocs)
      setLimit(res?.data?.pagination?.limit)
    }
  }, [res])

  return (
    <ProfileLayout>
      <div className="p-8 space-y-6 bg-white rounded-lg shadow-lg">
        <div className="flex items-center justify-between">
          <h1 className="text-[#00214B] text-2xl font-medium font-poppins">List of Complaints</h1>
          <Button onClick={() => navigate('/profile/complaints/add-complaint')} className="bg-[#95C93D] h-11 w-[180px] text-base hover:bg-[#85b934] text-white">
            Add Complaint
          </Button>
        </div>

        <div className="flex justify-between gap-4 mb-6 w-full">
          <div className="">
            <Input
              placeholder="Search by complaint id and phone number"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-[450px] text-[#717171] text-base font-normal font-inter h-10"
            />
          </div>
          <div className="flex gap-4">
            <Popover open={isCalender} onOpenChange={setIsCalender}>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-[240px] text-[#717171] text-base font-normal font-inter h-10 flex justify-between",
                    !dateFilter && "text-muted-foreground h-10"
                  )}
                >
                  {dateFilter ? format(dateFilter, "PPP") : "Pick a date"}
                  <CalendarIcon />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={dateFilter}
                  onSelect={handleDateSelect}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
            <Select onValueChange={(value) => setStatusFilter(value)}>
              <SelectTrigger className="w-[180px] text-[#717171] text-base font-normal font-inter h-10">
                <SelectValue placeholder="All status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All status</SelectItem>
                <SelectItem value="raised">Raised</SelectItem>
                <SelectItem value="in-progress">In-progress</SelectItem>
                <SelectItem value="resolved">Resolved</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="border rounded-md">
          <Table className="rounded-md border">
            <TableHeader>
              <TableRow className="bg-gray-50 h-[56px]">
                <TableHead className="text-[#717171] text-xs font-medium font-inter ps-4">SL NO</TableHead>
                <TableHead className="text-[#717171] text-xs font-medium font-inter ps-4">COMPLAINT ID</TableHead>
                <TableHead className="text-[#717171] text-xs font-medium font-inter">DATE</TableHead>
                {/* <TableHead className="text-[#717171] text-xs font-medium font-inter">PATIENT NAME</TableHead> */}
                <TableHead className="text-[#717171] text-xs font-medium font-inter">MOBILE NUMBER</TableHead>
                <TableHead className="text-[#717171] text-xs font-medium font-inter">COMPLAINT TYPE</TableHead>
                <TableHead className="text-[#717171] text-xs font-medium font-inter">RAISED FOR</TableHead>
                <TableHead className="text-[#717171] text-xs font-medium font-inter">STATUS</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {complaintData?.length > 0 && complaintData.map((complaint, index) => (
                <TableRow key={complaint?._id} className="h-[56px]">
                  <TableCell className="text-[#1A1A1A] text-sm font-normal font-inter ps-7">{index + 1}</TableCell>
                  <TableCell className="text-[#1A1A1A] text-sm font-normal font-inter ps-7">{complaint?.customComplaintId}</TableCell>
                  <TableCell className="text-[#1A1A1A] text-sm font-normal font-inter">{complaint?.date && format(new Date(complaint?.date), "dd-MM-yyyy")}</TableCell>
                  {/* <TableCell className="text-[#1A1A1A] text-sm font-normal font-inter">{complaint?.patientId?.name || `${complaint?.dentistId?.personalDetails?.prefix}. ${complaint?.dentistId?.personalDetails?.Firstname} ${complaint?.dentistId?.personalDetails?.lastName}` || "-"}</TableCell> */}
                  <TableCell className="text-[#1A1A1A] text-sm font-normal font-inter">{complaint?.patientId?.phone || complaint?.dentistId?.personalDetails?.phone || "-"}</TableCell>
                  <TableCell className="text-[#1A1A1A] text-sm font-normal font-inter">{complaint?.complaintType}</TableCell>
                  <TableCell className="text-[#1A1A1A] text-sm font-normal font-inter">{complaint?.raisedFor}</TableCell>
                  <TableCell className={`font-sm font-medium uppercase font-inter ${complaint?.status === "resolved" ? "text-[#00CD4B]" : complaint?.status === "in-progress" ? "text-[#FFC107]" : complaint?.status === "raised" ? "text-[#03A9F4]" : "text-[#FF0000]"}`}>
                    <div className="flex items-center">
                      <p className="w-[100px]">{complaint?.status}</p>
                      <FaArrowRight onClick={() => handleNavigate(complaint?._id)} className="h-6 w-6 ml-3 bg-[#EEEEEEEE] rounded-full text-[#95C22B] p-1 cursor-pointer" />
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          {complaintData?.length === 0 && !isLoading && <DataNotFound name="Complaint" />}
          {complaintData?.length === 0 && isLoading && <Spinner />}
        </div>

        <div className="flex items-center justify-end">
          <ReactPagination totalPage={totalPage} setCurrentPage={setCurrentPage} />
        </div>
      </div>
    </ProfileLayout>
  )
}

export default ComplaintList