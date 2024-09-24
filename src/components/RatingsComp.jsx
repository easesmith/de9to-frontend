import ReactStars from 'react-stars'
import { Rating } from './Rating'

const RatingsComp = () => {
    return (
        <div className='border-2 border-[#95C22B] rounded-lg bg-[#95C22B1A] px-10 py-6 w-full grid grid-cols-[24%_74%] gap-3'>
            <div>
                <p className='text-sm font-inter font-medium text-[#0D0C22]'>Patient Reviews</p>
                <h2 className='font-inter font-bold text-4xl mt-1'>4.7</h2>
                <ReactStars edit={false} size={35} count={5} value={5} color2={'#FF8A00'} />
                <p className='text-xs font-inter text-[#858585]'>(578 Reviews)</p>
            </div>
            <div className='flex flex-col gap-3'>
                <Rating
                    ratingStar={5}
                    ratingValue={488}
                />
                <Rating
                    ratingStar={4}
                    ratingValue={74}
                />
                <Rating
                    ratingStar={3}
                    ratingValue={14}
                />
                <Rating
                    ratingStar={2}
                    ratingValue={0}
                />
                <Rating
                    ratingStar={1}
                    ratingValue={0}
                />
            </div>
        </div>
    )
}

export default RatingsComp