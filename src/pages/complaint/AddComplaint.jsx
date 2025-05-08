import ProfileLayout from '@/component/Layout/ProfileLayout';
import AppointmentComp from '@/components/complaints/AppointmentComp';
import DentistAppointmentComp from '@/components/complaints/DentistAppointmentComp';
import DentistComp from '@/components/complaints/DentistComp';
import PatientComp from '@/components/complaints/PatientComp';
import Spinner from '@/components/Spinner';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import usePostApiReq from '@/hooks/usePostApiReq';
import { addComplaintSchema } from '@/schema/complaintSchema';
import { readCookie } from '@/utils/readCookie';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const AddComplaint = () => {

  const { res, fetchData, isLoading } = usePostApiReq()
  const [complaintType, setComplaintType] = useState("")
  const navigate = useNavigate();

  const form = useForm({
    resolver: zodResolver(addComplaintSchema),
    defaultValues: {
      date: new Date(),
      complaintType: "general",
      raisedBy: "patient",
      raisedFor: "admin",
      remark: "",
      issue: "",
      patientId: "",
      appointmentId: "",
      dentistId: "",
      dentistName: "",
      clinicId: "",
      clinicName: "",
    }
  })

  const { control, handleSubmit, watch, setValue, getValues } = form;
  const userInfo = readCookie("userInfo");

  // useEffect(() => {
  //   if (watch("raisedFor") === "dentist") {
  //     setValue("patientId", "")
  //   }
  //   else {
  //     setValue("dentistId", "")
  //   }
  // }, [watch("raisedFor")])

  useEffect(() => {
    setValue("patientId", userInfo.userId)
    setValue("appointmentId", "")
    setValue("clinicId", "")
    setValue("dentistId", "")
  }, [watch("complaintType"), watch("raisedFor")])


  const onSubmit = (data) => {
    console.log("data", data)

    const apiData = {
      complaintType: data.complaintType,
      date: data.date,
      appointmentId: data.appointmentId,
      dentistId: data.dentistId,
      patientId: data.patientId,
      clinicId: data.clinicId,
      raisedBy: data.raisedBy,
      raisedFor: data.raisedFor,
      remark: data.remark,
      issue: data.issue,
    }
    console.log(apiData)

    fetchData("/patient/new-complaint", apiData)
  }

  useEffect(() => {
    if (res?.status === 200 || res?.status === 201) {
      console.log("api res", res?.data);
      navigate("/profile/complaints")
      // setIsAddCamplaintModelOpen(false);
    }
  }, [res])

  return (
    <ProfileLayout>
      <div className='bg-white px-5 py-8 rounded-lg'>
        <h1 className='text-[#000000] text-xl font-semibold font-inter mb-5'>Add Complaint</h1>
        <Form {...form}>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className='flex gap-10'>
              <div className='flex items-center gap-1'>
                <Label className="text-base font-semibold font-inter">Complaint Type: </Label>
                General
              </div>
              <div className='flex items-center gap-1'>
                <Label className="text-base font-semibold font-inter">Raised For: </Label>
                Admin
              </div>
            </div>
            <div className='grid grid-cols-3 gap-6 w-full max-large:grid-cols-1 max-med:grid-cols-2 max-small:grid-cols-1 max-[950px]:gap-3'>

              {watch("raisedFor") === "dentist" &&
                <DentistComp
                  control={control}
                  setValue={setValue}
                />
              }
              {watch("raisedFor") === "patient" &&
                <PatientComp
                  control={control}
                  setValue={setValue}
                />
              }

              {/* {watch("raisedFor") === "patient" && <FormField
                control={control}
                name="patientId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base font-medium font-inter mb-4 max-[950px]:px-3 max-[950px]:text-sm max-[950px]:h-[46px] max-[950px]:rounded-lg">Select Patient</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger className='h-12 text-[#838383] text-base font-normal font-inter border-[1px] border-[#808080] rounded-[10px] px-5 py-[10px] placeholder:text-[#838383] max-[950px]:px-3 max-[950px]:text-sm max-[950px]:h-[46px] max-[950px]:rounded-lg'>
                          <SelectValue placeholder="Select Patient" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="patient1">Patient 1</SelectItem>
                        <SelectItem value="patient2">Patient 2</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />} */}

              {watch("complaintType") === "appointment-related" &&
                <>
                  {(watch("patientId") || watch("dentistId")) && watch("raisedFor") === "patient" &&
                    <AppointmentComp
                      control={control}
                      setValue={setValue}
                      getValues={getValues}
                    />
                  }

                  {(watch("patientId") || watch("dentistId")) && watch("raisedFor") === "dentist" &&
                    <DentistAppointmentComp
                      control={control}
                      setValue={setValue}
                      getValues={getValues}
                    />
                  }

                  {watch("appointmentId") && <div className='grid grid-cols-2'>
                    {watch("raisedFor") === "patient" &&
                      <FormField
                        control={control}
                        name="dentistId"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-base font-medium font-inter mb-4 max-[950px]:px-3 max-[950px]:text-sm max-[950px]:h-[46px] max-[950px]:rounded-lg">Selected Dentist</FormLabel>
                            <Select onValueChange={field.onChange} value={field.value}>
                              <FormControl>
                                <p>{getValues("dentistName")}</p>
                              </FormControl>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />}

                    <FormField
                      control={control}
                      name="clinicId"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-base font-medium font-inter mb-4 max-[950px]:px-3 max-[950px]:text-sm max-[950px]:h-[46px] max-[950px]:rounded-lg">Select Clinic</FormLabel>
                          <Select onValueChange={field.onChange} value={field.value}>
                            <FormControl>
                              <p>{getValues("clinicName")}</p>
                            </FormControl>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>}
                </>}
            </div>

            {complaintType === "payment-related" &&
              <>
                <div className='grid grid-cols-2 gap-[23px] w-full max-large:grid-cols-1 max-med:grid-cols-2 max-small:grid-cols-1 max-[950px]:gap-3'>
                  <FormField
                    control={control}
                    name="selectClinic"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base font-medium font-inter mb-4 max-[950px]:px-3 max-[950px]:text-sm max-[950px]:h-[46px] max-[950px]:rounded-lg">Select Clinic</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger className='h-12 text-[#838383] text-base font-normal font-inter border-[1px] border-[#808080] rounded-[10px] px-5 py-[10px] placeholder:text-[#838383] max-[950px]:px-3 max-[950px]:text-sm max-[950px]:h-[46px] max-[950px]:rounded-lg'>
                              <SelectValue placeholder="Select complaint type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="dentist">Dentist</SelectItem>
                            <SelectItem value="patient">Patient</SelectItem>
                            <SelectItem value="admin">Admin</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={control}
                    name="selectDentist"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base font-medium font-inter mb-4 max-[950px]:px-3 max-[950px]:text-sm max-[950px]:h-[46px] max-[950px]:rounded-lg">Select Dentist</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger className='h-12 text-[#838383] text-base font-normal font-inter border-[1px] border-[#808080] rounded-[10px] px-5 py-[10px] placeholder:text-[#838383] max-[950px]:px-3 max-[950px]:text-sm max-[950px]:h-[46px] max-[950px]:rounded-lg'>
                              <SelectValue placeholder="Select complaint type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="dentist">Dentist</SelectItem>
                            <SelectItem value="patient">Patient</SelectItem>
                            <SelectItem value="admin">Admin</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={control}
                  name="selectPatient"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base font-medium font-inter mb-4 max-[950px]:px-3 max-[950px]:text-sm max-[950px]:h-[46px] max-[950px]:rounded-lg">Select Patient</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger className='h-12 text-[#838383] text-base font-normal font-inter border-[1px] border-[#808080] rounded-[10px] px-5 py-[10px] placeholder:text-[#838383] max-[950px]:px-3 max-[950px]:text-sm max-[950px]:h-[46px] max-[950px]:rounded-lg'>
                            <SelectValue placeholder="Select complaint type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="dentist">Dentist</SelectItem>
                          <SelectItem value="patient">Patient</SelectItem>
                          <SelectItem value="admin">Admin</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </>}
            <FormField
              control={control}
              name="issue"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base font-semibold font-inter mb-4 max-[950px]:px-3 max-[950px]:text-sm max-[950px]:h-[46px] max-[950px]:rounded-lg">Issue</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger className='h-12 text-[#838383] text-base font-normal font-inter border-[1px] border-[#808080] rounded-[10px] px-5 py-[10px] placeholder:text-[#838383] max-[950px]:px-3 max-[950px]:text-sm max-[950px]:h-[46px] max-[950px]:rounded-lg'>
                        <SelectValue placeholder="Select issue" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="issue1">Issue 1</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="remark"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base font-semibold font-inter mb-4 max-[950px]:px-3 max-[950px]:text-sm max-[950px]:h-[46px] max-[950px]:rounded-lg">Description</FormLabel>
                  <FormControl>
                    <Textarea
                      className="resize-none h-40 text-[#838383] text-base font-normal font-inter border-[1px] border-[#808080] px-5 py-[10px] placeholder:text-[#838383] max-[950px]:px-3 max-[950px]:text-sm max-[950px]:h-[46px] max-[950px]:rounded-lg"
                      placeholder="Enter description..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className='w-full flex justify-end'>
              <Button type="submit" className="w-28 h-10 text-base">
                {isLoading ? <Spinner size={30} /> : "Submit"}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </ProfileLayout>
  )
}

export default AddComplaint