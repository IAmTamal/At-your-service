import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import "./Navbar.scss"
import hamburger from "../../assets/navbar/hamburger.svg"
import { useBearStore } from '../../Store';

const Navbar = () => {
    const toggleAuthModal = useBearStore((state) => state.toggleAuthModal);
    const toggleAuthstate = useBearStore((state) => state.toggleAuthstate);
    const location = useLocation();



    return (
        <>
            <div className="navbar_main">
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

                <div className="navbar_buttonsdiv">
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
                </div>

                <img
                    src={hamburger}
                    alt="Navbar ham icon"
                    className="navbar_hamicon"
                />
            </div>
        </>
    );
}

export default Navbar