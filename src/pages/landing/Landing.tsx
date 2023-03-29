import React from "react";
import "./Landing.scss";
import services from "../../assets/hero/services.png";
import TrendingServices from "./trendingservices/TrendingServices";
import Testimonials from "./testimonials/Testimonials";
import Howitworks from "./howitworks/Howitworks";
import { Link } from "react-router-dom";


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
                        <Link to={"/services"}>
                            <button className="btn ">Explore services</button>
                        </Link>
                        <p>Why Servezy?</p>
                    </div>
                </div>

                <div className="landing_right">
                    <img src={services} alt="" />
                </div>
            </div>

            <Howitworks />

            <TrendingServices />
            <Testimonials />

        </>
    );
};

export default Landing;
