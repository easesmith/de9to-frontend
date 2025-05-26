import ClinicPhotosCarousel from "./dentist/ClinicPhotosCarousel";

const DentistGallery = ({ clinics = [] }) => {
  console.log("clinics", clinics);

  return (
    <div className="flex flex-col items-start gap-5">
      {clinics.map((clinic) => (
        <ClinicPhotosCarousel key={clinic._id} clinic={clinic} />
      ))}
    </div>
  );
};

export default DentistGallery;
