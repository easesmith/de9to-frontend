import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import React from 'react'

const FormCompo = ({control, fullName, fieldName}) => {
    return (
        <FormField
            control={control}
            name={fullName}
            render={({ field }) => (
                <FormItem>
                    <FormLabel className="text-[] text-xl font-medium font-inter">{fieldName} <span className='text-[red]'>*</span></FormLabel>
                    <FormControl>
                        <Input placeholder={`Enter ${fieldName}`} {...field}
                            className="h-[60px] text-[#838383] text-sm font-normal font-inter border-[1px] border-[#808080] rounded-[10px] px-5 py-[10px]"
                        />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    )
}

export default FormCompo
