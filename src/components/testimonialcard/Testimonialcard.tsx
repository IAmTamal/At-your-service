import React from 'react'
import "./Testimonialcard.scss"

interface TestimonialcardProps {
    testimonial: {
        name: string,
        linkedin: string,
        content: string,
        profilepic: string
    }
}

const Testimonialcard = ({ testimonial }: TestimonialcardProps) => {
    return (
        <>

            <div className="testimonialcard_main">
                <div className="testimonialcard_parent">

                    <p className='testimonial_text'>
                        {testimonial.content}
                    </p>

                    <div className="testimonial_imagediv">
                        <img src={testimonial.profilepic} alt="" />

                        <p>{testimonial.name}</p>
                    </div>

                </div>
            </div>


        </>
    )
}

export default Testimonialcard