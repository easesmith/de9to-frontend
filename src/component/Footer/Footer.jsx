import React from 'react'
import { Link } from 'react-router-dom'
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import De9toLogo from '../../assets/de9to-logo-1.png'
import { Button } from '@/components/ui/button';
import { SlSocialFacebook } from "react-icons/sl";

const Footer = () => {
  return (
    <footer className='bg-[#717171] text-white w-full pt-10 pb-5 flex flex-col justify-center'>
      <div className='border-b-2 border-[#7B7E86]'>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 pb-20 px-5 max-w-[1380px] mx-auto w-full">
          <div>
            <h2 className='max-w-[380px] text-4xl sm:text-5xl leading-tight  font-roboto font-bold'>A one stop Dental Solution</h2>
            <p className="font-inter text-sm mt-5">
              De9to is a dental aggregator platform committed to revolutionising the dental industry. We facilitate the convenience of online appointment scheduling for patients and we also partner with dentists, organise dental camps for community health, and promote preventive care.
            </p>
            <div className="bg-[#E5E7EB] flex items-center h-12 mt-5">
              <input type="text" placeholder='Enter your email Address' className='w-full text-base focus:outline-none font-roboto h-full bg-transparent text-black px-2' />
              <div className="p-1 h-full">
                <button className="font-inter text-black h-full bg-white w-auto md:w-44 px-4 active:scale-105 hover:scale-95 transition-all duration-200">Subscribe</button>
              </div>
            </div>
            <div className="flex items-center gap-3 mt-5">
              <Link to="#" className='active:scale-105 hover:scale-95 transition-all duration-200'>
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="15" cy="15" r="15" fill="white" />
                  <path d="M20.9091 5H17.9339C16.6188 5 15.3575 5.52678 14.4276 6.46447C13.4976 7.40215 12.9752 8.67392 12.9752 10V13H10V17H12.9752V25H16.9421V17H19.9174L20.9091 13H16.9421V10C16.9421 9.73478 17.0466 9.48043 17.2326 9.29289C17.4186 9.10536 17.6709 9 17.9339 9H20.9091V5Z" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </Link>
              <Link to="#" className='active:scale-105 hover:scale-95 transition-all duration-200'>
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="15" cy="15" r="15" fill="white" />
                  <path d="M23.75 6.25L12.5 17.5" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M23.75 6.25L16.75 26.25L12.75 17.25L3.75 13.25L23.75 6.25Z" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </Link>
              <Link to="#" className='active:scale-105 hover:scale-95 transition-all duration-200'>
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="15" cy="15" r="15" fill="white" />
                  <path d="M20.0215 5.13184C22.7737 5.27154 24.9617 7.54714 24.9619 10.334V19.7529C24.9619 22.63 22.63 24.9619 19.7529 24.9619H10.334C7.54714 24.9617 5.27154 22.7737 5.13184 20.0215L5.125 19.7529V10.334C5.1252 7.45723 7.45723 5.1252 10.334 5.125H19.7529L20.0215 5.13184ZM10.334 6.125C8.00951 6.1252 6.1252 8.00951 6.125 10.334V19.7529L6.13086 19.9697C6.24364 22.1937 8.08207 23.9617 10.334 23.9619H19.7529C22.0777 23.9619 23.9619 22.0777 23.9619 19.7529V10.334C23.9617 8.08207 22.1937 6.24364 19.9697 6.13086L19.7529 6.125H10.334ZM13.1191 11.2148C13.9158 10.8015 14.8231 10.6496 15.7109 10.7812L16.0469 10.8457C16.8229 11.0253 17.5361 11.4189 18.1025 11.9854C18.7498 12.6327 19.1724 13.4714 19.3066 14.377L19.3428 14.7109C19.3962 15.49 19.2347 16.2718 18.873 16.9688C18.4597 17.7652 17.8053 18.4109 17.0039 18.8145C16.2023 19.2179 15.2933 19.3583 14.4072 19.2158C13.5211 19.0732 12.702 18.6551 12.0674 18.0205C11.4327 17.3858 11.0147 16.5668 10.8721 15.6807C10.7295 14.7945 10.8699 13.8857 11.2734 13.084C11.677 12.2825 12.3226 11.6282 13.1191 11.2148ZM15.5645 11.7705C14.8847 11.6697 14.19 11.7861 13.5801 12.1025C12.9701 12.4191 12.475 12.9203 12.166 13.5342C11.8573 14.1478 11.7494 14.8432 11.8584 15.5215C11.9676 16.2 12.2885 16.8275 12.7744 17.3135C13.2603 17.7992 13.8872 18.1193 14.5654 18.2285C15.2438 18.3376 15.94 18.2307 16.5537 17.9219C17.1675 17.6129 17.6688 17.1178 17.9854 16.5078C18.2622 15.9742 18.3856 15.3758 18.3447 14.7793L18.3174 14.5234C18.2146 13.8301 17.8911 13.188 17.3955 12.6924C16.9617 12.2586 16.4155 11.9568 15.8213 11.8193L15.5645 11.7705ZM20.335 9.37305C20.5629 9.41954 20.7343 9.62161 20.7344 9.86328C20.7344 10.105 20.563 10.307 20.335 10.3535L20.2344 10.3633H20.2236C19.9476 10.3631 19.7236 10.1393 19.7236 9.86328C19.7237 9.58732 19.9477 9.36346 20.2236 9.36328H20.2344L20.335 9.37305Z" fill="black" />
                </svg>
              </Link>
              <Link to="#" className='active:scale-105 hover:scale-95 transition-all duration-200'>
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="15" cy="15" r="15" fill="white" />
                  <path d="M8.75 8.125C8.75 7.2962 9.07924 6.50134 9.66529 5.91529C10.2513 5.32924 11.0462 5 11.875 5H15V11.25H11.875C11.0462 11.25 10.2513 10.9208 9.66529 10.3347C9.07924 9.74866 8.75 8.9538 8.75 8.125Z" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M15 5H18.125C18.5354 5 18.9417 5.08083 19.3209 5.23788C19.7 5.39492 20.0445 5.62511 20.3347 5.91529C20.6249 6.20547 20.8551 6.54997 21.0121 6.92911C21.1692 7.30826 21.25 7.71462 21.25 8.125C21.25 8.53538 21.1692 8.94174 21.0121 9.32089C20.8551 9.70003 20.6249 10.0445 20.3347 10.3347C20.0445 10.6249 19.7 10.8551 19.3209 11.0121C18.9417 11.1692 18.5354 11.25 18.125 11.25H15V5Z" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M15 14.375C15 13.9646 15.0808 13.5583 15.2379 13.1791C15.3949 12.8 15.6251 12.4555 15.9153 12.1653C16.2055 11.8751 16.55 11.6449 16.9291 11.4879C17.3083 11.3308 17.7146 11.25 18.125 11.25C18.5354 11.25 18.9417 11.3308 19.3209 11.4879C19.7 11.6449 20.0445 11.8751 20.3347 12.1653C20.6249 12.4555 20.8551 12.8 21.0121 13.1791C21.1692 13.5583 21.25 13.9646 21.25 14.375C21.25 14.7854 21.1692 15.1917 21.0121 15.5709C20.8551 15.95 20.6249 16.2945 20.3347 16.5847C20.0445 16.8749 19.7 17.1051 19.3209 17.2621C18.9417 17.4192 18.5354 17.5 18.125 17.5C17.7146 17.5 17.3083 17.4192 16.9291 17.2621C16.55 17.1051 16.2055 16.8749 15.9153 16.5847C15.6251 16.2945 15.3949 15.95 15.2379 15.5709C15.0808 15.1917 15 14.7854 15 14.375V14.375Z" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M8.75 20.625C8.75 19.7962 9.07924 19.0013 9.66529 18.4153C10.2513 17.8292 11.0462 17.5 11.875 17.5H15V20.625C15 21.4538 14.6708 22.2487 14.0847 22.8347C13.4987 23.4208 12.7038 23.75 11.875 23.75C11.0462 23.75 10.2513 23.4208 9.66529 22.8347C9.07924 22.2487 8.75 21.4538 8.75 20.625Z" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M8.75 14.375C8.75 13.5462 9.07924 12.7513 9.66529 12.1653C10.2513 11.5792 11.0462 11.25 11.875 11.25H15V17.5H11.875C11.0462 17.5 10.2513 17.1708 9.66529 16.5847C9.07924 15.9987 8.75 15.2038 8.75 14.375Z" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </Link>
            </div>
          </div>
          <div className="flex sm:justify-end">
            <div>
              <h2 className='font-inter font-bold text-lg'>Company</h2>
              <ul className='flex flex-col gap-2 ml-0 mt-5'>
                <Link to={'/about'} className='hover:underline text-sm font-poppins'><>About Us</></Link>
                <Link to={'/our-dentist'} className='hover:underline text-sm font-poppins'><>Our Dentist</></Link>
                <Link to={'/dental-camp'} className='hover:underline text-sm font-poppins'><>Dental Camps</></Link>
                <Link to={'/blog'} className='hover:underline text-sm font-poppins'><>Press & Blog</></Link>
                <Link to={'/contact'} className='hover:underline text-sm font-poppins'><>Contact Us</></Link>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1300px] mx-auto w-full mt-3 px-5">
        <div className="flex justify-between items-end sm:items-center">
          <div className="grid grid-cols-1 sm:flex gap-x-8 gap-y-2 sm:items-center sm:flex-wrap">
            <Link to="#" className='hover:underline text-sm font-inter'>
              Privacy Policy
            </Link>
            <Link to="#" className='hover:underline text-sm font-inter'>
              Terms of Use
            </Link>
            <Link to="#" className='hover:underline text-sm font-inter'>
              Sales and Refunds
            </Link>
          </div>
          <Button asChild variant="secondary" className="rounded-3xl w-36 h-9 font-inter">
            <Link to="/contact" className='text-sm font-inter'>
              Contact Us
            </Link>
          </Button>
        </div>
        <p className="text-center mt-4 text-xs">© {new Date().getFullYear()} All Rights Reserved</p>
      </div>
    </footer>
  )
}

export default Footer
