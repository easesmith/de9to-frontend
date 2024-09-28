import React from 'react'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Checkbox } from '../ui/checkbox'

const NotificationSettingCheckbox = ({ control, name, title, desc }) => {
    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem>
                    <FormLabel className="font-inter text-base text-[#717171] font-normal"></FormLabel>
                    <FormControl>
                        <div className="flex items-start space-x-2">
                            <Checkbox
                                className="w-5 h-5"
                                onCheckedChange={field.onChange}
                                checked={field.value}
                                id={name}
                            />

                            <div className='flex flex-col gap-2'>
                                <label
                                    htmlFor={name}
                                    className="text-[#1A1A1A] font-medium leading-none peer-disabled:cursor-not-allowed text-base peer-disabled:opacity-70"
                                >
                                    {title}
                                </label>
                                <label
                                    htmlFor={name}
                                    className="text-[#717171] font-medium leading-none peer-disabled:cursor-not-allowed text-sm peer-disabled:opacity-70"
                                >
                                    {desc}
                                </label>
                            </div>
                        </div>
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    )
}

export default NotificationSettingCheckbox