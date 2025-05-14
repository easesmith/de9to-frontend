import React, { useEffect, useState } from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'

const DentistGallery = ({ clinics = [] }) => {
    const clinic = clinics?.find(c => c.defaultClinic) || clinics[0];
    const { cabinetPics = [], opdArea = [], certificateWall, consultationTable, frontFascia, receptionCounter, waitingArea } = clinic?.clinicPhotos || {};

    const [allPhotos, setAllPhotos] = useState([]);

    useEffect(() => {
        if (clinic?.clinicPhotos) {
            setAllPhotos([...cabinetPics, ...opdArea]);
        }
    }, [clinic])

    return (
        <div className="flex max-[900px]:flex-col items-start gap-2 mt-10">
            <div className='font-inter  font-medium text-[#717171] max-[900px]:border-none max-[900px]:px-0 px-4 py-2 border-r-[3px] border-r-[#95C22B]'>Gallery</div>
            <div>
                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    className="w-[80%] mx-auto px-4 mb-10"
                >
                    <CarouselContent>
                        {allPhotos?.map((item, i) => (
                            <CarouselItem key={i} className="sm:basis-1/2 md:basis-1/3 2xl:basis-1/4">
                                <div className="w-full aspect-square">
                                    <img
                                        className="w-full h-full"
                                        src={item?.photoPath}
                                        alt={`Photo ${i + 1}`}
                                    />
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
                {/* <div className="w-[65%] max-[500px]:w-[70%] mx-auto relative max-[500px]:px-2">

                </div> */}
                <div className="grid grid-cols-5 max-[900px]:grid-cols-4 max-[700px]:grid-cols-3 max-[500px]:grid-cols-2 max-[400px]:grid-cols-1  gap-5 mt-10">
                    {certificateWall && <img className='h-40 w-full max-[400px]:h-full hover:scale-105' src={certificateWall} alt="" />}
                    {consultationTable && <img className='h-40 w-full max-[400px]:h-full hover:scale-105' src={consultationTable} alt="" />}
                    {frontFascia && <img className='h-40 w-full max-[400px]:h-full hover:scale-105' src={frontFascia} alt="" />}
                    {receptionCounter && <img className='h-40 w-full max-[400px]:h-full hover:scale-105' src={receptionCounter} alt="" />}
                    {waitingArea && <img className='h-40 w-full max-[400px]:h-full hover:scale-105' src={waitingArea} alt="" />}
                </div>
            </div>
        </div>
    )
}

export default DentistGallery