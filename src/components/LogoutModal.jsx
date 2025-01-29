import {
    AlertDialog,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogHeader,
    AlertDialogTitle
} from "@/components/ui/alert-dialog";
import { Form } from '@/components/ui/form';
import useDeleteApiReq from "@/hooks/useDeleteApiReq";
import { readCookie } from "@/utils/readCookie";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import usePostApiReq from "@/hooks/usePostApiReq";
import Cookies from "js-cookie";

const LogoutModal = ({ isLogOutModalOpen, setIsLogOutModalOpen }) => {
    const userInfo = readCookie("userInfo");
    console.log("userInfo", userInfo);

    const navigate = useNavigate();
    const { res, fetchData, isLoading } = usePostApiReq();

    const handleLogout = () => {
        fetchData(`/patient/logout-patient`,);
    };

    useEffect(() => {
        if (res?.status === 200 || res?.status === 201) {
            console.log("logout account response", res);
            Cookies.remove("token")
            Cookies.remove("userInfo")
            navigate("/")
        }
    }, [res])

    const handleCancel = () => {
        setIsLogOutModalOpen(false);
        // navigate("/");
    }

    return (
        <AlertDialog open={isLogOutModalOpen} onOpenChange={setIsLogOutModalOpen}>
            <AlertDialogContent className="max-w-md w-full">
                <div className='flex flex-col items-start gap-4 w-full'>
                    {/* Clinic Selection */}

                    <AlertDialogHeader>
                        <AlertDialogTitle className="font-inter font-semibold text-[#1A1A1A] text-center text-2xl">Logout Account</AlertDialogTitle>
                        <AlertDialogDescription></AlertDialogDescription>
                        <p className='font-inter text-lg text-[#1A1A1A] mt-5'>Are you sure? This will logout your <span className='font-semibold'>De9to</span> account.</p>
                    </AlertDialogHeader>

                    <div className='grid grid-cols-[60%_40%] w-full gap-3 mt-5'>
                        <Button onClick={handleCancel}>No, Cancel</Button>
                        <Button onClick={handleLogout} variant="outline" className="text-[#FF0000] border-[#FF0000] hover:text-[#FF0000]">Logout</Button>
                    </div>
                </div>
                {/* <AlertDialogFooter className="mt-5 w-full">
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction>Back to Homepage</AlertDialogAction>
                </AlertDialogFooter> */}
            </AlertDialogContent>
        </AlertDialog>
    )
}

export default LogoutModal