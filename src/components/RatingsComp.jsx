/* eslint-disable react/prop-types */
import ReactStars from 'react-stars'
import { Rating } from './Rating'

const RatingsComp = ({ allRating }) => {
    const { reviewsByRating,averageRating } = allRating || {};
    let totalReviews = 0;

    if (reviewsByRating) {
        Object.keys(reviewsByRating).forEach(rating => {
            totalReviews += reviewsByRating[rating]?.length || 0;
        });
    }

    return (
        <div className='border-2 border-[#95C22B] rounded-lg bg-[#95C22B1A] px-10 max-[500px]:px-4 py-6 w-full grid grid-cols-[24%_74%] max-[900px]:grid-cols-[30%_68%] max-[700px]:grid-cols-1 gap-3'>
            <div>
                <p className='text-sm font-inter font-medium text-[#0D0C22]'>Patient Reviews</p>
                <h2 className='font-inter font-bold text-4xl mt-1'>{parseFloat(averageRating?.toFixed(1))}</h2>
                <ReactStars edit={false} size={35} count={5} value={parseFloat(averageRating?.toFixed(1))} color2={'#FF8A00'} />
                <p className='text-xs font-inter text-[#858585]'>({totalReviews} Reviews)</p>
            </div>
            <div className='flex flex-col gap-3'>
                <Rating
                    ratingStar={5}
                    ratingValue={reviewsByRating?.["5"]?.length || 0}
                    maxRating={totalReviews}
                />
                <Rating
                    ratingStar={4}
                    ratingValue={reviewsByRating?.["4"]?.length || 0}
                    maxRating={totalReviews}
                />
                <Rating
                    ratingStar={3}
                    ratingValue={reviewsByRating?.["3"]?.length || 0}
                    maxRating={totalReviews}
                />
                <Rating
                    ratingStar={2}
                    ratingValue={reviewsByRating?.["2"]?.length || 0}
                    maxRating={totalReviews}

                />
                <Rating
                    ratingStar={1}
                    ratingValue={reviewsByRating?.["1"]?.length || 0}
                    maxRating={totalReviews}
                />
            </div>
        </div>
    )
}

export default RatingsComp