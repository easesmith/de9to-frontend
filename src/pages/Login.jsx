import logo from '@/assets/logo.png'
import img1 from '@/assets/login-img1.png'
import { MdArrowBackIos } from 'react-icons/md'
import { useEffect, useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import LoginComp from '@/components/login-signup/LoginComp'
import Registercomp from '@/components/login-signup/Registercomp'
import LoginSignupWelcome from '@/components/login-signup/LoginSignupWelcome'
import LoginSignupWelcome2 from '@/components/login-signup/LoginSignupWelcome2'
import { readCookie } from '@/utils/readCookie'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [selected, setSelected] = useState("login");

    const userInfo = readCookie("userInfo");
    const navigate = useNavigate();

    useEffect(() => {
        if (userInfo) {
            navigate("/")
        }
    }, [userInfo])


    return (
        <div className={`grid ${selected === "login" ? "md:grid-cols-[30%_70%]" : "md:grid-cols-[70%_30%]"} grid-cols-1 h-screen`}>
            {selected === "login" ? (
                <div className='sticky top-0 right-0 h-[97vh] hidden md:block'>
                    <LoginSignupWelcome />
                </div>
            ) : (
                <LoginSignupWelcome2 selected={selected} setSelected={setSelected} />
            )}

            {selected === "register" ? (
                <div className='sticky top-0 right-0 h-[97vh] hidden md:block'>
                    <LoginSignupWelcome />
                </div>
            ) : (
                <LoginSignupWelcome2 selected={selected} setSelected={setSelected} />
            )}
        </div>

    )
}

export default Login