import React, { useState } from 'react'
import { Skeleton } from './ui/skeleton';

const ImageSkeleton = ({ src, imgClassName, skeletonClassName, onClick =()=>{}}) => {
    const [imageLoading, setImageLoading] = useState(true);
    return (
        <>
            <img
                src={src}
                alt="img" className={`${imgClassName} ${imageLoading?'hidden':'block'} object-cover`}
                onLoad={() => setImageLoading(false)}
                onClick={onClick}
            />
            {imageLoading && <Skeleton className={skeletonClassName} />}
        </>
    )
}

export default ImageSkeleton