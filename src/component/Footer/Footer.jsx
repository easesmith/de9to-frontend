import React from 'react'
import { Link } from 'react-router-dom'
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import De9toLogo from '../../assets/de9to-logo-qc7xun2b6cqji9b2etrrmn9ecu7aif9fr5oesz8pp6-1.png.png'

const Footer = () => {
  return (
    <footer className='bg-[#F8F8F8] w-full h-[222px]  flex flex-col justify-center px-16'>
      <div className='flex justify-between items-center border-b-[2px] border-[#DCDCDC] pb-6'>
      <Link to={'/'}>
            <div className="logo">
              <img src={De9toLogo} alt="" />
            </div>
          </Link>
        <ul className='flex justify-between items-center gap-10 list-none ml-0'>
          <Link to={'/about'} className='text-[#000000] text-xl font-medium font-poppins'><>About Us</></Link>
          <Link to={'/our-dentist'} className='text-[#000000] text-xl font-medium font-poppins'><>Our Dentist</></Link>
          <Link to={'/dental-camp'} className='text-[#000000] text-xl font-medium font-poppins'><>Denatl Camps</></Link>
          <Link to={'/blog'} className='text-[#000000] text-xl font-medium font-poppins'><>Press & Blog</></Link>
          <Link to={'/contact'} className='text-[#000000] text-xl font-medium font-poppins'><>Contact Us</></Link>
        </ul>
        <ul className='flex justify-between items-center gap-10 list-none ml-0'>
          <li className='text-[#95C22B] text-xl font-medium font-poppins'><Link><FiFacebook /></Link></li>
          <li className='text-[#95C22B] text-xl font-medium font-poppins'><Link><FaInstagram /></Link></li>
          <li className='text-[#95C22B] text-xl font-medium font-poppins'><Link><FaLinkedin /></Link></li>
          <li className='text-[#95C22B] text-xl font-medium font-poppins'><Link><AiOutlineYoutube /></Link></li>
        </ul>
      </div>
      <div className='flex justify-between items-center gap-10 pt-6'>
        <p className='text-[#000000] text-base font-normal font-poppins flex items-center gap-2'><span className='text-[28px] font-semibold'>&copy;</span>De9to 2024</p>
        <p className='text-[#000000] text-base font-normal font-poppins'>Privacy Policy</p>
      </div>
    </footer>
  )
}

export default Footer
