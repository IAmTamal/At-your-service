import React from "react";
import "./Landing.scss";
import services from "../../assets/hero/services.svg";
import services2 from "../../assets/hero/services_mobile.svg";

const Landing = () => {
    return (
        <>
            <div className="landing_main">
                <div className="landing_left">

                    <div className="landing_heading">
                        <h1>
                            <span>Unlock effortless</span>  <br /> <span>services with</span> <br /><span> servezy.</span>
                        </h1>
                    </div>

                    <p>
                        Serving your needs with ease. We provide affordable, trusted
                        services with our innovative platform.
                    </p>

                    <div className="button_div">
                        <button className="btn ">Explore services</button>
                        <p>Why Servezy?</p>
                    </div>
                </div>

                <div className="landing_right">
                    <img src={services} alt="" />
                    {/*    <img src={services2} alt="" /> */}
                </div>
            </div>
        </>
    );
};

export default Landing;
