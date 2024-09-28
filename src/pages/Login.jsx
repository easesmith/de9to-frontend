import logo from '@/assets/logo.png'
import img1 from '@/assets/login-img1.png'
import { MdArrowBackIos } from 'react-icons/md'
import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import LoginComp from '@/components/login-signup/LoginComp'
import Registercomp from '@/components/login-signup/Registercomp'
import LoginSignupWelcome from '@/components/login-signup/LoginSignupWelcome'
import LoginSignupWelcome2 from '@/components/login-signup/LoginSignupWelcome2'

const Login = () => {
    const [selected, setSelected] = useState("login");

    return (
        <div className={`grid ${selected === "login" ? "grid-cols-[30%_70%]" : "grid-cols-[70%_30%]"} h-screen`}>
            {selected === "login" ?
                <LoginSignupWelcome />
                : <LoginSignupWelcome2
                    selected={selected}
                    setSelected={setSelected}
                />
            }

            {selected === "register" ?
                <div className='sticky top-0 right-0 h-[97vh]'>
                    <LoginSignupWelcome />
                </div>
                :
                <LoginSignupWelcome2
                    selected={selected}
                    setSelected={setSelected}
                />
            }
        </div>
    )
}

export default Login