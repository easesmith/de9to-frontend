import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { FaCheck } from "react-icons/fa6"
import DentistWrapper from '@/components/dentist-wrapper/DentistWrapper'
import BreadcrumbCompo from '@/component/dentist-signup/BreadcrumbCompo'
import { PersonalDetails1Schema, PersonalDetails2Schema, PersonalDetailsSchema } from '@/schema/formSchema'
import PersonalDetails1 from './PersonalDetails1'
import PersonalDetails2 from './PersonalDetails2'
import usePatchApiReq from '@/hooks/usePatchApiReq'
import { useNavigate } from 'react-router-dom'
import useGetApiReq from '@/hooks/useGetApiReq'

const PersonalDetails = () => {

    const [step, setStep] = useState(0)
    const navigate = useNavigate();

    const { res, fetchData, isLoading } = usePatchApiReq();
    const { res: res1, fetchData: fetchData1, isLoading: isLoading1 } = useGetApiReq();

    const nextStep = async () => {
        let schema;
        switch (step) {
            case 1:
                schema = PersonalDetails1Schema;
                break;
            case 2:
                schema = PersonalDetails2Schema;
                break;
        }

        // const valid = await form.trigger(Object.keys(schema.shape));
        // if (valid) {
        // }
        setStep(step + 1);
    };

    // const nextStep = () => {
    //     setStep(step + 1)
    // }

    const prevStep = () => {
        if (step >= 0)
            setStep(step - 1)
    }

    const form = useForm({
        resolver: zodResolver(PersonalDetailsSchema),
        defaultValues: {
            doctorImg: "",
            doctorFirstName: "",
            doctorLastName: "",
            dateOfBirth: "",
            age: "",
            gender: "",
            degree: "",
            specialization: "",
            email: "",
            // password: "",
            phoneNumber: "",
            adhaarFrontImg: "",
            adhaarBackImg: "",
            doctorsSignature: "",
            bio: "",
            dentistRegistranstionCertificate: "",
            degreeByStateCouncil: "",
            dentistRegistranstionNumber: "",
            collegePassoutYear: "",
            experiences: []
        }
    })

    const { setValue, getValues } = form;
    // console.log("getValues", getValues());


    const dentistId = localStorage.getItem("dentistId")

    const getDentistDetails = () => {
        fetchData1(`/dentist/get-dentist-details?dentistId=${dentistId}`)
    }

    useEffect(() => {
        getDentistDetails();
    }, [])

    useEffect(() => {
        if (res1?.status === 200 || res1?.status === 201) {
            console.log("dentist details res", res1.data);
            const { personalDetails, dentistType } = res1?.data?.data?.dentist;
            setValue("doctorFirstName", personalDetails?.Firstname)
            setValue("doctorLastName", personalDetails?.lastName)
            setValue("phoneNumber", personalDetails?.phone)
            // setValue("specialization", dentistType)
        }
    }, [res1])


    const onSubmit = (data) => {
        console.log("data:", data)

        const formData = new FormData();
        formData.append("collegePassoutYear", data.collegePassoutYear);
        // formData.append("isFeatured", data.isFeatured || false);
        formData.append("workExperience", JSON.stringify(data.experiences));
        formData.append("dentistRegNumber", data.dentistRegistranstionNumber);
        formData.append("yearsOfExperience", data.yearsOfExperience || 0);
        formData.append("Firstname", data.doctorFirstName);
        formData.append("lastName", data.doctorLastName);
        formData.append("age", data.age);
        formData.append("dob", data.dateOfBirth);
        formData.append("gender", data.gender);
        formData.append("email", data.email);
        formData.append("degree", data.degree);
        // formData.append("password", data.password);
        formData.append("phone", data.phoneNumber);
        formData.append("specialty", data.specialization);
        formData.append("bio", data.bio);
        formData.append("dentistId", dentistId || "");

        // File fields
        formData.append("image", data.doctorImg[0]);
        formData.append("frontSide", data.adhaarFrontImg[0]);
        formData.append("backSide", data.adhaarBackImg[0]);
        formData.append("signature", data.doctorsSignature[0]);
        formData.append("regCertificate", data.dentistRegistranstionCertificate[0]);
        formData.append("regDegree", data.degreeByStateCouncil[0]);

        fetchData("/dentist/update-dentist", formData);

    }

    useEffect(() => {
        if (res?.status === 200 || res?.status === 201) {
            console.log("dentist details submit res", res);
            navigate("/dentist/application")
            form.reset();
        }
    }, [res])

    return (
        <DentistWrapper>
            <div className={`w-full shadow-[2px] rounded-[30px] bg-white px-16 py-10`}>
                {/* <BreadcrumbCompo title="Personal Details" /> */}
                <div className="flex justify-center items-center gap-32 mt-12">
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
                        <span className="mt-2 text-[#6F6F6F] text-center text-sm font-medium font-lato tracking-[1px]">Information</span>
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
                        <span className="mt-2 text-[#6F6F6F] text-center text-sm font-medium font-lato tracking-[1px]">Experience</span>
                    </div>
                </div>
                <Form {...form}>
                    <div className={`border-2 border-[#D4D4D4] rounded-[10px] px-16 py-12 my-12 overflow-y-scroll h-[500px]`}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-7'>
                            {step === 0 && <PersonalDetails1 form={form} />}
                            {step === 1 && <PersonalDetails2 form={form} />}

                            <div className='flex justify-end gap-5'>
                                {step > 0 && <Button variant='prev' className="w-20" onClick={prevStep} type="submit">Prev</Button>}
                                {step === 0 && <Button className="w-20" onClick={nextStep} type="submit">Next</Button>}
                                {step === 1 && <Button className="w-20" type="submit">Save</Button>}
                            </div>
                        </form>
                    </div>
                </Form>
            </div>
        </DentistWrapper>
    )
}

export default PersonalDetails