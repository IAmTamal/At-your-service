import React, { useState } from 'react'
import "./Authmodal.scss"
import authbanner from "../../assets/authmodal/authbanner.png"
import { useBearStore } from '../../Store';
import { LoginUser, RegisterUser } from '../../api/AuthApi'
import { showErrorToast, showSuccessToast } from '../../utils/toasts';

const Authmodal = () => {
    const toggleAuthModal = useBearStore((state) => state.toggleAuthModal);
    const toggleAuthstate = useBearStore((state) => state.toggleAuthstate);
    const authstate = useBearStore((state) => state.authstate);

    const [creds, setcreds] = useState({ firstName: "", lastName: "", userName: "", email: "", password: "" });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setcreds({ ...creds, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (authstate === "login") {
            const response = await LoginUser(creds);
            if (response?.status !== 201) {
                showErrorToast(response?.data?.message);
            } else {
                showSuccessToast(response?.data?.message);
                setcreds({ firstName: "", lastName: "", userName: "", email: "", password: "" });
                toggleAuthModal();
                document.body.style.overflow = "auto";
            }
        } else {
            const response = await RegisterUser(creds);

            if (response?.status !== 201) {
                showErrorToast(response?.data?.message);
            } else {
                showSuccessToast(response?.data?.message);
                setcreds({ firstName: "", lastName: "", userName: "", email: "", password: "" });
                toggleAuthModal();
                document.body.style.overflow = "auto";
            }
        }
    };


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

                    <div className="authmodalsub_right" id="authmodalsub_right">
                        <form onSubmit={handleSubmit}>
                            {authstate === "login" ? <h1>Login</h1> : <h1>Signup</h1>}

                            {authstate === "signup" && (
                                <div className="namediv inputdiv">
                                    <div className="">
                                        <label htmlFor="firstname" className="form-label">
                                            First name
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="firstname"
                                            aria-describedby="emailHelp"
                                            name='firstName'
                                            value={creds.firstName}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="">
                                        <label htmlFor="last name" className="form-label">
                                            Last name
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="last name"
                                            name='lastName'
                                            value={creds.lastName}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                            )}

                            <div className=" inputdiv">
                                <label htmlFor="exampleInputEmail1" className="form-label">
                                    Email address
                                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                    name="email"
                                    value={creds.email}
                                    onChange={handleChange}
                                />
                                <div id="emailHelp" className="form-text">
                                    We'll never share your email with anyone else.
                                </div>
                            </div>

                            {authstate === "signup" && (
                                <div className=" inputdiv">
                                    <label htmlFor="username" className="form-label">
                                        Username
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="username"
                                        aria-describedby="emailHelp"
                                        name="userName"
                                        value={creds.userName}
                                        onChange={handleChange}
                                    />
                                </div>
                            )}

                            <div className=" inputdiv">
                                <label htmlFor="exampleInputPassword1" className="form-label">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="exampleInputPassword1"
                                    name="password"
                                    value={creds.password}
                                    onChange={handleChange}
                                />
                            </div>

                            {authstate !== "login" ? (
                                <p className="alreadytext">
                                    Already have an account ?{" "}
                                    <span
                                        onClick={() => {
                                            toggleAuthstate("login");
                                            setcreds({ firstName: "", lastName: "", userName: "", email: "", password: "" });
                                        }}
                                    >
                                        Login
                                    </span>
                                </p>
                            ) : (
                                <p className="alreadytext">
                                    Don't have an account ?{" "}
                                    <span
                                        onClick={() => {
                                            toggleAuthstate("signup");
                                            setcreds({ firstName: "", lastName: "", userName: "", email: "", password: "" });
                                        }}
                                    >
                                        Signup
                                    </span>
                                </p>
                            )}

                            <button type="submit" className="btn btn-primary"  >
                                {authstate === "login" ? "Login" : "Signup"}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Authmodal