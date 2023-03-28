import React from 'react'
import "./Howitworks.scss"
import uparrow from "../../../assets/howitworks/uparrow.png"
import one from "../../../assets/howitworks/one.svg";
import two from "../../../assets/howitworks/two.svg";
import three from "../../../assets/howitworks/three.svg";


const Howitworks = () => {
    return (
        <>

            <div className="howitworks_parent">

                <h1>How it works ?</h1>
                <hr />

                <div className="row">
                    <div className="col ">

                        <div className="iconround">
                            <div className="steps">01</div>
                            <img src={one} alt="" className='icons firsticon' />
                            <img src={uparrow} alt="" className='uparrow' />
                        </div>


                        <p className='col_title'>Choose from 50+ Services</p>
                        <p className='col_desc'>Choose your desired service from range of 50+ services.</p>
                    </div>
                    <div className="col ">
                        <div className="iconround">
                            <div className="steps">02</div>
                            <img src={two} alt="" className='icons secondicon' />
                            <img src={uparrow} alt="" className='downarrow' />
                        </div>

                        <p className='col_title'>Place your enquiry</p>
                        <p className='col_desc'>Place your enquiry by filling out form providing mandatory information.</p>
                    </div>
                    <div className="col ">
                        <div className="iconround">
                            <div className="steps">03</div>
                            <img src={three} alt="" className='icons thirdicon' />
                        </div>

                        <p className='col_title'>Sit back & Relax</p>
                        <p className='col_desc'>Our vendors/professional will get in touch with you to get your work done asap.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Howitworks