/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ClinicPhotosCarousel = ({ clinic }) => {
  const [allPhotos, setAllPhotos] = useState([]);

  useEffect(() => {
    if (clinic?.clinicPhotos) {
      const {
        cabinetPics = [],
        opdArea = [],
        certificateWall,
        consultationTable,
        frontFascia,
        receptionCounter,
        waitingArea,
      } = clinic.clinicPhotos;

      const combinedPhotos = [
        ...cabinetPics.map((item) => item?.photoPath),
        ...opdArea.map((item) => item?.photoPath),
        certificateWall,
        consultationTable,
        frontFascia,
        receptionCounter,
        waitingArea,
      ].filter(Boolean); // Remove undefined/null/empty values

      setAllPhotos(combinedPhotos);
      console.log("combinedPhotos", combinedPhotos);
    }
  }, [clinic]);

  return (
    <div className="bg-white shadow-[0px_0px_20px_rgba(0,0,0,0.1)] rounded p-4 min-w-0">
      <h5 className="font-inter font-semibold text-sm">
        {clinic?.clinicName}{" "}
        <span className="text-muted-foreground">({clinic?.area})</span>
      </h5>
      <Carousel
        opts={{
          align: "start",
          loop: false,
        }}
        className="w-full mx-auto mt-4 overflow-hidden"
      >
        <CarouselContent>
          {allPhotos?.map((item, i) => (
            <CarouselItem
              key={i}
              className="w-full sm:basis-1/2 md:basis-1/3 xl:basis-1/4 max-w-full"
            >
              <div className="sm:w-full sm:aspect-square h-full">
                <img
                  src={item}
                  alt={`Photo ${i + 1}`}
                  className="sm:w-full sm:h-full rounded-md object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-0" />
        <CarouselNext className="right-0" />
      </Carousel>
    </div>
  );
};

export default ClinicPhotosCarousel;
