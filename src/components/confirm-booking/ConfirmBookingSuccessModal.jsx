import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { useNavigate } from "react-router-dom"


const ConfirmBookingSuccessModal = ({ isConfirmBookingSuccessModalOpen, setIsConfirmBookingSuccessModalOpen }) => {
    const navigate = useNavigate();

    const navigateToHome = () => {
        navigate("/")
    }

    return (
        <AlertDialog open={isConfirmBookingSuccessModalOpen} onOpenChange={setIsConfirmBookingSuccessModalOpen}>
            <AlertDialogContent className="max-w-[400px] max-h-[90vh] overflow-y-auto w-full">
                <AlertDialogHeader>
                    <AlertDialogTitle className="font-inter font-bold text-[#009245] text-2xl max-[500px]:text-xl">Congratulations!!</AlertDialogTitle>
                    <AlertDialogDescription className="text-base max-[500px]:text-sm text-[#333333]"><b>DentMarc Dental Clinic</b> has received your booking. Sit back & relax, we will update you soon on your  contact info</AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter className="mt-5">
                    {/* <AlertDialogCancel>Cancel</AlertDialogCancel> */}
                    <AlertDialogAction onClick={navigateToHome}>Back to Homepage</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}

export default ConfirmBookingSuccessModal