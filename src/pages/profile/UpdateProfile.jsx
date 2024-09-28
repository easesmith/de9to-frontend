import ProfileLayout from '@/component/Layout/ProfileLayout'
import React from 'react'

const UpdateProfile = () => {
    return (
        <ProfileLayout>
            <div>
                <h1 className='font-inter text-2xl font-medium text-[#00214B]'>Your Profile</h1>
                <Form {...form}>
                    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-start gap-4 w-full mt-5'>
                    <div className="grid grid-cols-3 gap-5">
                        <div className="bg-red-300">w33444</div>
                        <div className="bg-red-300">w33444</div>
                        <div className="bg-red-300">w33444</div>
                    </div>
                </form>
            </Form>
        </div>
        </ProfileLayout >
    )
}

export default UpdateProfile