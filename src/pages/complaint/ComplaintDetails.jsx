import ProfileLayout from '@/component/Layout/ProfileLayout'
import { Button } from '@/components/ui/button'
import useGetApiReq from '@/hooks/useGetApiReq'
import { format } from 'date-fns'
import { Check } from 'lucide-react'
import { useEffect, useState } from 'react'
import { BsFillSendFill } from 'react-icons/bs'
import { IoMdCall } from 'react-icons/io'
import { useParams } from 'react-router-dom'

const ComplaintDetails = () => {
    const [isAddRemarkModalOpen, setIsAddRemarkModalOpen] = useState(false);
    const [complaintData, setComplaintData] = useState("")
    const [complaintHistory, setComplaintHistory] = useState([]);
    const { complaintId } = useParams()
    // console.log(id)

    const handleCall = (number) => {
        window.location.href = `tel:+${number}`
    }

    const handleMap = (location) => {
        window.open("https://maps.google.com/?q=MarcDental+Clinic", "_blank")
        console.log(location)
    }

    const { res, fetchData, isLoading } = useGetApiReq()

    const getComplaintDetails = async () => {
        await fetchData(`/patient/single-complaint?complaintId=${complaintId}`)
    }

    useEffect(() => {
        getComplaintDetails()
    }, [])

    useEffect(() => {
        if (res?.status === 200 || res?.status === 201) {
            console.log("getSingle complaint", res?.data)
            setComplaintData(res?.data?.foundComplaint);
        }
    }, [res])

    const items = [
        {
            status: "Raised",
            statusCode: "raised",
        },
        {
            status: "In Progress",
            statusCode: "in-progress",
        },
        {
            status: "Resolved",
            statusCode: "resolved",
        }
    ]

    useEffect(() => {
        const modifiedData = items.map((item) => {
            return {
                status: item.status,
                description: complaintData?.complaintHistory?.find((history) => history.status === item.statusCode)?.resolution,
                isComplete: complaintData?.complaintHistory?.some((history) => history.status === item.statusCode),
                date: complaintData?.complaintHistory?.find((history) => history.status === item.statusCode)?.date,
            }
        })
        setComplaintHistory(modifiedData);
        console.log("modifiedData", modifiedData);

    }, [complaintData?.complaintHistory])



    return (
        <ProfileLayout>
            <div className="w-full mx-auto grid grid-cols-[1fr_350px] bg-white rounded-lg">
                <div className='p-8'>
                    <div className="mb-5 flex items-center justify-between">
                        <h1 className="text-[#00214B] text-2xl font-medium font-poppins">Complaint</h1>
                        <span className={`font-sm font-medium font-inter uppercase inline-block px-4 py-2 rounded-md ${complaintData?.status === "resolved" ? "text-[#00CD4B] bg-[rgba(168,240,196,0.4)]" : complaintData?.status === "in-progress" ? "text-[#FFC107] bg-[rgba(243,225,172,0.4)]" : complaintData?.status === "raised" ? "text-[#03A9F4] bg-[rgba(162,221,249,0.4)]" : "text-[#FF0000]"}`}>
                            {complaintData?.status}
                        </span>
                    </div>
                    <div className="border">
                        <table className="w-full">
                            <tbody>
                                <tr className="border-b border-[#717171]">
                                    <td className="p-4 text-[#717171] w-[35%] text-base font-normal font-inter">Complaint ID</td>
                                    <td className="p-4 text-[#1A1A1A] text-base font-normal font-inter border-s border-[#717171]">{complaintData?.customComplaintId}</td>
                                </tr>
                                <tr className="border-b border-[#717171]">
                                    <td className="p-4 text-[#717171] w-[35%] text-base font-normal font-inter">Complaint type</td>
                                    <td className="p-4 text-[#1A1A1A] text-base font-normal font-inter border-s border-[#717171]">{complaintData?.complaintType}</td>
                                </tr>
                                {/* <tr className="border-b border-[#717171]">
                                    <td className="p-4 text-[#717171] w-[35%] text-base font-normal font-inter">Raised by</td>
                                    <td className="p-4 text-[#1A1A1A] text-base font-normal font-inter border-s border-[#717171]">{complaintData?.raisedBy}</td>
                                </tr> */}
                                <tr className="border-b border-[#717171]">
                                    <td className="p-4 text-[#717171] w-[35%] text-base font-normal font-inter">Raised for</td>
                                    <td className="p-4 text-[#1A1A1A] text-base font-normal font-inter border-s border-[#717171]">{complaintData?.raisedFor}</td>
                                </tr>
                                <tr className="border-b border-[#717171]">
                                    <td className="p-4 text-[#717171] w-[35%] text-base font-normal font-inter">Date</td>
                                    <td className="p-4 text-[#1A1A1A] text-base font-normal font-inter border-s border-[#717171]">{complaintData?.date && format(new Date(complaintData?.date), 'dd MMMM yyyy')}</td>
                                </tr>
                                {complaintData?.appointmentId &&
                                    <tr className="border-b border-[#717171]">
                                        <td className="p-4 text-[#717171] w-[35%] text-base font-normal font-inter">Appointment ID</td>
                                        <td className="p-4 text-[#1A1A1A] text-base font-normal font-inter border-s border-[#717171]">{complaintData?.appointmentId?._id || "-"}</td>
                                    </tr>}
                                {complaintData?.dentistId &&
                                    <tr className="border-b border-[#717171]">
                                        <td className="p-4 text-[#717171] w-[35%] text-base font-normal font-inter">Dentist Name</td>
                                        <td className="p-4 text-[#1A1A1A] text-base font-normal font-inter border-s border-[#717171]">{complaintData?.dentistId ? `${complaintData?.dentistId?.personalDetails?.prefix}. ${complaintData?.dentistId?.personalDetails?.Firstname} ${complaintData?.dentistId?.personalDetails?.lastName}` : "-"}</td>
                                    </tr>}
                                {/* {complaintData?.patientId &&
                                    <tr className="border-b border-[#717171]">
                                        <td className="p-4 text-[#717171] w-[35%] text-base font-normal font-inter">Patient Name</td>
                                        <td className="p-4 text-[#1A1A1A] text-base font-normal font-inter border-s border-[#717171]">{complaintData?.patientId ? complaintData?.patientId?.name : "-"}</td>
                                    </tr>} */}
                                {complaintData?.clinicId &&
                                    <tr className="border-b border-[#717171]">
                                        <td className="p-4 text-[#717171] w-[35%] text-base font-normal font-inter">Clinic Detail</td>
                                        <td className="p-4 text-[#1A1A1A] text-base font-normal font-inter border-s border-[#717171]">
                                            {complaintData?.clinicId ?
                                                <div>
                                                    <p>{complaintData?.clinicId?.clinicName}</p>
                                                    <div className="flex gap-2 mt-2">
                                                        <Button
                                                            variant="outline"
                                                            size="sm"
                                                            className="text-[#95C11F] border-[#95C11F] hover:bg-[#95C11F] hover:text-white"
                                                            onClick={() => handleCall(complaintData?.clinicId?.phone)}
                                                        >
                                                            <IoMdCall className="w-5 h-5 mr-2" />
                                                            Call now
                                                        </Button>
                                                        <Button
                                                            variant="outline"
                                                            size="sm"
                                                            className="text-[#95C11F] border-[#95C11F] hover:bg-[#95C11F] hover:text-white"
                                                            onClick={() => handleMap(complaintData?.clinicId?.mapLocation)}
                                                        >
                                                            <BsFillSendFill className="w-4 h-4 mr-2" />
                                                            Search on map
                                                        </Button>
                                                    </div>
                                                </div>
                                                : "-"
                                            }
                                        </td>
                                    </tr>}
                                <tr className="border-b border-[#717171]">
                                    <td className="p-4 text-[#717171] w-[35%] flex items-start text-base font-normal font-inter">Issue</td>
                                    <td className="p-4 text-[#1A1A1A] text-base font-normal font-inter border-s border-[#717171]">{complaintData?.issue}</td>
                                </tr>
                                <tr className="border-b border-[#717171]">
                                    <td className="p-4 text-[#717171] w-[35%] flex items-start text-base font-normal font-inter">Remark</td>
                                    <td className="p-4 text-[#1A1A1A] text-base font-normal font-inter border-s border-[#717171]">{complaintData?.remark}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='p-5 border-l-2'>
                    <div className="flex flex-col mt-16">
                        {complaintHistory?.map((item, index) => (
                            <div key={item.status} className="relative grid grid-cols-[35px_1fr] pb-20 gap-4">
                                {index !== items.length - 1 && (
                                    <div className="absolute left-[15px] top-[34px] h-full w-[1px] border-l-2 border-dashed border-gray-200" />
                                )}
                                <div className={`h-8 w-8 rounded-full flex items-center justify-center ${item.isComplete ? 'bg-[#57A748]' : 'bg-[#B9B9B9]'}`}>
                                    <Check className="h-5 w-5 text-white" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-medium text-lg">{item.status}</span>
                                    {item.date && (
                                        <span className="text-[15px] text-gray-800">
                                            {format(new Date(item?.date), 'dd MMMM yyyy')}
                                        </span>
                                    )}
                                    {item.description && (
                                        <span className="text-sm text-gray-500">{item.description}</span>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {isAddRemarkModalOpen &&
                <AddRemarkModal
                    isAddRemarkModalOpen={isAddRemarkModalOpen}
                    setIsAddRemarkModalOpen={setIsAddRemarkModalOpen}
                    getComplaint={getComplaintDetails}
                />
            }
        </ProfileLayout>
    )
}

export default ComplaintDetails