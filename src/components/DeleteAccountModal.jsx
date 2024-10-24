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

const DeleteAccountModal = ({ isDeleteAccountModalOpen, setIsDeleteAccountModalOpen, password }) => {
    const userInfo = readCookie("userInfo");
    console.log("userInfo", userInfo);

    const navigate = useNavigate();
    const { res, fetchData, isLoading } = useDeleteApiReq();

    const onSubmit = (data) => {
        console.log("Data:", data);
        fetchData(`/patient/delete-patient-account?password=${password}&patientId=${userInfo?.userId}`,);
    };

    useEffect(() => {
        if (res?.status === 200 || res?.status === 201) {
            console.log("delete account response", res);
            navigate("/")
        }
    }, [res])

    const handleCancel = () => {
        setIsDeleteAccountModalOpen(false);
        // navigate("/");
    }

    return (
        <AlertDialog open={isDeleteAccountModalOpen} onOpenChange={setIsDeleteAccountModalOpen}>
            <AlertDialogContent className="max-w-md w-full rounded-lg">
                <div className='flex flex-col items-start gap-4 w-full'>
                    {/* Clinic Selection */}

                    <AlertDialogHeader>
                        <AlertDialogTitle className="font-inter font-semibold text-[#1A1A1A] text-center text-2xl max-sm:text-xl">Delete Your Account</AlertDialogTitle>
                        <AlertDialogDescription></AlertDialogDescription>
                        <p className='font-inter text-lg max-sm:text-base text-[#1A1A1A] mt-5'>Are you sure? This will permanently delete your <span className='font-semibold'>De9to</span> account.</p>
                        <p className='font-inter text-lg max-sm:text-base mt-1 text-[#1A1A1A]'>Once the deletion process begins, you won't be able to reactivate your account or retrieve any data or information.</p>
                    </AlertDialogHeader>

                    <div className='grid grid-cols-[60%_40%] w-full gap-3 mt-5 max-sm:grid-cols-[100%]'>
                        <Button className='max-sm:text-base' onClick={handleCancel}>No, Cancel</Button>
                        <Button onClick={onSubmit} type="submit" variant="outline" className="text-[#FF0000] border-[#FF0000] hover:text-[#FF0000] max-sm:text-base">Delete My Account</Button>
                    </div>
                </div>
            </AlertDialogContent>
        </AlertDialog>
    )
}

export default DeleteAccountModal