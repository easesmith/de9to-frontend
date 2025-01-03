import React, { useState } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import De9toLogo from '../../assets/de9to-logo-1.png'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { IoIosArrowDown } from 'react-icons/io'
import { readCookie } from '@/utils/readCookie'
import { MdMenu } from 'react-icons/md'
import { FaSearch } from 'react-icons/fa'
import { IoSearchSharp } from 'react-icons/io5'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import logo from '@/assets/logo.png'
import {
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import DeleteAccountModal from '@/components/DeleteAccountModal'
import LogoutModal from '@/components/LogoutModal'

const Header = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const userInfo = readCookie("userInfo");
  console.log("userInfo", userInfo);


  const [isLogin, setIsLogin] = useState(userInfo ? true : false);
  const [isMasterOpen, setIsMasterOpen] = useState(false);
  const [isDeleteAccountModalOpen, setIsDeleteAccountModalOpen] = useState(false);
  const [isLogOutModalOpen, setIsLogOutModalOpen] = useState(false);

  const handleLogin = () => {
    // setIsLogin(true);
    navigate("/login");
  }

  const urlAndUrlName = [
    {
      url: '/',
      urlName: 'Home'
    },
    {
      url: '/dental-camp',
      urlName: 'Dental camps'
    },
    {
      url: '/our-dentist',
      urlName: 'Our dentist'
    },
    // {
    //   url: '/our-clinic',
    //   urlName: 'Our clinics'
    // },
    {
      url: '/blog',
      urlName: 'Blogs'
    },
    {
      url: '/about',
      urlName: 'About us'
    },
    {
      url: '/contact',
      urlName: 'Contact us'
    }
  ]

  return (
    <header className='sticky top-0 bg-white z-30'>
      <nav className='h-[73px] px-16 max-lg:px-8 max-[900px]:px-4 flex justify-between items-center'>
        <div className='flex gap-2 items-center'>
          <Sheet>
            <SheetTrigger>
              <MdMenu className='min-[970px]:hidden text-3xl' />
            </SheetTrigger>
            <SheetContent className="w-[400px] sm:w-full" side="left">
              <SheetHeader>
                <SheetTitle></SheetTitle>
                <SheetDescription>
                  <div className='flex justify-center'>
                    <img src={logo} alt="" />
                  </div>
                  <ul className='flex flex-col items-center gap-8 mt-9'>
                    {urlAndUrlName.map((e, i) => {
                      return (
                        <div key={i} >
                          <NavLink
                            to={e.url}
                            className={({ isActive }) => isActive ? 'text-[#95C22B] text-sm text-center font-bold font-inter bg-[#FFFFFF] px-5 py-[10px]' : 'text-[#212121] text-sm text-center font-extrabold font-inter'}
                          >
                            {e.urlName}
                          </NavLink>
                        </div>
                      )
                    })}
                    {!userInfo?.userId && <Button onClick={handleLogin} variant='log' size='log'>Log in</Button>}
                  </ul>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
          {!pathname.includes("/profile") &&
            <Link to={'/'}>
              <div className="w-28 sm:w-40">
                <img src={De9toLogo} className='' alt="" />
              </div>
            </Link>}
        </div>
        <ul className='flex items-center gap-8 max-[970px]:hidden'>
          {urlAndUrlName.map((e, i) => {
            return (
              <div key={i} >
                <NavLink
                  to={e.url}
                  className={({ isActive }) => isActive ? 'text-[#95C22B] text-lg text-center font-bold font-inter bg-[#FFFFFF] py-[10px]' : 'text-[#212121] text-lg text-center font-medium font-inter'}
                >
                  {e.urlName}
                </NavLink>
              </div>
            )
          })}
        </ul>

        <div className='flex gap-4 items-center'>
          <IoSearchSharp onClick={() => navigate("/our-dentist")} className='text-[#95C22B] min-[970px]:hidden text-2xl' />
          {!isLogin ?
            <Button onClick={handleLogin} variant='log' size='log'>Log in</Button>
            :
            <>
              <button onClick={() => navigate("/profile/medical-records")} className='flex items-center gap-1 cursor-pointer max-lg:hidden'>
                {/* <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar> */}
                <img src={userInfo?.userImage ? userInfo?.userImage : "https://media.istockphoto.com/id/1451587807/vector/user-profile-icon-vector-avatar-or-person-icon-profile-picture-portrait-symbol-vector.jpg?s=612x612&w=0&k=20&c=yDJ4ITX1cHMh25Lt1vI1zBn2cAKKAlByHBvPJ8gEiIg="} className="w-12 h-12 rounded-full" />
                <IoIosArrowDown className='text-xl text-[#717171]' />
              </button>
              <DropdownMenu>
                <DropdownMenuTrigger className='hidden max-lg:flex' asChild>
                  <button onClick={() => navigate("/profile/medical-records")} className='flex items-center gap-1 cursor-pointer'>
                    <img src={userInfo?.userImage ? userInfo?.userImage : "https://media.istockphoto.com/id/1451587807/vector/user-profile-icon-vector-avatar-or-person-icon-profile-picture-portrait-symbol-vector.jpg?s=612x612&w=0&k=20&c=yDJ4ITX1cHMh25Lt1vI1zBn2cAKKAlByHBvPJ8gEiIg="} className="w-12 h-12 rounded-full" />
                    <IoIosArrowDown className='text-xl text-[#717171]' />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-[100vw]">
                  <DropdownMenuGroup>
                    <div className='flex flex-col gap-2 bg-[#FFFFFF] mt-4'>
                      <Link to="/profile/medical-records" className={`flex justify-start items-center gap-[14px] h-[52px] p-[14px] cursor-pointer font-inter font-medium group hover:bg-[#EEEEEE] ${pathname.includes("medical-records") ? 'bg-[#EEEEEE] text-[#95C22B]' : 'text-[#0F172A]'}`}>
                        Medical Records
                      </Link>
                      <Link to="/profile/appointments" className={`flex justify-start items-center gap-[14px] h-[52px] p-[14px] cursor-pointer font-inter font-medium group hover:bg-[#EEEEEE] ${pathname.includes("appointments") ? 'bg-[#EEEEEE] text-[#95C22B]' : 'text-[#0F172A]'}`}>
                        Appointments
                      </Link>
                      <Link to="/profile/my-feedback" className={`flex justify-start items-center gap-[14px] h-[52px] p-[14px] cursor-pointer font-inter font-medium group hover:bg-[#EEEEEE] ${pathname.includes("my-feedback") ? 'bg-[#EEEEEE] text-[#95C22B]' : 'text-[#0F172A]'}`}>
                        My Feedback
                      </Link>
                      <Link to="/profile/payment/appointment" className={`flex justify-start items-center gap-[14px] h-[52px] p-[14px] cursor-pointer font-inter font-medium group hover:bg-[#EEEEEE] ${pathname.includes("payment") ? 'bg-[#EEEEEE] text-[#95C22B]' : 'text-[#0F172A]'}`}>
                        Payment
                      </Link>
                      <Link to="/profile/update-profile" className={`flex justify-start items-center gap-[14px] h-[52px] p-[14px] cursor-pointer font-inter font-medium group hover:bg-[#EEEEEE] ${pathname.includes("update-profile") ? 'bg-[#EEEEEE] text-[#95C22B]' : 'text-[#0F172A]'}`}>
                        Update Profile
                      </Link>
                      <button onClick={() => setIsMasterOpen(!isMasterOpen)} className='flex justify-between px-3'>
                        <span className='font-inter text-[#1A1A1A] font-medium text-xl'>Masters</span>
                        <IoIosArrowDown className={`text-xl text-[#717171] duration-300 ${isMasterOpen && "rotate-180 transition-transform duration-300"}`} />
                      </button>
                      {isMasterOpen &&
                        <div className='flex flex-col gap-2'>
                          <Link to="/profile/change-password" className={`flex justify-start items-center gap-[14px] h-[52px] p-[14px] cursor-pointer font-inter font-medium group hover:bg-[#EEEEEE] ${pathname.includes("change-password") ? 'bg-[#EEEEEE] text-[#95C22B]' : 'text-[#0F172A]'}`}>
                            Change Password
                          </Link>
                          <Link to="/profile/notifications-settings" className={`flex justify-start items-center gap-[14px] h-[52px] p-[14px] cursor-pointer font-inter font-medium group hover:bg-[#EEEEEE] ${pathname.includes("notifications-settings") ? 'bg-[#EEEEEE] text-[#95C22B]' : 'text-[#0F172A]'}`}>
                            Notification Settings
                          </Link>
                          <Link to="/profile/delete-account" className={`flex justify-start items-center gap-[14px] h-[52px] p-[14px] cursor-pointer font-inter font-medium group hover:bg-[#EEEEEE] ${pathname.includes("delete-account") ? 'bg-[#EEEEEE] text-[#FF0000]' : 'text-[#FF0000]'}`}>
                            Delete Account
                          </Link>
                        </div>
                      }

                      <button onClick={() => setIsLogOutModalOpen(true)} className={`flex justify-start items-center gap-[14px] h-[52px] p-[14px] cursor-pointer font-inter font-medium group hover:bg-[#EEEEEE]`}>
                        Log out
                      </button>

                      {isDeleteAccountModalOpen &&
                        <DeleteAccountModal
                          isDeleteAccountModalOpen={isDeleteAccountModalOpen}
                          setIsDeleteAccountModalOpen={setIsDeleteAccountModalOpen}
                        />
                      }

                      {isLogOutModalOpen &&
                        <LogoutModal
                          isLogOutModalOpen={isLogOutModalOpen}
                          setIsLogOutModalOpen={setIsLogOutModalOpen}
                        />
                      }
                    </div>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          }
        </div>
      </nav>
    </header>
  )
}

export default Header
