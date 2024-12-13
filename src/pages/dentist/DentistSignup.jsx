import LoginSignupWelcome from '@/component/dentist-signup/LoginSignupWelcome'
import LoginSignupWelcome2 from '@/component/dentist-signup/LoginSignupWelcome2'
import { readCookie } from '@/utils/readCookie';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const DentistSignup = () => {
  const [selected, setSelected] = useState("register");

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

export default DentistSignup