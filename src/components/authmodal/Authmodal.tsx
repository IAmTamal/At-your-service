import React from 'react'
import "./Authmodal.scss"
import authbanner from "../../assets/authmodal/authbanner.png"
import { useBearStore } from '../../Store';

const Authmodal = () => {
    const toggleAuthModal = useBearStore((state) => state.toggleAuthModal);
    const toggleAuthstate = useBearStore((state) => state.toggleAuthstate);
    const authstate = useBearStore((state) => state.authstate);
    return (
        <>

            <div className="authmodal_parent">
                <div className="authmodal_sub">
                    <div className="auth_btndiv">
                        <button
                            onClick={() => {

                                document.body.style.overflow = "auto";
                                toggleAuthModal();

                            }}
                        >
                            X
                        </button>
                    </div>

                    <div className="authmodalsub_left">

                        <img src={authbanner} alt="" />
                    </div>

                    <div className="authmodalsub_right" id='authmodalsub_right'>
                        <form>

                            {authstate === "login" ? <h1>Login</h1> : <h1>Signup</h1>}

                            {authstate === "signup" &&
                                <div className="namediv inputdiv">
                                    <div className="">
                                        <label htmlFor="firstname" className="form-label">First name</label>
                                        <input type="text" className="form-control" id="firstname" aria-describedby="emailHelp" />
                                    </div>
                                    <div className="">
                                        <label htmlFor="last name" className="form-label">Last name</label>
                                        <input type="text" className="form-control" id="last name" />
                                    </div>
                                </div>}

                            <div className=" inputdiv">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>

                            {authstate === "signup" &&
                                <div className=" inputdiv">
                                    <label htmlFor="username" className="form-label">Username</label>
                                    <input type="text" className="form-control" id="username" aria-describedby="emailHelp" />

                                </div>}

                            <div className=" inputdiv">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" />
                            </div>

                            <button type="submit" className="btn btn-primary">
                                {authstate === "login" ? "Login" : "Signup"}
                            </button>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Authmodal