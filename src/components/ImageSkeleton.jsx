import React, { useState } from 'react'
import { Skeleton } from './ui/skeleton';

const ImageSkeleton = ({ src, imgClassName, skeletonClassName }) => {
    const [imageLoading, setImageLoading] = useState(true);
    return (
        <>
            <img
                src={src}
                alt="img" className={`${imgClassName} ${imageLoading?'hidden':'block'}`}
                onLoad={() => setImageLoading(false)}
            />
            {imageLoading && <Skeleton className={skeletonClassName} />}
        </>
    )
}

export default ImageSkeleton