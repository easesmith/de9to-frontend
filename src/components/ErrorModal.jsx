import { handleErrorModal } from "../store/slices/errorSlice";
import { DialogContent, DialogFooter, DialogHeader, DialogTitle } from "./ui/dialog";
import { BiSolidError } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "./ui/button";
import useGetApiReq from "@/hooks/useGetApiReq";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { readCookie } from "@/utils/readCookie";

const ErrorModal = ({ message }) => {
    const { res, fetchData, isLoading } = useGetApiReq();
    const { isLogoutBtn } = useSelector((state) => state.error);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = readCookie("user");

    const handleLogout = async () => {
        if (user) {
            if (user?.abc === "client") {
                fetchData("/client/logout");
            } else if (user?.abc === "partner") {
                fetchData("/partner/logout");
            } else if (user?.abc === "admin") {
                fetchData("/admin/logout");
            }
        }
    }

    useEffect(() => {
        if (res?.status === 200 || res?.status === 201) {
            toast.success(res?.data?.message);
            if (user?.abc === "client") {
                navigate("/");
            } else if (user?.abc === "partner") {
                navigate("/partner/login");
            } else if (user?.abc === "admin") {
                navigate("/admin/login");
            }
            dispatch(handleErrorModal({ isOpen: false, message: "", isLogoutBtn: false }));
        }
    }, [res]);

    return (
        <>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <div className="flex justify-center">
                        <BiSolidError color="red" size={70} />
                    </div>
                </DialogHeader>
                <div className="grid gap-4 text-center">
                    <p>{message}</p>
                    <div className="flex items-center justify-end gap-2">
                        <Button onClick={() => dispatch(handleErrorModal({ isOpen: false, message: "" }))} type="submit">Ok</Button>
                        {isLogoutBtn && <Button onClick={handleLogout} type="submit">Logout</Button>}
                    </div>
                </div>
            </DialogContent>
        </>
    );
};

export default ErrorModal;
