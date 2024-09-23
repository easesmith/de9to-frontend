import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

const ConfirmbookingModal = ({ isConfirmBookingModalOpen, setIsConfirmBookingModalOpen }) => {
    return (
        <Dialog open={isConfirmBookingModalOpen} onOpenChange={setIsConfirmBookingModalOpen}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Are you absolutely sure?</DialogTitle>
                    <DialogDescription>
                        This action cannot be undone. This will permanently delete your account
                        and remove your data from our servers.
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>

    )
}

export default ConfirmbookingModal