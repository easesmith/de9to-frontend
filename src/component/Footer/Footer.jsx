import React from 'react'
import { Link } from 'react-router-dom'
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import De9toLogo from '../../assets/de9to-logo-qc7xun2b6cqji9b2etrrmn9ecu7aif9fr5oesz8pp6-1.png.png'

const Footer = () => {
  return (
    <footer className='bg-[#F8F8F8] w-full py-10 flex flex-col justify-center px-16 max-[830px]:px-6'>
      <div className='flex justify-between flex-wrap gap-5 items-center border-b-[2px] border-[#DCDCDC] pb-6'>
      <Link to={'/'}>
            <div className="logo">
              <img src={De9toLogo} alt="" />
            </div>
          </Link>
        <ul className='flex justify-between max-[830px]:gap-y-2 flex-wrap items-center gap-10 list-none ml-0'>
          <Link to={'/about'} className='text-[#000000] text-lg font-medium font-poppins'><>About Us</></Link>
          <Link to={'/our-dentist'} className='text-[#000000] text-lg font-medium font-poppins'><>Our Dentist</></Link>
          <Link to={'/dental-camp'} className='text-[#000000] text-lg font-medium font-poppins'><>Denatl Camps</></Link>
          <Link to={'/blog'} className='text-[#000000] text-lg font-medium font-poppins'><>Press & Blog</></Link>
          <Link to={'/contact'} className='text-[#000000] text-lg font-medium font-poppins'><>Contact Us</></Link>
        </ul>
        <ul className='flex justify-between items-center max-[427px]:hidden gap-10 list-none ml-0'>
          <li className='text-[#95C22B] text-xl max-[427px]:text-sm font-medium font-poppins'><Link><FiFacebook /></Link></li>
          <li className='text-[#95C22B] text-xl max-[427px]:text-sm font-medium font-poppins'><Link><FaInstagram /></Link></li>
          <li className='text-[#95C22B] text-xl max-[427px]:text-sm font-medium font-poppins'><Link><FaLinkedin /></Link></li>
          <li className='text-[#95C22B] text-xl max-[427px]:text-sm font-medium font-poppins'><Link><AiOutlineYoutube /></Link></li>
        </ul>
      </div>
      <ul className='flex gap-10 items-center mt-5 min-[427px]:hidden list-none ml-0'>
          <li className='text-[#95C22B] text-xl max-[427px]:text-sm font-medium font-poppins'><Link><FiFacebook size={22} /></Link></li>
          <li className='text-[#95C22B] text-xl max-[427px]:text-sm font-medium font-poppins'><Link><FaInstagram size={22}/></Link></li>
          <li className='text-[#95C22B] text-xl max-[427px]:text-sm font-medium font-poppins'><Link><FaLinkedin size={22} /></Link></li>
          <li className='text-[#95C22B] text-xl max-[427px]:text-sm font-medium font-poppins'><Link><AiOutlineYoutube size={22} /></Link></li>
        </ul>
      <div className='flex justify-between min-[427px]:items-center max-[427px]:gap-3 gap-10 pt-6 max-[427px]:flex-col-reverse'>
        <p className='text-[#000000] text-base max-[427px]:text-sm font-normal font-poppins flex items-center gap-2'><span className='text-[28px] font-semibold'>&copy;</span>De9to 2024</p>
        <p className='text-[#000000] text-base max-[427px]:text-sm font-normal font-poppins'>Privacy Policy</p>
      </div>
    </footer>
  )
}

export default Footer
