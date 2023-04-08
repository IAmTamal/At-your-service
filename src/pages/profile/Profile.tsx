import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { fetchProfiledata } from "../../api/ProfileApi";
import "./Profile.scss";
import Services from "./services/Services";
import Testimonials from "./testimonials/Testimonials";
import Loading from "../../components/loading/Loading";
import Cookies from "js-cookie";

const Profile = () => {
    const params = useParams();

    const {
        data: profiledata,
        error,
        isLoading,
    } = useSWR("profile-data", () => fetchProfiledata(params.username));

    if (isLoading) return <Loading />;

    return (
        <>
            <div className="profile_parent">
                <div className="profile_hero">
                    <img
                        src="https://pbs.twimg.com/profile_images/1639235422932074499/qiGUX-3O_400x400.png"
                        alt=""
                    />

                    <div className="hero_contentdiv">
                        <h1>
                            {profiledata?.data?.firstName + " " + profiledata?.data?.lastName}
                        </h1>
                        <p>
                            Need professional, yet affordable cleaning services to clean up
                            your yard ? <br /> Hire me !
                        </p>

                        {profiledata?.data?.userName === Cookies.get("username") ? (
                            <button className="btn">Add a service</button>
                        ) : (
                            <button className="btn">Drop a mail</button>
                        )}
                    </div>
                </div>

                <Services />
                <Testimonials />
            </div>
        </>
    );
};

export default Profile;
