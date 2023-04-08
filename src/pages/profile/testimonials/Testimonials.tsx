import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper";
import Testimonialcard from '../../../components/testimonialcard/Testimonialcard';
import testimonialData from './testimonialData';
import "./Testimonials.scss"


const Testimonials = () => {
    return (
        <>

            <div className="pf_testimonials_parent">
                <h1>Hear from my clients</h1>
                <hr />

                {window.innerWidth > 1200 ? <Swiper
                    slidesPerView={2}
                    spaceBetween={40}
                    autoplay={{
                        delay: 4500,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination, Autoplay]}
                    className="mySwiper"
                >
                    {
                        testimonialData.map((testimonial, index) => {
                            return (
                                <SwiperSlide key={index}> <Testimonialcard testimonial={testimonial} /> </SwiperSlide>
                            )
                        })
                    }
                </Swiper> : <Swiper
                    slidesPerView={1}
                    spaceBetween={40}
                    autoplay={{
                        delay: 4500,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination, Autoplay]}
                    className="mySwiper"
                >
                    {
                        testimonialData.map((testimonial, index) => {
                            return (
                                <SwiperSlide key={index}> <Testimonialcard testimonial={testimonial} /> </SwiperSlide>
                            )
                        })
                    }
                </Swiper>}
            </div>

        </>
    )
}

export default Testimonials