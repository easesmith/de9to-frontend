import { zodResolver } from '@hookform/resolvers/zod';
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { updateMultiplePreview, updatePreview } from '@/utils/updatePreview';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import DentistWrapper from '@/components/dentist-wrapper/DentistWrapper';
import BreadcrumbCompo from '@/component/dentist-signup/BreadcrumbCompo';
import { ImageCompo, ShowImageCompo } from '@/component/dentist-signup/ImageCompo';
import { OthersDetailsSchema } from '@/schema/formSchema';
import usePatchApiReq from '@/hooks/usePatchApiReq';
import { useNavigate } from 'react-router-dom';

const OtherDetails = () => {

    const dentistId = localStorage.getItem("dentistId")
    const { res, fetchData, isLoading } = usePatchApiReq();
    const navigate = useNavigate();

    const form = useForm({
        resolver: zodResolver(OthersDetailsSchema),
        defaultValues: {
            instagramProfileLink: "",
            facebookProfileLink: "",
            youtubeProfileLink: "",
            linkdinProfileLink: "",
            websiteLink: "",
            googleMyBusinessLink: "",
            vaccinationCertification: "",
            statePollutionCertification: "",
            BMWLicenseCertification: "",
            coursesCertification: ""
        }
    })

    const { register, control, reset, watch, setValue } = form;

    const onSubmit = (data) => {
        console.log("data:", data)

        const formData = new FormData();
        formData.append("instaLink", data.instagramProfileLink);
        formData.append("fbLink", data.facebookProfileLink);
        formData.append("linkedInLink", data.linkdinProfileLink);
        formData.append("youtubeLink", data.youtubeProfileLink);
        formData.append("websiteLink", data.websiteLink);
        formData.append("googleMyBusinessLink", data.googleMyBusinessLink);
        formData.append("dentistId", dentistId || "");
        // googleMyBusinessLink

        // File fields
        formData.append("vaccinationCertificate", data.vaccinationCertification[0]);
        formData.append("statePollutionCertificate", data.statePollutionCertification[0]);
        formData.append("bmwCertificate", data.BMWLicenseCertification[0]);

        Array(data.coursesCertification).forEach((img) => {
            formData.append("otherCertificates", img);
        });

        fetchData("/dentist/update-dentist", formData);
    }

    useEffect(() => {
        if (res?.status === 200 || res?.status === 201) {
            console.log("dentist details submit res", res);
            navigate("/dentist/application")
            form.reset();
        }
    }, [res])

    const vaccinationCertificationImg = register("vaccinationCertification")
    const statePollutionCertificationImg = register("statePollutionCertification")
    const BMWLicenseCertificationImg = register("BMWLicenseCertification")
    const coursesCertificationImg = register("coursesCertification")


    const vaccinationCertificationImgWatch = watch("vaccinationCertification")
    const statePollutionCertificationImgWatch = watch("statePollutionCertification")
    const BMWLicenseCertificationImgWatch = watch("BMWLicenseCertification")
    const coursesCertificationImgWatch = watch("coursesCertification")

    useEffect(() => {
        updatePreview(vaccinationCertificationImgWatch, "vaccinationCertificationImgWatchPreview", setValue)
        updatePreview(statePollutionCertificationImgWatch, "statePollutionCertificationImgWatchPreview", setValue)
        updatePreview(BMWLicenseCertificationImgWatch, "BMWLicenseCertificationImgWatchPreview", setValue)
        updateMultiplePreview(coursesCertificationImgWatch, "coursesCertificationImgWatchPreview", setValue)

    }, [form, vaccinationCertificationImgWatch, statePollutionCertificationImgWatch, BMWLicenseCertificationImgWatch, coursesCertificationImgWatch, setValue])

    return (
        <DentistWrapper>
            <div className="w-full shadow-[2px] rounded-[30px] bg-white px-16 py-10">
                <BreadcrumbCompo title="Other Details" />
                <Form {...form}>
                    <div className='border-2 border-[#D4D4D4] rounded-[10px] px-16 py-12 my-12 overflow-y-scroll h-[500px]'>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-7">
                            <h3 className='text-[#95C22B] text-2xl font-semibold font-Barlow'>Social Media Details</h3>
                            <div className={`flex flex-col gap-5 w-[700px]`}>
                                <FormField
                                    control={control}
                                    name="instagramProfileLink"
                                    render={({ field }) => (
                                        <FormItem className="">
                                            <FormLabel className={`text-[#111928] text-sm font-medium font-barlow`}>
                                                Instagram profile link
                                            </FormLabel>
                                            <div className="relative mt-1">
                                                <FormControl>
                                                    <Input type="text" placeholder="Enter Instagram Profile Link" className={`bg-[#F9FAFB] border-[1px] border-[#D1D5DB] rounded-lg text-[#6B7280] text-sm font-normal font-barlow`} {...field} />
                                                </FormControl>
                                                <button
                                                    type="button"
                                                    className="absolute top-1 right-0 flex items-center pr-3 text-[#6B7280] hover:text-gray-600"
                                                    onClick={() => setValue("instagramProfileLink", "")}
                                                >
                                                    &times;
                                                </button>
                                            </div>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={control} np
                                    name="facebookProfileLink"
                                    render={({ field }) => (
                                        <FormItem className="">
                                            <FormLabel className={`text-[#111928] text-sm font-medium font-barlow`}>
                                                Facebook profile link
                                            </FormLabel>
                                            <div className="relative mt-1">
                                                <FormControl>
                                                    <Input type="text" placeholder="Enter Facebook Profile Link" className={`bg-[#F9FAFB] border-[1px] border-[#D1D5DB] rounded-lg text-[#6B7280] text-sm font-normal font-barlow`} {...field} />
                                                </FormControl>
                                                <button
                                                    type="button"
                                                    className="absolute top-1 right-0 flex items-center pr-3 text-[#6B7280] hover:text-gray-600"
                                                    onClick={() => setValue("facebookProfileLink", "")}
                                                >
                                                    &times;
                                                </button>
                                            </div>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={control}
                                    name="youtubeProfileLink"
                                    render={({ field }) => (
                                        <FormItem className="">
                                            <FormLabel className={`text-[#111928] text-sm font-medium font-barlow`}>
                                                Youtube profile link
                                            </FormLabel>
                                            <div className="relative mt-1">
                                                <FormControl>
                                                    <Input type="text" placeholder="Enter Youtube Profile Link" className={`bg-[#F9FAFB] border-[1px] border-[#D1D5DB] rounded-lg text-[#6B7280] text-sm font-normal font-barlow`} {...field} />
                                                </FormControl>
                                                <button
                                                    type="button"
                                                    className="absolute top-1 right-0 flex items-center pr-3 text-[#6B7280] hover:text-gray-600"
                                                    onClick={() => setValue("youtubeProfileLink", "")}
                                                >
                                                    &times;
                                                </button>
                                            </div>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={control}
                                    name="linkdinProfileLink"
                                    render={({ field }) => (
                                        <FormItem className="">
                                            <FormLabel className={`text-[#111928] text-sm font-medium font-barlow`}>
                                                Linkdin profile link
                                            </FormLabel>
                                            <div className="relative mt-1">
                                                <FormControl>
                                                    <Input type="text" placeholder="Enter Linkdin Profile Link" className={`bg-[#F9FAFB] border-[1px] border-[#D1D5DB] rounded-lg text-[#6B7280] text-sm font-normal font-barlow`} {...field} />
                                                </FormControl>
                                                <button
                                                    type="button"
                                                    className="absolute top-1 right-0 flex items-center pr-3 text-[#6B7280] hover:text-gray-600"
                                                    onClick={() => setValue("linkdinProfileLink", "")}
                                                >
                                                    &times;
                                                </button>
                                            </div>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={control}
                                    name="websiteProfileLink"
                                    render={({ field }) => (
                                        <FormItem className="">
                                            <FormLabel className={`text-[#111928] text-sm font-medium font-barlow`}>
                                                Website link
                                            </FormLabel>
                                            <div className="relative mt-1">
                                                <FormControl>
                                                    <Input type="text" placeholder="Enter Website Link" className={`bg-[#F9FAFB] border-[1px] border-[#D1D5DB] rounded-lg text-[#6B7280] text-sm font-normal font-barlow`} {...field} />
                                                </FormControl>
                                                <button
                                                    type="button"
                                                    className="absolute top-1 right-0 flex items-center pr-3 text-[#6B7280] hover:text-gray-600"
                                                    onClick={() => setValue("websiteProfileLink", "")}
                                                >
                                                    &times;
                                                </button>
                                            </div>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <h3 className='text-[#95C22B] text-2xl font-semibold font-Barlow'>Other Documents</h3>
                            <div className={`flex flex-col gap-5 w-[700px]`}>
                                <FormField
                                    control={control}
                                    name="vaccinationCertification"
                                    render={({ field }) => (
                                        <FormItem className="z-20">
                                            {watch("vaccinationCertificationImgWatchPreview") && <ShowImageCompo field={"vaccinationCertificationImgWatchPreview"} setValue={setValue} watch={watch} title={"Vaccination Certification"} />}
                                            <FormLabel className={`w-[250px]`}>
                                                {!watch("vaccinationCertificationImgWatchPreview") && <ImageCompo title={"Vaccination Certification"} />}
                                            </FormLabel>
                                            <FormControl className="hidden">
                                                <Input type="file" accept='.png,.jpeg,.jpg' {...vaccinationCertificationImg} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={control}
                                    name="statePollutionCertification"
                                    render={({ field }) => (
                                        <FormItem className="z-20">
                                            {watch("statePollutionCertificationImgWatchPreview") && <ShowImageCompo field={"statePollutionCertificationImgWatchPreview"} setValue={setValue} watch={watch} title={"State Pollution Certification"} />}
                                            <FormLabel className={`w-[250px]`}>
                                                {!watch("statePollutionCertificationImgWatchPreview") && <ImageCompo title={"State Pollution Certification"} />}
                                            </FormLabel>
                                            <FormControl className="hidden">
                                                <Input type="file" accept='.png,.jpeg,.jpg' {...statePollutionCertificationImg} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={control}
                                    name="BMWLicenseCertification"
                                    render={({ field }) => (
                                        <FormItem className="z-20">
                                            {watch("BMWLicenseCertificationImgWatchPreview") && <ShowImageCompo field={"BMWLicenseCertificationImgWatchPreview"} setValue={setValue} watch={watch} title={"BMW License Certification"} />}
                                            <FormLabel className={`w-[250px]`}>
                                                {!watch("BMWLicenseCertificationImgWatchPreview") && <ImageCompo title={"BMW License Certification"} />}
                                            </FormLabel>
                                            <FormControl className="hidden">
                                                <Input type="file" accept='.png,.jpeg,.jpg' {...BMWLicenseCertificationImg} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <div className='w-full mt-4'>
                                    <div className="grid w-full gap-10 mt-2">
                                        <div className="w-full  relative">
                                            <FormField
                                                control={control}
                                                name="coursesCertification"
                                                render={({ field }) => (
                                                    <FormItem className="z-20">
                                                        <FormLabel className="cursor-pointer  left-0 w-full h-full top-0">
                                                            {!watch("coursesCertificationImgWatchPreview") && <ImageCompo title={"Other Certifications"} />}
                                                            {watch("coursesCertificationImgWatchPreview") &&
                                                                <>
                                                                    <div className='flex flex-wrap h-full gap-4 relative'>
                                                                        {/* <FaXmark onClick={() => setValue("coursesCertification", "")} className='absolute right-[-10%] top-8 text-2xl cursor-pointer' /> */}
                                                                        {watch("coursesCertificationImgWatchPreview").map((prev, i) => (
                                                                            <img key={i} className='w-[170px]' src={prev} alt="" />
                                                                        ))}
                                                                    </div>
                                                                </>}
                                                        </FormLabel>
                                                        <FormControl className="hidden">
                                                            <Input type="file" multiple={true} accept='.png,.jpeg,.jpg' {...coursesCertificationImg} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-end">
                                <Button className="w-20" type="submit">Save</Button>
                            </div>
                        </form>
                    </div>

                </Form>
            </div>
        </DentistWrapper>
    )
}

export default OtherDetails
