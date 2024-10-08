import {
    AlertDialog,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogHeader,
    AlertDialogTitle
} from "@/components/ui/alert-dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { DeleteAccountSchema } from '@/schema/formSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useState } from "react";
import { useForm } from 'react-hook-form';
import { FaUnlockAlt } from "react-icons/fa";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import useDeleteApiReq from "@/hooks/useDeleteApiReq";
import { readCookie } from "@/utils/readCookie";
import { useNavigate } from "react-router-dom";

const DeleteAccountModal = ({ isDeleteAccountModalOpen, setIsDeleteAccountModalOpen }) => {
    const form = useForm({
        resolver: zodResolver(DeleteAccountSchema),
        defaultValues: {
            password: "",
        },
    });

    const [isPasswordShow, setIsPasswordShow] = useState(false);
    const userInfo = readCookie("userInfo");
    console.log("userInfo",userInfo);
    
    const navigate = useNavigate();
    const { reset, handleSubmit, getValues } = form;
    const { res, fetchData, isLoading } = useDeleteApiReq();

    const onSubmit = (data) => {
        console.log("Data:", data);
        fetchData(`/patient/delete-patient-account?password=${data.password}&patientId=${userInfo?.userId}`,);
    };

    useEffect(() => {
        if (res?.status === 200 || res?.status === 201) {
            console.log("delete account response", res);
            navigate("/")
            reset({
                password: "",
            })
        }
    }, [res])

    const handleCancel = () => {
        setIsDeleteAccountModalOpen(false);
        navigate("/");
    }

    return (
        <AlertDialog open={isDeleteAccountModalOpen} onOpenChange={setIsDeleteAccountModalOpen}>
            <AlertDialogContent className="max-w-md w-full">
                <Form {...form}>
                    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-start gap-4 w-full'>
                        {/* Clinic Selection */}

                        <AlertDialogHeader>
                            <AlertDialogTitle className="font-inter font-semibold text-[#1A1A1A] text-center text-2xl">Delete Your Account</AlertDialogTitle>
                            <AlertDialogDescription></AlertDialogDescription>
                            <p className='font-inter text-lg text-[#1A1A1A] mt-5'>Are you sure? This will permanently delete your <span className='font-semibold'>De9to</span> account.</p>
                            <p className='font-inter mt-1 text-[#1A1A1A]'>Once the deletion process begins, you won't be able to reactivate your account or retrieve any data or information.</p>
                        </AlertDialogHeader>
                        <div className="w-full">
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="font-inter text-base text-[#1A1A1A] font-normal">Enter Your Password</FormLabel>
                                        <FormControl>
                                            <div className='relative'>
                                                <FaUnlockAlt className='absolute left-3 top-1/2 -translate-y-1/2 text-[#717171]' />
                                                <Input type={isPasswordShow ? "text" : "password"} placeholder="********" className="placeholder:text-[#717171] pl-10 pr-12 h-12 border-[#E4E6EE]" {...field} />
                                                <button type='button' onClick={() => setIsPasswordShow(!isPasswordShow)} className='absolute right-3 top-1/2 -translate-y-1/2 text-[#717171] text-xs'>{isPasswordShow ? "Hide" : "Show"}</button>
                                            </div>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className='grid grid-cols-[60%_40%] w-full gap-3 mt-5'>
                            <Button onClick={handleCancel}>No, Cancel</Button>
                            <Button type="submit" variant="outline" className="text-[#FF0000] border-[#FF0000] hover:text-[#FF0000]">Delete My Account</Button>
                        </div>
                    </form>
                </Form>
                {/* <AlertDialogFooter className="mt-5 w-full">
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction>Back to Homepage</AlertDialogAction>
                </AlertDialogFooter> */}
            </AlertDialogContent>
        </AlertDialog>
    )
}

export default DeleteAccountModal