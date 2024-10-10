import { readCookie } from '@/utils/readCookie';
import { useEffect, useState } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

const ProtectedRoute = () => {
    const { pathname } = useLocation();
    const [isReturn, setIsReturn] = useState(true);

    const userInfo = readCookie("userInfo");
    const navigate = useNavigate();


    useEffect(() => {
        if (pathname.includes("/profile/") && userInfo && userInfo?.userId) {
            setIsReturn(false);
        } else {
            setIsReturn(true);
            navigate("/");
        }
    }, [pathname, userInfo]);



    if (!isReturn) {
        return <Outlet />;
    }

}

export default ProtectedRoute