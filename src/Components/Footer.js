import React from "react";
import Logo from "../Assets/Logo.svg";
import {BsTwitter} from "react-icons/bs";
import {SiLinkedin} from "react-icons/si";
import {BsYoutube} from "react-icons/bs";
import {FaFacebook} from "react-icons/fa";


const Footer = () => {
    return ( 
        <div className="footer-wrapper">
            <div className="footer-section-one">
                <div className="footer-logo-container">
                   <span>SHOP HOP</span>
                </div>
                <div className="footer-icons">
                    <BsTwitter/>
                    <SiLinkedin/>
                    <BsYoutube/>
                    <FaFacebook/>
                </div>
            </div>
            <div className="footer-section-two">
                <div className="footer-section-columns">
                    <span>Quality</span>
                    <span>Help</span>
                    <span>Share</span>
                    <span>Careers</span>
                    <span>Testimonials</span>
                    <span>Work</span>
                </div>
                <div className="footer-section-columns">
                    <span>9876543210</span>
                    <span>google@gmail.com</span>
                    <span>microsoft@outlook.com</span>
                    <span>shophop@gmail.com</span>
                </div>
                <div className="footer-section-columns">
                    <span>Terms and conditions</span>
                    <span>Privacy Policy</span>
                </div>
            </div>
        </div>
     );
}
 
export default Footer;