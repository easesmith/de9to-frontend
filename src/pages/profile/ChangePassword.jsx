import ProfileLayout from '@/component/Layout/ProfileLayout';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import usePatchApiReq from '@/hooks/usePatchApiReq';
import { ChangePasswordSchema } from '@/schema/formSchema';
import { readCookie } from '@/utils/readCookie';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaUnlockAlt } from 'react-icons/fa';

const ChangePassword = () => {
    const [isOldPasswordShow, setIsOldPassworShow] = useState(false);
    const [isNewPasswordShow, setIsNewPasswordShow] = useState(false);
    const [isConfirmNewPasswordShow, setIsConfirmNewPasswordShow] = useState(false);
    const userInfo = readCookie("userInfo");
    console.log("userInfo", userInfo);


    const form = useForm({
        resolver: zodResolver(ChangePasswordSchema),
        defaultValues: {
            oldPassword: "",
            newPassword: "",
            confirmNewPassword: "",
        },
    });

    const { reset, handleSubmit, getValues, watch } = form;
    const { res, fetchData, isLoading } = usePatchApiReq();

    const onSubmit = (data) => {
        console.log("Data:", data);
        fetchData(`/patient/update-patient-password`, { patientId: userInfo?.userId, newPassword: data.newPassword, oldPassword: data.oldPassword });
    };

    useEffect(() => {
        if (res?.status === 200 || res?.status === 201) {
            console.log("change password response", res);
            reset({
                confirmNewPassword: "",
                newPassword: "",
                oldPassword: "",
            })
        }
    }, [res])

    return (
        <ProfileLayout>
            <div className='w-full h-full flex justify-center items-center'>
                <div className="max-w-md rounded-lg w-full bg-white p-5">
                    <h1 className='text-2xl font-inter font-semibold text-[#1A1A1A] text-center'>Create Your New Password</h1>
                    <Form {...form}>
                        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-start gap-4 w-full mt-5'>
                            <div className="w-full flex flex-col gap-4 mt-4">
                                <FormField
                                    control={form.control}
                                    name="oldPassword"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="font-inter text-base text-[#1A1A1A] font-normal">Enter Old Password</FormLabel>
                                            <FormControl>
                                                <div className='relative'>
                                                    <FaUnlockAlt className='absolute left-3 top-1/2 -translate-y-1/2 text-[#717171]' />
                                                    <Input type={isOldPasswordShow ? "text" : "password"} placeholder="********" className="placeholder:text-[#717171] pl-10 pr-12 h-12 border-[#E4E6EE]" {...field} />
                                                    <button type='button' onClick={() => setIsOldPassworShow(!isOldPasswordShow)} className='absolute right-3 top-1/2 -translate-y-1/2 text-[#717171] text-xs'>{isOldPasswordShow ? "Hide" : "Show"}</button>
                                                </div>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="newPassword"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="font-inter text-base text-[#1A1A1A] font-normal">Enter New Password</FormLabel>
                                            <FormControl>
                                                <div className='relative'>
                                                    <FaUnlockAlt className='absolute left-3 top-1/2 -translate-y-1/2 text-[#717171]' />
                                                    <Input type={isNewPasswordShow ? "text" : "password"} placeholder="********" className="placeholder:text-[#717171] pl-10 pr-12 h-12 border-[#E4E6EE]" {...field} />
                                                    <button type='button' onClick={() => setIsNewPasswordShow(!isNewPasswordShow)} className='absolute right-3 top-1/2 -translate-y-1/2 text-[#717171] text-xs'>{isNewPasswordShow ? "Hide" : "Show"}</button>
                                                </div>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="confirmNewPassword"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="font-inter text-base text-[#1A1A1A] font-normal">Confirm New Password</FormLabel>
                                            <FormControl>
                                                <div className='relative'>
                                                    <FaUnlockAlt className='absolute left-3 top-1/2 -translate-y-1/2 text-[#717171]' />
                                                    <Input type={isConfirmNewPasswordShow ? "text" : "password"} placeholder="********" className="placeholder:text-[#717171] pl-10 pr-12 h-12 border-[#E4E6EE]" {...field} />
                                                    <button type='button' onClick={() => setIsConfirmNewPasswordShow(!isConfirmNewPasswordShow)} className='absolute right-3 top-1/2 -translate-y-1/2 text-[#717171] text-xs'>{isConfirmNewPasswordShow ? "Hide" : "Show"}</button>
                                                </div>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <Button type="submit" className="bg-[#95C22B] mt-4 text-base flex justify-center w-full h-12">
                                Update Now
                            </Button>
                        </form>
                    </Form>
                </div>
            </div>
        </ProfileLayout>
    )
}

export default ChangePassword