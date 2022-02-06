import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import "./BookingTrip.css";
const BookingTrip = () => {
    return (
        <div className="bookingTrip container row">
            <div className="col-md-4">
			    <Sidebar />
			</div>
            <div className="col-md-8 mt-5">
                <div className="d-flex justify-content-between mb-4">
                    <h3 className="ml-md-5 mb-0">Booking Trip</h3>
					<p>Name</p>
                </div>
                <div className="bookingTrip-card mt-5">
                <div class="card border-info mb-3">
                    <div class="card-header">Booking Trip Details</div>
                    <div class="card-body">
                    <div className="row">
                        <div className="col">
                            <h5>Your Driver Name</h5>
                            <p>Arnob</p>
                        </div>
                        <div className="col">
                            <h5>Car Name</h5>
                            <p>Micro</p>
                        </div>
                        <div className="col">
                            <h5>Car Model Number</h5>
                            <p>02404</p>
                        </div>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingTrip;