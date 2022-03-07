import React from 'react';

const BookingTripDetail = ({bookingData}) => {
    return (
        <div>
           <div class="card border-info mt-5 mb-3">
                    <div class="card-header">Trip Details</div>
                    <div class="card-body">
                        <div className="row">
                        <div className="col-md-3">
                                <h6 class="card-title">Driver Name</h6>
                                <p>{bookingData.driverName}</p>
                            </div>
                        <div className="col-md-3">
                                <h6 class="card-title">Car Name</h6>
                                <p>{bookingData.carName}</p>
                            </div>
                            <div className="col-md-3">
                                <h6 class="card-title">Car Model Number</h6>
                                <p>{bookingData.carModelNumber}</p>
                            </div>
                            <div className="col-md-3">
                                <h6 class="card-title">Start Location</h6>
                                <p>{bookingData.startLocation}</p>
                            </div>
                            <div className="col-md-3">
                                <h6 class="card-title">Destination</h6>
                                <p>{bookingData.destination}</p>
                            </div>
                            <div className="col-md-3">
                                <h6 class="card-title">Fare</h6>
                                <p>{bookingData.fare}</p>
                            </div>
                            <div className="col-md-3">
                                <h6 class="card-title">Seat</h6>
                                <p>{bookingData.seat}</p>
                            </div>
                            <div className="col-md-3">
                                <h6 class="card-title">Can Smoke</h6>
                                <p>{bookingData.smoke}</p>
                            </div>
                            <div className="col-md-3">
                                <h6 class="card-title">Allow Children</h6>
                                <p>{bookingData.children}</p>
                            </div>
                        </div>
                    </div>
                </div> 
        </div>
    );
};

export default BookingTripDetail;