import ProfileLayout from '@/component/Layout/ProfileLayout'
import { Button } from '@/components/ui/button'

const DeleteAccount = () => {
    return (
        <ProfileLayout>
            <div>
                <div className='w-full h-full flex justify-center items-center'>
                    <div className="max-w-md rounded-lg w-full mt-24 bg-white p-5">
                        <h1 className='text-2xl font-inter font-semibold text-[#1A1A1A] text-center'>Delete Your Account</h1>
                        <p className='font-inter text-lg text-[#1A1A1A] mt-5'>Are you sure? This will permanently delete your <span className='font-semibold'>De9to</span> account.</p>
                        <p className='font-inter mt-1 text-[#1A1A1A]'>Once the deletion process begins, you won't be able to reactivate your account or retrieve any data or information.</p>
                        <div className='grid grid-cols-[60%_40%] gap-3 mt-5'>
                            <Button>No, Cancel</Button>
                            <Button variant="outline" className="text-[#FF0000] border-[#FF0000] hover:text-[#FF0000]">Delete My Account</Button>
                        </div>
                    </div>
                </div>
            </div>
        </ProfileLayout>
    )
}

export default DeleteAccount