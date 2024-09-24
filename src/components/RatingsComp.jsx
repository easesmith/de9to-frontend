import ReactStars from 'react-stars'

const RatingsComp = () => {
    return (
        <div className='border-2 border-[#95C22B] rounded-lg bg-[#95C22B1A] px-10 py-6 w-full grid grid-cols-[24%_74%] gap-3'>
            <div>
                <p className='text-sm font-inter font-medium text-[#0D0C22]'>Patient Reviews</p>
                <h2 className='font-inter font-bold text-4xl mt-1'>4.7</h2>
                <ReactStars size={35} count={5} value={5} color2={'#FF8A00'} />
                <p className='text-xs font-inter text-[#858585]'>(578 Reviews)</p>
            </div>
            <div className='flex flex-col gap-3'>
                <div className='grid grid-cols-[6%_87%_6%] items-center gap-3'>
                    <p className='font-inter text-xs font-medium'>5 stars</p>
                    <div className='w-11/12 h-2 bg-[#d2d8df] rounded-3xl overflow-hidden'>
                        <div className='w-full h-full rounded-3xl bg-[#95C22B]'></div>
                    </div>
                    <div className='font-inter text-xs font-medium'>488</div>
                </div>
                <div className='grid grid-cols-[6%_87%_6%] items-center gap-3'>
                    <p className='font-inter text-xs font-medium'>4 stars</p>
                    <div className='w-11/12 h-2 bg-[#d2d8df] rounded-3xl overflow-hidden'>
                        <div className='w-full h-full rounded-3xl transform -translate-x-40 bg-[#95C22B]'></div>
                    </div>
                    <div className='font-inter text-xs font-medium'>488</div>
                </div>
            </div>
        </div>
    )
}

export default RatingsComp