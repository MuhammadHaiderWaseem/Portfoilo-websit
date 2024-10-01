import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";


const Contact = () => {
  return (
    <>
      <div className="container contact" id='contact' >
        <h1>CONTACT ME</h1>
        <div className="contact-icon"
         data-aos="zoom-in"
      data-aos-duration="1000"
        >
          <a href="https:/instagram.com" target="_blank" className="items">
            <FaInstagram className='icon' />
          </a>
          <a href="https:/facebook.com" target="_blank" className="items">
            <CiFacebook className='icon' />
          </a>
          <a href="https://www.linkedin.com" target="_blank" className="items">
            <CiLinkedin className='icon' />
          </a>
          <a href="https://www.twitter.com" target="_blank" className="items">
            <FaXTwitter className='icon' />
          </a>
          <a href="" target="_blank" className="items">
            <FaGithubSquare className='icon' />
          </a>
          <a href="mailto:chhaiderwaseem@gmail.com" target="_blank" className="items">
            <SiGmail className='icon' />
          </a>
        </div>
      </div>
    </>
  )
}

export default Contact