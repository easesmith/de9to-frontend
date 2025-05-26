import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ClinicAppointment from "../ClinicAppointment";
import { Skeleton } from "../ui/skeleton";

const Clinics = ({ clinics, dentistAvailableTiming }) => {
  const params = useParams();
  const [modifiedClinics, setModifiedClinics] = useState([]);
  const [isSeeMore, setIsSeeMore] = useState(true);

  const handleSeeMore = () => {
    setIsSeeMore(!isSeeMore);
  };

  useEffect(() => {
    setModifiedClinics(() => (isSeeMore ? clinics?.slice(0, 1) : clinics));
  }, [isSeeMore, clinics]);

  console.log("modifiedClinics", modifiedClinics);
  console.log("clinics", clinics);

  return (
    <div>
      {clinics ? (
        <div className="flex flex-col gap-4">
          {modifiedClinics?.map((clinic) => (
            <ClinicAppointment
              key={clinic._id}
              clinic={clinic}
              dentistId={params?.dentistId}
              dentistAvailableTiming={dentistAvailableTiming}
            />
          ))}
        </div>
      ) : (
        <ClinicAppointment.Skeleton />
      )}

      <div className="flex justify-center items-center mt-4">
        {clinics?.length > 0 && (
          <button
            onClick={handleSeeMore}
            className="flex flex-col items-center font-inter text-[#95C22B] font-semibolda"
          >
            <span>See {isSeeMore ? "More" : "Less"}</span>
            <ChevronDown />
          </button>
        )}
      </div>
    </div>
  );
};

export default Clinics;
