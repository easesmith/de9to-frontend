import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "@/components/ui/input"
import { updatePreview } from '@/utils/updatePreview'
import { FaXmark } from 'react-icons/fa6'
import { BankDetailsSchema } from '@/schema/formSchema'
import DentistWrapper from '@/components/dentist-wrapper/DentistWrapper'
import BreadcrumbCompo from '@/component/dentist-signup/BreadcrumbCompo'
import { ImageCompo, ShowImageCompo } from '@/component/dentist-signup/ImageCompo'
import usePatchApiReq from '@/hooks/usePatchApiReq'
import { useNavigate } from 'react-router-dom'

const BankDetails = () => {

    const dentistId = localStorage.getItem("dentistId");
    const clinicId = localStorage.getItem("clinicId");
    const navigate = useNavigate();

    const form = useForm({
        resolver: zodResolver(BankDetailsSchema),
        defaultValues: {
            bankName: "",
            bankAccountNumber: "",
            bankAccountType: "savings",
            branchName: "",
            IFSCCode: "",
            upiCode: "",
            clinicQrCode: ""
        }
    })

    const { res, fetchData, isLoading } = usePatchApiReq();

    const { register, handleSubmit, control, reset, watch, setValue, getValues } = form

    const onSubmit = (data) => {
        console.log("data:", data)
        // reset({
        // bankName: "",
        //     bankAccountNumber: "",
        //     bankAccountType: "",
        //     branchName: "",
        //     IFSCCode: "",
        //     upiCode: "",
        //     clinicQrCode: ""
        // })


        const formData = new FormData();
        formData.append("dentistId", dentistId || "");
        formData.append("bankName", data.bankName);
        formData.append("branchName", data.branchName);
        formData.append("upiDetails", data.upiCode);
        formData.append("ifscCode", data.IFSCCode);
        formData.append("accountNumber", data.bankAccountNumber);
        formData.append("accountType", data.bankAccountType);
        formData.append("clinicId", clinicId);

        // File fields
        formData.append("clinicQrCode", data.clinicQrCode[0]);

        fetchData("/dentist/update-dentist", formData);
    }

    useEffect(() => {
        if (res?.status === 200 || res?.status === 201) {
            console.log("dentist details submit res", res);
            navigate("/dentist/application")
            form.reset();
        }
    }, [res])

    const clinicQrCodeImg = register("clinicQrCode")
    const clinicQrCodeImgWatch = watch("clinicQrCode")

    useEffect(() => {
        updatePreview(clinicQrCodeImgWatch, "clinicQrCodeImgWatchPreview", setValue);
    }, [form, clinicQrCodeImgWatch, setValue]);

    // const totalFields = Object.keys(form.getValues()).length
    // const filledFields = Object.values(values).filter((value) => value.trim() !== "").length;

    // console.log(filledFields);

    const values = watch();

    const calculateFilledPercentage = (values) => {
        const totalFields = Object.keys(values).length;
        const filledFields = Object.values(values).filter((value) => {
            if (typeof value === 'string') {
                return value.trim() !== "";
            }

            // Check for numbers (consider 0 as filled if it makes sense contextually)
            if (typeof value === 'number') {
                return true; // Assume numbers are always filled
            }

            // Check for boolean values
            if (typeof value === 'boolean') {
                return value; // true means filled, false means not filled
            }

            // Check for files/images
            if (value instanceof File || value instanceof Blob) {
                return value.size > 0; // File is filled if size is greater than 0
            }

            // For objects and other types
            if (typeof value === 'object' && value !== null) {
                return Object.keys(value).length > 0; // Non-empty objects are filled
            }

            return false;
        }).length;
        const percentagePerField = 100 / totalFields;
        const filledPercentage = filledFields * percentagePerField;

        return filledPercentage.toFixed(2);
    };


    // Calculate filled percentage
    const filledPercentage = calculateFilledPercentage(values);

    console.log(`Percentage of filled fields: ${filledPercentage}%`);


    // console.log("clinicQrCode", clinicQrCodeImg)

    return (
        <DentistWrapper>
            <div className={`w-full shadow-[2px] rounded-[30px] bg-white px-16 py-10`}>
                <BreadcrumbCompo title="Bank Details" />
                <Form {...form}>
                    <div className={`border-2 border-[#D4D4D4] rounded-[10px] px-16 py-12 my-12 overflow-y-scroll h-[500px]`}>
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-7">
                            <h3 className='text-[#95C22B] text-2xl font-semibold font-Barlow'>Bank Documents</h3>
                            <div className='flex flex-col gap-5 w-[700px]'>
                                <div className={`grid grid-cols-2 gap-4`}>
                                    <FormField
                                        control={control}
                                        name="bankName"
                                        render={({ field }) => (
                                            <FormItem className="max-w-[700px]">
                                                <FormLabel className={`text-[#111928] text-sm font-medium font-barlow`}>Bank Name</FormLabel>
                                                <div className="relative mt-1">
                                                    <FormControl>
                                                        <Input type="text" placeholder="Enter Bank Name" className={` bg-[#F9FAFB] border-[1px] border-[#D1D5DB] rounded-lg text-[#6B7280] text-sm font-normal font-barlow`} {...field} />
                                                    </FormControl>
                                                    <button
                                                        type="button"
                                                        className="absolute top-1 right-0 flex items-center pr-3 text-[#6B7280] hover:text-gray-600"
                                                        onClick={() => setValue("bankName", "")}
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
                                        name="bankAccountNumber"
                                        render={({ field }) => (
                                            <FormItem className="max-w-[700px]">
                                                <FormLabel className={`text-[#111928] text-sm font-medium font-barlow`}>Bank Account number</FormLabel>
                                                <div className="relative mt-1">
                                                    <FormControl>
                                                        <Input type="number" placeholder="Enter Account Number" className={` bg-[#F9FAFB] border-[1px] border-[#D1D5DB] rounded-lg text-[#6B7280] text-sm font-normal font-barlow`} {...field} />
                                                    </FormControl>
                                                    <button
                                                        type="button"
                                                        className="absolute top-1 right-0 flex items-center pr-3 text-[#6B7280] hover:text-gray-600"
                                                        onClick={() => setValue("bankAccountNumber", "")}
                                                    >
                                                        &times;
                                                    </button>
                                                </div>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <div className={`grid grid-cols-2 gap-4`}>
                                    <FormField
                                        control={control}
                                        name="bankAccountType"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className={`text-[#111928] text-sm font-medium font-barlow`}>Bank Account Type</FormLabel>
                                                <div className="relative mt-1">
                                                    <FormControl>
                                                        <Input type="text" placeholder="Enter Account Type" className={`bg-[#F9FAFB] border-[1px] border-[#D1D5DB] rounded-lg text-[#6B7280] text-sm font-normal font-barlow`} {...field} />
                                                    </FormControl>
                                                    <button
                                                        type="button"
                                                        className="absolute top-1 right-0 flex items-center pr-3 text-[#6B7280] hover:text-gray-600"
                                                        onClick={() => setValue("bankAccountType", "")}
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
                                        name="branchName"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className={`text-[#111928] text-sm font-medium font-barlow`}>Branch Name</FormLabel>
                                                <div className="relative mt-1">
                                                    <FormControl>
                                                        <Input type="text" placeholder="Enter Branch Name" className={`bg-[#F9FAFB] border-[1px] border-[#D1D5DB] rounded-lg text-[#6B7280] text-sm font-normal font-barlow`} {...field} />
                                                    </FormControl>
                                                    <button
                                                        type="button"
                                                        className="absolute top-1 right-0 flex items-center pr-3 text-[#6B7280] hover:text-gray-600"
                                                        onClick={() => setValue("branchName", "")}
                                                    >
                                                        &times;
                                                    </button>
                                                </div>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <FormField
                                    control={control}
                                    name="IFSCCode"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className={`text-[#111928] text-sm font-medium font-barlow`}>IFSC Code</FormLabel>
                                            <div className="relative mt-1">
                                                <FormControl>
                                                    <Input type="text" placeholder="Enter IFSC Code" className={`bg-[#F9FAFB] border-[1px] border-[#D1D5DB] rounded-lg text-[#6B7280] text-sm font-normal font-barlow`} {...field} />
                                                </FormControl>
                                                <button
                                                    type="button"
                                                    className="absolute top-1 right-0 flex items-center pr-3 text-[#6B7280] hover:text-gray-600"
                                                    onClick={() => setValue("IFSCCode", "")}
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
                                    name="upiCode"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className={`text-[#111928] text-sm font-medium font-barlow`}>Enter Upi Code</FormLabel>
                                            <div className="relative mt-1">
                                                <FormControl>
                                                    <Input type="text" placeholder="Enter Upi Code" className={`bg-[#F9FAFB] border-[1px] border-[#D1D5DB] rounded-lg text-[#6B7280] text-sm font-normal font-barlow`} {...field} />
                                                </FormControl>
                                                <button
                                                    type="button"
                                                    className="absolute top-1 right-0 flex items-center pr-3 text-[#6B7280] hover:text-gray-600"
                                                    onClick={() => setValue("upiCode", "")}
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
                                    name="clinicQrCode"
                                    render={({ field }) => (
                                        <FormItem>
                                            {watch("clinicQrCodeImgWatchPreview") && <ShowImageCompo field={"clinicQrCodeImgWatchPreview"} setValue={setValue} watch={watch} title={"clinic Qr Code"} />}
                                            <FormLabel className={`w-[250px]`}>
                                                {!watch("clinicQrCodeImgWatchPreview") && <ImageCompo title={"clinic Qr Code"} />}
                                            </FormLabel>
                                            <FormControl>
                                                <Input type="file" className="hidden" {...clinicQrCodeImg} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div className='flex justify-end'>
                                <Button className="w-20" type="submit">Save</Button>
                            </div>
                        </form>
                    </div>
                </Form>
            </div>
        </DentistWrapper>
    )
}

export default BankDetails
