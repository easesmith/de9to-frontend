import { Button } from '@/components/ui/button';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import useGetApiReq from '@/hooks/useGetApiReq';
import { cn } from '@/lib/utils';
import { Check, ChevronDownIcon } from 'lucide-react';
import React, { useEffect, useState } from 'react'

const DentistComp = ({ control, setValue }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [dentists, setDentists] = useState([]);
    const [search, setSearch] = useState('');
    const [debouncedSearch, setDebouncedSearch] = useState("");

    const { res, fetchData, isLoading } = useGetApiReq();

    const getDentists = () => {
        fetchData(`/admin/get-dentist-list-without-pagination?searchQuery=${search}`)
    }

    const getDentistName = (field) => {
        let foundDentist = dentists?.find(
            (dentist) => dentist?._id === field?.value
        )
        return `${foundDentist?.personalDetails?.prefix}. ${foundDentist?.personalDetails?.Firstname} ${foundDentist?.personalDetails?.lastName}`
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
            getDentists();
        }
    }, [search]);

    useEffect(() => {
        if (debouncedSearch !== "") {
            getDentists();
        }
    }, [debouncedSearch]);

    useEffect(() => {
        if (res?.status === 200 || res?.status === 201) {
            console.log("dentist", res)
            setDentists(res?.data?.foundDentistList)
        }
    }, [res])

    return (
        <FormField
            control={control}
            name="dentistId"
            render={({ field }) => (
                <FormItem>
                    <FormLabel className="text-base font-medium font-inter mb-4 max-[950px]:px-3 max-[950px]:text-sm max-[950px]:h-[46px] max-[950px]:rounded-lg">Select Dentist</FormLabel>
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
                                        ? getDentistName(field)
                                        : "Select Dentist"}
                                    <ChevronDownIcon className="opacity-50" />
                                </Button>
                            </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-[360px] p-0">
                            <Command shouldFilter={false}>
                                <CommandInput
                                    placeholder="Search dentist..."
                                    className="h-9"
                                    value={search} onValueChange={setSearch}
                                />
                                <CommandList>
                                    <CommandEmpty>No dentist found.</CommandEmpty>
                                    <CommandGroup>
                                        {dentists.map((dentist) => (
                                            <CommandItem
                                                value={dentist?._id}
                                                key={dentist?._id}
                                                onSelect={() => {
                                                    setValue("dentistId", dentist?._id)
                                                    setIsOpen(false);
                                                }}
                                            >
                                                {dentist?.personalDetails?.prefix}. {dentist?.personalDetails?.Firstname} {dentist?.personalDetails?.lastName}
                                                <Check
                                                    className={cn(
                                                        "ml-auto",
                                                        dentist?._id === field.value
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

export default DentistComp