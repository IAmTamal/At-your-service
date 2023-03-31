import React from 'react'
import "./Testimonialcard.scss"
import image from "../../assets/testimonials/riddhi.jpeg"

const Testimonialcard = () => {
    return (
        <>

            <div className="testimonialcard_main">
                <div className="testimonialcard_parent">

                    <p className='testimonial_text'>
                        I've been using Servezy's cleaning services for over a year now and I couldn't be happier. Their attention to detail is unmatched and my house always looks and smells amazing after they're done!
                    </p>

                    <div className="testimonial_imagediv">
                        <img src={image} alt="" />

                        <p>Hitesh Das</p>
                    </div>

                </div>
            </div>


        </>
    )
}

export default Testimonialcard