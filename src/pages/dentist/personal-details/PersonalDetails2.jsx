import React, { useEffect } from 'react'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { updatePreview } from '@/utils/updatePreview'
import { useFieldArray } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { ImageCompo, ShowImageCompo } from '@/component/dentist-signup/ImageCompo'

const PersonalDetails2 = ({ form }) => {

  const { register, control, watch, setValue, getValues, formState: { errors }, setError, clearErrors } = form
  const { fields, append, remove } = useFieldArray({
    control,
    name: "experiences",
  });


  const dentistRegistranstionCertificateImg = register("dentistRegistranstionCertificate")
  const degreeByStateCouncilImg = register("degreeByStateCouncil")

  const dentistRegistranstionCertificateImgWatch = watch("dentistRegistranstionCertificate")
  const degreeByStateCouncilImgWatch = watch("degreeByStateCouncil")

  useEffect(() => {
    updatePreview(dentistRegistranstionCertificateImgWatch, "dentistRegistranstionCertificateImgWatchPreview", setValue)
    updatePreview(degreeByStateCouncilImgWatch, "degreeByStateCouncilImgWatchPreview", setValue)
  }, [form, dentistRegistranstionCertificateImgWatch, degreeByStateCouncilImgWatch, setValue])

  const handleOnClickAdd = () => {
    const organizationName = getValues("organizationName");
    const from = getValues("from");
    const to = getValues("to");

    clearErrors()

    if (!organizationName) {
      setError('organizationName', {
        type: 'manual',
        message: 'Organization Name is required',
      });
    }

    if (!from) {
      setError('from', {
        type: 'manual',
        message: 'From is required',
      });
    }

    if (!to) {
      setError('to', {
        type: 'manual',
        message: 'To is required',
      });
    }

    if (!organizationName || !from || !to) {
      return
    }

    append({ organizationName, from, to });

    setValue("organizationName", "");
    setValue("from", "");
    setValue("to", "");

  }

  return (
    <>
      <h3 className='text-[#95C22B] text-2xl font-semibold font-Barlow'>Educational Details</h3>
      <div className='flex flex-col gap-5 w-[700px]'>
        <FormField
          control={control}
          name="dentistRegistranstionCertificate"
          render={({ field }) => (
            <FormItem className="z-20">
              {watch("dentistRegistranstionCertificateImgWatchPreview") && <ShowImageCompo field={"dentistRegistranstionCertificateImgWatchPreview"} setValue={setValue} watch={watch} title={"Dentist Registranstion Certificate"} />}
              <FormLabel className={`w-[250px]`}>
                {!watch("dentistRegistranstionCertificateImgWatchPreview") && <ImageCompo title={"Dentist Registranstion Certificate"} />}
              </FormLabel>
              <FormControl className="hidden">
                <Input type="file" accept='.png,.jpeg,.jpg' {...dentistRegistranstionCertificateImg} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="degreeByStateCouncil"
          render={({ field }) => (
            <FormItem className="z-20">
              {watch("degreeByStateCouncilImgWatchPreview") && <ShowImageCompo field={"degreeByStateCouncilImgWatchPreview"} setValue={setValue} watch={watch} title={"Degree By State Council"} />}
              <FormLabel className={`w-[250px]`}>
                {!watch("degreeByStateCouncilImgWatchPreview") && <ImageCompo title={"Degree By State Council"} />}
              </FormLabel>
              <FormControl className="hidden">
                <Input type="file" accept='.png,.jpeg,.jpg' {...degreeByStateCouncilImg} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="dentistRegistranstionNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel className={`text-[#111928] text-sm font-medium font-barlow`}>Dentist registration number</FormLabel>
              <div className="relative mt-1">
                <FormControl>
                  <Input type="text" placeholder="Enter Dentist Registration Number" className={`bg-[#F9FAFB] border-[1px] border-[#D1D5DB] rounded-lg text-[#6B7280] text-sm font-normal font-barlow`} {...field} />
                </FormControl>
                <button
                  type="button"
                  className="absolute top-1 right-0 flex items-center pr-3 text-[#6B7280] hover:text-gray-600"
                  onClick={() => setValue("dentistRegistranstionNumber", "")}
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
          name="collegePassoutYear"
          render={({ field }) => (
            <FormItem>
              <FormLabel className={`text-[#111928] text-sm font-medium font-barlow`}>College passing out year</FormLabel>
              <FormControl>
                <Input type="number" placeholder="Enter Passout Year" className={`bg-[#F9FAFB] border-[1px] border-[#D1D5DB] rounded-lg text-[#6B7280] text-sm font-normal font-barlow`} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <h3 className='text-[#95C22B] text-2xl font-semibold font-Barlow'>Experience Details</h3>
      <div className={`flex flex-col items-start gap-5 w-[700px]`}>
        <div className="w-full">
          <FormField
            control={control}
            name="organizationName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className={`text-[#111928] text-sm font-medium font-barlow`}>Hospital Name</FormLabel>
                <div className="relative mt-1">
                  <FormControl>
                    <Input type="text" placeholder="Enter Hospital Name" className={`bg-[#F9FAFB] border-[1px] border-[#D1D5DB] rounded-lg text-[#6B7280] text-sm font-normal font-barlow`} {...field} />
                  </FormControl>
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 flex items-center pr-3 text-[#6B7280] hover:text-gray-600"
                    onClick={() => setValue("organizationName", "")}
                  >
                    &times;
                  </button>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid grid-cols-2 w-full gap-4">
          <FormField
            control={control}
            name="from"
            render={({ field }) => (
              <FormItem>
                <FormLabel className={`text-[#111928] text-sm font-medium font-barlow`}>Start Date</FormLabel>
                <div className="relative mt-1">
                  <FormControl>
                    <Input type="date" placeholder="Enter Start Date" className={`bg-[#F9FAFB] border-[1px] border-[#D1D5DB] rounded-lg text-[#6B7280] text-sm font-normal font-barlow`} {...field} />
                  </FormControl>
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 flex items-center pr-3 text-[#6B7280] hover:text-gray-600"
                    onClick={() => setValue("from", "")}
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
            name="to"
            render={({ field }) => (
              <FormItem>
                <FormLabel className={`text-[#111928] text-sm font-medium font-barlow`}>End Date</FormLabel>
                <div className="relative mt-1">
                  <FormControl>
                    <Input type="date" placeholder="Enter End Date" className={`bg-[#F9FAFB] border-[1px] border-[#D1D5DB] rounded-lg text-[#6B7280] text-sm font-normal font-barlow`} {...field} />
                  </FormControl>
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 flex items-center pr-3 text-[#6B7280] hover:text-gray-600"
                    onClick={() => setValue("to", "")}
                  >
                    &times;
                  </button>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button onClick={handleOnClickAdd} type="button" variant="ghost" className="text-[#138123] text-lg">+ Add Experience</Button>
        {fields.length > 0 && <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Organization Name</TableHead>
              <TableHead>From</TableHead>
              <TableHead>To</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {fields.length > 0 ? (
              fields.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>{item.organizationName}</TableCell>
                  <TableCell>{item.from}</TableCell>
                  <TableCell>{item.to}</TableCell>
                </TableRow>
              ))
            ) : (
              <p className='text-sm'>No certificates added yet.</p>
            )}

          </TableBody>
        </Table>}
      </div>
    </>
  )
}

export default PersonalDetails2