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
import { Button } from "@/components/ui/button"
import { handleUnautorizedModalOpen } from "@/store/slices/errorSlice";
import { BiSolidError } from "react-icons/bi"
import { useDispatch } from "react-redux";


const UnAuthorizationAlert = ({ setAuthorizationAlertModalOpen, authorizationAlertModalOpen }) => {
    const dispatch = useDispatch();

    return (
        <AlertDialog open={authorizationAlertModalOpen} onOpenChange={() => setAuthorizationAlertModalOpen(!authorizationAlertModalOpen)}>
            <AlertDialogContent className="max-w-96 w-full">
                <AlertDialogHeader>
                    <div className="flex justify-center">
                        <BiSolidError color="red" size={70} />
                    </div>
                    <AlertDialogTitle className="text-center">Unauthorized</AlertDialogTitle>
                    <AlertDialogDescription className="text-center">
                        You don't have the permission <br /> to perform this action.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <div className="flex justify-center">
                    <Button onClick={() => dispatch(handleUnautorizedModalOpen({ isUnautorizedModalOpen: false }))} className="w-24">Ok</Button>
                </div>
            </AlertDialogContent>
        </AlertDialog>

    )
}

export default UnAuthorizationAlert