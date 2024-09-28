import React, { useState } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import De9toLogo from '../../assets/de9to-logo-qc7xun2b6cqji9b2etrrmn9ecu7aif9fr5oesz8pp6-1.png.png'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { IoIosArrowDown } from 'react-icons/io'

const Header = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [isLogin, setIsLogin] = useState(false);

  const handleLogin = () => {
    // navigate("/login");
    setIsLogin(true);
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
    {
      url: '/our-clinic',
      urlName: 'Our clinics'
    },
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
    <header>
      <nav className='h-[73px]  px-20 flex justify-between items-center sticky top-0'>
        {!pathname.includes("/profile") &&
          <Link to={'/'}>
            <div className="logo">
              <img src={De9toLogo} alt="" />
            </div>
          </Link>}
        <ul className='flex items-center gap-5'>
          {urlAndUrlName.map((e, i) => {
            return (
              <div key={i} >
                <NavLink
                  to={e.url}
                  className={({ isActive }) => isActive ? 'text-[#95C22B] text-sm text-center font-bold font-inter bg-[#FFFFFF] px-5 py-[10px] rounded-[35px] shadow-md' : 'text-[#212121] text-sm text-center font-medium font-inter'}
                >
                  {e.urlName}
                </NavLink>
              </div>
            )
          })}
        </ul>
        <div>
          {!isLogin ?
            <Button onClick={handleLogin} variant='log' size='log'>Log in</Button>
            :
            <button onClick={() => navigate("/profile/medical-records")} className='flex items-center gap-1 cursor-pointer'>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <IoIosArrowDown className='text-xl text-[#717171]' />
            </button>
          }
        </div>
      </nav>
    </header>
  )
}

export default Header
