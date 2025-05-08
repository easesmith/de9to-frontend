import { Button } from '@/components/ui/button';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import useGetApiReq from '@/hooks/useGetApiReq';
import { cn } from '@/lib/utils';
import { Check, ChevronDownIcon } from 'lucide-react';
import React, { useEffect, useState } from 'react'

const AppointmentComp = ({ control, setValue, getValues }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [appointments, setAppointments] = useState([]);

    const { res, fetchData, isLoading } = useGetApiReq();

    const getAppointments = () => {
        fetchData(`/admin/get-all-appointment-patient?patientId=${getValues("patientId")}&status=all`)
    }

    const getAppointmentName = (field) => {
        let foundAppointment = appointments.find(
            (appointment) => appointment._id === field.value
        )
        return `${foundAppointment?.timing?.date} | ${foundAppointment?.timing?.slot?.startTime} - ${foundAppointment?.timing?.slot?.endTime} | ${foundAppointment?.name}`
    }

    useEffect(() => {
        getAppointments();
    }, [getValues("patientId")]);

    useEffect(() => {
        if (res?.status === 200 || res?.status === 201) {
            console.log("get appointment res", res)
            setAppointments(res?.data?.foundAppointments);
            if (res?.data?.foundAppointments?.length === 0) {
                setValue("appointmentId", "")
                setValue("dentistId", "")
                setValue("clinicId", "")
                setValue("dentistName", "")
                setValue("clinicName", "")
            }
        }
    }, [res])

    return (
        <FormField
            control={control}
            name="appointmentId"
            render={({ field }) => (
                <FormItem>
                    <FormLabel className="text-base font-medium font-inter mb-4 max-[950px]:px-3 max-[950px]:text-sm max-[950px]:h-[46px] max-[950px]:rounded-lg">Select Appointment</FormLabel>
                    <Popover open={isOpen} onOpenChange={setIsOpen}>
                        <PopoverTrigger asChild>
                            <FormControl>
                                <Button
                                    variant="outline"
                                    role="combobox"
                                    className={cn(
                                        "w-full active:scale-100 h-12 justify-between",
                                        !field.value && "text-muted-foreground"
                                    )}
                                >
                                    {field.value
                                        ? getAppointmentName(field)
                                        : "Select Appointment"}
                                    <ChevronDownIcon className="opacity-50" />
                                </Button>
                            </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-[360px] p-0">
                            <Command>
                                <CommandInput
                                    placeholder="Search appointment..."
                                    className="h-9"
                                />
                                <CommandList>
                                    <CommandEmpty>No appointment found.</CommandEmpty>
                                    <CommandGroup>
                                        {appointments.map((appointment) => (
                                            <CommandItem
                                                value={appointment?._id}
                                                key={appointment?._id}
                                                onSelect={() => {
                                                    setValue("appointmentId", appointment?._id)
                                                    setValue("dentistId", appointment?.dentistId?._id)
                                                    setValue("clinicId", appointment?.clinicId?._id)
                                                    setValue("dentistName", `${appointment?.dentistId?.personalDetails?.prefix}. ${appointment?.dentistId?.personalDetails?.Firstname} ${appointment?.dentistId?.personalDetails?.lastName}`)
                                                    setValue("clinicName", appointment?.clinicId?.clinicName)
                                                    setIsOpen(false);
                                                }}
                                            >
                                                {`${appointment?.clinicId?.clinicName} | ${appointment?.timing?.date} | ${appointment?.timing?.slot?.startTime} - ${appointment?.timing?.slot?.endTime} | ${appointment?.name}`}
                                                <Check
                                                    className={cn(
                                                        "ml-auto",
                                                        appointment?._id === field.value
                                                            ? "opacity-100"
                                                            : "opacity-0"
                                                    )}
                                                />
                                            </CommandItem>
                                        ))}
                                    </CommandGroup>
                                </CommandList>
                            </Command>
                        </PopoverContent>
                    </Popover>
                    <FormMessage />
                </FormItem>
            )}
        />
    )
}

export default AppointmentComp