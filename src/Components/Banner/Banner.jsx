import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useRef } from 'react';
import "./Banner.css";
const Banner = () => {
    const [searchTrip, setSearchTrip] = useState({});

    const handleBlur = e => {
        const newSearchTrip = { ...searchTrip };
        newSearchTrip[e.target.name] = e.target.value;
        console.log("newSearchTrip: ", setSearchTrip(newSearchTrip) );
        setSearchTrip(newSearchTrip);
    }
    const formRef = useRef(null);
    const handleSubmit = (e) => {
		e.preventDefault();
        console.log("searchTrip", searchTrip);
        formRef.current.reset();
    }
    return (
        <div className="Banner container">
           <div className="Banner-title mt-5 text-center">
               <h2>Find Your Trip</h2>
           </div>
            <div className="search-form">
                    <Form onSubmit={handleSubmit} ref={formRef}>
                        <div className="row">
                            <Form.Group className="col-md-4" controlId="formBasicText">
                                <Form.Label>Start Location</Form.Label>
                                <Form.Control
                                    onBlur={handleBlur}
                                    name="startLocation"
                                    type="text"
                                    id="startLocation" 
                                    className="form-control" 
                                    placeholder="Enter Start Location"
                                    required={true}
                                />
						    </Form.Group>
                            <Form.Group className="col-md-4" controlId="formBasicText">
                                <Form.Label>Destination</Form.Label>
                                <Form.Control
                                    onBlur={handleBlur}
                                    name="destination"
                                    type="text"
                                    id="destination" 
                                    className="form-control" 
                                    placeholder="Enter Destination"
                                    required={true}
                                />
						    </Form.Group>
                        <div className="col-md-4">
                                <button type="submit" className="btn">Search</button>
                            </div>
                        </div>
                    </Form>
                </div>
        </div>
    );
};

export default Banner;