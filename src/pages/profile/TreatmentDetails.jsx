import ProfileLayout from '@/component/Layout/ProfileLayout'
import Spinner from '@/components/Spinner'
import { Button } from '@/components/ui/button'
import useGetApiReq from '@/hooks/useGetApiReq'
import React, { useEffect, useState } from 'react'
import { BsFillSendFill } from 'react-icons/bs'
import { IoMdCall } from 'react-icons/io'
import { useNavigate, useParams } from 'react-router-dom'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { ExternalLink } from 'lucide-react'
import { FaArrowRight } from 'react-icons/fa'
import DataNotFound from '@/components/DataNotFound'
import { format } from 'date-fns'

const TreatmentDetails = () => {
    const [consultationData, setConsultationData] = useState([])
    const [treatmentData, setTreatmentData] = useState("")
    const [isCreateConsultModalOpen, setIsCreateConsultModalOpen] = useState(false);


    const navigate = useNavigate()
    const param = useParams()

    console.log(param.treatmentId)

    // const handleNavigate = (id) => {
    //     navigate(`/admin/patient/appointment-details/${id}`)
    // }

    const { res, fetchData, isLoading } = useGetApiReq()
    const { res: res2, fetchData: fetchData2, isLoading: isLoading2 } = useGetApiReq()

    const getAllConsults = async () => {
        await fetchData(`/patient/get-consultation-booking-list?treatmentId=${param?.treatmentId}`)
    }

    const getTreatmentDetail = async () => {
        await fetchData2(`/patient/get-treatment-details?treatmentId=${param?.treatmentId}`)
    }

    useEffect(() => {
        getAllConsults()
    }, [param?.id])

    useEffect(() => {
        getTreatmentDetail()
    }, [param?.treatmentId])


    useEffect(() => {
        if (res?.status === 200 || res?.status === 201) {
            console.log("get onsultations", res?.data)
            setConsultationData(res?.data?.foundConsultations)
        }
    }, [res])

    useEffect(() => {
        if (res2?.status === 200 || res2?.status === 201) {
            console.log("getTreatmentDetail", res2?.data)
            setTreatmentData(res2?.data?.foundTreatment)
        }
    }, [res2])
    return (
        <ProfileLayout>
            <div className="w-full mx-auto p-4">
                <div className="mb-5 flex items-center justify-between">
                    <h1 className="text-[#00214B] text-2xl font-medium font-poppins">Treatment Details</h1>
                    {treatmentData?.status === "cancelled" ?
                        <span className={`px-8 py-3 text-xl capitalize font-medium font-roboto text-[#731616] bg-[#FFCACA] rounded-lg`}>
                            {treatmentData?.status}
                        </span> :
                        <span className={`px-8 py-3 text-xl capitalize font-medium font-roboto text-[#167316] bg-[#CEFFCA] rounded-lg`}>
                            {treatmentData?.status || 'no status'}
                        </span>
                    }
                </div>
                <div className="border rounded-lg bg-[#FFFFFF] mb-12">
                    <table className="w-full">
                        <tbody>
                            <tr className="border-b border-[#717171]">
                                <td className="p-4 text-[#717171] text-base font-normal font-inter">Dentist's name</td>
                                <td className="p-4 text-[#1A1A1A] text-base font-normal font-inter border-s-2 border-[#717171]">{treatmentData?.appointmentId?.dentistId?.personalDetails?.Firstname} {treatmentData?.appointmentId?.dentistId?.personalDetails?.lastName}</td>
                            </tr>
                            <tr className="border-b border-[#717171]">
                                <td className="p-4 text-[#717171] text-base font-normal font-inter">Appointment ID</td>
                                <td className="p-4 text-[#1A1A1A] text-base font-normal font-inter border-s-2 border-[#717171]">{treatmentData?.appointmentId?.customAppointmentId}</td>
                            </tr>
                            <tr className="border-b border-[#717171]">
                                <td className="p-4 text-[#717171] text-base font-normal font-inter">Patient's name</td>
                                <td className="p-4 text-[#1A1A1A] text-base font-normal font-inter border-s-2 border-[#717171]">{treatmentData?.appointmentId?.patientId?.name}</td>
                            </tr>
                            <tr className="border-b border-[#717171]">
                                <td className="p-4 text-[#717171] text-base font-normal font-inter">Date & Time</td>
                                <td className="p-4 text-[#1A1A1A] text-base font-normal font-inter border-s-2 border-[#717171]">{treatmentData?.date && format(new Date(treatmentData?.date), "dd-MM-yyyy")} | {treatmentData?.date && format(new Date(treatmentData?.date), "hh:mm aa")}</td>
                            </tr>
                            <tr className="border-b border-[#717171]">
                                <td className="p-4 text-[#717171] text-base font-normal font-inter">Medical History</td>
                                <td className="p-4 text-[#1A1A1A] text-base font-normal font-inter border-s-2 border-[#717171]">Allergies, Undergone Medical Treatment</td>
                            </tr>
                            <tr className="border-b border-[#717171]">
                                <td className="p-4 text-[#717171] text-base font-normal font-inter">Clinic Details</td>
                                <td className="p-4 text-[#1A1A1A] text-base font-normal font-inter border-s-2 border-[#717171]">
                                    <div>{treatmentData?.appointmentId?.clinicId?.clinicName}</div>
                                    <div className="flex gap-2 mt-2">
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            className="text-[#95C11F] border-[#95C11F] hover:bg-[#95C11F] hover:text-white"
                                            onClick={() => handleCall(treatmentData?.mobile)}
                                        >
                                            <IoMdCall className="w-5 h-5 mr-2" />
                                            Call now
                                        </Button>
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            className="text-[#95C11F] border-[#95C11F] hover:bg-[#95C11F] hover:text-white"
                                            onClick={() => handleMap(treatmentData?.clinicId?.mapLocation)}
                                        >
                                            <BsFillSendFill className="w-4 h-4 mr-2" />
                                            Search on map
                                        </Button>
                                    </div>
                                </td>
                            </tr>
                            {isLoading &&
                                <Spinner />}
                        </tbody>
                    </table>
                </div>
                <div className="p-8 space-y-6 bg-white rounded-lg shadow-lg">
                    <div className="flex items-center justify-between">
                        <h1 className="text-[#00214B] text-2xl font-medium font-poppins">List of Consultation</h1>
                        {/* <Button onClick={() => setIsCreateConsultModalOpen(true)} className="bg-[#95C93D] h-11 w-[180px] text-base hover:bg-[#85b934] text-white">
                            Create Cosultation
                        </Button> */}
                    </div>

                    <div className="border rounded-md">
                        <Table className="rounded-md border">
                            <TableHeader>
                                <TableRow className="bg-gray-50 h-[56px]">
                                    <TableHead className="text-[#717171] text-xs font-medium font-inter ps-4">SL NO</TableHead>
                                    <TableHead className="text-[#717171] text-xs font-medium font-inter">DATE</TableHead>
                                    <TableHead className="text-[#717171] text-xs font-medium font-inter">SCHEDULED AT</TableHead>
                                    <TableHead className="text-[#717171] text-xs font-medium font-inter">TREATMENT ID</TableHead>
                                    <TableHead className="text-[#717171] text-xs font-medium font-inter">CONSULT ID</TableHead>
                                    <TableHead className="text-[#717171] text-xs font-medium font-inter">PATIENT</TableHead>
                                    <TableHead className="text-[#717171] text-xs font-medium font-inter">DENTIST</TableHead>
                                    <TableHead className="text-[#717171] text-xs font-medium font-inter">Clinic Name</TableHead>
                                    <TableHead className="text-[#717171] text-xs font-medium font-inter">STATUS</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {consultationData?.length > 0 && consultationData.map((consultation, index) => (
                                    <TableRow key={consultation?._id} className="h-[56px]">
                                        <TableCell className="text-[#1A1A1A] text-sm font-normal font-inter ps-7">{index + 1}</TableCell>
                                        <TableCell className="text-[#1A1A1A] text-sm font-normal font-inter">{consultation?.timing?.date}</TableCell>
                                        <TableCell className="text-[#1A1A1A] text-sm font-normal font-inter">{consultation?.timing?.slot?.startTime}</TableCell>
                                        <TableCell className="text-[#1A1A1A] text-sm font-normal font-inter">{consultation?.treatmentId?.customTreatmentId}</TableCell>
                                        <TableCell className="text-[#1A1A1A] text-sm font-normal font-inter">{consultation?.customConsultationId}</TableCell>
                                        <TableCell className="text-[#1A1A1A] text-sm font-normal font-inter">{consultation?.patientId?.name}</TableCell>
                                        <TableCell>
                                            <div className="flex items-center gap-2">
                                                <p>{consultation?.dentistId?.personalDetails?.Firstname} {consultation?.dentistId?.personalDetails?.lastName}</p>
                                                <ExternalLink className="h-4 w-4 text-[#717171] cursor-pointer" />
                                            </div>
                                        </TableCell>
                                        <TableCell className="text-[#1A1A1A] text-sm font-normal font-inter">{consultation?.clinicId?.clinicName}</TableCell>
                                        <TableCell className={`font-sm font-medium font-inter uppercase ${consultation?.status === "completed" ? "text-[#00CD4B]" : consultation?.status === "upcoming" ? "text-sky-500" : consultation?.status === "active" ? "text-green-700" : "text-[#FF0000]"}`}>
                                            <div className="flex items-center">
                                                <p className="w-[120px]">{consultation?.status}</p>
                                                <FaArrowRight onClick={() => handleNavigate(consultation?._id)} className="h-6 w-6 bg-[#EEEEEEEE] rounded-full text-[#95C22B] p-1 cursor-pointer" />
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                        {consultationData?.length === 0 && <DataNotFound name="Consultation" />}

                        {consultationData?.length === 0 && isLoading && <Spinner />}

                    </div>

                </div>
            </div>
        </ProfileLayout>
    )
}

export default TreatmentDetails