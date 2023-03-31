import React from 'react'
import ServiceCard from '../../components/servicecard/ServiceCard';
import "./Services.scss"
import serviceimg from "../../assets/trending/mechanicservice.jpg";

const Services = () => {

    const [selected, setSelected] = React.useState(0);

    return (
        <>
            <div className="services_main">
                <div className="categories_div">
                    <div className="categories_btndiv">
                        <div>
                            <button className="btn" onClick={() => {
                                setSelected(0)
                            }} >Beauty & Hygeine</button>
                            {selected === 0 && <hr />}
                        </div>
                        <div>
                            <button className="btn" onClick={() => {
                                setSelected(1)
                            }} >Heavy works</button>
                            {selected === 1 && <hr />}
                        </div>
                        <div>
                            <button className="btn" onClick={() => {
                                setSelected(2)
                            }} >Cleaning services</button>
                            {selected === 2 && <hr />}
                        </div>
                        <div>
                            <button className="btn" onClick={() => {
                                setSelected(3)
                            }} >Others</button>
                            {selected === 3 && <hr />}
                        </div>
                    </div>

                    <div className="input-group ">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search for services"
                            aria-label="search input field"
                            aria-describedby="button-addon2"
                        />
                        <button
                            className="btn btn-outline-secondary"
                            type="button"
                            id="button-addon2"
                        >
                            Search
                        </button>
                    </div>
                </div>


                <div className='servicesdiv'>

                    <ServiceCard image={serviceimg} name="Car repairing" />
                    <ServiceCard image={serviceimg} name="Car repairing" />
                    <ServiceCard image={serviceimg} name="Car repairing" />
                    <ServiceCard image={serviceimg} name="Car repairing" />
                    <ServiceCard image={serviceimg} name="Car repairing" />
                    <ServiceCard image={serviceimg} name="Car repairing" />
                    <ServiceCard image={serviceimg} name="Car repairing" />
                    <ServiceCard image={serviceimg} name="Car repairing" />
                    <ServiceCard image={serviceimg} name="Car repairing" />
                    <ServiceCard image={serviceimg} name="Car repairing" />
                </div>
            </div>
        </>
    );
}

export default Services