import ProfileLayout from '@/component/Layout/ProfileLayout';
import DeleteAccountModal from '@/components/DeleteAccountModal';
import { Button } from '@/components/ui/button';
import usePostApiReq from '@/hooks/usePostApiReq';
import { readCookie } from '@/utils/readCookie';
import { useState } from 'react';


const DeleteAccount = () => {
    const [isDeleteAccountModalOpen, setIsDeleteAccountModalOpen] = useState(false);

    const userInfo = readCookie("userInfo");
    const { res, fetchData, isLoading } = usePostApiReq();

    const onSubmit = () => {
        setIsDeleteAccountModalOpen(true);
    };
    console.log("userInfo:", userInfo);

    return (
        <ProfileLayout>
            <div>
                <div className='w-full h-full flex justify-center items-center'>
                    <div className="max-w-3xl rounded-lg w-full mt-24 bg-white p-5">
                        <h1 className='text-2xl font-inter font-semibold text-[#1A1A1A] text-center'>Delete Your Account</h1>
                        <p className='font-inter mt-1 text-[#1A1A1A]'>In order to delete your account, you must confirm your password which is linked to this account <span className="font-bold">{userInfo?.email}</span></p>
                        <div className='flex flex-col items-end mt-5'>
                            <button type='button' className='text-sm font-inter'>Forgot Password?</button>
                            <Button onClick={onSubmit} className="bg-[#95C22B] mt-3 flex justify-center w-full h-12">
                                Delete
                            </Button>
                        </div>
                    </div>
                </div>
                {isDeleteAccountModalOpen &&
                    <DeleteAccountModal
                        isDeleteAccountModalOpen={isDeleteAccountModalOpen}
                        setIsDeleteAccountModalOpen={setIsDeleteAccountModalOpen}
                    />
                }
            </div>
        </ProfileLayout>
    )
}

export default DeleteAccount