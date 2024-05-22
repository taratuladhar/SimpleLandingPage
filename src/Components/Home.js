import React from "react";
import Navbar from "./Navbar";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import {FiArrowRight} from "react-icons/fi";


const Home = () => {
    return ( 
        <div className="home-container">
        <Navbar/>
        <div className="home-banner-container">
            <div className="home-bannerImage-container">
                <img src={BannerBackground}alt="" />
            </div>
            <div className="home-text-section">
                <h1 className="primary-heading">
                    Hi ! This is Home Page
                </h1>
                <p className="primary-text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum sequi delectus nulla aliquam assumenda rem temporibus voluptates! Facilis quisquam ullam, molestias laborum, necessitatibus ipsum quia possimus itaque repellendus aspernatur culpa!

                </p>
                <button className="secondary-button">
                    Order now <FiArrowRight/>
                </button>
            </div>
            <div className="home-image-container">
                <img src={BannerImage} alt="" />
            </div>
        </div>
        </div>
     );
}
 
export default Home ;