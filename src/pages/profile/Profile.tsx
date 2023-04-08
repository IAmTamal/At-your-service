import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import useSWR from 'swr';
import { fetchProfiledata } from '../../api/ProfileApi';
import "./Profile.scss";
import Services from './services/Services';
import Testimonials from './testimonials/Testimonials';



const Profile = () => {

    const params = useParams();
    const { data: profiledata, error } = useSWR('profile-data', fetchProfiledata);



    return (
        <>

            <div className="profile_parent">

                <div className="profile_hero">
                    {/* <img src={profiledata?.data.profilepic} alt="" /> */}
                    <img src="https://pbs.twimg.com/profile_images/1639235422932074499/qiGUX-3O_400x400.png" alt="" />

                    <div className="hero_contentdiv">
                        <h1>{profiledata?.data.firstName + " " + profiledata?.data.lastName}</h1>
                        <p>Need professional, yet affordable cleaning services to clean up your yard ? <br /> Hire me !</p>

                        <button className='btn'>Drop a mail</button>

                        {/*  <div className="socialsdiv">
                            <a href={profiledata?.data.facebook} target="_blank" rel="noreferrer"><i className="fab fa-facebook-f"></i></a>
                        </div> */}
                    </div>
                </div>

                <Services />

                <Testimonials />




            </div>

        </>
    )
}

export default Profile