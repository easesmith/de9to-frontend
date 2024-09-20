import React from 'react'
import { Link } from 'react-router-dom'
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className='bg-[#F8F8F8] w-full h-[222px]  flex flex-col justify-center px-16'>
      <div className='flex justify-between items-center border-b-[2px] border-[#DCDCDC] pb-6'>
        <div className="logo text-[#95C22B] text-4xl font-medium">
          LOGO
        </div>
        <ul className='flex justify-between items-center gap-10'>
          <li className='text-[#000000] text-xl font-medium font-poppins'><Link>About Us</Link></li>
          <li className='text-[#000000] text-xl font-medium font-poppins'><Link>Our Dentist</Link></li>
          <li className='text-[#000000] text-xl font-medium font-poppins'><Link>Denatl Camps</Link></li>
          <li className='text-[#000000] text-xl font-medium font-poppins'><Link>Press & Blog</Link></li>
          <li className='text-[#000000] text-xl font-medium font-poppins'><Link>Contact Us</Link></li>
        </ul>
        <ul className='flex justify-between items-center gap-10'>
          <li className='text-[#95C22B] text-xl font-medium font-poppins'><Link><FiFacebook /></Link></li>
          <li className='text-[#95C22B] text-xl font-medium font-poppins'><Link><FaInstagram /></Link></li>
          <li className='text-[#95C22B] text-xl font-medium font-poppins'><Link><FaLinkedin /></Link></li>
          <li className='text-[#95C22B] text-xl font-medium font-poppins'><Link><AiOutlineYoutube /></Link></li>
        </ul>
      </div>
      <div className='flex justify-between items-center gap-10 pt-6'>
        <p className='text-[#000000] text-base font-normal font-poppins flex items-center gap-2'><span className='text-[28px] font-semibold'>&copy;</span>De9to 2023</p>
        <p className='text-[#000000] text-base font-normal font-poppins'>Privacy Policy</p>
      </div>
    </footer>
  )
}

export default Footer
