/* eslint-disable react/prop-types */
import { format } from "date-fns";
import { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import ReactStars from "react-stars";
import { TableCell, TableRow } from "../ui/table";
import DeleteAlertModal from "./DeleteAlertModal";
import useDeleteApiReq from "@/hooks/useDeleteApiReq";

const Feedback = ({ feedback, getReviews }) => {
  const [isDeleteAlertModalOpen, setIsDeleteAlertModalOpen] = useState(false);

  const { res, fetchData, isLoading } = useDeleteApiReq();

  const deleteReview = () => {
    fetchData(`/patient/delete-patient-review?reviewId=${feedback?._id}`);
  };

  useEffect(() => {
    if (res?.status === 200 || res?.status === 201) {
      console.log("clinic delete res", res);
      setIsDeleteAlertModalOpen(false);
      getReviews();
    }
  }, [res]);

  const handleDeleteModal = () => {
    setIsDeleteAlertModalOpen(true);
  };

  return (
    <>
      <TableRow className="text-[#1A1A1A] font-inter">
        <TableCell>
          {format(new Date(feedback?.createdAt), "dd/MM/yyy")}
        </TableCell>
        <TableCell>
          {feedback?.clinic
            ? feedback?.clinic?.clinicName
            : `${feedback?.dentist?.personalDetails?.prefix} ${feedback?.dentist?.personalDetails?.Firstname}`}
        </TableCell>
        <TableCell>
          <ReactStars
            count={5}
            value={Number(feedback?.patientRating)}
            color2="#FF8A00"
            edit={false}
            size={22}
          />
        </TableCell>
        <TableCell className="text-[#0D0C22]">
          {feedback?.patientRemarks}
        </TableCell>
        <TableCell className="flex items-center gap-3">
          {/* <BiSolidPencil className='text-2xl cursor-pointer' /> */}
          <FaTrash
            onClick={handleDeleteModal}
            className="text-xl cursor-pointer text-[#FF0000]"
          />
        </TableCell>
      </TableRow>

      {isDeleteAlertModalOpen && (
        <DeleteAlertModal
          handleDelete={deleteReview}
          isDeleteAlertModal={isDeleteAlertModalOpen}
          setIsDeleteAlertModal={setIsDeleteAlertModalOpen}
          isLoading={isLoading}
        />
      )}
    </>
  );
};

export default Feedback;
