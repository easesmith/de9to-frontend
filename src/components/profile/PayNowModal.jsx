import logo from '@/assets/logo.png'
import { MdOutlineFileDownload } from 'react-icons/md'
import { Button } from '../ui/button'
import { Dialog, DialogContent, DialogDescription, DialogHeader } from '../ui/dialog'

const PayNowModal = ({ isPayNowModalOpen, setIsPayNowModalOpen }) => {
    const paymentDetails = {
        razorpay_payment_id: "",
        razorpay_subscription_id: "",
        razorpay_signature: "",
    };

    const handleRazorpayPayment = async () => {
        try {
            const { data } = await axios.post(
                `${import.meta.env.VITE_BACKEND_URL}/dentist/make-payment`, { amount: "100", currency: "INR" },
                { withCredentials: true }
            );

            console.log("data", data);


            const options = {
                key: import.meta.env.VITE_APP_RAZORPAY_API_KEY,
                amount: "100",
                currency: "INR",
                name: "Dento",
                description: "Test Transaction",
                image: logo,
                order_id: data.order.id,
                handler: async function (response) {
                    paymentDetails.razorpay_payment_id = response.razorpay_payment_id;
                    paymentDetails.razorpay_order_id = response.razorpay_order_id;
                    paymentDetails.razorpay_signature = response.razorpay_signature;

                    try {
                        const res = await axios.post(
                            `${import.meta.env.VITE_APP_API_URL}/dentist/verify-payment`, { ...paymentDetails },
                            { withCredentials: true }
                        );
                        console.log("handler", res.data);
                        // if (res.data.success) { }
                    } catch (error) {
                        console.log(error);
                    }
                },
                prefill: {
                    name: "test name",
                    contact: "1234567890"
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
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <Dialog open={isPayNowModalOpen} onOpenChange={setIsPayNowModalOpen}>
            <DialogContent className="max-w-[680px] max-md:max-w-[600px] max-sm:max-w-[480px] max-[525px]:max-w-[380px] w-full rounded-lg">
                <div className='max-h-[75vh] w-full overflow-y-auto scrollBar'>
                    <DialogHeader>
                        <div className='flex justify-between items-start'>
                            <div className='max-md:hidden'></div>
                            <img src={logo} className='max-w-40 max-md:w-[132px] max-md:h-12 w-full' alt="logo" />
                            <p className='uppercase text-[#717171] text-xs'>INV9988776</p>
                        </div>
                        <div className="flex justify-between items-center mt-3 border-b border-[#71717154] pb-3">
                            <h1 className='text-2xl max-md:text-xl font-inter text-[#1A1A1A] font-medium'>Invoice</h1>
                            <p className='text-[#717171] font-inter max-md:text-sm'>19 Sep’24</p>
                        </div>
                        <DialogDescription>
                            <div className="grid grid-cols-2 gap-2 mt-3">
                                <div>
                                    <h3 className='font-inter text-xl max-md:text-lg font-medium text-[#1A1A1A]'>Kunal Singh</h3>
                                    <p className='font-inter text-sm max-md:text-xs text-[#1A1A1A]'>ID: 778899888</p>
                                    <p className='font-inter text-sm max-md:text-xs text-[#1A1A1A]'>+91 998776622</p>
                                    <p className='font-inter text-sm max-md:text-xs text-[#1A1A1A]'>Email: demo@gmail.com</p>
                                </div>
                                <div>
                                    <h3 className='font-inter text-xl max-md:text-lg font-medium text-[#1A1A1A]'>Male</h3>
                                    <p className='font-inter text-sm max-md:text-xs text-[#1A1A1A]'>25 years</p>
                                    <p className='font-inter text-sm max-md:text-xs text-[#1A1A1A]'>Djewels House, 2576/6 IInd Floor, Gurudwara Road, Beadonpura, Karol Bagh, near GPO, New Delhi, Delhi 110005</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-2 mt-5">
                                <div>
                                    <h3 className='font-inter text-xl max-md:text-lg font-medium text-[#1A1A1A]'>Dr Anusha</h3>
                                    <p className='font-inter text-sm max-md:text-xs text-[#1A1A1A]'>MarcDental Clinic</p>
                                </div>
                                <div>
                                    <p className='font-inter text-base max-md:text-xs font-medium text-[#1A1A1A]'>12 Sep’24, 10:30 AM</p>
                                </div>
                            </div>

                            <div className='mt-5'>
                                <h3 className='font-inter text-xl max-md:text-lg font-medium text-[#1A1A1A]'>Medical History</h3>
                                <p className='font-inter text-sm max-md:text-xs text-[#1A1A1A]'>Allergies, Undergone Medical Treatment</p>
                            </div>

                            <div className='mt-6'>
                                <div className="flex justify-between items-center gap-3 bg-[#EBEBEB] px-3 py-1">
                                    <h4 className='text-[#4E4E4E] font-inter text-lg max-md:text-base'>Treatment</h4>
                                    <h4 className='text-[#4E4E4E] font-inter text-lg max-md:text-base'>Amount</h4>
                                </div>
                                <div className="flex justify-between items-center gap-3 border-b border-[#71717154] bg-white px-3 py-1">
                                    <h4 className='text-[#717171] font-inter text-lg max-md:text-sm'>Consultation</h4>
                                    <h4 className='text-[#717171] font-inter text-lg max-md:text-sm'>₹599</h4>
                                </div>
                                <div className="flex justify-between items-center gap-3 bg-white px-3 py-1">
                                    <h4 className='text-[#717171] font-inter text-lg max-md:text-base'>Total</h4>
                                    <h4 className='text-[#717171] font-inter text-lg max-md:text-base'>Due ₹599</h4>
                                </div>
                            </div>
                        </DialogDescription>
                    </DialogHeader>

                    <div className="mt-5 flex items-center">
                        <Button className="w-full bg-[#95C22B] hover:bg-[#717171]" onClick={() => setIsPayNowModalOpen(false)}>Pay Now</Button>
                        <MdOutlineFileDownload className='text-5xl max-md:hidden cursor-pointer text-[#95C22B]' />
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default PayNowModal