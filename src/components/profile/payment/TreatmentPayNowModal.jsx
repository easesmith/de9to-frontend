import logo from '@/assets/logo.png'
import { MdOutlineFileDownload } from 'react-icons/md'
import { Button } from '../../ui/button'
import { Dialog, DialogContent, DialogDescription, DialogHeader } from '../../ui/dialog'
import axios from 'axios'
import { readCookie } from '@/utils/readCookie'
import { format } from 'date-fns'
import { calculateYearFromDOB } from '@/utils/calculateYearFromDOB'
import html2PDF from "jspdf-html2canvas";
import usePostApiReq from '@/hooks/usePostApiReq'
import { useEffect } from 'react'
import usePatchApiReq from '@/hooks/usePatchApiReq'
import { axiosInstance } from '@/utils/axiosInstance'

const TreatmentPayNowModal = ({ isPayNowModalOpen, setIsPayNowModalOpen, payment, getAppointments }) => {
    const paymentDetails = {
        razorpay_payment_id: "",
        razorpay_subscription_id: "",
        razorpay_signature: "",
    };

    const { res, fetchData, isLoading } = usePostApiReq();
    const { res: verifyPaymentRes, fetchData: fetchVerifyPaymentData, isLoading: isVerifyPaymentLoading } = usePostApiReq();
    const { res: updatePaymentStatusRes, fetchData: fetchUpdatePaymentStatusData, isLoading: isUpdatePaymentStatusLoading } = usePatchApiReq();

    const { patientId, dentistId, clinicId, paymentFor } = payment || {};

    const userInfo = readCookie("userInfo");
    console.log("userInfo", userInfo);
    console.log("payment", payment);
    console.log("verifyPaymentRes", verifyPaymentRes);

    const downloadInvoice = () => {
        html2PDF(document.querySelector("#invoice_box"), {
            jsPDF: {
                format: 'a4',
            },
            imageType: 'image/jpeg',
            output: './pdf/generate.pdf'
        });
    }

    const handleRazorpayPayment = async () => {
        fetchData("/dentist/make-payment", { amount: payment?.amountDue, currency: "INR" });
    }

    const updatePaymentStatus = async () => {
        try {
            const res = await axiosInstance.patch("/patient/update-payment", { paymentId: payment?._id, amountPaid: payment?.amountDue, totalAmount: payment?.totalAmount, paymentFor: "treatment" });
            getAppointments();
            console.log("update payment res", res);
        } catch (error) {
            console.log(error);
        }

    }

    useEffect(() => {
        if (res?.status === 200 || res?.status === 201) {
            console.log("payments response", res);
            const options = {
                key: import.meta.env.VITE_APP_RAZORPAY_API_KEY,
                amount: payment?.amountDue,
                currency: "INR",
                name: "Dento",
                description: "Test Transaction",
                image: logo,
                order_id: res?.data?.order?.id,
                handler: async function (response) {
                    paymentDetails.razorpay_payment_id = response.razorpay_payment_id;
                    paymentDetails.razorpay_order_id = response.razorpay_order_id;
                    paymentDetails.razorpay_signature = response.razorpay_signature;

                    try {
                        const res = await axiosInstance.post("/dentist/verify-payment", { ...paymentDetails },
                            { withCredentials: true }
                        );
                        updatePaymentStatus();
                        console.log("handler", res.data);
                        // if (res.data.success) { }
                    } catch (error) {
                        console.log(error);
                    }

                },
                prefill: {
                    name: patientId?.name,
                    contact: patientId?.phone
                },
                notes: {
                    address: "Dento"
                },
                theme: {
                    color: "#3399cc"
                }
            };
            const razor = new window.Razorpay(options);
            razor.open();
            setIsPayNowModalOpen(false)
        }
    }, [res])


    return (
        <Dialog open={isPayNowModalOpen} onOpenChange={setIsPayNowModalOpen}>
            <DialogContent className="max-w-[680px] max-md:max-w-[600px] max-sm:max-w-[480px] p-0 max-[525px]:max-w-[380px] w-full rounded-lg">
                <div className='max-h-[75vh] w-full overflow-y-auto scrollBar'>
                    <DialogHeader>
                        <div id="invoice_box" className='p-10'>
                            <div className='flex justify-between items-start'>
                                <div className='max-md:hidden'></div>
                                <img src={logo} className='max-w-40 max-md:w-[132px] max-md:h-12 w-full' alt="logo" />
                                <p className='uppercase text-[#717171] text-xs'>INV9988776</p>
                            </div>
                            <div className="flex justify-between items-center mt-3 border-b border-[#71717154] pb-3">
                                <h1 className='text-2xl max-md:text-xl font-inter text-[#1A1A1A] font-medium'>Invoice</h1>
                                {paymentFor === "appointment" ? <p className='text-[#717171] font-inter max-md:text-sm'>{payment?.appointmentId?.payment?.createdAt && format(new Date(payment?.appointmentId?.payment?.createdAt), "dd-MM-yyyy")}</p>
                                    : <p className='text-[#717171] font-inter max-md:text-sm'>{format(new Date(payment?.date), "dd MMM yyyy")}</p>}
                            </div>
                            <DialogDescription>
                                <div className="grid grid-cols-2 gap-2 mt-3">
                                    <div>
                                        <h3 className='font-inter text-xl max-md:text-lg font-medium text-[#1A1A1A]'>{patientId?.name}</h3>
                                        <p className='font-inter text-sm max-md:text-xs text-[#1A1A1A]'>ID: 778899888</p>
                                        <p className='font-inter text-sm max-md:text-xs text-[#1A1A1A]'>+91 {patientId?.phone}</p>
                                        <p className='font-inter text-sm max-md:text-xs text-[#1A1A1A]'>Email: {patientId?.email}</p>
                                    </div>
                                    <div>
                                        <h3 className='font-inter text-xl max-md:text-lg font-medium text-[#1A1A1A]'>{patientId?.gender}</h3>
                                        <p className='font-inter text-sm max-md:text-xs text-[#1A1A1A]'>{calculateYearFromDOB(patientId?.dob)} years</p>
                                        {/* <p className='font-inter text-sm max-md:text-xs text-[#1A1A1A]'>Djewels House, 2576/6 IInd Floor, Gurudwara Road, Beadonpura, Karol Bagh, near GPO, New Delhi, Delhi 110005</p> */}
                                        <p className='font-inter text-sm max-md:text-xs text-[#1A1A1A]'>{`${patientId?.address}, ${patientId?.area}, ${patientId?.city}, ${patientId?.state}, ${patientId?.country}, ${patientId?.pincode}`}</p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-2 mt-5">
                                    <div>
                                        <h3 className='font-inter text-xl max-md:text-lg font-medium text-[#1A1A1A]'>{dentistId?.personalDetails?.prefix}. {dentistId?.personalDetails?.Firstname} {dentistId?.personalDetails?.lastName}</h3>
                                        <p className='font-inter text-sm max-md:text-xs text-[#1A1A1A]'>{clinicId?.clinicName}</p>
                                    </div>
                                    <div>
                                        {paymentFor === "appointment" ? <p className='font-inter text-base max-md:text-xs font-medium text-[#1A1A1A]'>{format(payment?.appointmentId?.payment?.createdAt, "dd MMM yy, hh:mm a")}</p>
                                            : <p className='font-inter text-base max-md:text-xs font-medium text-[#1A1A1A]'>{format(payment?.date, "dd MMM yy, hh:mm a")}</p>}
                                    </div>
                                </div>

                                <div className='mt-5'>
                                    <h3 className='font-inter text-xl max-md:text-lg font-medium text-[#1A1A1A]'>Medical History</h3>
                                    <p className='font-inter text-sm max-md:text-xs text-[#1A1A1A]'>Allergies, Undergone Medical Treatment</p>
                                </div>

                                <div className='mt-6'>
                                    <div className="flex justify-between items-center gap-3 bg-[#EBEBEB] px-3 py-1">
                                        <h4 className='text-[#4E4E4E] font-inter text-lg max-md:text-base'>Payment For</h4>
                                        <h4 className='text-[#4E4E4E] font-inter text-lg max-md:text-base'>Amount</h4>
                                    </div>
                                    <div className="flex justify-between items-center gap-3 border-b border-[#71717154] bg-white px-3 py-1">
                                        <h4 className='text-[#717171] font-inter text-lg max-md:text-sm'>Treatment</h4>
                                        <h4 className='text-[#717171] font-inter text-lg max-md:text-sm'>₹{payment?.totalAmount}</h4>
                                    </div>
                                    <div className="flex justify-between items-center gap-3 bg-white px-3 py-1">
                                        <h4 className='text-[#717171] font-inter text-lg max-md:text-base'>Total</h4>
                                        <h4 className='text-[#717171] font-inter text-lg max-md:text-base'><span className='capitalize'>{payment?.paymentStatus}</span> ₹{payment?.paymentStatus === "paid" ? payment?.amountPaid : payment?.amountDue}</h4>
                                    </div>
                                </div>
                            </DialogDescription>
                        </div>
                    </DialogHeader>

                    {
                        <div className="mt-3 flex items-center gap-3 px-10 pb-5">
                            {payment?.paymentStatus === "due" ? <Button className="w-full bg-[#95C22B] hover:bg-[#b3ea35]" onClick={handleRazorpayPayment}>Pay Now</Button>
                                : <Button className="w-full pointer-events-none bg-[#717171] hover:bg-[#717171]">Paid</Button>}
                            <MdOutlineFileDownload onClick={downloadInvoice} className='text-5xl max-md:hidden cursor-pointer text-[#95C22B]' />
                        </div>}
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default TreatmentPayNowModal