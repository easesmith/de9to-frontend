import React, { useEffect } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog"
import ReactStars from 'react-stars'
import { Textarea } from "@/components/ui/textarea"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form'
import { Button } from './ui/button'
import usePostApiReq from '@/hooks/usePostApiReq'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { AddFeedbackSchema } from '@/schema/formSchema'
import { readCookie } from '@/utils/readCookie'

const AddFeedbackModal = ({ isAddFeedbackModalOpen, setIsAddFeedbackModalOpen, dentistId,clinicId, reviewType ,getData}) => {
    const form = useForm({
        resolver: zodResolver(AddFeedbackSchema),
        defaultValues: {
            rating: 0,
            desc: "",
        },
    });

    const { res, fetchData, isLoading } = usePostApiReq();
    const { reset, handleSubmit, getValues, watch } = form;
    const userInfo = readCookie("userInfo");

    const onSubmit = (data) => {
        console.log("Data:", data);
        if (reviewType  === "dentist") {
            fetchData(`/patient/add-dentist-rating`, {
                patientRemarks: data.desc,
                patientRating: data.rating,
                patientId: userInfo?.userId,
                dentistId: dentistId,
                reviewType: reviewType
            });
        }
        else{
            fetchData(`/patient/post-review`, {
                patientRemarks: data.desc,
                patientRating: data.rating,
                patientId: userInfo?.userId,
                clinicId: clinicId,
                reviewType: reviewType
            });
        }
    };

    useEffect(() => {
        if (res?.status === 200 || res?.status === 201) {
            console.log("add feedback res", res);
            getData();
            setIsAddFeedbackModalOpen(false);
        }
    }, [res])

    return (
        <Dialog open={isAddFeedbackModalOpen} onOpenChange={setIsAddFeedbackModalOpen}>
            <DialogContent className="max-w-[450px] w-full">
                <div className='max-h-[75vh] overflow-y-auto scrollBar'>
                    <DialogHeader className="space-y-0">
                        <DialogTitle className="font-inter font-bold text-[#0D0E0E] text-2xl pt-1 text-center">Write Your feedback!</DialogTitle>
                        <DialogDescription className="text-sm text-[#717171] font-inter text-center">Please rate your experience below</DialogDescription>
                    </DialogHeader>
                    <Form {...form}>
                        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-start gap-4 w-full'>
                            <div className="w-full flex flex-col gap-4 mt-4">
                                <FormField
                                    control={form.control}
                                    name="rating"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="font-inter text-sm text-[#1A1A1A] font-normal"></FormLabel>
                                            <FormControl>
                                                <div className="flex w-[80%] mx-auto justify-between items-center gap-3">
                                                    <ReactStars onChange={field.onChange} size={35} count={5} value={field.value} color2={'#FF8A00'} />
                                                    <p className='text-[#717171] font-inter font-normal'>{field.value}/5 stars</p>
                                                </div>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="desc"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="font-inter text-sm text-[#1A1A1A] font-normal">Write something</FormLabel>
                                            <FormControl>
                                                <Textarea placeholder="Write here..." className="placeholder:text-[#717171] min-h-[100px] resize-none" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <Button type="submit" className="bg-[#95C22B] mt-4 flex justify-center w-full h-12">
                                Submit feedback
                            </Button>

                        </form>
                    </Form>

                    {/* <Button className="w-full mt-5" onClick={() => setIsAppointmentModalOpen(false)}>Reschedule</Button> */}
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default AddFeedbackModal