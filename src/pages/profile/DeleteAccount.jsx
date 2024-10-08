import ProfileLayout from '@/component/Layout/ProfileLayout'
import DeleteAccountModal from '@/components/DeleteAccountModal';
import { Button } from '@/components/ui/button'
import usePostApiReq from '@/hooks/usePostApiReq';
import { useState } from 'react'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { ConfirmBookingFormSchema } from '@/schema/formSchema';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';


const DeleteAccount = () => {
    const [isDeleteAccountModalOpen, setIsDeleteAccountModalOpen] = useState(false);
   

    return (
        <ProfileLayout>
            <div>
                <Form {...form}>
                    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-start gap-4 w-full'>
                        {/* Clinic Selection */}
                        <div className="w-full">
                            <FormField
                                control={form.control}
                                name="for"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel></FormLabel>
                                        <FormControl>
                                            <FormField
                                                control={form.control}
                                                name="mobile"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel className="font-inter text-base text-[#717171] font-normal">Mobile<span className='text-red-500'>*</span></FormLabel>
                                                        <FormControl>
                                                            <div className='relative'>
                                                                <MdCall className='absolute left-3 top-1/2 -translate-y-1/2 text-[#717171]' />
                                                                <Input type="number" placeholder="Enter Your Mobile Number" className="placeholder:text-[#717171] pl-10 h-12 border-[#E4E6EE]" {...field} />
                                                            </div>
                                                        </FormControl>
                                                        <FormDescription className="text-xs font-inter">Updates will be sent to the number you will provide</FormDescription>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                <div className='w-full h-full flex justify-center items-center'>
                    <div className="max-w-md rounded-lg w-full mt-24 bg-white p-5">
                        <h1 className='text-2xl font-inter font-semibold text-[#1A1A1A] text-center'>Delete Your Account</h1>
                        <p className='font-inter text-lg text-[#1A1A1A] mt-5'>Are you sure? This will permanently delete your <span className='font-semibold'>De9to</span> account.</p>
                        <p className='font-inter mt-1 text-[#1A1A1A]'>Once the deletion process begins, you won't be able to reactivate your account or retrieve any data or information.</p>
                        <div className='grid grid-cols-[60%_40%] gap-3 mt-5'>
                            <Button>No, Cancel</Button>
                            <Button type="submit" variant="outline" className="text-[#FF0000] border-[#FF0000] hover:text-[#FF0000]">Delete My Account</Button>
                        </div>
                    </div>
                </div>
                    </form>
                </Form>
                {isDeleteAccountModalOpen &&
                    <DeleteAccountModal
                        isDeleteAccountModalOpen={isDeleteAccountModalOpen}
                        setIsDeleteAccountModalOpen={setIsDeleteAccountModalOpen}
                    />
                }
            </div>
        </ProfileLayout>
    )
}

export default DeleteAccount