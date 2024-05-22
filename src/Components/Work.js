import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";


const Work = () => {
    
    const workInfoData=[
        {
            image:PickMeals,
            title: "Pick Meals",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur asperiores molestias illo quo reprehenderit a vitae sunt possimus, beatae ut labore veniam non quis? Eos culpa natus placeat dignissimos id."
        },
        {
            image:ChooseMeals,
            title: "Choose How often",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur asperiores molestias illo quo reprehenderit a vitae sunt possimus, beatae ut labore veniam non quis? Eos culpa natus placeat dignissimos id."
        },
        {
            image:DeliveryMeals,
            title: "Fast deliveries",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur asperiores molestias illo quo reprehenderit a vitae sunt possimus, beatae ut labore veniam non quis? Eos culpa natus placeat dignissimos id."
        },

    ];
    return ( 
     <div>
        <div className="work-section-wrapper">
            <div className="work-section-top">
                <p className="primary-subheading">Work</p>
                <h1 className="primary-heading"> This is Work page</h1>
                <p className="primary-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti nobis, quo, atque dolorem impedit ab, eos amet cumque consequuntur quas dicta rem optio? Ipsam eos beatae neque fuga dolorem nesciunt.</p>
            </div>
            <div className="work-section-bottom">
                {
                    workInfoData.map((data) =>(
                        <div className="work-section-info">
                            <div className="info-boxes-img-container">
                                <img src={data.image} alt="" />
                            </div>
                            <h2>{data.title}</h2>
                            <p>{data.text}</p>

                        </div>
                    )
                )}
            </div>
        </div>
     </div>
     );
}
 
export default Work;