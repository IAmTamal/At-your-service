import React from 'react'
import addservicebanner from "../../../assets/authmodal/authbanner.png"
import "./Addmodal.scss"

interface AddmodalProps {
    modalisOpen: boolean;
    setmodalisOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Addmodal = ({ modalisOpen, setmodalisOpen }: AddmodalProps) => {
    return (
        <div className="addservicemodal_parent">
            <div className="addservicemodal_sub">
                <div className="addservice_btndiv">
                    <button
                        onClick={() => {
                            document.body.style.overflow = "auto";
                            setmodalisOpen(false);
                        }}
                    >
                        X
                    </button>
                </div>

                <div className="addservicemodalsub_left">
                    <img src={addservicebanner} alt="" />
                </div>

                <div className="addservicemodalsub_right" id="addservicemodalsub_right">
                    <form >
                        <h1>Add your service</h1>



                        <div className=" inputdiv">
                            <label htmlFor="exampleInputEmail1" className="form-label">
                                Name
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                name="email"
                                placeholder='Eg. "Cleaning Services" or "Plumber"'

                            />

                        </div>


                        <div className=" inputdiv">
                            <label htmlFor="exampleInputPassword1" className="form-label">
                                Description
                            </label>
                            <textarea
                                className="form-control"
                                id="exampleInputPassword1"
                                name="password"
                                placeholder='Write a brief description of your service.'

                            />
                        </div>

                        <div className=" inputdiv">
                            <label htmlFor="exampleInputPassword1" className="form-label">
                                Areas you operate
                            </label>
                            <textarea
                                className="form-control"
                                id="exampleInputPassword1"
                                name="password"
                                placeholder='Eg: Greater kolkata area'

                            />
                        </div>

                        <label htmlFor="exampleInputPassword1" className="form-label">
                            Working days
                        </label>
                        <div className="inputdiv inputdiv_flex">

                            <input
                                className="form-control"
                                id="exampleInputPassword1"
                                name="password"
                                placeholder='Monday'

                            />
                            <input
                                className="form-control"
                                id="exampleInputPassword1"
                                name="password"
                                placeholder='10 AM - 6:30 PM'

                            />
                        </div>

                        <div className=" inputdiv">
                            <label htmlFor="exampleInputPassword1" className="form-label">
                                Hourly rate (in INR)
                            </label>
                            <input
                                className="form-control"
                                id="exampleInputPassword1"
                                name="password"
                                placeholder='Minimum 100 INR per hour.'

                            />
                        </div>

                        <div className=" inputdiv">
                            <label htmlFor="exampleInputPassword1" className="form-label">
                                Keywords
                            </label>
                            <input
                                className="form-control"
                                id="exampleInputPassword1"
                                name="password"
                                placeholder='cleaning, plumber, electrician, etc.'

                            />
                        </div>

                        <div className=" inputdiv">
                            <label htmlFor="exampleInputPassword1" className="form-label">
                                Thumbnail image
                            </label>
                            <input
                                className="form-control"
                                id="exampleInputPassword1"
                                name="password"
                                type='file'
                            />
                        </div>



                        <button type="submit" className="btn btn-primary"  >
                            Add
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}


export default Addmodal