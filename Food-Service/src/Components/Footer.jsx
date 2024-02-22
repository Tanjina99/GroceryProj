import React from 'react'
import { IoIosHome } from "react-icons/io";
import { MdPhoneIphone } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import "../Styles/components/_footer.scss"

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-wrapper'>
            <div className="column-section">
            <div className="information">
                <h3 className='about-heading'>About Us</h3>
                <p>Shipping and Delivery</p>
                <p>Customer Care</p>
                <p>Career</p>
            </div>
            </div>

            <div className="column-section">
            <div className="information">
            <h3 className='about-heading'>Information</h3>
            <p>New Products</p>
            <p>Top Seller</p>
            <p>Our Blog</p>
            <p>About Our shop</p>
          </div>
        </div>

        <div className="column-section">
          <div className="contact-info">
            <h3 className='about-heading'>Contact Us</h3>
            <div className="info">
              <span className='icon-ho mt-3 pr-5'><IoIosHome size={20} /></span>
              <p>Our Business address is 1063 <br />Freelon Street, Florida</p>
            </div>
          </div>

          <div className="contact-info">
            <div className="info">
              <span className='icon-ho mt-25 pr-5'><MdPhoneIphone size={17} /></span>
              <p>+123456789</p>
            </div>
          </div>

          <div className="contact-info">
            <div className="info">
              <span className='icon-ho mt-25 pr-5'><MdEmail size={18} /></span>
              <p>FreshMart@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <hr />
      </div>

      <footer className='end-sec'>
      <div className='footer-sec container'>
      <p>&copy; {new Date().getFullYear()} FreshMart Online - All Rights Reserved.</p>
      <div className='policy-sec'>
      <p className='condition'>Privacy Policy</p>
      <p className='condition'>Terms and Conditions</p>
      </div>
      </div>
    </footer>
    </div>
  )
}

export default Footer
