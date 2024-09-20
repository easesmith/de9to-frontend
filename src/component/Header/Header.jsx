import React from 'react'
import { Link } from 'react-router-dom'
import De9toLogo from '../../assets/de9to-logo-qc7xun2b6cqji9b2etrrmn9ecu7aif9fr5oesz8pp6-1.png.png'
import { Button } from '@/components/ui/button'

const Header = () => {
  return (
    <header>
      <nav className='h-[73px] py-[18px] px-20 flex justify-between items-center'>
        <div className="logo">
          <img src={De9toLogo} alt="" />
        </div>
        <ul className='flex items-center gap-5'>
          <li className='text-[#212121] text-sm text-center font-medium font-inter'><Link>Home</Link></li>
          <li className='text-[#212121] text-sm text-center font-medium font-inter'><Link>Dental camps</Link></li>
          <li className='text-[#212121] text-sm text-center font-medium font-inter'><Link>Our dentist</Link></li>
          <li className='text-[#212121] text-sm text-center font-medium font-inter'><Link>Our clinics</Link></li>
          <li className='text-[#212121] text-sm text-center font-medium font-inter'><Link>Blogs</Link></li>
          <li className='text-[#212121] text-sm text-center font-medium font-inter'><Link>About us</Link></li>
          <li className='text-[#95C22B] text-sm text-center font-bold font-inter bg-[#FFFFFF] px-5 py-[10px] rounded-[35px] shadow-md'><Link>Contact us</Link></li>
        </ul>
        <Button variant='log' size='log'>Log in</Button>
      </nav>
    </header>
  )
}

export default Header
