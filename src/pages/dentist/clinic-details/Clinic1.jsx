import React, { useCallback, useState } from 'react'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'

const Clinic1 = ({ form }) => {

    const { register, control, watch, setValue } = form

    const containerStyle = {
        width: '100%',
        height: '150px',
        borderRadius: '16px'
    };

    const center = {
        lat: -3.745,
        lng: -38.523
    };

    const [markerPosition, setMarkerPosition] = useState(null);

    const onMapClick = useCallback((e) => {
        setMarkerPosition({
            lat: e.latLng.lat(),
            lng: e.latLng.lng()
        });
    }, []);

    // console.log("markerPosition", markerPosition);

    return (
        <>
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
                                    <Input type="text" placeholder="Enter Number" className={`bg-[#F9FAFB] border-[1px] border-[#D1D5DB] rounded-lg text-[#6B7280] text-sm font-normal font-barlow`} {...field} />
                                </FormControl>
                                <button
                                    type="button"
                                    className="absolute top-1 right-0 flex items-center pr-3 text-[#6B7280] hover:text-gray-600"
                                    onClick={() => setValue("clinicReceptionNumber", "")}
                                >
                                    &times;
                                </button>
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
                                        <Input type="text" placeholder="Enter the charge per hour" className={`bg-[#F9FAFB] border-[1px] border-[#D1D5DB] rounded-lg text-[#6B7280] text-sm font-normal font-barlow`} {...field} />
                                    </FormControl>
                                    <button
                                        type="button"
                                        className="absolute top-1 right-0 flex items-center pr-3 text-[#6B7280] hover:text-gray-600"
                                        onClick={() => setValue("clinicConsultationFees", "")}
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
                        name="numberOfDentalChairs"
                        render={({ field }) => (
                            <FormItem className="max-w-[700px]">
                                <FormLabel className={`text-[#111928] text-sm font-medium font-barlow`}>Number Of Dental Chairs</FormLabel>
                                <div className="relative mt-1">
                                    <FormControl>
                                        <Input type="text" placeholder="Enter Chair Number" className={`bg-[#F9FAFB] border-[1px] border-[#D1D5DB] rounded-lg text-[#6B7280] text-sm font-normal font-barlow`} {...field} />
                                    </FormControl>
                                    <button
                                        type="button"
                                        className="absolute top-1 right-0 flex items-center pr-3 text-[#6B7280] hover:text-gray-600"
                                        onClick={() => setValue("clinicReceptionNumber", "")}
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
            <h3 className='text-[#95C22B] text-2xl font-semibold font-Barlow'>Location</h3>
            <div className="grid grid-cols-2 w-full gap-10">
                <div className='flex flex-col gap-5 justify-start'>
                    <LoadScript googleMapsApiKey={import.meta.env.GOOGLE_MAPS_API_KEY}>
                        <GoogleMap
                            mapContainerStyle={containerStyle}
                            center={center}
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
                                        <Input type="text" placeholder="Enter Link" className={`bg-[#F9FAFB] border-[1px] border-[#D1D5DB] rounded-lg text-[#6B7280] text-sm font-normal font-barlow`} {...field} />
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
                                            <Input type="text" placeholder="Enter Pincode" className={`bg-[#F9FAFB] border-[1px] border-[#D1D5DB] rounded-lg text-[#6B7280] text-sm font-normal font-barlow`} {...field} />
                                        </FormControl>
                                        <button
                                            type="button"
                                            className="absolute top-1 right-0 flex items-center pr-3 text-[#6B7280] hover:text-gray-600"
                                            onClick={() => setValue("pincode", "")}
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
        </>
    )
}

export default Clinic1
