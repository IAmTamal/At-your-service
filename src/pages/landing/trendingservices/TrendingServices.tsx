import React from 'react'
import ServiceCard from '../../../components/servicecard/ServiceCard'
import "./TrendingServices.scss"
import serviceimg from "../../../assets/trending/mechanicservice.jpg"
import renovation from "../../../assets/trending/renovation.jpeg"
import cleaningservice from "../../../assets/trending/cleaningservice.jpeg"
import mechanicservice from "../../../assets/trending/mechanicservice.jpg"
import hairremoval from "../../../assets/trending/hairremoval.jpg"
import { Link } from 'react-router-dom'


const TrendingServices = () => {
    return (
        <>

            <div className="trending_parent">
                <h1>Our trending services</h1>
                <hr />

                <div className="trendingcards_parent">

                    <ServiceCard image={serviceimg} name="Car repairing" />
                    <ServiceCard image={renovation} name="Renovations" />
                    <ServiceCard image={cleaningservice} name="Cleaning" />
                    <ServiceCard image={mechanicservice} name="Mechanics" />
                    <ServiceCard image={hairremoval} name="Hair removal" />

                </div>

                <div className="buttons_div">


                    <Link to={"/services"}>
                        <button className="btn">
                            Explore more services
                        </button>
                    </Link>
                </div>
            </div>

        </>
    )
}

export default TrendingServices