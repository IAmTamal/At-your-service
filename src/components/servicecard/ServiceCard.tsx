import React from 'react'

import "./ServiceCard.scss"

export interface Props {
    image: string;
    name: string;
}



const ServiceCard = (props: Props) => {
    return (
        <>

            <div className="service_card">
                <img src={props.image} alt="" />

                <p>{props.name}</p>
            </div>

        </>
    )
}

export default ServiceCard