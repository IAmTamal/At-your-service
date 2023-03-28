import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper";
import Testimonialcard from '../../../components/testimonialcard/Testimonialcard';
import "./Testimonials.scss"


const Testimonials = () => {
    return (
        <>
            <div className="testimonials_parent">

                <h1>What does our users say ?</h1>
                <hr />

                {window.innerWidth > 1200 ? <Swiper
                    slidesPerView={2}
                    spaceBetween={40}
                    autoplay={{
                        delay: 2500,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination, Autoplay]}
                    className="mySwiper"
                >
                    <SwiperSlide> <Testimonialcard /> </SwiperSlide>
                    <SwiperSlide> <Testimonialcard /> </SwiperSlide>
                    <SwiperSlide> <Testimonialcard /> </SwiperSlide>
                    <SwiperSlide> <Testimonialcard /> </SwiperSlide>
                    <SwiperSlide> <Testimonialcard /> </SwiperSlide>
                    <SwiperSlide> <Testimonialcard /> </SwiperSlide>
                    <SwiperSlide> <Testimonialcard /> </SwiperSlide>
                    <SwiperSlide> <Testimonialcard /> </SwiperSlide>
                    <SwiperSlide> <Testimonialcard /> </SwiperSlide>



                </Swiper> : <Swiper
                    slidesPerView={1}
                    spaceBetween={40}
                    autoplay={{
                        delay: 2500,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination, Autoplay]}
                    className="mySwiper"
                >
                    <SwiperSlide> <Testimonialcard /> </SwiperSlide>
                    <SwiperSlide> <Testimonialcard /> </SwiperSlide>
                    <SwiperSlide> <Testimonialcard /> </SwiperSlide>
                    <SwiperSlide> <Testimonialcard /> </SwiperSlide>
                    <SwiperSlide> <Testimonialcard /> </SwiperSlide>
                    <SwiperSlide> <Testimonialcard /> </SwiperSlide>
                    <SwiperSlide> <Testimonialcard /> </SwiperSlide>
                    <SwiperSlide> <Testimonialcard /> </SwiperSlide>
                    <SwiperSlide> <Testimonialcard /> </SwiperSlide>



                </Swiper>}




                <br />
                <br />
                <br />
            </div >

        </>
    )
}

export default Testimonials