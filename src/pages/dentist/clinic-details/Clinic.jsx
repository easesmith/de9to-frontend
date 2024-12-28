import BreadcrumbCompo from '@/component/dentist-signup/BreadcrumbCompo'
import DentistWrapper from '@/components/dentist-wrapper/DentistWrapper'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import usePostApiReq from '@/hooks/usePostApiReq'
import { Clinic1Schema } from '@/schema/formSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'
import { useCallback, useEffect, useState } from 'react'
import { useFieldArray, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

const Clinic = () => {
    // const [step, setStep] = useState(0)

    // const nextStep = () => {
    //     setStep(step + 1)
    // }

    // const prevStep = () => {
    //     if (step >= 0)
    //         setStep(step - 1)
    // }


    const Id = localStorage.getItem("dentistId")

    const form = useForm({
        resolver: zodResolver(Clinic1Schema),
        defaultValues: {
            clinicName: "",
            clinicReceptionNumber: "",
            clinicConsultationFees: "",
            numberOfDentalChairs: "",
            clinicOwnership: "",
            propertyOwnership: "",
            address: "",
            area: "",
            nearbyLandmark: "",
            pincode: "",
            city: "",
            state: "",
            clinicLocationLink: "",
        }
    })

    const { register, setValue, watch, control, formState: { errors }, getValues } = form
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    const { fields, append, remove } = useFieldArray({
        control,
        name: "selectedHolidays",
    });

    const toggleDay = (day) => {
        const existingIndex = fields.findIndex(field => field.day === day);

        if (existingIndex !== -1) {
            remove(existingIndex);
        } else {
            append({ day });
        }
    };

    const containerStyle = {
        width: '100%',
        height: '150px',
        borderRadius: '16px'
    };

    const center = {
        lat: -3.745,
        lng: -38.523
    };

    const [markerPosition, setMarkerPosition] = useState(center);

    const onMapClick = useCallback((e) => {
        setMarkerPosition({
            lat: e.latLng.lat(),
            lng: e.latLng.lng()
        });
    }, []);

    useEffect(() => {
        // Check if geolocation is supported/enabled
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setMarkerPosition({
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    });
                },
                (error) => {
                    console.error("Error getting the user's location:", error);
                }
            );
        } else {
            console.error("Geolocation is not supported by this browser.");
        }
    }, []);


    const { res, fetchData } = usePostApiReq()
    const navigate = useNavigate()

    const onSubmit = (data) => {
        console.log("data:", data)
        console.log(data.selectedHolidays)
        const apiData = {
            dentistId: Id,
            clinicName: data.clinicName,
            clinicReceptionNumber: data.clinicReceptionNumber,
            consultationfee: data.clinicConsultationFees,
            noOfDentalChairs: data.numberOfDentalChairs,
            clinicOwnership: data.clinicOwnership,
            weeklyHoliday: data.selectedHolidays,
            propertyOwnership: data.propertyOwnership,
            clinicAddress: data.address,
            area: data.area,
            nearbyLandmark: data.nearbyLandmark,
            clinicPincode: data.pincode,
            city: data.city,
            state: data.state,
            mapLocation: data.clinicLocationLink,
        }
        fetchData(`/admin/create-clinic`, apiData)
        navigate(`/admin/application/clinic-update-time`)
    }



    useEffect(() => {
        if (res?.status === 200 || res?.status === 201) {
            console.log("clinic", res.data)
            console.log("clinicId ::", res?.data?.data?._id)
            localStorage.setItem("clinicId", res?.data?.data?._id)
        }
    }, [res])

    return (
        <DentistWrapper>
            <div className={`w-full shadow-[2px] rounded-[30px] bg-white px-16 py-10`}>
                <BreadcrumbCompo title="Clinic Details" />
                {/* <div className="flex justify-center items-center mt-12">
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
                    <div className="flex flex-col items-center">
                        <div className="flex items-center">
                            <div className="w-7 h-7 border-2 border-[#C6C6C6] rounded-full flex items-center justify-center">
                                <span className="bg-[#C6C6C6] w-[6px] h-[6px] rounded-full"></span>
                            </div>
                        </div>
                        <span className="mt-2 text-[#6F6F6F] text-center text-sm font-medium font-lato tracking-[1px]">Documents</span>
                    </div>
                </div> */}
                <Form {...form}>
                    <div className={`border-2 border-[#D4D4D4] rounded-[10px] px-16 py-12 my-12 overflow-y-scroll h-[500px]`}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-7'>

                            <h3 className='text-[#95C22B] text-2xl font-semibold font-Barlow'>Clinic Details</h3>
                            <div className='flex flex-col gap-5 w-[700px]'>
                                <FormField
                                    control={control}
                                    name="clinicName"
                                    render={({ field }) => (
                                        <FormItem className="max-w-[700px]">
                                            <FormLabel className={`text-[#111928] text-sm font-medium font-barlow`}>Clinic Name</FormLabel>
                                            <div className="relative mt-1">
                                                <FormControl>
                                                    <Input type="text" placeholder="Enter Clinic Name" className={`bg-[#F9FAFB] border-[1px] border-[#D1D5DB] rounded-lg text-[#6B7280] text-sm font-normal font-barlow`} {...field} />
                                                </FormControl>
                                                <button
                                                    type="button"
                                                    className="absolute top-1 right-0 flex items-center pr-3 text-[#6B7280] hover:text-gray-600"
                                                    onClick={() => setValue("clinicName", "")}
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
                                    name="clinicReceptionNumber"
                                    render={({ field }) => (
                                        <FormItem className="max-w-[700px]">
                                            <FormLabel className={`text-[#111928] text-sm font-medium font-barlow`}>Clinic Reception Number</FormLabel>
                                            <div className="relative mt-1">
                                                <FormControl>
                                                    <Input type="number" placeholder="Enter Number" className={`bg-[#F9FAFB] border-[1px] border-[#D1D5DB] rounded-lg text-[#6B7280] text-sm font-normal font-barlow`} {...field} />
                                                </FormControl>
                                            </div>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <div className='grid grid-cols-2 gap-4 w-full'>
                                    <FormField
                                        control={control}
                                        name="clinicConsultationFees"
                                        render={({ field }) => (
                                            <FormItem className="max-w-[700px]">
                                                <FormLabel className={`text-[#111928] text-sm font-medium font-barlow`}>Clinic Consultation Fees</FormLabel>
                                                <div className="relative mt-1">
                                                    <FormControl>
                                                        <Input type="number" placeholder="Enter the charge per hour" className={`bg-[#F9FAFB] border-[1px] border-[#D1D5DB] rounded-lg text-[#6B7280] text-sm font-normal font-barlow`} {...field} />
                                                    </FormControl>
                                                </div>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={control}
                                        name="numberOfDentalChairs"
                                        render={({ field }) => (
                                            <FormItem className="max-w-[700px]">
                                                <FormLabel className={`text-[#111928] text-sm font-medium font-barlow`}>Number Of Dental Chairs</FormLabel>
                                                <div className="relative mt-1">
                                                    <FormControl>
                                                        <Input type="number" placeholder="Enter Chair Number" className={`bg-[#F9FAFB] border-[1px] border-[#D1D5DB] rounded-lg text-[#6B7280] text-sm font-normal font-barlow`} {...field} />
                                                    </FormControl>
                                                </div>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <div className='grid grid-cols-2 gap-4 w-full'>
                                    <FormField
                                        control={control}
                                        name="clinicOwnership"
                                        render={({ field }) => (
                                            <FormItem className="max-w-[700px]">
                                                <FormLabel className={`text-[#111928] text-sm font-medium font-barlow`}>Clinic Ownership</FormLabel>
                                                <div className="relative mt-1">
                                                    <FormControl>
                                                        <Input type="text" placeholder="Enter Ownership" className={`bg-[#F9FAFB] border-[1px] border-[#D1D5DB] rounded-lg text-[#6B7280] text-sm font-normal font-barlow`} {...field} />
                                                    </FormControl>
                                                    <button
                                                        type="button"
                                                        className="absolute top-1 right-0 flex items-center pr-3 text-[#6B7280] hover:text-gray-600"
                                                        onClick={() => setValue("clinicOwnership", "")}
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
                                        name="propertyOwnership"
                                        render={({ field }) => (
                                            <FormItem className="max-w-[700px]">
                                                <FormLabel className={`text-[#111928] text-sm font-medium font-barlow`}>Property Ownership</FormLabel>
                                                <div className="relative mt-1">
                                                    <FormControl>
                                                        <Input type="text" placeholder="Enter Owner" className={`bg-[#F9FAFB] border-[1px] border-[#D1D5DB] rounded-lg text-[#6B7280] text-sm font-normal font-barlow`} {...field} />
                                                    </FormControl>
                                                    <button
                                                        type="button"
                                                        className="absolute top-1 right-0 flex items-center pr-3 text-[#6B7280] hover:text-gray-600"
                                                        onClick={() => setValue("propertyOwnership", "")}
                                                    >
                                                        &times;
                                                    </button>
                                                </div>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                            </div>
                            <Label className="text-sm font-barlow font-medium mt-4">Select Holidays</Label>
                            <div className="flex gap-4">
                                {days.map((day) => (
                                    <FormField
                                        key={day}
                                        control={control}
                                        name={day}
                                        render={() => (
                                            <FormItem className="flex flex-row items-start">
                                                <FormLabel
                                                    className={`w-12 h-12 cursor-pointer rounded-full flex justify-center items-center ${fields.find(field => (field.day === day)) ? 'bg-[#95C22B] text-white' : 'bg-[#D9D9D9] text-black'}`}
                                                >
                                                    {day}
                                                </FormLabel>
                                                <FormControl>
                                                    <Checkbox
                                                        className="hidden"
                                                        checked={fields.find(field => (field.day === day))}
                                                        onCheckedChange={() => toggleDay(day)}
                                                    />
                                                </FormControl>
                                            </FormItem>
                                        )}
                                    />
                                ))}
                            </div>
                            <p className="text-[0.8rem] font-medium text-destructive">{errors?.selectedHolidays?.message}</p>
                            <h3 className='text-[#95C22B] text-2xl font-semibold font-Barlow'>Location</h3>
                            <div className="grid grid-cols-2 w-full gap-10">
                                <div className='flex flex-col gap-5 justify-start'>
                                    <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
                                        <GoogleMap
                                            mapContainerStyle={containerStyle}
                                            center={markerPosition}
                                            zoom={10}
                                            onClick={onMapClick}
                                        >
                                            {markerPosition && <Marker position={markerPosition} />}
                                        </GoogleMap>
                                    </LoadScript>
                                    <FormField
                                        control={control}
                                        name="clinicLocationLink"
                                        render={({ field }) => (
                                            <FormItem className="max-w-[700px]">
                                                <FormLabel className={`text-[#111928] text-sm font-medium font-barlow`}>Clinic Location Link</FormLabel>
                                                <FormControl>
                                                    <div className="relative mt-1">
                                                        <Input type="url" placeholder="Enter Link" className={`bg-[#F9FAFB] border-[1px] border-[#D1D5DB] rounded-lg text-[#6B7280] text-sm font-normal font-barlow`} {...field} />
                                                        <button
                                                            type="button"
                                                            className="absolute inset-y-0 right-0 flex items-center pr-3 text-[#6B7280] hover:text-gray-600"
                                                            onClick={() => setValue("clinicLocationLink", "")}
                                                        >
                                                            &times;
                                                        </button>
                                                    </div>
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <div className='flex flex-col gap-5'>
                                    <div className='grid grid-cols-2 gap-4 w-full'>
                                        <FormField
                                            control={control}
                                            name="address"
                                            render={({ field }) => (
                                                <FormItem className="max-w-[700px]">
                                                    <FormLabel className={`text-[#111928] text-sm font-medium font-barlow`}>Address</FormLabel>
                                                    <div className="relative mt-1">
                                                        <FormControl>
                                                            <Input type="text" placeholder="Enter Address" className={`bg-[#F9FAFB] border-[1px] border-[#D1D5DB] rounded-lg text-[#6B7280] text-sm font-normal font-barlow`} {...field} />
                                                        </FormControl>
                                                        <button
                                                            type="button"
                                                            className="absolute top-1 right-0 flex items-center pr-3 text-[#6B7280] hover:text-gray-600"
                                                            onClick={() => setValue("address", "")}
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
                                            name="area"
                                            render={({ field }) => (
                                                <FormItem className="max-w-[700px]">
                                                    <FormLabel className={`text-[#111928] text-sm font-medium font-barlow`}>Area</FormLabel>
                                                    <div className="relative mt-1">
                                                        <FormControl>
                                                            <Input type="text" placeholder="Enter Area" className={`bg-[#F9FAFB] border-[1px] border-[#D1D5DB] rounded-lg text-[#6B7280] text-sm font-normal font-barlow`} {...field} />
                                                        </FormControl>
                                                        <button
                                                            type="button"
                                                            className="absolute top-1 right-0 flex items-center pr-3 text-[#6B7280] hover:text-gray-600"
                                                            onClick={() => setValue("address", "")}
                                                        >
                                                            &times;
                                                        </button>
                                                    </div>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                    <div className='grid grid-cols-2 gap-4 w-full'>
                                        <FormField
                                            control={control}
                                            name="nearbyLandmark"
                                            render={({ field }) => (
                                                <FormItem className="max-w-[700px]">
                                                    <FormLabel className={`text-[#111928] text-sm font-medium font-barlow`}>Near Landmark</FormLabel>
                                                    <div className="relative mt-1">
                                                        <FormControl>
                                                            <Input type="text" placeholder="Enter Near Landmark" className={`bg-[#F9FAFB] border-[1px] border-[#D1D5DB] rounded-lg text-[#6B7280] text-sm font-normal font-barlow`} {...field} />
                                                        </FormControl>
                                                        <button
                                                            type="button"
                                                            className="absolute top-1 right-0 flex items-center pr-3 text-[#6B7280] hover:text-gray-600"
                                                            onClick={() => setValue("nearbyLandmark", "")}
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
                                            name="pincode"
                                            render={({ field }) => (
                                                <FormItem className="max-w-[700px]">
                                                    <FormLabel className={`text-[#111928] text-sm font-medium font-barlow`}>Pincode</FormLabel>
                                                    <div className="relative mt-1">
                                                        <FormControl>
                                                            <Input type="number" placeholder="Enter Pincode" className={`bg-[#F9FAFB] border-[1px] border-[#D1D5DB] rounded-lg text-[#6B7280] text-sm font-normal font-barlow`} {...field} />
                                                        </FormControl>
                                                        {/* <button
                                            type="button"
                                            className="absolute top-1 right-0 flex items-center pr-3 text-[#6B7280] hover:text-gray-600"
                                            onClick={() => setValue("pincode", "")}
                                        >
                                            &times;
                                        </button> */}
                                                    </div>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                    <div className='grid grid-cols-2 gap-4 w-full'>
                                        <FormField
                                            control={control}
                                            name="city"
                                            render={({ field }) => (
                                                <FormItem className="max-w-[700px]">
                                                    <FormLabel className={`text-[#111928] text-sm font-medium font-barlow`}>City</FormLabel>
                                                    <div className="relative mt-1">
                                                        <FormControl>
                                                            <Input type="text" placeholder="Enter City" className={`bg-[#F9FAFB] border-[1px] border-[#D1D5DB] rounded-lg text-[#6B7280] text-sm font-normal font-barlow`} {...field} />
                                                        </FormControl>
                                                        <button
                                                            type="button"
                                                            className="absolute top-1 right-0 flex items-center pr-3 text-[#6B7280] hover:text-gray-600"
                                                            onClick={() => setValue("city", "")}
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
                                            name="state"
                                            render={({ field }) => (
                                                <FormItem className="max-w-[700px]">
                                                    <FormLabel className={`text-[#111928] text-sm font-medium font-barlow`}>State</FormLabel>
                                                    <div className="relative mt-1">
                                                        <FormControl>
                                                            <Input type="text" placeholder="Enter State" className={`bg-[#F9FAFB] border-[1px] border-[#D1D5DB] rounded-lg text-[#6B7280] text-sm font-normal font-barlow`} {...field} />
                                                        </FormControl>
                                                        <button
                                                            type="button"
                                                            className="absolute top-1 right-0 flex items-center pr-3 text-[#6B7280] hover:text-gray-600"
                                                            onClick={() => setValue("state", "")}
                                                        >
                                                            &times;
                                                        </button>
                                                    </div>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className='flex justify-end gap-5'>
                                <Button className="w-20" type="submit">Save</Button>
                            </div>
                        </form>
                    </div>
                </Form>
            </div>
        </DentistWrapper>
    )
}

export default Clinic
