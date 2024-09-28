import React from 'react'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle
} from "@/components/ui/alert-dialog"
import logo from '@/assets/logo.png'
import { FaLocationArrow } from "react-icons/fa"
import { IoCall } from "react-icons/io5"

const PayNowModal = ({ isPayNowModalOpen, setIsPayNowModalOpen }) => {
    return (
        <AlertDialog open={isPayNowModalOpen} onOpenChange={setIsPayNowModalOpen}>
            <AlertDialogContent className="max-w-[680px] max-h-[95vh] overflow-y-auto w-full">
                <AlertDialogHeader>
                    <div className='flex justify-between items-start'>
                        <div></div>
                        <img src={logo} className='max-w-40 w-full' alt="logo" />
                        <p className='uppercase text-[#717171] text-xs'>INV9988776</p>
                    </div>
                    <div className="flex justify-between items-center mt-3 border-b border-[#71717154] pb-3">
                        <h1 className='text-2xl font-inter text-[#1A1A1A] font-medium'>Invoice</h1>
                        <p className='text-[#717171] font-inter'>19 Sep’24</p>
                    </div>
                    {/* <AlertDialogTitle className="font-inter font-bold text-[#0D0E0E] text-2xl pt-1">Your Appointment is completed</AlertDialogTitle> */}
                    <AlertDialogDescription>
                        <div className="grid grid-cols-2 gap-2 mt-3">
                            <div>
                                <h3 className='font-inter text-xl font-medium text-[#1A1A1A]'>Kunal Singh</h3>
                                <p className='font-inter text-sm text-[#1A1A1A]'>ID: 778899888</p>
                                <p className='font-inter text-sm text-[#1A1A1A]'>+91 998776622</p>
                                <p className='font-inter text-sm text-[#1A1A1A]'>Email: demo@gmail.com</p>
                            </div>
                            <div>
                                <h3 className='font-inter text-xl font-medium text-[#1A1A1A]'>Male</h3>
                                <p className='font-inter text-sm text-[#1A1A1A]'>25 years</p>
                                <p className='font-inter text-sm text-[#1A1A1A]'>Djewels House, 2576/6 IInd Floor, Gurudwara Road, Beadonpura, Karol Bagh, near GPO, New Delhi, Delhi 110005</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-2 mt-5">
                            <div>
                                <h3 className='font-inter text-xl font-medium text-[#1A1A1A]'>Dr Anusha</h3>
                                <p className='font-inter text-sm text-[#1A1A1A]'>MarcDental Clinic</p>
                            </div>
                            <div>
                                <p className='font-inter text-base font-medium text-[#1A1A1A]'>12 Sep’24, 10:30 AM</p>
                            </div>
                        </div>

                        <div className='mt-5'>
                            <h3 className='font-inter text-xl font-medium text-[#1A1A1A]'>Medical History</h3>
                            <p className='font-inter text-sm text-[#1A1A1A]'>Allergies, Undergone Medical Treatment</p>
                        </div>

                        <div className='mt-6'>
                            <div className="flex justify-between items-center gap-3 bg-[#717171] px-3 py-1">
                                <h4 className='text-white font-inter text-lg'>Treatment</h4>
                                <h4 className='text-white font-inter text-lg'>Amount</h4>
                            </div>
                            <div className="flex justify-between items-center gap-3 border-b border-[#71717154] bg-white px-3 py-1">
                                <h4 className='text-[#717171] font-inter text-lg'>Consultation</h4>
                                <h4 className='text-[#717171] font-inter text-lg'>₹599</h4>
                            </div>
                            <div className="flex justify-between items-center gap-3 bg-white px-3 py-1">
                                <h4 className='text-[#717171] font-inter text-lg'>Total</h4>
                                <h4 className='text-[#717171] font-inter text-lg'>Due ₹599</h4>
                            </div>
                        </div>
                    </AlertDialogDescription>
                </AlertDialogHeader>

                <AlertDialogFooter className="mt-5">
                    <AlertDialogAction className="w-full" onClick={() => setIsPayNowModalOpen(false)}>Pay Now</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}

export default PayNowModal