import React from 'react'
import ServiceCard from '../../../components/servicecard/ServiceCard'
import servicesData from './servicesData'
import "./Services.scss"

const Services = () => {
    return (
        <>

            <div className="pf_services_parent">
                <h1>Services I provide</h1>
                <hr />

                <div className="pf_services_container">

                    {servicesData.map((item, index) => {
                        return (
                            <ServiceCard key={index} name={item.name} image={item.image} />
                        )
                    })}

                </div>
            </div>

        </>
    )
}

export default Services