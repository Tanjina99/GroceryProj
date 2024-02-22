import React from 'react'
import { FaRegClock } from "react-icons/fa";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { RiTiktokLine } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "../Styles/components/_timeAndsocilas.scss"



const TimeandSocials = () => {
  return (
    <div className='First-section'>
      <div className='first-wrapper'>
        <div className='left-section'>
        <span className='clock mt-3 pr-5'><FaRegClock size={20}/></span>
        <p aria-label="Opening hours are from 8:30 AM to 10:30 PM">8:30 AM - 10:30 PM</p>
        <div className='phone-cls'>
        <span className='phone'><MdOutlinePhoneIphone size={20}/></span>
        <p>1234-56789</p>
        </div>
        </div>

        <div className='social-wrapper container'>
        <div className='right-section'>
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
        <span><FaFacebook /></span>
        </a>

        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
        <span><FaInstagramSquare /> </span>
        </a>

        <a href="https://www.tiktok.com/explore/" target="_blank" rel="noopener noreferrer">
        <span><RiTiktokLine /> </span>
        </a>

        <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer">
        <span><FaLinkedin /> </span>
        </a>

        <a href="mailto:your-email@example.com">
        <span><MdEmail /> </span>
        </a>
        </div>
        </div>
      </div>
      </div>
  )
}

export default TimeandSocials
