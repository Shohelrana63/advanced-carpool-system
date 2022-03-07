import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useRef } from 'react';
import "./DriverCreateTrip.css";
import Sidebar from '../Sidebar/Sidebar';

const DriverCreateTrip = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    console.log("usercrettrip", user);

    const[formData, setFormData] = useState({
        driverName: '', 
        carName:'', 
        carModelNumber:'',
        startLocation:'',
        destination:'',
        fare:'',
        seat:'',
        smoke:'',
        children:'',
        isConfirmed: false,
        uid:user.uid,
        confirmBy: ''
    });
    console.log(formData);
    const handleBlur = e => {
        setFormData({
            ...formData,[e.target.name]:e.target.value
        })
    }
    const formRef = useRef(null);

    const handleSubmit = (e) => {
        console.log("data", formData);
        e.preventDefault();
		fetch('http://localhost:8000/createTrips', {
			method: 'POST',
            headers: { 'Content-Type': "application/json"},
			body: JSON.stringify(formData)
		})
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
        })
		.catch((err) => {
            console.log(err);
		});
		formRef.current.reset();
    }

    return (
		<div className="createTrip container row">
            <div className="col-md-4">
			    <Sidebar />
			</div>
            <div className="col-md-8 mt-5">
                <div className="d-flex justify-content-between mb-4">
                    <h3 className="ml-md-5 mb-0">Create Trip</h3>
					{/* <p>Name:{user.email}</p> */}
                </div>
                <div className="createTrip-form mt-5">
                    <Form onSubmit={handleSubmit} ref={formRef}>
                    <div className="row">
                            <Form.Group className="col-12" controlId="formBasicText">
                                <Form.Label>Driver Name</Form.Label>
                                <Form.Control
                                    onBlur={handleBlur}
                                    name="driverName"
                                    type="text"
                                    className="form-control" 
                                    placeholder="Enter Your Name"
                                    required={true}
                                />
						    </Form.Group>
                        </div>
                    <div className="row">
                            <Form.Group className="col-6" controlId="formBasicText">
                                <Form.Label>Car Name</Form.Label>
                                <Form.Control
                                    onBlur={handleBlur}
                                    name="carName"
                                    type="text"
                                    className="form-control" 
                                    placeholder="Enter Your CarName"
                                    required={true}
                                />
						    </Form.Group>
                            <Form.Group className="col-6" controlId="formBasicText">
                                <Form.Label>Car Model Number</Form.Label>
                                <Form.Control
                                    onBlur={handleBlur}
                                    name="carModelNumber"
                                    type="text"
                                    className="form-control" 
                                    placeholder="Enter Car Model Number"
                                    required={true}
                                />
						    </Form.Group>
                        </div>
                        <div className="row">
                            <Form.Group className="col-6" controlId="formBasicText">
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
                            <Form.Group className="col-6" controlId="formBasicText">
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
                        </div>
                        <div className="row">
                            <Form.Group className="col-6" controlId="formBasicText">
                                <Form.Label>Fare</Form.Label>
                                <Form.Control
                                    onBlur={handleBlur}
                                    name="fare"
                                    type="text"
                                    className="form-control" 
                                    placeholder="Enter Fare"
                                    required={true}
                                />
						    </Form.Group>
                            <Form.Group className="col-6" controlId="formBasicText">
                                <Form.Label>Seat</Form.Label>
                                <Form.Control
                                    onBlur={handleBlur}
                                    name="seat"
                                    type="text"
                                    className="form-control" 
                                    placeholder="No. of Seat"
                                    required={true}
                                />
						    </Form.Group>
                        </div>
                        <div className="row">
                            <Form.Group className="col-6" controlId="formBasicText">
                                <Form.Label>Can Smoke</Form.Label>
                                <Form.Control
                                    onBlur={handleBlur}
                                    name="smoke"
                                    type="text"
                                    className="form-control" 
                                    placeholder="Can Smoke?"
                                    required={true}
                                />
						    </Form.Group>
                            <Form.Group className="col-6" controlId="formBasicText">
                                <Form.Label>Allow Children</Form.Label>
                                <Form.Control
                                    onBlur={handleBlur}
                                    name="children"
                                    type="text"
                                    className="form-control" 
                                    placeholder="Allow Children"
                                    required={true}
                                />
						    </Form.Group>
                        </div>
                        <div className="mt-3">
                                <button type="submit" className="btn">Create Trip</button>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default DriverCreateTrip;