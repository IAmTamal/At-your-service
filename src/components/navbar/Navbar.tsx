import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import "./Navbar.scss"
import hamburger from "../../assets/navbar/hamburger.svg"
import { useBearStore } from '../../Store';
import Cookies from 'js-cookie';
import { fetchProfiledata } from '../../api/ProfileApi';

const Navbar = () => {
    const toggleAuthModal = useBearStore((state) => state.toggleAuthModal);
    const toggleAuthstate = useBearStore((state) => state.toggleAuthstate);
    const userprofile = useBearStore((state) => state.userprofile);
    const setuserProfile = useBearStore((state) => state.setuserProfile);
    const location = useLocation();

    async function getuserdata() {

        const username = Cookies.get("username");
        if (username !== "" && username !== undefined && username !== null) {
            const response = await fetchProfiledata(username);
            if (response?.status !== 201)
                return;

            setuserProfile({ userName: response?.data?.userName, slug: response?.data?.slug, profilepic: response?.data?.profilepic });
        }

    }

    useEffect(() => {
        if (Cookies.get("username") === "")
            return;

        getuserdata();
    }, [Cookies.get("username")])




    return (
        <>
            <nav className="navbar_main sticky-top">
                <h1 className="navbar_brand">Servezy</h1>

                <div className="navbar_links">
                    <Link
                        to={"/"}
                        className={location.pathname === "/" ? "active" : ""}
                    >
                        Home
                    </Link>

                    <Link to={"/services"} className={location.pathname === "/services" ? "active" : ""} >Services</Link>
                    <Link to={"/"}>About</Link>
                </div>

                {Cookies.get("username") ? <Link to={`/${userprofile.userName}`}>
                    <img className='navbar_profilepic' src={userprofile.profilepic} alt="" />
                </Link> : <div className="navbar_buttonsdiv">
                    <button
                        className="btn"
                        onClick={() => {
                            toggleAuthModal();
                            toggleAuthstate("login");
                            document.body.style.overflow = "hidden";
                        }}
                    >
                        Login
                    </button>
                    <button
                        className="btn"
                        onClick={() => {
                            toggleAuthModal();
                            toggleAuthstate("signup");
                            document.body.style.overflow = "hidden";
                        }}
                    >
                        Signup
                    </button>
                </div>}

                <img
                    src={hamburger}
                    alt="Navbar ham icon"
                    className="navbar_hamicon"
                />
            </nav>
        </>
    );
}

export default Navbar