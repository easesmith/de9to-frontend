import React, { useState } from 'react'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { generateTimeOptions } from '@/utils/generateTimeOptions'
import { useFieldArray } from 'react-hook-form'

const Clinic2 = ({ form }) => {

  const { register, control, watch, setValue, getValues } = form

  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const [testArray, setTestArray] = useState([days])
  const timeOptions = generateTimeOptions();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "selectedDays",
  });

  const {
    fields: selectedDaysWithTimingFields,
    append: appendSelectedDayWithTiming,
    remove: removeSelectedDayWithTiming,
  } = useFieldArray({
    control,
    name: "selectedDaysWithTiming",
  });

  const toggleDay = (day, index) => {
    const isSelected = fields.some(field => field.day === day);

    if (isSelected) {
      const index = fields.findIndex(field => field.day === day);

      remove(index);
    } else {
      append({ day, index });
    }
  };

  const handleOnChange = (index) => {
    fields.map((element) => {
      if (index === element.index) {
        const existingIndex = selectedDaysWithTimingFields.findIndex(item => item.day === element.day);

        console.log("existingIndex", existingIndex);
        const newTiming = {
          day: element.day,
          session1ClinicOpeningTime: getValues(`session1ClinicOpeningTime${index}`),
          session1ClinicClosingTime: getValues(`session1ClinicClosingTime${index}`),
          session2ClinicOpeningTime: getValues(`session2ClinicOpeningTime${index}`),
          session2ClinicClosingTime: getValues(`session2ClinicClosingTime${index}`),
        };

        if (existingIndex !== -1) {
          setValue(`selectedDaysWithTiming.${existingIndex}`, newTiming);
        } else {
          appendSelectedDayWithTiming(newTiming);
        }
      }
    });
  };


  return (
    <>
      <h3 className='text-[#95C22B] text-2xl font-semibold font-Barlow'>Working Time</h3>
      <div className='flex flex-col items-start w-[90%] gap-3'>

        {testArray.map((item, i) => (
          <div key={i}>
            <div className="grid grid-cols-1 w-full gap-4 mt-4">
              <div className='flex gap-2'>
                {item.map((day) => (
                  <FormField
                    key={day}
                    control={control}
                    name={day}
                    render={() => (
                      <FormItem className="flex flex-row items-start">
                        <FormLabel
                          className={`w-12 h-12 cursor-pointer rounded-full flex justify-center items-center ${fields.find(field => (field.day === day && field.index === i)) ? 'bg-[#95C22B] text-white' : 'bg-[#D9D9D9] text-black'}`}
                        >
                          {day}
                        </FormLabel>
                        <FormControl>
                          <Checkbox
                            className="hidden"
                            checked={fields.find(field => (field.day === day && field.index === i))}
                            onCheckedChange={() => toggleDay(day, i)}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                ))}
              </div>
            </div>

            <h2 className=" text-[#1F2A37] mt-5 text-xl font-semibold font-barlow">Slot 1</h2>

            <div className="grid grid-cols-3 w-full gap-8">
              <FormField
                control={control}
                name={`session1ClinicOpeningTime${i}`}
                // name={`selectedDaysWithTiming[${i}].session1ClinicOpeningTime`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base text-[#5D5D5D]">Clinic Opening Time</FormLabel>
                    <FormControl>
                      <Select
                        {...field}
                        onValueChange={(e) => {
                          field.onChange(e);
                          handleOnChange(i);
                        }}
                        disabled={fields.find((item) => item.index === i) ? false : true}
                      >
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="From" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            {timeOptions.map((time, index) => (
                              <SelectItem key={index} value={time}>
                                {time}
                              </SelectItem>
                            ))}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name={`session1ClinicClosingTime${i}`}
                // name={`selectedDaysWithTiming[${i}].session1ClinicClosingTime`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base text-[#5D5D5D]">Clinic Closing Time</FormLabel>
                    <FormControl>
                      <Select
                        {...field}
                        onValueChange={(e) => {
                          field.onChange(e);
                          handleOnChange(i);
                        }}
                        disabled={fields.find((item) => item.index === i) ? false : true}
                      >
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="To" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            {timeOptions.map((time, index) => (
                              <SelectItem key={index} value={time}>
                                {time}
                              </SelectItem>
                            ))}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <h2 className=" text-[#1F2A37] mt-5 text-xl font-semibold font-barlow">Slot 2</h2>

            <div className="grid grid-cols-3 w-full gap-8">
              <FormField
                control={control}
                name={`session2ClinicOpeningTime${i}`}
                // name={`selectedDaysWithTiming[${i}].session2ClinicOpeningTime`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base text-[#5D5D5D]">Clinic Opening Time</FormLabel>
                    <FormControl>
                      <Select
                        {...field}
                        onValueChange={(e) => {
                          field.onChange(e);
                          handleOnChange(i);
                        }}
                        disabled={fields.find((item) => item.index === i) ? false : true}
                      >
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="From" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            {timeOptions.map((time, index) => (
                              <SelectItem key={index} value={time}>
                                {time}
                              </SelectItem>
                            ))}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name={`session2ClinicClosingTime${i}`}
                // name={`selectedDaysWithTiming[${i}].session2ClinicClosingTime`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base text-[#5D5D5D]">Clinic Closing Time</FormLabel>
                    <FormControl>
                      <Select
                        {...field}
                        onValueChange={(e) => {
                          field.onChange(e);
                          handleOnChange(i);
                        }}
                        disabled={fields.find((item) => item.index === i) ? false : true}
                      >
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="To" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            {timeOptions.map((time, index) => (
                              <SelectItem key={index} value={time}>
                                {time}
                              </SelectItem>
                            ))}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
        ))}

      </div>
    </>
  )
}

export default Clinic2