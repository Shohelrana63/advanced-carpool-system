import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useRef } from 'react';
import "./Banner.css";
import FindTrips from './FindTrips';
const Banner = () => {
    const [searchTrip, setSearchTrip] = useState({
        startLocation:'',
        destination:'',
    });
    const[findTrip, setFindTrip] = useState([]);
    console.log("findTrip", findTrip);
    const handleBlur = e => {
        setSearchTrip({
            ...searchTrip,[e.target.name]:e.target.value
        })
    }
    const formRef = useRef(null);
    const handleSubmit = (e) => {
		e.preventDefault();
        console.log("searchTrip", searchTrip);
        fetch('http://localhost:8000/search', {
			method: 'POST',
            headers: { 'Content-Type': "application/json"},
			body: JSON.stringify(searchTrip)
		})
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            setFindTrip(data);
        })
		.catch((err) => {
            console.log(err);
		});
    }
    return (
        <div className="Banner container">
           <div className="Banner-title mt-5 text-center">
               <h2 style={{ 
                   fontWeight: "bold"
               }}>Find Your Trip</h2>
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
                <div className="myTrips-card row">
                {
                   findTrip.map(tripsData =>
                        <FindTrips tripsData={tripsData}
                            key={tripsData._id}></FindTrips>)
                }
              </div>
        </div>
    );
};

export default Banner;