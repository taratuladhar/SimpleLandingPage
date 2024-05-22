import React from "react";
import ProfilePic from "../Assets/john-doe-image.png";
import {AiFillStar} from "react-icons/ai";

const Testimonial = () => {
    return ( 
        <div className="work-section-wrapper">
            <div className="work-section-top">
                <p className="primary-subheading">Testimonial</p>
                <h1 className="primary-heading">This is testimonial</h1>
                <p className="primary-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio adipisci odit inventore atque blanditiis. Dolorum aspernatur dolorem eius. Sed, est neque. Culpa officiis nihil placeat dolor! Et, totam. Dicta, eos?</p>
            </div>
            <div className="testimonial-section-bottom">
                <img src={ProfilePic} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque distinctio aliquid eligendi laborum! Natus amet ipsum eaque voluptatibus? Molestiae minima inventore totam error laboriosam architecto adipisci accusantium odio quasi! Excepturi.</p>
                <div className="testimonials-stars-container">
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>  
                </div>
                <h2>John Doe</h2>
            </div>
        </div>
     );
};

export default Testimonial
;