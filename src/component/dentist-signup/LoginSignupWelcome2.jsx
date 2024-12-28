import LoginComp from '@/components/login-signup/LoginComp'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MdArrowBackIos } from 'react-icons/md'
import iIcon from "@/assets/i-icon.png";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Registercomp from './Registercomp';

const LoginSignupWelcome2 = ({ selected, setSelected }) => {
    const navigate = useNavigate();
    const [isShowTabs, setIsShowTabs] = useState(true);

    return (
        <div className='p-5 w-full'>
            <div className='flex flex-col justify-between h-full'>
                <div>
                    <button onClick={() => navigate("/")} className='flex max-[500px]:text-sm items-center text-[#717171]'>
                        <MdArrowBackIos className='text-2xl max-[500px]:text-xl' />
                        Return Home
                    </button>
                    <div className="max-w-lg mx-auto h-full">
                        {/* <div className="grid grid-cols-2 gap-5 items-center">
                        <Button onClick={() => setIsLogin(true)} variant={isLogin ? "" : "outline"} className={`rounded-2xl font-medium text-base ${isLogin ? "" : "text-[#717171] border-[#717171] hover:text-[#717171]"}`}>Login</Button>
                        <Button onClick={() => setIsLogin(false)} variant={isLogin ? "outline" : ""} className={`rounded-2xl font-medium text-base ${isLogin ? "text-[#717171] border-[#717171] hover:text-[#717171]" : ""}`}>Register</Button>
                    </div> */}
                        <Tabs onValueChange={(value) => setSelected(value)} value={selected} className="w-full mt-10">
                            {isShowTabs &&
                                <TabsList className="grid grid-cols-2 gap-5 items-center bg-white p-0">
                                    <TabsTrigger value="login" className={`rounded-2xl font-medium text-base data-[state=active]:border-[#95C22B] data-[state=active]:text-white data-[state=active]:bg-[#95C22B] text-[#717171] border-[#717171] hover:text-[#717171] border`}>Login</TabsTrigger>
                                    <TabsTrigger value="register" className={`rounded-2xl font-medium text-base data-[state=active]:border-[#95C22B] data-[state=active]:text-white data-[state=active]:bg-[#95C22B] text-[#717171] border-[#717171] hover:text-[#717171] border`}>Register</TabsTrigger>
                                </TabsList>
                            }
                            <TabsContent value="login">
                                <LoginComp setIsShowTabs={setIsShowTabs} />
                            </TabsContent>
                            <TabsContent value="register">
                                <Registercomp setSelected={setSelected} setIsShowTabs={setIsShowTabs} />
                            </TabsContent>
                        </Tabs>
                    </div>
                </div>
                <div className="hidden sm:flex justify-between items-center gap-3 px-5 mt-5">
                    <p className='text-xs text-[#717171] font-inter'>Copyright 2021 - 2022 FoxHub Inc. All rights Reserved</p>
                    <button className='text-xs text-[#717171] font-inter flex items-center gap-1'>
                        <img src={iIcon} alt="" />
                        Need help?
                    </button>
                </div>
            </div>
        </div>
    )
}

export default LoginSignupWelcome2