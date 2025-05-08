import { Button } from '@/components/ui/button';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import useGetApiReq from '@/hooks/useGetApiReq';
import { cn } from '@/lib/utils';
import { Check, ChevronDownIcon } from 'lucide-react';
import React, { useEffect, useState } from 'react'

const PatientComp = ({ control, setValue }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [patients, setPatients] = useState([]);
    const [search, setSearch] = useState('');
    const [debouncedSearch, setDebouncedSearch] = useState("");

    const { res, fetchData, isLoading } = useGetApiReq();

    const getPatients = () => {
        fetchData(`/admin/search-patient-without-pagination?searchQuery=${search}`)
    }

    const getPatientName = (field) => {
        let foundPatient = patients.find(
            (patient) => patient._id === field.value
        )
        return foundPatient?.name
    }

    useEffect(() => {
        if (search) {
            const handler = setTimeout(() => {
                setDebouncedSearch(search);
            }, 1000);

            return () => {
                clearTimeout(handler);
            };
        }
        else {
            getPatients();
        }
    }, [search]);

    useEffect(() => {
        if (debouncedSearch !== "") {
            getPatients();
        }
    }, [debouncedSearch]);

    useEffect(() => {
        if (res?.status === 200 || res?.status === 201) {
            console.log("getPatients", res)
            setPatients(res?.data?.foundPatients);
        }
    }, [res])

    return (
        <FormField
            control={control}
            name="patientId"
            render={({ field }) => (
                <FormItem>
                    <FormLabel className="text-base font-medium font-inter mb-4 max-[950px]:px-3 max-[950px]:text-sm max-[950px]:h-[46px] max-[950px]:rounded-lg">Select Patient</FormLabel>
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
                                        ? getPatientName(field)
                                        : "Select Patient"}
                                    <ChevronDownIcon className="opacity-50" />
                                </Button>
                            </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-[360px] p-0">
                            <Command shouldFilter={false}>
                                <CommandInput
                                    placeholder="Search patient..."
                                    className="h-9"
                                    value={search} onValueChange={setSearch}
                                />
                                <CommandList>
                                    <CommandEmpty>No patient found.</CommandEmpty>
                                    <CommandGroup>
                                        {patients.map((patient) => (
                                            <CommandItem
                                                value={patient?._id}
                                                key={patient?._id}
                                                onSelect={() => {
                                                    setValue("patientId", patient?._id)
                                                    setIsOpen(false);
                                                }}
                                            >
                                                {patient?.name}
                                                <Check
                                                    className={cn(
                                                        "ml-auto",
                                                        patient?._id === field.value
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

export default PatientComp