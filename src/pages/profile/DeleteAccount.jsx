import ProfileLayout from '@/component/Layout/ProfileLayout'
import DeleteAccountModal from '@/components/DeleteAccountModal';
import { Button } from '@/components/ui/button'
import usePostApiReq from '@/hooks/usePostApiReq';
import { useState } from 'react'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { AddFeedbackSchema, ConfirmBookingFormSchema, DeleteAccountSchema } from '@/schema/formSchema';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { MdCall } from 'react-icons/md';
import { Input } from '@/components/ui/input';
import { readCookie } from '@/utils/readCookie';
import { FaUnlockAlt } from 'react-icons/fa';


const DeleteAccount = () => {
    const [isDeleteAccountModalOpen, setIsDeleteAccountModalOpen] = useState(false);
    const [isPasswordShow, setIsPasswordShow] = useState(false);

    const form = useForm({
        resolver: zodResolver(DeleteAccountSchema),
        defaultValues: {
            password: "",
        },
    });

    const userInfo = readCookie("userInfo");
    const { res, fetchData, isLoading } = usePostApiReq();
    const { reset, handleSubmit, getValues, watch } = form;

    const onSubmit = (data) => {
        console.log("Data:", data);
        setIsDeleteAccountModalOpen(true);
    };
    console.log("userInfo:", userInfo);

    return (
        <ProfileLayout>
            <div>
                <div className='w-full h-full flex justify-center items-center'>
                    <div className="max-w-3xl rounded-lg w-full mt-24 bg-white p-5">
                        <h1 className='text-2xl font-inter font-semibold text-[#1A1A1A] text-center'>Delete Your Account</h1>
                        <p className='font-inter mt-1 text-[#1A1A1A]'>Once the deletion process begins, you won't be able to reactivate your account or retrieve any data or information.</p>
                        <Form {...form}>
                            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-start gap-4 mt-10 w-full'>
                                {/* Clinic Selection */}
                                <div className="w-full grid grid-cols-[70%_20%] gap-20">
                                    <FormField
                                        control={form.control}
                                        name="password"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="font-inter text-base text-[#1A1A1A] font-normal">Enter Password</FormLabel>
                                                <FormControl>
                                                    <div className='relative'>
                                                        <FaUnlockAlt className='absolute left-3 top-1/2 -translate-y-1/2 text-[#717171]' />
                                                        <Input type={isPasswordShow ? "text" : "password"} placeholder="********" className="placeholder:text-[#717171] pl-10 pr-12 h-12 border-[#E4E6EE]" {...field} />
                                                        <button type='button' onClick={() => setIsPasswordShow(!isPasswordShow)} className='absolute right-3 top-1/2 -translate-y-1/2 text-[#717171] text-xs'>{isPasswordShow ? "Hide" : "Show"}</button>
                                                    </div>
                                                </FormControl>
                                                {/* <FormDescription className="text-xs font-inter">Updates will be sent to the number you will provide</FormDescription> */}
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <div className='flex flex-col items-end'>
                                        <button className='text-sm font-inter'>Forgot Password?</button>
                                        <Button type="submit" className="bg-[#95C22B] mt-3 flex justify-center w-full h-12">
                                            Delete
                                        </Button>
                                    </div>
                                </div>

                            </form>
                        </Form>
                    </div>
                </div>
                {isDeleteAccountModalOpen &&
                    <DeleteAccountModal
                        isDeleteAccountModalOpen={isDeleteAccountModalOpen}
                        setIsDeleteAccountModalOpen={setIsDeleteAccountModalOpen}
                        password={getValues("password")}
                    />
                }
            </div>
        </ProfileLayout>
    )
}

export default DeleteAccount