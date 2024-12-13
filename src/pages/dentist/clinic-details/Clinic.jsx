import React, { useState } from 'react'
import { Form } from '@/components/ui/form'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import Clinic1 from './Clinic1'
import Clinic2 from './Clinic2'
import Clinic3 from './Clinic3'
import { Button } from '@/components/ui/button'
import { FaCheck } from "react-icons/fa6";
import DentistWrapper from '@/components/dentist-wrapper/DentistWrapper'
import BreadcrumbCompo from '@/component/dentist-signup/BreadcrumbCompo'
import { ClinicSchema } from '@/schema/formSchema'

const Clinic = () => {

    const [step, setStep] = useState(0)

    const nextStep = () => {
        setStep(step + 1)
    }

    const prevStep = () => {
        if (step >= 0)
            setStep(step - 1)
    }

    const form = useForm({
        resolver: zodResolver(ClinicSchema),
        defaultValues: {
            clinicName: "",
            clinicReceptionNumber: "",
            clinicConsultationFees: "",
            numberOfDentalChairs: "",
            clinicOwnership: "",
            propertyOwnership: "",
            address: "",
            nearbyLandmark: "",
            pincode: "",
            city: "",
            state: "",
            clinicLocationLink: "",
            // selectedDaysWithTiming: ""
            clinicLogo: "",
            clinicPhoto: "",
            doctorPhoto: "",
            clinicVisitingCard: "",
            frontFascia: "",
            receptionCounter: "",
            waitingArea: "",
            consultationTable: "",
            certificateWall: "",
            otherPictures: ""
        }
    })

    const onSubmit = (data) => {
        console.log("data:", data);
        form.reset({
            clinicName: "",
            clinicReceptionNumber: "",
            clinicConsultationFees: "",
            numberOfDentalChairs: "",
            clinicOwnership: "",
            propertyOwnership: "",
            address: "",
            nearbyLandmark: "",
            pincode: "",
            city: "",
            state: "",
            clinicLocationLink: "",
        })
    }


    return (
        <DentistWrapper>
            <div className={`w-full shadow-[2px] rounded-[30px] bg-white px-16 py-10`}>
                <BreadcrumbCompo title="Clinic Details" />
                <div className="flex justify-center items-center mt-12">
                    {/* Step 1 */}
                    <div className="flex flex-col items-center">
                        <div className="flex items-center">
                            <div className={`w-7 h-7 ${step >= 1 ? 'bg-[#95C22B] border-[#95C22B]' : 'border-[#C6C6C6]'} border-2 rounded-full flex items-center justify-center`}>
                                {step >= 1 ?
                                    <FaCheck className='text-[#FFFFFF] text-xs' /> :
                                    <span className="bg-[#C6C6C6] w-[6px] h-[6px] rounded-full"></span>
                                }
                            </div>
                        </div>
                        <span className="mt-2 text-[#6F6F6F] text-center text-sm font-medium font-lato tracking-[1px]">Clinic Details</span>
                    </div>
                    {/* Step 2 */}
                    <div className="flex flex-col items-center mx-4">
                        <div className="flex items-center">
                            <div className={`w-7 h-7 ${step >= 2 ? 'bg-[#95C22B] border-[#95C22B]' : 'border-[#C6C6C6]'} border-2 rounded-full flex items-center justify-center`}>
                                {step >= 2 ?
                                    <FaCheck className='text-[#FFFFFF] text-xs' /> :
                                    <span className="bg-[#C6C6C6] w-[6px] h-[6px] rounded-full"></span>
                                }
                            </div>
                        </div>
                        <span className="mt-2 text-[#6F6F6F] text-center text-sm font-medium font-lato tracking-[1px]">Timings</span>
                    </div>
                    {/* Step 3 */}
                    <div className="flex flex-col items-center">
                        <div className="flex items-center">
                            <div className="w-7 h-7 border-2 border-[#C6C6C6] rounded-full flex items-center justify-center">
                                <span className="bg-[#C6C6C6] w-[6px] h-[6px] rounded-full"></span>
                            </div>
                        </div>
                        <span className="mt-2 text-[#6F6F6F] text-center text-sm font-medium font-lato tracking-[1px]">Documents</span>
                    </div>
                </div>
                <Form {...form}>
                    <div className={`border-2 border-[#D4D4D4] rounded-[10px] px-16 py-12 my-12 overflow-y-scroll h-[500px]`}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-7'>
                            {step === 0 && <Clinic1 form={form} />}
                            {step === 1 && <Clinic2 form={form} />}
                            {step === 2 && <Clinic3 form={form} />}

                            <div className='flex justify-end gap-5'>
                                {step > 0 && <Button variant='prev' className="w-20" onClick={prevStep} type="submit">Prev</Button>}
                                {step <= 1 && <Button className="w-20" onClick={nextStep} type="submit">Next</Button>}
                                {step === 2 && <Button className="w-20" type="submit">Save</Button>}
                                {/* <Button className="w-20" type="submit">Save</Button> */}
                            </div>
                        </form>
                    </div>
                </Form>
            </div>
        </DentistWrapper>
    )
}

export default Clinic
