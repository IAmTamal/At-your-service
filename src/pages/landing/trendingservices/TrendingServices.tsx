import React from 'react'
import ServiceCard from '../../../components/servicecard/ServiceCard'
import "./TrendingServices.scss"
import serviceimg from "../../../assets/trending/mechanicservice.jpg"


const TrendingServices = () => {
    return (
        <>

            <div className="trending_parent">
                <h1>Our trending services</h1>
                <hr />

                <div className="trendingcards_parent">

                    <ServiceCard image={serviceimg} name="Car repairing" />
                    <ServiceCard image={serviceimg} name="Car repairing" />
                    <ServiceCard image={serviceimg} name="Car repairing" />
                    <ServiceCard image={serviceimg} name="Car repairing" />
                    <ServiceCard image={serviceimg} name="Car repairing" />

                </div>
            </div>

        </>
    )
}

export default TrendingServices